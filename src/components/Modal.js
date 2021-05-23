import React from 'react';
import { useBuscar } from '../hook/useBuscar';
import { SpanBuscador, SectionBuscador, InputBuscador, FormBuscador, ButtonBuscador, GlobalStyle, IBuscador, ContenedorModalBuscador, CierreBotonModalBuscador, ContenedorBotonesBuscador, DivBuscador } from '../Styles/Style';


export const Modal = ({ verModal, setVerModal }) => {

    const { buscar, escribir, comidas, ListaComidasId } = useBuscar("");

    return (
        <>
            {verModal ? (
                <ContenedorModalBuscador verModal={verModal}>
                    <GlobalStyle />
                    <ContenedorBotonesBuscador>
                        <FormBuscador modal>
                            <ButtonBuscador><IBuscador className="fas fa-search"></IBuscador></ButtonBuscador>
                            <InputBuscador value={buscar} placeholder="Sabor de guajolota, bebida..." onChange={escribir} type="text" inputColor="rebeccapurple" />
                        </FormBuscador>
                        <DivBuscador modal>
                            <CierreBotonModalBuscador onClick={() => setVerModal(prev => !prev)} value="cancelar"><SpanBuscador>Cancelar</SpanBuscador></CierreBotonModalBuscador>
                        </DivBuscador>
                    </ContenedorBotonesBuscador>
                    <SectionBuscador>
                        {comidas.map((comida, index) => (
                            <ListaComidasId {...comida} key={index} />
                        ))}
                    </SectionBuscador>
                </ContenedorModalBuscador>
            ) : null}
        </>
    );
};