import { ComponentProps } from 'react'

export interface StatsProps {
  className: string
}

type StatsSectionProps = ComponentProps<'section'>

export function StatsSection(props: StatsSectionProps) {
  return (
    <section
      className="relative z-50 mx-auto -mt-28 px-4 py-8 sm:-mt-32 sm:max-w-xl sm:py-10 md:max-w-full md:px-24 lg:max-w-6xl lg:px-8 lg:py-14"
      {...props}
    />
  )
}

type StatsPropertyProps = ComponentProps<'div'>

export function StatsProperty(props: StatsPropertyProps) {
  return <div className="mx-auto max-w-3xl text-center" {...props} />
}

type StatsH1Props = ComponentProps<'h1'>

export function StatsH1(props: StatsH1Props) {
  return (
    <h1
      style={{ textShadow: '0px 0px 2px #000000' }}
      className="mb-6 max-w-5xl p-2 pt-8 text-center font-sans text-4xl font-semibold uppercase text-white sm:text-5xl md:mx-auto"
      {...props}
    />
  )
}

type StatsSpanProps = ComponentProps<'h1'>

export function StatsSpan(props: StatsSpanProps) {
  return <span className="font-extrabold text-yellow-100" {...props} />
}

type StatsParagraphProps = ComponentProps<'p'>

export function StatsParagraph(props: StatsParagraphProps) {
  return (
    <p
      style={{ textShadow: '0px 0px 2px #000000' }}
      className="text-center text-sm font-medium text-white sm:text-lg md:mt-2 md:block"
      {...props}
    />
  )
}
