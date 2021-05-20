import {useState} from 'react';

export function useModal(inicial) {

    const [verModal, setVerModal] = useState(inicial);

    const openModal = () => {
        setVerModal(prev => !prev);
    };

    return {verModal, setVerModal, openModal};
};







