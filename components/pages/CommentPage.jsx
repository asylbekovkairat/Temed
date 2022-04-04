import css from "../../styles/commentpage.module.css"
import Link from 'next/link'
import LeaveCom from "../common/card-LeaveComment/CardLeaveComment";

const Commentpage = () => {
    return (
        <div>
           <div className={css.title}><h1 className='container' >Отзывы пациентов</h1></div>
            <div className={`container ${css.link}`}>
                <Link href={'/'}>Главная</Link>
                <p>/</p>
                <Link href={'/comment'}>Отзывы пациентов</Link>
            </div> 
            <div className="container">
                <LeaveCom/>
            </div>
        </div>
    );
}

export default Commentpage;
