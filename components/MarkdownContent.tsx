'use client'

import JustifiedRow from './JustifiedRow'

interface Props {
  content: string
  slug: string
  title: string
}

function parseLine(line: string): React.ReactNode {
  // Bold, italic inline parsing
  const parts = line.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) return <strong key={i}>{p.slice(2, -2)}</strong>
    if (p.startsWith('*') && p.endsWith('*')) return <em key={i}>{p.slice(1, -1)}</em>
    // links [text](url)
    const linkMatch = p.match(/\[([^\]]+)\]\(([^)]+)\)/)
    if (linkMatch) return <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer">{linkMatch[1]}</a>
    return p
  })
}

export default function MarkdownContent({ content, slug, title }: Props) {
  const lines = content.split('\n')
  const nodes: React.ReactNode[] = []
  let i = 0
  let listItems: React.ReactNode[] = []

  const flushList = () => {
    if (listItems.length) {
      nodes.push(<ul key={`ul-${nodes.length}`}>{listItems}</ul>)
      listItems = []
    }
  }

  while (i < lines.length) {
    const line = lines[i]

    // Code block
    if (line.trim() === '```') {
      flushList()
      const codeLines: string[] = []
      i++
      while (i < lines.length && lines[i].trim() !== '```') {
        codeLines.push(lines[i])
        i++
      }
      const codeContent = codeLines.join('\n').trim()
      const imgMatch = codeContent.match(/^img:([\d,.\w]+)$/)
      if (imgMatch) {
        const parts = imgMatch[1].split(',').map(n => n.trim())
        const srcs = parts.map(part => {
          const hasExt = /\.\w+$/.test(part)
          const num = hasExt ? part.replace(/\.\w+$/, '') : part
          const ext = hasExt ? part.match(/\.(\w+)$/)?.[1] : 'webp'
          return `/images/${slug}/image-${num.padStart(3, '0')}.${ext}`
        })
        if (srcs.length === 1) {
          nodes.push(
            <div key={`img-${nodes.length}`} className="content-images content-images--single">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={srcs[0]} alt={title} loading="lazy" />
            </div>
          )
        } else {
          nodes.push(
            <div key={`img-${nodes.length}`} className="content-images">
              <JustifiedRow srcs={srcs} gap={6} />
            </div>
          )
        }
      }
      i++
      continue
    }

    // Divider
    if (line.trim() === '---') {
      flushList()
      nodes.push(<hr key={`hr-${nodes.length}`} />)
      i++
      continue
    }

    // Headings
    if (line.startsWith('### ')) {
      flushList()
      nodes.push(<h3 key={`h3-${nodes.length}`}>{parseLine(line.slice(4))}</h3>)
      i++
      continue
    }
    if (line.startsWith('## ')) {
      flushList()
      nodes.push(<h2 key={`h2-${nodes.length}`}>{parseLine(line.slice(3))}</h2>)
      i++
      continue
    }
    if (line.startsWith('# ')) {
      flushList()
      nodes.push(<h1 key={`h1-${nodes.length}`}>{parseLine(line.slice(2))}</h1>)
      i++
      continue
    }

    // List item
    if (line.match(/^[-*] /)) {
      listItems.push(<li key={`li-${i}`}>{parseLine(line.slice(2))}</li>)
      i++
      continue
    }

    // Empty line
    if (line.trim() === '') {
      flushList()
      i++
      continue
    }

    // Paragraph
    flushList()
    nodes.push(<p key={`p-${nodes.length}`}>{parseLine(line)}</p>)
    i++
  }

  flushList()

  return <div className="project-content">{nodes}</div>
}
