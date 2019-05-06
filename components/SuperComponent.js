import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

// const SuperComponent = () => {
// return(
// <div>Welocme</div>)
// }

class SuperComponent extends React.Component {

    constructor(props) {
        super(props);

        this.someVariable= "just some var"
    };

    alertName(title){
        alert(title);
    }

    render(){
        return(
         <BaseLayout>
         <h1> SuperComponent Page</h1>
         </BaseLayout>
        ) 
    }
}

export default SuperComponent;