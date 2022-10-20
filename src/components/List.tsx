import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'
import { list } from '../store/slices/ListSlice'
import './List.css'
import useList from '../Hooks/useList'
import classNames from 'classnames'

type Props = {
  data: list[]
  handleSort: (sort: string) => void
  handleAdd: (product: list) => void
}

const List = (props: Props) => {
  const { buckets, filters } = useList()
  const [sort, setSort] = useState('1')
  const [clicked, setClicked] = useState(true)
  const toggleClicked = (kind: number) => () => {
    if (kind === 1 && clicked === true) {
    } else if (kind === 2 && clicked === false) {
    } else setClicked(!clicked)
  }
  useEffect(() => {
    props.handleSort(sort)
  }, [sort])
  const handleSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
  }
  const handleAdd = (product: list) => {
    const ele = document.getElementById('busket')
    ele?.classList.remove('opacity-0')
    ele?.classList.add('opacity-1')
    ele?.classList.remove('invisible')
    props.handleAdd(product)
  }
  return (
    <div>
      <div>
        <h1>Product List</h1>
        <p>There are several types of products in this store</p>
      </div>
      <div className="d-flex justify-content-between aligh-items-center">
        <div className="">
          <p className="text">
            <strong>{props.data.length}</strong> &nbsp; products
          </p>
        </div>
        <div className="d-flex">
          <select
            className="col-8 mr-2"
            name=""
            id=""
            onChange={handleSelected}
          >
            <option value="1">Alpha</option>
            <option value="2">Price</option>
          </select>
          <button
            className={clicked ? 'active' : 'disable'}
            onClick={toggleClicked(1)}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className="icon icon-view-small"
              viewBox="0 0 35 35"
            >
              <path d="M0 0h15v15H0zM20 0h15v15H20zM0 20h15v15H0zM20 20h15v15H20z"></path>
            </svg>
          </button>
          <button
            className={classNames(!clicked ? 'active' : 'disable', 'ml-2')}
            onClick={toggleClicked(2)}
          >
            {' '}
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className="icon icon-view-list"
              viewBox="0 0 35 35"
            >
              <path d="M0 0h35v8H0zM0 13h35v8H0zM0 27h35v8H0z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="row">
        {filters.map((item, index) => (
          <ListItem
            key={index}
            data={item}
            view={clicked}
            handleAdd={handleAdd}
          />
        ))}
      </div>
    </div>
  )
}

export default List
