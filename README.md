Basic Serverless Typescript starter
===================================

- No builders (like Webpack or Parcel), just raw Typescript
- No serverless Typescript plugins (like serverless-plugin-typescript)
- Works well with monorepo's, all code can be used as a library 

### Why?

To make everything as stable as possible, and not spending hours of 
figuring out why your build fail.

## What included?

- ESLint and Prettier, so you code is beautiful
- Jest, so you code is correct

## How it works?

Each time you try to deploy or run your code it just builds it upfront with the help of
`serverless-scriptable-plugin` and Serverless lifecycle hooks. And with the same hooks 
You can customize build process as needed.

## Extend?

- Sourcemaps can easily be added via source-map-support
- Other bundlers can be added if needed
