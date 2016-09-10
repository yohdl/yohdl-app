const cookieController = {}

cookieController.checkCookie = function (req, res, next) {
  if (req.cookies.userId) {
    res.redirect('/yohdl');
  } else {
    next();
  }
}
cookieController.setCookie = function (req, res, next) {
  res.cookie('id', req.userId);
  next()
  // res.cookie('gravatarEmail', user.gravatarEmail);
}


module.exports = cookieController;