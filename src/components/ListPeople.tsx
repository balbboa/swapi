import styles from '../styles/components/ListPlanet.module.scss'
import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';


export function ListPeople() {

    const { closeListPeople } = useContext(ChallengesContext);
    const peopleUrl = 'https://swapi.dev/api/people/';
    const [people, setPeople] = useState([]);


    useEffect(() => {
        async function getPeople() {
            const res = await fetch(peopleUrl);
            const data = await res.json();

            const { name, gender, birth_year, height, mass, hair_color, skin_color, eye_color } = data;
            setPeople(data.results);
        }
        getPeople();
    }, [])

    return (
        <div className={styles.list}>
            {people.length ? (
                <ul className={styles.card}>

                    {people.map(({ name, gender, birth_year, height, mass, hair_color, skin_color, eye_color }) => (

                        <div className={styles.cardbody}>
                            <li className={styles.planet}>
                                <header>{name}</header>
                                <p>Gênero: {gender} </p>
                                <p>Nascimento: {birth_year}</p>
                                <p>Altura: {height} </p>
                                <p>Peso: {mass}</p>
                                <p>Cabelo: {hair_color}</p>
                                <p>Pele: {skin_color}</p>
                                <p>Olhos: {eye_color}</p>
                            </li>
                        </div>
                    ))}

                    <button type="button" onClick={closeListPeople}>
                        <img src="/icons/close.svg" />
                    </button>
                </ul>
            ) : <></>}



        </div>
    );
}

