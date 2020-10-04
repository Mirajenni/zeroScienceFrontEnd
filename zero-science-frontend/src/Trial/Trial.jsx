import React, { Component } from "react";
import "./Trial.scss"
import globo from "./globo.svg"


export default class Trial extends Component {
    constructor(props){
        super(props)

        this.state = {
            char_op: "char_option3"
        }
        this.onRadioChange = this.onRadioChange.bind(this)
        // this.zoomChar = this.zoomChar.bind(this)
    }

    onRadioChange(e, imgChar){
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
            
        })
        
    }



    render() {
        return (
            <div className="trial-page-content">
                <div className="user-trial">
                    <form>
                        <label className="user-trial__choose-char">
                            <div className="user-login__all-char">
                            <div className="user-login__all-char_globo" id="char1">
                                <input 
                                type="radio" 
                                name="char_op" 
                                value="char_option1" 
                                checked={this.state.char_op === "char_option1"} 
                                onChange={this.onRadioChange}
                                />
                                <img id="char1" className="img-char" src={globo} alt=""/>
                            </div>
                            <div className="user-login__all-char_globo" id="char2"> 
                                <input 
                                type="radio" 
                                name="char_op" 
                                value="char_option2" 
                                checked={this.state.char_op === "char_option2"} 
                                onChange={this.onRadioChange}
                                />
                                <img id="char2" className="img-char" src={globo} alt=""/>
                            </div>
                            <div className="user-login__all-char_globo" id="char3">
                                <input 
                                type="radio" 
                                name="char_op" 
                                value="char_option3" 
                                checked={this.state.char_op === "char_option3"} 
                                onChange={this.onRadioChange}
                                />
                                <img id="char3" className="img-char globo_active" src={globo} alt=""/>
                            </div>
                            <div className="user-login__all-char_globo" id="char4">
                                <input 
                                type="radio" 
                                name="char_op" 
                                value="char_option4" 
                                checked={this.state.char_op === "char_option4"} 
                                onChange={this.onRadioChange}
                                />
                                <img id="char4" className="img-char" src={globo} alt=""/>
                            </div>
                            <div className="user-login__all-char_globo" id="char5">
                                <input 
                                type="radio" 
                                name="char_op" 
                                value="char_option5" 
                                checked={this.state.char_op === "char_option5"} 
                                onChange={this.onRadioChange}
                                />
                                <img id="char5" className="img-char" src={globo} alt=""/>
                            </div>
                            </div>                           
                                Escolha seu avatar
                                radio: {this.state.char_op}
                        </label>
                        <div className="user-login__form-control">
                        <label htmlFor="user">Nome de usuário</label>
                        <input
                            id="user"
                            type="text"
                            name="user"
                        />
                        </div>
                    
                        <button
                        type="submit"
                        theme="contained-green"
                        className="user-trial__submit-button"
                        rounded
                        >
                        Começar
                        </button>
                        <a href="">Já tenho uma conta</a>
                    </form>
                </div>
            </div>
            
        );
    }
}
