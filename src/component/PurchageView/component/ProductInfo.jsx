export function ProductInfo(props) {
  console.log(props.product.productImage);
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
    </>
  );
}
