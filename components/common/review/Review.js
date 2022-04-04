import React from 'react'
export default function Review({img, title, starsEmpty, starsFull, reviews, rating, btnReview}) {

  return (
    <div className='Review'>
            {
                    <div className='Card-Content'>
                        <img src={img} />
                        <span>{title} </span>
                        <div className='Stars-Reviews'>
                            <img src={starsEmpty} className='Empty-Star' />
                            <img src={starsFull}  className='Full-Star'/>
                            <p>{reviews} </p>
                        </div>
                        <h6>{rating}</h6>
                        <a href='#'>{btnReview}</a>
                    </div>
                }
    </div>
    )}