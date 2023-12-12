import { z } from 'zod';

export const passwordResetFormSchema = z.object({
  password: z
    .string()
    .min(8, { message: '8文字以上入力する必要があります' })
    .regex(
        /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
        'パスワードは半角英数字混合で入力してください'
    ),
  passwordConfirm: z
    .string()
    .min(1, { message: '確認用のパスワードを入力してください' }),
})
.superRefine(({ password, passwordConfirm }, ctx) => {
  if(password !== passwordConfirm) {
      ctx.addIssue({
          path: ['passwordConfirm'],
          code: 'custom',
          message: 'パスワードが一致しません',
      });
  }
});

export type PasswordResetFormSchema = z.infer<typeof passwordResetFormSchema>;