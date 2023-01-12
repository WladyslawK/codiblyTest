import {Provider} from "react-redux"
import {store} from "../app/store"
import {CustomModalDialog} from "../components/modalDialog/CustomModalDialog"
import {useState} from "react";
import {ModalProductData} from "../components/modalProductData/ModalProductData";

export default {
  title: "Products/CustomModalDialog",
  component: CustomModalDialog
}

export const CustomModalDialogBasicExample = () => {
  const [open, setOpen] = useState(true)

  return (
    <>
      <Provider store={store}>
        <CustomModalDialog closeModal={() => setOpen(false)} open={open}>
          <p>Basic Modal</p>
        </CustomModalDialog>
      </Provider>
    </>
  )
}


export const CustomModalDialogProductExample = () => {
  const [open, setOpen] = useState(true)

  return (
    <>
      <Provider store={store}>
        <CustomModalDialog closeModal={() => setOpen(false)} open={open}>
          <ModalProductData id={2} name={'aqua'} color={'#00FFFF'} closeModal={() => setOpen(false)}/>
        </CustomModalDialog>
      </Provider>
    </>
  )
}