import CourseApi from "@/rest-api/CourseApi";
import {COURSE_ID} from "./config";
import EdWsApi from "./ws-api/EdWsApi";

const wsApi = new EdWsApi();
wsApi.connect().then(() => {
    wsApi.subscribeToCourse(COURSE_ID);
});