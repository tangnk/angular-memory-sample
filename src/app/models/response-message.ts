export interface ResponseMessage<T> {
    MessageCode: string;
    Data: T;
    ExtraInfo: JSON;
}
