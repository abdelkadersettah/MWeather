import { Header, MyWeather } from '../../components';

type Props = {};

export const Home = ({}: Props) => {
  return (
    <div>
      <Header />
      {/* <Countries /> */}
      <MyWeather />
    </div>
  );
};
