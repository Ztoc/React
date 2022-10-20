import { useSelector, useDispatch } from 'react-redux'
import { list, IList, getLists, bucket } from '../store/slices/ListSlice'
import {
  setFilters,
  addBuckets,
  addCount,
  subCount,
} from '../store/slices/ListSlice'
import { AppDispatch } from '../store'
function useList() {
  const dispatch = useDispatch<AppDispatch>()

  const lists = useSelector<IList, list[]>((state) => state.list.lists)
  const filters = useSelector<IList, list[]>((state) => state.list.filters)
  const isLoading = useSelector<IList, boolean>((state) => state.list.loading)
  const buckets = useSelector<IList, bucket[]>((state) => state.list.buckets)
  const totalPrice = useSelector<IList, number>(
    (state) => state.list.totalPrice,
  )

  const getll = () => {
    dispatch(getLists())
  }
  const setFilter = (filters: string[]) => {
    if (filters.length === 0) {
      dispatch(setFilters(lists))
    } else {
      let filtered = lists.filter((list) => {
        let pos = filters.indexOf(list.type)
        if (pos !== -1) return list
      })
      dispatch(setFilters(filtered))
    }
  }

  const sortItems = (sort: string) => {
    let list = [...filters]

    if (sort === '1') {
      list.sort((a, b) => {
        if (a.title > b.title) {
          return 1
        }
        return -1
      })
      dispatch(setFilters(list))
    }

    if (sort === '2') {
      list.sort((a, b) => {
        if (a.price > b.price) {
          return 1
        }
        return -1
      })
      console.log(list)
      dispatch(setFilters(list))
    }
  }
  const addBucket = (product: list) => {
    dispatch(addBuckets(product))
  }
  const addCountTo = (title: string) => {
    dispatch(addCount(title))
  }

  const subCountTo = (title: string) => {
    dispatch(subCount(title))
  }
  return {
    lists,
    filters,
    isLoading,
    getll,
    setFilter,
    sortItems,
    addBucket,
    buckets,
    totalPrice,
    addCountTo,
    subCountTo,
  }
}

export default useList
