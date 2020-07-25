---
home: true
heroText: Vue super flow
tagline: 基于vue的流程图组件。
actionText: 快速上手 →
actionLink: /guide/
footer: MIT Licensed | Copyright © 2020
---

<br/>
<br/>

## 当前版本
```
v1.3.3
```

## 安装
```shell script

npm install vue-super-flow

yran add vue-spuer-flow

```

## 全局引用

```js

import SuperFlow from 'vue-super-flow'
import 'vue-super-flow/lib/index.css'

Vue.use(SuperFlow)

```

## 局部引用

```vue
<template>
  <super-flow></super-flow>
</template>

<script >
  import SuperFlow from 'vue-super-flow' 
  import 'vue-super-flow/lib/index.css'
  export default {
    components: {SuperFlow}   
  } 
</script>
```
