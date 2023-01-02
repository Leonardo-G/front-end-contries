import React, { FC, ReactNode, useState } from 'react'

import { UIContext } from './UIContext';

interface Props {
    children: ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
    
    const [isDark, setIsDark] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <UIContext.Provider value={{
            isDark,
            search,
            setIsDark,
            setSearch
        }}>
            { children }
        </UIContext.Provider>
    )
}
