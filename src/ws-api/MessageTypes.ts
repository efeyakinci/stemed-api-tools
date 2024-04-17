import { z } from 'zod';

const SUBSCRIBE_TO_COURSE = 'course.subscribe';
const NEW_THREAD = 'thread.new';
const NEW_COMMENT = 'comment.new';

const ReceivedMessageSchema = z.object({
    type: z.string(),
    data: z.record(z.unknown()).optional()
});

type ReceivedMessage = z.infer<typeof ReceivedMessageSchema>

export {
    ReceivedMessageSchema,
    ReceivedMessage,
    SUBSCRIBE_TO_COURSE,
    NEW_THREAD,
    NEW_COMMENT
}