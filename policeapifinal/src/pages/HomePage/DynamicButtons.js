import React from "react";

export default class DynamicButton extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            name: props.name,
            value: props.id
        }
    };
    clickHandler = () => {
        const thing = this.value;
        console.log(thing);
        console.log("click handler fired");
    };

    render() {
        return (
                <button onClick={this.clickHandler} value={this.state.id}>{this.state.name}</button>
        )
    }
}
