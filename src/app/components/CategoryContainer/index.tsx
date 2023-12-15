import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Styled from './styles'
import { fetchPokemonTypes } from '@/lib/features/pokemonTypesSlice'
import store, { AppDispatch, RootState } from '@/lib/store'
import PokemonTypeButton from '../PokemonTypeButton'
import { url } from 'inspector'

const CategoryContainer = () => {
  const dispatch: AppDispatch = useDispatch()
  const { types, loading } = useSelector(
    (state: RootState) => state.pokemonTypes
  )

  useEffect(() => {
    dispatch(fetchPokemonTypes())
    store.getState()
  }, [dispatch])

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Styled.CategoryContainer>
          <h1>Filter by:</h1>
          <Styled.ButtonContainer>
            {types.map((type, index) => {
              return (
                <PokemonTypeButton
                  typeName={type.name}
                  typeUrl={type.url}
                  typeColor=""
                  key={index}
                />
              )
            })}
          </Styled.ButtonContainer>
        </Styled.CategoryContainer>
      )}
    </>
  )
}

export default CategoryContainer
