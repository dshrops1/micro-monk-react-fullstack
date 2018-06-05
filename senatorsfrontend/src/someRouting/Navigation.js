import React from 'react';
import { Route }  from 'react-router-dom'
import Senators from '../components/Senators'

export default () => (
    <div>

        <Route path="/Democrat" component={Democrats} />
        <Route path="/Republican" component={Republicans} />
        <Route path="/Independent" component={Indpendents} />
        <Route path="/male" component={Males} />
        <Route path="/female" component={Females} />
    </div>
)


const Democrats = () => (
    <div>
        <Senators jsonToGrab="Democrat"/>
    </div>
)

const Republicans = () => (
    <div>
        <Senators jsonToGrab="Republican"/>
    </div>
)

const Indpendents = () => (
    <div>
        <Senators jsonToGrab="Independent"/>
    </div>
)

const Males = () => (
    <div>
        <Senators jsonToGrab="male"/>
    </div>
)

const Females = () => (
    <div>
        <Senators jsonToGrab="female"/>
    </div>
)