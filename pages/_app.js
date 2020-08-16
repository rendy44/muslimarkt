import React from 'react';
import App from 'next/app';
import UserContext from '../components/global/userContext';
import '../styles/app.scss';
import Router from "next/router";
import user from "../src/user";

export default class MyApp extends App {
    state = {
        first_name: '',
        last_name: '',
        display_name: '',
        email: '',
        avatar_url: '',
        day_birth: '',
        month_birth: '',
        year_birth: '',
        phone: '',
        address: '',
        postal: '',
        city: '',
        province: '',
        sex: '',
        id_type: '',
        no_id: '',
        notes: '',
        user_key: '',
        is_profile_complete: false,
    };

    commonFields = [
        'first_name',
        'last_name',
        'display_name',
        'email',
        'avatar_url',
        'day_birth',
        'month_birth',
        'year_birth',
        'phone',
        'address',
        'postal',
        'city',
        'province',
        'sex',
        'id_type',
        'no_id',
        'notes',
        'user_key',
        'is_profile_complete',
    ];

    uneditedFields = [
        'display_name',
        'email',
        'avatar_url',
        'phone',
        'user_key',
        'is_profile_complete',
    ];

    prefix = 'muslimarkt-';

    componentDidMount = () => {
        // console.log(this.state);
        const freePage = ['/', '/masuk', '/daftar'];

        let stateObj = {};

        // Loop common fields.
        this.commonFields.map(field => stateObj[field] = this.getLocal(field))

        // Make sure that user key is exist.
        if (stateObj.user_key) {

            // Save into state.
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
        let objData = {};

        this.commonFields.map((field) => {
            this.saveLocal(field, userData[field])
            objData[field] = userData[field];
        });

        // Update global state.
        this.setState(objData)
    };

    signOut = () => {
        this.commonFields.map(field => this.removeLocal(field));

        this.setState({});
    };

    updateAccount = (userData) => {

        // Loop common fields.
        this.commonFields.map((field) => {
            this.saveLocal(field, userData[field])
        });

        this.setState(userData)
    };

    render() {
        const {Component, pageProps} = this.props;
        const {
            first_name,
            last_name,
            display_name,
            email,
            avatar_url,
            day_birth,
            month_birth,
            year_birth,
            phone,
            address,
            postal,
            city,
            province,
            sex,
            id_type,
            no_id,
            notes,
            user_key,
            is_profile_complete,
        } = this.state;

        return (
            <UserContext.Provider value={{
                userFirstName: first_name,
                userLastName: last_name,
                userDisplayName: display_name,
                userEmail: email,
                userAvatarUrl: avatar_url,
                userDayBirth: day_birth,
                userMonthBirth: month_birth,
                userYearBirth: year_birth,
                userPhone: phone,
                userAddress: address,
                userPostal: postal,
                userCity: city,
                userProvince: province,
                userSex: sex,
                userIdType: id_type,
                userNoId: no_id,
                userNotes: notes,
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