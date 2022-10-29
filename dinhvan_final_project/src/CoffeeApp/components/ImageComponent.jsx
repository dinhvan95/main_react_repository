import React, { Component } from 'react';
import '../css/CoffeeApp.css';

class ImageComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <img src={this.props.url} alt="display image" className="imageUrlDiv"/>
            </div>
        );
    }
}

export default ImageComponent;