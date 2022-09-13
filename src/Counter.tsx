/* eslint-disable jsx-a11y/aria-role */
import React from 'react'

export type CounterProps = { label?: string }

const Counter = ({ label = "Count" }: CounterProps) => {
    return (
        <div>
            <label htmlFor='counter'>{label}</label>
            <span id="counter" role="counter">1</span>
        </div>
    )
}

export default Counter