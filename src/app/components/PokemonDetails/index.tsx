import { useEffect } from 'react'
import * as Styled from './styles'
import { fetchPokemonDetails } from '@/lib/features/pokemonDetailsSlice'
import store, { AppDispatch, RootState } from '@/lib/store'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

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
      <Styled.ReturnButton>
        <FontAwesomeIcon icon={faChevronLeft} />
        <h3>Back</h3>
      </Styled.ReturnButton>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          return (
          <Styled.Container>
            <Styled.PokemonImg />
            <Styled.MainInfo>
              <h2>{details.name}</h2>
              <h1>{details.number}</h1>
            </Styled.MainInfo>
            <Styled.Characteristics>
              <h3>Characteristics</h3>
              <p>
                Base experience:&nbsp;<span>{details.base_experience}</span>
              </p>
              <hr></hr>
              <p>
                Height:&nbsp;<span>{details.height}&nbsp;</span>
              </p>
              <hr></hr>
              <p>
                Weight:&nbsp;<span>{details.weight}&nbsp;kg</span>
              </p>
              <hr></hr>
              <p>Abilities:</p>
              {details.abilities.map((ability, index) => {
                return (
                  <Styled.Ability key={index}>
                    {ability.ability.name}
                  </Styled.Ability>
                )
              })}
            </Styled.Characteristics>
          </Styled.Container>
          )
        </>
      )}
    </Styled.Main>
  )
}

export default PokemonDetails
