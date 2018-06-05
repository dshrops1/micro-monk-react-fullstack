import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../someRouting/Navigation'

export default class extends Component {

    state = {
        currentChoice : "Republican",
        maleChoice: "male",
        femaleChoice: "female",
        democratChoice: "Democrat",
        republicanChoice: "Republican",
        independentChoice: "Independent"
};


 onSelectSubmit(event) {


     event.preventDefault()
     this.setState({currentChoice: document.getElementById("mySelect").value})
     console.log(document.getElementById("mySelect").value)
     console.log("current Choice " + this.state.currentChoice)


 }

render () {
    return (

        <Fragment>

            <Link to="/male"><button>male</button></Link>
            <Link to="/female"><button>female</button></Link>
            <Link to="/Democrat"><button>Democrat</button></Link>
                    <Link to="/Republican"><button>Republican</button></Link>
                    <Link to="/Independent"><button>Independent</button></Link>

        <hr/>
        {/*navigation goes here and pass current choice down to them*/}
        <Navigation jsonToGrab={this.state.currentChoice}/>
        </Fragment>
    )
}

}