import React, { FC } from 'react'
import Image from 'next/image';

import { ImageBox } from '../../styled/components/image';

interface Props {
    src: string;
    height: string;
    width?: string;
}

export const ContainerImage: FC<Props> = ({ src, height, width }) => {

    return (
        <ImageBox height={ height } width={ width }>
            <Image 
                src={ src }
                fill
                alt='Imagen'
                style={{
                    objectFit: "cover"
                }}
            />
        </ImageBox>
    )
}
