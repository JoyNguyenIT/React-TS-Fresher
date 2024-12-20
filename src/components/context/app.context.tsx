import { createContext, useContext, useState } from "react";

interface IAppContext {
    isAuthenticated: boolean,
    isLoading: boolean
    user: IUser | null,
    setIsAuthenticated: (v: boolean) => void,
    setUser: (v: IUser) => void
    setIsLoading: (v: boolean) => void
}

const CurrentAppContext = createContext<IAppContext | null>(null);

interface TProp {
    children: React.ReactNode
}



export const AppProvider = (props: TProp) => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [user, setUser] = useState<IUser | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    return (
        <CurrentAppContext.Provider value={{
            isAuthenticated, user, setIsAuthenticated, setUser, isLoading, setIsLoading
        }} >
            {props.children}
        </CurrentAppContext.Provider>
    );
};

export const useCurrentApp = () => {
    const currentAppContext = useContext(CurrentAppContext);

    if (!currentAppContext) {
        throw new Error(
            "useCurrentUser has to be used within <CurrentUserContext.Provider>"
        );
    }

    return currentAppContext;
};