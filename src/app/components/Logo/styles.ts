'use client'
import styled from 'styled-components'

export const LogoWrapper = styled.div`
  background: ${({ theme }) => theme.colors.red};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  text-align: center;

  img {
    width: 50%;
  }
`
