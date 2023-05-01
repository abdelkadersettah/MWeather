import { Header, Hero, MyWeather, WeatherFilter } from '../../components';

type Props = {};

export const Home = ({}: Props) => {
  return (
    <div>
      <Header />
      <Hero />
      <WeatherFilter />
      <MyWeather />
    </div>
  );
};
