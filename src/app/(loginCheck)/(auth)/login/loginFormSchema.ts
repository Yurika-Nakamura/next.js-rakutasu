import { z } from 'zod';

export const loginFormSchema = z.object({
    email: z
      .string()
      .min(1, { message: '入力必須です' })
      .email({ message: 'メールアドレスの形式ではありません' }),
    password: z
      .string()
      .min(8, { message: '8文字以上入力する必要があります' }),
  });

export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;