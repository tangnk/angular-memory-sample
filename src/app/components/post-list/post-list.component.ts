import { ResponseListMessage } from './../../models/response-list-message';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit, OnDestroy {
  post$: Observable<ResponseListMessage<any[]>>;
  req: any;
  data: any;
  page: number;

  constructor(public postService: PostService) {
    this.page = 1;
    this.req = {
      'Method': {
        'Method': 'POST'
      },
      'Url': '/api/processing-queue/search',
      'Module': 'HC',
      'ContentType': 'application/json',
      'AcceptType': 'application/json',
    };
  }

  ngOnInit(): void {
    this.search();
  }

  search(previous: boolean = false, next: boolean = false): void {
    if (previous) {
      this.page = this.page > 1 ? this.page - 1 : this.page;
    } else if (next) {
      this.page += 1;
    }

    this.data = `{\"customer_code\":\"\",\"full_name\":\"\",\"gender\":\"\",\"date_of_birth\":\"\",\"area_id\":\"00000000-0000-4000-0000-000000000000\",\"work_queue_type_rcd\":\"CLI\",\"fr_created_date_time\":\"2020-09-08T00:00:00\",\"to_created_date_time\":\"2020-09-09T23:59:59\",\"search_query\":\"\",\"active_flag\":[],\"arr_active_flag\":null,\"include_hour\":true,\"insurance_flag\":\"\",\"page\":${this.page},\"pageSize\":5}`;
    this.req.Data = this.data;
    //
    this.post$ = this.postService.getAll('https://localhost/api/customer/list', this.req);
  }

  ngOnDestroy(): void {
    console.log('PostListComponent destroy');
  }
}
