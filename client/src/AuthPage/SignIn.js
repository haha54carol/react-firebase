import React, { Component } from 'react';
import { auth } from '../firebase'

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
    user: null
}

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE }

        this.login = this.login.bind(this)
        this.signInWithEmailAndPassword = this.signInWithEmailAndPassword.bind(this)
    }

    signInWithEmailAndPassword() {
        const { email, password } = this.state

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE })
            })
            .catch(error => {
                this.setState({ error: error.message })
            })

    }

    login(event) {



        auth.signInWithPopUp()
            .then(result => {
                const user = result.user
                this.setState({ user })
            })
            .catch(error => {
                this.setState({ error })
            })

        event.preventDefault()
    }

    render() {
        const { email, password, error } = this.state
        return (
            <div>
                <h1>Sign In</h1>
                <div>
                    <span>Email:</span>
                    <input
                        value={email}
                        onChange={e => this.setState({ email: e.target.value })}
                        type="text"
                    />
                </div>
                <div>
                    <span>Password:</span>
                    <input
                        value={password}
                        onChange={e => this.setState({ password: e.target.value })}
                        type="password"
                    />
                </div>
                {error ? <p>{error}</p> : null}
                <button onClick={() => this.signInWithEmailAndPassword()}>Sign In with Email</button>
                <button onClick={e => this.login(e)}>Sign In with google</button>

            </div>
        )
    }
};

export default SignIn