import React from 'react'
import css from '../../../styles/card_specialists.module.css'

export default function Card_specialists({title, des, button}) {
  return (
    <div className={css.card}>

<p id={css.title}>{title}</p>
<p id={css.description}>{des}</p>

<button id={css.button}>{button}</button>
    </div>
  )
}
