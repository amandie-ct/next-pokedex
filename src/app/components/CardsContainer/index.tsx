import * as Styled from './styles'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store, { AppDispatch, RootState } from '@/lib/store'
import { fetchPokemonList } from '@/lib/features/pokemonListSlice'
import setPokemonId from '@/lib/features/pokemonListSlice'
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
            {list.map((pokemon) => (
              <PokemonCard pokemonName={pokemon.name} id={3} />
            ))}
          </>
        )}
      </Styled.CardsContainer>
    </>
  )
}

export default CardsContainer
