import css from "../../styles/commentpage.module.css"
import Link from 'next/link'
import LeaveCom from "../common/card-LeaveComment/CardLeaveComment";
import Card_comment from "../constants/card-comment";
import CommentCard from "../common/comment_card/Comment_Card";
import Callme from "../common/Block_CallMe/callMe";

const Commentpage = () => {
    return (
        <div>
            <div className={css.title}><h1 className='container' >Отзывы пациентов</h1></div>
            <div className={`container ${css.link}`}>
                <Link href={'/'}>Главная</Link>
                <p>/</p>
                <Link href={'/comment'}>Отзывы пациентов</Link>
            </div>
            <div className={`container `}>
                <LeaveCom />
            </div>
            <div className={css.title}><h2 className='container' >Отзывы с порталов</h2></div>
            <div className="container">
                <div>
                    {
                        Card_comment.map((e) => <CommentCard
                            title={e.title}
                            title2={e.title2}
                            num_com={e.num_com}
                            place={e.place}
                            des={e.des}
                        />)
                    }
                </div>
            </div>
            <Callme/>
        </div>
    );
}

export default Commentpage;
