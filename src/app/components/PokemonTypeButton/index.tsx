import * as Styled from './styles'

interface PokemonTypeProps {
  typeName: string
}

const PokemonTypeButton: React.FC<PokemonTypeProps> = ({ typeName }) => {
  return (
    <Styled.PokemonTypeButton>
      {<img src={`/assets/${typeName}.svg`} />}
      <h3>{typeName}</h3>
    </Styled.PokemonTypeButton>
  )
}

export default PokemonTypeButton
