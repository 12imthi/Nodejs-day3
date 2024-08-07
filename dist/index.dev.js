"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _config = _interopRequireDefault(require("./Database/config.js"));

var _empRouter = _interopRequireDefault(require("./Routers/empRouter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
(0, _config["default"])();
var PORT = 4000 || process.env.PORT;
app.use('/api', _empRouter["default"]);
app.get('/', function (req, res) {
  res.status(200).send('app is wwwrwwunning');
});
app.listen(PORT, function () {
  console.log("app is running ".concat(PORT));
});