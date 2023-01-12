import {Provider} from "react-redux";
import { Header } from "../components/header/Header";
import {store} from "../app/store";

export default {
  title: "Products/Header",
  component: Header
}

export const HeaderBasicExample = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  )
}