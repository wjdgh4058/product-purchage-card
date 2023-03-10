import "./App.css";
import { PurchageView } from "../component/PurchageView/PurchageView";

const productInfo = {
  productImage: "image/productImage.svg",
  productAlt: "래피젠 코로나 자가 검사 키트 사진",
  productName: "래피젠 코로나 자가 검사 키트",
  productComposition: "2개입X1박스",
  discountRate: 88,
  fixedPrice: 56760,
  price: 6370,
  deliveryFee: 3000,
  deliveryCount: 10,
  deliveryMethod: "주문시 결제",
  maxAmount: 10,
};

function App() {
  return (
    <div className="App">
      <PurchageView productInfo={productInfo}></PurchageView>
    </div>
  );
}

export default App;
