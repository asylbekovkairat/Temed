import css from '../../styles/faqpage.module.css'
import Link from 'next/link'
import Mrt from '../common/mrt/mrt';
import faqList from '../constants/faq-list';
import Faqcard from '../common/card_faq/FaqCard';

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
            <div}>
                {
                    faqList.map((e)=><Faqcard
                    link={e.link}
                    title={e.title}
                    des={e.des}
                    des2={e.des2}
                    text={e.text}
                    />)
                }
            </div>
        </div>
    );
}

export default Faqpage;

