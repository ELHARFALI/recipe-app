import { createContext, useContext, useReducer } from "react";

import reducer from '../reducer/main_reducer'


const MainContext = createContext()

const initialState = {
    items_filtred: []
}

export const MainProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    

    


    return (
        <MainContext.Provider value={{ ...state }}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => {
    return useContext(MainContext)
}  