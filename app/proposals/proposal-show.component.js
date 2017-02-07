"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//OnInit library activates as soon as the page loads
var core_1 = require('@angular/core');
//ActivatedRoute and Params are necessary for dynamic routing
var router_1 = require('@angular/router');
var ProposalShowComponent = (function () {
    //dependency injection: let our component know as soon as a new class has been instantiated
    function ProposalShowComponent(route) {
        this.route = route;
    }
    ProposalShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        //subscribe gives access to object you want to communicate with
        this.routeId = this.route.params.subscribe(function (params) {
            //the + on params turns string from the url into number
            _this.id = +params['id'];
        });
    };
    ProposalShowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'proposal-show',
            templateUrl: 'proposal-show.component.html',
            styleUrls: ['proposal-show.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], ProposalShowComponent);
    return ProposalShowComponent;
}());
exports.ProposalShowComponent = ProposalShowComponent;
//# sourceMappingURL=proposal-show.component.js.map