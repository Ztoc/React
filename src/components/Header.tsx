import React from 'react'
import useList from '../Hooks/useList'
import Bucket from './Bucket'
import { useEffect } from 'react'
import './List.css'
import { Navigate, useNavigate } from 'react-router-dom'

const Header = () => {
  const { buckets, totalPrice } = useList()
  const navigate = useNavigate()
  const handleClick = () => {
    const ele = document.getElementById('busket')
    ele?.classList.add('opacity-0')
    ele?.classList.add('invisible')
  }
  const handleBucket = () => {
    const ele = document.getElementById('busket')
    if (ele?.classList.contains('opacity-0')) {
      ele?.classList.remove('opacity-0')
      ele?.classList.add('opacity-1')
      ele?.classList.remove('invisible')
    } else {
      ele?.classList.add('opacity-0')
      ele?.classList.add('invisible')
    }
  }
  const handleCheckout = () => {
    navigate('/checkout')
    console.log('ddd')
  }
  return (
    <div className="header mb-3 position-relative">
      <div className="row">
        <div className="col-md-6 offset-md-3 d-flex align-items-center mt-4 justify-content-between">
          <div className="logo d-flex">
            <div className="card border border-danger p-10">Logo</div>
          </div>
          <div className="search border border-1 flex align-items-center position-relative w-50">
            <input
              type="text"
              className="p-3 borderless w-100"
              name=""
              id=""
              placeholder="Search..."
            />
            <div className="position-absolute right-0 p-2">
              {' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
          <div className="bucket d-flex align-items-end align-items-center">
            <button className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
            </button>

            <button className="ml-4 position-relative" onClick={handleBucket}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-basket3"
                viewBox="0 0 16 16"
              >
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
              </svg>
              {buckets.length !== 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary ">
                  {buckets.length}
                  <span className="visually-hidden">unread messages</span>{' '}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      <hr />

      <div
        className="busket col-xxl-3 col-md-6 col-sm-12 shadow opacity-0 invisible"
        id="busket"
      >
        <button
          onClick={handleClick}
          type="button"
          className="btn-close mt-0 float-end"
        ></button>
        <div className="m-4 ba">
          {buckets.map((item) => (
            <Bucket data={item} />
          ))}
        </div>

        <div className="mt-4 mb-4">
          <hr className="border-top border-primary border-4" />
        </div>
        <div className="row d-flex justify-content-between m-4">
          <h2 className="col-6">Subtotal</h2>
          <h2 className="col-6 text-right text-danger">${totalPrice}</h2>
        </div>
        <div>
          <button
            className="btn bg-dark text-white form-control"
            onClick={handleCheckout}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
