import { useDispatch, useSelector } from 'react-redux'
import * as Styled from './styles'
import { AppDispatch, RootState } from '@/lib/store'
import clearSelectedType from '@/lib/features/pokemonTypesSlice'
import pokemonTypesSlice from '@/lib/features/pokemonTypesSlice'

const ClearButton: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  // const { types } = useSelector((state: RootState) => state.pokemonTypes)

  return (
    <Styled.ClearButton type="submit">
      <h3>clear filter</h3>
    </Styled.ClearButton>
  )
}

export default ClearButton
