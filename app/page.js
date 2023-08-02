import dynamic from 'next/dynamic';
import styles from './styles/page.module.css';
import ScrollingImages from './scrollingImages';
import Layout from './layoutMenu';

const ImageContainer = dynamic(() => import('./imgContainer'), {
  ssr: false,
});

// const ScrollingImages = dynamic(() => import('./scrollingImages'), {
//   ssr: false,
// });

export const metadata = {
  title: "Zampa è bravo",
};

const HomePage = () => (
  <div>
    <Layout>
    </Layout>
    <h1 className={styles.title}>ZAMPA E' IL PIU' GRANDE</h1>
    <ImageContainer />
    <ScrollingImages />
  </div>
);

export default HomePage;

