import React from 'react';
import App from 'next/app';
import UserContext from '../components/global/userContext';
import '../styles/app.scss';
import Router from "next/router";

export default class MyApp extends App {
    state = {
        user_key: '',
        is_profile_complete: false,
        avatar_url: '',
        first_name: '',
        last_name: '',
        display_name: '',
        email: '',
        phone: '',
        province: ''
    };

    commonFields = [
        'user_key',
        'is_profile_complete',
        'avatar_url',
        'first_name',
        'last_name',
        'display_name',
        'email',
        'phone',
        'province'
    ];
    prefix = 'muslimarkt-';

    componentDidMount = () => {
        // console.log(this.state);
        const freePage = ['/', '/masuk', '/daftar'];

        let stateObj = {};

        // Loop common fields.
        this.commonFields.map(field => stateObj[field] = this.getLocal(field))

        if (stateObj.user_key) {
            this.setState(stateObj);
        } else {

            // Detect if current page is not a free access page.
            if (!freePage.includes(Router.route)) {

                // Redirect to login page.
                Router.push('/masuk')
            }
        }
    };

    saveLoginData = (userData) => {
        const objData = {
            user_key: userData.user_key,
            is_profile_completed: userData.is_profile_completed,
            avatar_url: userData.avatar_url,
            first_name: userData.first_name,
            last_name: userData.last_name,
            display_name: userData.display_name,
            email: userData.email,
            phone: userData.phone,
            province: userData.province
        };

        this.commonFields.map(field => this.saveLocal(field, userData[field]));

        // Update global state.
        this.setState(objData)
    };

    signOut = () => {
        this.commonFields.map(field => this.removeLocal(field));

        this.setState({
            user_key: '',
            is_profile_complete: false,
            avatar_url: '',
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            province: ''
        });
    };

    updateAccount = (data) => {
        localStorage.setItem('muslimarkt-account', data);

        this.setState({account: data})
    };

    render() {
        const {Component, pageProps} = this.props;
        const {avatar_url, first_name, display_name, last_name, email, phone, province, user_key, is_profile_complete} = this.state;

        return (
            <UserContext.Provider value={{
                userAvatarUrl: avatar_url,
                userFirstName: first_name,
                userLastName: last_name,
                userDisplayName: display_name,
                userEmail: email,
                userPhone: phone,
                userProvince: province,
                userKey: user_key,
                isProfileComplete: is_profile_complete,
                saveLoginData: this.saveLoginData,
                signOut: this.signOut,
                updateAccount: this.updateAccount
            }}>
                <Component {...pageProps} />
            </UserContext.Provider>
        );
    }

    saveLocal(key, value) {
        localStorage.setItem(this.prefix + key, value);
    }

    getLocal(key) {
        return localStorage.getItem(this.prefix + key);
    }

    removeLocal(key) {
        localStorage.removeItem(this.prefix + key);
    }
}