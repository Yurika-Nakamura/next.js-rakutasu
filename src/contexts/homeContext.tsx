import { FC, createContext, useContext, useState, ReactNode } from 'react'

const HomeDataContext = createContext<any>([]);

type HomeDataProviderProps = {
    children: ReactNode,
}

const HomeDataProvider: FC<HomeDataProviderProps> = ({children}) => {
    const [data, setData] = useState();

    return (
        <HomeDataContext.Provider value={[data, setData]}>
            {children}
        </HomeDataContext.Provider>
    )
}

const useHomeDataContext = () => useContext(HomeDataContext);

export { HomeDataProvider, useHomeDataContext };
