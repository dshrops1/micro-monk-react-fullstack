import React, { Component, Fragment } from 'react'
import Senator from './Senator'


//will pass down from Senatorssearch as props the values we need back from
//our api
export default class extends Component {

    state = {

        senatorsToDisplay: []
}







 async componentDidMount() {

        const party = ["Independent","Republican", "Democrat"]
        let restString = "/gender/"

        if(party.includes(this.props.jsonToGrab)) {
            restString = "/party/"
        }


        let whatToFetch = 'https://micro-service-umnndulqaz.now.sh'.concat(restString).concat(this.props.jsonToGrab)
        console.log(this.props.jsonToGrab)
        console.log(whatToFetch)
        //plus whatever the choice is from SenatorsSearch
        let dataGrabbing = await fetch(whatToFetch, {method: 'GET'});
        let dataGrabbingResponce = await dataGrabbing.json();
        //getting back empty array
        console.log(dataGrabbingResponce)

     //could this be an issue with the way javascript internalizes strings
     //or perhaps a React issue with Components and rendering
        let test = dataGrabbingResponce.map(sens => <Senator senato={sens}/>)

     this.setState({senatorsToDisplay :  test})


 }









//do I need routing to make it appear more fluid. time will tell.
render () {
    return (

        <Fragment>
        {/*Test Senator*/}
            {this.state.senatorsToDisplay}
            {/*will have function here that maps a our senators json to Senator components */}
        </Fragment>
    )
}

}