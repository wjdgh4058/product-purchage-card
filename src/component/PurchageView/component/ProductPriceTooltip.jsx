export function ProductPriceTooltip(props) {
  const close = () => {
    props.setTooltip(false);
  };
  return (
    <div className="productPriceTooltip">
      <p>
        총 상품금액에 <b>배송비는 포함되어 있지 않습니다.</b>
      </p>
      <p>결제시 배송비가 추가될 수 있습니다.</p>
      <button aria-label="총 상품금액 안내 닫기" onClick={close}>
        <img src="image/closeBtn.svg" alt="배너 닫기 버튼" />
      </button>
    </div>
  );
}
