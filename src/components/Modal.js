import React from 'react';
import { useBuscar } from '../hook/useBuscar';
import { Input, Form, Button, GlobalStyle, I, ContenedorModal, CierreBotonModal, ContenedorBotones, Div } from '../Styles/Style';


export const Modal = ({ verModal, setVerModal }) => {

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
                        {comidas.map((comida, index) => (
                            <ListaComidasId {...comida} key={index} />
                        ))}
                    </section>
                </ContenedorModal>
            ) : null}
        </>
    );
};