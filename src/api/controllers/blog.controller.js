const Users = require("../../models/User");
const Blogs = require("../../models/Blog");

exports.blogPost = async (req, res) => {
  try {
    const { title, type, description } = req.body;
    const { imageName: image } = req;

    await Blogs.create({
      title,
      type,
      description,
      image,
    });
    res.status(201).json({ message: "Blog created Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.blogGet = async (req, res) => {
  try {
    const blogs = await Blogs.find();
    res.status(200).json({ data: blogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.blogLast = async (req, res) => {
  try {
    const blogs = await Blogs.find();
    const data = blogs.reverse().splice(0, 10) || blogs.reverse();
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.blogGetOne = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blogs.findById(id);

    res.status(200).json({ data: blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.blogEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, type, description } = req.body;
    const { imageName: image } = req;

    await Blogs.findByIdAndUpdate(id, {
      $set: {
        title,
        type,
        description,
        image,
      },
    });
    res.status(200).json({ message: "Updated blog" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.blogDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await Blogs.findByIdAndDelete(id);

    res.status(200).json({ message: "Deleted group" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
