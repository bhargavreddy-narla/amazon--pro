import React from "react";
import "./Secondrowcards.scss";
import Card from "react-bootstrap/Card";
import secondrowcardimg1 from "../../Images/secondrowcardimg1.jpg";
import secondrowcardimg2 from "../../Images/secondrowcardimg2.jpg";
import secondrowcardimg3 from "../../Images/secondrowcardimg3.jpg";
import secondrowcardimg4 from "../../Images/secondrowcardimg4.jpg";
import secondrowcardimg5 from "../../Images/secondrowcardimg5.jpg";
import secondrowcardimg6 from "../../Images/secondrowcardimg6.jpg";
import secondrowcardimg7 from "../../Images/secondrowcardimg7.jpg";
import secondrowcardimg8 from "../../Images/secondrowcardimg8.jpg";
import secondrowcardimg9 from "../../Images/secondrowcardimg9.jpg";
import secondrowcardimg10 from "../../Images/secondrowcardimg10.jpg";
import secondrowcardimg11 from "../../Images/secondrowcardimg11.jpg";
import secondrowcardimg12 from "../../Images/secondrowcardimg12.jpg";

const Secondrowcards = () => {
  return (
    <div className="container-fluid">
      <div className="row secondrow--maincards">
        <div className="col-sm-3">
          {/* firstcard */}
          <Card className="secondrow--Firstcard">
            <Card.Title className="secondrow--firstCard--Title">
              Automotive essentials | Up to 60% off
            </Card.Title>
            <div className="secondrow--firstCard">
              <div>
                <Card.Img
                  src={secondrowcardimg1}
                  className="secondrow--firstCard--Img"
                />
                <Card.Subtitle className="secondrow--firstCard--SubTitle">
                  Cleaning Accessories
                </Card.Subtitle>
                <Card.Img
                  src={secondrowcardimg2}
                  className="secondrow--firstCard--Img"
                />
                <Card.Subtitle className="secondrow--firstCard--SubTitle">
                  Tyre & rim care
                </Card.Subtitle>
              </div>
              <div className="">
                <Card.Img
                  src={secondrowcardimg3}
                  className="secondrow--firstCard--Img"
                />
                <Card.Subtitle className="secondrow--firstCard--SubTitle">
                  Helmets
                </Card.Subtitle>
                <Card.Img
                  src={secondrowcardimg4}
                  className="secondrow--firstCard--Img"
                />
                <Card.Subtitle className="secondrow--firstCard--SubTitle">
                  Vaccum Cleaner
                </Card.Subtitle>
                <Card.Link className="secondrow--card--Link">
                  See more
                </Card.Link>
              </div>
            </div>
          </Card>
        </div>
        {/* secondcrad */}
        <div className="col-sm-3">
          <Card className="secondrow--Firstcard">
            <Card.Title className="secondrow--firstCard--Title">
              Shop by Category
            </Card.Title>
            <div className="secondrow--firstCard">
              <div>
                <Card.Img
                  src={secondrowcardimg5}
                  className="secondrow--firstCard--Img"
                />
                <Card.Subtitle className="secondrow--firstCard--SubTitle">
                  Fresh
                </Card.Subtitle>
                <Card.Img
                  src={secondrowcardimg6}
                  className="secondrow--firstCard--Img"
                />
                <Card.Subtitle className="secondrow--firstCard--SubTitle">
                  Mobiles
                </Card.Subtitle>
              </div>
              <div>
                <Card.Img
                  src={secondrowcardimg7}
                  className="secondrow--firstCard--Img"
                />
                <Card.Subtitle className="secondrow--firstCard--SubTitle">
                  Fashion
                </Card.Subtitle>
                <Card.Img
                  src={secondrowcardimg8}
                  className="secondrow--firstCard--Img"
                />
                <Card.Subtitle className="secondrow--firstCard--SubTitle">
                  Electronics
                </Card.Subtitle>
                <Card.Link className="secondrow--card--Link">
                  See more
                </Card.Link>
              </div>
            </div>
          </Card>
        </div>
        {/* third */}
        <div className="col-sm-3">
          <Card className="secondrow--Firstcard">
            <Card.Title className="secondrow--firstCard--Title">
              Upgrade your home | Amazon Brands & more
            </Card.Title>
            <div className="secondrow--firstCard">
              <div>
                <Card.Img
                  src={secondrowcardimg9}
                  className="secondrow--firstCard--Img"
                />
                <Card.Subtitle className="secondrow--firstCard--SubTitle">
                  Smart LED Tv's
                </Card.Subtitle>
                <Card.Img
                  src={secondrowcardimg10}
                  className="secondrow--firstCard--Img"
                />
                <Card.Subtitle className="secondrow--firstCard--SubTitle">
                  Appliances
                </Card.Subtitle>
              </div>
              <div>
                <Card.Img
                  src={secondrowcardimg11}
                  className="secondrow--firstCard--Img"
                />
                <Card.Subtitle className="secondrow--firstCard--SubTitle">
                  Furniture
                </Card.Subtitle>
                <Card.Img
                  src={secondrowcardimg12}
                  className="secondrow--firstCard--Img"
                />
                <Card.Subtitle className="secondrow--firstCard--SubTitle">
                  Kitchen Products
                </Card.Subtitle>
                <Card.Link className="secondrow--card--Link">
                  See more
                </Card.Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Secondrowcards;
