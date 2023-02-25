// PurchageView 기본 틀
import "./PurchageView.css";
import { Counter, DeliveryInfo, ProductInfo } from "./component/index";

export function PurchageView(props) {
  return (
    <div className="pulchageView">
      <ProductInfo product={props.productInfo}></ProductInfo>
      <DeliveryInfo product={props.productInfo}></DeliveryInfo>
      <Counter product={props.productInfo}></Counter>
    </div>
  );
}
