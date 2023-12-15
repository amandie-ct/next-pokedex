'use client'
import styled from 'styled-components'

export const CategoryContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 20%;
  width: 95%;
  border: 1px solid red;
  h1 {
    margin-left: ${({ theme }) => theme.spacings.xsmall};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
`
