import {
  appSlice,
  InitialStateType,
  setFilterAC,
  setInitializedAC,
  setProductsAC, setProductsPerPage
} from "../app/appSlice";

describe('auth reducer tests', () => {
  let initialState: InitialStateType

  beforeEach(() => {
    initialState = {
      products: [],
      filter: 0,
      page: 0,
      total_pages: 0,
      total: 0,
      per_page: 0,
      isInitialized: 'loading',
    }
  })

  test('set products data ', () => {

    const data = {
      products: [{
        id: 1,
        name: 'product',
        year: 2023,
        color: 'yellow',
        pantone_value: 'string'
      }],
      filter: 1,
      page: 1,
      total_pages: 2,
      total: 12,
      per_page: 6
    }

    const state = appSlice(initialState, setProductsAC(data))
    expect(state.products[0].name).toBe('product')
    expect(state.total_pages).toBe(2)
    expect(state.total).toBe(12)
    expect(state.per_page).toBe(6)

  })


  test('set filter to index 1', () => {
    const state = appSlice(initialState, setFilterAC({filter: 1}))
    expect(state.filter).toBe(1)
  })

  test('set isInitialized to idle', () => {
    const state = appSlice(initialState, setInitializedAC({isInitialized: 'idle'}))
    expect(state.isInitialized).toBe('idle')
  })


  test('set isInitialized to idle', () => {

    const data = {
      products: [{
        id: 1,
        name: 'product',
        year: 2023,
        color: 'yellow',
        pantone_value: 'string'
      }],
      page: 1,
    }
    const state = appSlice(initialState, setProductsPerPage(data))
    expect(state.page).toBe(2)
  })


})

