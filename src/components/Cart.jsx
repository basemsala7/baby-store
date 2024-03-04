/* eslint-disable jsx-a11y/alt-text */
import { useSelector, useDispatch } from "react-redux";
import { filterlist, increment, decrement } from "../redux/productSlice";
const Cart = () => {
  let dataSended = useSelector((state) => state.products.cartList);
  const dispatch = useDispatch();
  console.log(dataSended);

  const btn = {
    padding: "15px 19px",
    fontWeight: "bold",
    fontSize: "20px",
    border: "1px solid gray",
    backgroundColor: "white",
  };

  const elements = dataSended.length ? (
    dataSended.map((ele) => (
      <div className="cartchild" id={ele.id}>
        <div className="cartDet">
          <img src={ele.image} height="130px" width="130px" />
          <p>{ele.name}</p>
        </div>
        <h3>${ele.price}</h3>
        <div>
          <button
            style={btn}
            onClick={() => dispatch(decrement(ele.id))}
            disabled={ele.count === 0 ? true : false}
          >
            -
          </button>
          <button style={btn}>{ele.count}</button>
          <button style={btn} onClick={() => dispatch(increment(ele.id))}>
            +
          </button>
        </div>
        <h3> ${ele.count * ele.price}</h3>
        <button
          className="deleteBtn"
          onClick={() => {
            dispatch(filterlist(ele.id));
          }}
        >
          delete
        </button>
      </div>
    ))
  ) : (
    <h3 style={{ textAlign: "center", padding: "50px" }}>No data to show</h3>
  );
  return <div className="Cart">{elements}</div>;
};

export default Cart;
