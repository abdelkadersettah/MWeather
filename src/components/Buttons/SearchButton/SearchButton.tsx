import './SearchButton.scss';
type Props = {
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const SearchButton = ({ text = 'Search', onClick }: Props) => {
  return (
    <button className="search-button" onClick={onClick}>
      {text}
    </button>
  );
};
