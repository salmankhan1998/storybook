import Image from 'next/image'
import styles from './page.module.css'
import ArticleCard from '@/components/ArticleCardHome/ArticleCardHome'
import DummyImage from '/assets/image.jpg'


export default function Home() {
  // const getData = async () => {
  //   const res = await axios.get("https://api.ipify.org/?format=json");
  //   console.log(res.data);
  //   setIP(res.data.ip);
  // };

  // useEffect(() => {
  //   //passing getData method to the lifecycle method
  //   getData();
  // }, []);
  return (
    <main className={styles.main}>
      <h1>This Project is design for specifically <strong>storybook</strong> integration</h1>
      {/* <ArticleCard
        id={1}
        title='title1'
        text="dummy text 1"
        author='author1'
        articleImage='/image.jpg'
      /> */}
    </main>
  )
}
