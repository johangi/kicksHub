import { useState } from "react";
import { useShoesContext } from "../hooks/useShoeContext";
import { useAuthContext } from "../hooks/useAuthContext";

const ShoeForm = () => {
    const { dispatch } = useShoesContext();
    const { user } = useAuthContext();

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

        const shoe = { title, model, brand, price, articlenumber };

        const response = await fetch('/api/shoes/', {
            method: 'POST',
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
            setArticleNumber('');
            setError(null);
            setEmptyFields(['']);
            console.log(emptyFields)
            console.log('new shoe added', json);
            dispatch({ type: 'CREATE_SHOE', payload: json })
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new shoe</h3>
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
            <button>Add Shoe</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default ShoeForm;