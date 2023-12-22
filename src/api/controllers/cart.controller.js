const Users = require("../../models/User");
const Cart = require("../../models/Cart");

exports.cartPost = async (req, res) => {
  try {
    const { product_id: products } = req.body;
    const id = req.user?.id;

    const cart = await Cart.create({
      products,
    });
    await Users.findByIdAndUpdate(id, {
      $set: {
        cartId: cart.id,
      },
    });
    res.status(201).json({ message: "Cart created Successfully" });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};

exports.cartGet = async (req, res) => {
  try {
    const carts = await Cart.find().populate("products");
    res.status(200).json({ data: carts });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};

exports.cartDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);

    res.status(200).json({ message: "Deleted cart" });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};
