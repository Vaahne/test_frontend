import styles from './Greeting.module.css'

export default function Greeting() {
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get('name');

  return (
     <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Good Morning,</h1>
        <h2 className={styles.name}>{name}!</h2>
        <p className={styles.message}>Have a wonderful day ahead 🌞</p>
      </div>
    </div>
  );
}
