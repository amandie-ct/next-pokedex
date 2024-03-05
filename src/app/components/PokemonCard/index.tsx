import * as Styled from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

interface PokemonCardProps {
  pokemonName: string
  id: string | undefined
}

const PokemonCard = (props: PokemonCardProps) => {
  return (
    <Styled.PokemonCard>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
      />
      <Styled.PokemonDetails>
        <h3>{props.pokemonName}</h3>
        <h3>#${props.id}</h3>
      </Styled.PokemonDetails>
      <Link href={`/pokemon/${props.id}`}>
        <Styled.DetailsButton>
          <FontAwesomeIcon icon={faChevronRight} />
        </Styled.DetailsButton>
      </Link>
    </Styled.PokemonCard>
  )
}

export default PokemonCard
