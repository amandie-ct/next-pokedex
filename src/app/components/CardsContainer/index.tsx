import * as Styled from './styles'
import PokemonCard from '../PokemonCard'

const CardsContainer = () => {
  let pokemonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  return (
    <Styled.CardsContainer>
      {pokemonArray.map((num) => (
        <PokemonCard id={num} />
      ))}
    </Styled.CardsContainer>
  )
}

export default CardsContainer
