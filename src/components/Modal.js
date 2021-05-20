import React from 'react';

import { useBuscar } from '../hook/useBuscar';
import { Input, Form, Button, GlobalStyle, I, ContenedorModal, CierreBotonModal, ContenedorBotones, Div } from './Style';







export const Modal = ({ verModal, setVerModal }) => {
    // const modalRef = useRef();

    //   const animation = useSpring({
    //     config: {
    //       duration: 250
    //     },
    //     opacity: showModal ? 1 : 0,
    //     transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    //   });

    // const closeModal = e => {
    //     if (modalRef.current === e.target) {
    //         setShowModal(false);
    //     }
    // };

    // const keyPress = useCallback(
    //     e => {
    //         if (e.key === 'Escape' && showModal) {
    //             setShowModal(false);
    //             console.log('I pressed');
    //         }
    //     },
    //     [setShowModal, showModal]
    // );

    // useEffect(
    //     () => {
    //         document.addEventListener('keydown', keyPress);
    //         return () => document.removeEventListener('keydown', keyPress);
    //     },
    //     [keyPress]
    // );



    const { buscar, escribir, comidas, ListaComidasId } = useBuscar("");

    return (
        <>
            {verModal ? (
                <ContenedorModal verModal={verModal}>
                    <GlobalStyle />
                    <ContenedorBotones>
                        <Form modal>
                            <Button><I className="fas fa-search"></I></Button>
                            <Input value={buscar} placeholder="Sabor de guajolota, bebida..." onChange={escribir} type="text" inputColor="rebeccapurple" />
                        </Form>
                        <Div>
                            <CierreBotonModal onClick={() => setVerModal(prev => !prev)} value="cancelar"><span>Cancelar</span></CierreBotonModal>
                        </Div>
                    </ContenedorBotones>
                    <section>
                        {/* <ul> */}
                            {comidas.map((comida, index) => (
                                <ListaComidasId {...comida} key={index} />
                            ))}
                        {/* </ul> */}
                    </section>
                </ContenedorModal>
            ) : null}
        </>
    );
};