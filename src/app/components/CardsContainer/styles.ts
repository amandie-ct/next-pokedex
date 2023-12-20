'use client'
import styled from 'styled-components'

export const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin: ${({ theme }) => theme.spacings.small} 0;
  padding: 0 ${({ theme }) => theme.spacings.small};
`
