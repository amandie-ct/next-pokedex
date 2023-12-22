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
`

export const ImgContainer = styled.section`
  width: 30%;
`

export const PokemonImg = styled.img`
  width: 300px;
`

export const MainInfo = styled.section`
  display: flex;
  flex-direction: column;

  width: 30%;
`

export const Characteristics = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
`

export const AbilityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Ability = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  padding: ${({ theme }) => theme.spacings.small};
  margin: ${({ theme }) => theme.spacings.medium};
`
