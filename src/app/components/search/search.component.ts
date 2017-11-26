import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private titleService: Title
    ) { }

    public formSearch: FormGroup;

    ngOnInit() {
        this.titleService.setTitle('Home24 - Frontend Challenge');

        this.formSearch = this.formBuilder.group({
            keyword: ['', [Validators.required]]
        });
    }

    onSubmit() {
        if (this.formSearch.valid == false) {
            return;
        }

        this.router.navigate(['/artists', this.formSearch.value.keyword]);
    }

}
