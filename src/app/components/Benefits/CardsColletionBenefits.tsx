import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import {
  CardBenefitsGridBg,
  CardBenefitsGrid,
  CardBenefitsGridH1,
  CardBenefitsButtonAnchor,
  CardBenefitsButtonFlex,
  CardBenefitsButtonProperty,
  CardBenefitsButtonText,
  CardBenefitsGridIconDiv,
} from './CardBenefitsComponents'

export function CardBenefitsCollection() {
  const features = [
    {
      iconCardBenefits: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          className="h-16 w-16 fill-brandBlue500"
        >
          <path d="M52.69,99.31a16,16,0,0,1,0-22.63l64-64a16,16,0,0,1,22.63,22.63l-64,64a16,16,0,0,1-22.63,0Zm190.63,17.37a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.63h0a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.68Zm-35.11-15.8L155.12,47.79a4,4,0,0,0-5.66,0L87.8,109.45a4,4,0,0,0,0,5.66L103,130.34,28.69,204.69a16,16,0,0,0,22.62,22.62L125.66,153l15.23,15.23a4,4,0,0,0,5.66,0l61.66-61.66A4,4,0,0,0,208.21,100.88Z"></path>
        </svg>
      ),
      title: 'Advogada Especialista há mais de 15 Anos',
    },
    {
      iconCardBenefits: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          className="h-16 w-16 fill-brandBlue500"
        >
          <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      ),
      title: 'Transparência e Ética Profissional',
    },
    {
      iconCardBenefits: (
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
      title: 'Agilidade e Brevidade',
    },
  ]

  return (
    <CardBenefitsGrid>
      {features.map((item, idx) => (
        <CardBenefitsGridBg key={idx}>
          <CardBenefitsGridIconDiv>
            {item.iconCardBenefits}
          </CardBenefitsGridIconDiv>
          <CardBenefitsGridH1>{item.title}</CardBenefitsGridH1>
          <CardBenefitsButtonProperty>
            <CardBenefitsButtonAnchor href="https://api.whatsapp.com/send?phone=5531992258880&text=Ol%C3%A1,%20tudo%20bem?%20Preciso%20falar%20com%20um%20Advogado%20Especialista%20em%20Direito%20Previdenci%C3%A1rio.%20Pode%20me%20ajudar?">
              <CardBenefitsButtonFlex>
                <CardBenefitsButtonText>Saiba mais</CardBenefitsButtonText>
                <WhatsappLogo size={24} weight="fill" />
              </CardBenefitsButtonFlex>
            </CardBenefitsButtonAnchor>
          </CardBenefitsButtonProperty>
        </CardBenefitsGridBg>
      ))}
    </CardBenefitsGrid>
  )
}
