import { PropsWithChildren } from "react";

export interface ProductFilterSectionProps {
  title: string;
}

const ProductFilterSection = (props: PropsWithChildren<ProductFilterSectionProps>) => {
  return (
    <div className="my-3 border-bottom">
      <h5>{props.title}</h5>
      <div className="my-2 ps-2">{props.children}</div>
    </div>
  )
}

export default ProductFilterSection;
