// Splits each content/projects/[slug].yaml into:
//   content/projects/[slug].yaml  (metadata only, no content key)
//   content/projects/[slug].mdoc  (the markdown content)
import { readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'

const dir = new URL('../content/projects', import.meta.url).pathname

const files = (await readdir(dir)).filter(f => f.endsWith('.yaml'))

for (const file of files) {
  const slug = file.replace('.yaml', '')
  const yamlPath = join(dir, file)
  const mdocPath = join(dir, slug + '.mdoc')
  const raw = await readFile(yamlPath, 'utf-8')

  // Find the content: | block and extract it
  const contentBlockMatch = raw.match(/^content:\s*\|\n([\s\S]*)$/m)

  if (contentBlockMatch) {
    // De-indent the block (2-space indent from YAML literal block)
    const content = contentBlockMatch[1]
      .split('\n')
      .map(l => (l.startsWith('  ') ? l.slice(2) : l))
      .join('\n')
      .trim()

    await writeFile(mdocPath, content + '\n', 'utf-8')

    // Remove content block from YAML
    const newYaml = raw.replace(/^content:\s*\|\n[\s\S]*$/m, '').trimEnd() + '\n'
    await writeFile(yamlPath, newYaml, 'utf-8')

    console.log(`✓ ${slug}`)
  } else {
    // No content field — write empty mdoc
    await writeFile(mdocPath, '\n', 'utf-8')
    console.log(`  ${slug} (no content)`)
  }
}

console.log('\nDone.')
