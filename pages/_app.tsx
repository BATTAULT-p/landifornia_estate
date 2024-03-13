// Importer AppProps de 'next/app' pour typer correctement les props.
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
// Importez vos styles globaux ici. Par exemple, pour un fichier CSS :
// import '../styles/globals.css';
// Pour un projet utilisant Tailwind CSS, vous pourriez avoir :
// import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  // Ici, vous pouvez ajouter des éléments qui doivent être présents sur toutes les pages
  // comme des Providers pour des contextes, des Layouts globaux, etc.

  return <Component {...pageProps} />;
}

export default MyApp;

// Ce fichier est un composant fonctionnel qui reçoit deux props :

// Component : le composant de la page active. Next.js s'occupe de l'importer pour vous en fonction de la route actuelle.
// pageProps : un objet contenant les props initiales que votre page peut avoir. Ces props peuvent être initialisés de manière statique ou serveur-side avec des fonctions comme getStaticProps ou getServerSideProps.
// Dans cet exemple, le fichier _app.tsx ne fait rien de plus que de rendre le composant de la page avec ses props, mais c'est l'endroit idéal pour insérer des logiques globales comme :

// La gestion des états globaux avec des contextes React ou des bibliothèques d'état comme Redux ou Zustand.
// L'insertion de styles globaux ou de bibliothèques CSS comme Tailwind CSS.
// L'ajout de composants de layout globaux qui enveloppent toutes vos pages, comme des en-têtes, des pieds de page, des sidebars, etc.
// L'initialisation de clients API ou de bases de données qui doivent être disponibles dans toute l'application.
// N'oubliez pas d'exporter par défaut le composant MyApp pour que Next.js puisse l'utiliser comme le composant racine de votre application.
