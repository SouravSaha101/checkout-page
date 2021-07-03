import { useState, useEffect } from "react";
import "./App.css";
import Address from "./components/AddressBar/Address";
import Navbar from "./components/Navbar/Navbar";
import Adbox from "./components/AdBox/Adbox";
import Sidebar from "./components/Sidebar/Sidebar";
import ShoppingTotal from "./components/ShoppingTotal/ShoppingTotal";
import ItemCard from "./components/ItemCard/ItemCard";
import SuggestionCard from "./components/SuggestionCard/SuggestionCard";
import suggestionItem from "./SuggestionData";
import itemList from "./Cartdata";

const details = {
  isEditing: false,
  name: "Sourav Saha",
  address: "7/55 Gora Pada Sarkar Lane, Kolkata- 67",
};

const ad2 = {
  header: "Available Offers",
  message:
    "10% Instant Discount on HDFC Bank Credit Cards up to Rs 1,000 on a min spend of Rs 3,000. TCA",
  isOffer: true,
  display: "Show More",
};
let price = Math.random().toFixed(2) * 500;
const ad3 = {
  header: `Bag price dropped by ${price}`,
  isOffer: true,
  display: "View",
};

const textWhislist = {
  header: "Add More From Wishlist",
  isOffer: true,
  display: "Click Here",
};
const initialPrice = {
  itemCount: 0,
  totalMRP: 0,
  discount: 0,
  giftWrap: 0,
  fee: 0,
  amount: 0,
};
function App() {
  const [userDetails, setUserDetails] = useState(details);
  const [cartItem, setCartItem] = useState(itemList);
  const [price, setPrice] = useState(initialPrice);
  const [suggestionItemList, setSuggestionItemList] = useState(suggestionItem);

  const ad1 = {
    header: `Hurray! You will save Rs. ${price.discount.toLocaleString()} on this order`,
    message:
      "Shop now with Early Access and get your favourites products at sale prices.",
    isOffer: false,
  };

  useEffect(
    () => {
      let totalMRP = 0;
      let discount = 0;
      let itemCount = cartItem.length;
      cartItem.forEach((el) => {
        totalMRP += +el.qty * el.price;
        discount += el.orgPrice - el.price;
      });
      let fee = totalMRP < 10000 ? 99 : 0;
      let amount = totalMRP + price.giftWrap + fee;
      setPrice((p) => ({ ...p, amount, totalMRP, discount, itemCount, fee }));
    },
    // eslint-disable-next-line
    [cartItem]
  );

  const giftHandler = (data) => {
    let amount = price.amount - price.giftWrap + data;
    setPrice((p) => ({ ...p, giftWrap: data, amount }));
  };

  const changeAddressHandler = (det) => {
    setUserDetails({ ...det });
  };
  const cartChangeHadler = (data) => {
    setCartItem([...data]);
  };
  const removeCartHandler = (data) => {
    let updatadCart = [];
    cartItem.forEach((el) => {
      if (el.id !== +data) {
        updatadCart.push(el);
      }
    });
    setCartItem([...updatadCart]);
  };
  const suggestionItemAdded = (data) => {
    cartItem.push(data);
    setCartItem([...cartItem]);

    const filteredSuggestionList = suggestionItemList.filter(
      (item) => item.id !== data.id
    );
    setSuggestionItemList([...filteredSuggestionList]);
  };
  return (
    <div className="">
      <br />
      <Navbar />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 sideline">
            <Address
              note={userDetails}
              onAddressChange={changeAddressHandler}
            />
            <Adbox text={ad1} />
            <Adbox text={ad2} />
            <Adbox text={ad3} />
            <ShoppingTotal
              itemCount={cartItem.length}
              totalPrice={price.totalMRP}
            />
            <ItemCard
              data={cartItem}
              onCartChange={cartChangeHadler}
              removeCart={removeCartHandler}
            />
            <Adbox text={textWhislist} />
          </div>
          <div className="col-lg-4">
            <Sidebar price={price} giftFee={giftHandler} />
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <h4>You May Also Like</h4>
        <div className="row">
          <SuggestionCard
            data={suggestionItemList}
            onAddtoBag={suggestionItemAdded}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
