import {useEffect, useState }from 'react';

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async () => {

        setState({ ...state, isLoading: true });

        try {
            const resp = await fetch(url, {
                headers: {
                    'Authorization': `Bearer BQAs9RXkE8eUkW25lzNCMmNbUImZNKlkX6dRhtxFqYDT8aEvk7HbwOzoNy1hDx00glqI5OXw9Wqe0RNROKT3N7FGUsn_HUc-EQ0eflpWHgau3lCkh_DAWhxJyGUmeGKpRvnjmQzO52E"`,
                    'Content-Type': 'application/json'
                }
            });

            if (!resp.ok) {
                const errorMessage = await resp.json();
                console.log('Error en la solicitud:', errorMessage);
                throw new Error('Error en la solicitud');
            }

            const data = await resp.json();

            setState({
                data,
                isLoading: false,
                hasError: null,
            });

        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                hasError: error.message,
            });
        }
    };

    useEffect(() => {
        getFetch();
    }, [url])
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
};
        