import styles from '../styles/components/ListPlanet.module.scss'
import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';


export function ListPlanet() {

    const { closeListPlanet } = useContext(ChallengesContext);
    const planetUrl = 'https://swapi.dev/api/planets/';
    const [planets, setPlanets] = useState([]);


    useEffect(() => {
        async function getPlanets() {
            const res = await fetch(planetUrl);
            const data = await res.json();

            const { name, diameter, rotation_period, orbital_period, gravity, population, climate } = data
            setPlanets(data.results);
        }
        getPlanets();
    }, [])

    return (
        <div className={styles.list}>
            {planets.length ? (
                <ul className={styles.card}>

                    {planets.map(({ name, diameter, rotation_period, orbital_period, gravity, population, climate }) => (

                        <div className={styles.cardbody}>
                            <li className={styles.planet}>
                                <header>{name}</header>
                                <p>Diâmetro: {diameter} </p>
                                <p>Rotação: {rotation_period}</p>
                                <p>Orbita: {orbital_period} </p>
                                <p>Gravidade: {gravity}</p>
                                <p>Polpulação: {population} </p>
                                <p>Clima: {climate}</p>
                            </li>
                        </div>
                    ))}

                    <button type="button" onClick={closeListPlanet}>
                        <img src="/icons/close.svg" />
                    </button>
                </ul>
            ) : <></>}



        </div>
    );
}

