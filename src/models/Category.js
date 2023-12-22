const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    clothes: [
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

module.exports = model("Category", schema);
