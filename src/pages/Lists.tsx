import styles from '../styles/pages/Home.module.scss';
import Head from 'next/head';
import { Bar } from '../components/Bar';
import { Profile } from '../components/Profile';
import { Back } from '../components/Back';


export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Head>
                    <title>Arthur Balboa</title>
                </Head>

                <Bar />
                <Profile />
                <Back />
            </div>
            <img className={styles.imgBottom2} src="starship.png" alt="" />
        </div>
    )
}
