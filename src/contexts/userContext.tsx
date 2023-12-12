import { FC, createContext, useContext, useState, ReactNode } from 'react'

const TabContext = createContext<any>(true);
const HeaderButtonContext = createContext<any>('login');

type LoginProviderProps = {
    children: ReactNode,
}

const UserProvider: FC<LoginProviderProps> = ({children}) => {
    const [tab, setTab] = useState(true);
    const [headerButton, setHeaderButton] = useState('login');
    
    return (
        <HeaderButtonContext.Provider value={[headerButton, setHeaderButton]}>
            <TabContext.Provider value={[tab, setTab]}>
                {children}
            </TabContext.Provider>
        </HeaderButtonContext.Provider>
    )
}

const useTabContext = () => useContext(TabContext);
const useHeaderButtonContext = () => useContext(HeaderButtonContext);

export { UserProvider, useTabContext, useHeaderButtonContext };