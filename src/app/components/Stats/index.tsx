import { Note, Smiley, Star } from '@phosphor-icons/react/dist/ssr'
import {
  StatsSection,
} from './StatsComponents'

export function Stats() {
  const features = [
    {
      icon: <Smiley size={44} weight="fill" />,
      title: 'Clientes Atendidos',
      subtitle: '2 Mil',
    },
    {
      icon: <Note size={44} weight="fill" />,
      title: 'Processos no Êxito',
      subtitle: '2 Mil',
    },
    {
      icon: <Star size={44} weight="fill" />,
      title: 'de Experiência Jurídica Previdenciária',
      subtitle: '15 Anos',
    },
  ]

  return (
    <>
      <StatsSection>
        <div className="mt-16 sm:mt-8">
          <dl className="grid grid-cols-1 gap-4 rounded-lg bg-brandBlue900/15 p-8 px-4 py-8 shadow-shadowMax backdrop-blur-md sm:grid-cols-3">
            {features.map((item, idx) => (
              <div key={idx} className="flex flex-col text-center">
                <dt className="mx-auto justify-center pb-4">
                  <span className="h-8 w-8 text-white">{item.icon}</span>
                </dt>
                <dt className="order-last text-lg font-medium text-yellow-50 sm:text-sm">
                  {item.title}
                </dt>
                <dd className="text-3xl font-extrabold text-yellow-100 md:text-4xl">
                  {item.subtitle}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </StatsSection>
    </>
  )
}
