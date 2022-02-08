import { useState } from 'react'
function Todo() {
    let [Hobby, setHobby] = useState([])
    function addTodo(event) {
        event.preventDefault()
        console.log(event)
        let formTag = event.target
        let inputTag = formTag.todo
        let newHobby = [...Hobby, inputTag.value]
        setHobby(newHobby)
        inputTag.value = ""

    }
    function clearAll() {
        setHobby([])
    }
    return (
        <div class="box-container">
            <form onSubmit={addTodo}>
                <h1>Todo App</h1>
                <input type="text" className="todo-user-input" name="todo" placeholder="Enter Todo Item"/><br />
                <button className="add">Add</button>
                <button className="add" onClick={clearAll}>Clear All</button>

            </form>
            <div class="container">
            {Hobby.map(function (val, index) {
                if(val==""){
                    return <div className="no-todo">No Todos</div>
                }
                else{

                return <div className="todo-container">{val}</div>
                }
            })}
            </div>
        </div>
    )

}
export default Todo