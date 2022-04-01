# Template Engine

Minimal templating engine

## Usage

```js
import { Template } from 'template-engine'

const data = { 'name': 'Daniel' };
const template = 'Hello ${name}';
const text = Template(data, template);

console.log(text);
//=> Hello Daniel
```