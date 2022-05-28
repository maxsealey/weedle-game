import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        const textStyle = {color:'black', fontSize:'10px'}
        const containerStyle = { width:'100%', position:'absolute',bottom:'0' }

        return (
            <div style = { containerStyle }>
                <p className = "text-center" style = { textStyle }>2022 Max Sealey: <a href="https://www.github.com/maxsealey">Github </a> 
                <a href="https://www.linkedin.com/in/maxsealey">Linkedin</a>  || Inspired by <a href="https://www.weddlegame.com" style={{color:'red'}}>Weddle</a></p>
            </div>
        )
    }
}