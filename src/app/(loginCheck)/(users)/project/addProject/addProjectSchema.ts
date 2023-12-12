import { z } from 'zod'

export const addProjectSchema = z.object({
    project_name: z
        .string()
        .min(1, { message: '入力必須です' }),
});

export type AddProjectSchemaType = z.infer<typeof addProjectSchema>;
