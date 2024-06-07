export function getDominantColor(imageUrl: string): Promise<string> {
    return new Promise((resolve, reject) => {
      let imgEl = new Image();
      imgEl.src = imageUrl;
      imgEl.crossOrigin = "Anonymous";
  
      imgEl.onload = function() {
        let canvas = document.createElement('canvas');
        canvas.width = imgEl.width;
        canvas.height = imgEl.height;
  
        let ctx = canvas.getContext('2d')!;
        if (!ctx) {
          reject('No se pudo obtener el contexto 2D del canvas');
        }
  
        ctx.drawImage(imgEl, 0, 0, imgEl.width, imgEl.height);
  
        let data = ctx.getImageData(0, 0, imgEl.width, imgEl.height).data;
        let r = data[0];
        let g = data[1];
        let b = data[2];
  
        resolve('rgb(' + r + ',' + g + ',' + b + ')');
      }
    });
  }
  