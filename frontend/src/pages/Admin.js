import { useEffect } from "react";
import { useShoesContext } from "../hooks/useShoeContext";
import { useAuthContext } from "../hooks/useAuthContext";

import ShoesForm from "../components/ShoeForm";
import UpdateShoe from "../components/UpdateShoe";

const Admin = () => {
    return (
        <div>
            <div className="shoeForms">
                <ShoesForm />
            </div>
            <div className="shoeForms">
                <UpdateShoe />
            </div>
        </div>
    );
}

export default Admin;