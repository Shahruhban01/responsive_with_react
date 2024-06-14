// Topic: props Drilling
import React, { useState } from 'react'
import { questions } from '../Data/faqQuestion';

export default function Faqs() {
    const [currentId, setcurrentId] = useState(questions[0].id)
    let items = questions.map((itemsData, i) => {
        let itemDetails = {
            itemsData,
            currentId,
            setcurrentId
        }
        return (
            <>
                <FaqItem itemDetails={itemDetails} />
            </>
        )
    })
    return (
        <>
            <h1 align="center">Frequently Asked Questions (FAQs)</h1>
            <div className='faqOuter'>
                {items}
            </div>
        </>
    )
}

function FaqItem({ itemDetails }) {
    return (
        <>
            <div className='faqItems' key={itemDetails.itemsData.id}>
                <h2 onClick={() => itemDetails.setcurrentId(itemDetails.itemsData.id)}>{itemDetails.itemsData.question}</h2>
                <p className={itemDetails.currentId == itemDetails.itemsData.id ? 'activeItem' : ''}>
                    {itemDetails.itemsData.answer}
                </p>
            </div>
        </>
    );
}