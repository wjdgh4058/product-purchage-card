// PurchageView 기본 틀
import classes from "./PurchageView.module.css";
import { ProductImg } from "./index";

export function PurchageView(props) {
  return (
    <div className={classes.pulchageView}>
      <ProductImg
        img={props.productInfo.productImage}
        alt={props.productInfo.productAlt}
      ></ProductImg>
    </div>
  );
}
