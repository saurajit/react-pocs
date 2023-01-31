import { useState } from "react";
import { useDispatch } from "react-redux";
import { catalogSearch } from "../redux/actions/catalog";

export const ProductSearch = ({ searchTerm = '' }: { searchTerm?: string }) => {
  const [newSearchTerm, setNewSearchTerm] = useState(searchTerm);
  const dispatch = useDispatch();

  function searchProducts() {
    dispatch(catalogSearch(newSearchTerm));
  }

  function resetSearch() {
    setNewSearchTerm('');
    dispatch(catalogSearch(''));
  }
  
  return (
    <div className="row my-3">
      <div className="col-sm-0 col-md-6"></div>
      <div className="row col-sm-12 ps-sm-4 pe-0 col-md-6">
        <div className="input-group p-0 col-8">
          <input type="text" className="form-control" placeholder="Search Product" value={newSearchTerm} onChange={e => setNewSearchTerm(e.target.value)}/>
          <button className="btn btn-primary" onClick={searchProducts} type="submit">
            <i className="bi bi-search"></i>
          </button>
          <button className="btn btn-outline-secondary" onClick={resetSearch} type="reset">
            <i className="bi bi-arrow-clockwise"></i>
          </button>
          <button className="btn btn-outline-secondary d-sm-block d-md-none" type="button">
            <i className="bi bi-filter"></i>
          </button>
        </div>
      </div>
    </div>
  );
}