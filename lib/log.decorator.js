"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = void 0;
exports.logger = logger;
var log = exports.log = function log(value, _ref) {
  var kind = _ref.kind,
    name = _ref.name;
  if (kind === "method") {
    return function () {
      console.log("".concat(name, " decorator logged at : ").concat(new Date().toLocaleString()));
      try {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var result = value.apply(this, args);
        return result;
        //2// return  `Vikas is a developer. ${result}`;
      } catch (error) {
        console.log("Error: ".concat(error));
        throw error;
      }
    };
  }
};
function logger(target, propertyKey, descriptor) {
  var originalMethod = descriptor.value;
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
  descriptor.value = function () {
    console.log("Method: ".concat(propertyKey));
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    console.log("Arguments: ".concat(JSON.stringify(args)));
    var result = originalMethod.apply(this, args);
    console.log("Result: ".concat(result));
    return result;
  };
  return descriptor;
}

//3//
// export const logged = (value, {kind, name}) => {
//     if (kind === "class"){
//         return class extends value{
//             constructor(...args){
//                 super(...args);
//                 console.log(`Contructing instance of ${name} with arguments ${args.join(", ")}`);
////5//                 this.name = args[0] + 5;
////5//                 this.superProp = true;
//             }
//         }
//     }
// }