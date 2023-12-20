import * as Styled from './styles'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store, { AppDispatch, RootState } from '@/lib/store'
import { fetchPokemonList } from '@/lib/features/pokemonListSlice'
import PokemonCard from '../PokemonCard'

const CardsContainer = () => {
  const dispatch: AppDispatch = useDispatch()
  const { list, loading } = useSelector((state: RootState) => state.pokemonList)

  useEffect(() => {
    dispatch(fetchPokemonList())
    store.getState()
  }, [dispatch])

  return (
    <>
      <Styled.CardsContainer>
        {loading ? (
          <p>loading...</p>
        ) : (
          <>
            {list.map((pokemon, index) => (
              <PokemonCard
                pokemonName={pokemon.name}
                id={pokemon.id}
                key={index}
              />
            ))}
          </>
        )}
      </Styled.CardsContainer>
    </>
  )
}

export default CardsContainer
