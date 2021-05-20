import React from 'react';
import {Input,Form,Button,GlobalStyle,I} from './Style';
import {useBuscar} from '../hook/useBuscar';
import {useModal} from '../hook/useModal';


import { Modal } from './Modal';

function Buscador() {
    //const [buscar, setBuscar] = useState("comidas");

    // useEffect(() => {
    //     document.title=`${buscar}`;
    // },);

    const {buscar, escribir} = useBuscar("");

    const {verModal,setVerModal,openModal}=useModal(false);

    // const [verModal, setVerModal] = useState(false);

    // const openModal = () => {
    //     setVerModal(prev => !prev);
    // };

    return (
        <div>
            <GlobalStyle/>
            <Form>
                <Button><I className="fas fa-search" onClick={openModal}></I></Button>  
                <Input value={buscar} onClick={openModal} placeholder="Sabor de guajolota, bebida..." onChange={escribir} type="text" readOnly/>
                <Modal verModal={verModal} setVerModal={setVerModal} />
            </Form>
            {/* <section>
                <ul>
                    {comidas.map((comida, index) => (
                        <ListaComidasId {...comida} key={index} />
                    ))}
                </ul>           
            </section> */}
        </div>
    )
}

export default Buscador
