/* eslint-disable no-const-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsCart } from "react-icons/bs";
import { addCard } from "../redux/productSlice";
const Details = () => {
  const data = useSelector((state) => state.products.data);
  const cartList = useSelector((state) => state.products.cartList);
  const [count, setCount] = useState(0);

  const { id } = useParams();
  const isExist = cartList?.some(
    (ele) => +ele.id === +id && ele.count === count
  );
  console.log(isExist);

  const dispatch = useDispatch();
  const [done, setDone] = useState(false);
  // eslint-disable-next-line eqeqeq
  const item = data.filter((ele) => id == ele.id);
  const btn = {
    padding: "15px 19px",
    fontWeight: "bold",
    fontSize: "20px",
    border: "1px solid gray",
    backgroundColor: "white",
  };
  const product = item.map((ele) => (
    <>
      <div style={{ margin: "15px" }} key={ele.id}>
        <img src={ele.image} width="450px" height="455px" />
      </div>
      <div>
        <h1>{ele.name}</h1>
        <h3>{ele.title}</h3>
        <h3>
          <h4
            style={{
              display: "inline",
              textDecoration: "line-through",
              marginRight: "15px",
            }}
          >
            {" "}
            ${ele.oldPrice}
          </h4>
          ${ele.price}
        </h3>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet,<br></br> ante. Donec eu libero sit
          amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
          placerat eleifend leo.
        </p>
        <p>
          SKU: <span> 654111995-1-2 </span>
        </p>{" "}
        <br></br>
        <hr></hr>
        <br></br>
        <button
          style={btn}
          onClick={() => setCount(count - 1)}
          disabled={count === 0 ? true : false}
        >
          -
        </button>
        <button style={btn}>{count}</button>
        <button style={btn} onClick={() => setCount(count + 1)}>
          +
        </button>
        <button
          className="addCart"
          onClick={() => {
            if (isExist) return;
            dispatch(addCard({ ...ele, count }));
            setDone(true);
          }}
          disabled={count === 0 && !done ? true : false}
        >
          <BsCart /> ADD TO CART
        </button>
        {done ? (
          <span
            style={{ color: "green", fontWeight: "bold", marginLeft: "15px" }}
          >
            Done
          </span>
        ) : (
          ""
        )}
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
      </div>
    </>
  ));

  return <div className="details">{product}</div>;
};

export default Details;
