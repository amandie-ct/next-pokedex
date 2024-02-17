import * as Styled from './styles'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store, { AppDispatch, RootState } from '@/lib/store'
import { fetchPokemonList } from '@/lib/features/pokemonListSlice'
import PokemonCard from '../PokemonCard'
import { extractValueFromUrl } from '@/app/utils/extractValueFromUrl'
import Loader from '../Loader'

const CardsContainer = () => {
  const dispatch: AppDispatch = useDispatch()
  const { sharedList, loading } = useSelector(
    (state: RootState) => state.pokemonList
  )

  useEffect(() => {
    dispatch(fetchPokemonList())
    store.getState()
  }, [dispatch])

  return (
    <>
      <Styled.CardsContainer>
        {loading ? (
          <Loader />
        ) : (
          <>
            {sharedList.map((pokemon, index) => (
              <PokemonCard
                pokemonName={pokemon.name}
                id={extractValueFromUrl(pokemon.url)}
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
