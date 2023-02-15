import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./TakeNote.css"
import AddBoxIcon from '@material-ui/icons/AddBox';

const TakeNote = (props) => {
    return (
        <>
            <div className="container border border-dark rounded-3 notebox">
                <form action="" className="my-5">
                    <div className="form-group my-3">
                        <input
                            name="title"
                            className="w-5 border-0 o input title-text"
                            type="text"
                            id="title"
                            onChange={props.onChange}
                            value={props.value.title}
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group ">
                        <textarea
                            className=" border-0 input content-text w-100"
                            name="content"
                            id="content"
                            cols=""
                            rows=""
                            value={props.value.content}
                            onChange={props.onChange}
                            placeholder="Take Note...."
                        />
                    </div>
                    <div className="form-group">
                        <Button variant="contained"

                            onClick={props.add}
                           
                            className="my-2 px-1 bg-success all"
                        >
                            <AddBoxIcon/>
                            </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default TakeNote;
