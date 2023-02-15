import React, { useState } from "react";
import "./TakeNote.css";
import TakeNoteBtn from "./TakeNoteBtn";

const TakeNote = (props) => {
  return (
    <>
      <div className="container border border-dark rounded-3 notebox  card">
        <form action="" className="my-5">
          <div className="form-group my-3">
            <input
              name="title"
              className="w-5 border-0 o Input title-text"
              type="text"
              id="title"
              onChange={props.onChange}
              value={props.value.title}
              placeholder="Title"
            />
          </div>
          <div className="form-group ">
            <textarea
              className=" border-0 Input content-text w-100 my-3"
              name="content"
              id="content"
              cols=""
              rows=""
              value={props.value.content}
              onChange={props.onChange}
              placeholder="Take Note...."
            />
          </div>
          <div className="form-group d-flex ">
            <TakeNoteBtn
                bool={props.state}
                add={props.add}
                updateTick={props.updateTick}
                updateCross={props.updateCross}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default TakeNote;
