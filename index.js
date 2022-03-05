const crypto = require("crypto");

crypto.pbkdf2(
  "admin",
  "at_least_16_byteadmin1",
  10000,
  20,
  "sha1",
  (err, derivedKey) => {
    if (err) throw err;

    console.log(derivedKey.toString("hex").toUpperCase());
  }
);
