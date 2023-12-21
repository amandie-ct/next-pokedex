'use client'
import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: flex-end;
`

export const Container = styled.section`
  display: flex;
  width: 100%;
`
export const ReturnButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.lightBg};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacings.xsmall}
    ${({ theme }) => theme.spacings.small};
  border-radius: ${({ theme }) => theme.border.radius};
  border: none;
  width: fit-content;
  outline: none;

  font-size: 18px;
  font-weight: ${({ theme }) => theme.font.bold};
`

export const PokemonImg = styled.img`
  width: 300px;
`

export const MainInfo = styled.section`
  display: flex;
`

export const Characteristics = styled.section`
  display: flex;
  flex-direction: column;
`

export const Ability = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  padding: ${({ theme }) => theme.spacings.small};
  margin: ${({ theme }) => theme.spacings.medium};
`
