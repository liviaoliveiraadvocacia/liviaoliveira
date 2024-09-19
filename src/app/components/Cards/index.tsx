import {
  CardH1,
  CardParagraph,
  CardSpan,
  CardProperty,
  CardsSection,
  CardSpace,
} from './CardComponents'
import { CardsCollection } from './CardsCollection'

export function Card() {
  return (
    <>
      <CardSpace>
        <CardH1>
          Confira mais serviços que <CardSpan>podemos lhe ajudar</CardSpan>
        </CardH1>
        <CardParagraph>
          Consulte nossos especialistas para uma avaliação
        </CardParagraph>
        <CardsSection>
          <CardProperty>
            <CardsCollection />
          </CardProperty>
        </CardsSection>
      </CardSpace>
    </>
  )
}
