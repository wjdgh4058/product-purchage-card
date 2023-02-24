//상품 정보 컴포넌트

export function ProductInfo(props) {
  const product = props.product;
  return (
    <>
      <img
        className="productImg"
        src={product.productImage}
        alt={product.productAlt}
      />
      <h3 className="productname">
        <span>{product.productName}</span>
        <span>{product.productComposition}</span>
      </h3>
      <div className="productPrice">
        <span className="productPrice__discountRate" aria-label="할인율">
          {product.discountRate ? product.discountRate + "%" : null}
        </span>
        <div className="productPrice__price">
          <span className="productPrice__price__before" aria-label="원가">
            {product.fixedPrice ? product.fixedPrice + "원" : null}
          </span>
          <span className="productPrice__price__after" aria-label="판매가">
            {product.price + "원"}
          </span>
        </div>
      </div>
    </>
  );
}
