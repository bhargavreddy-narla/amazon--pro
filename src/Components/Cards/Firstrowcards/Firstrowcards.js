import React from "react";
import "./Firstrowcards.scss";
import Card from "react-bootstrap/Card";
import firstrowcardsimg1 from "../../Images/firstrowcardsimg1.jpg";
import firstrowcardsimg2 from "../../Images/firstrowcardsimg2.jpg";
import firstrowcardsimg3 from "../../Images/firstrowcardsimg3.jpg";
import firstrowcardsimg4 from "../../Images/firstrowcardsimg4.jpg";
import firstrowcardsimg5 from "../../Images/firstrowcardsimg5.jpg";
import firstrowcardsimg6 from "../../Images/firstrowcardsimg6.jpg";
import firstrowcardsimg7 from "../../Images/firstrowcardsimg7.jpg";
import firstrowcardsimg8 from "../../Images/firstrowcardsimg8.jpg";
import firstrowcardsimg9 from "../../Images/firstrowcardsimg9.jpg";

const Firstrowcards = () => {
  return (
    <div className="container-fluid">
      <div className="row maincards">
        {/* first */}
        <div className="col-sm-3">
          <Card className="firstrow--Firstcard">
            <Card.Title className="firstCard--Title">
              Top rated, premium quality | Amazon Brands & more
            </Card.Title>
            <div className="firstCard">
              <div>
                <Card.Img src={firstrowcardsimg1} className="firstCard--Img" />
                <Card.Subtitle className="firstCard--SubTitle">
                  Furniture
                </Card.Subtitle>
                <Card.Img src={firstrowcardsimg2} className="firstCard--Img" />
                <Card.Subtitle className="firstCard--SubTitle">
                  Home Products
                </Card.Subtitle>
              </div>
              <div className="">
                <Card.Img src={firstrowcardsimg3} className="firstCard--Img" />
                <Card.Subtitle className="firstCard--SubTitle">
                  Clothing Essentials
                </Card.Subtitle>
                <Card.Img src={firstrowcardsimg4} className="firstCard--Img" />
                <Card.Subtitle className="firstCard--SubTitle">
                  Daily Essentials
                </Card.Subtitle>
                <Card.Link className="card--Link">See more</Card.Link>
              </div>
            </div>
          </Card>
        </div>
        {/* secondcrad */}
        <div className="col-sm-3">
          <Card className="firstrow--Firstcard">
            <Card.Title className="firstCard--Title">
              Professional tools, testing & more
            </Card.Title>
            <div className="firstCard">
              <div>
                <Card.Img src={firstrowcardsimg5} className="firstCard--Img" />
                <Card.Subtitle className="firstCard--SubTitle">
                  Medical Supplies
                </Card.Subtitle>
                <Card.Img src={firstrowcardsimg6} className="firstCard--Img" />
                <Card.Subtitle className="firstCard--SubTitle">
                  Measuring Instruments
                </Card.Subtitle>
              </div>
              <div>
                <Card.Img src={firstrowcardsimg7} className="firstCard--Img" />
                <Card.Subtitle className="firstCard--SubTitle">
                  Cleaning Supplies
                </Card.Subtitle>
                <Card.Img src={firstrowcardsimg8} className="firstCard--Img" />
                <Card.Subtitle className="firstCard--SubTitle">
                  Professional Tools
                </Card.Subtitle>
                <Card.Link className="card--Link">See more</Card.Link>
              </div>
            </div>
          </Card>
        </div>
        {/* third */}
        <div className="col-sm-3">
          <Card className="firstrow--Firstcard">
            <Card.Title className="firstCard--Title">
              Pay your credit card bills on Amazon
            </Card.Title>
            <div className="firstCard">
              <Card.Img src={firstrowcardsimg9} className="firstCard--Img" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Firstrowcards;
