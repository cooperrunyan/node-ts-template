import { z } from 'zod';

import { requestStructure } from '../request-structure';

export const fail: z.infer<typeof requestStructure> = {
  hello: 'world',
  foo: 'bar',

  // This is not an array, will throw an error
  // @ts-ignore
  array: {
    1: 1,
    2: 2,
    3: 3,
  },
};
