import Head from 'next/head';
import React, { FC, ReactNode, useState } from 'react'
import { Theme } from '../../styled/globals';
import { Nav } from '../nav/Nav';

interface Props {
    title: string;
    children: ReactNode;
}

export const LayoutPage: FC<Props> = ({ title, children }) => {

    const [isDark, setIsDark] = useState(false);

    return (
        <Theme dark={ isDark }>
            <Head>
                <title>{ title }</title>
            </Head>
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
