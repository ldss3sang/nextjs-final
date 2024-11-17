import styles from "../styles/about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Us</h1>
      <p className={styles.paragraph}>
        Welcome to the official explorer for The New York Times Best Seller list explorer.
      </p>
      <p className={styles.paragraph}>
        We hope you enjoy your stay!
      </p>
      <a href="/" className={styles.link}>
        Back to Home →
      </a>
    </div>
  );
}