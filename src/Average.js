import { useState } from "react";
function Average() {
    let [average, setAverage] = useState(0);
    let [numbers, setNumber] = useState([]);
    function addAverage(event) {
        event.preventDefault();
        let formTag = event.target
        let inputTag=formTag.number
        let newNum=[...numbers, parseInt(inputTag.value)]
        setNumber(newNum);
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += parseInt(numbers[i]);
        }
        sum += parseInt(inputTag.value);
        let averageValue = sum / (numbers.length + 1);
        setAverage(averageValue);
        inputTag.value=""
    }
    return (
        <div class="average-container">
            <form onSubmit={addAverage}>
                <h1>Average of Numbers</h1>
                <input type="number" className="todo-user-input" name="number" placeholder="Enter Numbers" /><br />
                <button className="add">Average</button>

            </form>
            <div class="container">
                {numbers.map(function (val, index) {
                        return <div className="val">{val}</div>

                })}

            </div>
            <div>Average of numbers is {average}</div>
        </div>
    );
}
export default Average;