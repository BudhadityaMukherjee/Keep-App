import { Note } from "@mui/icons-material";
import React, { useState } from "react";
import Header from "./Header";
import Notes from "./Notes";
import TakeNote from "./TakeNote";
import Swal from 'sweetalert2'

const Keep = () => {
    const [arr, setArr] = useState([]);
    const [text, setText] = useState({
        title: "",
        content: "",
    });

    const deleteNote = (id) => {
        setArr((previous) => {
            return arr.filter((item, index) => {
                return index != id;
            });
        });
    };
    const InputEvent = (event) => {
        
        const {name,value}=event.target

        setText((previous) => {
            return { ...previous, [name]: value };
        });
    };
    
    const addText = () => {
        setArr((previous) => {
            if (text.title.trim() != "" && text.content.trim() != "")
            {
                setText({
                    title: "",
                    content: "",
                });
                Swal.fire({
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1200
                  })
                return [...previous, text];
            }
            else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Please add both the fields',
                    icon: 'error',
                    confirmButtonText: 'Retry'
                  })
                return [...previous];
            }
        });
        
    };
    return (
        <>
            <Header />
            <TakeNote
                add={addText}
                value={text}
                onChange={InputEvent}
            />
            <div>
            <div className="container w-100 my-5">
            <div className="row text-center">
                {arr.map((data, index) => {
                    return (
                        <Notes
                            id={index}
                            deleteNote={deleteNote}
                            textTitle={data.title}
                            textContent={data.content}
                        />
                    );
                })}
            </div>
                </div>
            </div>

        </>
    );
};

export default Keep;
