import React from 'react';
import Link from 'next/link'
import css from "../../../styles/comment_card.module.css"

const CommentCard = ({ title, title2, num_com, place, des, }) => {
    return (
        <div className={css.card}>
            <div className={css.border}>
                <div className={css.first_block}>
                    <Link href={"/"}><h5>{title} <br/> {title2}</h5></Link>
                    <div className={css.img}>
                        <img style={{ width: "100px" }} src="https://w7.pngwing.com/pngs/709/246/png-transparent-business-5-star-probot-artistry-hotel-business-angle-text-people.png" alt="#" />
                        <Link href={"/"}><p>{num_com} отзыва</p></Link>
                    </div>
                    <p>{place}</p>
                </div>
                <div className={css.second_block}>
                    <Link href={"/"}><p>«{des}»</p></Link>
                </div>
            </div>
            <div className={css.end}>
                <p>powered by <img src="https://prodoctorov.ru/static/logo_widget.png" alt="proDoctorov" /></p>
            </div>
        </div>
    );
}

export default CommentCard;
