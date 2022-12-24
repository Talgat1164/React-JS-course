import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args) => { // ...args не должно было быть до этого | я скопировал уже с готового репозитория
        try {
            setIsLoading(true)
            await callback(...args) // ...args не должно было быть до этого | я скопировал уже с готового репозитория
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}