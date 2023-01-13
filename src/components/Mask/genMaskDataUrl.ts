import domtoimage from 'dom-to-image';

export async function genMaskDataUrl(node: HTMLElement, canvas: HTMLCanvasElement) {
  const scale = 2;
  const width = node.clientWidth * scale;
  const height = node.clientHeight * scale;

  const style: React.CSSProperties = {
    transform: 'scale(' + scale + ')',
    transformOrigin: 'top left',
    opacity: '1'
  };

  node.style.opacity = '0';

  const dataUrl = await domtoimage.toPng(node, {
    width,
    height,
    style,
    bgcolor: '#fff'
  });

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');

  if (!context) throw new Error(`canvas context not found`);

  context.clearRect(0, 0, canvas.width, canvas.height);

  const img = new Image();
  img.src = dataUrl;

  await new Promise(resolve => {
    img.onload = resolve;
  });

  context.drawImage(img, 0, 0);
  const imageData = context.getImageData(0, 0, width, height);

  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] + data[i + 1] + data[i + 2] < 10) {
      data[i + 0] = 0; // r
      data[i + 1] = 0; // g
      data[i + 2] = 0; // b
      data[i + 3] = 0; // alpha
    } else {
      data[i + 0] = 255; // r
      data[i + 1] = 255; // g
      data[i + 2] = 255; // b
      data[i + 4] = 1;
    }
  }
  context.putImageData(imageData, 0, 0);

  return canvas.toDataURL();
}
