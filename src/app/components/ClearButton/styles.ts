'use client'
import styled from 'styled-components'

export const ClearButton = styled.button`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.red};
  border: 2px solid ${({ theme }) => theme.colors.red};
  border-radius: 16px;
  outline: none;
  min-width: 12%;
  max-width: 70px;
  min-height: 20px;
  padding: ${({ theme }) => theme.spacings.xsmall}
    ${({ theme }) => theme.spacings.medium};
  margin: ${({ theme }) => theme.spacings.xxsmall};
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: translateY(-6px);
    transition: 0.2s;
  }

  h3 {
    font-size: ${({ theme }) => theme.font.small};
    font-family: ${({ theme }) => theme.font.family};
  }
`
