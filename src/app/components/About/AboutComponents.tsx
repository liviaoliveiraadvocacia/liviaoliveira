import { ComponentProps } from 'react'

export interface AboutComponents {
  className: string
}

type AboutSectionProps = ComponentProps<'section'>

export function AboutSection(props: AboutSectionProps) {
  return (
    <section
      className="relative flex flex-col-reverse bg-brandBlue900 bg-scroll py-16 lg:flex-col lg:pb-0 lg:pt-0"
      {...props}
    />
  )
}

type AboutPropertySVGImgProps = ComponentProps<'div'>

export function AboutPropertySVGImg(props: AboutPropertySVGImgProps) {
  return (
    <div
      className="inset-y-0 right-0 top-0 z-0 mx-auto w-full max-w-xl px-4 md:px-0 lg:absolute lg:mx-0 lg:mb-0 lg:w-2/4 lg:max-w-full lg:pr-0 xl:pb-0"
      {...props}
    />
  )
}

type AboutSVGProps = ComponentProps<'path'>

export function AboutSVG(props: AboutSVGProps) {
  return (
    <svg
      className="absolute left-0 hidden h-full -translate-x-1/2 transform text-brandBlue900 lg:block"
      viewBox="0 0 100 100"
      fill="currentColor"
      preserveAspectRatio="none slice"
    >
      <path d="M50 0H100L50 100H0L50 0Z" {...props} />
    </svg>
  )
}

type AboutTextPropertyProps = ComponentProps<'div'>

export function AboutTextProperty(props: AboutTextPropertyProps) {
  return (
    <div className="relative mx-auto flex w-full max-w-5xl flex-col items-start px-4 md:px-0 lg:max-w-6xl lg:px-8">
      <div
        className="mb-8 p-4 text-center sm:p-8 sm:text-left lg:my-16 lg:max-w-lg lg:pr-5"
        {...props}
      />
    </div>
  )
}

type AboutParagraphaboutProps = ComponentProps<'p'>

export function AboutParagraphabout(props: AboutParagraphaboutProps) {
  return (
    <p
      className="mb-4 inline-block rounded-full bg-white px-3 py-px text-xs font-semibold uppercase tracking-wider text-stone-900"
      {...props}
    />
  )
}

type AboutH1Props = ComponentProps<'h1'>

export function AboutH1(props: AboutH1Props) {
  return (
    <h1
      className="pb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
      {...props}
    />
  )
}

type AboutParagraphOABProps = ComponentProps<'p'>

export function AboutParagraphOAB(props: AboutParagraphOABProps) {
  return (
    <p
      className="inline-block pb-4 text-base font-light text-white"
      {...props}
    />
  )
}

type AboutArticleProps = ComponentProps<'article'>

export function AboutArticle(props: AboutArticleProps) {
  return <article className="text-wrap" {...props} />
}

type AboutParagraphArticleOneProps = ComponentProps<'p'>

export function AboutParagraphArticleOne(props: AboutParagraphArticleOneProps) {
  return (
    <p
      className="pb-5 pr-5 text-sm font-semibold text-white md:text-lg"
      {...props}
    />
  )
}

type AboutParagraphArticleTwoProps = ComponentProps<'p'>

export function AboutParagraphArticleTwo(props: AboutParagraphArticleTwoProps) {
  return (
    <p
      className="pb-2 pr-5 text-sm font-semibold text-white md:text-lg"
      {...props}
    />
  )
}

type AboutDivFlexItensProps = ComponentProps<'div'>

export function AboutDivFlexItens(props: AboutDivFlexItensProps) {
  return <div className="flex items-center pt-4 md:pb-2" {...props} />
}
