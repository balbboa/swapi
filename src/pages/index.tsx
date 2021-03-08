import styles from '../styles/pages/Home.module.scss';
import Head from 'next/head';
import { Logon } from "../components/Logon";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Head>
          <title>Arthur Balboa</title>
        </Head>

        <Logon />
      </div>
      <img className={styles.imgBottom} src="starship.png" alt="" />
    </div>
  )
}
