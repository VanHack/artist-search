import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(
        private router: Router,
        private formBuilder: FormBuilder
    ) { }

    public formSearch: FormGroup;

    ngOnInit() {
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
