import * as Styled from './styles'
import Logo from '../Logo'
import CategoryContainer from '../CategoryContainer'
import BackgroundImg from '../BackgroundImg'
import CardsContainer from '../CardsContainer'

const Main = () => {
  return (
    <>
      <Styled.Wrapper>
        <>
          <BackgroundImg />
          <Logo />
        </>
        <CategoryContainer />
        <CardsContainer />
      </Styled.Wrapper>
    </>
  )
}

export default Main
