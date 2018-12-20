if (!Uint8Array.prototype.fill) {
  const U8aPoly = require('typedarray').Uint8Array;

  U8aPoly.prototype.fill = Array.prototype.fill;

  global.Uint8Array = U8aPoly;
}
