import React from 'react';
import App from 'next/app';
import UserContext from '../components/global/userContext';
import '../styles/app.scss';
import Router from "next/router";

export default class MyApp extends App {
    state = {
        user_key: '',
        is_profile_completed: false
    };

    componentDidMount = () => {
        const freePage = ['/', '/masuk', '/daftar'];
        const userKey = localStorage.getItem('muslimarkt-userKey');
        if (userKey) {
            this.setState({user_key: userKey});
        } else {

            // Detect if current page is not a free access page.
            if (!freePage.includes(Router.route)) {

                // Redirect to login page.
                Router.push('/masuk')
            }
        }
    };

    signIn = (userData) => {
        localStorage.setItem('muslimarkt-userKey', userData.user_key);

        this.setState(userData);
    };

    signOut = () => {
        localStorage.removeItem('muslimarkt-userKey');
        this.setState({
            user_key: '',
            is_profile_completed: false
        });
    };

    render() {
        const {Component, pageProps} = this.props;

        return (
            <UserContext.Provider value={{
                userKey: this.state.user_key,
                isProfileCompleted: this.state.is_profile_completed,
                signIn: this.signIn,
                signOut: this.signOut
            }}>
                <Component {...pageProps} />
            </UserContext.Provider>
        );
    }
}