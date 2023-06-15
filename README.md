![Gura-Encryptor](https://socialify.git.ci/FireStreaker2/Gura-Encryptor/image?description=1&forks=1&issues=1&language=1&name=1&owner=1&pulls=1&stargazers=1&theme=Dark)

# Info
Gura Encryptor is a simple node package for encryption. It works by converting a string into an array, then looping through every element within that array into it's designated "encrypted" format. This was designed as a somewhat type of joke, and should **not** be actually used in a production based environment.

# Installation
Via npm:
```bash
$ npm i gura-encryptor
```

Via cdn:
```html
<script type="module" src="https://unpkg.com/gura-encryptor@1.0.0/index.js"></script>
```

# Examples
cjs:
```js
const guraEncryptor = require("gura-encryptor");

var value = "hello";
var secretValue = guraEncryptor.encrypt(value);
console.log(secretValue);
```

esm:
```js
import { encrypt, decrypt } from "gura-encryptor";

var value = "hello";
var secretValue = encrypt(value);
console.log(secretValue);
```

# License
<a href="https://github.com/FireStreaker2/Gura-Encryptor/blob/main/LICENSE">MIT</a>