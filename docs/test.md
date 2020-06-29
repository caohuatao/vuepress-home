```js
const d = {
      width: {
        type: Number,
        default: 1000
      },
      height: {
        type: Number,
        default: 800
      },
      draggable: {
        type: Boolean,
        default: true
      },
      linkAddable: {
        type: Boolean,
        default: true
      },
      linkEditable: {
        type: Boolean,
        default: true
      },
      hasMarkLine: {
        type: Boolean,
        default: true
      },
      libertyStart: {
        type: Boolean,
        default: true
      },
      lineColor: {
        type: String,
        default: '#666666'
      },
      onLineColor: {
        type: String,
        default: '#FF0000'
      },
      markLineColor: {
        type: String,
        default: '#55abfc'
      },
      origin: {
        type: Array,
        default() {
          return [
            this.width / 2,
            this.height / 2
          ]
        }
      },
      nodeList: {
        type: Array,
        default: () => []
      },
      linkList: {
        type: Array,
        default: () => []
      },
      graphMenu: {
        type: Array,
        default: () => []
      },
      nodeMenu: {
        type: Array,
        default: () => []
      },
      linkMenu: {
        type: Array,
        default: () => []
      },
      enterIntercept: {
        type: Function,
        default: () => true
      },
      outputIntercept: {
        type: Function,
        default: () => true
      },
}
```
