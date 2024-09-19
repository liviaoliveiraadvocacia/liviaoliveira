import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import {
  CardGridBg,
  CardGrid,
  CardGridH1,
  CardButtonAnchor,
  CardButtonFlex,
  CardButtonProperty,
  CardButtonText,
  CardGridIconDiv,
  CardPropertyIconList,
  CardGridDiv,
  CardGridUl,
  CardGridLi,
  CardListDiv,
  CardListH1,
} from './CardComponents'

export function CardsCollection() {
  const features = [
    {
      iconCard: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          className="h-16 w-16 fill-brandBlue500"
        >
          <path d="M226,88.08c-.4-1-.82-2-1.25-3a87.93,87.93,0,0,0-30.17-37H216a8,8,0,0,0,0-16H112a88.12,88.12,0,0,0-87.72,81A32,32,0,0,0,0,144a8,8,0,0,0,16,0,16,16,0,0,1,8.57-14.16A87.69,87.69,0,0,0,46,178.22l12.56,35.16A16,16,0,0,0,73.64,224H86.36a16,16,0,0,0,15.07-10.62l1.92-5.38h57.3l1.92,5.38A16,16,0,0,0,177.64,224h12.72a16,16,0,0,0,15.07-10.62L221.64,168H224a24,24,0,0,0,24-24V112A24,24,0,0,0,226,88.08ZM152,72H112a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm28,56a12,12,0,1,1,12-12A12,12,0,0,1,180,128Z"></path>
        </svg>
      ),
      iconList1: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          className="size-4 fill-brandBlue500"
        >
          <path d="M243.31,90.91l-128.4,128.4a16,16,0,0,1-22.62,0l-71.62-72a16,16,0,0,1,0-22.61l20-20a16,16,0,0,1,22.58,0L104,144.22l96.76-95.57a16,16,0,0,1,22.59,0l19.95,19.54A16,16,0,0,1,243.31,90.91Z"></path>
        </svg>
      ),
      title: 'Aposentadorias',
      subtitle1: 'Aposentadoria Especial',
      subtitle2: 'Aposentadoria por Invalidez',
      subtitle3: 'Aposentadoria por tempo de contribuição',
      subtitle4: 'Aposentadoria por Idade',
    },
    {
      iconCard: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          className="h-16 w-16 fill-brandBlue500"
        >
          <path d="M128.09,57.38a36,36,0,0,1,55.17-27.82,4,4,0,0,1-.56,7A52.06,52.06,0,0,0,152,84c0,1.17,0,2.34.12,3.49a4,4,0,0,1-6,3.76A36,36,0,0,1,128.09,57.38ZM240,160.61a24.47,24.47,0,0,1-13.6,22l-.44.2-38.83,16.54a6.94,6.94,0,0,1-1.19.4l-64,16A7.93,7.93,0,0,1,120,216H16A16,16,0,0,1,0,200V160a16,16,0,0,1,16-16H44.69l22.62-22.63A31.82,31.82,0,0,1,89.94,112H140a28,28,0,0,1,27.25,34.45l41.84-9.62A24.61,24.61,0,0,1,240,160.61Zm-16,0a8.61,8.61,0,0,0-10.87-8.3l-.31.08-67,15.41a8.32,8.32,0,0,1-1.79.2H112a8,8,0,0,1,0-16h28a12,12,0,0,0,0-24H89.94a15.86,15.86,0,0,0-11.31,4.69L56,155.31V200h63l62.43-15.61,38-16.18A8.56,8.56,0,0,0,224,160.61ZM168,84a36,36,0,1,0,36-36A36,36,0,0,0,168,84Z"></path>
        </svg>
      ),
      iconList2: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          className="size-4 fill-brandBlue500"
        >
          <path d="M243.31,90.91l-128.4,128.4a16,16,0,0,1-22.62,0l-71.62-72a16,16,0,0,1,0-22.61l20-20a16,16,0,0,1,22.58,0L104,144.22l96.76-95.57a16,16,0,0,1,22.59,0l19.95,19.54A16,16,0,0,1,243.31,90.91Z"></path>
        </svg>
      ),
      title: 'Benefícios',
      subtitle5: 'Auxílio-acidente',
      subtitle6: 'Auxílio-doença',
      subtitle7: 'Auxílio-reclusão',
      subtitle8: 'Salário maternidade',
      subtitle9: 'Pensão por morte',
      subtitle10: 'BPC-LOAS',
    },
    {
      iconCard: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          className="h-16 w-16 fill-brandBlue500"
        >
          <path d="M224,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h80a8,8,0,0,1,0,16H48V208H208V128a8,8,0,0,1,16,0Zm5.66-58.34-96,96A8,8,0,0,1,128,168H96a8,8,0,0,1-8-8V128a8,8,0,0,1,2.34-5.66l96-96a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,229.66,69.66Zm-17-5.66L192,43.31,179.31,56,200,76.69Z"></path>
        </svg>
      ),
      iconList3: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          className="size-4 fill-brandBlue500"
        >
          <path d="M243.31,90.91l-128.4,128.4a16,16,0,0,1-22.62,0l-71.62-72a16,16,0,0,1,0-22.61l20-20a16,16,0,0,1,22.58,0L104,144.22l96.76-95.57a16,16,0,0,1,22.59,0l19.95,19.54A16,16,0,0,1,243.31,90.91Z"></path>
        </svg>
      ),
      title: 'Outros Serviços',
      subtitle12: 'Planejamento Previdenciário',
      subtitle13: 'Consultoria previdenciária',
      subtitle14: 'Revisão de benefício',
    },
  ]

  return (
    <CardGrid>
      {features.map((item, idx) => (
        <CardGridBg key={idx}>
          <CardGridIconDiv>{item.iconCard}</CardGridIconDiv>
          <CardGridH1>{item.title}</CardGridH1>
          <CardGridDiv>
            <CardGridUl>
              <CardGridLi>
                <CardPropertyIconList>{item.iconList1}</CardPropertyIconList>
                <CardListDiv>
                  <CardListH1>{item.subtitle1}</CardListH1>
                </CardListDiv>
              </CardGridLi>
              <CardGridLi>
                <CardPropertyIconList>{item.iconList1}</CardPropertyIconList>
                <CardListDiv>
                  <CardListH1>{item.subtitle2}</CardListH1>
                </CardListDiv>
              </CardGridLi>
              <CardGridLi>
                <CardPropertyIconList>{item.iconList1}</CardPropertyIconList>
                <CardListDiv>
                  <CardListH1>{item.subtitle3}</CardListH1>
                </CardListDiv>
              </CardGridLi>
              <CardGridLi>
                <CardPropertyIconList>{item.iconList1}</CardPropertyIconList>
                <CardListDiv>
                  <CardListH1>{item.subtitle4}</CardListH1>
                </CardListDiv>
              </CardGridLi>
              <CardGridLi>
                <CardPropertyIconList>{item.iconList2}</CardPropertyIconList>
                <CardListDiv>
                  <CardListH1>{item.subtitle5}</CardListH1>
                </CardListDiv>
              </CardGridLi>
              <CardGridLi>
                <CardPropertyIconList>{item.iconList2}</CardPropertyIconList>
                <CardListDiv>
                  <CardListH1>{item.subtitle6}</CardListH1>
                </CardListDiv>
              </CardGridLi>
              <CardGridLi>
                <CardPropertyIconList>{item.iconList2}</CardPropertyIconList>
                <CardListDiv>
                  <CardListH1>{item.subtitle7}</CardListH1>
                </CardListDiv>
              </CardGridLi>
              <CardGridLi>
                <CardPropertyIconList>{item.iconList2}</CardPropertyIconList>
                <CardListDiv>
                  <CardListH1>{item.subtitle8}</CardListH1>
                </CardListDiv>
              </CardGridLi>
              <CardGridLi>
                <CardPropertyIconList>{item.iconList2}</CardPropertyIconList>
                <CardListDiv>
                  <CardListH1>{item.subtitle10}</CardListH1>
                </CardListDiv>
              </CardGridLi>
              <CardGridLi>
                <CardPropertyIconList>{item.iconList3}</CardPropertyIconList>
                <CardListDiv>
                  <CardListH1>{item.subtitle12}</CardListH1>
                </CardListDiv>
              </CardGridLi>
              <CardGridLi>
                <CardPropertyIconList>{item.iconList3}</CardPropertyIconList>
                <CardListDiv>
                  <CardListH1>{item.subtitle13}</CardListH1>
                </CardListDiv>
              </CardGridLi>
              <CardGridLi>
                <CardPropertyIconList>{item.iconList3}</CardPropertyIconList>
                <CardListDiv>
                  <CardListH1>{item.subtitle14}</CardListH1>
                </CardListDiv>
              </CardGridLi>
            </CardGridUl>
          </CardGridDiv>
          <CardButtonProperty>
            <CardButtonAnchor href="https://api.whatsapp.com/send?phone=5531992258880&text=Ol%C3%A1,%20tudo%20bem?%20Preciso%20falar%20com%20um%20Advogado%20Especialista%20em%20Direito%20Previdenci%C3%A1rio.%20Pode%20me%20ajudar?">
              <CardButtonFlex>
                <CardButtonText>Saiba mais</CardButtonText>
                <WhatsappLogo size={24} weight="fill" />
              </CardButtonFlex>
            </CardButtonAnchor>
          </CardButtonProperty>
        </CardGridBg>
      ))}
    </CardGrid>
  )
}
