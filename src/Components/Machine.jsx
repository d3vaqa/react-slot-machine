import React from 'react'

const Machine = (props) => {
    const {s1,s2, s3} = props
    const winner = (s1 === s2 )&& (s2 === s3)
  return (
    <div className='slot-card'>
        <h1> {props.s1}{props.s2}{props.s3} </h1>
        <h2>{winner ? "Winner" : "Loser"}</h2>

    </div>
  )
}

export default Machine