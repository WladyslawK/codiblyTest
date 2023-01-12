import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks"
import {ProductType} from "../../services/products-api";
import {useCallback, useEffect, useState} from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import {getProducts} from "../../app/appSlice";
import {FilterInput} from "../filterInput/FilterInput";
import {CustomPagination} from "./customPagination/CustomPagination";
import {head} from "../../data/constants/constants";
import {CustomModalDialog} from "../modalDialog/CustomModalDialog";
import {ModalProductData, ModalProductDataType} from "../modalProductData/ModalProductData";
import s from './ProductsTable.module.scss'
import {TableBodySkeleton} from "../skeletonTable/SkeletonTable";

export default function ProductsTable() {
  const [openModal, setOpenModal] = useState(false)
  const [modalData, setModalData] = useState<Omit<ModalProductDataType, 'closeModal'>>({id: 0, name: '', color: ''})
  const products = useAppSelector<ProductType[]>(state => state.appProducts.products)
  const filter = useAppSelector(state => state.appProducts.filter)
  const rows = useAppSelector(state => state.appProducts.per_page)
  const isInitialized = useAppSelector(state => state.appProducts.isInitialized)

  let displayProducts: ProductType[]

  if (filter !== null) {
    displayProducts = products.filter(product => product.id === filter)
  } else {
    displayProducts = products
  }

  const dispatch = useAppDispatch()
  const handleCloseModal = useCallback(() => setOpenModal(false), [setOpenModal])

  useEffect(() => {
    dispatch(getProducts())
  }, [])


  const handleOpenModal = (data: Omit<ModalProductDataType, 'closeModal'>) => {
    setModalData(data)
    setOpenModal(true)
  }

  const modal = openModal ?
    <CustomModalDialog closeModal={setOpenModal} open={openModal}>
      <ModalProductData id={modalData.id} color={modalData.color} name={modalData.name} closeModal={handleCloseModal}/>
    </CustomModalDialog> : ''

  return (
    <div className={s.MainContainer}>
      <div className={s.ElementContainer}>
        <FilterInput/>
      </div>
      <div className={s.ElementContainer}>
        <div style={{width: '60%'}}>
          <TableContainer component={Paper} className={s.TableContainer}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
              <TableHead style={{backgroundColor: '#efefef'}}>
                <TableRow>
                  {head.map((item, i) => (
                    <TableCell align={i == 0 ? 'left' : 'right'} key={i}>
                      {item}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              {isInitialized === 'loading' ?

                <TableBodySkeleton columnsCount={head.length} rowsCount={rows}/>

                :
                <TableBody>
                  {displayProducts.map(product => (
                    <TableRow key={product.id}
                              sx={{'&:last-child td, &:last-child th': {border: 0}}}
                              style={{backgroundColor: product.color}}
                              onClick={() => handleOpenModal({
                                id: product.id,
                                name: product.name,
                                color: product.color
                              })}
                    >
                      <TableCell component="th" scope="row">
                        {product.id}
                      </TableCell>
                      <TableCell align="right">{product.name}</TableCell>
                      <TableCell align="right">{product.year}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              }
            </Table>
          </TableContainer>
        </div>

      </div>
      <div className={s.ElementContainer}>
        {isInitialized === 'loading' ? '' : <CustomPagination/>}
      </div>
      {modal}
    </div>
  )
}