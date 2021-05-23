import React from 'react';
import {InputBuscador,FormBuscador,ButtonBuscador,GlobalStyle,IBuscador,DivBuscador} from '../Styles/Style';
import {useBuscar} from '../hook/useBuscar';
import {useModal} from '../hook/useModal';
import { Modal } from './Modal';

function Buscador() {

    const {buscar} = useBuscar("");

    const {verModal,setVerModal,openModal}=useModal(false);

    return (
        <DivBuscador>
            <GlobalStyle/>
            <FormBuscador>
                <ButtonBuscador><IBuscador className="fas fa-search" onClick={openModal}></IBuscador></ButtonBuscador>  
                <InputBuscador value={buscar} onClick={openModal} placeholder="Sabor de guajolota, bebida..." type="text" readOnly/>
                <Modal verModal={verModal} setVerModal={setVerModal} />
            </FormBuscador>
        </DivBuscador>
    )
}

export default Buscador
