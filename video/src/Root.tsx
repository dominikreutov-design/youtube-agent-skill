import { Composition, Folder } from "remotion";
import { LONG_FORM, SHORT, THUMBNAIL, seconds } from "./formats";
import {
  TitleCard,
  titleCardSchema,
} from "./videos/example-title-card/TitleCard";

// Register every video here, one <Folder> per video in src/videos/.
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="example-title-card">
        <Composition
          id="ExampleTitleCard"
          component={TitleCard}
          schema={titleCardSchema}
          durationInFrames={seconds(4)}
          {...LONG_FORM}
          defaultProps={{
            title: "Your video title",
            subtitle: "Made with Remotion",
          }}
        />
        <Composition
          id="ExampleTitleCardShort"
          component={TitleCard}
          schema={titleCardSchema}
          durationInFrames={seconds(4)}
          {...SHORT}
          defaultProps={{
            title: "Your Short title",
            subtitle: "Made with Remotion",
          }}
        />
        <Composition
          id="ExampleTitleCardThumbnail"
          component={TitleCard}
          schema={titleCardSchema}
          durationInFrames={1}
          {...THUMBNAIL}
          defaultProps={{
            title: "Your thumbnail text",
            subtitle: "Made with Remotion",
          }}
        />
      </Folder>
    </>
  );
};
