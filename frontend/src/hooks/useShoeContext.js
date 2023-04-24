import { ShoesContext } from "../context/ShoeContext";
import { useContext } from "react";

export const useShoesContext = () => {
    const context = useContext(ShoesContext);

    if (!context) {
        throw Error('useShoesContext must be used inside a ShoesContextProvider');
    }

    return context;
}