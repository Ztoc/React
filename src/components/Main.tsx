import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import List from './List'
import useList from '../Hooks/useList'
import { list } from '../store/slices/ListSlice'
import Header from './Header'

const Main = () => {
  const { filters, isLoading, getll, sortItems, addBucket } = useList()
  const [sort, setSort] = useState('')
  useEffect(() => {
    getll()
  }, [])
  const handleSort = (sort: string) => {
    sortItems(sort)
    setSort(sort)
  }
  const handleAdd = (product: list) => {
    console.log(product)
    addBucket(product)
  }
  const sorts = () => {
    console.log(sort)
    sortItems(sort)
  }
  return (
    <div id="main">
      <Header />
      {isLoading && <h2>Loading</h2>}

      <div className="row content col-md-10 col-xxl-10 offset-xxl-1 offset-sm-1">
        <div className="col-2">
          <Filter sort={sorts}></Filter>
        </div>
        <div className="col-10">
          <List
            data={filters}
            handleSort={handleSort}
            handleAdd={handleAdd}
          ></List>
        </div>
      </div>
    </div>
  )
}

export default Main
