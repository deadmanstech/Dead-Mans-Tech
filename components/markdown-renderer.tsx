"use client"

import { motion } from "framer-motion"
import type { JSX } from "react"

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const renderMarkdown = (markdown: string) => {
    const lines = markdown.split("\n")
    const elements: JSX.Element[] = []
    let inCodeBlock = false
    let codeBlockContent: string[] = []
    let codeBlockLang = ""
    let inTable = false
    let tableHeaders: string[] = []
    let tableRows: string[][] = []
    let listItems: string[] = []
    let inList = false

    const processInlineFormatting = (text: string) => {
      // Process inline code
      text = text.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">$1</code>')
      // Process bold
      text = text.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold">$1</strong>')
      // Process italic
      text = text.replace(/\*([^*]+)\*/g, "<em>$1</em>")
      // Process links
      text = text.replace(/\[([^\]]+)\]$$([^)]+)$$/g, '<a href="$2" class="text-accent hover:underline">$1</a>')
      return text
    }

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="my-4 ml-6 list-disc space-y-2">
            {listItems.map((item, i) => (
              <li
                key={i}
                className="text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: processInlineFormatting(item) }}
              />
            ))}
          </ul>,
        )
        listItems = []
        inList = false
      }
    }

    const flushTable = () => {
      if (tableHeaders.length > 0) {
        elements.push(
          <div key={`table-${elements.length}`} className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  {tableHeaders.map((header, i) => (
                    <th key={i} className="px-4 py-3 text-left text-sm font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className="border-b border-border">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-sm text-muted-foreground">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        )
        tableHeaders = []
        tableRows = []
        inTable = false
      }
    }

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()

      // Code blocks
      if (trimmedLine.startsWith("```")) {
        if (inCodeBlock) {
          flushList()
          elements.push(
            <pre
              key={`code-${index}`}
              className="my-6 p-4 bg-primary text-primary-foreground rounded-xl overflow-x-auto"
            >
              <code className="text-sm font-mono">{codeBlockContent.join("\n")}</code>
            </pre>,
          )
          codeBlockContent = []
          inCodeBlock = false
        } else {
          flushList()
          inCodeBlock = true
          codeBlockLang = trimmedLine.slice(3)
        }
        return
      }

      if (inCodeBlock) {
        codeBlockContent.push(line)
        return
      }

      // Tables
      if (trimmedLine.startsWith("|") && trimmedLine.endsWith("|")) {
        flushList()
        const cells = trimmedLine
          .slice(1, -1)
          .split("|")
          .map((c) => c.trim())

        if (cells.every((c) => /^[-:]+$/.test(c))) {
          // This is the separator row
          return
        }

        if (!inTable) {
          inTable = true
          tableHeaders = cells
        } else {
          tableRows.push(cells)
        }
        return
      } else if (inTable) {
        flushTable()
      }

      // Headers
      if (trimmedLine.startsWith("# ")) {
        flushList()
        elements.push(
          <h1 key={index} className="text-3xl sm:text-4xl font-semibold mt-8 mb-4 first:mt-0">
            {trimmedLine.slice(2)}
          </h1>,
        )
        return
      }

      if (trimmedLine.startsWith("## ")) {
        flushList()
        elements.push(
          <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">
            {trimmedLine.slice(3)}
          </h2>,
        )
        return
      }

      if (trimmedLine.startsWith("### ")) {
        flushList()
        elements.push(
          <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
            {trimmedLine.slice(4)}
          </h3>,
        )
        return
      }

      // Blockquotes
      if (trimmedLine.startsWith("> ")) {
        flushList()
        elements.push(
          <blockquote key={index} className="my-6 pl-4 border-l-4 border-accent italic text-muted-foreground">
            <p dangerouslySetInnerHTML={{ __html: processInlineFormatting(trimmedLine.slice(2)) }} />
          </blockquote>,
        )
        return
      }

      // Lists
      if (trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ")) {
        inList = true
        listItems.push(trimmedLine.slice(2))
        return
      }

      // Numbered lists
      if (/^\d+\.\s/.test(trimmedLine)) {
        inList = true
        listItems.push(trimmedLine.replace(/^\d+\.\s/, ""))
        return
      }

      // Flush list if we're no longer in one
      if (inList && trimmedLine !== "") {
        flushList()
      }

      // Paragraphs
      if (trimmedLine !== "") {
        elements.push(
          <p
            key={index}
            className="my-4 text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: processInlineFormatting(trimmedLine) }}
          />,
        )
      }
    })

    // Flush any remaining list or table
    flushList()
    flushTable()

    return elements
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="prose prose-lg max-w-none"
    >
      {renderMarkdown(content)}
    </motion.article>
  )
}
