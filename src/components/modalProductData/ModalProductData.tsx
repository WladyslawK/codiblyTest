import React, {memo} from 'react';
import s from './ModalProductData.module.scss'
import {Button} from "@mui/material";

export type ModalProductDataType = {
  id: number
  name: string
  color: string
  closeModal: () => void
}


export const ModalProductData: React.FC<ModalProductDataType> = memo(({id, color, name, closeModal}) => {
  return (
    <div className={s.mainContainer}>
      <div className={s.AlignContainer}>
        <h2>Product Data</h2>
      </div>
      <div className={s.ProductContainer}>
        <section className={s.AboutProductSection}>
          <p><b>id</b>: {id}</p>
          <p><b>name</b>: {id}</p>
        </section>
        <div style={{backgroundColor: color}} className={s.ColorContainer}>
        </div>
      </div>
      <div className={s.AlignContainer}>
        <Button variant={'contained'} onClick={closeModal}>close</Button>
      </div>
    </div>
  )
})