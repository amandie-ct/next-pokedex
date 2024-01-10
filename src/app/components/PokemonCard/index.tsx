import { useEffect, useState } from 'react'
import axios from 'axios'
import * as Styled from './styles'
import { extractValueFromUrl } from '@/app/utils/extractValueFromUrl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

interface PokemonCardProps {
  pokemonName: string
  id: any
}

const PokemonCard = ({ id, pokemonName }: PokemonCardProps) => {
  return (
    <Styled.PokemonCard>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <Styled.PokemonDetails>
        <h3>{pokemonName}</h3>
        <h3>#${id}</h3>
      </Styled.PokemonDetails>
      <Link href="/pokemon">
        <Styled.DetailsButton>
          <FontAwesomeIcon icon={faChevronRight} />
        </Styled.DetailsButton>
      </Link>
    </Styled.PokemonCard>
  )
}

export default PokemonCard
