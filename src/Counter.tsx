/* eslint-disable jsx-a11y/aria-role */
import React from 'react'

export type CounterProps = {
    label?: string,
    count: number,
    onCounterIncrease:
    (isShift: boolean) => void;
}

const initialState = { count: 0 }

export type CounterState = Readonly<typeof initialState>;

const Counter = ({ label = "Count", count, onCounterIncrease }: CounterProps) => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        onCounterIncrease(event.shiftKey)
    }

    return (
        <div>
            <label htmlFor='counter'>{label}</label>
            <span
                id="counter"
                role="counter"
                onClick={handleClick}
            >
                {count}
            </span>
        </div>
    )
}

// class Counter extends Component<CounterProps, CounterState> {
//     componentDidMount(): void {
//         if(this.props.start){
//             this.setState({count: this.props.start})
//         }
//     }

//     incrementCounter = (event: React.MouseEvent<HTMLElement>) => {
//         const inc = event.shiftKey ? 10 : 1;
//         return this.setState({ count: this.state.count + inc })
//     };

//     render() {
//         // console.log(typeof this.state.count)
//         const { label = "Count" } = this.props;
//         return (
//             <div>
//                 <label htmlFor='counter'>{label}</label>
//                 <span
//                     id="counter"
//                     role="counter"
//                     onClick={this.incrementCounter}>
//                     {this.state.count}
//                 </span>
//             </div>
//         )
//     }
// }

export default Counter