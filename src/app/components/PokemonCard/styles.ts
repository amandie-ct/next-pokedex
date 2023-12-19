'use client'
import styled from 'styled-components'

export const PokemonCard = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 250px;
  height: 90px;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius};

  img {
    max-width: 30%;
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    box-shadow: 1px 1px 6px ${({ theme }) => theme.colors.lightGray};
    cursor: pointer;
  }
`

export const PokemonDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h3 {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    color: ${({ theme }) => theme.colors.darkGray};
    &:last-child {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`
