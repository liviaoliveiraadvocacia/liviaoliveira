import { ComponentProps } from 'react'

export interface ButtonCta {
  className: string
}

type ButtonHomeProps = ComponentProps<'a'>

export function ButtonHome(props: ButtonHomeProps) {
  return (
    <div className="my-8 flex w-full justify-center sm:justify-start">
      <a
        aria-label="Clique no botão"
        className="focus:shadow-outline z-50 inline-flex h-14 w-full items-center justify-center rounded-full bg-brandWts px-8 font-medium text-white shadow-sm shadow-black/30 delay-0 duration-75 ease-in-out hover:scale-105 hover:border-2 hover:border-white hover:bg-transparent hover:transition-opacity focus:outline-none sm:h-14 md:w-auto"
        {...props}
      />
    </div>
  )
}

type ButtonHomeFlexProps = ComponentProps<'div'>

export function ButtonHomeFlex(props: ButtonHomeFlexProps) {
  return <div className="flex items-center" {...props} />
}

type ButtonHomeTextProps = ComponentProps<'div'>

export function ButtonHomeText(props: ButtonHomeTextProps) {
  return (
    <div
      className="mr-3 text-center text-base font-medium uppercase text-white sm:text-left sm:text-lg"
      {...props}
    />
  )
}

type ButtonFloatProps = ComponentProps<'a'>

export function ButtonFloat(props: ButtonFloatProps) {
  return (
    <div className="fixed bottom-4 right-4 z-[100] flex h-24 w-24 items-end justify-end p-2 hover:-translate-x-0 hover:scale-110 hover:transition-all hover:duration-300">
      <div className="absolute z-50 flex items-center justify-center rounded-full bg-brandWts p-4 text-white shadow-sm shadow-black/30 hover:transition-all focus:outline-none">
        <a
          className="decoration-transparent"
          aria-label="Clique no botão"
          {...props}
        />
      </div>
    </div>
  )
}
