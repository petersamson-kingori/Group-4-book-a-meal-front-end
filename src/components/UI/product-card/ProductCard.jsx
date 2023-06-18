import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { cartActions, getCurrentItem } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();
  
  const currentItem = useSelector((state ) => getCurrentItem(state, id));
  //call the action to get the current item based on the id
  // const currentItem = useSelector((state) => state.cart.currentItem); 

  

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };
  const removeFromCart = () => {
    dispatch(
      cartActions.removeItem(id)
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5 className="mb-2">
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex">
        <span className="product__price mx-auto">Ksh {price}</span>
        </div>
        <div className=" d-flex align-items-center justify-content-between ">
        <button className="addTOCart__btn" onClick={removeFromCart}>
            -
          </button>
          <span className="product__price mx-auto">{currentItem?.quantity ?? 0}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
