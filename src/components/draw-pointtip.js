import { measureText } from './charts-util'
import { assign } from '../util/polyfill/index';

export function drawPointTip(textList, offset, opts, config, context) {
    let legendWidth = 4;
    let legendMarginRight = 5;
    let arrowWidth = 8;
    let isOverRightBorder = false;
    offset = assign({
        x: 0,
        y: 0
    }, offset);
    offset.y -= 8;
    let textWidth = textList.map((item) => {
        return measureText(item.text);
    });

    let toolTipWidth = legendWidth + legendMarginRight + 4 * config.toolTipPadding + Math.max.apply(null, textWidth);
    let toolTipHeight = 2 * config.toolTipPadding + textList.length * config.toolTipLineHeight;

    // if beyond the right border
    if (offset.x - Math.abs(opts._scrollDistance_) + arrowWidth + toolTipWidth > opts.width) {
        isOverRightBorder = true;
    }

    // draw horizontal line
    context.save();
    context.setStrokeStyle('#4AA1FF');
    context.setLineDash([1, 2]);
    context.setLineWidth(1);
    context.beginPath();
    let startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipPadding + 2;
    context.moveTo(0, startY);
    context.lineTo(opts.width, startY);
    context.closePath();
    context.stroke();
    context.restore();

    // draw text list
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle('#007AFF');
    textList.forEach(function (item, index) {
        let startX = offset.x - arrowWidth + 2 * config.toolTipPadding + legendMarginRight;
        if (isOverRightBorder) {
            startX = offset.x - toolTipWidth + 2 * config.toolTipPadding + legendWidth + legendMarginRight;
        }
        let startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index + config.toolTipPadding - 10;
        context.fillText(item.text, startX, startY + config.fontSize);
    });
    context.stroke();
    context.closePath();
}