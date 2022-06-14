import React, { Component } from 'react';
import './footer.scss'

/*

The links and credit will eventually be moved to one of the pop up windows

*/

export default class Footer extends Component {
    render() {
        const textStyle = {color:'black', fontSize:'10px'}
        const containerStyle = { width:'100%', position:'absolute',bottom:'0' }

        return (
            <div className="footer" style = { containerStyle }>
                <p className = "text-center" style = { textStyle }>2022 Max Sealey <a href="https://www.github.com/maxsealey" class="linkButton">Github </a> 
                <a href="https://www.linkedin.com/in/maxsealey" class="linkButton">Linkedin</a>  || Inspired by <a href="https://www.weddlegame.com" class="linkButton weddleButton">Weddle</a></p>
            </div>
        )
    }
}