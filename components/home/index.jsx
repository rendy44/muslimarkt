import { Section } from '../global';
import { Button } from '../form/button';
import heroStyles from './hero.module.scss';
import howStyles from './how.module.scss';
import PropTypes from 'prop-types';

function Hero() {
    return (
        <Section id='hero' extraClass={heroStyles.hero}>
            <h1>Portal Lowongan Pekerjaan Kaum Muslimin</h1>
            <p>Insya Allah Berkah dan Amanah!</p>
            <div className={heroStyles.actions}>
                <Button variant='success' label='Daftar Sekarang' isSubmit={false} />
                <Button variant='transparent' label='Masuk' isSubmit={false} />
            </div>
        </Section>
    )
}

function HowItWorks(props) {
    return (
        <Section id='how' isFull={true} title='Cara Kerja'>
            <div className={howStyles.howItWorksItems}>
                {props.children}
            </div>
        </Section>
    )
}

function WorkItem(props) {
    return (
        <div className={howStyles.item}>
            <div className={howStyles.itemIcon}>{props.icon}</div>
            <h3 className={howStyles.itemTitle}>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

WorkItem.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}

export { Hero, HowItWorks, WorkItem }