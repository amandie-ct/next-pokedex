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
  min-width: 15%;
  max-width: 80px;
  min-height: 20px;
  padding: ${({ theme }) => theme.spacings.xsmall}
    ${({ theme }) => theme.spacings.medium};
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
    max-width: 15%;
    margin-right: ${({ theme }) => theme.spacings.xsmall};
  }
`

export default PokemonTypeButton
