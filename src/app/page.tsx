import { BgGradientColor } from './components/SectionColor/BgGradient'
import { Hero } from './components/Hero'
import { Card } from './components/Cards'
import { Benefits } from './components/Benefits'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { SocialProve } from './components/SocialProve'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { ButtonFloatWttp } from './components/Buttons'

export default function Home() {
  return (
    <>
      <BgGradientColor>
        <Hero />
        <Stats />
        <Card />
        <Benefits />
        <SocialProve />
        <About />
        <Faq />
        <ButtonFloatWttp />
      </BgGradientColor>
      <Footer />
    </>
  )
}
