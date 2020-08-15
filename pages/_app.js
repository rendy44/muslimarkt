import React from 'react';
import App from 'next/app';
import UserContext from '../components/global/userContext';
import '../styles/app.scss';
import Router from "next/router";

export default class MyApp extends App {
    state = {
        user_key: '',
        is_profile_completed: false,
        avatar_url: '',
        first_name: '',
        last_name: '',
        email: ''
    };

    componentDidMount = () => {
        const freePage = ['/', '/masuk', '/daftar'];
        const userData = localStorage.getItem('muslimarkt-loginData');

        if (userData) {
            this.setState({
                user_key: userData.user_key,
                is_profile_completed: userData.is_profile_completed,
                avatar_url: userData.avatar_url,
                first_name: userData.nama_depan,
                last_name: userData.nama_belakang,
                email: userData.email
            });
        } else {

            // Detect if current page is not a free access page.
            if (!freePage.includes(Router.route)) {

                // Redirect to login page.
                Router.push('/masuk')
            }
        }
    };

    saveLoginData = (userData) => {
        localStorage.setItem('muslimarkt-loginData', userData);

        // Update global state.
        this.setState({
            user_key: userData.user_key,
            is_profile_completed: userData.is_profile_completed,
            avatar_url: userData.avatar_url,
            first_name: userData.nama_depan,
            last_name: userData.nama_belakang,
            email: userData.email
        })
    };

    signOut = () => {
        localStorage.removeItem('muslimarkt-userKey');
        this.setState({
            user_key: '',
            is_profile_completed: false,
            avatar_url: '',
            first_name: '',
            last_name: '',
            email: ''
        });
    };

    updateAccount = (data) => {
        localStorage.setItem('muslimarkt-account', data);

        this.setState({account: data})
    };

    render() {
        const {Component, pageProps} = this.props;

        return (
            <UserContext.Provider value={{
                userKey: this.state.user_key,
                isProfileCompleted: this.state.is_profile_completed,
                saveLoginData: this.saveLoginData,
                signOut: this.signOut,
                account: this.state.account,
                updateAccount: this.updateAccount
            }}>
                <Component {...pageProps} />
            </UserContext.Provider>
        );
    }
}