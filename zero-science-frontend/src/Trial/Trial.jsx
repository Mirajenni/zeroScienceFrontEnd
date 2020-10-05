import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "./Trial.scss";
import Avatar1 from "../Assets/avatar1.svg";
import Avatar2 from "../Assets/avatar2.svg";
import Avatar3 from "../Assets/avatar3.svg";
import Avatar4 from "../Assets/avatar4.svg";
import Avatar5 from "../Assets/avatar5.svg";
import Nave from "../Assets/nave.svg";

export default class Trial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      char_op: "char_option3",
    };
    this.onRadioChange = this.onRadioChange.bind(this);
    this.ControlledCarousel = this.ControlledCarousel.bind(this);
    // this.zoomChar = this.zoomChar.bind(this)
  }

  onRadioChange(e, imgChar) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={Avatar1} alt="First Avatar" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Avatar2} alt="First Avatar" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Avatar3} alt="First Avatar" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Avatar4} alt="First Avatar" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Avatar5} alt="First Avatar" />
        </Carousel.Item>
      </Carousel>
    );
  }

  render() {
    let avataresz = <this.ControlledCarousel />;

    return (
      <div className="trial-page-content">
        <div className="user-trial">
          <form>
            <label className="user-trial__choose-char">
              Escolha seu avatar
              {avataresz}
            </label>
            <div className="user-login__form-control">
              <label htmlFor="user">Nome de usuário</label>
              <input id="user" type="text" name="user" placeholder="Nome" />
            </div>

            <Link to="/home">
              <button
                type="submit"
                theme="contained-green"
                className="user-trial__submit-button"
                rounded
              >
                Começar
              </button>
            </Link>
            <img className="nave" src={Nave} alt="Nave" />
          </form>
        </div>
      </div>
    );
  }
}
