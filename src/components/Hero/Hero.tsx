import './Hero.scss';

type Props = {};

export const Hero = (props: Props) => {
  return (
    <section className="main-hero">
      <p className="main-hero__text">
        <span>Never let the weather catch you off guard again,</span>
        <span>
          with{' '}
          <span className="main-hero__app-name">
            <span className="main-hero__app-name--focused">MW</span>
            eather
          </span>
        </span>
      </p>
    </section>
  );
};
