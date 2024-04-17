import {API_KEY, WS_URL} from "../config";
import WebSocket from 'ws';
import pino from "pino";
import {NEW_COMMENT, NEW_THREAD, ReceivedMessage, ReceivedMessageSchema, SUBSCRIBE_TO_COURSE} from "./MessageTypes";

class EdWsApi {
    private socket: WebSocket;
    private connectPromise: Promise<void>;
    private messageId: number = 0;
    private logger = pino({
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true,
                ignore: 'pid,hostname'
            }
        }
    });

    constructor() {
        this.socket = new WebSocket(WS_URL, {
            headers: {
                Authorization: API_KEY
            }
        });

        this.connectPromise = new Promise<void>((resolve, reject) => {
            this.socket.once('open', () => {
                resolve();
            });

            this.socket.once('error', (error) => {
                this.logger.error('WebSocket error:', error);
                reject(error);
            });
        });

        this.socket.on('open', () => {
            this.logger.info('Connected to WebSocket');
        });

        this.socket.on('error', (error) => {
            this.logger.error('WebSocket error:', error);
        });

        this.socket.on('message', (raw_data) => {
            const data = raw_data.toString();
            const message = ReceivedMessageSchema.parse(JSON.parse(data));
            this.logger.info(`Received message: ${JSON.stringify(message)}`);
        });

    }

    connect = async () => {
        return this.connectPromise;
    }

    subscribeToCourse = (course_id: number) => {
        const message = {
            type: SUBSCRIBE_TO_COURSE,
            oid: course_id
        };

        this.sendMessage(message);
    }

    handleMessage = (message: ReceivedMessage) => {
        this.logger.info(`Received message: ${JSON.stringify(message)}`);

        switch (message.type) {
            case NEW_THREAD:
                this.logger.info('New thread:', message.data);
                break;
            case NEW_COMMENT:
                this.logger.info('New comment:', message.data);
                break;
        }
    }

    private sendMessage = (message: {[key: string]: any}) => {
        message['id'] = this.messageId;
        this.messageId++;

        const messageString = JSON.stringify(message);
        this.logger.info(`Sending message: ${messageString}`);
        this.socket.send(messageString);
    }
}

export default EdWsApi;