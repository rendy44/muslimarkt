import { Section } from '../global';
import heroStyles from './hero.module.scss';
import { Button } from '../form/button';

function Hero(props) {
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

export { Hero }