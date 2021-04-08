import { Banner } from '../components/Banner';
import { Carousel } from '../components/Carousel';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <Carousel />
    </>
  );
}
