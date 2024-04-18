# Eruption 🌋

> Boilerplate for React/Typescript, built on top of Vite ⚡️

_It's fast! Even the tests are fast, thanks to Vite with Vitest ⚡️_

# What's in the boilerplate

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- Dev Tools
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [CommitLint](https://commitlint.js.org/#/)
  - [Husky](https://typicode.github.io/husky/#/)
  - [Lint-Staged](https://github.com/okonet/lint-staged)

# Installation

There are two ways to install Eruption: using the template directly from GitHub (through the "Use Template" button), or using the [CLI](https://www.npmjs.com/package/create-eruption).

If you want to use the CLI, run the following command on your terminal:

```Bash
npm init eruption@latest
```

then, to start the project

```Bash
cd your-project-name
npm install
npm run dev
```

## Try it online

Want to try Eruption without clone local? Try it on [StackBlitz](https://stackblitz.com/fork/github/eruptionjs/core)

# Commits

This project have commits configured to follow the Conventional Commits's best practice and it's configured with ESLint, Prettier and Stylelint.

To commit, you must follow the convention `<type>[optional scope]: <description>`. In practice, it would be as follow:

```git
git commit -m "feat: add button component"
```

Then, Husky will start the pre-commit hook and run lint-staged, who will run `prettier`, `lint` and `stylelint` to validate code format and code lint. If you fail to follow any of these validations, the commit will be aborted.

After that, if everything is validated correctly, Husky will proceed with the commit-msg hook, where it will evaluate if your commit message is following the Conventional Commit's best practice and later run the tests of your project. If any of the tests are broken, the commit will be aborted. You must fix the tests before proceed.

You can also commit your files with the help of the CLI. To do so, just run `npm run commit`. From there, the CLI will assist you in the proccess. As before: if your changes fails the validation, you must fix it before proceed.

As a best practice, it is strongly recommended that you do not skip the validations. If you need to change the way your commit messages are written, just go to file `commitlint.config.ts` and you will find there the config needed.

Check out [commitlint](https://commitlint.js.org/#/) docs to see further configurations that you can do.

# Motivation

Everything started because I was in need of a good, solid, reliable and fast boilerplate to work with React/Typescript projects. I was working with Create-React-App and Webpack but both of them wasn't that good at all, specially in performance. Later on I discovered that I could use Vite to replace Webpack, so here we are now. =)

I believe that Eruption as it is right now, is an excellent starting point to any React/Typescript project, with enough dev tools to help you to write the best software possible and ship to production without any headaches.

# License

MIT
