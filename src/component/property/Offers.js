const Offers = (props) => {
  return (
    <div className="container">
      <div className="flexContainer">
        <span className="Content">
          <h5>{props.id}</h5>
          <h5>{props.detailOverview}</h5>
          <h5>{props.price}</h5>
        </span>
      </div>
    </div>
  );
};

export default Offers;
