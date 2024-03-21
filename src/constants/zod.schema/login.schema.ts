
import {z} from 'zod';

export const LoginInputSchema = z.object({
    email: z.string(),
    password: z.string(),
})