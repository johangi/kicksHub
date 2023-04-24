import { useEffect } from "react";
import { useShoesContext } from "../hooks/useShoeContext";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import ShoesDetails from '../components/ShoeDetails';
import ShoesForm from "../components/ShoeForm";

const Home = () => {
    const { user } = useAuthContext();
    const { shoes, dispatch } = useShoesContext()

    useEffect(() => {
        const fetchShoes = async () => {
            const response = await fetch('/api/shoes', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_SHOES', payload: json });
            }
        }

        if (user) {
            fetchShoes();
        }
    }, [dispatch, user]);

    return (
        <div className="home">
            <div className="Shoes">
                {shoes && shoes.map((shoe, index) => {
                    if (index < 10) {
                        return (
                            <ShoesDetails key={shoe._id} shoe={shoe} />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            {user.admin && <ShoesForm />}
        </div>
    );
}

export default Home;