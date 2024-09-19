import { ComponentProps } from 'react'

export interface HeroSectionProps {
  className: string
}

// type HeroBgImageProps = ComponentProps<'div'>

// export function HeroBgImage(props: HeroBgImageProps) {
//   return (
//     <div
//       className="hero h-auto min-h-min w-full bg-hero-image-mobile bg-cover bg-fixed bg-center bg-no-repeat object-cover sm:bg-hero-image-desktop"
//       {...props}
//     />
//   )
// }

type HeroGradientProps = ComponentProps<'div'>

export function HeroGradient(props: HeroGradientProps) {
  return (
    <div
      className="absolute h-full w-full bg-gradient-to-r from-brandBlue900/80 from-30% to-brandBlue500/45 to-90% p-6 md:p-12 lg:px-16 lg:py-12"
      {...props}
    />
  )
}

type HeroRootProps = ComponentProps<'section'>

export function HeroRoot(props: HeroRootProps) {
  return <section className="relative h-auto overflow-hidden" {...props} />
}

type HeroSectionPropertyProps = ComponentProps<'div'>

export function HeroSectionProperty(props: HeroSectionPropertyProps) {
  return (
    <div className="mx-auto py-12 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-6xl lg:px-4 lg:py-24">
      <div className="flex flex-col items-center justify-between xl:flex-row">
        <div className="z-50 mb-0 w-full max-w-6xl p-4 xl:w-8/12" {...props} />
      </div>
    </div>
  )
}

type HeroH1Props = ComponentProps<'h1'>

export function HeroH1(props: HeroH1Props) {
  return (
    <h1
      style={{ textShadow: '0px 0px 2px #000000' }}
      className="z-50 mb-6 text-center text-3xl font-extrabold uppercase text-white sm:text-left sm:text-5xl md:mx-auto"
      {...props}
    />
  )
}

type HeroSectionSpanProps = ComponentProps<'span'>

export function HeroSectionSpan(props: HeroSectionSpanProps) {
  return <span className="z-50 text-yellow-100 sm:block" {...props} />
}

type HeroParagraphProps = ComponentProps<'p'>

export function HeroParagraph(props: HeroParagraphProps) {
  return (
    <p
      className="z-50 text-center text-sm font-semibold text-white/85 sm:text-left sm:text-lg md:block"
      {...props}
    />
  )
}

type HeroParagraphStrongProps = ComponentProps<'p'>

export function HeroParagraphStrong(props: HeroParagraphStrongProps) {
  return (
    <p
      className="z-50 text-center text-sm font-extrabold text-yellow-100 sm:text-left sm:text-lg md:block"
      {...props}
    />
  )
}

type HeroStrongProps = ComponentProps<'strong'>

export function HeroStrong(props: HeroStrongProps) {
  return <strong className="font-extrabold text-yellow-100" {...props} />
}

type HeroImageProps = ComponentProps<'div'>

export function HeroImage(props: HeroImageProps) {
  return (
    <div className="z-50 mx-auto max-w-5xl">
      <div className="z-50 flex justify-center sm:flex-none sm:justify-start">
        <div className="z-50 -mt-10 block pb-8" {...props} />
      </div>
    </div>
  )
}
type HeroDivideProps = ComponentProps<'div'>

export function HeroDivide(props: HeroDivideProps) {
  return (
    <span className="relative flex justify-center py-6">
      <div
        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-75"
        {...props}
      />
    </span>
  )
}
