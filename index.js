"use strict";

const isArray = (v) => Object.prototype.toString.call(v) === "[object Array]";

const isPlainObject = (v) => {
  if (!v) return false;
  const proto = Object.getPrototypeOf(v);
  return (
    proto === null ||
    (Object.getPrototypeOf(proto) === null &&
      proto.constructor === v.constructor)
  );
};

function clone(v) {
  let c;
  const obj = v;
  if (isArray(obj)) {
    c = obj.slice();
  } else if (isPlainObject(obj)) {
    c = Object.assign({}, obj);
  } else if (obj instanceof Date) {
    c = new Date(Number(obj));
  } else if (obj instanceof Set) {
    c = new Set(obj);
  } else if (obj instanceof Map) {
    c = new Map(obj);
  } else {
    c = obj;
  }
  return c;
}

const deepcopy = (v) => {
  return clone(v);
};

module.exports = deepcopy;
