const WaveCard = props => {
  return (
    <>
      <h1>Wave Height</h1>
      <div className="card-heading"> {props.wave}m </div>
      <div className="card-value mt-4"></div>
    </>
  );
};

export default WaveCard;
