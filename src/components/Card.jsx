function Card({ title, description }) {
  return (
    <div className="card">
     <img
  src="https://picsum.photos/300/180"
  alt="card"
  className="card-img"
/>


      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>View More</button>
      </div>
    </div>
  );
}

export default Card;
