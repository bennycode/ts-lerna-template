# ts-lerna-template

A template for managing TypeScript packages with Lerna.

## Getting started

```bash
# Install dependencies
npm install

# Link packages
npm run boot

# Test packages
npm run test
```

## Release packages

Start with version "0.0.0" in `package.json` when creating a completely new package.

### Release all packages

Publish all packages that have changed:

```bash
npm run release
```

## Read more

- [How to set up a TypeScript monorepo with Lerna](https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559) ([Example repo](https://github.com/NiGhTTraX/ts-monorepo))
- [Nrwl takes over Lerna](https://blog.nrwl.io/lerna-used-to-walk-now-it-can-fly-eab7a0fe7700)
