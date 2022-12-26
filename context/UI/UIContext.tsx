import { 
    createContext, 
    Dispatch 
} from 'react';

export interface ContextProps {
    isDark: boolean;
    setIsDark: Dispatch<React.SetStateAction<boolean>>
};

export const UIContext = createContext({} as ContextProps);