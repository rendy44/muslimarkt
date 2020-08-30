import React from "react";
import PropTypes from 'prop-types';
import {Layout, Section} from "../global";
import styles from './style.module.scss';
import RegisterEmployerForm from "../form/employer/register";
import {AiOutlineGlobal, AiOutlineDollar} from 'react-icons/ai';

function Hero(props) {
    return (
        <Section id={'hero'} isFull={true} extraClass={styles.hero} isNoPadding={true}>{props.children}</Section>
    )
}

function RegisterSection(props) {
    return (
        <Section id={'reg'} isFull={true} extraClass={styles.reg}>
            <div className={styles.wrappers}>
                <div className={styles.form}>
                    <h1>Mulai rekrut talenta bersama Muslimarkt.</h1>
                    <ul>
                        <li>Menjangkau talenta muslim di seluruh Indonesia</li>
                        <li>Proses rekrutmen yang mudah dan transparan</li>
                        <li>Menghemat operasional dengan tanpa biaya administrasi</li>
                    </ul>
                    <RegisterEmployerForm userKey={props.userKey}/>
                </div>
                <div className={styles.benefits}>
                    <Benefits>
                        <BenefitItem
                            icon={<AiOutlineGlobal/>}
                            title={'Jangkauan Luas'}
                            desc={'Muslimarkt menjangkau talenta muslim profesional di seluruh Indonesia untuk dapat bekerja di perusahaan Anda'}/>
                        <BenefitItem
                            icon={<AiOutlineDollar/>}
                            title={'Bebas Administrasi'}
                            desc={'Muslimarkt berkomitmen untuk membantu menyatukan pengusaha dan talenta muslim di seluruh Indonesia dalam ikatan profesionalisme'}/>
                    </Benefits>
                </div>
            </div>
        </Section>
    )
}

RegisterSection.propTypes = {
    userKey: PropTypes.string.isRequired
}

function Benefits(props) {
    return <div className={styles.items}>{props.children}</div>
}

function BenefitItem(props) {
    return (
        <div className={styles.item}>
            <div className={styles.head}>
                <div className={styles.icon}>{props.icon}</div>
                <h3>{props.title}</h3>
            </div>
            <p>{props.desc}</p>
        </div>
    )
}

BenefitItem.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}

export {Hero, RegisterSection}