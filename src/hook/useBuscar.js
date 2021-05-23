import React, { useState, useMemo } from 'react';
//import {useBd} from './useBd';
import ListaComidas from '../Bsdate/dbGuappjolotas.json';
import { MensajeBuscador, IBuscador, H1Buscador } from '../Styles/Style';
// Arreglar Estilos
//
export const useBuscar = (inicial) => {
    // const {loading,data}=useBd("https://restcountries.eu/rest/v2/all");
    // const {}=!!data && data
    const [buscar, setBuscar] = useState(inicial);

    const escribir = (b) => setBuscar(b.target.value);

    const comidas = useMemo(() => {
        if (!buscar) {
            return [{ "name": "Escriba la comida a buscar" }];
        } else {
            return ListaComidas.filter((comida) => {
                return (
                    comida.name.toLowerCase().includes(buscar.toLowerCase()) ||
                    comida.type.toLowerCase().includes(buscar.toLowerCase())
                );
            });
        };
    }, [buscar]);


    const ListaComidasId = ({ name, type, imageUrl }) => {

        if (name === "Escriba la comida a buscar") {
            return (
                <MensajeBuscador>
                    <IBuscador modal className="fas fa-search"></IBuscador>
                    <H1Buscador>Realiza una Busqueda</H1Buscador>
                </MensajeBuscador>
            )
        } else {
            return (
                <li>
                    <div>
                        <img src={imageUrl} style={{ width: "10rem" }} alt="" />
                    </div>
                    <div>
                        {name} <span>{type}</span>
                    </div>
                </li>
            )
        }
    };

    return { buscar, escribir, comidas, ListaComidasId };
};