import React from 'react';
import Callme from '../common/Block_CallMe/callMe';
import css from "../../styles/resaultpage.module.css"

function Resultspage() {
    return (
        <div>
            <div className={css.img}>
                <img src="https://thumb.tildacdn.com/tild3737-6664-4535-b566-663961306266/-/format/webp/noroot.jpg" alt="" />
            </div>
            <div className={css.title}>
                <h1>Библиотека резорбций </h1>
                <p>Библиотека пополняется и скоро  снова будет доступна</p>
            </div>
            <Callme/>
        </div>
    );
}

export default Resultspage;
