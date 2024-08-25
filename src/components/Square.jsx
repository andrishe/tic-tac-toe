export const Square = ({ value, handleSquare }) => {
  return (
    <>
      <button className="square" onClick={handleSquare}>
        {value}
      </button>
    </>
  );
};
