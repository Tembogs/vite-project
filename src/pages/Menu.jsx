import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import '../App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Menu() {
  const [quantities, setQuantities] = useState({});
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [addedItems, setAddedItems] = useState({});
  const [showDelivery, setShowDelivery] = useState(false)
  const navigate = useNavigate();
  const [code, setCode] = useState(null);
 

  
  useEffect(() => {
    const generated = Math.floor(1 + Math.random() * 900000);
    setCode(generated);
  }, []);

 const handleHome = () => {
  navigate('/home');

 }

//  mapping
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
  });

  const ilorinPosition = [8.4966, 4.5421]; // Example: Coordinates for Ilorin, Kwara
  // Mapping
  
 
//  DELIVERY
  const estimatedMinutes = 20;
  const now = new Date();
  const arrivalTime = new Date(now.getTime() + estimatedMinutes * 60000);
  const leavingTime = new Date(now.getTime());


  const etaString = ` ${leavingTime.toLocaleString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  })} - ${arrivalTime.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  })}`;
  // Example order data
  const order = {
    restaurant: "Pizza Palace",
    status: "On the way",
    estimatedTime: `${estimatedMinutes} mins`,
    estimatedWindow:  etaString,
    driver: {
      name: "Alex Johnson",
      phone: "081-3453-2869",
      vehicle: "Toyota Corolla",
    },
    trackingSteps: [
      { label: "Order Placed", done: true },
      { label: "Preparing Food", done: true },
      { label: "Picked Up", done: true},
      { label: "On the Way", done: false },
      { label: "Delivered", done: false },
    ],
  };

  const pickedUpStep =order.trackingSteps.find(step => step.label === "Picked Up");
  const isPickedUp = pickedUpStep?.done;

    // Calculate progress
  const progress =
    (order.trackingSteps.filter((s) => s.done).length /
      order.trackingSteps.length) *
    100;
  // DELIVERY
 

  // Show cart button only if there are items in cart
  const buttonOpen = cartItems.length > 0;
  const handleDeliveryOrder = () => {
    localStorage.removeItem('cartItems');
    toast.success("Order placed successfully! 🚚");
    setShowDelivery(true)

    


  }
 // Show cart button only if there are items in cart  


 
//  OrderList
  const food = [
    {
      group: "Nigerian Dishes",
      items: [
        { name: "Pounded Yam", price: 230, max: 15, id: 1, category: "Nigerian Dishes", img: "https://thunderbayafricanrestaurant.ca/wp-content/uploads/2023/08/POUNDED-YAM.jpg" },
        { name: "Rice", price: 500, max: 10, id: 2, category: "Nigerian Dishes", img: "https://th.bing.com/th/id/OIP.b-TMlOe9wu2f7l58CfHjVgHaEK?w=1600&h=899&rs=1&pid=ImgDetMain&cb=idpwebpc2" },
        { name: "Amala", price: 300, max: 12, id: 3, category: "Nigerian Dishes", img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/381231933/original/c0bf3bf0d90b234ed45d4fd001b3c54478ccdabf/do-amala-and-eba-for-you.jpg" },
        { name: "Eba", price: 250, max: 10, id: 4, category: "Nigerian Dishes", img: "https://img-global.cpcdn.com/recipes/b5a90de94dbd81b4/680x482cq70/oya-soup-with-cocoyam-flour-recipe-main-photo.jpg" },
        { name: "Jollof Rice", price: 600, max: 8, id: 5, category: "Nigerian Dishes", img: "https://flawlessfood.co.uk/wp-content/uploads/2023/01/Jollof-Rice-02.jpg" },
        { name: "Fried Plantain", price: 200, max: 20, id: 6, category: "Nigerian Dishes", img: "https://simshomekitchen.com/wp-content/uploads/2021/09/sweet-fried-plantains.jpg" },
        { name: "Efo Riro", price: 450, max: 6, id: 7, category: "Nigerian Dishes", img: "https://th.bing.com/th/id/OIP.DgAUqqQrBM43QppBIR_cmAHaHY?rs=1&pid=ImgDetMain&cb=idpwebpc2" },
        { name: "Egusi Soup", price: 550, max: 7, id: 8, category: "Nigerian Dishes", img: "https://lowcarbafrica.com/wp-content/uploads/2018/06/Egusi-Soup-IG-1.jpg" },
        { name: "Ofada Rice", price: 650, max: 5, id: 9, category: "Nigerian Dishes", img: "https://th.bing.com/th/id/OIP.BM59ThahYmV--AyFl6mV-gAAAA?rs=1&pid=ImgDetMain&cb=idpwebpc2" },
        { name: "Moi Moi", price: 300, max: 10, id: 10, category: "Nigerian Dishes", img: "https://th.bing.com/th/id/R.d857ca0be5b70d9bfcb4c6d840b966e9?rik=J7tgu6gwaNbVdA&riu=http%3a%2f%2fsisijemimah.com%2fwp-content%2fuploads%2f2015%2f12%2fMoimoi-1024x683.jpg&ehk=vhQTZoW%2fRSK1h8wc3MJ7P36QvDzswwAFNoTZChVLHHs%3d&risl=&pid=ImgRaw&r=0" }
      ]
    },
    {
      group: "Drinks",
      items: [
        { name: "Coca Cola", price: 150, max: 30, id: 11, category: "Drinks", img: "https://th.bing.com/th/id/OIP.k7NwIoYBmgV5izz4NUjffQHaJ4?rs=1&pid=ImgDetMain&cb=idpwebpc2" },
        { name: "Fanta", price: 150, max: 30, id: 12, category: "Drinks", img: "https://shop.phoenixbev.mu/wp-content/uploads/3030-1-1024x1024.jpg" },
        { name: "Sprite", price: 150, max: 30, id: 13, category: "Drinks", img: "https://th.bing.com/th/id/OIP.nW5h97cC2qQZ3H18n8LAVQHaHa?rs=1&pid=ImgDetMain&cb=idpwebpc2" },
        { name: "Zobo", price: 100, max: 20, id: 14, category: "Drinks", img: "https://dailytrust.com/wp-content/uploads/2022/11/zobo.jpeg" },
        { name: "Chapman", price: 300, max: 10, id: 15, category: "Drinks", img: "https://i.pinimg.com/originals/c2/bb/fa/c2bbfabe771b068bbb7a63b444d75a0a.jpg" }
      ]
    },
    {
      group: "Snacks",
      items: [
        { name: "Meat Pie", price: 250, max: 15, id: 16, category: "Snacks", img: "https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/nigerian-meat-pie.jpg" },
        { name: "Puff Puff", price: 100, max: 25, id: 17, category: "Snacks", img: "https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/puff-puff.jpg" },
        { name: "Chin Chin", price: 120, max: 20, id: 18, category: "Snacks", img: "https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/chin-chin.jpg" },
        { name: "Sausage Roll", price: 200, max: 15, id: 19, category: "Snacks", img: "https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/sausage-roll.jpg" }
      ]
    },
    {
      group: "Soups",
      items: [
        { name: "Ogbono Soup", price: 500, max: 8, id: 20, category: "Soups", img: "https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/ogbono-soup.jpg" },
        { name: "Afang Soup", price: 600, max: 7, id: 21, category: "Soups", img: "https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/afang-soup.jpg" },
        { name: "Oha Soup", price: 550, max: 6, id: 22, category: "Soups", img: "https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/oha-soup.jpg" }
      ]
    },
    {
      group: "Continental",
      items: [
        { name: "Spaghetti Bolognese", price: 900, max: 5, id: 23, category: "Continental", img: "https://images.unsplash.com/photo-1504674900247-ec6b0b1b8c7a?auto=format&fit=crop&w=400&q=80" }
      ]
    }
  ];
  //  OrderList
  
  
  //  to show list of food items selected 
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  //  to show list of food items selected

  
//  to be able to input quantity of food needed
  const handleQuantityChange = (e, itemId) => {
    let value = e.target.value;
    // Allow empty string for typing
    if (value === "") {
      setQuantities((prev) => ({ ...prev, [itemId]: "" }));
      return;
    }
    // prevent users from inputing letters
    value = parseInt(value, 10);
    if (isNaN(value)) value = "";
    setQuantities((prev) => ({ ...prev, [itemId]: value }));
  };

  const handleQuantityBlur = (itemId, max) => {
    let value = quantities[itemId];
    if (value === "" || isNaN(value) || value < 1) value = 1;
    if (value > max) value = max;
    setQuantities((prev) => ({ ...prev, [itemId]: value }));
  };

  const addToCart = (item) => {
    let quantity = quantities[item.id];
    if (quantity === "" || isNaN(quantity) || quantity < 1) quantity = 1;
    if (quantity > item.max) quantity = item.max;
   const updatedQuantities = { ...quantities, [item.id]: 1 };
    const updatedCartItems = (() => {
    const exists = cartItems.find((i) => i.id === item.id);
    if (exists) {
      return cartItems.map((i) =>
        i.id === item.id ? { ...i, quantity } : i
      );
    } else {
      return [...cartItems, { ...item, quantity }];
    }
  })();
    setQuantities(updatedQuantities);
    setCartItems(updatedCartItems);
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    localStorage.setItem('quantities', JSON.stringify(updatedQuantities));
    

  };
  useEffect(() => {
  const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
  const savedQuantities = JSON.parse(localStorage.getItem('quantities')) || {};

    setCartItems(savedCart);
    setQuantities(savedQuantities);
  }, []);

  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem('addedItems')) || {};
  setAddedItems(saved);
}, []);

  const removeFromCart = (itemId) => {
  const removeCartItems = cartItems.filter((item) => item.id !== itemId);
  const removeAddedItems = { ...addedItems, [itemId]: false };

  setCartItems(removeCartItems);
  setAddedItems(removeAddedItems);

  // Update localStorage accordingly
  localStorage.setItem('cartItems', JSON.stringify(removeCartItems));
  localStorage.setItem('addedItems', JSON.stringify(removeAddedItems));
};

  const allImages = food.flatMap(group => group.items.map(item => item.img));
  

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 py-10 px-4 ">
      {/* /* Cart Button & Cart Drawer */ }
        <div className="fixed top-8 right-8 z-50 sm:top-4 sm:right-4 xs:top-2 xs:right-2 max-w-full w-auto">
          {(buttonOpen || open) && (
            <button
              className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full shadow-lg hover:scale-105 transition-transform sm:w-12 sm:h-12 xs:w-10 xs:h-10"
              onClick={handleOpen}
              aria-label="Open cart"
            >
              <img
                src="https://png.pngtree.com/png-clipart/20230504/original/pngtree-free-vector-shopping-cart-realistic-on-white-background-png-image_9139715.png"
                alt="Cart"
                className="w-8 h-8 sm:w-6 sm:h-6 xs:w-5 xs:h-5"
              />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 left-0 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </button>
          )}

          {open && (
            <div className="w-90 max-h-[70vh] overflow-y-auto hide-scrollbar mt-4 absolute right-0 bg-white rounded-2xl shadow-2xl p-6 space-y-4 border-gray-200 animate-slide-in sm:w-64 xs:w-[90vw] xs:p-3">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6h10v7" />
                </svg>
                Your Order
              </h2>
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No items in cart</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-700">
                      <span className="font-semibold">{item.quantity}</span> {item.name}
                      <span className="ml-2 text-gray-500">= ₦{item.quantity * item.price}</span>
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
              {cartItems.length > 0 && (
                <div className="pt-4 flex flex-col gap-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>
                      ₦
                      {cartItems.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      )}
                    </span>
                  </div>
                  <button onClick={handleDeliveryOrder} className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold py-2 rounded-lg mt-2 hover:from-blue-700 hover:to-teal-800 transition">
                        Checkout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

         <ToastContainer
          position="top-right"
          autoClose={3000}
        />

        {/* Food Menu */}
      <div className="max-w-2xl mx-auto mt-4 space-y-8">
        {food.map((groups) => (
          <div key={groups.group} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{groups.group}</h2>
            <div className="grid grid-cols-2 gap-4">
              {groups.items.map((item) => {
                const quantity = quantities[item.id] ?? 1;
                return (
                  <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-200 hover:shadow-2xl transition-all duration-200 group flex flex-col items-center"
                  >
                  {/* Display the item's image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full mb-3 sm:mb-4 pt-1 object-cover"
                  />
                  <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-900 group-hover:text-blue-700 transition text-center">{item.name}</h3>
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-2 w-full">
                    <label className="text-gray-600 font-medium text-sm sm:text-base">Quantity</label>
                    <input
                    type="number"
                    placeholder="Quantity"
                    value={quantities[item.id] === undefined ? 1 : quantities[item.id]}
                    onChange={(e) => handleQuantityChange(e, item.id)}
                    onBlur={() => handleQuantityBlur(item.id, item.max)}
                    min={1}
                    max={item.max}
                    className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2 w-20 sm:w-28 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-xs sm:placeholder:text-sm text-gray-800 bg-gray-50 shadow-inner [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </div>
                  {quantity < 1 || quantity > item.max ? (
                    <span className="text-xs font-semibold text-red-500 mt-1">
                    Order should be between 1 and {item.max}
                    </span>
                  ) : null}
                  <p className="mt-1 text-gray-700 flex items-center gap-2 text-sm sm:text-base">
                    <span className="font-medium">Price:</span> {quantity < 1 || quantity > item.max ? (<span className="text-lg font-bold text-blue-700">₦{item.price}</span>): (<span className="text-lg font-bold text-blue-700">₦{quantity * item.price}</span>)}
                  </p>
                  <button
                    onClick={() => addToCart(item)}
                    className={`w-full bg-gradient-to-r from-blue-600 to-teal-700 text-white font-bold py-2 px-4 sm:px-6 rounded-lg mt-3 sm:mt-4 shadow-md transition-all duration-150 ${
                    addedItems[item.id]
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:from-blue-700 hover:to-teal-800 scale-105"
                    }`}
                    disabled={addedItems[item.id] || quantity < 1 || quantity > item.max}
                  >
                    {addedItems[item.id] ? "Added to Cart" : "Add to Cart"}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
     

     
    
    
    {showDelivery &&  (
      <div className=" inset-0 z-50 max-h-[200vh] bg-black fixed item-center flex justify-center bg-opacity-50 ">
        <div className="max-w-md w-full max-h-[90vh] overflow-y-auto hide-scrollbar bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl shadow-md p-6 mt-2">
           <h2 className="mb-2 text-2xl font-semibold">Active Delivery</h2>
          <div className="mb-2">
            <strong>Restaurant:</strong> {order.restaurant}
          </div>
          <div className="mb-2">
            <strong>Delivery Address:</strong> {order.address}
          </div>
          <div className="mb-4">
            <strong>Order Items:</strong>
            <ul className="list-disc list-inside">
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.quantity} × {item.name}
                </li>
              ))}
            </ul>
            <div className="flex space-x-10 items-center">
                    <span className="font-bold text-lg">Total:</span>
                    <span>
                      ₦
                      {cartItems.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      )}
                    </span>
                  </div>
          </div>
          <div className="mb-2">
            <strong>Status:</strong> {order.status}{" "}
            <span className="text-green-600">({order.estimatedTime})</span>
          </div>
          <div className="mb-2">
            <strong>Estimated Delivery Window:</strong>{" "}
            <span className="text-red-800">{order.estimatedWindow}</span>
          </div>
          <div className="mb-4">
            <strong>Driver:</strong> {order.driver.name} ({order.driver.vehicle})
            <br />
            <strong>Contact:</strong> {order.driver.phone}
          </div>
          <div className="mb-4">
           <div><span className="font-bold">Your Delivery code: </span>{code}</div> 
          </div>
          <div className="mb-4">
            <strong>N.b:</strong>
            <br />
            <p >kindly call out your delivery code for the driver to confirm your order</p>
          </div>
          
          <div className="mb-4">
            <strong>Tracking:</strong>
            <ol className="pl-5 list-decimal">
              {order.trackingSteps.map((step, i) => (
                <li
                  key={i}
                  className={
                    step.done
                      ? "text-green-600 font-bold"
                      : "text-stone-400 font-normal"
                  }
                >
                  {step.label}
                </li>
              ))}
            </ol>
            
            
            {/* Progress bar */}
            <div className="w-full bg-red-200 rounded-full h-2 mt-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          
          
          {/* Map placeholder */}
          <div className="mb-4">
            <strong>Map:</strong>
              <MapContainer 
              center={ilorinPosition} 
              zoom={15} 
              scrollWheelZoom={false}
               attributionControl={false}
              className="w-full h-50 bg-gray-300 rounded-md flex items-center justify-center text-gray-600">
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={ilorinPosition}>
                  <Popup>
                    You're here! 📍<br /> Ilorin, Kwara State
                  </Popup>
                </Marker>
              </MapContainer>
          </div>
          
          
          {/* Leave a note */}
          <div className="mb-4">
            <label className="block font-semibold mb-1" htmlFor="note">
              Leave a note for your driver:
            </label>
            <textarea
              id="note"
              className="w-full border rounded-md p-2"
              placeholder="E.g. Please call when you arrive"
              rows={2}
            />
          </div>
          <div className="flex gap-2">
            <button disabled= {!isPickedUp} className={` text-white font-bold rounded-md px-5 py-2  transition-colors ${isPickedUp ?'bg-green-600 hover:bg-green-700 cursor-pointer' :' cursor-not-allowed opacity-60 bg-gray-400' }`}>
              Contact Driver
            </button>

            <button onClick={handleHome}
              className={` text-white font-bold rounded-md px-5 py-2 cursor-not-allowed opacity-60 ${isPickedUp ?'bg-gray-400 cursor-not-allowed' :'bg-[#E10602] cursor-pointer hover:bg-red-700 '}`}
              disabled ={isPickedUp}
            >
              Cancel Order
            </button>
          </div>
        </div>
        <a href="/menu" className="text-4xl text-red-600 -mt-2 -mx-1 ">&times;</a>
      </div>
    )}
    

     

    </>
  );
}
