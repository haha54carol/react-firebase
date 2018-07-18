import { db } from './firebase'

export const doCreateUser = (id, username, email) =>
    db.ref(`users/${id}`).set({
        username,
        email,
    })

export const onceGetUsers = () =>
    db.ref('users').once('value');

export const sendMessage = (msg) =>
    db.ref('message').set({
        msg
    })
export const onDataChanged = (callback) =>
    db.ref(`message/msg`).on('value', callback)


export const deleteField = (fieldName) =>
    db.ref(`${fieldName}`).remove()    