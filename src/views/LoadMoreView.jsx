const LoadMoreView = ({handleClick}) => {
  return (
    <div onClick={handleClick} className="d-flex justify-content-center align-items-center my-5">
      <button>Daha Fazla</button>
    </div>
  );
};

export default LoadMoreView;
