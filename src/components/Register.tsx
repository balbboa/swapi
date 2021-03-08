import { FaArrowLeft } from 'react-icons/fa'
import styles from '../styles/components/Register.module.scss';
import Link from 'next/link'


export function Register() {
    return (
        <div className={styles.registerContainer}>
            <div className={styles.content}>
                <section>
                    <img src="/icons/death-star.svg" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e consulte o universo Star Wars.</p>

                    <Link href="/">
                        <div className={styles.backLink}>
                            <FaArrowLeft size={16} color="#E02041" />
                            Voltar
                        </div>
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="Whatsapp" />

                    <div className={styles.inputGroup}>
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className={styles.button} type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
