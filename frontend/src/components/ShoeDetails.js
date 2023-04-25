import { useShoesContext } from '../hooks/useShoeContext';
import { useAuthContext } from "../hooks/useAuthContext";

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ShoeDetails = ({ shoe }) => {
    const { dispatch } = useShoesContext();
    const { user } = useAuthContext();

    const handleClick = async () => {
        if (!user) {
            return;
        }

        const response = await fetch('/api/shoes/' + shoe._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_SHOE', payload: json })
        }
    }

    return (
        <div className="shoe-details" id={shoe._id}>
            <h4>{shoe.title}</h4>
            <p><strong>Model: </strong>{shoe.model}</p>
            <p><strong>Brand: </strong>{shoe.brand}</p>
            <p><strong>Price: </strong>{shoe.price}$</p>
            <p><strong>Article Number: </strong>{shoe.articlenumber}</p>
            <p>{formatDistanceToNow(new Date(shoe.createdAt), { addSuffix: true })}</p>
            {user && user.admin && <span className="material-symbols-outlined" onClick={handleClick}>delete</span>}
        </div>
    );
}

export default ShoeDetails;