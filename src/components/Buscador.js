//import React, { useEffect, useState } from 'react';
import {Input} from './Style';
import {useBuscar} from '../hook/useBuscar';

function Buscador() {
    //const [buscar, setBuscar] = useState("comidas");

    // useEffect(() => {
    //     document.title=`${buscar}`;
    // },);

    const {buscar, escribir,comidas,ListaComidasId} = useBuscar("");

    return (
        <div>
            <section>
                {/* <Input value={buscar} onChange={(b)=>setBuscar(b.target.value)} type="text" inputColor="rebeccapurple"/> */}
                <Input value={buscar} placeholder="comidas" onChange={escribir} type="text" inputColor="rebeccapurple"/>
                {/* <Button primary>buscar</Button>   */}
            </section>
            <section>
                <ul>
                    {comidas.map((comida, index) => (
                        <ListaComidasId {...comida} key={index} />
                    ))}
                </ul>           
            </section>
        </div>
    )
}

export default Buscador
