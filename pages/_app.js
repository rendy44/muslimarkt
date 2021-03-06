import React from 'react';
import App from 'next/app';
import UserContext from '../components/global/userContext';
import '../styles/app.scss';
import Router from 'next/router';
import {destroyCookie, parseCookies, setCookie} from 'nookies'
import User from "../src/user";

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
        recruiter: false
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
        'recruiter',
        'company',
    ];

    componentDidMount = async () => {

        // Define parent route.
        let parentRoute = '';

        // Define freeAccess Page.
        const freePage = ['/', '/masuk', '/daftar', '/cari-kandidat'];

        // Get key from cookie.
        const userKey = this.getLocal('key');

        // Make sure that user key is exist.
        if (userKey) {

            const routeArr = Router.route.split('/');
            // Validate route arr.
            if (routeArr.length > 1) {

                // Reassign parent route.
                parentRoute = routeArr[1]; // mostly it is a path after parent url.
            }

            // Fetch user details.
            User.detail(userKey)
                .then(result => {

                    // Validate result.
                    if (result.data.success) {

                        const isRecruiter = result.data.data.recruiter
                        if ('dashboard' === parentRoute && isRecruiter) {
                            Router.push('/')
                        } else if ('perusahaan' === parentRoute && !isRecruiter) {
                            Router.push('/')
                        }

                        // Save login data.
                        this.saveLoginData(result.data.data);
                    } else {
                        this.signOut();
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        } else {

            // Detect if current page is not a free access page.
            if (!freePage.includes(Router.route)) {

                // Redirect to login page.
                await Router.push('/masuk')
            }
        }
    };

    saveLoginData = async (userData, saveKey = true) => {
        // Prepare state obj.
        let stateObj = {};

        if (saveKey) {
            // Save key into cookie.
            this.saveLocal('key', userData.user_key)
        }

        // Parse obj.
        this.commonFields.map(field => stateObj[field] = userData[field]);

        // Update user state.
        await this.setState(stateObj);
    };

    signOut = async () => {
        // Prepare state obj.
        let stateObj = {};

        // Remove key from cookie.
        this.removeLocal('key')

        // Parse obj.
        this.commonFields.map(field => stateObj[field] = '');

        // Update user state.
        this.setState(stateObj);
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
            recruiter,
            company
        } = this.state;

        return (
            <UserContext.Provider
                value={{
                    state: this.state,
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
                    userCompany: company,
                    isProfileComplete: is_profile_complete,
                    isRecruiter: recruiter,
                    saveLoginData: this.saveLoginData,
                    signOut: this.signOut
                }}>
                <Component {...pageProps} />
            </UserContext.Provider>
        );
    }

    saveLocal(key, value) {
        // localStorage.setItem(this.prefix + key, value);
        setCookie(null, key, value, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })
    }

    getLocal(key) {
        let cookies = this.getLocals()
        return cookies[key];
    }

    getLocals() {
        return parseCookies();
    }

    removeLocal(key) {
        destroyCookie(null, key);
    }
}