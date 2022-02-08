import { useState } from 'react'
function MiniCalculator(props) {
    let [resultValue, setOperationResult ] = useState("")
    function Calculate() {
        
        if (props.operation == "add") {
            setOperationResult(`Addition is ${props.number1 + props.number2}`)
        }
        else if (props.operation == "multiply") {
            setOperationResult(`Multiplication is ${props.number1 * props.number2}`)
        }
        else if (props.operation == "divide") {
            setOperationResult(`Division is ${props.number1 / props.number2}`)
        }
        else if (props.operation == "subtract") {
            setOperationResult(`Subtraction is ${props.number1 / props.number2}`)
        }
        
    }
    return (
        <div className="addNo">
            <h3>first Number:{props.number1}</h3>
            <h3>second Number:{props.number2}</h3>
            <button onClick={Calculate} className="add">calculate</button>
            <h1>{resultValue}</h1>

        </div>
    )
}

export default MiniCalculator