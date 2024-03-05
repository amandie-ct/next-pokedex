import { useDispatch } from 'react-redux'
import * as Styled from './styles'
import { AppDispatch } from '@/lib/store'
import {
  fetchPokemonList,
  reset,
  baseUrl
} from '@/lib/features/pokemonListSlice'

const ClearButton: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  const handleClear = () => {
    dispatch(reset())
    dispatch(fetchPokemonList(baseUrl))
  }

  return (
    <Styled.ClearButton type="submit" onClick={handleClear}>
      <h3>clear filter</h3>
    </Styled.ClearButton>
  )
}

export default ClearButton
