import styles from '../styles/components/Bar.module.scss'

export function Bar() {
    return (
        <header className={styles.bar}>
            <div>
                <div style={{ width: '100%' }}></div>
            </div>
        </header>
    );
}