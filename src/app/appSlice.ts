import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit'

import {productsApi, ProductType} from '../services/products-api'
import {errorHandle} from "../utils/error-handling";

const initialState: InitialStateType = {
  products: [],
  filter: null,
  page: 0,
  total_pages: 0,
  total: 0,
  per_page: 0,
  isInitialized: 'loading',
  error: null

}

export const slice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setProductsAC: (state, action: PayloadAction<SetProductsType>) => {
      state.products = action.payload.products
      state.page = action.payload.page
      state.total_pages = action.payload.total_pages
      state.total = action.payload.total
      state.per_page = action.payload.per_page
    },
    setFilterAC: (state, action: PayloadAction<{ filter: number | null }>) => {
      state.filter = action.payload.filter
    },
    setInitializedAC: (state, action: PayloadAction<{ isInitialized: IsInitializedType }>) => {
      state.isInitialized = action.payload.isInitialized
    },
    setProductsPerPage: (state, action: PayloadAction<ProductsPerPageType>) => {
      state.products = action.payload.products
      state.page = action.payload.page
    },
    setAppErrorAC: (state, action: PayloadAction<{error: string | null}>) => {
      state.error = action.payload.error
    }
  },
})

export const appSlice = slice.reducer
export const {setProductsAC, setFilterAC, setInitializedAC, setProductsPerPage, setAppErrorAC} = slice.actions


//thunks
export const getProducts = () => async (dispatch: Dispatch) => {
  dispatch(setInitializedAC({isInitialized: 'loading'}))
  try {
    const response = await productsApi.getProducts()

    const {page, total_pages, total, per_page} = response.data

    dispatch(setProductsAC({products: response.data.data, page, total_pages, total, per_page}))
    dispatch(setInitializedAC({isInitialized: 'idle'}))
  } catch (e: any) {
    errorHandle(dispatch, e.message)
  }
}

export const getProductsFromPage = (pageNumber: number) => async (dispatch: Dispatch) => {
  dispatch(setInitializedAC({isInitialized: 'loading'}))
  try {
    const response = await productsApi.getProductsFromPage(pageNumber)

    const {page, total_pages, total, per_page} = response.data

    dispatch(setProductsAC({products: response.data.data, page, total_pages, total, per_page}))
    dispatch(setInitializedAC({isInitialized: 'idle'}))

  }catch (e: any){
    errorHandle(dispatch, e.message)
  }
}

export type IsInitializedType = 'loading' | 'idle' | 'failed'

export type InitialStateType = {
  products: ProductType[]
  filter: number | null
  page: number
  total_pages: number
  total: number
  per_page: number
  isInitialized: IsInitializedType
  error: string | null
}

type SetProductsType = Omit<InitialStateType, 'filter' | 'isInitialized' | 'error'>

type ProductsPerPageType = Pick<InitialStateType, 'products' | 'page'>
