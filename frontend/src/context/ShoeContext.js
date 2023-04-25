import { createContext, useReducer } from "react";

export const ShoesContext = createContext();

export const shoesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SHOES':
            return {
                shoes: action.payload
            }
        case 'CREATE_SHOE':
            return {
                shoes: [action.payload, ...state.shoes]
            }
        case 'DELETE_SHOE':
            return {
                shoes: state.shoes.filter(s => s._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const ShoesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shoesReducer, { shoes: null });

    return (
        <ShoesContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ShoesContext.Provider>
    )
}