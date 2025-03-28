import { Link } from "react-router-dom";
import { Provider } from "../../context/contextProvider";


const Cart = () => {
  const uri = import.meta.env.VITE_IMAGE;

  const { state } = Provider();
  console.log(state.cart)

  const removeItem = (id) => {
    console.log("remove items")

  }
  const shippingCost = 70;
  // const total = 0 cart total
  const totalCalculation = state.cart.reduce((accum, tolval) => {
    return accum += tolval.product_id.price * tolval.quantity;
  }, 0)
  const subtotal = Math.floor(totalCalculation)


  return (
    <div>
      {state.cart.length !== 0 ?
        <div className="p-6 max-w-4xl mx-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Product</th>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {state.cart.map((item) => (
                <tr key={item.product_id._id} className="border-b border-gray-300">
                  <td className="p-2 flex items-center gap-2">
                    <button onClick={() => removeItem(item.product_id.id)} className="text-red-500">❌</button>
                    <img src={`${uri}/static${item.product_id.images[0]}`} alt={item.product_id.name} className="w-12 h-12" />
                    {item.product_id.name}
                  </td>
                  <td className="p-2">Rs.{item.product_id.price}</td>
                  <td className="p-2">

                    {item.quantity}

                  </td>
                  <td className="p-2">Rs.{Math.floor(item.product_id.price * item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button className="border px-4 py-2"><Link to="/">Return To Shop</Link></button>
            <button className="border px-4 py-2">Update Cart</button>
          </div>
          <div className="flex w-full gap-2">
            <div className="flex mt-4 gap-2 w-[60%] h-10">
              <input type="text" placeholder="Coupon Code" className="border p-2 flex-1" />
              <button className="bg-red-500 text-white px-4 py-2">Apply Coupon</button>
            </div>
            <div className="border p-4 mt-6 w-[40%] ml-auto">
              <h2 className="text-lg font-semibold">Cart Total</h2>
              <div className="flex justify-between mt-2">
                <span>Subtotal:</span>
                <span>Rs.{subtotal}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Shipping:</span>
                <span>Rs.{shippingCost}</span>
              </div>
              <div className="flex justify-between font-semibold mt-2 border-t pt-2">
                <span>Total:</span>
                <span>Rs.{subtotal + shippingCost}</span>
              </div>
              <button className="bg-red-500 text-white w-full py-2 mt-4">Proceed to checkout</button>
            </div>
          </div>
        </div> : <div className="flex flex-col h-98 w-full place-items-center justify-center" >
          <div className="text-4xl"> Your cart is empty </div>
          <div className="text-3xl bg-amber-600 p-4 rounded-2xl border-amber-200"> <Link to="/">Shop now</Link></div>
        </div>}
    </div>
  );
};

export default Cart;

