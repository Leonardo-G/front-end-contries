import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { UIContext } from '../../context/UI/UIContext'
import { Text } from '../../styled/text'

const DivContainer = styled.div`
    height: 50px;
    width: 100%;
`

const BarraHorizontal = styled.div`
    width: 100%;
    height: 2px;
    background: ${ ({ dark }: { dark?: boolean }) => dark ? "hsl(209, 23%, 22%)" : "#e4e1e1"};
    position: relative;
    margin: 60px 0;
`

const Button = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    background: ${ ({ dark }: { dark?: boolean }) => dark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 76.07843137254902%)"}; ;
    padding: 10px 30px;
    border-radius: 6px; 
    cursor: pointer;
`

interface Props {
    clickEvent: () => void
}

export const Barra: FC<Props> = ({ clickEvent }) => {
    
    const { isDark } = useContext( UIContext );

    return (
        <DivContainer>
            <BarraHorizontal dark={ isDark }>
                <Button dark={ isDark } onClick={ clickEvent }>
                    <Text size={ 16 }>Ver más</Text>
                </Button>
            </BarraHorizontal>
        </DivContainer>
    )
}
