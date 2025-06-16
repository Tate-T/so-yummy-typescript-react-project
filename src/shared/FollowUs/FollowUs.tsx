import Socials from '../Socials/Socials';
import css from './followUs.module.scss';

export default () => {
    return (<section className={css.folus}>
        <h3 className={css.subtitle}>Follow us</h3>
        <Socials size={26}/>
    </section>);
}