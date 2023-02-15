import { Note } from "@mui/icons-material";
import React, { useState } from "react";
import Header from "./Header";
import Notes from "./Notes";
import TakeNote from "./TakeNote";
import Swal from "sweetalert2";

const Keep = () => {
    // Usetates
    const [arr, setArr] = useState([]);
    const [bool, setBool] = useState(false);
    const [updateId, setUpdateId] = useState({});
    const [text, setText] = useState({
        title: "",
        content: "",
    });
    // Updatebuton clicked
    const update = (id) => {
        if (bool == false) {
            const field = arr.filter((item, index) => {
                return index === id;
            });
            setText(field[0]);
            setBool(true);
            setUpdateId(id);
        } else {
            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    updateTick();
                    Swal.fire("Chanes are Saved!", "", "success");
                } else if (result.isDenied) {
                    updateCross();
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
        }
    };
    //A node is Deleted
    const deleteNote = (id) => {
        setArr((previous) => {
            return arr.filter((item, index) => {
                return index != id;
            });
        });
    };

    //Note is typed
    const InputEvent = (event) => {
        const { name, value } = event.target;

        setText((previous) => {
            return { ...previous, [name]: value };
        });
    };
    //Note is added
    const addNote = () => {
        setArr((previous) => {
            if (text.title.trim() != "" && text.content.trim() != "") {
                setText({
                    title: "",
                    content: "",
                });
                Swal.fire({
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1200,
                });

                return [...previous, text];
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Please add both the fields",
                    icon: "error",
                    confirmButtonText: "Retry",
                });
                return [...previous];
            }
        });
    };

    //Update is made
    const updateTick = () => {
        setArr((previous) => {
            if (text.title.trim() != "" && text.content.trim() != "") {
                previous[updateId].title = text.title;
                previous[updateId].content = text.content;
                setText({
                    title: "",
                    content: "",
                });
                setBool(false)
                Swal.fire("Changes are Saved!", "", "success");
                return [...previous];
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Please add both the fields",
                    icon: "error",
                    confirmButtonText: "Retry",
                });
                return [...previous];
            }
        });

    };
    //Update is not made

    const updateCross = () => {
        setBool(false);
        setText({
            title: "",
            content: "",
        });
        Swal.fire("Changes are not saved!", "", "info");
    };
    return (
        <>
            <Header />
            <TakeNote
                add={addNote}
                value={text}
                onChange={InputEvent}
                state={bool}
                updateTick={updateTick}
                updateCross={updateCross}
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
                                    update={update}
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
