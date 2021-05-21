import React from 'react';
import {Input,Form,Button,GlobalStyle,I} from '../Styles/Style';
import {useBuscar} from '../hook/useBuscar';
import {useModal} from '../hook/useModal';
import { Modal } from './Modal';

function Buscador() {

    const {buscar} = useBuscar("");

    const {verModal,setVerModal,openModal}=useModal(false);

    return (
        <div>
            <GlobalStyle/>
            <Form>
                <Button><I className="fas fa-search" onClick={openModal}></I></Button>  
                <Input value={buscar} onClick={openModal} placeholder="Sabor de guajolota, bebida..." type="text" readOnly/>
                <Modal verModal={verModal} setVerModal={setVerModal} />
            </Form>
        </div>
    )
}

export default Buscador
