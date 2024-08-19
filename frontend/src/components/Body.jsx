import "./Body.css";
const Body = ({ cards }) => {
  return (
    <div className="main-body">
      <div className="cards-body">
        <div className="card-body-inline">
          <div className="container row row-card">
            {cards.length > 0 ? (
              // eslint-disable-next-line react/prop-types
              cards.map((card, i) => (
                <div className="col-md-6 margin-b-class" key={i}>
                  <div className="card w-card">
                    <div className="card-body">
                      <h5 className="card-title-body">{card.title}</h5>
                      <hr />
                      <p className="card-text-body">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-card">No Card Found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
