# ts-lerna-template

A template for managing TypeScript packages with Lerna.

## Getting started

```bash
# Install dependencies
yarn install

# Link packages
yarn boot

# Test packages
yarn test:all
```

## Release packages

Start with version "0.0.0" in `package.json` when creating a completely new package.

### Release all packages

Publish all packages that have changed:

```bash
yarn release
```

## Read more

- [How to set up a TypeScript monorepo with Lerna](https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559)
