const Partners = require("../../models/Partner");

exports.partnerPost = async (req, res) => {
  try {
    const { websiteLink } = req.body;
    const { imageName: image } = req;

    await Partners.create({
      websiteLink,
      image,
    });

    res.status(201).json({ message: "Partner created Successfully" });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};

exports.partnerGet = async (req, res) => {
  try {
    const partners = await Partners.find();
    res.status(200).json({ data: partners });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};

exports.partnerEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const { websiteLink } = req.body;
    const { imageName: image } = req;

    await Partners.findByIdAndUpdate(id, {
      $set: {
        websiteLink,
        image,
      },
    });
    res.status(200).json({ message: "Updated partner" });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};

exports.partnerDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await Partners.findByIdAndDelete(id);

    res.status(200).json({ message: "Deleted partner" });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};
