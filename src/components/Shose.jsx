/* eslint-disable jsx-a11y/alt-text */
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import errorImage from "../aea4b09ff185e02c4046ff12c4f828f9.png";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Shose = () => {
  const respon = useSelector((state) => state.products);

  const navi = useNavigate();

  const card = respon.data.length ? (
    respon.data?.map((ele) => (
      <div className="card" key={ele.id} onClick={() => navi(`${ele.id}`)}>
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
    ))
  ) : (
    <h3 style={{ textAlign: "center", padding: "50px" }}>No data to show</h3>
  );
  if (respon.error)
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={errorImage} style={{ margin: "25px" }} />
      </div>
    );
  return (
    <div className="prolist">
      {respon.loading ? (
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        card
      )}
    </div>
  );
};

export default Shose;
