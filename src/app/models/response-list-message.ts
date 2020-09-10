import { ResponseMessage } from './response-message';

export interface ResponseListMessage<T> extends ResponseMessage<T> {
    TotalItems: number;
    Page: number;
    PageSize: number;
    PageCount: number;
}
