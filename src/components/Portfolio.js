import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import we from "/Users/hirenpatel/Desktop/hiren-portfolio/src/assets/images/we.png";
import Weather from "/Users/hirenpatel/Desktop/hiren-portfolio/src/assets/images/weather.pnj.png";
import Film from "/Users/hirenpatel/Desktop/hiren-portfolio/src/assets/images/Film.pnj.png";
import Work from "/Users/hirenpatel/Desktop/hiren-portfolio/src/assets/images/work.pnj.png";
import Skills from "/Users/hirenpatel/Desktop/hiren-portfolio/src/assets/images/skills.pnj.png";



const style = {
  body: {
    width: "28rem",
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
            src={we} alt="we"
            height={250}
          />
          <Card.Body>
            <h2>Workout Equipments </h2>
            <Card.Text>
              Application made with Client and server side using React.js and Graphql.
              Ecommerce website for workout lovers who can find the best deals for workout equipments as well as apparel.
  </Card.Text>
            <h6> </h6>
            <a target="_blank" href="https://ecommercegt.herokuapp.com/"> <Button variant="primary">CLICK ME</Button></a>
          </Card.Body>
        </Card>

        <Card style={style.body}>
          <Card.Img
            variant="top"
            src={Film} alt="Film Detective"
            height={250}
          />
          <Card.Body>
            <h2>Film Detective </h2>
            <Card.Text>
            This application was made using Html, Css, Javascript,Bootstrap, Jquery. 
            A website where user can find their favourite movie and watch them and also leave review.
  </Card.Text>
            <h6> </h6>
            <a target="_blank" href="https://wakasagi-burt.github.io/first-baby/"> <Button variant="primary">CLICK ME</Button></a>
          </Card.Body>
        </Card>

        <Card style={style.body}>
          <Card.Img
            variant="top"
            src={Weather} alt="Weather dashboard"
            height={230}
            width={430}
          />
          <Card.Body>
            <h2>Weather Dashboard </h2>
            <Card.Text>
            I made a WEATHER app using API key from openweathermap.org and display weather for next 5 days. 
            There were few methods which were used to complete this task one ot them is fetch which gets data from the api 
            and displays on the screen.
  </Card.Text>
            <h6> </h6>
            <a target="_blank" href="https://radhashyamsundardas.github.io/temprature-for-week/"> <Button variant="primary">CLICK ME</Button></a>
          </Card.Body>
        </Card>





        <Card style={style.body}>
          <Card.Img
            variant="top"
            src={Work} alt="Workday Schedular"
            height={250}
          />
          <Card.Body>
            <h2>Workday Schedular </h2>
            <Card.Text>
            This project is about daily schedular and it can help you manage your work schedule
            There were application of jquery, bootstrap, momentjs and javascript to accomplish the task
  </Card.Text>
            <h6> </h6>
            <a target="_blank" href="https://radhashyamsundardas.github.io/daily-scheduler/"> <Button variant="primary">CLICK ME</Button></a>
          </Card.Body>
        </Card>





        <Card style={style.body}>
          <Card.Img
            variant="top"
            src={Skills} alt="Skills"
            height={250}
          />
          <Card.Body>
            <h2>Portfolio </h2>
            <Card.Text>
              Application made with React.js. The purpose of this application was to showcase my technical skills.
              
  </Card.Text>
            <h6> </h6>
            <a target="_blank" href="https://ecommercegt.herokuapp.com/"> <Button variant="primary">CLICK ME</Button></a>
          </Card.Body>
        </Card>



        <Card style={style.body}>
          <Card.Img
            variant="top"
            src="" alt=""
            height={250}
          />
          <Card.Body>
            <h2>Coming Soon </h2>
            <Card.Text>
              
  </Card.Text>
            <h6> </h6>
            <a target="_blank" href=""> <Button variant="primary">CLICK ME</Button></a>
          </Card.Body>
        </Card>
    </div>
  )
}



export default Portfolio