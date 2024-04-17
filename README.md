# Usage

This project is set up to use TypeScript. The main entry point of the application is src/app.ts.  

# Key Files and Their Usage
`src/ws-api/MessageTypes.ts`: This file defines the types and schemas for the messages that can be received from the WebSocket API. It uses the zod library for schema validation.  

`src/rest-api/CourseApi.ts`: This file defines the CourseApi class, which is used to interact with the REST API for courses. It includes methods for getting threads and individual threads.

`src/ws-api/EdWsApi.ts`: This file defines the EdWsApi class, which is used to interact with the WebSocket API. It includes methods for connecting to the API, subscribing to a course, and handling incoming messages.  

`src/app.ts`: This is the main entry point of your application. It creates an instance of EdWsApi, connects to the WebSocket API, and subscribes to a course.