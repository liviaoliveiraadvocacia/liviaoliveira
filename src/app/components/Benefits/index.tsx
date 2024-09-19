import {
  CardBenefitsH1,
  CardBenefitsParagraph,
  CardBenefitsSpan,
  CardBenefitsProperty,
  CardBenefitssSection,
  CardBenefitsSpace,
} from './CardBenefitsComponents'
import { CardBenefitsCollection } from './CardsColletionBenefits'

export function Benefits() {
  return (
    <>
      <CardBenefitsSpace>
        <CardBenefitsH1>
          Que benefícios <CardBenefitsSpan>você recebe?</CardBenefitsSpan>
        </CardBenefitsH1>
        <CardBenefitsParagraph>
          Este é o diferencial da Dra. Lívia e seus clientes são prova disso
        </CardBenefitsParagraph>
        <CardBenefitssSection>
          <CardBenefitsProperty>
            <CardBenefitsCollection />
          </CardBenefitsProperty>
        </CardBenefitssSection>
      </CardBenefitsSpace>
    </>
  )
}
