import { FaSignInAlt } from 'react-icons/fa'
import styles from '../styles/components/Logon.module.scss';
import Link from 'next/link'

export function Logon() {
    return (
        <div className={styles.logonContainer}>
            <section className={styles.form}>
                <img src="/icons/death-star.svg" />
                <form>
                    <h1>
                        Faça seu Logon
                    </h1>
                    <input placeholder="Sua ID" />
                    <Link href="/Lists">
                        <button className={styles.button} type="submit">Entrar</button>
                    </Link>

                    <Link href="/form">
                        <div className={styles.backLink}>
                            <FaSignInAlt size={16} />
                            Não tenho cadastro
                        </div>
                    </Link>
                </form>
            </section>

            <img src="/icons/heroes.png" alt="" className="" />
        </div>
    );
}

