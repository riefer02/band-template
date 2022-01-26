import Head from 'next/head';
import HomePageLayout from '../components/HomePageLayout';
import Navigation from '../components/Navigation';
import styles from '../assets/styles/pages/_home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Lewd Dudes</title>
        <link rel="icon" href="/tld-logo.svg" />
      </Head>
      <Navigation />
      <div className={styles.background}>
        <HomePageLayout />
        <div className={styles.homeMarquee}>
          <div className={styles.logoContainer}>
            <i className="icon-tld-logo"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
