# Videos (Remotion)

This folder is where videos for the channel are built in code with [Remotion](https://www.remotion.dev)
(React components rendered to MP4). The Remotion agent skills are installed at the repo root in
`.claude/skills/remotion-*`, so Claude loads them automatically when working here.

## Layout

```
video/
  src/
    Root.tsx            every video registered here, one <Folder> per video
    formats.ts          LONG_FORM (1920x1080), SHORT (1080x1920), THUMBNAIL (1280x720), seconds()
    videos/
      <video-slug>/     one folder per video: its components, scenes and props
  public/
    <video-slug>/       that video's media (voiceover, b-roll, images, music)
  out/                  rendered files (git-ignored)
```

`src/videos/example-title-card/` is a working example with a long-form, a Short and a thumbnail
composition. Copy it to start a new video.

## Commands

Run these from `video/`.

```bash
npm install                                     # install dependencies
npm run dev                                     # Remotion Studio (live preview)
npm run render -- <CompositionId> out/<name>.mp4
npm run still -- <CompositionId> out/<name>.png  # thumbnails / single frames
npm run lint                                    # eslint + typecheck
```

Example:

```bash
npm run render -- ExampleTitleCard out/example-title-card.mp4
```

## Adding a video

1. Create `src/videos/<video-slug>/` (kebab-case, e.g. `2026-10-why-bridges-fail`).
2. Build the video as components in that folder. Put its media in `public/<video-slug>/` and load
   it with `staticFile("<video-slug>/file.mp3")`.
3. Register its compositions in `src/Root.tsx` inside a `<Folder name="<video-slug>">`, using a
   format from `formats.ts`. Composition IDs are PascalCase and unique (e.g. `WhyBridgesFail`,
   `WhyBridgesFailShort`, `WhyBridgesFailThumbnail`).
4. Run `npm run lint`, then render to `out/`.

Large raw footage is better kept out of git (or in Git LFS). Commit code and small assets only.

## Cloud sessions

In Claude Code cloud sessions, `.claude/hooks/session-start.sh` installs dependencies and sets
`REMOTION_BROWSER_EXECUTABLE` to the preinstalled Chromium, because Remotion's own browser download
is blocked there. On your own machine, leave that variable unset and Remotion downloads its browser
the first time you render.

## Updating

```bash
npx remotion upgrade                              # Remotion packages (from video/)
npx skills update                                 # Remotion agent skills (from the repo root)
```

## License

Remotion has its own license, separate from this repo's MIT license. At the time of setup the
installer said Remotion is free for teams of up to 3; larger companies need a company license. Check
the current terms at https://www.remotion.pro/license.
