/* eslint-disable jsx-a11y/aria-role */
import React, { Component } from 'react'

export type CounterProps = { label?: string }
const initialState = { count: "0" }
export type CounterState = Readonly<typeof initialState>;

class Counter extends Component<CounterProps, CounterState> {
    readonly state: CounterState = initialState;

    render() {
        // console.log(typeof this.state.count)
        const { label = "Count" } = this.props;
        return (
            <div>
                <label htmlFor='counter'>{label}</label>
                <span id="counter" role="counter">{this.state.count}</span>
            </div>
        )
    }
}

export default Counter