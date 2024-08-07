"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEmployee = void 0;

var _empSchema = _interopRequireDefault(require("../Models/empSchema.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createEmployee = function createEmployee(req, res) {
  var newEmployee;
  return regeneratorRuntime.async(function createEmployee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          newEmployee = new _empSchema["default"](req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(newEmployee.save());

        case 4:
          res.status(200).json({
            message: "employee added successfully",
            data: [newEmployee]
          });
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            massage: 'Inernal server error'
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.createEmployee = createEmployee;