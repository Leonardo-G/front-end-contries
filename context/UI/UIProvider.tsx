import React, { FC, ReactNode, useState } from 'react'

import { UIContext } from './UIContext';

interface Props {
    children: ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
    
    const [isDark, setIsDark] = useState(false);

    return (
        <UIContext.Provider value={{
            isDark,
            setIsDark
        }}>
            { children }
        </UIContext.Provider>
    )
}
