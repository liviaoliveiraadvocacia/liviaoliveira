import { Star } from '@phosphor-icons/react/dist/ssr'

export function StarRating() {
  return (
    <>
      <div className="mx-2 flex flex-wrap items-center justify-center gap-1 text-xl font-semibold text-yellow-500 sm:justify-normal">
        <span className="z-40 mr-1 text-base font-medium text-white">5,0</span>
        <Star
          weight="fill"
          size={18}
          style={{
            filter: 'drop-shadow(1px 1px 1px #000)',
          }}
        />
        <Star
          weight="fill"
          size={18}
          style={{
            filter: 'drop-shadow(1px 1px 1px #000)',
          }}
        />
        <Star
          weight="fill"
          size={18}
          style={{
            filter: 'drop-shadow(1px 1px 1px #000)',
          }}
        />
        <Star
          weight="fill"
          size={18}
          style={{
            filter: 'drop-shadow(1px 1px 1px #000)',
          }}
        />
        <Star
          weight="fill"
          size={18}
          style={{
            filter: 'drop-shadow(1px 1px 1px #000)',
          }}
        />
        <span className="z-40 ml-1 mt-1 text-base font-medium text-white">
          38 avaliações no Google
        </span>
      </div>
    </>
  )
}
