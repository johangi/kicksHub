import { useState } from "react";
import { useShoesContext } from "../hooks/useShoeContext";
import { useAuthContext } from "../hooks/useAuthContext";

const UpdateShoe = () => {
    const { dispatch } = useShoesContext();
    const { user } = useAuthContext();

    const [id, setID] = useState('');
    const [title, setTitle] = useState('');
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [articlenumber, setArticleNumber] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();

        if (!user) {
            setError('You must be logged in');
            return;
        }

        const shoe = { id, title, model, brand, price, articlenumber };

        const response = await fetch(`/api/shoes/${id}`, {
            method: 'PUT',
            body: JSON.stringify(shoe),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json();
        console.log(json);

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }
        if (response.ok) {
            setTitle('');
            setModel('');
            setBrand('');
            setPrice('');
            setError(null);
            setEmptyFields(['title']);
            console.log(emptyFields)
            console.log('shoe updated', json);
            dispatch({ type: 'UPDATE_SHOE', payload: json })
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Update a shoe</h3>
            <label>Shoe ID:</label>
            <input type="text" onChange={(e) => setID(e.target.value)} value={id} className={emptyFields.includes('id') ? 'error' : ''} />
            <label>Shoe Title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className={emptyFields.includes('title') ? 'error' : ''} />
            <label>Shoe Model:</label>
            <input type="text" onChange={(e) => setModel(e.target.value)} value={model} className={emptyFields.includes('model') ? 'error' : ''} />
            <label>Shoe Brand</label>
            <input type="text" onChange={(e) => setBrand(e.target.value)} value={brand} className={emptyFields.includes('brand') ? 'error' : ''} />
            <label>Shoe Price</label>
            <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} className={emptyFields.includes('price') ? 'error' : ''} />
            <label>Shoe Article Number</label>
            <input type="number" onChange={(e) => setArticleNumber(e.target.value)} value={articlenumber} className={emptyFields.includes('articlenumber') ? 'error' : ''} />
            <button>Update Shoe</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default UpdateShoe;