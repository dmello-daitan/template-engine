# Template Engine

Minimal templating engine

## Scripts

| Name                 | Description                                                     |
| -------------------- | --------------------------------------------------------------- |
| build                | Build the project                                               |
| dev                  | Watch any changes and run all tests                             |
| test                 | Run all tests once                                              |

## Usage

```js
import { Template } from 'template-engine'

const data = { 'name': 'Daniel' };
const template = 'Hello ${name}';
const text = Template(data, template);

console.log(text);
//=> Hello Daniel
```