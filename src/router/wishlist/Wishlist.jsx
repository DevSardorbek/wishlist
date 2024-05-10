import React from "react";
import Products from "../../components/products/Products";
import { useSelector } from "react-redux";
import Empty from "../../components/empty/Empty";

const Wishlist = () => {
  let wishlist = useSelector((state) => state.wishlist.value);
  return (
    <div>
      {wishlist.length ? (
        <Products text={"Sevimlilar"} data={wishlist} />
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Wishlist;
