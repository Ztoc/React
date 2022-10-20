import React from 'react'
import { useNavigate } from 'react-router-dom'
import useList from '../Hooks/useList'
import { ProductList } from './ProductList'
import './List.css'

const CheckOut = () => {
  const { totalPrice } = useList()
  const navigate = useNavigate()
  return (
    <div className="row">
      <div className="col-xxl-5 offset-xxl-1 col-sm-8 offset-sm-2 bg-white mt-5">
        <div className="row d-flex justify-content-start text-center">
          <div className="card border border-primary p-5 col-5">Logo</div>
        </div>
        <div className="row mt-4">
          <p>information</p>
        </div>
        <div className="d-flex justify-content-start w-100">
          <div className="express justify-content-start">
            <div className="head">
              <h5>Express Checkout</h5>
            </div>
            <div className="content p-4 jus">
              <button className="btn btn-primary mr-2 px-4">
                <h3 className="inline-block mr-2">Shop</h3>
                <h4 className="inline-block text bg-white text-primary pay">
                  Pay
                </h4>
              </button>
              <button className="btn btn-warning mr-2 px-5">
                <h3 className="inline-block mr-2">Pay</h3>
                <h4 className="inline-block text text-primary">Pal</h4>
              </button>
              <button className="btn btn-dark px-5 ">
                <h3 className="text-white text-center bg-dark  ">G Pay</h3>
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h2 className="or">
            <span className="bg-white px-4 text-secondary">OR</span>
          </h2>
        </div>
        <div>
          <form action="">
            <div className="">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className=" mt-4 mb-4">
              <input type="checkbox" className="mr-3" name="" id="" />
              <label htmlFor="">Email with news</label>
            </div>
            <div className="">
              <label htmlFor="" className="form-label">
                Shipping Address
              </label>
              <select name="" id="" className="form-control">
                <option value="1">US</option>
                <option value="2">Russia</option>
              </select>
            </div>
            <div className="d-flex mt-4 mb-4 justify-content-between">
              <input
                type="text"
                className="form-control mr-4"
                id="email"
                placeholder="first name"
                name="email"
              />{' '}
              <input
                type="text"
                className="form-control ml-4"
                id="email"
                placeholder="last name"
                name="text"
              />{' '}
            </div>
            <div className="mb-4">
              <input
                type="text"
                name=""
                placeholder="Address"
                className="form-control"
                id=""
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name=""
                placeholder="Apartment"
                className="form-control"
                id=""
              />
            </div>
            <div className="d-flex mt-4 mb-4 justify-content-between">
              <input
                type="text"
                className="form-control mr-4"
                id="email"
                placeholder="city"
                name="email"
              />{' '}
              <input
                type="text"
                className="form-control ml-4"
                id="email"
                placeholder="post code"
                name="text"
              />{' '}
            </div>

            <div className="mb-4 position-relative">
              <input
                type="text"
                name=""
                placeholder="phone"
                className="form-control"
                id=""
              />
              <button
                className="position-absolute help"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="In order to contact you "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-question-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>
              </button>
            </div>
            <div
              className="d-flex justify-content-between align-items-center return"
              onClick={(e) => navigate('/')}
            >
              <div>&lt; Return</div>
              <div>
                <button className="btn btn-warning p-2">
                  Continue Shipping
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="product-list col-xxl-5 col-sm-8 offset-sm-2 offset-xxl-0">
        <div className="col-lg-6 col-xxl-5 col-sm-6 m-5">
          <div className="mt-5">
            <ProductList />
          </div>
          <hr />
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Discount Code"
              name=""
              id=""
            />
            <input type="button" className="btn btn-secondary" value="Apply" />
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="text text-mute">Subtotal</p>
            <p className="text text-mute">$ {totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
