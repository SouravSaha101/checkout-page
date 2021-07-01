import "./App.css";
import Address from "./components/AddressBar/Address";
import Navbar from "./components/Navbar/Navbar";
import Adbox from "./components/AdBox/Adbox";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const note = {
    isEditing: true,
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
  return (
    <div className="">
      <br />
      <Navbar />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <Address note={note} />
            <Adbox text={ad1} />
            <Adbox text={ad2} />
            <Adbox text={ad3} />
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
