import "./App.css";
import { PurchageView } from "../component/PurchageView/PurchageView";
import classes from "../component/PurchageView/PurchageView.module.css";

const productInfo = {
  productImage: "../../assets/productImage.svg",
  productName: "래피젠 코로나 자가 검사 키트 2개입X1박스",
  discountRate: 88,
  fixedPrice: 56760,
  price: 6370,
  DeliveryFee: 3000,
};

function App() {
  return (
    <div className="App">
      <PurchageView
        className={classes.pulchageView}
        productInfo={productInfo}
      ></PurchageView>
    </div>
  );
}

export default App;
