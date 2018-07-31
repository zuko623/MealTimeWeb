(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"5RyT":function(e,n){e.exports='<div [@routerTransition]>\n    <h2 class="text-muted">Dashboard\n        <small>Statistics Overview</small>\n    </h2>\n    <hr>\n    <div class="row">\n        <div class="col-xl-3 col-lg-6">\n            <app-stat [bgClass]="\'primary\'" [icon]="\'fa-comments\'" [count]="26" [label]="\'New Comments!\'"></app-stat>\n        </div>\n        <div class="col-xl-3 col-lg-6">\n            <app-stat [bgClass]="\'warning\'" [icon]="\'fa-tasks\'" [count]="12" [label]="\'New task!\'"></app-stat>\n        </div>\n        <div class="col-xl-3 col-lg-6">\n            <app-stat [bgClass]="\'success\'" [icon]="\'fa-shopping-cart\'" [count]="124" [label]="\'New Orders!\'"> </app-stat>\n        </div>\n        <div class="col-xl-3 col-lg-6">\n            <app-stat [bgClass]="\'danger\'" [icon]="\'fa-support\'" [count]="13" [label]="\'New Tickets!\'"></app-stat>\n        </div>\n    </div>\n    <hr />\n    <div class="row">\n        <div class="col col-xl-6 col-lg-12">\n            <div class="card mb-3">\n                <div class="card-header">Pending Orders</div>\n                <div class="card-body table-responsive">\n                    <table class="table table-hover table-striped">\n                        <thead>\n                            <tr>\n                                <th>Page</th>\n                                <th>Visits</th>\n                                <th>% New Visits</th>\n                                <th>Revenue</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>/index.html</td>\n                                <td>1265</td>\n                                <td>32.3%</td>\n                                <td>$321.33</td>\n                            </tr>\n                            <tr>\n                                <td>/about.html</td>\n                                <td>261</td>\n                                <td>33.3%</td>\n                                <td>$234.12</td>\n                            </tr>\n                            <tr>\n                                <td>/sales.html</td>\n                                <td>665</td>\n                                <td>21.3%</td>\n                                <td>$16.34</td>\n                            </tr>\n                            <tr>\n                                <td>/blog.html</td>\n                                <td>9516</td>\n                                <td>89.3%</td>\n                                <td>$1644.43</td>\n                            </tr>\n                            <tr>\n                                <td>/404.html</td>\n                                <td>23</td>\n                                <td>34.3%</td>\n                                <td>$23.52</td>\n                            </tr>\n                            <tr>\n                                <td>/services.html</td>\n                                <td>421</td>\n                                <td>60.3%</td>\n                                <td>$724.32</td>\n                            </tr>\n                            <tr>\n                                <td>/blog/post.html</td>\n                                <td>1233</td>\n                                <td>93.2%</td>\n                                <td>$126.34</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class="col col-xl-6 col-lg-12">\n            <div class="card mb-3">\n                <div class="card-header">Confirmed Orders</div>\n                <div class="card-body table-responsive">\n                    <table class="table table-hover table-striped">\n                        <thead>\n                            <tr>\n                                <th>Page</th>\n                                <th>Visits</th>\n                                <th>% New Visits</th>\n                                <th>Revenue</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>/index.html</td>\n                                <td>1265</td>\n                                <td>32.3%</td>\n                                <td>$321.33</td>\n                            </tr>\n                            <tr>\n                                <td>/about.html</td>\n                                <td>261</td>\n                                <td>33.3%</td>\n                                <td>$234.12</td>\n                            </tr>\n                            <tr>\n                                <td>/sales.html</td>\n                                <td>665</td>\n                                <td>21.3%</td>\n                                <td>$16.34</td>\n                            </tr>\n                            <tr>\n                                <td>/blog.html</td>\n                                <td>9516</td>\n                                <td>89.3%</td>\n                                <td>$1644.43</td>\n                            </tr>\n                            <tr>\n                                <td>/404.html</td>\n                                <td>23</td>\n                                <td>34.3%</td>\n                                <td>$23.52</td>\n                            </tr>\n                            <tr>\n                                <td>/services.html</td>\n                                <td>421</td>\n                                <td>60.3%</td>\n                                <td>$724.32</td>\n                            </tr>\n                            <tr>\n                                <td>/blog/post.html</td>\n                                <td>1233</td>\n                                <td>93.2%</td>\n                                <td>$126.34</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    \x3c!-- <div class="row">\n        <div class="col-md-12">\n            <table class="table table-sm table-hover">\n                <tr *ngFor="let result of results">\n                    <td>{{result.id}} - {{result.name}}</td>\n                    <td>{{result.subMenus[0]?.name}}</td>\n                    <td>{{result.subMenus[1]?.name}}</td>\n                    <td>{{result.subMenus[2]?.name}}</td>\n                    <td>{{result.subMenus[3]?.name}}</td>\n                    <td>{{result.pageURL}}</td>\n                    <td>{{result.pageURL}}</td>\n                    <td>\n                        <a class="btn" (click)="showForEdit(employee)">\n                            <i class="fa fa-pencil-square-o"></i>\n                        </a>\n                        <a class="btn text-danger" (click)="onDelete(employee.EmployeeID)">\n                            <i class="fa fa-trash-o"></i>\n                        </a>\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div> --\x3e\n\n    <div class="row">\n        <div class="col-md-12">\n            <ngb-carousel>\n                <ng-template ngbSlide *ngFor="let slider of sliders">\n                    <img class="img-fluid mx-auto d-block" [src]="slider.imagePath" alt="Random first slide" width="100%">\n                    <div class="carousel-caption">\n                        <h3>{{slider.label}}</h3>\n                        <p>{{slider.text}}</p>\n                    </div>\n                </ng-template>\n            </ngb-carousel>\n        </div>\n    </div>\n    <ngb-alert [type]="alert.type" (close)="closeAlert(alert)" *ngFor="let alert of alerts"></ngb-alert>\n    <hr />\n    <div class="row">\n        <div class="col-lg-8">\n            <div class="card card-default">\n                <div class="card-header">\n                    <i class="fa fa-clock-o fa-fw"></i> Responsive Timeline\n                </div>\n                \x3c!-- /.card-header --\x3e\n                <app-timeline></app-timeline>\n                \x3c!-- /.card-body --\x3e\n            </div>\n            \x3c!-- /.card --\x3e\n        </div>\n        \x3c!-- /.col-lg-8 --\x3e\n        <div class="col-lg-4">\n            <div class="card card-default mb-3">\n                <div class="card-header">\n                    <i class="fa fa-bell fa-fw"></i> Notifications card\n                </div>\n                \x3c!-- /.card-header --\x3e\n                <app-notification></app-notification>\n                \x3c!-- /.card-body --\x3e\n            </div>\n            \x3c!-- /.card --\x3e\n\n            <app-chat></app-chat>\n            \x3c!-- /.card .chat-card --\x3e\n        </div>\n        \x3c!-- /.col-lg-4 --\x3e\n    </div>\n</div>\n'},CYm5:function(e,n){e.exports='<div class="chat-panel card card-default">\n    <div class="card-header">\n        <i class="fa fa-comments fa-fw"></i>\n        Chat\n        <div class=" pull-right" ngbDropdown>\n            <button class="btn btn-secondary btn-sm" ngbDropdownToggle>\n                <span class="caret"></span>\n            </button>\n            <ul class="dropdown-menu dropdown-menu-right">\n                <li role="menuitem"><a class="dropdown-item" href="#">\n                    <i class="fa fa-refresh fa-fw"></i> Refresh</a>\n                </li>\n                <li role="menuitem"><a class="dropdown-item" href="#">\n                    <i class="fa fa-check-circle fa-fw"></i> Available</a>\n                </li>\n                <li role="menuitem"><a class="dropdown-item" href="#">\n                    <i class="fa fa-times fa-fw"></i> Busy</a>\n                </li>\n                <li class="divider dropdown-divider"></li>\n                <li role="menuitem">\n                    <a href="#" class="dropdown-item">\n                        <i class="fa fa-times fa-fw"></i> Busy\n                    </a>\n                </li>\n                <li>\n                    <a href="#" class="dropdown-item">\n                        <i class="fa fa-clock-o fa-fw"></i> Away\n                    </a>\n                </li>\n                <li class="divider"></li>\n                <li>\n                  <a href="#" class="dropdown-item">\n                    <i class="fa fa-sign-out fa-fw"></i> Sign Out\n                  </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    \x3c!-- /.panel-heading --\x3e\n    <div class="card-body">\n        <ul class="chat">\n            <li class="left clearfix">\n                <span class="chat-img pull-left">\n                    <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" class="img-circle">\n                </span>\n                <div class="chat-body clearfix">\n                    <div class="header">\n                        <strong class="primary-font">Jack Sparrow</strong>\n                        <small class="pull-right text-muted">\n                            <i class="fa fa-clock-o fa-fw"></i> 12 mins ago\n                        </small>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class="right clearfix">\n                <span class="chat-img pull-right">\n                    <img src="http://placehold.it/50/FA6F57/fff" alt="User Avatar" class="img-circle">\n                </span>\n                <div class="chat-body clearfix">\n                    <div class="header">\n                        <small class=" text-muted">\n                            <i class="fa fa-clock-o fa-fw"></i> 13 mins ago\n                        </small>\n                        <strong class="pull-right primary-font">Bhaumik Patel</strong>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class="left clearfix">\n                <span class="chat-img pull-left">\n                    <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" class="img-circle">\n                </span>\n                <div class="chat-body clearfix">\n                    <div class="header">\n                        <strong class="primary-font">Jack Sparrow</strong>\n                        <small class="pull-right text-muted">\n                            <i class="fa fa-clock-o fa-fw"></i> 14 mins ago\n                        </small>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class="right clearfix">\n                <span class="chat-img pull-right">\n                    <img src="http://placehold.it/50/FA6F57/fff" alt="User Avatar" class="img-circle">\n                </span>\n                <div class="chat-body clearfix">\n                    <div class="header">\n                        <small class=" text-muted">\n                            <i class="fa fa-clock-o fa-fw"></i> 15 mins ago\n                        </small>\n                        <strong class="pull-right primary-font">Bhaumik Patel</strong>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n        </ul>\n    </div>\n    \x3c!-- /.card-body --\x3e\n    <div class="card-footer">\n        <div class="input-group">\n            <input id="btn-input" type="text" class="form-control input-sm" placeholder="Type your message here...">\n            <span class="input-group-btn">\n                <button class="btn btn-warning btn-sm" id="btn-chat">\n                    Send\n                </button>\n            </span>\n        </div>\n    </div>\n    \x3c!-- /.card-footer --\x3e\n</div>\n'},GZeB:function(e,n,t){"use strict";t.r(n);var i=t("CcnG"),a=t("Ip0R"),l=t("eUd/"),s=t("ZYCi"),r=t("ZZ88"),o=function(e,n,t,i){var a,l=arguments.length,s=l<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(l<3?a(s):l>3?a(n,t,s):a(n,t))||s);return l>3&&s&&Object.defineProperty(n,t,s),s},d=function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},c=function(){function e(){this.alerts=[],this.sliders=[],this.sliders.push({imagePath:"assets/images/slider1.jpg",label:"First slide label",text:"Nulla vitae elit libero, a pharetra augue mollis interdum."},{imagePath:"assets/images/slider2.jpg",label:"Second slide label",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{imagePath:"assets/images/slider3.jpg",label:"Third slide label",text:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."}),this.alerts.push({id:1,type:"success",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"},{id:2,type:"warning",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"})}return e.prototype.ngOnInit=function(){},e.prototype.closeAlert=function(e){var n=this.alerts.indexOf(e);this.alerts.splice(n,1)},e=o([Object(i.Component)({selector:"app-dashboard",template:t("5RyT"),styles:[t("xO7I")],animations:[Object(r.a)()]}),d("design:paramtypes",[])],e)}(),p=function(e,n,t,i){var a,l=arguments.length,s=l<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(l<3?a(s):l>3?a(n,t,s):a(n,t))||s);return l>3&&s&&Object.defineProperty(n,t,s),s},m=[{path:"",component:c}],u=function(){function e(){}return e=p([Object(i.NgModule)({imports:[s.c.forChild(m)],exports:[s.c]})],e)}(),f=function(e,n,t,i){var a,l=arguments.length,s=l<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(l<3?a(s):l>3?a(n,t,s):a(n,t))||s);return l>3&&s&&Object.defineProperty(n,t,s),s},g=function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},b=function(){function e(){}return e.prototype.ngOnInit=function(){},e=f([Object(i.Component)({selector:"app-timeline",template:t("f76E"),styles:[t("S2vr")]}),g("design:paramtypes",[])],e)}(),h=function(e,n,t,i){var a,l=arguments.length,s=l<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(l<3?a(s):l>3?a(n,t,s):a(n,t))||s);return l>3&&s&&Object.defineProperty(n,t,s),s},v=function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},x=function(){function e(){}return e.prototype.ngOnInit=function(){},e=h([Object(i.Component)({selector:"app-notification",template:t("SB8m"),styles:[t("NylC")]}),v("design:paramtypes",[])],e)}(),y=function(e,n,t,i){var a,l=arguments.length,s=l<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(l<3?a(s):l>3?a(n,t,s):a(n,t))||s);return l>3&&s&&Object.defineProperty(n,t,s),s},w=function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},q=function(){function e(){}return e.prototype.ngOnInit=function(){},e=y([Object(i.Component)({selector:"app-chat",template:t("CYm5"),styles:[t("kw5u")]}),w("design:paramtypes",[])],e)}(),R=t("M0ag");t.d(n,"DashboardModule",function(){return O});var k=function(e,n,t,i){var a,l=arguments.length,s=l<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(l<3?a(s):l>3?a(n,t,s):a(n,t))||s);return l>3&&s&&Object.defineProperty(n,t,s),s},O=function(){function e(){}return e=k([Object(i.NgModule)({imports:[a.b,l.c.forRoot(),l.b.forRoot(),u,R.c],declarations:[c,b,x,q]})],e)}()},NylC:function(e,n){e.exports=""},S2vr:function(e,n){e.exports='.timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none; }\n\n.timeline:before {\n  content: " ";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee; }\n\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: " ";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: " ";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); }\n\n.timeline > li > .timeline-panel:before {\n  content: " ";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc; }\n\n.timeline > li > .timeline-panel:after {\n  content: " ";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff; }\n\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999; }\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right; }\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important; }\n\n.timeline-badge.success {\n  background-color: #3f903f !important; }\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important; }\n\n.timeline-badge.danger {\n  background-color: #d9534f !important; }\n\n.timeline-badge.info {\n  background-color: #5bc0de !important; }\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0; }\n\n.timeline-body > p + p {\n  margin-top: 5px; }\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px; }\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px); }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0; }\n  ul.timeline > li > .timeline-panel {\n    float: right; }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0; }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0; } }\n'},SB8m:function(e,n){e.exports='<div class="card-body">\n    <div class="list-group">\n        <a href="#" class="list-group-item clearfix d-block">\n            <i class="fa fa-comment fa-fw"></i> New Comment\n            <span class="float-right text-muted small"><em>4 minutes ago</em></span>\n        </a>\n        <a href="#" class="list-group-item clearfix d-block">\n            <i class="fa fa-twitter fa-fw"></i> 3 New Followers\n            <span class="float-right text-muted small"><em>12 minutes ago</em></span>\n        </a>\n        <a href="#" class="list-group-item clearfix d-block">\n            <i class="fa fa-envelope fa-fw"></i> Message Sent\n            <span class="float-right text-muted small"><em>27 minutes ago</em></span>\n        </a>\n        <a href="#" class="list-group-item clearfix d-block">\n            <i class="fa fa-tasks fa-fw"></i> New Task\n            <span class="float-right text-muted small"><em>43 minutes ago</em></span>\n        </a>\n        <a href="#" class="list-group-item clearfix d-block">\n            <i class="fa fa-upload fa-fw"></i> Server Rebooted\n            <span class="float-right text-muted small"><em>11:32 AM</em></span>\n        </a>\n        <a href="#" class="list-group-item clearfix d-block">\n            <i class="fa fa-bolt fa-fw"></i> Server Crashed!\n            <span class="float-right text-muted small"><em>11:13 AM</em></span>\n        </a>\n        <a href="#" class="list-group-item clearfix d-block">\n            <i class="fa fa-warning fa-fw"></i> Server Not Responding\n            <span class="float-right text-muted small"><em>10:57 AM</em></span>\n        </a>\n        <a href="#" class="list-group-item clearfix d-block">\n            <i class="fa fa-shopping-cart fa-fw"></i> New Order Placed\n            <span class="float-right text-muted small"><em>9:49 AM</em></span>\n        </a>\n        <a href="#" class="list-group-item clearfix d-block">\n            <i class="fa fa-money fa-fw"></i> Payment Received\n            <span class="float-right text-muted small"><em>Yesterday</em></span>\n        </a>\n    </div>\n    \x3c!-- /.list-group --\x3e\n    <a href="#" class="btn btn-default btn-block">View All Alerts</a>\n</div>\n'},f76E:function(e,n){e.exports='<div class="card-body">\n    <ul class="timeline">\n        <li>\n            <div class="timeline-badge"><i class="fa fa-check"></i>\n            </div>\n            <div class="timeline-panel">\n                <div class="timeline-heading">\n                    <h4 class="timeline-title">Lorem ipsum dolor</h4>\n                    <p><small class="text-muted"><i class="fa fa-clock-o"></i> 11 hours ago via Twitter</small>\n                    </p>\n                </div>\n                <div class="timeline-body">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>\n                </div>\n            </div>\n        </li>\n        <li class="timeline-inverted">\n            <div class="timeline-badge warning"><i class="fa fa-credit-card"></i>\n            </div>\n            <div class="timeline-panel">\n                <div class="timeline-heading">\n                    <h4 class="timeline-title">Lorem ipsum dolor</h4>\n                </div>\n                <div class="timeline-body">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class="timeline-badge danger"><i class="fa fa-bomb"></i>\n            </div>\n            <div class="timeline-panel">\n                <div class="timeline-heading">\n                    <h4 class="timeline-title">Lorem ipsum dolor</h4>\n                </div>\n                <div class="timeline-body">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\n                </div>\n            </div>\n        </li>\n        <li class="timeline-inverted">\n            <div class="timeline-panel">\n                <div class="timeline-heading">\n                    <h4 class="timeline-title">Lorem ipsum dolor</h4>\n                </div>\n                <div class="timeline-body">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class="timeline-badge info"><i class="fa fa-save"></i>\n            </div>\n            <div class="timeline-panel">\n                <div class="timeline-heading">\n                    <h4 class="timeline-title">Lorem ipsum dolor</h4>\n                </div>\n                <div class="timeline-body">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\n                    <hr>\n                    <div class="btn-group">\n                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown">\n                            <i class="fa fa-gear"></i>  <span class="caret"></span>\n                        </button>\n                        <ul class="dropdown-menu" role="menu">\n                            <li><a href="#">Action</a>\n                            </li>\n                            <li><a href="#">Another action</a>\n                            </li>\n                            <li><a href="#">Something else here</a>\n                            </li>\n                            <li class="divider"></li>\n                            <li><a href="#">Separated link</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class="timeline-panel">\n                <div class="timeline-heading">\n                    <h4 class="timeline-title">Lorem ipsum dolor</h4>\n                </div>\n                <div class="timeline-body">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\n                </div>\n            </div>\n        </li>\n        <li class="timeline-inverted">\n            <div class="timeline-badge success"><i class="fa fa-graduation-cap"></i>\n            </div>\n            <div class="timeline-panel">\n                <div class="timeline-heading">\n                    <h4 class="timeline-title">Lorem ipsum dolor</h4>\n                </div>\n                <div class="timeline-body">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>\n'},kw5u:function(e,n){e.exports=".chat-panel .chat-dropdown {\n  margin-top: -3px; }\n\n.chat-panel .chat {\n  height: 350px;\n  overflow-y: scroll;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.chat-panel .chat .left img {\n    margin-right: 15px; }\n\n.chat-panel .chat .right img {\n    margin-left: 15px; }\n\n.chat-panel .chat li {\n    margin-bottom: 10px;\n    margin-right: 15px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #999; }\n\n.chat-panel .card-footer input {\n  padding: 3px; }\n"},xO7I:function(e,n){e.exports=""}}]);