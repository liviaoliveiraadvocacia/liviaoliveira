import Image from 'next/image'
import { HeroDivide } from '../Hero/HeroComponents'
import {
  FooterAllRights,
  FooterAllRightsParagraph,
  FooterAllRightsParagraphEnd,
  FooterBg,
  FooterButtonAnchor,
  FooterButtonFlex,
  FooterButtonProperty,
  FooterButtonText,
  FooterFlex,
  FooterFlexJustifyCenter,
  FooterH1,
  FooterImgProperty,
  FooterLabelContact,
  FooterLi,
  FooterParagraphLivia,
  FooterParagraphLiviaOab,
  FooterProperty,
  FooterSpace,
  FooterUl,
} from './FooterComponents'
import { At, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import LogoLiviaHero from '@/app/assets/images/logo-livia.png'

export function Footer() {
  return (
    <>
      <FooterBg>
        <FooterProperty>
          <FooterH1>
            &ldquo;Meu trabalho é uma das minhas grandes paixões,{' '}
            <strong>
              meu compromisso é atuar com valor a ética, comprometimento,
              pessoalidade e excelência,
            </strong>{' '}
            compartilhando tudo que aprendi ao longo do meu caminho.&rdquo;
          </FooterH1>
          <HeroDivide />
          <FooterImgProperty>
            <Image
              alt="Imagem"
              src={LogoLiviaHero}
              width={180}
              height={100}
              loading="lazy"
              className="w-48 md:w-auto lg:w-52"
              sizes='"(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"'
            />
          </FooterImgProperty>
          <FooterParagraphLivia>Lívia Oliveira</FooterParagraphLivia>
          <FooterParagraphLiviaOab>OAB/MG 102.238</FooterParagraphLiviaOab>
        </FooterProperty>
        <FooterFlexJustifyCenter>
          <FooterSpace>
            <FooterUl>
              <FooterLi>
                <FooterFlex>
                  <FooterButtonProperty>
                    <FooterButtonAnchor href="https://api.whatsapp.com/send?phone=5531992258880&text=Ol%C3%A1,%20tudo%20bem?%20Preciso%20falar%20com%20um%20Advogado%20Especialista%20em%20Direito%20Previdenci%C3%A1rio.%20Pode%20me%20ajudar?">
                      <FooterButtonFlex>
                        <WhatsappLogo size={32} weight="fill" />
                        <FooterButtonText>
                          <FooterLabelContact>Whatsapp:</FooterLabelContact>
                          (31) 99225-8880
                        </FooterButtonText>
                      </FooterButtonFlex>
                    </FooterButtonAnchor>
                  </FooterButtonProperty>
                </FooterFlex>
              </FooterLi>
              <FooterLi>
                <FooterFlex>
                  <FooterButtonProperty>
                    <FooterButtonAnchor href="mailto:liviaoli.adv@gmail.com">
                      <FooterButtonFlex>
                        <At size={32} weight="fill" />
                        <FooterButtonText>
                          <FooterLabelContact>Email:</FooterLabelContact>
                          liviaoli.adv@gmail.com
                        </FooterButtonText>
                      </FooterButtonFlex>
                    </FooterButtonAnchor>
                  </FooterButtonProperty>
                </FooterFlex>
              </FooterLi>
            </FooterUl>
          </FooterSpace>
        </FooterFlexJustifyCenter>
        <FooterAllRights>
          <FooterAllRightsParagraph>
            Este site não faz parte do Google nem do Facebook ou do Facebook
            Inc. Além disso, não oferecemos nenhum tipo de serviço oficial do
            governo, NÃO praticamos fraude, não somos uma empresa que vende
            criptoativos ou qualquer outro serviço.
          </FooterAllRightsParagraph>
          <FooterAllRightsParagraph>
            Essa empresa trabalha exclusivamente com serviços jurídicos.
          </FooterAllRightsParagraph>
          <FooterAllRightsParagraphEnd>
            Lívia Oliveira Advocacia &copy; 2024. Todos os direitos reservados.
          </FooterAllRightsParagraphEnd>
        </FooterAllRights>
      </FooterBg>
    </>
  )
}
