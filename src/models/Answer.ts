import { CommentSchema } from '@/models/Comment'
import { datetime } from "./types";
import { z } from 'zod';

const AnswerSchema = z.object({
    id: z.number(),
    user_id: z.number(),
    course_id: z.number(),
    thread_id: z.number(),
    original_id: z.number().nullable(),
    parent_id: z.number().nullable(),
    editor_id: z.number().nullable(),
    number: z.number(),
    type: z.string(),
    kind: z.string(),
    content: z.string(),
    document: z.string(),
    flag_count: z.number(),
    vote_count: z.number(),
    is_endorsed: z.boolean(),
    is_anonymous: z.boolean(),
    is_private: z.boolean(),
    is_resolved: z.boolean(),
    created_at: datetime,
    updated_at: datetime.nullable(),
    deleted_at: datetime.nullable(),
    anonymous_id: z.number(),
    vote: z.number(),
    comments: z.array(CommentSchema).nullable()
});

type Answer = z.infer<typeof AnswerSchema>;

export { Answer, AnswerSchema }