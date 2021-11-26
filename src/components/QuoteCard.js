import React from 'react'

function QuoteCard({ quote }) {
    return (
        <div className="quote-card">
            <figure>
                <figcaption>
                    <blockquote>{quote.quote}</blockquote>
                    <cite>{quote.character}</cite>
                </figcaption>
            </figure>
        </div>
    );
}

export default QuoteCard
