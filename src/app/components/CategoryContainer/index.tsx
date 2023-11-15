import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Styled from './styles'
import { fetchPokemonTypes } from '@/features/pokemonTypesSlice'
import PokemonTypeButton from '../PokemonTypeButton'
import { AppDispatch, RootState } from '@/app/store'

const CategoryContainer = () => {
  const dispatch: AppDispatch = useDispatch()
  const types = useSelector((state: RootState) => state.pokemonTypes.types)
  const status = useSelector((state: RootState) => state.pokemonTypes.status)
  const error = useSelector((state: RootState) => state.pokemonTypes.error)

  useEffect(() => {
    dispatch(fetchPokemonTypes())
  }, [dispatch])

  if (status === 'loading') {
    return (
      <Styled.CategoryContainer>
        <p>Loading...</p>
      </Styled.CategoryContainer>
    )
  }

  if (status === 'failed') {
    return (
      <Styled.CategoryContainer>
        <p>Error: {error}</p>
      </Styled.CategoryContainer>
    )
  }

  return (
    <Styled.CategoryContainer>
      <h1>Filter by:</h1>
      {types.map((type, index) => {
        return <PokemonTypeButton typeName={type} key={index} />
      })}
    </Styled.CategoryContainer>
  )
}

export default CategoryContainer
