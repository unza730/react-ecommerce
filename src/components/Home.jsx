import React from "react";
  import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Card from 'react-bootstrap/Card';

import Products from "./Products";
const Home = () => {
    return (
      <>
        <Card className="bg-dark text-white">
          <Card.Img
            src="https://morecustomersapp.com/wp-content/uploads/2020/08/banner-and-eCommerce.jpg"
            alt="Card image"
          />
          <Card.ImgOverlay>
            {/* <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text> */}
          </Card.ImgOverlay>
        </Card>
        <Products />
      </>
    );
};

export default Home;
