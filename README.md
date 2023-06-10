# Gura-Encryptor
 Simple node package for encryption

# Installation
```bash
$ npm i gura-encryptor
```

# Examples
## cjs
```js
const guraEncryptor = require("gura-encryptor");

var value = "hello";
var secretValue = guraEncryptor.encrypt(value);
console.log(secretValue);
```

## esm
```js
import { encrypt, decrypt } from "gura-encryptor";

var value = "hello";
var secretValue = encrypt(value);
console.log(secretValue);
```

# License
<a href="https://github.com/FireStreaker2/Gura-Encryptor/blob/main/LICENSE">MIT</a>