'use client'
import * as Styled from './styles'
import CategoryContainer from '../CategoryContainer'
import CardsContainer from '../CardsContainer'

const Main = () => {
  return (
    <>
      <Styled.Wrapper>
        <CategoryContainer />
        <CardsContainer />
      </Styled.Wrapper>
    </>
  )
}

export default Main
