export default function drawTextPoint (points, backgroundColor, textColor, shape = 'fillCircle', context) {
    // 画底色圈
    context.beginPath();
    context.setLineWidth(1);
    context.setFillStyle(backgroundColor);
    if (shape === 'fillCircle') {
        points.forEach(function(item, index) {
            // 获取文本宽度
            // const textLength = ctx.measureText(item.text);
            if (item !== null) {
                context.moveTo(item.x + 3.5, item.y)
                context.arc(item.x, item.y, 6, 0, 2 * Math.PI, false);
                context.setStrokeStyle(backgroundColor);
                context.setFillStyle(backgroundColor);
            }
        });
    }
    context.closePath();
    context.fill();
    context.stroke();

    // 填充字
    context.beginPath();
    points.forEach(function (item, index) {
        // 获取文本宽度
        // const textLength = ctx.measureText(item.text);
        if (item !== null) {
            // 绘制文字
            context.setFontSize(10);
            // 字体颜色
            context.setFillStyle(textColor);
            context.fillText(item.text, item.x - 3, item.y + 3.5);
        }
    });
    context.closePath();
    context.fill();
    context.stroke();
}