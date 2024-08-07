"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _empController = require("../Controllers/empController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/create', _empController.createEmployee);
router.get('/create', _empController.createEmployee);
var _default = router;
exports["default"] = _default;