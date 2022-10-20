import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getLists = createAsyncThunk('List/getLists', async () => {
  let response = require('../../service/Data.json')
  let { lists } = response.data
  return lists
})

export type list = {
  title: string
  body: string
  type: string
  price: number
}
export type bucket = {
  product: list
  count: number
}

export interface ListState {
  lists: Array<list>
  filters: Array<list>
  loading: true | false
  buckets: Array<bucket>
  totalPrice: number
}

export interface IList {
  list: ListState
}

const initialState: ListState = {
  lists: [],
  filters: [],
  loading: false,
  buckets: [],
  totalPrice: 0,
}
const ListSlice = createSlice({
  name: 'List',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload
    },
    addBuckets: (state, action) => {
      let pos = state.buckets.findIndex(
        (item) => item.product.title === action.payload.title,
      )
      if (pos !== -1) {
        state.buckets[pos].count++
      } else state.buckets.push({ product: action.payload, count: 1 })
      let total = 0
      state.buckets.map((item: bucket) => {
        total += item.product.price * item.count
      })
      state.totalPrice = parseFloat(total.toFixed(2))
    },
    addCount: (state, action) => {
      let pos = state.buckets.findIndex(
        (item) => item.product.title === action.payload,
      )
      state.buckets[pos].count = state.buckets[pos].count + 1
      console.log(state.buckets)
      let total = 0
      state.buckets.map((item: bucket) => {
        total += item.product.price * item.count
      })
      state.totalPrice = parseFloat(total.toFixed(2))
    },
    subCount: (state, action) => {
      let pos = state.buckets.findIndex(
        (item) => item.product.title === action.payload,
      )
      state.buckets[pos].count = state.buckets[pos].count - 1
      if (state.buckets[pos].count === 0) {
        state.buckets.splice(pos, 1)
      }
      let total = 0
      state.buckets.map((item: bucket) => {
        total += item.product.price * item.count
      })
      state.totalPrice = parseFloat(total.toFixed(2))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLists.pending, (state) => {
        state.loading = true
      })
      .addCase(getLists.fulfilled, (state, action) => {
        state.loading = false
        state.lists = action.payload
        const sorted = state.lists.sort((a, b) => {
          if (a.title > b.title) {
            return 1
          }
          return -1
        })
        state.filters = sorted
      })
  },
})
console.log(ListSlice.reducer)
export default ListSlice.reducer
export const { setFilters, addBuckets, addCount, subCount } = ListSlice.actions
