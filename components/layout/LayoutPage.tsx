import React, { FC, ReactNode, useState } from 'react'
import { Theme } from '../../styled/globals';
import { Nav } from '../nav/Nav';

interface Props {
    children: ReactNode;
}

export const LayoutPage: FC<Props> = ({ children }) => {

    const [isDark, setIsDark] = useState(false);

    return (
        <Theme dark={ isDark }>
            <header>
                <Nav dark={ isDark } changeDark={ setIsDark }/>
            </header>
            <main>
                { children }
            </main>
            <footer></footer>
        </Theme>
    )
}
