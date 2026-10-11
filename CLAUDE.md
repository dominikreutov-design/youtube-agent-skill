# CLAUDE.md

- `skills/yt-*` — the YouTube skill pack (scripts, packaging, editing, retention, etc.).
- `video/` — Remotion project where videos are produced in code. Read `video/README.md` before
  working there: one folder per video in `video/src/videos/<video-slug>/`, registered in
  `video/src/Root.tsx`, using the formats in `video/src/formats.ts`. Rendered files go to
  `video/out/` (git-ignored).
- `.claude/skills/remotion-*` — Remotion's official agent skills, installed with
  `npx skills add remotion-dev/skills` (tracked in `skills-lock.json`). Don't edit them by hand;
  update with `npx skills update`.
- Run `npm run lint` in `video/` after changing video code.
