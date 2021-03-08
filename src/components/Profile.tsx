import styles from '../styles/components/Profile.module.scss';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';


export function Profile() {

  const { startListPlanet, startListPeople, startListStarship } = useContext(ChallengesContext);


  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard} onClick={startListPlanet}>
        <img src="icons\planets.svg" alt="Planets" />
        <div>
          <strong>Planetas</strong>
          <p>
            <img src="icons/level.svg" alt="level" />
            Acessar planetas
          </p>
        </div>
      </div>

      <div className={styles.profileCard} onClick={startListPeople}>
        <img src="icons\robot.svg" alt="robot" />
        <div>
          <strong>Personagens</strong>
          <p>
            <img src="icons/level.svg" alt="level" />
            Acessar personagens
          </p>
        </div>
      </div>

      <div className={styles.profileCard} onClick={startListStarship}>
        <img src="icons\ufo.svg" alt="ufo" />
        <div>
          <strong>Naves</strong>
          <p>
            <img src="icons/level.svg" alt="level" />
            Acessar naves
          </p>
        </div>
      </div>
    </div>

  );
}