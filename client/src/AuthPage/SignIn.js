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

        this.signInWithGoogle = this.signInWithGoogle.bind(this)
        this.signInWithGithub = this.signInWithGithub.bind(this)
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
    signInWithGoogle() {
        auth.signInWithGoogle()
            .then(result => {
                const user = result.user
                this.setState({ user })
            })
            .catch(error => {
                this.setState({ error: error.message })
            })
    }

    signInWithGithub() {
        auth.signInWithGithub()
            .then(result => {
                const user = result.user.displayName
                this.setState({ user })
            })
            .catch(error => {
                this.setState({ error: error.message })
            })
    }

    render() {
        const { email, password, error, user } = this.state
        return (
            <div>
                <h1>Sign In</h1>
                {user ? <h5>{user}</h5> : null}
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
                <button onClick={() => this.signInWithGithub()}>Sign In with Github</button>
                <button onClick={() => this.signInWithGoogle()}>Sign In with google</button>

            </div>
        )
    }
};

export default SignIn