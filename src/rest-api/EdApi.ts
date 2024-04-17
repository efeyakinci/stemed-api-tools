import axios, { AxiosInstance } from 'axios';
import { API_KEY, BASE_URL } from '@/config';
import { z } from 'zod';

class EdApi {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: BASE_URL,
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
    }

    async get(path: string, schema: z.Schema, transform?: (data: any) => any): Promise<any> {
        const response = await this.client.get(path);

        if (transform) {
            return schema.parse(transform(response.data));
        }

        return schema.parse(response.data);
    }
}

export default EdApi;