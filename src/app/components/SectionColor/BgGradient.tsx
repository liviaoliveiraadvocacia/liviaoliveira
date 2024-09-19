import { ComponentProps } from 'react'

export interface BgGradientProps {
  className: string
}

type BgGradientColorProps = ComponentProps<'div'>

export function BgGradientColor(props: BgGradientColorProps) {
  return (
    <>
      <div
        className="bg-gradient-to-r from-brandBlue900 via-brandBlue500 to-brandBlue500/60"
        {...props}
      />
    </>
  )
}
