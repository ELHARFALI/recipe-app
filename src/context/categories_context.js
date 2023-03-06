import { useContext, createContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducer/categories_reducer";

const CategoriesContext = createContext()

const initialState = {
    categories: []
}

export const CategoriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    



    return (
        <CategoriesContext.Provider value={{ ...state }}>
            {children}
        </CategoriesContext.Provider>
    )
}


export const useCategoriesContext = () => {
    return useContext(CategoriesContext)
}