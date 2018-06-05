import React, { Component } from 'react'

export default class extends Component {

    render(){
        const senator = this.props.senato
        return (
            <div>
                {`name: ${senator.person.firstname} ${senator.person.lastname} gender  ${senator.person.gender}`}
            </div>
        )
    }
}