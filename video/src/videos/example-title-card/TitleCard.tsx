import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";

export const titleCardSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
});

type Props = z.infer<typeof titleCardSchema>;

// Example video: an animated title card. Copy this folder as the starting
// point for a new video.
export const TitleCard: React.FC<Props> = ({ title, subtitle }) => {
  const currentFrame = useCurrentFrame();
  const { fps, width, height, durationInFrames } = useVideoConfig();
  // A one-frame composition is a still (thumbnail): show the end state.
  const frame = durationInFrames === 1 ? fps * 2 : currentFrame;
  const isVertical = height > width;

  const titleIn = spring({ frame, fps, config: { damping: 200 } });
  const subtitleOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0f0f0f",
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
        fontFamily: "Helvetica, Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: isVertical ? 110 : 120,
          fontWeight: 800,
          lineHeight: 1.1,
          transform: `translateY(${interpolate(titleIn, [0, 1], [60, 0])}px)`,
          opacity: titleIn,
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#ff3b30",
          fontSize: isVertical ? 56 : 52,
          fontWeight: 600,
          marginTop: 32,
          opacity: subtitleOpacity,
        }}
      >
        {subtitle}
      </div>
    </AbsoluteFill>
  );
};
