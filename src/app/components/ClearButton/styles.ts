'use client'
import styled from 'styled-components'

export const ClearButton = styled.button`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.red};
  border: 2px solid ${({ theme }) => theme.colors.red};
  border-radius: 16px;
  min-width: 10%;
  max-width: 70px;
  min-height: 26px;
  padding: ${({ theme }) => theme.spacings.xsmall};
  ${({ theme }) => theme.spacings.small};
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-family: ${({ theme }) => theme.font.family}, sans-serif;
  margin: ${({ theme }) => theme.spacings.xxsmall};
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: translateY(-6px);
    transition: 0.2s;
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }
`
