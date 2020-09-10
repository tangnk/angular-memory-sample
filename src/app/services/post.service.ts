import { ResponseListMessage } from './../models/response-list-message';
import { Observable, BehaviorSubject } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { Post } from '../models/post.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    constructor(private readonly http: BaseApiService) { }

    getAll(url: string, req: any, term: string = ''): Observable<ResponseListMessage<any[]>> {
        console.log('term', term);
        if (term != '') {
            let data = `{\"person_code\":\"\",\"full_name\":\"\",\"gender\":\"\",\"date_of_birth\":\"\",\"area_id\":\"00000000-0000-4000-0000-000000000000\",\"work_queue_type_rcd\":\"CLI\",\"fr_created_date_time\":\"2020-09-08T00:00:00\",\"to_created_date_time\":\"2020-09-09T23:59:59\",\"search_query\":\"\",\"active_flag\":[],\"arr_active_flag\":null,\"include_hour\":true,\"insurance_flag\":\"\",\"page\":
            ${term},\"pageSize\":5}`;
            req.Data = data;
        }
        return this.http.post<any>(url, req);
    }
}
