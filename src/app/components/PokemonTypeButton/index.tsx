import * as Styled from './styles'
import { extractValueFromUrl } from '@/app/utils/extractValueFromUrl'
export interface PokemonTypeProps {
  typeName: string
  typeUrl: string
  typeColor: string
}

const PokemonTypeButton: React.FC<PokemonTypeProps> = ({
  typeName,
  typeUrl,
  typeColor = 'white'
}) => {
  const handleClick = () => {
    console.log(extractValueFromUrl(typeUrl))
  }

  return (
    <Styled.PokemonTypeButton typeColor={typeName} onClick={handleClick}>
      {<img src={`/assets/${typeName}.svg`} />}
      <h3>{typeName}</h3>
    </Styled.PokemonTypeButton>
  )
}

export default PokemonTypeButton
