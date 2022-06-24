import Link from 'next/link';
import { FaSignInAlt } from 'react-icons/fa';
import styles from '../styles/components/Logon.module.scss';

export function Logon() {
    return (
        <div className={styles.logonContainer}>
            <section className={styles.form}>
                <img src="/icons/death-star.svg" />
                <form>
                    <Link href="/Lists">
                        <button className={styles.button} type="submit">Começar</button>
                    </Link>

                    <Link href="/form">
                        <div className={styles.backLink}>
                            <FaSignInAlt size={16} />
                            ~form teste~
                        </div>
                    </Link>
                </form>
            </section>

            <img src="/icons/heroes.png" alt="" className="" />
        </div>
    );
}

