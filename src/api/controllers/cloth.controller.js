const Clothes = require("../../models/Cloth");

exports.clothPost = async (req, res) => {
  try {
    const { name, categoryId, status, price, information, tags } = req.body;
    const { imageName: image } = req;

    await Clothes.create({
      name,
      categoryId,
      status,
      price,
      information,
      tags,
      image,
    });

    res.status(201).json({ message: "Cloth created Successfully" });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};

exports.clothGet = async (req, res) => {
  try {
    const clothes = await Clothes.find().populate("categoryId");
    res.status(200).json({ data: clothes });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};

exports.clothGetOne = async (req, res) => {
  try {
    const { id } = req.params;
    const cloth = await Clothes.findById(id).populate("categoryId");

    res.status(200).json({ data: cloth });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};

exports.clothEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, categoryId, status, price, information, tags } = req.body;
    const { imageName: image } = req;

    await Clothes.findByIdAndUpdate(id, {
      $set: {
        name,
        categoryId,
        status,
        price,
        information,
        tags,
        image,
      },
    });
    res.status(200).json({ message: "Updated cloth" });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};

exports.clothDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await Clothes.findByIdAndDelete(id);

    res.status(200).json({ message: "Deleted cloth" });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};
