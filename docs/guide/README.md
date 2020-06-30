---
sidebarDepth: 3
sidebar: auto
---

# 使用说明

<br>
<br>

## 安装
```shell script

npm install vue-super-flow

yran add vue-spuer-flow

```

<br>
<br>

## 使用

```js

import SuperFlow from 'vue-super-flow'
import 'vue-super-flow/lib/index.css'

Vue.use(SuperFlow)

```

<br>
<br>

## 属性

### width            
  
 - 类型： `Number`        
 - 默认值：`1000`                   
                        
::: tip 说明
`graph` 的宽度
:::

### height           
   
 - 类型： `Number`           
 - 默认值：`8000`                   
 
::: tip 说明
`graph` 的高度   
:::

 
### draggable        
   
 - 类型：`Boolean`          
 - 默认值：`true`                   
 
::: tip 说明
是否开启节点拖拽   
:::
                     
 
 
### linkAddable         

 - 类型：`Boolean`         
 - 默认值：`true`                   
 
::: tip 说明
是否开启快捷创建 `link`   
:::
           
 
### linkEditable        

 - 类型：`Boolean`          
 - 默认值：`true`                   

::: tip 说明
`link` 是否可编辑     
:::


### hasMarkLine         

 - 类型：`Boolean`          
 - 默认值：`true`        
            
::: tip 说明
是否开启拖拽辅助线   
:::
                     

### lineColor       
    
 - 类型：`String`           
 - 默认值：`#666666`                

::: tip 说明
连线颜色          
:::
                     

### onLineColor         

 - 类型：`String`           
 - 默认值：`#FF0000`                
 
::: tip 说明
鼠标靠近连线时颜色         
::: 
                 

### markLineColor     
  
 - 类型：`String`           
 - 默认值：`#55abfc`                

::: tip 说明
辅助线颜色           
:::  
                        

### origin     
         
 - 类型：`Array`            
 - 默认值：`[0, 0]`                 
 
::: tip 说明
`graph` 的二维坐标系原点            
:::   
               

### nodeList    
        
 - 类型：`Array`            
 - 默认值：`[]`                     

::: tip 说明
 初始化节点列表           
:::   


### linkList    
        
 - 类型：`Array`        
 - 默认值：`[]`                     

::: tip 说明
初始化连线列表     
:::    


### graphMenu    
       
 - 类型：`Array`         
 - 默认值：`[]`                     

::: tip 说明
`graph` 的右键菜单列表配置   
:::     


### nodeMenu          
  
 - 类型：`Array`          
 - 默认值：`[]`                     

::: tip 说明
`node` 右键菜单列表配置       
:::        


### linkMenu            

 - 类型：`Array`            
 - 默认值：`[]`                     

::: tip 说明
 `link` 右键菜单配置         
:::                 


### enterIntercept      

 - 类型：`Function`        
 - 默认值：`() => true`             
   
::: tip 说明
创建连线进入节点限制         
:::      

### outputIntercept    
 
 - 类型：`Function`         
 - 默认值：`() => true`             
 
::: tip 说明
节点生成连线限制           
:::      

<br>
<br>

## 方法

### selectedAll

- 参数: ``

:::tip 说明
选中所有进行拖拽修改 `origin`
:::


### toJSON

- 参数: ``

:::tip 说明
将 `graph` 对象转为普通 `json` 对象并返回
:::

### getMouseCoordinate

- 参数: `clientX, clientY`

:::tip 说明
获取当前鼠标在 `graph` 坐标系的坐标
:::


### addNode

- 参数: `options`

:::tip 说明
新增节点
:::

<br>
<br>
