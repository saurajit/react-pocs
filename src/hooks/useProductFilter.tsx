import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TShirt } from '../models/tshirt';
import { AppState } from '../redux/reducers/root';

export function useProductFilter() {
  const [products, setProducts] = useState<TShirt[]>([]);
  const state = useSelector((state: AppState) => state.catalogReducer);

  function isWithinPriceRance(price: number): boolean {
    const priceRangeSum = state.filter.price.reduce((tot, curr) => {
      return tot + parseInt(curr, 10);
    }, 0)

    switch (priceRangeSum) {
      case 1:
        return price > 0 && price <= 250;
      case 3:
        return price > 250 && price <= 450;
      case 4:
        return price > 0 && price <= 250 || price > 250 && price <= 450;
      case 5:
        return price > 450;
      case 6:
        return price > 0 && price <= 250 || price > 450;
      case 8:
        return price > 250 && price <= 450 || price > 450;
      default:
        return true;
    }
  }

  function getFilteredProducts(): TShirt[] {
    return state.products
      .filter(p => {
        return !state.filter.colour || state.filter.colour?.length == 0
          || state.filter.colour?.indexOf(p.color) >= 0
      })
      .filter(p => {
        return !state.filter.gender || state.filter.gender?.length == 0
          || state.filter.gender?.indexOf(p.gender) >= 0
      })
      .filter(p => {
        return !state.filter.price || state.filter.price?.length == 0
          || isWithinPriceRance(p.price)
      })
      .filter(p => {
        return !state.filter.type || state.filter.type?.length == 0
          || state.filter.type?.indexOf(p.type) >= 0
      })
  }

  function getProducts(): TShirt[] {
    return getFilteredProducts().filter(p => {
      const term = state.searchTerm.toLocaleLowerCase() ? state.searchTerm : '';
      return p.name.toLocaleLowerCase().includes(term)
        || p.color?.toLocaleLowerCase().includes(term)
        || p.type?.toLocaleLowerCase().includes(term)
        || !state.searchApplied
    });
  }

  useEffect(() => {
    setProducts(getProducts());
  }, [state.searchTerm, state.filter, state.isPending]);

  return products;
}