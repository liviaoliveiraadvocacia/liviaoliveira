import {
  FaqDetails,
  FaqDetailsParagraph,
  FaqH1,
  FaqParagraph,
  FaqSectionsRoot,
  FaqSpace,
  FaqSpan,
  FaqSummary,
  FaqSummaryH1,
  FaqSummarySpanIcon,
} from './FaqComponents'

export function Faq() {
  const faqFeatures = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: 'Quando posso solicitar minha aposentadoria?',
      desc: 'Você pode solicitar a aposentadoria ao cumprir os requisitos de idade mínima e tempo de contribuição exigidos pela legislação previdenciária vigente.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title:
        'Recebo adicional de insalubridade/periculosidade, tenho direito a aposentadoria especial?',
      desc: 'Nem sempre. Este adicional é em razão da legislação trabalhista. Para a aposentadoria especial, é necessário comprovar a exposição a agentes nocivos à saúde por um período contínuo de tempo',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title:
        'Quais documentos são necessários para dar entrada na minha aposentadoria?',
      desc: 'Você precisará de documentos como RG, CPF, comprovante de residência, carteira de trabalho, extrato do CNIS, entre outros. Cada caso pode requerer documentação específica.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: 'Como sei se estou contribuindo corretamente para o INSS?',
      desc: 'Você pode verificar suas contribuições no extrato do CNIS (Cadastro Nacional de Informações Sociais), disponível no site do Meu INSS.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: 'Quais são os erros mais comuns ao solicitar a aposentadoria?',
      desc: 'Alguns erros incluem não realizar o planejamento previdenciário antes de dar entrada no processo, falta de documentação completa e correta, e não acompanhar a evolução das contribuições.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: 'Posso revisar meu benefício se houver erro no cálculo?',
      desc: 'Sim, é possível solicitar uma revisão de benefício caso haja erro no cálculo. É importante ter um advogado para auxiliar na análise e nos procedimentos.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title:
        'Como escolher um advogado especializado em direito previdenciário?',
      desc: 'Verifique a especialidade do advogado, pesquise seu registro na OAB e busque referências de outros clientes para garantir que ele tenha experiência e credibilidade. A Dra Lívia tem mais de 15 anos de experiência neste caso e mais de 2 mil clientes atendidos e processos no êxito',
    },
  ]

  return (
    <>
      <FaqH1>
        FAQ de <FaqSpan>Dúvidas frequentes</FaqSpan>
      </FaqH1>
      <FaqParagraph>
        Dúvidas mais comuns sobre os serviços da área Previdenciária
      </FaqParagraph>
      <FaqSectionsRoot>
        <FaqSpace>
          {faqFeatures.map((item, idx) => (
            <FaqDetails key={idx}>
              <FaqSummary>
                <FaqSummaryH1>{item.title}</FaqSummaryH1>
                <FaqSummarySpanIcon>{item.icon}</FaqSummarySpanIcon>
              </FaqSummary>
              <FaqDetailsParagraph>{item.desc}</FaqDetailsParagraph>
            </FaqDetails>
          ))}
        </FaqSpace>
      </FaqSectionsRoot>
    </>
  )
}
