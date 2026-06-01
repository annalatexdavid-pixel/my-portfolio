'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  srcs: string[]
  targetHeight?: number
  gap?: number
}

export default function JustifiedRow({ srcs, targetHeight = 360, gap = 6 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dims, setDims] = useState<{ w: number; h: number }[]>([])

  useEffect(() => {
    let cancelled = false

    Promise.all(
      srcs.map(
        src =>
          new Promise<number>(resolve => {
            const img = new Image()
            img.onload = () => resolve(img.naturalWidth / img.naturalHeight)
            img.onerror = () => resolve(16 / 9)
            img.src = src
          })
      )
    ).then(ratios => {
      if (cancelled || !containerRef.current) return

      const containerW = containerRef.current.clientWidth
      const totalGap = gap * (srcs.length - 1)
      // scale so all images share same height and total width = containerW
      const sumRatios = ratios.reduce((a, b) => a + b, 0)
      const h = (containerW - totalGap) / sumRatios
      setDims(ratios.map(r => ({ w: r * h, h })))
    })

    return () => { cancelled = true }
  }, [srcs, gap])

  return (
    <div
      ref={containerRef}
      style={{ display: 'flex', gap, width: '100%', alignItems: 'flex-start' }}
    >
      {srcs.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt=""
          loading="lazy"
          style={{
            width: dims[i]?.w ?? 'auto',
            height: dims[i]?.h ?? 'auto',
            display: 'block',
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  )
}
