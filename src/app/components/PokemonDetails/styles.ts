'use client'
import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: flex-start;
  padding-top: ${({ theme }) => theme.spacings.huge};
  margin: 0 auto;

  a {
    text-decoration: none;
  }
`

export const Container = styled.section`
  display: flex;
  width: 70%;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 auto;
  padding-top: ${({ theme }) => theme.spacings.xlarge};
`

export const ReturnButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.lightBg};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacings.xsmall};
  ${({ theme }) => theme.spacings.small};
  border-radius: ${({ theme }) => theme.border.radius};
  border: none;
  width: fit-content;
  outline: none;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  h3 {
    padding-left: ${({ theme }) => theme.spacings.xxsmall};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkerRed};
    transition: 0.2s ease-in;
  }
`

export const PokemonImg = styled.img`
  width: 30%;
`

export const MainInfo = styled.section`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  text-transform: capitalize;

  h1 {
    color: ${({ theme }) => theme.colors.gray};
  }
`

export const Characteristics = styled.section`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  height: 100%;

  h2 {
    padding-bottom: ${({ theme }) => theme.spacings.xsmall};
  }

  p {
    padding: ${({ theme }) => theme.spacings.xsmall} 0;
  }
  }
`

export const AbilityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Ability = styled.div`
  background-color: ${({ theme }) => theme.colors.poison};
  box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 6px;
  padding: ${({ theme }) => theme.spacings.xsmall}
    ${({ theme }) => theme.spacings.small};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  margin-right: ${({ theme }) => theme.spacings.small};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius};
  font-weight: bold;

  &:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.grass};
  }

  &:hover {
    transform: translateY(-6px);
    transition: 0.2s;
  }
`
