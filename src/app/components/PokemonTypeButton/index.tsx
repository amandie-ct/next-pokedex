import * as Styled from './styles'
import { fetchPokemonListByType } from '@/lib/features/pokemonListSlice'
import { AppDispatch, RootState } from '@/lib/store'
import { useDispatch, useSelector } from 'react-redux'
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
  const dispatch: AppDispatch = useDispatch()
  const handleClick = () => {
    dispatch(fetchPokemonListByType(typeName))
  }

  return (
    <Styled.PokemonTypeButton typeColor={typeName} onClick={handleClick}>
      {<img src={`/assets/${typeName}.svg`} />}
      <h3>{typeName}</h3>
    </Styled.PokemonTypeButton>
  )
}

export default PokemonTypeButton
