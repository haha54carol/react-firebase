import React, { Component } from 'react';
import { db } from '../firebase'


class Message extends Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: '',
            remoteData: null,
            error: null,
            status: ''
        }

        this.updateMe = this.updateMe.bind(this)
    }

    componentDidMount() {
        db.onDataChanged(this.updateMe)
    };

    updateMe(snapshot) {
        const { remoteData } = this.state
        const newVal = snapshot.val()

        console.log('newVal:' + newVal)

        if (remoteData) {
            if (newVal > remoteData) {
                this.setState({
                    status: 'up',
                    remoteData: newVal
                })
            } else {
                this.setState({
                    status: 'down',
                    remoteData: newVal
                })
            }
        } else {
            this.setState({ remoteData: newVal })
        }

    }

    delField(name) {
        db.deleteField(name)
    }


    onSubmit(event) {

        const { msg } = this.state

        db.sendMessage(msg)
            .then(() => {
                this.setState(() => ({ msg: '', error: null }))
            })
            .catch(error => {
                this.setState(() => ({ error }))
            })

        event.preventDefault()
    }


    render() {

        const { msg, error, remoteData, status } = this.state

        const backgroundColor = status === 'up' ? 'yellowgreen' : 'powderblue'
        return (
            <div>
                <div>remoteData: {remoteData}</div>
                <div style={{ backgroundColor }} > status: {status}</div>
                <input
                    vaule={msg}
                    onChange={e => this.setState({ msg: e.target.value })}
                    type="text"
                    placeholder="type some msg..."
                />
                <button onClick={e => this.onSubmit(e)}>
                    send
                </button>

                <button onClick={e => this.delField('items')}>Delete Items</button>
                {error && <p>{error.message}</p>}
            </div >

        )
    }

}

export default Message