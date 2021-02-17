import WindSpeed from './WindSpeed';
import WindDirection from './WindDirection';


const WindCard = props => {
  return (
    <>
      <h1>Wind Chart</h1>
      <div className="card-heading"> Wind Status</div>
      <div className="card-value mt-4">
        <WindDirection /> {props.windDir}˚
      </div>
      <div>
        <WindSpeed />
        <p className="card-value mt-4">{props.windSpeed} km/h</p>
      </div>
    </>
  );
};

export default WindCard;
