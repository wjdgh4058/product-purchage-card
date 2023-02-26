// 택배 정보 컴포넌트

export function DeliveryInfo(props) {
  const poduct = props.product;
  return (
    <div className="deliveryInfo">
      <div className="deliveryInfo__delivery">
        <span className="deliveryInfo__delivery__shipping">택배배송</span>
        <div className="deliveryInfo__delivery__priceInfo">
          <span className="deliveryInfo__delivery__priceInfo__price">
            {poduct.deliveryFee
              ? poduct.deliveryFee
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"
              : null}
          </span>
          <span className="deliveryInfo__delivery__priceInfo__payment">
            {poduct.deliveryMethod ? "(" + poduct.deliveryMethod + ")" : null}
          </span>
        </div>
      </div>
      <p className="deliveryInfo__method">
        {poduct.deliveryCount ? poduct.deliveryCount + "개마다 부과" : null}
      </p>
    </div>
  );
}
