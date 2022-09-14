/* eslint-disable jsx-a11y/aria-role */
import React, { Component } from 'react'

export type CounterProps = { label?: string }
const initialState = { count: "0" }
export type CounterState = Readonly<typeof initialState>;

class Counter extends Component<CounterProps, CounterState> {
    readonly state: CounterState = initialState;

    incrementCounter = (event: React.MouseEvent<HTMLElement>) => {
        const inc = event.shiftKey ? 10 : 1;
        return this.setState({ count: this.state.count + inc })
    };

    render() {
        // console.log(typeof this.state.count)
        const { label = "Count" } = this.props;
        return (
            <div>
                <label htmlFor='counter'>{label}</label>
                <span
                    id="counter"
                    role="counter"
                    onClick={this.incrementCounter}>
                    {this.state.count}
                </span>
            </div>
        )
    }
}

export default Counter