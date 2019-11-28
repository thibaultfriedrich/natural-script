# Contributing to Natural-script

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

## Found an Issue?

Thank you for reporting any issues you find. We do our best to test and make `natural-script` as solid as possible, but any reported issue is a real help.

Please follow these guidelines when reporting issues:

- Provide a title in the format of `<Error> when <Task>`
- Tag your issue with the tag `bug`
- Provide a short summary of what you are trying to do
- Provide the log of the encountered error if applicable
- Provide the exact version of `natural-script`.
- Be awesome and consider contributing a [pull request](#want-to-contribute)

## Want to contribute?

You consider contributing changes to `natural-script` – we dig that!
Please consider these guidelines when filing a pull request:

- Follow the [Coding Rules](#coding-rules)
- Follow the [Commit Rules](#commit-rules)
- Make sure you rebased the current master branch when filing the pull request
- Squash your commits when filing the pull request
- Provide a short title with a maximum of 100 characters
- Provide a more detailed description containing
  _ What you want to achieve
  _ What you changed
  _ What you added
  _ What you removed
- For significant changes, post also an issue before to know if your idea has a chance to be accepted
- Consider your development for windows, linux and macOS platforms at the same time
  because having a module compatible with all platforms is the main concern of `natural-script`.

## Coding Rules

To keep the code base of commitlint neat and tidy the following rules apply to every change

- `prettier` is king
- `eslint` is awesome
- Favor micro library over swiss army knives (rimraf, ncp vs. fs-extra)
- Be awesome

> use commands `yarn lint` and `yarn format` to be sure your code respect coding rules.

## Commit Rules

To help everyone with understanding the commit history of commitlint the following commit rules are enforced.

- squash your commits in one commit
- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/)
- husky commit message hook available
- present tense
- maximum of 100 characters
- for bugs, includes the github tag of the issue in the description.
- message format of `$type($scope): $message`

These are the authorized types:

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

## Versioning

`natural-script` use [standard-version](https://github.com/conventional-changelog/standard-version) to handle versioning
automatically. So you just need to follow commit rules and once the maintainer will want to  
release a version, he will use commands:

```bash
git pull origin master
yarn release
push --follow-tags origin master && npm publish
```

> Please do not use these commands if you don't have write capabilities on the repository. We want to
> have versions synchronized with npm so these commands should be executed in the same time.

**May the force be with you !!**