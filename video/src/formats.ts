// Shared output formats. Every composition should spread one of these
// so all videos render at YouTube-ready sizes.

export const FPS = 30;

// Standard long-form YouTube video, 16:9.
export const LONG_FORM = {
  width: 1920,
  height: 1080,
  fps: FPS,
} as const;

// YouTube Shorts, 9:16.
export const SHORT = {
  width: 1080,
  height: 1920,
  fps: FPS,
} as const;

// YouTube thumbnail size, 16:9. Render with `npx remotion still`.
export const THUMBNAIL = {
  width: 1280,
  height: 720,
  fps: FPS,
} as const;

export const seconds = (s: number) => Math.round(s * FPS);
