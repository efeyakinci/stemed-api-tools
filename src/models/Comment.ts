import { z } from 'zod';
import {datetime} from "@/models/types";

const BaseCommentSchema = z.object({
    id: z.number(),
    user_id: z.number(),
    course_id: z.number(),
    thread_id: z.number(),
    original_id: z.number().nullable(),
    parent_id: z.number(),
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
});

type Comment = z.infer<typeof BaseCommentSchema> & {
    comments: Comment[]
}

const CommentSchema: z.ZodType<Comment> = BaseCommentSchema.extend({
    comments: z.lazy(() => CommentSchema.array())
})


export { Comment, CommentSchema };