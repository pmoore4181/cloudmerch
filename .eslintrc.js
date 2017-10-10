module.exports = {
  "extends": "airbnb",
  "env": {
    "mocha": true,
    "mongo": true,
  },
  "settings": {
       "ecmascript": 6,
       "jsx": true,
    },
  "plugins": [
    "react",
  ],
  "rules": {
    "no-underscore-dangle": ["error", { "allow": ["_id"] }],
    "no-console": 0,
    "func-names": ["error", "never"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], 
  }
};
