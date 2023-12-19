import * as Styled from './styles'
import Logo from '../Logo'
import CategoryContainer from '../CategoryContainer'
import BackgroundImg from '../BackgroundImg'
import PokemonCard from '../PokemonCard'

const Main = () => {
  return (
    <>
      <Styled.Wrapper>
        <>
          <BackgroundImg />
          <Logo />
        </>
        <CategoryContainer />
        <PokemonCard />
      </Styled.Wrapper>
    </>
  )
}

export default Main
