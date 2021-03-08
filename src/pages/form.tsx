import styles from '../styles/pages/Home.module.scss';
import Head from 'next/head';
import { Register } from '../components/Register';

export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Head>
                    <title>Arthur Balboa</title>
                </Head>

                <Register />
            </div>
            <img className={styles.imgBottom} src="starship.png" alt="" />
        </div>
    )
}
