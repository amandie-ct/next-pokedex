import { useEffect } from 'react'
import * as Styled from './styles'
import { fetchPokemonDetails } from '@/lib/features/pokemonDetailsSlice'
import store, { AppDispatch, RootState } from '@/lib/store'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

interface IPokemonDetailsProps {
  id: string
}

const PokemonDetails = ({ id }: IPokemonDetailsProps) => {
  const dispatch: AppDispatch = useDispatch()
  const { details, loading } = useSelector(
    (state: RootState) => state.pokemonDetails
  )

  useEffect(() => {
    dispatch(fetchPokemonDetails(id))
    store.getState()
  }, [dispatch, id])

  return (
    <Styled.Main>
      <Link href="/">
        <Styled.ReturnButton>
          <FontAwesomeIcon icon={faChevronLeft} />
          <h3>Back</h3>
        </Styled.ReturnButton>
      </Link>

      {loading ? (
        <p>loading...</p>
      ) : (
        <Styled.Container>
          <Styled.PokemonImg
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          />
          <Styled.MainInfo>
            <h2>{details.name}</h2>
            <h1>#{details.id}</h1>
          </Styled.MainInfo>
          <Styled.Characteristics>
            <h2>Characteristics</h2>
            <p>
              Base experience:&nbsp;<span>{details.base_experience}</span>
            </p>
            <hr></hr>
            <p>
              Height:&nbsp;<span>{details.height / 10}&nbsp;m</span>
            </p>
            <hr></hr>
            <p>
              Weight:&nbsp;<span>{details.weight / 10}&nbsp;kg</span>
            </p>
            <hr></hr>
            <p>Abilities:</p>
            <Styled.AbilityContainer>
              {details.abilities.map((ability, index) => {
                return (
                  <Styled.Ability key={index}>
                    {/* @ts-ignore:next-line */}
                    {ability.ability.name}
                  </Styled.Ability>
                )
              })}
            </Styled.AbilityContainer>
          </Styled.Characteristics>
        </Styled.Container>
      )}
    </Styled.Main>
  )
}

export default PokemonDetails
