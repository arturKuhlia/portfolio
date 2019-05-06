import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'
import SuperComponent from '../components/SuperComponent'
import axios from 'axios';


class Index extends SuperComponent {

    static async getInitialProps() {
        let userData = []

        try {   const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        userData= response.data;
        console.log(response);
    } catch(err) { 
        console.log(err); 
    }
        return {  userData };
}

constructor(props) {

    super(props);

    this.state = {
        title: "index page"
    }
    console.log('constructor');
}
componentDidMount() {
    console.log('componentDidMount');
}
componentDidUpdate() {
    console.log("componentDidUpdate");
}
componentWillUnmount() {
    console.log("componentWillUnmount");
}

updateTitle = () => {

    this.setState({ title: "I am Updated Index Page" });
}
render() {


    const { title } = this.state;
    
    return (
        <BaseLayout>
            <h1 className="formPage">I am heder component</h1>
            <h2>{title}</h2>
            
            <button onClick={this.updateTitle} >Change Title</button>
        </BaseLayout>
    )
}
}

export default Index;