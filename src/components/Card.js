import React from 'react'

export default function Card({name, email, id}) {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='robo' src={`https://robohash.org/${id}?200*200`} />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
  )
}
