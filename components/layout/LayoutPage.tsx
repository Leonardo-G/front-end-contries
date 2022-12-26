import Head from 'next/head';

import React, { FC, ReactNode, useContext } from 'react'

import { Nav } from '../nav/Nav';
import { UIContext } from '../../context/UI/UIContext';

import { Theme } from '../../styled/globals';

interface Props {
    title: string;
    children: ReactNode;
}

export const LayoutPage: FC<Props> = ({ title, children }) => {

    const { isDark } = useContext( UIContext );

    return (
        <Theme dark={ isDark }>
            <Head>
                <title>{ title }</title>
            </Head>
            <header>
                <Nav />
            </header>
            <main>
                { children }
            </main>
            <footer></footer>
        </Theme>
    )
}
