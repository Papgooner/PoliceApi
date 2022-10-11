import React from "react";
import "./HomePage.css";

export default class DynamicButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            value: props.id
        }
        this.clickHandler = this.clickHandler.bind(this);
    };
    clickHandler = () => {
        const thing = this.state.value;
        console.log(thing);
        this.passUpToHomepage(thing);
    };

    passUpToHomepage = (thing) => {
        this.props.getValueHandler(thing);
    }

    render() {
        return (
                <button className="Outputs" onClick={this.clickHandler} value={this.state.id}>{this.state.name}</button>
        )
    }
}
