import React from 'react'
import style from '../../style/Counter/Counter.css'
import media from '../../style/Counter/mediaCounter.css'
import CountUp from '@/anim/CountUp'

function Counter() {
    return (
        <div className='container'>
            <h2 className='main-title-counter'>We Have</h2>
            <div className='container-counter'>
                <div className='container-text-and-number-counter'>
                    <CountUp from={0} to={252} separator="," direction="up" duration={2} className="number-counter" />
                    <h1 className='title-counter'>happy customers</h1>
                </div>
                <div className='container-text-and-number-counter'>
                    <CountUp from={0} to={10} separator="," direction="up" duration={2} className="number-counter" />
                    <h1 className='title-counter'>years experience</h1>
                </div>
                <div className='container-text-and-number-counter'>
                    <CountUp from={0} to={67} separator="," direction="up" duration={2} className="number-counter" />
                    <h1 className='title-counter'>products</h1>
                </div>
            </div>
        </div>
    )
}

export default Counter