import React from 'react'

const Quote = ( {random, author, quote} ) => {
    return (
        <div className="centered" id="quote-box">
            <h3 id="text">{quote}</h3>
            <p id="author">{author}</p>
            <div className="below-parent">
                <button id="new-quote" onClick={random}>New Quote</button>
                <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">tweet forward</a>
            </div>
        </div>
    )
}

export default Quote
