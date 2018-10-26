## 参数说明
`opts` Object

`opts.canvasId` String required 微信小程序canvas-id

`opts.width` Number required canvas宽度，单位为px

`opts.height` Number required canvas高度，单位为px

`opts.background` String canvas背景颜色（如果页面背景颜色不是白色请设置为页面的背景颜色，默认#ffffff）

`opts.enableScroll` Boolean 是否开启图表可拖拽滚动 默认false 支持line, area图表类型(需配合绑定scrollStart, scroll, scrollEnd方法)

`opts.title` Object (only for ring chart)

`opts.title.name` String 标题内容

`opts.title.fontSize` Number 标题字体大小（可选，单位为px）

`opts.title.color` String 标题颜色（可选）

`opts.title.offsetX` Number 标题横向位置偏移量，单位px，默认0

`opts.subtitle` Object (only for ring chart)

`opts.subtitle.name` String 副标题内容

`opts.subtitle.offsetX` Number 副标题横向位置偏移量，单位px，默认0

`opts.subtitle.fontSize` Number 副标题字体大小（可选，单位为px）

`opts.subtitle.color` String 副标题颜色（可选）

`opts.animation` Boolean default true 是否动画展示

`opts.legend` Boolen default true 是否显示图表下方各类别的标识

`opts.type` String required 图表类型，可选值为pie, line, column, area, ring, radar

`opts.categories` Array required (饼图、圆环图不需要) 数据类别分类

`opts.dataLabel` Boolean default true 是否在图表中显示数据内容值

`opts.dataPointShape` Boolean default true 是否在图表中显示数据点图形标识

`opts.disablePieStroke` Boolean default false 不绘制饼图（圆环图）各区块的白色分割线

`opts.xAxis` Object X轴配置

`opts.xAxis.gridColor` String 例如#7cb5ec default #cccccc X轴网格颜色

`opts.xAxis.fontColor` String 例如#7cb5ec default #666666 X轴数据点颜色

`opts.xAxis.disableGrid` Boolean default false 不绘制X轴网格

`opts.xAxis.type` String 可选值calibration(刻度) 默认为包含样式

`opts.yAxis` Object Y轴配置

`opts.yAxis.format` Function 自定义Y轴文案显示

`opts.yAxis.min` Number Y轴起始值

`opts.yAxis.max` Number Y轴终止值

`opts.yAxis.title` String Y轴title

`opts.yAxis.gridColor` String 例如#7cb5ec default #cccccc Y轴网格颜色

`opts.yAxis.fontColor` String 例如#7cb5ec default #666666 Y轴数据点颜色

`opts.yAxis.titleFontColor` String 例如#7cb5ec default #333333 Y轴title颜色

`opts.yAxis.disabled` Boolean default false 不绘制Y轴

`opts.extra` Object 其他非通用配置项

`opts.extra.ringWidth` Number ringChart圆环宽度，单位为px

`opts.extra.lineStyle` String (仅对line, area图表有效) 可选值：curve曲线，straight直线 (default)

`opts.extra.column` Object 柱状图相关配置

`opts.extra.column.width` Number 柱状图每项的图形宽度，单位为px

`opts.extra.legendTextColor` String 例如#7cb5ec default #cccccc legend文案颜色

`opts.extra.radar` Object 雷达图相关配置

`opts.extra.radar.max` Number, 默认为series data的最大值，数据区间最大值，用于调整数据显示的比例

`opts.extra.radar.labelColor` String, 默认为#666666, 各项标识文案的颜色

`opts.extra.radar.gridColor` String, 默认为#cccccc, 雷达图网格颜色

`opts.extra.pie` Object 饼图、圆环图相关配置

`opts.extra.pie.offsetAngle` Number, 默认为0, 起始角度偏移度数，顺时针方向，起点为3点钟位置（比如要设置起点为12点钟位置，即逆时针偏移90度，传入-90即可）

`opts.series` Array required 数据列表

数据列表每项结构定义

`dataItem` Object

`dataItem.data` Array required (饼图、圆环图为Number) 数据，如果传入null图表该处出现断点

`dataItem.color` String 例如#7cb5ec 不传入则使用系统默认配色方案

`dataItem.name` String 数据名称

`dateItem.format` Function 自定义显示数据内容


## 新增
`opts.xAxis.textAngle` Number x轴文字倾斜角度

`opts.xAxis.spacing` Number x轴文字稀疏程度（默认为1，越大越稀）

`opts.yAxis.split` Number y轴坐标与网格数量（默认为5）

`opts.yAxis.disableGrid` Boolean 关闭y轴网格线

`opts.yAxis.gridLineWidth` Number y轴网格的粗细，单位px

`opts.lineWidth` Number 图线的粗细，单位px

`opts.legend.lineWidth` Number 图例粗细，单位px
