const Category = require("../../models/Category");

exports.categoryPost = async (req, res) => {
  try {
    const { name } = req.body;

    await Category.create({
      name,
    });

    res.status(201).json({ message: "Category created Successfully" });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};

exports.categoryGet = async (req, res) => {
  try {
    const categories = await Category.find().populate("clothes");
    res.status(200).json({ data: categories });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};

exports.categoryEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    await Category.findByIdAndUpdate(id, {
      $set: {
        name,
      },
    });
    res.status(200).json({ message: "Updated category" });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};

exports.categoryDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);

    res.status(200).json({ message: "Deleted category" });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};
