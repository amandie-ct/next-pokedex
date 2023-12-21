import * as Styled from './styles'
import Logo from '../Logo'
import CategoryContainer from '../CategoryContainer'
import BackgroundImg from '../BackgroundImg'
import CardsContainer from '../CardsContainer'
import PokemonDetails from '../PokemonDetails'

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
        <PokemonDetails id={'3'} />
      </Styled.Wrapper>
    </>
  )
}

export default Main
