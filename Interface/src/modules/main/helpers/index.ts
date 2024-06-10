import { INITIALPROPS_PLAYER } from "../../../vite-env";

export function getDominantColor(imageUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let imgEl = new Image();
    imgEl.src = imageUrl;
    imgEl.crossOrigin = "Anonymous";

    imgEl.onload = function () {
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

export function createMetaDataPlayer(PlayerState: INITIALPROPS_PLAYER, playAudio: () => void, pauseAudio: () => void) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: PlayerState.Data.Name,
    artist: PlayerState.Data.Artist[0].Name,
    album: PlayerState.Data.Album,
    artwork: [
      {
        src: PlayerState.Data.Cover,
        sizes: "192x192",
        type: "image/png"
      }
    ]
  });
  navigator.mediaSession.setActionHandler("play", playAudio);
  navigator.mediaSession.setActionHandler("pause", pauseAudio);
  navigator.mediaSession.setActionHandler("previoustrack", () => { });
  navigator.mediaSession.setActionHandler("nexttrack", () => { });
}