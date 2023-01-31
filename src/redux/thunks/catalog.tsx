import { Dispatch } from "redux";
import { catalogFetching, catalogFetchError, catalogFetchSucces } from "../actions/catalog";

export const loadCatalog = () => (
  function (dispatch: Dispatch) {
    dispatch(catalogFetching(true));
    fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
    .then(response => response.json())
    .then(response => {
      dispatch(catalogFetchSucces(response))
    })
    .catch(error => {
      dispatch(catalogFetchError(error))
    })
    .finally(() => dispatch(catalogFetching(false)))
  }
);
