'use client'
import styled, { css } from 'styled-components'
import { PokemonTypeProps } from '.'

export type TypeButtonProps = {
  typeColor: string
}

export const PokemonTypeButton = styled.div<
  Pick<PokemonTypeProps, 'typeColor'>
>`
  ${({ theme, typeColor }) => css`
    background-color: ${theme.colors[typeColor]};
  `}
  color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  outline: none;
  border: transparent;
  min-width: 10%;
  max-width: 70px;
  min-height: 20px;
  padding: ${({ theme }) => theme.spacings.xsmall};
  ${({ theme }) => theme.spacings.small};
  font-size: ${({ theme }) => theme.font.sizes.small};
  margin: ${({ theme }) => theme.spacings.xxsmall};
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: translateY(-6px);
    transition: 0.2s;
  }

  img {
    max-height: 25px;
    margin-right: ${({ theme }) => theme.spacings.xxsmall};
  }
`

export default PokemonTypeButton
