import { Component } from "react";

class Example2 extends Component {

    constructor() {
        super()
        this.state = {
            date: new Date()
        };
    }
    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(), 
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

   render() {
    return (
        <div style={{marginTop: 25, backgroundColor: 'brown'}}>
            <h2>L'horloge de beau gosse !!!</h2>
            <p>{this.state.date.toLocaleTimeString()}</p>
        </div>
    )
   }
}

export default Example2;