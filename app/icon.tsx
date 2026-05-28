import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 64,
  height: 64,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #111111 60%, #1a1f33 100%)',
          color: '#ffffff',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
          fontSize: 32,
          fontWeight: 800,
          letterSpacing: -1,
          borderRadius: 14,
          border: '2px solid rgba(100, 136, 234, 0.6)',
          boxShadow: 'inset 0 0 12px rgba(100, 136, 234, 0.2)',
          position: 'relative',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', lineHeight: 1 }}>
          IB
        </span>
        <div
          style={{
            position: 'absolute',
            bottom: 7,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 14,
            height: 2,
            background: '#6488ea',
            borderRadius: 1,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
