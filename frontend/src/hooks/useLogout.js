import { useAuthContext } from './useAuthContext';
import { useShoesContext } from './useShoeContext';

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: shoesDispatch} = useShoesContext();

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user');

        // dispatch logout action
        dispatch({type: 'LOGOUT'});
        shoesDispatch({type: 'SET_SHOES', payload: null});
    }

    return { logout }
}