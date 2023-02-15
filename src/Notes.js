import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import "./Notes.css"
const Notes = (props) => {
    let arr2=props.arr
  return (
    <>
    <div className="col-lg-3 col-md-4 col-sm-12">

    <div className=" card p-2 border border-dark rounded-3 w-100 my-2">
              <h3 className="card-title" >{props.textTitle}</h3>
              <p className="card-text" >
                {props.textContent}
              </p>
              <div className="d-flex">

              <button type="button" className="btn btn-danger btn-circle btn-rounded btn-icon d-inline"
                onClick={()=>{
                    return props.deleteNote(props.id)
                }}>
              <DeleteOutlineIcon/>
              </button>
              <button type="button" className="btn btn-success btn-circle btn-rounded btn-icon "
              onClick={()=>{
                    return props.update(props.id)
                }}>
              <EditIcon/>
              </button>
              </div>
            </div>
    </div>
    </>
  );
};

export default Notes;
