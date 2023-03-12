import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";




export type PageNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 ;


interface CurrentPageProviderProps {
    children: ReactNode;
}

interface CurrentPageContextType {
    currentPage: PageNumbers;
    setCurrentPage: Dispatch<SetStateAction<PageNumbers>>;
}


const CurrentPageContext = createContext({} as CurrentPageContextType);

export const useCurrentPage = () => {
    return useContext(CurrentPageContext);
}

export const CurrentPageProvider = ({ children }: CurrentPageProviderProps) => {

    const [currentPage, setCurrentPage] = useState<PageNumbers>(1);

 
    return(
        <CurrentPageContext.Provider value={{
            currentPage,
            setCurrentPage,
        }}>
            {children}
        </CurrentPageContext.Provider>
    )
}