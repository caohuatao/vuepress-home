const graphMenuList = [
  [
    {
      label: '开始节点',
      disable(graph) {
        return !!graph.nodeList.find(node => node.meta.prop === 'start')
      },
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
