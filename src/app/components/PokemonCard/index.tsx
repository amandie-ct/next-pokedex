import { useEffect, useState } from 'react'
import axios from 'axios'
import * as Styled from './styles'
import { extractValueFromUrl } from '@/app/utils/extractValueFromUrl'

const PokemonCard = () => {
  const [pokemonName, setPokemonName] = useState('')

  const fetchPokemonCard = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/type/normal')
    setPokemonName(response.data.pokemon[0].pokemon.name)
    const extractedId = extractValueFromUrl(
      response.data.pokemon[0].pokemon.url
    )?.toString()
    console.log(extractedId)
    return { extractedId, pokemonName }
  }
  useEffect(() => {
    fetchPokemonCard()
  }, [])

  return (
    <Styled.PokemonCard>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png`}
      />
      <Styled.PokemonDetails>
        <h3>{pokemonName}</h3>
        <h3>#17</h3>
      </Styled.PokemonDetails>
    </Styled.PokemonCard>
  )
}

export default PokemonCard
