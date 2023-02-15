import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';import Button from "@mui/material/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";

const TakeNoteBtn = (props) => {
    if(props.bool!=true)
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
        <button onClick={props.updateTick} type="button" className="btn btn-success btn-circle update mx-2">
              <CheckIcon/> Update 
              </button>
              <button onClick={props.updateCross} type="button" className="btn btn-danger btn-circle">
                <CloseIcon/> Cancel
              </button>
              </>
    )
}

export default TakeNoteBtn;
