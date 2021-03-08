import styles from '../styles/components/Back.module.scss'
import Link from 'next/link'
import { FaChevronCircleLeft } from 'react-icons/fa'



export function Back() {
    return (
        <Link href="/">
            <div className={styles.backButton}>
                <FaChevronCircleLeft size={96} color="#E02041" />
            </div>
        </Link>
    );
}