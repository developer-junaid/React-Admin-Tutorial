module.exports = (req, res, next) => {
  // Set Content range header
  res.header("Content-Range", "posts 0-20/20");

  //  Proceed
  next();
};
