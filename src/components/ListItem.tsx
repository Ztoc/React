import React from 'react'

import { list } from '../store/slices/ListSlice'

type Props = {
  data: list
  view: boolean
  handleAdd: (data: list) => void
}

const ListItem = (props: Props) => {
  const handleAdd = () => {
    props.handleAdd(props.data)
  }
  if (props.view === true)
    return (
      <div className="card col-3 border border-gray">
        <div className="card-header  bg-white">
          <h4 className="text-center">{props.data.title}</h4>
        </div>
        <div className="card-body">
          <p className="text text-center"> {props.data.body}</p>
        </div>
        <div className="card-footer d-flex align-itmes-center justify-content-between bg-white text-center">
          <span className="text p-2 col">{props.data.type}</span>
          <button
            className="btn col bg-dark text-white wrap"
            onClick={handleAdd}
          >
            Add to Bucket
          </button>
          <span className="text col text-danger">${props.data.price}</span>
        </div>
      </div>
    )
  else
    return (
      <div className="card border border-primary col-2">
        <div className="card-header bg-white">{props.data.title}</div>
        <div className="card-body ">{props.data.body}</div>
        <div className="card-footer bg-white d-flex justify-content-between">
          <span className="">{props.data.type}</span>
          <button className="btn bg-dark text-white" onClick={handleAdd}>
            Add
          </button>
          <span className="text text-danger">${props.data.price}</span>
        </div>  
      </div>
    )
}

export default ListItem
