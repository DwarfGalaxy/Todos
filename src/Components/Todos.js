import React, { useState } from 'react'

function Todos() {
    const [todo, settodo] = useState("");
    const [todos, settodos] = useState([]);
    const newItems = (event) => {
        settodo(event.target.value);
    }
    const addItems = (e) => {
        e.preventDefault();
        if (todo !== "") {
            settodos([...todos, todo]);
            settodo("");
        }
    }
    const deleteItem=(item)=>{
        let remainingValues=todos.filter((x)=>{
            return x!==item;
        });
        settodos([...remainingValues]);
    }

    return (
        <>
            <div className="container border border-3 rounded mt-3">
                <h1 className='text-center text-light mb-3'>Todo List App</h1>
                <form action="">
                    <div className="d-flex justify-content-between mb-3">
                        <input type="text" className="form-control" id="exampleInputText1" onChange={newItems} aria-describedby="textHelp" value={todo}/>
                        <button type="button" className="btn btn-secondary ms-2" onClick={addItems}>Go</button>
                    </div>
                </form>
                {todos.map((item) => {
                    return <div className="d-flex mt-3 mb-3 border p-2 bg-primary bg-opacity-6 rounded border-0" key={Math.random()}>
                        <span className='text-light mt-1 fw-bolder fs-4 ms-4'>{item}</span>
                        <div className="ms-auto">
                            <button type="button" className="btn btn-secondary" onClick={()=>deleteItem(item)}>Delete</button>
                        </div>
                    </div>
                })}


            </div>
        </>
    )
}

export default Todos