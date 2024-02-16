import { useDispatch } from 'react-redux'
import * as Styled from './styles'
import { AppDispatch, RootState } from '@/lib/store'
import { fetchPokemonList } from '@/lib/features/pokemonListSlice'

const ClearButton: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  const handleClear = () => {
    dispatch(fetchPokemonList())
  }

  return (
    <Styled.ClearButton type="submit" onClick={handleClear}>
      <h3>clear filter</h3>
    </Styled.ClearButton>
  )
}

export default ClearButton
