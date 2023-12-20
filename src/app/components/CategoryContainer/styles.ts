'use client'
import styled from 'styled-components'

export const CategoryContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 20%;
  width: 95%;
  padding-top: ${({ theme }) => theme.spacings.large};
  h1 {
    margin-top: ${({ theme }) => theme.spacings.medium};
    margin-left: ${({ theme }) => theme.spacings.xsmall};
    margin-bottom: ${({ theme }) => theme.spacings.xxsmall};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  width: 100%;
`
