import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AnyAction } from "redux";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import { ProductSearch } from "../components/ProductSearch";
import { useProductFilter } from "../hooks/useProductFilter";
import { AppState } from "../redux/reducers/root";
import { loadCatalog } from "../redux/thunks/catalog";

const Catalog = function () {
  const dispatch = useDispatch();
  const state = useSelector((state: AppState) => state.catalogReducer);
  const products = useProductFilter();

  useEffect(() => {
    dispatch(loadCatalog() as unknown as AnyAction);
  }, []);

  return (
    <div>
      <div className="product-search"><ProductSearch searchTerm={state.searchTerm}/></div>
      <div className="product-filter-listing">
        <section className="product-filter-wrapper me-3 d-none d-md-block">
          <ProductFilter filter={state.filter}/>
        </section>
        <section className="product-listing-grid-wrapper">
          {state.isPending ?
            <div>
              Loading...
            </div> :
            <div id="product-listing-grid">
              {products.length > 0 ?
                products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))
                : <div>No Products</div>
              }
            </div>}
        </section>
      </div>
    </div>
  );
}

export default Catalog;
