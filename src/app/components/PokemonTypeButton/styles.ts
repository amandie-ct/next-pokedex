'use client'
import styled from 'styled-components'

export const PokemonTypeButton = styled.div`
    color: ${({ theme }) => theme.colors.red};
    border-radius: ${({ theme }) => theme.border.radius};
    outline: none;
    border: transparent;
    min-width: 15%;
    max-width: 150px;
    min-height: 35px;
    padding: 5px 18px;
    font-size: ${({ theme }) => theme.font.sizes .medium};
    margin: ${({ theme }) => theme.spacings.xsmall};

    &:hover {
    cursor: pointer;
    transform: translateY(-6px);
    transition: 0.2s
    }

    img {
        width: 20%;
    }
`