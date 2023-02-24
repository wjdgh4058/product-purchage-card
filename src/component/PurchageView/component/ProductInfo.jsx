//상품 정보 컴포넌트

export function ProductInfo(props) {
  return (
    <>
      <img
        className="productImg"
        src={props.product.productImage}
        alt={props.product.productAlt}
      />
      <h3 className="productname">
        <span>{props.product.productName}</span>
        <span>{props.product.productComposition}</span>
      </h3>
      <div className="productPrice">
        <p className="productPrice__discountRate" aria-label="할인율">
          {props.product.discountRate ? props.product.discountRate + "%" : null}
        </p>
        <div className="productPrice__price">
          <p className="productPrice__price__before" aria-label="원가">
            {props.product.fixedPrice ? props.product.fixedPrice + "원" : null}
          </p>
          <p className="productPrice__price__after" aria-label="판매가">
            {props.product.price + "원"}
          </p>
        </div>
      </div>
    </>
  );
}
