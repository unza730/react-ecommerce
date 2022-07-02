import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Button from "react-bootstrap/Button";
import { AddProduct } from "../redux/action/productaction";
import { useDispatch } from "react-redux";
const Product = () => {
  const { id } = useParams();
    const [showData, setShowData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const dispatch = useDispatch() 
    
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      // console.log(res.json());
      console.log(res.data);
      // if (componentMounted) {
      setShowData(res.data);
      //   setFilterData(res.data);
      setLoading(false);
      //
    };

    getProducts();
  }, []);
    const addProduct = (product) => {
        dispatch(AddProduct(product))
    }
     const Loading = () => {
        return (
          <>
            <h1>Loading</h1>
          </>
        );
    }
    const ShowProduct = () => {
        return (
          <>
            <div className="col-md-6">
              <img src={showData.image} alt="" height="250Px" width="250px" />
            </div>
            <div className="col-md-6">
              <h1>{showData.title}</h1>
              <h1>{showData.price}</h1>

              <h1>{showData.description}</h1>

              <Button
                variant="secondary"
                className="me-2"
                onClick={() => addProduct(showData)}
              >
                Add to Cart
              </Button>
              {/* <Button
                variant="secondary"
                className="me-2"
                onClick={() => addProduct(showData)}
              >
                 to Cart
              </Button> */}

              <Link to="/cart">
                <Button
                  variant="secondary"
                  className="me-2"
                  onClick={() => addProduct(showData)}
                >
                  Go to Cart
                </Button>
              </Link>
            </div>
          </>
        );
    }
    return (
      <div>
        <div className="container">
          <div className="row">
            {loading ? <Loading /> : <ShowProduct />}
          </div>
        </div>
      </div>
    );
};

export default Product;
