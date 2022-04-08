import Link from 'next/link'

const Commentyandexcard = ({point, num_comm, grade, name, date, img, imgstar, imgstar_half, des,end}) => {
    return (
        <div>
            <div>
                <Link href={'/comment'}><p>Клиника Ткач...</p></Link>
                <img src="https://yastatic.net/s3/front-maps-static/maps-front-org-badge-api/out/assets/_/19f91a9bfe2992c3557394b1b82b934e.svg" alt="" />
            </div>
            <div>
                <div>{point}</div>
                <div>
                    <ul>
                        <li><img src={imgstar} alt="" /></li>
                        <li><img src={imgstar} alt="" /></li>
                        <li><img src={imgstar} alt="" /></li>
                        <li><img src={imgstar} alt="" /></li>
                        <li><img src={imgstar_half ? imgstar_half : imgstar} alt="" /></li>
                    </ul>
                    <Link href={'/comment'}><p>{num_comm} отзывов  • {grade} оценок</p></Link>
                </div>
                <div>
                    <h3>Поствьте нам оценку</h3>
                    <button>Оставить отзыв</button>
                </div>
                <div>
                    <div><img src={img} alt="" /></div>
                    <div>
                        <h4>{name}</h4>
                        <p>{date}</p>
                    </div>
                </div>
                <div>
                    <ul>
                        <li><img src={imgstar} alt="" /></li>
                        <li><img src={imgstar} alt="" /></li>
                        <li><img src={imgstar} alt="" /></li>
                        <li><img src={imgstar} alt="" /></li>
                        <li><img src={imgstar} alt="" /></li>
                    </ul>
                    <p>{des}</p>
                </div>
                <div>
                    <button>Больше отзывов на Яндекс Картах</button>
                    <p>{end}</p>
                </div>
            </div>
        </div>
    );
}

export default Commentyandexcard;
