import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '../Buttons/ButtonCta'
import {
  AboutArticle,
  AboutDivFlexItens,
  AboutH1,
  AboutParagraphArticleOne,
  AboutParagraphArticleTwo,
  AboutParagraphOAB,
  AboutParagraphabout,
  AboutPropertySVGImg,
  AboutSVG,
  AboutSection,
  AboutTextProperty,
} from './AboutComponents'
import Image from 'next/image'
import AboutLivia from '@/app/assets/images/liviaimg.avif'

export function About() {
  return (
    <>
      <AboutSection>
        <AboutPropertySVGImg>
          <AboutSVG />
          <Image
            alt="Imagem"
            src={AboutLivia}
            className="h-72 w-full rounded-xl object-cover shadow-lg md:h-96 lg:h-full lg:rounded-none lg:shadow-none"
            loading="lazy"
            width={1080}
            height={1080}
            sizes='"(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"'
          />
        </AboutPropertySVGImg>
        <AboutTextProperty>
          <AboutParagraphabout>Sobre a Especialista</AboutParagraphabout>
          <AboutH1>Dra Lívia Oliveira</AboutH1>
          <AboutParagraphOAB>OAB/MG 102.238</AboutParagraphOAB>
          <AboutArticle>
            <AboutParagraphArticleOne>
              Especialista em DIREITO PREVIDENCIÁRIO, com 15 anos de
              experiência, vários cursos de especialização e capacitação
              profissional. Cuidamos de todos os detalhes do seu benefício, não
              importa o tamanho do problema, vamos tratar com seriedade e
              profissionalismo, dando uma solução especializada e fazendo toda a
              diferença na hora de agilizar e no resultado do seu processo.
            </AboutParagraphArticleOne>
            <AboutParagraphArticleTwo>
              Nosso escritório dedica em especial, à defesa dos direitos dos
              segurados, aposentados e pensionistas da Previdência Social (INSS
              e Servidor Público) para garantir os seus direitos.
            </AboutParagraphArticleTwo>
          </AboutArticle>
          <AboutDivFlexItens>
            <ButtonHome href="https://api.whatsapp.com/send?phone=5531992258880&text=Ol%C3%A1,%20tudo%20bem?%20Preciso%20falar%20com%20um%20Advogado%20Especialista%20em%20Direito%20Previdenci%C3%A1rio.%20Pode%20me%20ajudar?">
              <ButtonHomeText>clique e fale comigo</ButtonHomeText>
              <ButtonHomeFlex>
                <WhatsappLogo size={24} weight="fill" />
              </ButtonHomeFlex>
            </ButtonHome>
          </AboutDivFlexItens>
        </AboutTextProperty>
      </AboutSection>
    </>
  )
}
