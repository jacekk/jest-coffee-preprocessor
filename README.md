# jest-coffee-preprocessor

Simple Coffee Script Preprocessor for Jest

# Example Installation:

```sh
$ npm install @onlytabs/jest-coffee-preprocessor
```


In package.json:

```json
  "jest" :{
    "transform": {
      "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest",
      "^.+\\.coffee$": "<rootDir>/node_modules/@onlytabs/jest-coffee-preprocessor/index.js"
    },
    "moduleFileExtensions": [
      "coffee",
      "js",
      "json",
      "jsx"
    ]
  }
```
