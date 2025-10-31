import { AxiosInstance } from "axios";
import { HttpInstance } from "@/utils/instance.utils";

export abstract class HttpClient {
    protected static get http(): AxiosInstance {
        return HttpInstance.getInstance();
    }
}