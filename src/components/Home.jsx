/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const Home = () => {
  const navi = useNavigate();
  const toprated = [
    {
      id: 1,
      title: "title of product ",
      name: "product name",
      image:
        "https://www.portotheme.com/wordpress/porto/shop23/wp-content/uploads/sites/95/2019/06/product-16-600x600.jpg",
      oldPrice: "$150",
      price: "$139",
    },

    {
      id: 2,
      title: "title of product ",
      name: "product name",
      image:
        "https://www.portotheme.com/wordpress/porto/shop23/wp-content/uploads/sites/95/2018/02/shop23_product-6-600x600.jpg",
      oldPrice: "$150",
      price: "$139",
    },
    {
      id: 3,
      title: "title of product ",
      name: "product name",
      image:
        "https://www.portotheme.com/wordpress/porto/shop23/wp-content/uploads/sites/95/2019/06/product-11-600x600.jpg",
      oldPrice: "$150",
      price: "$139",
    },
    {
      id: 4,
      title: "title of product ",
      name: "product name",
      image:
        "https://www.portotheme.com/wordpress/porto/shop23/wp-content/uploads/sites/95/2019/06/product-11-600x600.jpg",
      oldPrice: "$150",
      price: "$139",
    },
  ];
  return (
    <div className="home">
      <div className="image">
        <p>Discover our Arrivals!</p>
      </div>

      <div className="welcome">
        <h1>WELCOME TO LITTLE PORTO’S WORLD</h1>
        <p>Enjoy the exceptional quality in all our products</p>
      </div>

      <div className="banners">
        <div className="one">
          <div>
            <h1
              style={{
                fontFamily: '"Nanum Brush Script", cursive',
                marginBottom: "-25px",
              }}
            >
              DISCOUNTS
            </h1>
            <h2>UP TO 70%</h2>
          </div>
        </div>

        <div className="two">
          <div>
            <h2>SUMMER CLASSICS</h2>
          </div>
        </div>
        <div className="three">
          <div>
            <h2>MOTHER & DAUGHTER</h2>
          </div>
        </div>
      </div>

      <div className="banners">
        <div className="four">
          <div>
            <h2>BABIES OUTFITS</h2>
          </div>
        </div>
        <div className="five">
          <div>
            <h2>BABIES DRESSES</h2>
          </div>
        </div>
        <div className="six" onClick={() => navi("Shose")}>
          <div>
            <h2>SHOSES </h2>
          </div>
        </div>
      </div>
      <h1 className="top">top rated products</h1>

      <div className="toprated">
        {toprated.map((ele) => (
          <div className="card" key={ele.id}>
            <img src={ele.image} />
            <div>
              <span>{ele.name}</span>
              <h4>{ele.title}</h4>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BsStarHalf />
              <br></br>
              <span
                style={{
                  display: "inline",
                  textDecoration: "line-through",
                  marginRight: "15px",
                }}
              >
                ${ele.oldPrice}{" "}
              </span>
              <span style={{ fontWeight: "bold" }}> ${ele.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="Bestcoll">
        <div className="Bestone">
          <h1>Best Collections</h1>
          <p>Selected Products From Famous Brands</p>
        </div>

        <div className="Besttwo">
          <div className="inbest">
            <h3>Boys</h3>
          </div>
        </div>

        <div className="Bestthree">
          <div className="inbest">
            <h3>babies</h3>
          </div>
        </div>
        <div className="Bestfour">
          <div className="inbest">
            <h3>girls</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
