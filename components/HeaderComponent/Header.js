import styles from './header.module.css';
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.header}>            
            <h3>AutoSecretary</h3>
        </header>
    )
}