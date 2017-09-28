var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var fibonacci = function fibonacci() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  var previous = void 0;
  var sum = void 0;

  return [].concat(toConsumableArray(Array(times - 1).keys())).map(function (actual) {
    var step = (sum || start) + (previous || start);
    previous = sum;
    sum = step;
    return step;
  }).reverse().concat(start).reverse();
};

export default fibonacci;
//# sourceMappingURL=my-library-name.mjs.map
