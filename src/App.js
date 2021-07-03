import { useState, useEffect } from "react";
import "./App.css";
import Address from "./components/AddressBar/Address";
import Navbar from "./components/Navbar/Navbar";
import Adbox from "./components/AdBox/Adbox";
import Sidebar from "./components/Sidebar/Sidebar";
import ShoppingTotal from "./components/ShoppingTotal/ShoppingTotal";
import ItemCard from "./components/ItemCard/ItemCard";
import SuggestionCard from "./components/SuggestionCard/SuggestionCard";

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

const itemList = [
  {
    id: 1,
    name: "Brown Brim",
    brand: "Nike",
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    price: 2500,
    soldBy: "Seller Best",
    discount: 50,
    deliveryDate: "5 Jul 2021",
    size: "M",
    qty: 1,
    orgPrice: 5000,
  },
  {
    id: 2,
    name: "Blue Jean Jacket",
    brand: "Pepe",
    imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
    price: 6300,
    soldBy: "New India",
    discount: 30,
    deliveryDate: "9 Jul 2021",
    size: "L",
    qty: 2,
    orgPrice: 9000,
  },
];

const suggestionItem = [
  {
    id: 10,
    name: "Adidas NMD",
    imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
    brand: "Nike",
    price: 2500,
    soldBy: "Seller Best",
    discount: 50,
    deliveryDate: "5 Jul 2021",
    size: "M",
    qty: 1,
    orgPrice: 5000,
  },
  {
    id: 11,
    name: "Adidas Yeezy",
    imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
    brand: "Nike",
    price: 2500,
    soldBy: "Seller Best",
    discount: 50,
    deliveryDate: "5 Jul 2021",
    size: "M",
    qty: 1,
    orgPrice: 5000,
  },
  {
    id: 12,
    name: "Black Converse",
    imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
    brand: "Nike",
    price: 2500,
    soldBy: "Seller Best",
    discount: 50,
    deliveryDate: "5 Jul 2021",
    size: "M",
    qty: 1,
    orgPrice: 5000,
  },
  {
    id: 13,
    name: "Nike White AirForce",
    imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
    brand: "Nike",
    price: 2500,
    soldBy: "Seller Best",
    discount: 50,
    deliveryDate: "5 Jul 2021",
    size: "M",
    qty: 1,
    orgPrice: 5000,
  },
  {
    id: 14,
    name: "Nike Red High Tops",
    imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
    brand: "Nike",
    price: 2500,
    soldBy: "Seller Best",
    discount: 50,
    deliveryDate: "5 Jul 2021",
    size: "M",
    qty: 1,
    orgPrice: 5000,
  },
  {
    id: 15,
    name: "Nike Brown High Tops",
    imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
    brand: "Nike",
    price: 2500,
    soldBy: "Seller Best",
    discount: 50,
    deliveryDate: "5 Jul 2021",
    size: "M",
    qty: 1,
    orgPrice: 5000,
  },
  {
    id: 16,
    name: "Air Jordan Limited",
    imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
    brand: "Nike",
    price: 2500,
    soldBy: "Seller Best",
    discount: 50,
    deliveryDate: "5 Jul 2021",
    size: "M",
    qty: 1,
    orgPrice: 5000,
  },
  {
    id: 17,
    name: "Timberlands",
    imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
    brand: "Nike",
    price: 2500,
    soldBy: "Seller Best",
    discount: 50,
    deliveryDate: "5 Jul 2021",
    size: "M",
    qty: 1,
    orgPrice: 5000,
  },
];
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
