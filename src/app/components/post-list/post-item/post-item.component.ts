import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { ResponseListMessage } from 'src/app/models/response-list-message';
import { PostService } from 'src/app/services/post.service';
import { tap, switchMap, distinctUntilChanged, debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemComponent implements OnInit, OnDestroy {
  unsubscribe = new Subject();
  loading: boolean = false;
  searchField: FormControl;
  post$: Observable<ResponseListMessage<any[]>>;
  req: any;
  data: any;
  page: number;

  constructor(private postService: PostService) {
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
    this.data = `{\"person_code\":\"\",\"full_name\":\"\",\"gender\":\"\",\"date_of_birth\":\"\",\"area_id\":\"00000000-0000-4000-0000-000000000000\",\"work_queue_type_rcd\":\"CLI\",\"fr_created_date_time\":\"2020-09-08T00:00:00\",\"to_created_date_time\":\"2020-09-09T23:59:59\",\"search_query\":\"\",\"active_flag\":[],\"arr_active_flag\":null,\"include_hour\":true,\"insurance_flag\":\"\",\"page\":
    ${this.page},\"pageSize\":5}`;
    this.req.Data = this.data;
    this.searchField = new FormControl();
    this.post$ = this.searchField.valueChanges.pipe(
      takeUntil(this.unsubscribe),
      debounceTime(400),
      distinctUntilChanged(),
      tap(_ => (this.loading = true)),
      switchMap(term => this.postService.getAll('https://his.lapolo.com:6001/api/adapter/execute', this.req, term)),
      tap(_ => (this.loading = false))
    );
  }

  ngOnDestroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe.next();
      this.unsubscribe.complete();
      console.log('item destroy');
    }
  }

}
