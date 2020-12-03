"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (req, res, next) {
  var uri = _path["default"].join(__dirname, '../../../public/images/');

  _fs["default"].readdir(uri, function (err, files) {
    var file = files[Math.floor(files.length * Math.random())];
    res.sendFile(uri + file);
  });
});
var _default = router;
exports["default"] = _default;