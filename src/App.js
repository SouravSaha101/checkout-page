import { useState } from "react";
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
const ad1 = {
  header: "Hurray! You will save Rs. 2,400 on this order",
  message:
    "Shop now with Early Access and get your favourites products at sale prices.",
  isOffer: false,
};
const ad2 = {
  header: "Available Offers",
  message:
    "10% Instant Discount on HDFC Bank Credit Cards up to Rs 1,000 on a min spend of Rs 3,000. TCA",
  isOffer: true,
  display: "Show More",
};
let price = 100;

const ad3 = {
  header: `Bag price dropped by ${price}`,
  isOffer: true,
  display: "View",
};

const itemList = [
  {
    id: 1,
    name: "Brown Brim",
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    price: 2500,
  },
];

const suggestionItem = [
  {
    id: 10,
    name: "Adidas NMD",
    imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
    price: 220,
  },
  {
    id: 11,
    name: "Adidas Yeezy",
    imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
    price: 280,
  },
  {
    id: 12,
    name: "Black Converse",
    imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
    price: 110,
  },
  {
    id: 13,
    name: "Nike White AirForce",
    imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
    price: 160,
  },
  {
    id: 14,
    name: "Nike Red High Tops",
    imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
    price: 160,
  },
  {
    id: 15,
    name: "Nike Brown High Tops",
    imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
    price: 160,
  },
  {
    id: 16,
    name: "Air Jordan Limited",
    imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
    price: 190,
  },
  {
    id: 17,
    name: "Timberlands",
    imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
    price: 200,
  },
];

function App() {
  const [userDetails, setUserDetails] = useState(details);

  const changeAddressHandler = (det) => {
    setUserDetails({ ...det });
  };
  return (
    <div className="">
      <br />
      <Navbar />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <Address
              note={userDetails}
              onAddressChange={changeAddressHandler}
            />
            <Adbox text={ad1} />
            <Adbox text={ad2} />
            <Adbox text={ad3} />
            <ShoppingTotal itemCount={itemList.length} totalPrice={2500} />
            <ItemCard />
          </div>
          <div className="col-lg-4">
            <Sidebar data={suggestionItem} />
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <h4>You May Also Like</h4>
        <div className="row">
          <SuggestionCard data={suggestionItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
