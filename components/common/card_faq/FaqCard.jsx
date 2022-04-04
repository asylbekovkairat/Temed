import React from 'react';
import Link from 'next/link'
import css from "../../../styles/faqcard.module.css"

const Faqcard = ({link, title, des, des2, text,}) => {
    return (
        <div className={css.card}>
            <Link href={link ? link : "faq"}>
                <div className={css.block}>
                    <h2>{title}</h2>
                    <p>{des}</p>
                    <p>{des2}</p>
                    <h5>{text}</h5>
                </div>
            </Link>
        </div>
    );
}

export default Faqcard;
