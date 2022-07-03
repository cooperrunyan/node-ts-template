import { z } from 'zod';
import { requestStructure } from '../request-structure';

export const success: z.infer<typeof requestStructure> = {
  hello: 'world',
  foo: 'bar',
  array: [1, 2, 3],
};
