# @netcentric/eslint-config

[![Version](https://img.shields.io/npm/v/@netcentric/eslint-config.svg)](https://npmjs.org/package/@netcentric/eslint-config)
[![Build Status](https://github.com/netcentric/eslint-config/workflows/CI/badge.svg?branch=main)](https://github.com/netcentric/eslint-config/actions)
[![CodeQL Analysis](https://github.com/netcentric/eslint-config/workflows/CodeQL/badge.svg?branch=main)](https://github.com/netcentric/eslint-config/actions)
[![semver: semantic-release](https://img.shields.io/badge/semver-semantic--release-blue.svg)](https://github.com/semantic-release/semantic-release)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

If Eslint is new to you, you might want to check out [what it does](https://eslint.org/) and [how to configure it](https://eslint.org/docs/latest/use/getting-started).

## Install

```bash
npm i @netcentric/eslint-config
```

## Setup

### .eslintrc

Create or update your `.eslintrc` file:

```json
{
  "extends": "@netcentric/eslint-config"
}
```

## IDE integration

Most IDEs should have an [integration for Eslint](https://eslint.org/docs/latest/use/integrations).

## Build system integration

If you are using https://github.com/Netcentric/fe-build, eslint is integrated by default.

For custom lint task, update `package.json`

```json
  "scripts": {
    "lint:js": "eslint path/to/source-js-files"
  }
```

Make sure you do not accidently lint files you are not interested that are out of scope for your build; e.g. files within the `node_modules` folder.

## Overwriting rules

Please stick to the Netcentric rules as they are battle tested and were created to form a company wide basis for JS code quality. If there's a very specific case you want to deactivate a rule for consider using [Eslint inline comments](https://eslint.org/docs/latest/use/configure/rules#disabling-rules) instead.

If there's a rule you consider as outdated or simply wrong please contact the package's maintainer or file an issue in JIRA (`bugs` in `package.json`) or create a PR on the package's repository (`repository` in `package.json`).

If you have a very project specific case where adding or deactivating a rule makes perfectly sense, you can overwrite any rule using the `rules` property.

## I don't understand why I violated rule X

You can find a description of all rules on the [Eslint Homepage](https://eslint.org/docs/latest/rules/).
