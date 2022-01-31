import { creator, empty, ok } from 'lambda-mdl';

export const handle = creator(empty)
  // eslint-disable-next-line @typescript-eslint/require-await
  .ok(async () => {
    return ok('Hello world');
  })
  .req();
