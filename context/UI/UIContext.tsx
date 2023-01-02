import { 
    createContext, 
    Dispatch 
} from 'react';

export interface ContextProps {
    isDark: boolean;
    setIsDark: Dispatch<React.SetStateAction<boolean>>;
    search: string;
    setSearch: Dispatch<React.SetStateAction<string>>
};

export const UIContext = createContext({} as ContextProps);