/* eslint-disable jsx-a11y/aria-role */
import React, { Component } from 'react'

export type CounterProps = { label1?: string }
const initialState = { other: "0" }
export type CounterState = Readonly<typeof initialState>;

class Counter1 extends Component<CounterProps, CounterState> {
    readonly state: CounterState = initialState;

    incrementCounter = (event: React.MouseEvent<HTMLElement>) => {
        const inc = event.shiftKey ? 10 : 1;
        return this.setState({ other: this.state.other + inc })
    };

    render() {
        // console.log(typeof this.state.count)
        const { label1 = "Count" } = this.props;
        return (
            <div>
                <label htmlFor='counter1'>{label1}</label>
                <span
                    id="counter"
                    role="counter1"
                    onClick={this.incrementCounter}>
                    {this.state.other}
                </span>
            </div>
        )
    }
}

export default Counter1