# util-clean-special-chars

## Install
```bash
npm i --save @kldit/util-clean-special-chars
```

## Usage
Load at the begining of your application.
```javascript
require("@kldit/util-clean-special-chars");
```
Run at any where of your code.
```javascript
"téstÉ".cleanSpecialChars() // "testE"
```
