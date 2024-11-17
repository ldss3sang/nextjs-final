import Link from "next/link";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  return (
    <ul className={styles.nav}>
      <li className={styles.navItem}>
        <Link href="/">Home</Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
}