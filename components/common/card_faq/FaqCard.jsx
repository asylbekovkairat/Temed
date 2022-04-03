import React from 'react';
import Link from 'next/link'

const Faqcard = ({link, title, des, des2, text,}) => {
    return (
        <div>
            <Link href={link ? link : "faq"}>
                <div>
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
