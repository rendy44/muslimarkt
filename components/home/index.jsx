import {Section} from '../global';
import {LinkBtn} from '../form';
import heroStyles from './hero.module.scss';
import howStyles from './how.module.scss';
import PropTypes from 'prop-types';

function Hero() {
    return (
        <Section id='hero' extraClass={heroStyles.hero}>
            <h1>Portal Lowongan Pekerjaan<br/>Kaum Muslimin</h1>
            <p>Insya Allah Berkah dan Amanah!</p>
            <div className={heroStyles.actions}>
                <LinkBtn variant='success' label='Daftar Sekarang' href='/daftar'/>
                <LinkBtn variant='transparent' label='Masuk' href='/masuk'/>
            </div>
        </Section>
    )
}

function HowItWorks(props) {
    return (
        <Section
            id='how'
            isFull={true}
            title='Cari Lowongan'
            desc='Lakukan langkah singkat berikut ini untuk mendapatkan pekerjaan impianmu'
            isLightColor={true}
            extraClass={howStyles.section}>
            <div className={howStyles.howItWorksItems}>
                {props.children}
            </div>
            <div className={howStyles.cta}>
                <LinkBtn href='/lowongan' label='Temukan Pekerjaan' variant='main'/>
            </div>
        </Section>
    )
}

function WorkItem(props) {
    return (
        <div className={howStyles.item}>
            <div className={howStyles.inner}>
                <div className={howStyles.itemIcon}>{props.icon}</div>
                <h3 className={howStyles.itemTitle}>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

WorkItem.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};

export {Hero, HowItWorks, WorkItem}