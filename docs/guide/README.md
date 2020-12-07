---
sidebarDepth: 3
sidebar: auto
---

# 使用说明


## 介绍

 Vue-super-flow 是基于vue 开发的一款生成、预览流程图的组件。使用者可以根据不同的需求对图、节点、连线进行细致的控制。

## 安装
```shell script

npm install vue-super-flow

yarn add vue-super-flow

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

## 属性

### draggable        
   
 - 类型：`Boolean`          
 - 默认值：`true`                   
 
是否开启节点拖拽移动坐标    
 
 
### linkAddable         

 - 类型：`Boolean`         
 - 默认值：`true`                   
 
是否开启节点边缘拖拽可创建连线  
 

### linkEditable        

 - 类型：`Boolean`          
 - 默认值：`true`                   

连线是否触发 hover 并调用右键菜单


### hasMarkLine         

 - 类型：`Boolean`          
 - 默认值：`true`        
            
是否开启辅助线
                     

### linkDesc       
    
 - 类型：`Function`           
 - 默认值：`null`                

生成 `link` 定制描述文字  
                     
```js
function linkDesc(link) {
   /**
     根据 link 对象的属性判断定制连线描述
   */
   return link.meta ? link.meta.info : ''
}
```                     
                     

### linkStyle         

 - 类型：`Function`           
 - 默认值：`null`                
 
根据 `link` 定制样式 
可选属性参考：[linkBaseStyle](#linkBaseStyle)
                   
```js
function linkStyle(link) {
   /**
     根据 link 对象的属性判断定制连线样式
   */
   return {
      // ...
   }
}
```                                 

### linkBaseStyle

 - 类型：`Object`           
 - 默认值：`{}`     
 
 连线默认样式配置 
 
```json5
/*
// 内置默认样式配置
{
   hover: '#FF0000',        // 连线 hover 时颜色
   color: '#666666',        // 连线颜色
   textColor: '#666666',    // 连线描述文字颜色
   textHover: '#FF0000',    // 连线 hover 时描述文字颜色
   font: '14px Arial',      // 连线 描述文字
   dotted: false,           // 连线 是否是虚线
   lineDash: [4, 4],        // 为虚线时 虚线参数
   background: 'rgba(255,255,255,0.6)'  // 描述文字背景  
}
*/


{
  // ... 可选属性 参考内置默认样式 用来覆盖连线样式的默认值
}
```

参考：
[canvas font](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/font)
[lineDash](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)    

### markLineColor     
  
 - 类型：`String`           
 - 默认值：`#55abfc`                

辅助节点对齐辅助线的颜色                        

### origin     
         
 - 类型：`Array`            
 - 默认值：`[0, 0]`                 
 
`graph` 的二维坐标系原点   
               

### nodeList    
        
 - 类型：`Array`            
 - 默认值：`[]`                     

 初始化节点列表    


### linkList    
        
 - 类型：`Array`        
 - 默认值：`[]`                     

初始化连线列表   


### graphMenu    
       
 - 类型：`Array`         
 - 默认值：`[]`                     

::: tip 说明

`graphMenu` 是对 `graph` 的右键菜单列表配置；

根据需要定制菜单,并可通过 插槽 [menuItem](#menuitem) 来决定菜单如何渲染
    
:::     


::: details 查看示例
```js
[
  [
    {
      // 菜单文案
      label: '开始节点',           // 菜单文案
      // 是否禁用
      disable(graph) {          
        return !!graph.nodeList.find(node => node.meta.prop === 'start')
      },
      // 菜单项选中时回调
      selected: (graph, coordinate) => {
        graph.addNode({
          width: 100,
          height: 80,
          coordinate: coordinate,
          meta: {
            prop: 'start',
            name: '开始节点'
          }
        })
      }
    },
    {
      label: '条件节点',
      disable: false,
      selected: (graph, coordinate) => {
        graph.addNode({
          width: 200,
          height: 100,
          coordinate: coordinate,
          meta: {
            prop: 'condition',
            name: '条件节点'
          }
        })
      }
    },
    {
      label: '审批节点',
      disable: false,
      selected: (graph, coordinate) => {
        graph.addNode({
          width: 200,
          height: 100,
          coordinate: coordinate,
          meta: {
            prop: 'approval',
            name: '审批节点'
          }
        })
      }
    },
    {
      label: '抄送节点',
      disable: false,
      selected: (graph, coordinate) => {
        graph.addNode({
          width: 200,
          height: 100,
          coordinate: coordinate,
          meta: {
            prop: 'cc',
            name: '抄送节点'
          }
        })
      }
    },
    {
      label: '结束节点',
      disable(graph) {
        return !!graph.nodeList.find(point => point.meta.prop === 'end')
      },
      selected: (graph, coordinate) => {
        graph.addNode({
          width: 80,
          height: 50,
          coordinate: coordinate,
          meta: {
            prop: 'end',
            name: '结束节点'
          }
        })
      }
    }
  ],
  [
    {
      label: '打印数据',
      selected: (graph, coordinate) => {
        console.log(JSON.stringify(graph.toJSON(), null, 2))
      }
    },
    {
      label: '全选',
      selected: (graph, coordinate) => {
        graph.selectAll()
      }
    }
  ]
]
```
:::



### nodeMenu          
  
 - 类型：`Array`          
 - 默认值：`[]`          
            
`node` 右键菜单配置       


### linkMenu            

 - 类型：`Array`            
 - 默认值：`[]`                     

 `link` 右键菜单              


### enterIntercept      

 - 类型：`Function`        
 - 默认值：`() => true`             
   
连线进入节点限制函数 接受 `boolean` 返回值 

::: details 查看示例
```js
methods: {
    enterIntercept(formNode, toNode, graph) {
      const formType = formNode.meta.prop
      switch (toNode.meta.prop) {
        case 'start':
          return false
        case 'approval':
          return [
            'start',
            'approval',
            'condition',
            'cc'
          ].includes(formType)
        case 'condition':
          return [
            'start',
            'approval',
            'condition',
            'cc'
          ].includes(formType)
        case 'end':
          return [
            'approval',
            'cc'
          ].includes(formType)
        default:
          return true
      }
    }
}
```
:::    

### outputIntercept    
 
 - 类型：`Function`         
 - 默认值：`() => true`             
 
节点生成连线限制 接受 `boolean` 返回值             

::: details 查看示例
```js
methods: {
  outputIntercept(node, graph) {
    return !(node.meta.prop === 'end')
  }
}
```
::: 

<br>
<br>

## 方法

### selectAll

- 参数: ``

选中所有进行拖拽修改 `origin`


### toJSON

- 参数: ``

将 `graph` 对象转为普通 `json` 对象并返回

### getMouseCoordinate

- 参数: `clientX, clientY`

获取当前鼠标在 `graph` 坐标系的坐标

### addNode

- 参数: `options`

新增节点函数

<br>
<br>

## 插槽

### node

- 控制节点渲染

### menuItem

- 控制菜单单项渲染
