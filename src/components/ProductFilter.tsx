import { useDispatch } from 'react-redux';
import { catalogFilter } from '../redux/actions/catalog';
import { IProductFilter } from '../redux/reducers/catalog';
import './ProductFilter.css'
import ProductFilterCheckbox, { FilterOptionType } from './ProductFilterCheckbox';
import ProductFilterSection from './ProductFilterSection';

const ProductFilter = (props: {filter: IProductFilter}) => {
  const stateFilter = props.filter || {};
  const dispatch = useDispatch();

  const ColourFilters: FilterOptionType[] = [
    {
      label: 'Red',
      value: 'Red'
    },
    {
      label: 'Black',
      value: 'Black'
    },
    {
      label: 'Blue',
      value: 'Blue'
    },
    {
      label: 'Green',
      value: 'Green'
    }
  ];

  const GenderFilters: FilterOptionType[] = [
    {
      label: 'Men',
      value: 'Men'
    },
    {
      label: 'Women',
      value: 'Women'
    }
  ];

  const PriceFilters: FilterOptionType[] = [
    {
      label: '0 - ₹250',
      value: '1'
    },
    {
      label: '₹251 - ₹450',
      value: '3'
    },
    {
      label: '₹451 and above',
      value: '5'
    }
  ];

  const TypeFilters: FilterOptionType[] = [
    {
      label: 'Polo',
      value: 'Polo'
    },
    {
      label: 'Hoodie',
      value: 'Hoodie'
    },
    {
      label: 'Basic',
      value: 'Basic'
    }
  ];

  function updateFilter(key: keyof IProductFilter, list: string[]) {
    dispatch(catalogFilter({ ...stateFilter, ...{ [key]: list } }))
  }

  return (
    <div id="product-filter" className="mx-2 p-2">
      <ProductFilterSection title="Colour">
        <ProductFilterCheckbox
            items={ColourFilters}
            initialValues={stateFilter?.colour}
            filterKey='colour'
            onChange={updateFilter} />
      </ProductFilterSection>
      <ProductFilterSection title="Gender">
        <ProductFilterCheckbox
          items={GenderFilters}
          initialValues={stateFilter?.gender}
          filterKey='gender'
          onChange={updateFilter} />
      </ProductFilterSection>
      <ProductFilterSection title="Price">
        <ProductFilterCheckbox
          items={PriceFilters}
          initialValues={stateFilter?.price}
          filterKey='price'
          onChange={updateFilter} />
      </ProductFilterSection>
      <ProductFilterSection title="Type">
        <ProductFilterCheckbox
          items={TypeFilters}
          initialValues={stateFilter?.type}
          filterKey='type'
          onChange={updateFilter} />
      </ProductFilterSection>
    </div>
  )
};

export default ProductFilter;
