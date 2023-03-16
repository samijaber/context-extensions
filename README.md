# context extensions

## install deps

```bash
pnpm install
```

## Run

```bash
pnpm dev
```

## Error

```log
[plugin:vite:import-analysis] Failed to resolve import "./grid.context.js" from "src/components/grid/grid.vue". Does the file exist?
context-extensions/src/components/grid/grid.vue:9:0
1  |  import config from "../config";
2  |  import GridContext from "./grid.context.js";
   |                           ^
3  |  import "./style";
4  |  const __vue2_script = {
```

## Resolve

`src/components/grid/grid.vue`
`src/components/grid-item/grid-item.vue`

```js
import GridContext from "./grid.context.js"; // error

// change to

import GridContext from "./grid.context"; // works
```
