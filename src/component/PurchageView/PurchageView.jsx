// PurchageView 기본 틀
import "./PurchageView.css";
import { DeliveryInfo, ProductInfo } from "./component/index";

export function PurchageView(props) {
  return (
    <div className="pulchageView">
      <ProductInfo product={props.productInfo}></ProductInfo>
      <DeliveryInfo product={props.productInfo}></DeliveryInfo>
    </div>
  );
}
