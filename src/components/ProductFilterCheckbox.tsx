import { ChangeEvent } from "react";
import { IProductFilter } from "../redux/reducers/catalog";

export type FilterOptionType<T = string> = {
  label: string;
  value: T,
}

const ProductFilterCheckbox = (props: { items: FilterOptionType[],
  initialValues: string[],
  filterKey: keyof IProductFilter,
  onChange: (key: keyof IProductFilter, list: string[]) => void }) => {

  const filterValues = new Set<string>(props.initialValues);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      filterValues.add(e.target.value);
    } else {
      filterValues.delete(e.target.value);
    }
    props.onChange(props.filterKey, Array.from(filterValues));
  }

  return (
    <>
      {props.items.map(item => (
        <div key={item.value} className="form-check">
          <input className="form-check-input" type="checkbox" value={item.value} id={props.filterKey + '-filter-' + item.value}
            checked={filterValues.has(item.value)} onChange={handleChange} />
          <label className="form-check-label" htmlFor={props.filterKey + '-filter-' + item.value}>
            {item.label}
          </label>
        </div>
      ))}
    </>
  )
}

export default ProductFilterCheckbox;
