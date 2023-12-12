import { z } from 'zod'

export const addTaskSchema = z.object({
    task_title: z
        .string()
        .min(1, { message: '入力必須です' }),
});

export type AddTaskSchemaType = z.infer<typeof addTaskSchema>;
