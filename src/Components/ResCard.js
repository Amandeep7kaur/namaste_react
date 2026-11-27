const ResCard = ({resData}) => {
  const {name,cuisines,avgRating,costForTwo} = resData?.info;
  return (
    <div className="res-card">
      <img src="https://www.liveeatlearn.com/wp-content/uploads/2025/09/Veggie-Pizza-12.jpg"></img>
      <h2>{name}</h2>
      <p style={{ marginBottom: "none" }}>{cuisines.join(", ")}</p>
      <div className="card-price">
        <span>{costForTwo}</span>
        <span>{avgRating} stars</span>
      </div>
    </div>
  );
};
export default ResCard;