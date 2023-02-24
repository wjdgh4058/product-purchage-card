// 상품 이미지

export function ProductImg(props) {
  console.log(props.img);
  return <img src={props.img} alt={props.alt} />;
}
