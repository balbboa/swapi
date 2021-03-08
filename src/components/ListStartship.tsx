import styles from '../styles/components/ListPlanet.module.scss'
import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';


export function ListStarship() {

    const { closeListStarship } = useContext(ChallengesContext);
    const starshipUrl = 'https://swapi.dev/api/starships/';
    const [starship, setStarship] = useState([]);


    useEffect(() => {
        async function getStarship() {
            const res = await fetch(starshipUrl);
            const data = await res.json();

            const { name, model, passengers, length, cargo_capacity, starship_class, MGLT } = data;
            setStarship(data.results);
        }
        getStarship();
    }, [])

    return (
        <div className={styles.list}>
            {starship.length ? (
                <ul className={styles.card}>

                    {starship.map(({ name, model, passengers, length, cargo_capacity, starship_class, MGLT }) => (

                        <div className={styles.cardbody}>
                            <li className={styles.planet}>
                                <header>{name}</header>
                                <p>Modelo: {model} </p>
                                <p>Passageiros: {passengers}</p>
                                <p>Tamanho (m): {length} </p>
                                <p>Capacidade (kg): {cargo_capacity}</p>
                                <p>Velocidade (Megalight): {MGLT}</p>
                                <p>Classe: {starship_class}</p>
                            </li>
                        </div>
                    ))}

                    <button type="button" onClick={closeListStarship}>
                        <img src="/icons/close.svg" />
                    </button>
                </ul>
            ) : <></>}



        </div>
    );
}

