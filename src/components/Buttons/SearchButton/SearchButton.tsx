import './SearchButton.scss';
type Props = {
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export const SearchButton = ({ text = 'Search', onClick, disabled }: Props) => {
  return (
    <button className="search-button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
