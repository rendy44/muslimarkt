import { Section } from '../global';
import { Btn } from '../form';
import heroStyles from './hero.module.scss';
import howStyles from './how.module.scss';
import PropTypes from 'prop-types';

function Hero() {
    return (
        <Section id='hero' extraClass={heroStyles.hero}>
            <h1>Portal Lowongan Pekerjaan<br />Kaum Muslimin</h1>
            <p>Insya Allah Berkah dan Amanah!</p>
            <div className={heroStyles.actions}>
                <Btn variant='success' label='Daftar Sekarang' isSubmit={false} />
                <Btn variant='transparent' label='Masuk' isSubmit={false} />
            </div>
        </Section>
    )
}

function HowItWorks(props) {
    return (
        <Section id='how' isFull={true} title='Cara Kerja' extraClass={howStyles.section}>
            <div className={howStyles.howItWorksItems}>
                {props.children}
            </div>
            <div className={howStyles.cta}>
                <Btn isSubmit={false} label='Temukan Pekerjaan' variant='main' />
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
}

export { Hero, HowItWorks, WorkItem }