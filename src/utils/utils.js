/**
 * xuhui86 工具集
 */
export function isFunction(val) {
  return typeof val === 'function';
}

export function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

export function when(value, fulfilled, rejected) {

  var promise = Promise.resolve(value);

  if (arguments.length < 2) {
    return promise;
  }

  return promise.then(fulfilled, rejected);
}