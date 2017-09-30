module.exports = {
  "extends": "airbnb",
  "env": {
    "mocha": true,
    "mongo": true,
  },
  "rules": {
    "no-underscore-dangle": ["error", { "allow": ["_id"] }],
    "no-console": 0,
    "func-names": ["error", "never"],
  }
};
