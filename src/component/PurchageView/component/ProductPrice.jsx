// 총 상품 금액

import { useState } from "react";
import { ProductPriceTooltip } from "./ProductPriceTooltip";

export function ProductPrice(props) {
  const [tooltip, setTooltip] = useState(false);
  return (
    <div className="productPrice">
      <div className="productPrice__textInfo">
        <span className="productPrice__textInfo__totalPrice">총 상품 금액</span>
        <button
          className="productPrice__textInfo__helfBtn"
          onClick={() => {
            setTooltip(true);
          }}
        >
          ?
        </button>
        {tooltip && <ProductPriceTooltip setTooltip={setTooltip} />}
      </div>
      <div className="productPrice__info">
        <span className="productPrice__info__amount">
          총 수량 {props.count}개
        </span>
        <span className="productPrice__info__price">
          {props.product.price * props.count}원
        </span>
      </div>
    </div>
  );
}
