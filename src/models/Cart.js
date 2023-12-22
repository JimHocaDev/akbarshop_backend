const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Cloth",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Cart", schema);
