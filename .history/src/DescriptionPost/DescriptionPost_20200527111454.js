import React from 'react'

const DescriptionPost = ({postId, title, body}) => (
    <div className={`card ${feedback}`} onClick={() => onClick(index)}>
        <span className='symbol'>
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

export default Card