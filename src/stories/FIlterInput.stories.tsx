import { FilterInput } from "../components/filterInput/FilterInput";
import {Provider} from "react-redux";
import {store} from "../app/store";

export default {
  title: "Products/FilterInput",
  component: FilterInput
}

export const FilterInputBasicExample = () => {
  return (
    <Provider store={store}>
      <FilterInput />
    </Provider>
    )
}