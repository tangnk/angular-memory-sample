import { PostService } from './services/post.service';
import { Component } from '@angular/core';
import { PostExtendService } from './services/post-extend.service';
import { ResponseListMessage } from './models/response-list-message';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wiki';
  // post$: Observable<ResponseListMessage<any[]>>;
  // req: any;
  // data: any;
  // page: number;
  // constructor(private postService: PostService, private postExtendService: PostExtendService){
  //   this.page = 1;
  //   this.req = {
  //     'Method': {
  //       'Method': 'POST'
  //     },
  //     'Url': '/api/processing-queue/search',
  //     'Module': 'HC',
  //     'ContentType': 'application/json',
  //     'AcceptType': 'application/json',
  //   };
  //   this.search(null);
  // }

  // search(previous: boolean = false, next: boolean = false) {
  //   if (previous) {
  //     this.page = this.page > 1 ? this.page - 1 : this.page;
  //   }else if (next) {
  //     this.page += 1;
  //   }

  //   this.data = `{\"person_code\":\"\",\"full_name\":\"\",\"gender\":\"\",\"date_of_birth\":\"\",\"area_id\":\"00000000-0000-4000-0000-000000000000\",\"work_queue_type_rcd\":\"CLI\",\"fr_created_date_time\":\"2020-09-08T00:00:00\",\"to_created_date_time\":\"2020-09-09T23:59:59\",\"search_query\":\"\",\"active_flag\":[],\"arr_active_flag\":null,\"include_hour\":true,\"insurance_flag\":\"\",\"page\":
  //   ${this.page},\"pageSize\":5}`;
  //   this.req.Data = this.data;
  //   //
  //   // this.post$ = this.postService.getAll('https://his.lapolo.com:6001/api/adapter/execute', this.req);


  //   //
  //   this.postExtendService.getAll('https://his.lapolo.com:6001/api/adapter/execute', this.req, this.page);
  //   this.post$ = this.postExtendService.post$;
  // }
}
