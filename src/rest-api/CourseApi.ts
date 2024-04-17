import EdApi  from '@/rest-api/EdApi';
import {Thread, ThreadSchema} from '@/models/Thread';
import * as path from "node:path";

class CourseApi extends EdApi {
    private courseSlug: string;

    constructor(private course_id: number) {
        super();
        this.courseSlug = path.join('courses', course_id.toString());
    }

    async getThreads(limit: number = 30): Promise<Thread[]> {
        const req_path = path.join(this.courseSlug, 'threads');

        const thread_getter = (data: any) => data['threads'];

        return await this.get(req_path, ThreadSchema.array(), thread_getter);
    }

    async getThread(thread_id: number): Promise<Thread> {
        const req_path = path.join('threads', thread_id.toString());

        const thread_getter = (data: any) => data['thread'];

        return await this.get(req_path, ThreadSchema, thread_getter);
    }
}

export default CourseApi;
