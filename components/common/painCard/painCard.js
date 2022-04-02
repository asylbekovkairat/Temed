import React from 'react'

export default function PainCard({title, reason}) {
  return (
    <>
      <div className="painCard">
        <div className="painDesc">
          <div className="painTitle">{title}</div>
          <ul>
            {
              reason.map((e) => <li key={e.id}>{e}</li>)
            }
          </ul>
        </div>
      </div>
    </>
  )
}

