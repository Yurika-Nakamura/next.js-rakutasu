import { z } from 'zod'

export const registerFormSchema = z.object({
    last_name: z
        .string()
        .min(1, { message: '入力必須です' }),
    first_name: z
        .string()
        .min(1, { message: '入力必須です' }),
    email: z
        .string()
        .min(1, { message: '入力必須です' })
        .email({ message: 'メールアドレスの形式ではありません' })
        .regex(/^[\u0021-\u007e]+$/u, { message: '半角英数字で入力してください' }),
    password: z
        .string()
        .min(8, { message: '8文字以上入力する必要があります' })
        .regex(
            /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
            'パスワードは半角英数字混合で入力してください'
        ),
    password_confirm: z
        .string()
        .min(1, { message: '確認用のパスワードを入力してください' }),
})
.superRefine(({ password, password_confirm }, ctx) => {
    if(password !== password_confirm) {
        ctx.addIssue({
            path: ['password_confirm'],
            code: 'custom',
            message: 'パスワードが一致しません',
        });
    }
});

export type RegisterFormSchemaType = z.infer<typeof registerFormSchema>;