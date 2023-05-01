type Props = {
  iconCode: string;
};

const WeatherIcon = ({ iconCode }: Props) => {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${iconCode.toLowerCase()}.png`}
      alt={`${iconCode} flag`}
    />
  );
};

export default WeatherIcon;
