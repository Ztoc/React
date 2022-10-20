import classNames from 'classnames'
import React, { useState } from 'react'
import useList from '../Hooks/useList'
import { bucket } from '../store/slices/ListSlice'

type Props = {
  data: bucket
}

const Bucket = (props: Props) => {
  const { addCountTo, subCountTo } = useList()

  const addCount = () => {
    addCountTo(props.data.product.title)
  }
  const subCount = () => {
    subCountTo(props.data.product.title)
  }
  return (
    <div className="row border rounded m-1">
      <div className="col-4 justify-content-center align-items-center d-flex">
        <h4 className="text text-center">{props.data.product.title}</h4>
      </div>
      <div className="col-7">
        <div className="body center">
          <p className="text-center"> {props.data.product.body}</p>
        </div>
        <div className="d-flex justify-content-between">
          <div className="btn-group border">
            <button
              className={classNames(
                props.data.count === 9 ? 'disabled bg-secondary' : '',
                'btn btn-outline-white',
              )}
              onClick={addCount}
            >
              +
            </button>
            <button className="btn btn-outline-white">
              {props.data.count}
            </button>
            <button className="btn btn-outline-white" onClick={subCount}>
              -
            </button>
          </div>
          <div className="d-flex align-items-center">
            <p className="text text-danger"> $ {props.data.product.price}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Bucket
