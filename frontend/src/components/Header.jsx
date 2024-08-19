import "./Header.css";
import { FaArrowRight } from "react-icons/fa";
import Body from "./Body";
import Footer from "./Footer";
import { useState, useEffect } from "react";
const Header = () => {
  const [search, setSearch] = useState(undefined);
  const [cards, setCards] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = search
        ? await fetch(`http://127.0.0.1:5000/api/cards/search/${search}`)
        : await fetch(`http://127.0.0.1:5000/api/cards`, {
            method: "GET",
          });

      const cards = await res.json();

      setCards(cards);
    } catch (error) {
      console.log(error);
    }
  };

  const getCardsData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/cards`, {
        method: "GET",
      });
      const cards = await response.json();

      setCards(cards);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCardsData();
  }, []);

  return (
    <div>
      <div className="card w-main mt-2 ml-2 mr-2 p-2 bg-black text-white">
        <div className="w-second">
          <h5 className="card-title">
            <div className="container text-center">
              <div className="row">
                <div className="col">Abstract | Help Center</div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col">
                  <div>
                    <button className="btn">Submit a Request</button>
                  </div>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </h5>
          <hr />
          <div className="b-purple">
            <div className="card-text">
              <div className="c-class">
                <div>
                  <h1 className="font-class">How Can We Help?</h1>
                </div>
                <div>
                  <div>
                    <form className="d-flex" role="search" action="">
                      <input
                        className="form-control me-2 searches"
                        type="search"
                        name="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                      />
                      <span className="m-fifty-five">
                        <FaArrowRight onClick={handleSearch} />
                      </span>
                      {/* <button
                        className="btn btn-outline-success mt-2"
                        type="submit"
                      > */}
                      {/* Submit  */}
                      {/* </button> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Body cards={cards} />
        <Footer />
      </div>
    </div>
  );
};

export default Header;
