## 方法
`updateData(data)` 更新图表数据，data: `object`，data.categories(可选，具体见参数说明)，data.series(可选，具体见参数说明)，data.title(可选，具体见参数说明)，data.subtitle(可选，具体见参数说明), data.specialPoint(可选，具体见参数说明)

`stopAnimation()` 停止当前正在进行的动画效果，直接展示渲染的最终结果

`addEventListener(type, listener)` 添加事件监听，type: `String`事件类型，listener: `function`处理方法

`getCurrentDataIndex(e)` 获取图表中点击时的数据序列编号(-1表示未找到对应的数据区域), e: `Object`微信小程序标准事件，需要手动的去绑定touch事件，具体可参考wx-charts-demo中column图示例

`showToolTip(e, options?)` 图表中展示数据详细内容(目前仅支持line和area图表类型)，e: `Object`微信小程序标准事件，options: `Object`可选，tooltip的自定义配置，支持option.background，默认为#000000; option.format, `function`类型，接受两个传入的参数，seriesItem(Object, 包括seriesItem.name以及seriesItem.data)和category，可自定义tooltip显示内容。具体可参考wx-charts-demo中line图示例

`scrollStart(e)`, `scroll(e)`, `scrollEnd(e)`设置支持图表拖拽系列事件(支持line, area, column)，具体参考wx-charts-demo中ScrollLine图示例

## 事件
`renderComplete` 图表渲染完成（如果有动画效果，则动画效果完成时触发）
如何使用事件
```
let chart = new wxCharts(...);
chart.addEventListener('renderComplete', () => {
    // your code here
});
```