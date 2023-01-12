import axios from 'axios'

import {BASE_URL} from '../data/constants/constants'

export const instance = axios.create({
    baseURL: BASE_URL,
})

export const productsApi = {
    getProducts: () => {
        return instance.get<ResponseDataType>('products')
    },
    getProductsFromPage: (page: number) => {
        return instance.get(`products?page=${page}`)
    }
}

export type ProductType = {
    id: number
    name: string
    year: number
    color: string
    pantone_value: string
}

type ResponseDataType = {
    data: ProductType[]
    page: number
    per_page: number
    support: {
        url: string
        text: string
    }
    total: number
    total_pages: number
}
