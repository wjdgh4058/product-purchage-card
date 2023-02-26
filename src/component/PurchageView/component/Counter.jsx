export function Counter(props) {
  const minusBtn = () => {
    if (props.count > 0) {
      props.setCount(props.count - 1);
    }
  };

  const plusBtn = () => {
    if (props.count < props.product.maxAmount) {
      props.setCount(props.count + 1);
    }
  };

  return (
    <div className="counter__line">
      <div className="counter">
        <button
          className="counter__minusBtn"
          aria-label="상품 수량 감소"
          onClick={minusBtn}
        >
          -
        </button>
        <output className="counter__output" aria-label="선택한 상품 수량">
          {props.count}
        </output>
        <button
          className="counter__plusBtn"
          aria-label="상품 수량 증가"
          onClick={plusBtn}
        >
          +
        </button>
      </div>
    </div>
  );
}
