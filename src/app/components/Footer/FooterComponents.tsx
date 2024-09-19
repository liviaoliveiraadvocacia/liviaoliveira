import { ComponentProps } from 'react'

export interface FooterProps {
  className: string
}

type FooterBgProps = ComponentProps<'footer'>

export function FooterBg(props: FooterBgProps) {
  return (
    <>
      <footer className="bg-brandBlue900" {...props} />
    </>
  )
}

type FooterPropertyProps = ComponentProps<'div'>

export function FooterProperty(props: FooterPropertyProps) {
  return (
    <>
      <div
        className="mx-auto max-w-5xl px-4 py-16 pb-12 sm:px-6 lg:px-8"
        {...props}
      />
    </>
  )
}

type FooterH1Props = ComponentProps<'h1'>

export function FooterH1(props: FooterH1Props) {
  return (
    <>
      <h1
        className="mx-auto mb-8 max-w-6xl text-center text-xl italic leading-relaxed text-white"
        {...props}
      />
    </>
  )
}

type FooterImgPropertyProps = ComponentProps<'div'>

export function FooterImgProperty(props: FooterImgPropertyProps) {
  return (
    <>
      <div className="flex justify-center pt-8" {...props} />
    </>
  )
}

type FooterParagraphLiviaProps = ComponentProps<'p'>

export function FooterParagraphLivia(props: FooterParagraphLiviaProps) {
  return (
    <>
      <p
        className="mx-auto max-w-6xl pt-6 text-center text-xl leading-relaxed text-white"
        {...props}
      />
    </>
  )
}

type FooterParagraphLiviaOabProps = ComponentProps<'p'>

export function FooterParagraphLiviaOab(props: FooterParagraphLiviaOabProps) {
  return (
    <>
      <p
        className="mx-auto max-w-6xl text-center text-xl leading-relaxed text-white"
        {...props}
      />
    </>
  )
}

type FooterSpaceProps = ComponentProps<'div'>

export function FooterSpace(props: FooterSpaceProps) {
  return (
    <>
      <div className="mx-auto max-w-5xl space-y-2 pb-8 text-left" {...props} />
    </>
  )
}

type FooterUlProps = ComponentProps<'ul'>

export function FooterUl(props: FooterUlProps) {
  return (
    <>
      <ul
        className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6"
        {...props}
      />
    </>
  )
}

type FooterLiProps = ComponentProps<'li'>

export function FooterLi(props: FooterLiProps) {
  return (
    <>
      <li {...props} />
    </>
  )
}

type FooterParagraphContactProps = ComponentProps<'p'>

export function FooterParagraphContact(props: FooterParagraphContactProps) {
  return (
    <>
      <p
        className="text-center text-base font-bold tracking-wide text-white sm:text-left"
        {...props}
      />
    </>
  )
}

type FooterFlexProps = ComponentProps<'div'>

export function FooterFlex(props: FooterFlexProps) {
  return (
    <>
      <div className="justify-center sm:justify-start" {...props} />
    </>
  )
}

type FooterLabelContactProps = ComponentProps<'p'>

export function FooterLabelContact(props: FooterLabelContactProps) {
  return (
    <>
      <p className="text-brandOrange mr-1" {...props} />
    </>
  )
}

type FooterAllRightsProps = ComponentProps<'div'>

export function FooterAllRights(props: FooterAllRightsProps) {
  return (
    <>
      <div className="bg-brandBlue500">
        <div className="mx-auto max-w-5xl p-4 pt-10" {...props} />
      </div>
    </>
  )
}

type FooterAllRightsParagraphProps = ComponentProps<'p'>

export function FooterAllRightsParagraph(props: FooterAllRightsParagraphProps) {
  return (
    <>
      <p className="text-center text-sm text-white" {...props} />
    </>
  )
}

type FooterAllRightsParagraphEndProps = ComponentProps<'p'>

export function FooterAllRightsParagraphEnd(
  props: FooterAllRightsParagraphEndProps,
) {
  return (
    <>
      <p className="pb-5 pt-10 text-center text-sm text-white" {...props} />
    </>
  )
}

type FooterPoliticsPropertyParagraphProps = ComponentProps<'p'>

export function FooterPoliticsPropertyParagraph(
  props: FooterPoliticsPropertyParagraphProps,
) {
  return (
    <>
      <p className="text-center text-sm text-white" {...props} />
    </>
  )
}

type FooterButtonPropertyProps = ComponentProps<'div'>

export function FooterButtonProperty(props: FooterButtonPropertyProps) {
  return <div className="w-auto justify-center sm:justify-start" {...props} />
}

type FooterButtonAnchorProps = ComponentProps<'a'>

export function FooterButtonAnchor(props: FooterButtonAnchorProps) {
  return (
    <a
      target="_blank"
      aria-label="Clique no botão"
      className="focus:shadow-outline inline-flex h-16 w-full items-center justify-center rounded-md bg-transparent px-4 py-6 font-medium tracking-wide text-white shadow-lg hover:bg-brandBlue500/10 hover:transition-colors focus:outline-none sm:h-14 md:w-auto"
      {...props}
    />
  )
}

type FooterButtonFlexProps = ComponentProps<'div'>

export function FooterButtonFlex(props: FooterButtonFlexProps) {
  return <div className="flex items-center" {...props} />
}

type FooterFlexJustifyCenterProps = ComponentProps<'div'>

export function FooterFlexJustifyCenter(props: FooterFlexJustifyCenterProps) {
  return <div className="mb-2 flex justify-center" {...props} />
}

type FooterButtonTextProps = ComponentProps<'div'>

export function FooterButtonText(props: FooterButtonTextProps) {
  return (
    <div
      className="ml-3 font-semibold text-white sm:text-wrap sm:text-base"
      {...props}
    />
  )
}
