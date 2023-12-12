import { z } from 'zod';

export const passwordResetFormSchema = z.object({
    email: z
      .string()
      .min(1, { message: 'メールアドレスの形式ではありません' }),
  });

export type PasswordResetFormSchemaType = z.infer<typeof passwordResetFormSchema>;