const cookieController = {}

cookieController.checkCookie = function (req, res, next) {
  if (req.cookies.id && req.cookies.gravatarEmail) {
    res.redirect('/yohdl');
  } else {
    next();
  }
}
cookieController.setCookie = function (req, res, user) {
  res.cookie('id', user._id);
  // res.cookie('gravatarEmail', user.gravatarEmail);
}


module.exports = cookieController;