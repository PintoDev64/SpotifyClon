import { INITIALPROPS_PLAYER, INITIALPROPS_QUEUE, SongProps } from "../../../vite-env";

export function formatTime(time: number) {
  if (time == null) return `0:00`

  const seconds = Math.floor(time % 60)
  const minutes = Math.floor(time / 60)

  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export function getDominantColor(imageUrl: string, transparency?: number): Promise<string> {
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

      if (transparency) {
        resolve('rgba(' + r + ',' + g + ',' + b + ',' + transparency + '%)');
        } else {
        resolve('rgb(' + r + ',' + g + ',' + b + ')');
      }
    }
  });
}

export function createMetaDataPlayer(PlayerState: INITIALPROPS_PLAYER, QueueState: INITIALPROPS_QUEUE, playAudio: () => void, pauseAudio: () => void, handleNextSong: (List: SongProps[]) => void) {

  const { Title, Artist, Album, imageURL } = PlayerState.Data;

  if (Title && Artist && Album && imageURL) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: Title,
      artist: Artist[0].Name,
      album: Album.Name,
      artwork: [
        {
          src: imageURL,
          sizes: "192x192",
          type: "image/png"
        }
      ]
    });
    navigator.mediaSession.setActionHandler("play", playAudio);
    navigator.mediaSession.setActionHandler("pause", pauseAudio);
    navigator.mediaSession.setActionHandler("previoustrack", () => { });
    navigator.mediaSession.setActionHandler("nexttrack", () =>handleNextSong(QueueState.List));
  }

}