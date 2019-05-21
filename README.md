
# obclone
[![NPM](https://nodei.co/npm/obclone.png)](https://www.npmjs.org/package/obclone)

[![npm version](https://img.shields.io/npm/v/obclone.svg?style=flat-square)](https://www.npmjs.org/package/obclone)
[![Build Status](https://travis-ci.org/nepsho/obclone.svg?branch=master)](https://travis-ci.org/nepsho/obclone)
[![npm license](https://img.shields.io/static/v1.svg?label=License&message=MIT&color=informational)](https://github.com/nepsho/obclone/blob/master/LICENSE)
[![npm repository](https://img.shields.io/static/v1.svg?label=Repository&message=GitHub&color=yellow)](https://github.com/nepsho/obclone)
[![npm author](https://img.shields.io/static/v1.svg?label=Author&message=bcrazydreamer&color=success)](https://www.npmjs.com/~bcrazydreamer)

>**obclone** Js object or variable copy API, its useful to create **deep copy** and **shallow copy** of objects and variables. Helpful for arrays and objects.
## Features
- DeepCopy
- ShallowCopy

## Support
>All node versions

## Installing
[![NPM](https://nodei.co/npm/obclone.png?mini=true)](https://www.npmjs.org/package/obclone)

**Using npm:**
```bash
$ npm install obclone
```

**Using bower:**

```bash
$ bower install obclone
```

**Using yarn:**

```bash
$ yarn add obclone
```

## Examples

```js
>>const oc = require("obclone");
```
```js
//ShallowCopy--------------------------
>>var a = {"v1" : 1};
>>var b = oc.shallowcopy(a);
>>a["v2"] = 2;

>>console.log(a)
>>{"v1" : 1,"v2" : 2}

>>console.log(b)
>>{"v1" : 1,"v2" : 2}
```
```js
//DeepCopy--------------------------
>>var a = {"v1" : 1};
>>var b = oc.deepcopy(a);
>>a["v2"] = 2;


>>console.log(a)
>>{"v1" : 1,"v2" : 2}

>>console.log(b)
>>{"v1" : 1}
```
## licence
MIT [licence](https://opensource.org/licenses/MIT)

## Author
@BCrazyDreamer