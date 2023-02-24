// PurchageView 기본 틀
import "./PurchageView.css";
import { ProductInfo } from "./component/index";

export function PurchageView(props) {
  return (
    <div className="pulchageView">
      <ProductInfo product={props.productInfo}></ProductInfo>

      {/* <ProductImg
        className={classes.productImg}
        img={props.productInfo.productImage}
        alt={props.productInfo.productAlt}
      ></ProductImg>
      <ProductName
        className={classes.productname}
        name={props.productInfo.productName}
      >
      </ProductName> */}
    </div>
  );
}
