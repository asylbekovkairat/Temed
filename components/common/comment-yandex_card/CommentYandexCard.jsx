import Link from 'next/link'
import css from '../../../styles/comment_yandex.module.css'

const Commentyandexcard = ({ title, point, num_comm, grade, name, date, img, imgstar, imgstar_half, des, end }) => {
    return (
        <div className={css.card}>
            <div className={css.first_block}>
                <Link href={'/comment'}><h3>{title}</h3></Link>
                <img src="https://yastatic.net/s3/front-maps-static/maps-front-org-badge-api/out/assets/_/19f91a9bfe2992c3557394b1b82b934e.svg" alt="" />
            </div>

            <div className={css.point}>
                <h3>{point}</h3>
                <div>
                    <ul className={css.star}>
                        <li><img src={imgstar} alt="" /></li>
                        <li><img src={imgstar} alt="" /></li>
                        <li><img src={imgstar} alt="" /></li>
                        <li><img src={imgstar} alt="" /></li>
                        <li><img src={imgstar_half ? imgstar_half : imgstar} alt="" /></li>
                    </ul>
                    <Link href={'/comment'}><p>{num_comm} отзывов  • {grade} оценок</p></Link>
                </div>
            </div>
            <div className={css.third_block}>
                <h3>Поствьте нам оценку</h3>
                <button>Оставить отзыв</button>
            </div>
            <div className={css.fourth_block}>
                <div><img src={img} alt="avatar" /></div>
                <div>
                    <h4>{name}</h4>
                    <p>{date}</p>
                </div>
            </div>
            <div className={css.fifth_block}>
                <ul className={css.star}>
                    <li><img src={imgstar} alt="" /></li>
                    <li><img src={imgstar} alt="" /></li>
                    <li><img src={imgstar} alt="" /></li>
                    <li><img src={imgstar} alt="" /></li>
                    <li><img src={imgstar} alt="" /></li>
                </ul>
                <div className={css.des}>
                    <p>{des}</p>
                </div>
            </div>
            <div className={css.last_block}>
                <button>Больше отзывов на Яндекс Картах</button>
                <Link href=''><p>{end}</p></Link>
            </div>

        </div>
    );
}

export default Commentyandexcard;
