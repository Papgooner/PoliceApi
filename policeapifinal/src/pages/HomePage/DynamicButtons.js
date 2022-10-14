import React from "react";
import "./HomePage.css";
import { redirect } from "react-router-dom";

export default class DynamicButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            value: props.id
        }
    };
    
    clickHandler = () => {
        const thing = this.state.value;
        console.log(thing);
        this.passUpToHomepage(thing);
        return redirect("/Info");
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
