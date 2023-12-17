import * as Styled from './styles'
import Logo from '../Logo'
import CategoryContainer from '../CategoryContainer'
import BackgroundImg from '../BackgroundImg'

const Main = () => {
  return (
    <>
      <Styled.Wrapper>
        <>
          <BackgroundImg />
          <Logo />
        </>
        <CategoryContainer />
      </Styled.Wrapper>
    </>
  )
}

export default Main
