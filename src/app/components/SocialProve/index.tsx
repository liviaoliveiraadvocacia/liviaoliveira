import { Star } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import {
  SocialProveBlockMapIdx,
  SocialProveClientNameParagraph,
  SocialProveClientProveParagraph,
  SocialProveColumnFillBalance,
  SocialProveDiv,
  SocialProveDivWhatTime,
  SocialProveFlexItens,
  SocialProveH1,
  SocialProveParagraph,
  SocialProveSection,
  SocialProveSpace,
  SocialProveSpan,
} from './SocialProveComponents'

export function SocialProve() {
  const features = [
    {
      imgURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjUP1fK68fKh4EWJD4dZAm_DzJiYOLyTNgoGSROpR2URGhchsgWp=w45-h45-p-rp-mo-br100',
      clientName: 'Ramiria Carvalho',
      clientProve:
        'A Dra. Lívia é uma excelente profissional, advogada muito capaz, dedicada, simpática, atenciosa e principalmente com o diferencial do olhar humano, o que acredito que possibilita entender melhor as necessidades em cada caso. E foi o que chamou mais a minha atenção, o fato de que até mesmo os clientes com maior simplicidade e de pouco estudo se sentirem muito à vontade e serem sempre muito bem recebidos e tratados por ela e por toda a sua equipe, algo que minha mãe faz questão de sempre destacar, desde o primeiro contato com a Dra. Lívia. Estamos muito satisfeitos e só temos a agradecer por todo o seu profissionalismo e dedicação. Graças à Deus e aos esforços da Dra. Lívia, minha mãe agora pôde receber o seu benefício.',
    },
    {
      imgURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKdQCxd530uvm_CSJhy4Qqf96o__AqPaGMdK-u5Hcv_ZdkVKQ=w45-h45-p-rp-mo-br100',
      clientName: 'Leonice Soares Ferreira',
      clientProve:
        'Tive o prazer de conhecer o Dr.livia e ver de perto como ela trata seus clientes com muita atenção e faz de tudo pra que eles se sintam a vontade para se dirigir a ela.Minha mãe como cliente dela sempre foi muito bem recebida por ela e pela secretaria a Larissa que também nao posso deixar de mencionar a sua educação e bom humor com todos .A Dr.livia além de muito competente é um exemplo de simplicidade e educação e nessa profissão de advogado é muito importante tendo em vista que vai atender varios tipos de pessoas grande parte delas pessoas muito simples.Só tenho que agradecer em meu nome e no nome da minha mãe que foi a cliente ,e dizer que super indico o trabalho da Dr.livia uma grande profissional.',
    },
    {
      imgURL:
        'https://lh3.googleusercontent.com/a/ACg8ocIRf-9Gfu2rWzbtYdZKC7-VIPjV-NBQRi7MRU1mzkVgnwjHjQ=w45-h45-p-rp-mo-br100',      
      clientName: 'Veneci Ferreira',
      clientProve:
        'So tenho agradecer a Doutora, graças a Deud estou aposentada. Depois de muito tentar coliquei na mão dela e meu benefício saiu . Sempre muito atenciosa comigo, so deus sabe o tamanho da minha gratidão.😍',
    },
    {
      imgURL:
        'https://lh3.googleusercontent.com/a/ACg8ocL2KKMOu-kV_jlzEMSruir1bAbVJiUkyfPaBSUeU4ZuC86xVw=w45-h45-p-rp-mo-br100',  
      clientName: 'Edna Ohana',
      clientProve:
        'Fiquei muito satisfeita com o trabalho da Dra Lívia, me atendeu com muita simpatia, me tirou todas as dúvidas , e resolveu tudo com bastante rapidez. Estou aposentada. Reconendo!',
    },
    {
      imgURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJFnyMRLNXjH71D9e5hkztkABGr_hTIJKm67TLQVebwGwIELg=w45-h45-p-rp-mo-ba3-br100',
      clientName: 'Alaide Gomes',
      clientProve:
        'Dra. Lívia muito simpática, proativa e uma profissional muito dedicada aos seus clientes',
    },
    {
      imgURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKy22bSKQEqUge32THllKR34wz6tH9GMJTzpd3S-7hGOmnROQ=w45-h45-p-rp-mo-br100',
      clientName: 'Aline H.S.',
      clientProve:
        'Dra. Lívia resolveu com muita eficiência o problema de aposentadoria da minha mãe. Só tenho a agradecer pelos excelentes serviços prestados!',
    },
    {
      imgURL:
        'https://lh3.googleusercontent.com/a/ACg8ocK6G6IwCOvxkBzsNoiMB1sPgAW073E5xeKTd40ZaUpWyLoKmw=w45-h45-p-rp-mo-br100', 
      clientName: 'Rosana Santos',
      clientProve:
        'Recebi um excelente atendimento da Dra. Lívia. Muito clara em suas palavras o que me deixou à vontade em explanar todas minhas dúvidas. Indico demais essa profissional.',
    },
    {
      imgURL:
        'https://lh3.googleusercontent.com/a/ACg8ocITdmn5dS0OsyGWsVkRkNV9Pqb-kMNClti5pqNImiRGCl2z6w=w45-h45-p-rp-mo-br100',
      clientName: 'Ricardo Leite',
      clientProve:
        ' A doutora Lívia é uma profissional que trata diretamente com você, uma empatia enorme, buscando sempre a melhor forma de atender a nossa demanda. Muito segura, demonstra alto conhecimento técnico, te explica com clareza toda a parte técnica, verdadeira sem criar expectativas e sempre com o propósito em ajudar e trazer resultados positivos a quem a procura. Recomendo a todos. Obrigado doutora Lívia pelo excelente trabalho realizado e por trazer mais alegria e esperança em dias melhores. Um forte abraço. Ricardo, Lucas e Gabriela.',
    },
    {
      imgURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXiQk9iWn7qRbAZLXkth6AImi8k1TcFmrROxfhJ4kbc2CnglZr8ww=w45-h45-p-rp-mo-br100',
      clientName: 'Sergio Faleiro',
      clientProve:
        'Muito satisfeito com o serviço solicitado. Dra. Lívia Oliveira foi muito prestativa e eficiente. Meus objetivos foram alcançados com a segurança que precisava. Obrigado',
    },
  ]
  return (
    <>
      <SocialProveSection>
        <SocialProveSpace>
          <SocialProveH1>
            Leia as avaliações confiáveis{' '}
            <SocialProveSpan>dos nossos clientes</SocialProveSpan>
          </SocialProveH1>
          <SocialProveParagraph>
            Ao longo dos anos a Dra. Lívia só vem colecionando gratidão por seu
            profissionalismo
          </SocialProveParagraph>
        </SocialProveSpace>
        <SocialProveColumnFillBalance>
          {features.map((item, idx) => (
            <SocialProveBlockMapIdx key={idx}>
              <SocialProveFlexItens>
                <Image
                  alt="Clients"
                  width={45}
                  height={45}
                  src={item.imgURL}
                  loading="lazy"
                  className="size-14 rounded-full object-cover"
                />
                <SocialProveDiv>
                  <SocialProveDivWhatTime>
                  <Star size={20} weight="fill" />
                  <Star size={20} weight="fill" />
                  <Star size={20} weight="fill" />
                  <Star size={20} weight="fill" />
                  <Star size={20} weight="fill" />
                  </SocialProveDivWhatTime>
                  <SocialProveClientNameParagraph>
                    {item.clientName}
                  </SocialProveClientNameParagraph>
                </SocialProveDiv>
              </SocialProveFlexItens>
              <SocialProveClientProveParagraph>
                {item.clientProve}
              </SocialProveClientProveParagraph>
            </SocialProveBlockMapIdx>
          ))}
        </SocialProveColumnFillBalance>
      </SocialProveSection>
    </>
  )
}