import axios, { AxiosInstance } from "axios";
import { HttpInstance } from "@/utils/instance.utils";

export abstract class HttpClient {
    protected static readonly http: AxiosInstance = HttpInstance.getInstance();
}