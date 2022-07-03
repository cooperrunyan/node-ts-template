import { z } from 'zod';

export const requestStructure = z.object({
  hello: z.string(),
  foo: z.string(),
  array: z.array(z.number()),
});

export { success } from './samples/200';
export { fail } from './samples/400';
