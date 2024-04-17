import { z } from 'zod';

import { AnswerSchema } from '@/models/Answer';
import {datetime} from "@/models/types";

const ThreadSchema = z.object({
    id: z.number(),
    user_id: z.number(),
    course_id: z.number(),
    original_id: z.number().nullable(),
    editor_id: z.number().nullable(),
    accepted_id: z.number().nullable(),
    duplicate_id: z.number().nullable(),
    number: z.number(),
    type: z.string(),
    title: z.string(),
    content: z.string(),
    document: z.string(),
    category: z.string(),
    subcategory: z.string(),
    subsubcategory: z.string(),
    flag_count: z.number(),
    star_count: z.number(),
    view_count: z.number(),
    unique_view_count: z.number(),
    vote_count: z.number(),
    reply_count: z.number(),
    unresolved_count: z.number(),
    is_locked: z.boolean(),
    is_pinned: z.boolean(),
    is_private: z.boolean(),
    is_endorsed: z.boolean(),
    is_answered: z.boolean(),
    is_student_answered: z.boolean(),
    is_staff_answered: z.boolean(),
    is_archived: z.boolean(),
    is_anonymous: z.boolean(),
    is_megathread: z.boolean(),
    anonymous_comments: z.boolean(),
    approved_status: z.string(),
    created_at: datetime,
    updated_at: datetime.nullable(),
    deleted_at: datetime.nullable(),
    pinned_at: datetime.nullable(),
    anonymous_id: z.number(),
    vote: z.number(),
    is_seen: z.boolean(),
    is_starred: z.boolean(),
    is_watched: z.boolean().nullable(),
    glanced_at: datetime.nullable(),
    new_reply_count: z.number(),
    duplicate_title: z.string().nullable(),
    answers: z.array(AnswerSchema).optional()
});

type Thread = z.infer<typeof ThreadSchema>;

export { Thread, ThreadSchema };