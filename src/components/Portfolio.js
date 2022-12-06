import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const style = {
  body: {
    width: "20rem",
    height: "28rem",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    
  },
};



function Portfolio() {
  return (
    <div id="project">
             <Card style={style.body}>
          <Card.Img
            variant="top"
            src="https://staticprod.site.flexispot.com/cdn-cgi/image/dpr=1,format=webp,fit=pad/https://staticprod.site.flexispot.com/flexispot/catalog/product/v/9/v91207.jpg"
            height={300}
          />

          <Card.Body>
            <h4>Workout Equipments </h4>
            {/* <Card.Text>
  </Card.Text> */}
            <h6> </h6>

            <a target="_blank" href="https://ecommercegt.herokuapp.com/"> <Button variant="primary">WORKOUT EQUIPMENTS</Button></a>
          </Card.Body>
        </Card>
    </div>
  )
}

export default Portfolio