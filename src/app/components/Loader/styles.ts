import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoaderWrapper = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  margin: 0 auto;
`

export const LoaderImg = styled.img`
  width: 100%;
  height: 100%;
  animation: ${spin} 2s linear infinite;
`
