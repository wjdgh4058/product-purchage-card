// PurchageView 기본 틀
import "./PurchageView.css";
import {
  Counter,
  DeliveryInfo,
  ProductInfo,
  ProductPrice,
} from "./component/index";
import { useState } from "react";

export function PurchageView(props) {
  const [count, setCount] = useState(1);
  return (
    <div className="pulchageView">
      <ProductInfo product={props.productInfo}></ProductInfo>
      <DeliveryInfo product={props.productInfo}></DeliveryInfo>
      <Counter
        product={props.productInfo}
        count={count}
        setCount={setCount}
      ></Counter>
      <ProductPrice product={props.productInfo} count={count}></ProductPrice>
    </div>
  );
}
