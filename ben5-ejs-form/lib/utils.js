const base64 = require('base-64');
const utf8 = require('utf8');

module.exports = {
  encode: (text) => {
    const bytes = utf8.encode(text);
    const encoded = base64.encode(bytes);
    return encoded;
  },
  decode: (encoded) => {
    const bytes = base64.decode(encoded);
    const text = utf8.decode(bytes);
    return text;
  }
}

// hash
// encode|decode: ko có secret key
// encrypt|decrypt: phải có secret key