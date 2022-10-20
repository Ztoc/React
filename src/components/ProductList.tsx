import React from 'react'
import useList from '../Hooks/useList'
import { bucket } from '../store/slices/ListSlice'

export const ProductList = () => {
  const { buckets } = useList()
  return (
    <div>
      {buckets.map((item) => {
        return (
          <div className="row mb-4">
            <div className="col-3 p-2 border-1 border position-relative bg-white">
              <h3 className="text text-center  ">{item.product.title}</h3>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary ">
                {item.count}
                <span className="visually-hidden">unread messages</span>{' '}
              </span>
            </div>
            <div className="col-6 d-flex justify-content-start align-items-center">
              <h5>{item.product.body}</h5>
            </div>
            <div className="col-3 d-flex justify-content-end align-items-center">
              <h5 className="text text-danger">${item.product.price}</h5>
            </div>
          </div>
        )
      })}
    </div>
  )
}
