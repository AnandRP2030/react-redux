import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {selectProducts} from "../Redux/Action/productAction";

const ProductDetails = () => {
  const { value } = useParams();
  console.log(value);
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    let res = await fetch(`https://fakestoreapi.com/products/${value}`);
    let jsonData = await res.json();
    dispatch(selectProducts(jsonData));
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return <div> ProductDetails </div>;
};

export default ProductDetails;
