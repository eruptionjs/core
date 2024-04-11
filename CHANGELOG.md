# Changelog

## v1.11.0

- uses bun as default on project config

## v1.10.0

- chore(rc/1.10): upgrade deps to latest by @devmozao in #61

## v1.9.0

Bump on dependencies to latest. Only major change that's worth noting: husky v9.

## v1.8.0

- feat(dx): add qr-code on the dev server by @raisiqueira in #55
- chore(packages): update msw version by @raisiqueira in #54
- chore(ci): remove ci cache by @raisiqueira in #57
- chore(rc-v1.8): first rc with dep bumps, everything working as - - expected on dev by @devmozao in #56

## v1.7.0

- upgrade vite to v5
- improved bundle optimization splitting chunks that are common and doesn't change much, like react, react-dom and react/jsx
- add treemap bundle analyzer
- improved linters
- enforced linters before build: it must succeed before commit and deploying with actions
- removed dep `@fvilers/disable-react-devtools` and implemented the snippet directly on `index.html` at root, in order to optimize bundle size
- improved some script commands to improve DX
- minor change on `.eslintrc` in order to prepare to the v9 changes (it will be huge)
- upgrade to node v20 (🥳🎉)

### to the future

- improve eslint rules by visiting each rule and each plugin and enforce them in a friendly way
- implement strict typescript lint and check with tsc itself
- apply optimizations for assets compression (brotli, gzip)
- apply optimizations for other assets like images and fonts (specially fonts injected by third parties)
- implement qr-code to open application on mobile and facilitate dev testing for responsives
- check msw workflow with vitest/testing-lib
- check if css modules will work in chunks/modules as desired

## v1.6.0

- Updated dependencies to support Node v20 with NPM v10.
- Upgraded to Typescript v5.
- Upgraded several libs to the latest versions (no major changes).
- The dependency "@vitest/coverage-c8" was moved to "@vitest/coverage-v8", but without breaking changes.
- Prettier now requires that "@trivago/prettier-plugin-sort-imports" must be explicit configured as a plugin (wasn't before).
- Added a new script command called "host", to support vite host mode.
- Added a new script called "format:check", to check if the code is formatted on lintstaged.
- Upgraded lintstaged, there was a typo on it for css formatting.
- Added a new code snippet for function components autocomplete.
- Increased rules for a better approach with commintlint usage.
- Increased eslint rules to ensure some good practices. (still a working in progress)

### To the future

- A better and greater eslint ruleset- We aim to have a great DX, but also a great code quality, and that means a more incisive and codebase quality control over time.
- As we learn how to deal with postcss on mantine 7, those learns will also reflect here, not only for css-in-js cases.
- We still need to add a better support for msw, but we are still learning how to use it properly.
- Also we need to add a better support for testing, it's still a pain to work with it in general.
- Our goal to have an opinionated and full swiss army knife version of Eruption ready to use, is still a work in progress. We don't have ATM the time to work on it, but we will get there eventually.

## v1.5.0

- Upgraded several libs to the latest version (Hello Vite 4.3).
- Update the main README to use the create-eruption CLI.
- Added GitHub Actions.

## v1.4.0

- Upgraded several libs to the latest version.
- Stylelint v15 removed all style rules, making `stylelint-config-prettier` obsolete.
- Several new `eslint-import` rules added for DX QoL.

## v1.3.0

- Upgraded Node to latest LTS version, v18 (hydrogen).
- Upgraded Vite to v4.
- Changed vite-react plugin to vite-react-swc.
- Bumped dev dependencies to latest.

## v1.2.0

- Added msw as a dev dep, but still missing default config.
- Changed minor configs to match vite@latest with focus on DX.

## v1.1.0

- Vite depedency updated to from v2 to v3.
- Fixed missing .sh files for husky pre-commit and commit-msg hook.
- Added missing config for promp-cli at commitlint.

## v1.0.0

- Eruption First Release.
  ༼ つ ◕_◕ ༽つ🌋

## Know issue

1. on vitest/globals conflicting with testing-lib/jest-dom when running for build/preview scripts. Solutions provided were not sufficient to keep both globals working properly. As a fix, `"skipLibCheck": true,` from `tsconfig.json` was changed to `false`, in order to keep running those scripts.
