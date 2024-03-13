// pages/index.tsx
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          src="/images/banniere.jpg"
          alt="Landifornia Estate Header"
          className={styles.headerImage}
        />
        <h1>Bienvenue chez Landifornia Estate</h1>
        <p>
          Votre partenaire de confiance pour trouver la maison de vos rêves.
        </p>
      </header>
      <main className={styles.main}>
        <h2>Nos Propriétés</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img
              src="https://via.placeholder.com/400x300?text=Maison+de+Luxe+à+Paris"
              alt="Maison de Luxe à Paris"
              className={styles.cardImage}
            />
            <h3>Maison de Luxe à Paris</h3>
            <p>Une magnifique maison avec vue sur la tour Eiffel.</p>
          </div>
          <div className={styles.card}>
            <img
              src="https://via.placeholder.com/400x300?text=Villa+au+bord+de+la+mer"
              alt="Villa au bord de la mer"
              className={styles.cardImage}
            />
            <h3>Villa au bord de la mer</h3>
            <p>Profitez du soleil et de la mer dans cette superbe villa.</p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        © 2024 Landifornia Estate. Tous droits réservés.
      </footer>
    </div>
  );
}
