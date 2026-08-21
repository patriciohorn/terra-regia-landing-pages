// src/lib/storyblokImage.ts
export function sbImage(filename: string, width: number, height = 0) {
  if (!filename) return "";
  return `${filename}/m/${width}x${height}/filters:format(webp):quality(80)`;
}

export function sbSrcSet(filename: string, widths = [640, 1024, 1600, 2400]) {
  return widths.map((w) => `${sbImage(filename, w)} ${w}w`).join(", ");
}
