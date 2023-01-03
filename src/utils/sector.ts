// https://juejin.cn/post/6956090153144156174

export function getSectorPoints(extensionAngle: number) {
  const originAngle = (180 - extensionAngle) / 2;
  const angleRange = [originAngle, originAngle + extensionAngle];

  const points: Record<number, string> = {
    0: '100% 50%',
    45: `100% 0%`,
    90: `50% 0%`,
    135: `0% 0%`,
    180: `0% 50%`,
    225: `0% 100%`,
    270: `50% 100%`,
    315: `100% 100%`
  };
  const clipPoints = [];

  for (let pointIndex = 0; pointIndex < 17; pointIndex++) {
    const pointAngle = pointIndex * 45;
    const pointAngleKey = pointAngle % 360;
    if (angleRange[0] <= pointAngle && angleRange[1] >= pointAngle) {
      const clipPoint = points[pointAngleKey];
      clipPoints.push(clipPoint);
      if (clipPoints.length >= 8) break;
    } else if (clipPoints.length > 0) {
      break;
    }
  }

  const clipPointStartXY = {
    x: 50 * 10 * Math.cos((angleRange[0] / 360) * 2 * Math.PI),
    y: 50 * 10 * Math.sin((angleRange[0] / 360) * 2 * Math.PI)
  };

  const clipPointFinishXY = {
    x: 50 * 10 * Math.cos((angleRange[1] / 360) * 2 * Math.PI),
    y: 50 * 10 * Math.sin((angleRange[1] / 360) * 2 * Math.PI)
  };

  const clipPointStart = `${clipPointStartXY.x + 50}% ${-clipPointStartXY.y + 50}%`;
  const clipPointFinish = `${clipPointFinishXY.x + 50}% ${-clipPointFinishXY.y + 50}%`;
  const clipPointCenter = '50% 50%';

  return [clipPointStart, ...clipPoints, clipPointFinish, clipPointCenter, clipPointStart].join(',');
}
