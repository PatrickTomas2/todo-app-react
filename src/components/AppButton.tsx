interface Props {
  children: string;
  onButtonClick: () => void;
}

const AppButton = ({ children, onButtonClick }: Props) => {
  return (
    <div className="btn">
      <button id="button" type="button" onClick={onButtonClick}>
        {children}
      </button>
    </div>
  );
};

export default AppButton;
