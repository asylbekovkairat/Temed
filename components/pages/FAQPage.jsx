import css from '../../styles/faqpage.module.css'
import Link from 'next/link'
import Mrt from '../common/mrt/mrt';

const Faqpage = () => {
    return (
        <div className={` ${css.faq}`}>
            <div className={css.title}><h1 className='container' >Вопросы</h1></div>
            <div className={`container ${css.link}`}>
                <Link href={'/'}>Главная</Link>
                <p>/</p>
                <Link href={'/faq'}>Вопросы</Link>
            </div>
            <div className='container'>
                <Mrt />
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Faqpage;

