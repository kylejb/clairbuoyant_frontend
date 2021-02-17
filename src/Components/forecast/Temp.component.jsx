const TempCard = props => {
  return (
    <>
      <h1>Temp Chart</h1>
      <div className="card-heading"> {props.temp}˚C </div>
      <div className="card-value mt-4"></div>
    </>
  );
};

export default TempCard;
