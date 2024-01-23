# kintone-typeguard

[![npm version](https://badge.fury.io/js/kintone-typeguard.svg)](https://badge.fury.io/js/kintone-typeguard)

Typeguard for [@kintone/rest-api-client](https://www.npmjs.com/package/@kintone/rest-api-client) fields.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

### 1. Install with `npm`

This library is distributed on `npm`.

```shell
npm install kintone-typeguard
```

You can then use `import` to import the library.

```ts
// ES modules
import { guardFormField, guardFormLayout, guardRecord } from "kintone-typeguard";
```

## Usage

Here is a sample code that retrieves form fields of an app.

```ts
import { KintoneRestAPIClient } from "@kintone/rest-api-client";
import { guardFormField } from "kintone-typeguard";

const client = new KintoneRestAPIClient();
const { properties } = await client.app.getFormFields({ app: 1 });
if (guardFormField.isSingleLineText(properties.xxx)) {
  properties.xxx.unique; // unique property exists
}
if (guardFormField.isLookup(properties.xxx)) {
  properties.xxx.lookup; // lookup property exists
}
```

Here is a sample code that retrieves form layout of an app.

```ts
import { KintoneRestAPIClient } from "@kintone/rest-api-client";
import { guardFormLayout } from "kintone-typeguard";

const client = new KintoneRestAPIClient();
const { layout } = await client.app.getFormLayout({ app: 1 });
if (guardFormLayout.isRow(layout[0])) {
  layout[0].fields; // fields property exists
}
if (guardFormLayout.isSubtable(layout[0])) {
  layout[0].code; // code property exists
}
```

Here is a sample code that retrieves records of an app.

```ts
import { KintoneRestAPIClient } from "@kintone/rest-api-client";
import { guardRecord } from "kintone-typeguard";

const client = new KintoneRestAPIClient();
const { record } = await client.record.getRecord({ app: 1, id: 1 });
if (guardRecord.isSingleLineText(record.xxx)) {
  record.xxx.value; // string
}
if (guardRecord.isCheckBox(record.xxx)) {
  record.xxx.value; // string[]
}
```

## License

- [MIT](https://github.com/cy-takeuchi/kintone-typeguard/blob/main/LICENSE)
