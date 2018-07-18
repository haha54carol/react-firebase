import React, { Component } from 'react';
import { db } from '../firebase'

class Message extends Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: '',
            error: null
        }
    }

    onSubmit(event) {

        const { msg } = this.state

        db.sendMessage(msg)
            .then(() => {
                console.log('send msg')
                this.setState(() => ({ msg: '', error: null }))
            })
            .catch(error => {
                this.setState(() => ({ error }))
            })

        event.preventDefault()
    }


    render() {

        const { msg, error } = this.state

        return (
            <div>
                <div>msg: {msg}</div>
                <input
                    vaule={msg}
                    onChange={e => this.setState({ msg: e.target.value })}
                    type="text"
                    placeholder="type some msg..."
                />
                <button onClick={e => this.onSubmit(e)}>
                    send
                </button>
                {error && <p>{error.message}</p>}
            </div>

        )
    }

}

export default Message