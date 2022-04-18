
# obclone

[![npm version](https://img.shields.io/npm/v/obclone.svg?style=flat-square)](https://www.npmjs.org/package/obclone)
[![Build Status](https://travis-ci.org/nepsho/obclone.svg?branch=master)](https://travis-ci.org/nepsho/obclone)

>**obclone:** Genrate deepcopy of variables

## Installing
[![NPM](https://nodei.co/npm/obclone.png?mini=true)](https://www.npmjs.org/package/obclone)

**Using npm:**
```bash
$ npm install obclone
```

**Using yarn:**
```bash
$ yarn add obclone
```

## Examples
```js
>>const clone = require("obclone");
```

```js
>>var a = {"v1" : 1};
>>var b = clone(a);
>>a["v2"] = 2;

>>console.log(a)
>>{"v1" : 1, "v2" : 2}

>>console.log(b)
>>{"v1" : 1}
```

## licence
MIT [licence](https://opensource.org/licenses/MIT)

## Author
[Bharat Rawat](https://github.com/bcrazydreamer)