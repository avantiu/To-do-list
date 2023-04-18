import React, { useState } from 'react'
import './Todo.css'
import { AiOutlinePlus, AiFillDelete, AiFillEdit } from "react-icons/ai";
// import axios from 'axios';

const Todo = () => {

    const [data, setData] = useState('')
    const [items, setItems] = useState([])
    const [edititem, seteEdititem] = useState(null)

    let additem = ()=>{
        if(!data){
            alert("please fill the data")
        
        }else{
            let inputdata  = { id: new Date().getTime(), name: data}
            setItems([...items,inputdata])
            setData("");
        }
    }

    let handleClick =(id)=>{
        let newdata= items.filter((e)=>{
           return e.id !== id
        })
        setItems(newdata)
    }

    let handleEdit = (id)=>{
        let newedit = items.find((e)=>{
            return e.id === id
           
        })
        console.log(newedit);
        setData(newedit.name)
        seteEdititem(id)
    }

    return (
        <>
            <div className="container">
                <div className="section">
                    <h1 className='my-4' style={{ color: "wheat", fontFamily: "emoji" }}>Todo List</h1>
                    <div className="data position-relative">
                        <input type="text" className='form-control mx-auto' value={data} onChange={(e)=> setData(e.target.value)} placeholder='Add items' style={{ width: "75%" }} />
                        
                            <AiOutlinePlus className='position-absolute top-50 end-0 translate-middle-y' onClick={additem} title='add items' style={{ left: "78%" }} /> 
                        
                    </div>
                        {
                            items.map((e)=>{
                                return (
                                    <div className="col-md-8 mx-auto data position-relative my-3" key={e.id}>
                                    <input type="text" className='form-control mx-auto' value={e.name} placeholder='Add items' style={{ width: "75%" }} />
                                    
                                    <AiFillDelete className='position-absolute top-50 end-0 translate-middle-y text-danger' title='add items' style={{ left: "78%" }} onClick={()=>handleClick(e.id)} />
                                    <AiFillEdit className='position-absolute top-50 end-0 translate-middle-y text-danger' style={{ left: "65%" }} onClick={()=>handleEdit(e.id)} />
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </>
    )
}

export default Todo