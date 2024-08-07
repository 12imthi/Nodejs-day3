"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var empSchema = _mongoose["default"].Schema({
  emp_firstname: String,
  emp_lastname: String,
  emp_email: String,
  emp_role: String
});

var Employee = _mongoose["default"].model("Employee", empSchema);

var _default = Employee;
exports["default"] = _default;