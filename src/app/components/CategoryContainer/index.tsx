import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Styled from './styles'
import { fetchPokemonTypes } from '@/lib/features/pokemonTypesSlice'
import store, { AppDispatch, RootState } from '@/lib/store'
import PokemonTypeButton from '../PokemonTypeButton'
import ClearButton from '../ClearButton'

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
      <Styled.CategoryContainer>
        <h1>Filter by:</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
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
            <ClearButton />
          </Styled.ButtonContainer>
        )}
      </Styled.CategoryContainer>
    </>
  )
}

export default CategoryContainer
