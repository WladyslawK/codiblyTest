import s from './CustomPagination.module.scss'
import {Pagination} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {ChangeEvent, useEffect, useState} from "react";
import {getProductsFromPage} from "../../../app/appSlice";

export const CustomPagination = () => {
  const dispatch = useAppDispatch()
  const page = useAppSelector(state => state.appProducts.page)
  const isInitialized = useAppSelector(state => state.appProducts.isInitialized)
  const paginationCount = useAppSelector(state => state.appProducts.total_pages)
  const rowsPerPage = useAppSelector(state => state.appProducts.per_page)
  const pageCount = useAppSelector(state => state.appProducts.total_pages)
  const [currentPage, setCurrentPage] = useState(page)


  const handleChangePage = (
    event: ChangeEvent<unknown> | null,
    newPage: number,
  ) => {
    //debugger
    console.log(newPage)
    dispatch(getProductsFromPage(newPage))
    setCurrentPage(newPage);
  };
  return (
    <div className={s.paginationContainer}>
      {paginationCount === null ? null : (
        <Pagination
          disabled={isInitialized === 'loading'}
          count={paginationCount}
          shape="rounded"
          color="primary"
          onChange={handleChangePage}
          page={currentPage}
        />
      )}

      {/*<TablePagination
        component="div"
        count={pageCount}
        page={page}
        onPageChange={() => {}}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={() => {}}
      />*/}

    </div>
  )
}