"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var mongodb_Url = process.env.MONGODB_URL;

var connectDB = function connectDB(req, res) {
  var connection;
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log(mongodb_Url); // const options = {
          //     useNewUrlParser: true,
          //     useUnifiedTopology: true
          // }

          _context.next = 4;
          return regeneratorRuntime.awrap(_mongoose["default"].connect(mongodb_Url));

        case 4:
          connection = _context.sent;
          console.log("mongodb is connected");
          return _context.abrupt("return", connection);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(200).json({
            message: "some error"
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

var _default = connectDB;
exports["default"] = _default;