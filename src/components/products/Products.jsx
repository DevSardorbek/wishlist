import React from "react";
import "./product.css";
import { BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toogleLike } from "../../context/wishlistSlice";
import { FaHeart } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
console.log("aos", AOS);

const Products = ({ data, text }) => {
  let wishlist = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();
  return (
    <div className="wrapper">
      <h1>{text}</h1>
      <div className="container">
        <div className="product_cards">
          {data?.map((el, index) => (
            <div
              key={el.id}
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              className="card"
            >
              <div className="card_img">
                <img src={el.images[0]} alt="" />
                <span onClick={() => dispatch(toogleLike(el))}>
                  {wishlist?.some((item) => item.id === el.id) ? (
                    <FaHeart style={{ color: "red" }} />
                  ) : (
                    <BsHeart />
                  )}
                </span>
              </div>
              <h4>{el.title}</h4>
              <p>{el.price}$</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
