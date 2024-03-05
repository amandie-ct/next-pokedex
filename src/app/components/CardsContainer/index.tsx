import * as Styled from './styles'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store, { AppDispatch, RootState } from '@/lib/store'
import {
  fetchPokemonList,
  selectNextPage,
  selectPokemonList,
  baseUrl
} from '@/lib/features/pokemonListSlice'
import PokemonCard from '../PokemonCard'
import { extractValueFromUrl } from '@/app/utils/extractValueFromUrl'
import Loader from '../Loader'

const CardsContainer = () => {
  const dispatch: AppDispatch = useDispatch()
  const { loading } = useSelector((state: RootState) => state.pokemonList)

  const pokemonList = useSelector(selectPokemonList)
  const nextPage = useSelector(selectNextPage)
  const observer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    dispatch(fetchPokemonList(baseUrl))
    store.getState()
  }, [dispatch])

  useEffect(() => {
    if (!observer.current) return

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextPage) {
          dispatch(fetchPokemonList(nextPage))
        }
      },
      { threshold: 0.5 }
    )

    intersectionObserver.observe(observer.current)

    return () => {
      intersectionObserver.disconnect()
    }
  }, [dispatch, nextPage])

  return (
    <>
      <Styled.CardsContainer>
        {loading ? (
          <Loader />
        ) : (
          <>
            {pokemonList.map((pokemon, index) => (
              <PokemonCard
                pokemonName={pokemon.name}
                id={extractValueFromUrl(pokemon.url)}
                key={index}
              />
            ))}
            <div ref={observer}></div>
          </>
        )}
      </Styled.CardsContainer>
    </>
  )
}

export default CardsContainer
