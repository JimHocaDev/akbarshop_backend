const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    websiteLink: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Partner", schema);
