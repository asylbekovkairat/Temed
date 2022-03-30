import React from 'react'
import css from '../../../styles/card_terapy.module.css'

export default function Card_terapy({ img, title, des1, des2, span1, des3, span2, des4, button }) {
    return (
        <div className={css.card}>
            {/* <Link href=""> */}
            <div className={css.card_block1}>
                <img src={img} alt="" />
            </div>
            <div className={css.card_block2}>

                <p id={css.p1}>{title}</p>

                <p className={css.p2}>
                    {des1}
                </p>
                <span className={css.p2_span}>{span1}</span>
                <p className={css.p2}>{des2}</p>
                <span className={css.p2_span}>{span2}</span>
                <p className={css.p2}>{des3}</p>
                <p className={css.p2}>{des4}</p>
                <button className='btn btn-white therapy-btn'>
                    {button}
                </button>
            </div>
            {/* </Link> */}
        </div >

    )
}
