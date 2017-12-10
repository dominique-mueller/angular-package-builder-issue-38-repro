import { Component, Input, OnInit } from '@angular/core';

@Component( {
    selector: 'app-footer',
    templateUrl: './footer.component.html',
} )
export class FooterComponent implements OnInit {

    @Input()
    public isTrue: boolean;

    constructor() {}

    ngOnInit() {}

}
