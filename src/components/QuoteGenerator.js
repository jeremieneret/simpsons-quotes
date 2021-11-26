import React, { useState } from 'react'
import axios from 'axios'
import QuoteCard from './QuoteCard.js'
import '../style/CSS/style.css'


const QuoteGenerator = () => {
    const [quote, setQuote] = useState({
        quote:
            "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
        character: "Homer Simpson",
        image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
    })

    const getQuote = () => {
        axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
            .then(res => res.data)
            .then(data => {
                setQuote(
                    data[0]
                )
            })
    }

    return (
        <div className='quote-generator'>
            <QuoteCard quote={quote} />
            <div className='btn-and-img_ctnr'>
                <button type="button" onClick={getQuote}>Click me to get a new quote !</button>
                <img src={quote.image} alt={quote.character} />
            </div>
        </div>
    );

}

export default QuoteGenerator
