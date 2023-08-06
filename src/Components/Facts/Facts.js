import "./facts.css";

const Facts = () => {
  return (
    <div className="factsContainer">
      <div className="factsLeft">
        <img src="/photos/dog.png" alt="" className="adoptLoveImg" />
      </div>
      <div className="factsRight">
        <h3 className="heading">#AdoptLove</h3>
        <span>
          <p>
            Approximately 1478 dogs & cats die every day on road in India.
            FureverHome is on a mission to provide every dog and cat a home
            before 2035. It's just one of the many ways FureverHome gives back
            and helps you become a part of something larger. Join FureverHome
            Community and help setting up Pet houses in your surrounding for
            strays.
          </p>
        </span>
        <button className="adoptButton">Adopt Love</button>
      </div>
    </div>
  );
};

export default Facts;
