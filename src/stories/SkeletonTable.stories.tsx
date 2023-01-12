import {CustomModalDialog} from "../components/modalDialog/CustomModalDialog"
import {useState} from "react"
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import s from "../components/table/ProductsTable.module.scss";
import {head} from "../data/constants/constants";
import {TableBodySkeleton} from "../components/skeletonTable/SkeletonTable";

export default {
  title: "Products/TableBodySkeleton",
  component: TableBodySkeleton
}

export const TableBodySkeletonBasicExample = () => {
  return (
    <>
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
          <TableBodySkeleton columnsCount={head.length} rowsCount={6}/>
        </Table>
      </TableContainer>
    </>
  )
}
