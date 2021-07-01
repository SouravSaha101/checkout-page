import { useState } from "react";
import "./App.css";
import Address from "./components/AddressBar/Address";
import Navbar from "./components/Navbar/Navbar";
import Adbox from "./components/AdBox/Adbox";
import Sidebar from "./components/Sidebar/Sidebar";

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
            <div className="itemBlock-base-itemHeader">
              <div>My Shopping Bag (1 Item)</div>
              <div className="itemBlock-base-totalCartValue">
                Total:
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="10"
                  viewBox="0 0 8 10"
                  className="itemBlock-base-rupeeIcon"
                >
                  <path
                    fillRule="nonzero"
                    d="M5.841 9.44l-1.21.513L.365 5.968l.547-.875c.251-.005.529-.033.834-.086a4.91 4.91 0 0 0 .896-.242c.292-.11.556-.251.793-.424s.412-.383.526-.63H.564V2.578h3.431a1.779 1.779 0 0 0-.307-.51 1.99 1.99 0 0 0-.52-.426 2.789 2.789 0 0 0-.738-.29 3.955 3.955 0 0 0-.957-.107h-.91V0h6.31v1.244H4.522c.082.082.162.179.239.29a3.867 3.867 0 0 1 .39.712c.05.12.086.23.109.331h1.613v1.135H5.246a2.51 2.51 0 0 1-.434.906 3.293 3.293 0 0 1-.718.694 3.884 3.884 0 0 1-.916.478 5.378 5.378 0 0 1-1.028.267L5.84 9.44z"
                  ></path>
                </svg>
                2,399
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <h4>You May Also Like</h4>
      </div>
    </div>
  );
}

export default App;
