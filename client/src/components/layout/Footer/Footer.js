import React, { Component } from 'react';
import './footer.scss'

/*

The links and credit will eventually be moved to one of the pop up windows

*/

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p className = "text-center">2022 Max Sealey <a href="https://www.github.com/maxsealey" class="linkButton">Github </a></p>
            </div>
        )
    }
}