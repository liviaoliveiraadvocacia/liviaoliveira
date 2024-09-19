import { ComponentProps } from 'react'

export interface FaqSectionsProps {
  className: string
}

type FaqSectionsRootProps = ComponentProps<'section'>

export function FaqSectionsRoot(props: FaqSectionsRootProps) {
  return (
    <section
      className="mx-auto px-4 py-8 sm:max-w-xl sm:py-10 md:max-w-full md:px-24 lg:max-w-6xl lg:px-8 lg:py-14"
      {...props}
    />
  )
}

type FaqH1Props = ComponentProps<'h1'>

export function FaqH1(props: FaqH1Props) {
  return (
    <h1
      style={{ textShadow: '0px 0px 2px #000000' }}
      className="mb-6 max-w-5xl p-2 pt-8 text-center font-sans text-4xl font-semibold uppercase text-white sm:text-5xl md:mx-auto"
      {...props}
    />
  )
}

type FaqParagraphProps = ComponentProps<'p'>

export function FaqParagraph(props: FaqParagraphProps) {
  return (
    <p
      style={{ textShadow: '0px 0px 2px #000000' }}
      className="text-center text-sm font-medium text-white sm:text-lg md:mt-2 md:block"
      {...props}
    />
  )
}

type FaqSpanProps = ComponentProps<'span'>

export function FaqSpan(props: FaqSpanProps) {
  return <span className="font-extrabold text-yellow-100" {...props} />
}

type FaqSpaceProps = ComponentProps<'div'>

export function FaqSpace(props: FaqSpaceProps) {
  return <div className="space-y-4" {...props} />
}

type FaqDetailsProps = ComponentProps<'details'>

export function FaqDetails(props: FaqDetailsProps) {
  return (
    <details
      className="group rounded-lg bg-yellow-100 p-4 shadow-sm shadow-black/30 backdrop-blur-lg [&_summary::-webkit-details-marker]:hidden"
      open={false}
      {...props}
    />
  )
}

type FaqSummaryProps = ComponentProps<'summary'>

export function FaqSummary(props: FaqSummaryProps) {
  return (
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5"
      {...props}
    />
  )
}

type FaqSummaryH1Props = ComponentProps<'h1'>

export function FaqSummaryH1(props: FaqSummaryH1Props) {
  return (
    <h1 className="text-sm font-bold text-brandBlue500 sm:text-xl" {...props} />
  )
}

type FaqSummarySpanIconProps = ComponentProps<'span'>

export function FaqSummarySpanIcon(props: FaqSummarySpanIconProps) {
  return (
    <span
      className="shrink-0 rounded-full border border-white/20  bg-brandBlue500/20 p-1.5 text-brandBlue500 shadow-lg transition duration-300 ease-in-out sm:p-3"
      {...props}
    />
  )
}

type FaqDetailsParagraphProps = ComponentProps<'p'>

export function FaqDetailsParagraph(props: FaqDetailsParagraphProps) {
  return (
    <p className="mt-4 text-sm leading-relaxed text-brandBlue500" {...props} />
  )
}
