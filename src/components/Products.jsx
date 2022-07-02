import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';


const Products = () => {
    const [loading, setLoading] = useState(false);
    const [showData, setShowData] = useState([]);
    
    const [filterData, setFilterData] = useState([]);
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
        
            setLoading(true)
            const res = await axios.get('https://fakestoreapi.com/products'); 
            // console.log(res.json());
            console.log(res.data);
             if (componentMounted) {
               setShowData(res.data);
               setFilterData(res.data);
               setLoading(false);
            }
               return () => {
                 componentMounted = false;
               };
        }
     
        getProducts();
    }, [])
    const Loading = () => {
        return (
          <>
            <h1>Loading</h1>
          </>
        );
    }
    const ShowProduct = () => {
        const filterProducts = (cat) => {
            const updatedData = showData.filter((x) => x.category === cat);
            setFilterData(updatedData);
        }
        return (
          <>
            <div className="buttons">
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => setFilterData(showData)}
              >
                All
              </Button>
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => filterProducts("men's clothing")}
              >
                Men's Clothing
              </Button>
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => filterProducts("women's clothing")}
              >
                Women Clothing
              </Button>
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => filterProducts("jewelery")}
              >
                Jewellery
              </Button>
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => filterProducts("electronics")}
              >
                Electronics
              </Button>
              {filterData.map((products) => {
                return (
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <Card style={{ width: "18rem" }}>
                          <Card.Img variant="top" src={products.image} />
                          <Card.Body>
                            <Card.Title>
                              {products.title.substring(0, 12)}
                            </Card.Title>
                            <Card.Text>{products.description}</Card.Text>
                            <Link to={`/products/${products.id}`}>
                              <Button variant="primary">Buy Now</Button>
                            </Link>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        );
    }
  return (
    <div>
      <div className="container my-5 py-6 mx-auto">
        <div className="row mx-auto" >
          <div className="col-12 mb-5">
            <h1 className="display-5 fw-bolder text-center">Latest Products</h1>
          </div>
        </div>
        <div className="flex justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}

export default Products
