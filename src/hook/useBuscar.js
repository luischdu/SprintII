import { useEffect, useState, useMemo } from 'react';
//import {useBd} from './useBd';
import ListaComidas from '../Bsdate/dbGuappjolotas.json';

import { Mensaje, I } from '../components/Style';

export const useBuscar = (inicial) => {
    // const {loading,data}=useBd("https://restcountries.eu/rest/v2/all");
    // const {id, name, status, species, image, gender}=!!data && data


    const [buscar, setBuscar] = useState(inicial);


    const comidas = useMemo(() => {
        if (!buscar) {
            return [{ "name": "Escriba la comida a buscar" }];
        } else {
            return ListaComidas.filter((comida) => {
                return (
                    console.log(buscar),
                    console.log(comida.name),
                    comida.name.toLowerCase().includes(buscar.toLowerCase()) ||
                    comida.type.toLowerCase().includes(buscar.toLowerCase())
                );
            });
        };
    }, [buscar]);


    const ListaComidasId = ({ name, type, imageUrl }) => {

        if (name === "Escriba la comida a buscar") {
            return (
                <Mensaje>
                    <I modal className="fas fa-search"></I>
                    <h1>Realiza una Busqueda</h1>
                </Mensaje>
            )
        } else {
            return (
                <li>
                    <div>
                        <img src={imageUrl} style={{ width: "100px" }} alt="" />
                    </div>
                    <div>
                        {name} <span>{type}</span>
                    </div>
                </li>
            )
        }

        // return (
        //     <li>
        //         <div>
        //             <img src={imageUrl} style={{ width: "100px" }} alt="" />
        //         </div>
        //         <div>
        //             {name} <span>{type}</span>
        //         </div>
        //     </li>
        // )
    };


    useEffect(() => {
        document.title = `${buscar}`;
    });

    const escribir = (b) => setBuscar(b.target.value);


    return { buscar, escribir, comidas, ListaComidasId };
};