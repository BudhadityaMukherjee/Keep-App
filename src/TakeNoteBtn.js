import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";
import "./TakeNote.css"
const TakeNoteBtn = (props) => {
  if (props.bool != true)
    return (
      <>
        <Button
          variant="contained"
          onClick={props.add}
          className="my-2 px-1 bg-success all"
        >
          <AddBoxIcon />
        </Button>
      </>
    );
  else
    return (
      <>
      <div className="d-flex button-div row">

        <button
          onClick={props.updateTick}
          type="button"
          className="btn btn-success  update mx-2 my-2 update col-lg-12 col-sm-6"
        >
          <CheckIcon /> Update
        </button>
        <button
          onClick={props.updateCross}
          type="button"
          className="btn btn-danger  mx-2 my-2 col-lg-12 col-sm-6 update"
        >
          <CloseIcon /> Cancel
        </button>
      </div>
      </>
    );
};

export default TakeNoteBtn;
