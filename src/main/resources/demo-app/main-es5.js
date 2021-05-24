(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! F:\angular\angular-realworld-example-app\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0lwu":
    /*!**********************************************!*\
      !*** ./src/app/core/models/comment.model.ts ***!
      \**********************************************/

    /*! no exports provided */

    /***/
    function lwu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "3tlG":
    /*!****************************************!*\
      !*** ./src/app/shared/layout/index.ts ***!
      \****************************************/

    /*! exports provided: FooterComponent, HeaderComponent */

    /***/
    function tlG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./footer.component */
      "Q+cP");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return _footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"];
      });
      /* harmony import */


      var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header.component */
      "mIkr");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return _header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"];
      });
      /***/

    },

    /***/
    "6H+C":
    /*!********************************************!*\
      !*** ./src/app/core/interceptors/index.ts ***!
      \********************************************/

    /*! exports provided: HttpTokenInterceptor */

    /***/
    function HC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./http.token.interceptor */
      "C5T1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function () {
        return _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__["HttpTokenInterceptor"];
      });
      /***/

    },

    /***/
    "6epW":
    /*!*********************************************!*\
      !*** ./src/app/auth/auth-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: AuthRoutingModule */

    /***/
    function epW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.component */
      "LS6v");
      /* harmony import */


      var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./no-auth-guard.service */
      "VZBc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'login',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"],
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["NoAuthGuard"]]
      }, {
        path: 'register',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"],
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["NoAuthGuard"]]
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
        return new (t || AuthRoutingModule)();
      };

      AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "7iFF":
    /*!*****************************************!*\
      !*** ./src/app/shared/buttons/index.ts ***!
      \*****************************************/

    /*! exports provided: FavoriteButtonComponent, FollowButtonComponent */

    /***/
    function iFF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _favorite_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./favorite-button.component */
      "SXxL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FavoriteButtonComponent", function () {
        return _favorite_button_component__WEBPACK_IMPORTED_MODULE_0__["FavoriteButtonComponent"];
      });
      /* harmony import */


      var _follow_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./follow-button.component */
      "UCte");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FollowButtonComponent", function () {
        return _follow_button_component__WEBPACK_IMPORTED_MODULE_1__["FollowButtonComponent"];
      });
      /***/

    },

    /***/
    "9OZ8":
    /*!****************************************************!*\
      !*** ./src/app/home/home-auth-resolver.service.ts ***!
      \****************************************************/

    /*! exports provided: HomeAuthResolver */

    /***/
    function OZ8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeAuthResolver", function () {
        return HomeAuthResolver;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core */
      "ey9i");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeAuthResolver = /*#__PURE__*/function () {
        function HomeAuthResolver(router, userService) {
          _classCallCheck(this, HomeAuthResolver);

          this.router = router;
          this.userService = userService;
        }

        _createClass(HomeAuthResolver, [{
          key: "resolve",
          value: function resolve(route, state) {
            return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }]);

        return HomeAuthResolver;
      }();

      HomeAuthResolver.ɵfac = function HomeAuthResolver_Factory(t) {
        return new (t || HomeAuthResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
      };

      HomeAuthResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: HomeAuthResolver,
        factory: HomeAuthResolver.ɵfac
      });
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core */
      "ey9i");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_show_authed_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/show-authed.directive */
      "TYhg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/article-helpers/article-list.component */
      "juF/");

      function HomeComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "conduit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "A place to share your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " knowledge.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_a_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_a_23_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var tag_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.setListTo("all", {
              tag: tag_r2
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tag_r2, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(router, tagsService, userService) {
          _classCallCheck(this, HomeComponent);

          this.router = router;
          this.tagsService = tagsService;
          this.userService = userService;
          this.listConfig = {
            type: 'all',
            filters: {}
          };
          this.tags = [];
          this.tagsLoaded = false;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userService.isAuthenticated.subscribe(function (authenticated) {
              _this.isAuthenticated = authenticated; // set the article list accordingly

              if (authenticated) {
                _this.setListTo('feed');
              } else {
                _this.setListTo('all');
              }
            });
            this.tagsService.getAll().subscribe(function (tags) {
              _this.tags = tags;
              _this.tagsLoaded = true;
            });
          }
        }, {
          key: "setListTo",
          value: function setListTo() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            // If feed is requested but user is not authenticated, redirect to login
            if (type === 'feed' && !this.isAuthenticated) {
              this.router.navigateByUrl('/login');
              return;
            } // Otherwise, set the list object


            this.listConfig = {
              type: type,
              filters: filters
            };
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__["TagsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home-page"]],
        decls: 28,
        vars: 14,
        consts: [[1, "home-page"], ["class", "banner", 4, "appShowAuthed"], [1, "container", "page"], [1, "row"], [1, "col-md-9"], [1, "feed-toggle"], [1, "nav", "nav-pills", "outline-active"], [1, "nav-item"], [1, "nav-link", 3, "ngClass", "click"], [1, "nav-item", 3, "hidden"], [1, "nav-link", "active"], [1, "ion-pound"], [3, "limit", "config"], [1, "col-md-3"], [1, "sidebar"], [1, "tag-list"], ["class", "tag-default tag-pill", 3, "click", 4, "ngFor", "ngForOf"], [3, "hidden"], [1, "banner"], [1, "container"], [1, "logo-font"], [1, "tag-default", "tag-pill", 3, "click"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 9, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_8_listener() {
              return ctx.setListTo("feed");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Your Feed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_11_listener() {
              return ctx.setListTo("all");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Global Feed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "app-article-list", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Popular Tags");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, HomeComponent_a_23_Template, 2, 1, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Loading tags... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " No tags are here... yet. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appShowAuthed", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx.listConfig.type === "feed"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ctx.listConfig.type === "all" && !ctx.listConfig.filters.tag));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.listConfig.filters.tag);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.listConfig.filters.tag, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("limit", 10)("config", ctx.listConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tags);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.tagsLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.tagsLoaded || ctx.tags.length > 0);
          }
        },
        directives: [_shared_show_authed_directive__WEBPACK_IMPORTED_MODULE_3__["ShowAuthedDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_5__["ArticleListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: [".nav-link[_ngcontent-%COMP%] {\r\n  cursor:pointer;\r\n}\r\n\r\n.tag-pill[_ngcontent-%COMP%]{\r\n  cursor:pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi50YWctcGlsbHtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomeRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
        return HomeRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.component */
      "9vUh");
      /* harmony import */


      var _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home-auth-resolver.service */
      "9OZ8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        resolve: {
          isAuthenticated: _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_2__["HomeAuthResolver"]
        }
      }];

      var HomeRoutingModule = function HomeRoutingModule() {
        _classCallCheck(this, HomeRoutingModule);
      };

      HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      };

      HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: HomeRoutingModule
      });
      HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `angular-cli.json`.


      var environment = {
        production: false,
        api_url: 'https://conduit.productionready.io/api'
      };
      /***/
    },

    /***/
    "C5T1":
    /*!*************************************************************!*\
      !*** ./src/app/core/interceptors/http.token.interceptor.ts ***!
      \*************************************************************/

    /*! exports provided: HttpTokenInterceptor */

    /***/
    function C5T1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function () {
        return HttpTokenInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services */
      "dJ3e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HttpTokenInterceptor = /*#__PURE__*/function () {
        function HttpTokenInterceptor(jwtService) {
          _classCallCheck(this, HttpTokenInterceptor);

          this.jwtService = jwtService;
        }

        _createClass(HttpTokenInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var headersConfig = {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            };
            var token = this.jwtService.getToken();

            if (token) {
              headersConfig['Authorization'] = "Token ".concat(token);
            }

            var request = req.clone({
              setHeaders: headersConfig
            });
            return next.handle(request);
          }
        }]);

        return HttpTokenInterceptor;
      }();

      HttpTokenInterceptor.ɵfac = function HttpTokenInterceptor_Factory(t) {
        return new (t || HttpTokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__["JwtService"]));
      };

      HttpTokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: HttpTokenInterceptor,
        factory: HttpTokenInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "E0um":
    /*!**********************************************************!*\
      !*** ./src/app/core/models/article-list-config.model.ts ***!
      \**********************************************************/

    /*! no exports provided */

    /***/
    function E0um(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "HatX":
    /*!***************************************************!*\
      !*** ./src/app/core/services/comments.service.ts ***!
      \***************************************************/

    /*! exports provided: CommentsService */

    /***/
    function HatX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentsService", function () {
        return CommentsService;
      });
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api.service */
      "qc5V");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CommentsService = /*#__PURE__*/function () {
        function CommentsService(apiService) {
          _classCallCheck(this, CommentsService);

          this.apiService = apiService;
        }

        _createClass(CommentsService, [{
          key: "add",
          value: function add(slug, payload) {
            return this.apiService.post("/articles/".concat(slug, "/comments"), {
              comment: {
                body: payload
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              return data.comment;
            }));
          }
        }, {
          key: "getAll",
          value: function getAll(slug) {
            return this.apiService.get("/articles/".concat(slug, "/comments")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              return data.comments;
            }));
          }
        }, {
          key: "destroy",
          value: function destroy(commentId, articleSlug) {
            return this.apiService["delete"]("/articles/".concat(articleSlug, "/comments/").concat(commentId));
          }
        }]);

        return CommentsService;
      }();

      CommentsService.ɵfac = function CommentsService_Factory(t) {
        return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]));
      };

      CommentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: CommentsService,
        factory: CommentsService.ɵfac
      });
      /***/
    },

    /***/
    "IDn2":
    /*!******************************************************************!*\
      !*** ./src/app/shared/article-helpers/article-meta.component.ts ***!
      \******************************************************************/

    /*! exports provided: ArticleMetaComponent */

    /***/
    function IDn2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticleMetaComponent", function () {
        return ArticleMetaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a1) {
        return ["/profile", a1];
      };

      var _c1 = ["*"];

      var ArticleMetaComponent = function ArticleMetaComponent() {
        _classCallCheck(this, ArticleMetaComponent);
      };

      ArticleMetaComponent.ɵfac = function ArticleMetaComponent_Factory(t) {
        return new (t || ArticleMetaComponent)();
      };

      ArticleMetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ArticleMetaComponent,
        selectors: [["app-article-meta"]],
        inputs: {
          article: "article"
        },
        ngContentSelectors: _c1,
        decls: 10,
        vars: 12,
        consts: [[1, "article-meta"], [3, "routerLink"], [3, "src"], [1, "info"], [1, "author", 3, "routerLink"], [1, "date"]],
        template: function ArticleMetaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.article.author.username));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.article.author.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.article.author.username));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.article.author.username, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx.article.createdAt, "longDate"), " ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "LS6v":
    /*!****************************************!*\
      !*** ./src/app/auth/auth.component.ts ***!
      \****************************************/

    /*! exports provided: AuthComponent */

    /***/
    function LS6v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core */
      "ey9i");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_list_errors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/list-errors.component */
      "vWSW");

      var _c0 = function _c0() {
        return ["/login"];
      };

      function AuthComponent_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Have an account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
        }
      }

      var _c1 = function _c1() {
        return ["/register"];
      };

      function AuthComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Need an account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1));
        }
      }

      function AuthComponent_input_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 15);
        }
      }

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent(route, router, userService, fb) {
          _classCallCheck(this, AuthComponent);

          this.route = route;
          this.router = router;
          this.userService = userService;
          this.fb = fb;
          this.authType = '';
          this.title = '';
          this.errors = {
            errors: {}
          };
          this.isSubmitting = false; // use FormBuilder to create a form group

          this.authForm = this.fb.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
          });
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.route.url.subscribe(function (data) {
              // Get the last piece of the URL (it's either 'login' or 'register')
              _this2.authType = data[data.length - 1].path; // Set a title for the page accordingly

              _this2.title = _this2.authType === 'login' ? 'Sign in' : 'Sign up'; // add form control for username if this is the register page

              if (_this2.authType === 'register') {
                _this2.authForm.addControl('username', new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]());
              }
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this3 = this;

            this.isSubmitting = true;
            this.errors = {
              errors: {}
            };
            var credentials = this.authForm.value;
            this.userService.attemptAuth(this.authType, credentials).subscribe(function (data) {
              return _this3.router.navigateByUrl('/');
            }, function (err) {
              _this3.errors = err;
              _this3.isSubmitting = false;
            });
          }
        }]);

        return AuthComponent;
      }();

      AuthComponent.ɵfac = function AuthComponent_Factory(t) {
        return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AuthComponent,
        selectors: [["app-auth-page"]],
        decls: 20,
        vars: 9,
        consts: [[1, "auth-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "routerLink", 4, "ngIf"], [3, "errors"], [3, "formGroup", "ngSubmit"], [3, "disabled"], [1, "form-group"], ["formControlName", "username", "placeholder", "Username", "class", "form-control form-control-lg", "type", "text", 4, "ngIf"], ["formControlName", "email", "placeholder", "Email", "type", "text", 1, "form-control", "form-control-lg"], ["formControlName", "password", "placeholder", "Password", "type", "password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right", 3, "disabled"], [3, "routerLink"], ["formControlName", "username", "placeholder", "Username", "type", "text", 1, "form-control", "form-control-lg"]],
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AuthComponent_a_7_Template, 2, 2, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AuthComponent_a_8_Template, 2, 2, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-list-errors", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_10_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "fieldset", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "fieldset", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AuthComponent_input_13_Template, 1, 0, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "fieldset", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "fieldset", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authType == "register");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authType == "login");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("errors", ctx.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.authForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isSubmitting);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authType == "register");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_list_errors_component__WEBPACK_IMPORTED_MODULE_5__["ListErrorsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "M0ag":
    /*!*********************************!*\
      !*** ./src/app/shared/index.ts ***!
      \*********************************/

    /*! exports provided: ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent, FavoriteButtonComponent, FollowButtonComponent, FooterComponent, HeaderComponent, ListErrorsComponent, SharedModule, ShowAuthedDirective */

    /***/
    function M0ag(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _article_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./article-helpers */
      "epnY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function () {
        return _article_helpers__WEBPACK_IMPORTED_MODULE_0__["ArticleListComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ArticleMetaComponent", function () {
        return _article_helpers__WEBPACK_IMPORTED_MODULE_0__["ArticleMetaComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function () {
        return _article_helpers__WEBPACK_IMPORTED_MODULE_0__["ArticlePreviewComponent"];
      });
      /* harmony import */


      var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./buttons */
      "7iFF");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FavoriteButtonComponent", function () {
        return _buttons__WEBPACK_IMPORTED_MODULE_1__["FavoriteButtonComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FollowButtonComponent", function () {
        return _buttons__WEBPACK_IMPORTED_MODULE_1__["FollowButtonComponent"];
      });
      /* harmony import */


      var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout */
      "3tlG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return _layout__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return _layout__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"];
      });
      /* harmony import */


      var _list_errors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-errors.component */
      "vWSW");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ListErrorsComponent", function () {
        return _list_errors_component__WEBPACK_IMPORTED_MODULE_3__["ListErrorsComponent"];
      });
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared.module */
      "PCNd");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"];
      });
      /* harmony import */


      var _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./show-authed.directive */
      "TYhg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ShowAuthedDirective", function () {
        return _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__["ShowAuthedDirective"];
      });
      /***/

    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _article_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./article-helpers */
      "epnY");
      /* harmony import */


      var _buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./buttons */
      "7iFF");
      /* harmony import */


      var _list_errors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./list-errors.component */
      "vWSW");
      /* harmony import */


      var _show_authed_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./show-authed.directive */
      "TYhg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_article_helpers__WEBPACK_IMPORTED_MODULE_4__["ArticleListComponent"], _article_helpers__WEBPACK_IMPORTED_MODULE_4__["ArticleMetaComponent"], _article_helpers__WEBPACK_IMPORTED_MODULE_4__["ArticlePreviewComponent"], _buttons__WEBPACK_IMPORTED_MODULE_5__["FavoriteButtonComponent"], _buttons__WEBPACK_IMPORTED_MODULE_5__["FollowButtonComponent"], _list_errors_component__WEBPACK_IMPORTED_MODULE_6__["ListErrorsComponent"], _show_authed_directive__WEBPACK_IMPORTED_MODULE_7__["ShowAuthedDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_article_helpers__WEBPACK_IMPORTED_MODULE_4__["ArticleListComponent"], _article_helpers__WEBPACK_IMPORTED_MODULE_4__["ArticleMetaComponent"], _article_helpers__WEBPACK_IMPORTED_MODULE_4__["ArticlePreviewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _buttons__WEBPACK_IMPORTED_MODULE_5__["FavoriteButtonComponent"], _buttons__WEBPACK_IMPORTED_MODULE_5__["FollowButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _list_errors_component__WEBPACK_IMPORTED_MODULE_6__["ListErrorsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _show_authed_directive__WEBPACK_IMPORTED_MODULE_7__["ShowAuthedDirective"]]
        });
      })();
      /***/

    },

    /***/
    "PQuL":
    /*!*******************************************!*\
      !*** ./src/app/core/models/user.model.ts ***!
      \*******************************************/

    /*! no exports provided */

    /***/
    function PQuL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "Q+cP":
    /*!***************************************************!*\
      !*** ./src/app/shared/layout/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function QCP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.today = Date.now();
      };

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-layout-footer"]],
        decls: 10,
        vars: 4,
        consts: [[1, "container"], ["routerLink", "/", 1, "logo-font"], [1, "attribution"], ["href", "https://thinkster.io"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "conduit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Thinkster");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ". Code licensed under MIT. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx.today, "yyyy"), ". An interactive learning project from ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Rs8g":
    /*!**********************************************!*\
      !*** ./src/app/core/services/jwt.service.ts ***!
      \**********************************************/

    /*! exports provided: JwtService */

    /***/
    function Rs8g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtService", function () {
        return JwtService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var JwtService = /*#__PURE__*/function () {
        function JwtService() {
          _classCallCheck(this, JwtService);
        }

        _createClass(JwtService, [{
          key: "getToken",
          value: function getToken() {
            return window.localStorage['jwtToken'];
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            window.localStorage['jwtToken'] = token;
          }
        }, {
          key: "destroyToken",
          value: function destroyToken() {
            window.localStorage.removeItem('jwtToken');
          }
        }]);

        return JwtService;
      }();

      JwtService.ɵfac = function JwtService_Factory(t) {
        return new (t || JwtService)();
      };

      JwtService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JwtService,
        factory: JwtService.ɵfac
      });
      /***/
    },

    /***/
    "SXxL":
    /*!*************************************************************!*\
      !*** ./src/app/shared/buttons/favorite-button.component.ts ***!
      \*************************************************************/

    /*! exports provided: FavoriteButtonComponent */

    /***/
    function SXxL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoriteButtonComponent", function () {
        return FavoriteButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core */
      "ey9i");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "disabled": a0,
          "btn-outline-primary": a1,
          "btn-primary": a2
        };
      };

      var _c1 = ["*"];

      var FavoriteButtonComponent = /*#__PURE__*/function () {
        function FavoriteButtonComponent(articlesService, router, userService) {
          _classCallCheck(this, FavoriteButtonComponent);

          this.articlesService = articlesService;
          this.router = router;
          this.userService = userService;
          this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isSubmitting = false;
        }

        _createClass(FavoriteButtonComponent, [{
          key: "toggleFavorite",
          value: function toggleFavorite() {
            var _this4 = this;

            this.isSubmitting = true;
            this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (authenticated) {
              // Not authenticated? Push to login screen
              if (!authenticated) {
                _this4.router.navigateByUrl('/login');

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
              } // Favorite the article if it isn't favorited yet


              if (!_this4.article.favorited) {
                return _this4.articlesService.favorite(_this4.article.slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
                  _this4.isSubmitting = false;

                  _this4.toggle.emit(true);
                }, function (err) {
                  return _this4.isSubmitting = false;
                })); // Otherwise, unfavorite the article
              } else {
                return _this4.articlesService.unfavorite(_this4.article.slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
                  _this4.isSubmitting = false;

                  _this4.toggle.emit(false);
                }, function (err) {
                  return _this4.isSubmitting = false;
                }));
              }
            })).subscribe();
          }
        }]);

        return FavoriteButtonComponent;
      }();

      FavoriteButtonComponent.ɵfac = function FavoriteButtonComponent_Factory(t) {
        return new (t || FavoriteButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      FavoriteButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FavoriteButtonComponent,
        selectors: [["app-favorite-button"]],
        inputs: {
          article: "article"
        },
        outputs: {
          toggle: "toggle"
        },
        ngContentSelectors: _c1,
        decls: 3,
        vars: 5,
        consts: [[1, "btn", "btn-sm", 3, "ngClass", "click"], [1, "ion-heart"]],
        template: function FavoriteButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteButtonComponent_Template_button_click_0_listener() {
              return ctx.toggleFavorite();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c0, ctx.isSubmitting, !ctx.article.favorited, ctx.article.favorited));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core */
      "ey9i");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/layout/header.component */
      "mIkr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_layout_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/layout/footer.component */
      "Q+cP");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(userService) {
          _classCallCheck(this, AppComponent);

          this.userService = userService;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userService.populate();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__["UserService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-layout-footer");
          }
        },
        directives: [_shared_layout_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_layout_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "TYhg":
    /*!*************************************************!*\
      !*** ./src/app/shared/show-authed.directive.ts ***!
      \*************************************************/

    /*! exports provided: ShowAuthedDirective */

    /***/
    function TYhg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowAuthedDirective", function () {
        return ShowAuthedDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core */
      "ey9i");

      var ShowAuthedDirective = /*#__PURE__*/function () {
        function ShowAuthedDirective(templateRef, userService, viewContainer) {
          _classCallCheck(this, ShowAuthedDirective);

          this.templateRef = templateRef;
          this.userService = userService;
          this.viewContainer = viewContainer;
        }

        _createClass(ShowAuthedDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.userService.isAuthenticated.subscribe(function (isAuthenticated) {
              if (isAuthenticated && _this5.condition || !isAuthenticated && !_this5.condition) {
                _this5.viewContainer.createEmbeddedView(_this5.templateRef);
              } else {
                _this5.viewContainer.clear();
              }
            });
          }
        }, {
          key: "appShowAuthed",
          set: function set(condition) {
            this.condition = condition;
          }
        }]);

        return ShowAuthedDirective;
      }();

      ShowAuthedDirective.ɵfac = function ShowAuthedDirective_Factory(t) {
        return new (t || ShowAuthedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
      };

      ShowAuthedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ShowAuthedDirective,
        selectors: [["", "appShowAuthed", ""]],
        inputs: {
          appShowAuthed: "appShowAuthed"
        }
      });
      /***/
    },

    /***/
    "UCte":
    /*!***********************************************************!*\
      !*** ./src/app/shared/buttons/follow-button.component.ts ***!
      \***********************************************************/

    /*! exports provided: FollowButtonComponent */

    /***/
    function UCte(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FollowButtonComponent", function () {
        return FollowButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core */
      "ey9i");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "disabled": a0,
          "btn-outline-secondary": a1,
          "btn-secondary": a2
        };
      };

      var FollowButtonComponent = /*#__PURE__*/function () {
        function FollowButtonComponent(profilesService, router, userService) {
          _classCallCheck(this, FollowButtonComponent);

          this.profilesService = profilesService;
          this.router = router;
          this.userService = userService;
          this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isSubmitting = false;
        }

        _createClass(FollowButtonComponent, [{
          key: "toggleFollowing",
          value: function toggleFollowing() {
            var _this6 = this;

            this.isSubmitting = true; // TODO: remove nested subscribes, use mergeMap

            this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (authenticated) {
              // Not authenticated? Push to login screen
              if (!authenticated) {
                _this6.router.navigateByUrl('/login');

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
              } // Follow this profile if we aren't already


              if (!_this6.profile.following) {
                return _this6.profilesService.follow(_this6.profile.username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
                  _this6.isSubmitting = false;

                  _this6.toggle.emit(true);
                }, function (err) {
                  return _this6.isSubmitting = false;
                })); // Otherwise, unfollow this profile
              } else {
                return _this6.profilesService.unfollow(_this6.profile.username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
                  _this6.isSubmitting = false;

                  _this6.toggle.emit(false);
                }, function (err) {
                  return _this6.isSubmitting = false;
                }));
              }
            })).subscribe();
          }
        }]);

        return FollowButtonComponent;
      }();

      FollowButtonComponent.ɵfac = function FollowButtonComponent_Factory(t) {
        return new (t || FollowButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_2__["ProfilesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      FollowButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FollowButtonComponent,
        selectors: [["app-follow-button"]],
        inputs: {
          profile: "profile"
        },
        outputs: {
          toggle: "toggle"
        },
        decls: 3,
        vars: 7,
        consts: [[1, "btn", "btn-sm", "action-btn", 3, "ngClass", "click"], [1, "ion-plus-round"]],
        template: function FollowButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FollowButtonComponent_Template_button_click_0_listener() {
              return ctx.toggleFollowing();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, ctx.isSubmitting, !ctx.profile.following, ctx.profile.following));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \xA0 ", ctx.profile.following ? "Unfollow" : "Follow", " ", ctx.profile.username, "\n");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "VZBc":
    /*!***********************************************!*\
      !*** ./src/app/auth/no-auth-guard.service.ts ***!
      \***********************************************/

    /*! exports provided: NoAuthGuard */

    /***/
    function VZBc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function () {
        return NoAuthGuard;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core */
      "ey9i");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NoAuthGuard = /*#__PURE__*/function () {
        function NoAuthGuard(router, userService) {
          _classCallCheck(this, NoAuthGuard);

          this.router = router;
          this.userService = userService;
        }

        _createClass(NoAuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isAuth) {
              return !isAuth;
            }));
          }
        }]);

        return NoAuthGuard;
      }();

      NoAuthGuard.ɵfac = function NoAuthGuard_Factory(t) {
        return new (t || NoAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
      };

      NoAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: NoAuthGuard,
        factory: NoAuthGuard.ɵfac
      });
      /***/
    },

    /***/
    "X6P6":
    /*!***************************************************!*\
      !*** ./src/app/core/services/articles.service.ts ***!
      \***************************************************/

    /*! exports provided: ArticlesService */

    /***/
    function X6P6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticlesService", function () {
        return ArticlesService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "qc5V");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ArticlesService = /*#__PURE__*/function () {
        function ArticlesService(apiService) {
          _classCallCheck(this, ArticlesService);

          this.apiService = apiService;
        }

        _createClass(ArticlesService, [{
          key: "query",
          value: function query(config) {
            // Convert any filters over to Angular's URLSearchParams
            var params = {};
            Object.keys(config.filters).forEach(function (key) {
              params[key] = config.filters[key];
            });
            return this.apiService.get('/articles' + (config.type === 'feed' ? '/feed' : ''), new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
              fromObject: params
            }));
          }
        }, {
          key: "get",
          value: function get(slug) {
            return this.apiService.get('/articles/' + slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              return data.article;
            }));
          }
        }, {
          key: "destroy",
          value: function destroy(slug) {
            return this.apiService["delete"]('/articles/' + slug);
          }
        }, {
          key: "save",
          value: function save(article) {
            // If we're updating an existing article
            if (article.slug) {
              return this.apiService.put('/articles/' + article.slug, {
                article: article
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
                return data.article;
              })); // Otherwise, create a new article
            } else {
              return this.apiService.post('/articles/', {
                article: article
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
                return data.article;
              }));
            }
          }
        }, {
          key: "favorite",
          value: function favorite(slug) {
            return this.apiService.post('/articles/' + slug + '/favorite');
          }
        }, {
          key: "unfavorite",
          value: function unfavorite(slug) {
            return this.apiService["delete"]('/articles/' + slug + '/favorite');
          }
        }]);

        return ArticlesService;
      }();

      ArticlesService.ɵfac = function ArticlesService_Factory(t) {
        return new (t || ArticlesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      ArticlesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: ArticlesService,
        factory: ArticlesService.ɵfac
      });
      /***/
    },

    /***/
    "XWHW":
    /*!**********************************************!*\
      !*** ./src/app/core/models/article.model.ts ***!
      \**********************************************/

    /*! no exports provided */

    /***/
    function XWHW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "YOe5":
    /*!***************************************************!*\
      !*** ./src/app/core/services/profiles.service.ts ***!
      \***************************************************/

    /*! exports provided: ProfilesService */

    /***/
    function YOe5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilesService", function () {
        return ProfilesService;
      });
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api.service */
      "qc5V");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfilesService = /*#__PURE__*/function () {
        function ProfilesService(apiService) {
          _classCallCheck(this, ProfilesService);

          this.apiService = apiService;
        }

        _createClass(ProfilesService, [{
          key: "get",
          value: function get(username) {
            return this.apiService.get('/profiles/' + username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              return data.profile;
            }));
          }
        }, {
          key: "follow",
          value: function follow(username) {
            return this.apiService.post('/profiles/' + username + '/follow');
          }
        }, {
          key: "unfollow",
          value: function unfollow(username) {
            return this.apiService["delete"]('/profiles/' + username + '/follow');
          }
        }]);

        return ProfilesService;
      }();

      ProfilesService.ɵfac = function ProfilesService_Factory(t) {
        return new (t || ProfilesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]));
      };

      ProfilesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ProfilesService,
        factory: ProfilesService.ɵfac
      });
      /***/
    },

    /***/
    "Yj9t":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /*! exports provided: AuthModule */

    /***/
    function Yj9t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.component */
      "LS6v");
      /* harmony import */


      var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./no-auth-guard.service */
      "VZBc");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared */
      "M0ag");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth-routing.module */
      "6epW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵfac = function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["NoAuthGuard"]],
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_0__["AuthComponent"]],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth/auth.module */
      "Yj9t");
      /* harmony import */


      var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home/home.module */
      "ct+p");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared */
      "M0ag");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./core/core.module */
      "pKmL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__["AuthModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _shared__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _shared__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__["AuthModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "b1ZQ":
    /*!*********************************************!*\
      !*** ./src/app/core/models/errors.model.ts ***!
      \*********************************************/

    /*! no exports provided */

    /***/
    function b1ZQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "bN3y":
    /*!**********************************************!*\
      !*** ./src/app/core/models/profile.model.ts ***!
      \**********************************************/

    /*! no exports provided */

    /***/
    function bN3y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomeModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.component */
      "9vUh");
      /* harmony import */


      var _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-auth-resolver.service */
      "9OZ8");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared */
      "M0ag");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.ɵfac = function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      };

      HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
      HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [_home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_1__["HomeAuthResolver"]],
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, {
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "dJ3e":
    /*!****************************************!*\
      !*** ./src/app/core/services/index.ts ***!
      \****************************************/

    /*! exports provided: ApiService, ArticlesService, AuthGuard, CommentsService, JwtService, ProfilesService, TagsService, UserService */

    /***/
    function dJ3e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api.service */
      "qc5V");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"];
      });
      /* harmony import */


      var _articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./articles.service */
      "X6P6");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ArticlesService", function () {
        return _articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"];
      });
      /* harmony import */


      var _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth-guard.service */
      "ecC8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"];
      });
      /* harmony import */


      var _comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./comments.service */
      "HatX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CommentsService", function () {
        return _comments_service__WEBPACK_IMPORTED_MODULE_3__["CommentsService"];
      });
      /* harmony import */


      var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./jwt.service */
      "Rs8g");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "JwtService", function () {
        return _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"];
      });
      /* harmony import */


      var _profiles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profiles.service */
      "YOe5");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ProfilesService", function () {
        return _profiles_service__WEBPACK_IMPORTED_MODULE_5__["ProfilesService"];
      });
      /* harmony import */


      var _tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tags.service */
      "uOqR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TagsService", function () {
        return _tags_service__WEBPACK_IMPORTED_MODULE_6__["TagsService"];
      });
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user.service */
      "f4AX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"];
      });
      /***/

    },

    /***/
    "ecC8":
    /*!*****************************************************!*\
      !*** ./src/app/core/services/auth-guard.service.ts ***!
      \*****************************************************/

    /*! exports provided: AuthGuard */

    /***/
    function ecC8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user.service */
      "f4AX");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, userService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.userService = userService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac
      });
      /***/
    },

    /***/
    "epnY":
    /*!*************************************************!*\
      !*** ./src/app/shared/article-helpers/index.ts ***!
      \*************************************************/

    /*! exports provided: ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent */

    /***/
    function epnY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _article_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./article-list.component */
      "juF/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function () {
        return _article_list_component__WEBPACK_IMPORTED_MODULE_0__["ArticleListComponent"];
      });
      /* harmony import */


      var _article_meta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./article-meta.component */
      "IDn2");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ArticleMetaComponent", function () {
        return _article_meta_component__WEBPACK_IMPORTED_MODULE_1__["ArticleMetaComponent"];
      });
      /* harmony import */


      var _article_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./article-preview.component */
      "mzfZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function () {
        return _article_preview_component__WEBPACK_IMPORTED_MODULE_2__["ArticlePreviewComponent"];
      });
      /***/

    },

    /***/
    "ey9i":
    /*!*******************************!*\
      !*** ./src/app/core/index.ts ***!
      \*******************************/

    /*! exports provided: CoreModule, ApiService, ArticlesService, AuthGuard, CommentsService, JwtService, ProfilesService, TagsService, UserService, HttpTokenInterceptor */

    /***/
    function ey9i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core.module */
      "pKmL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"];
      });
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services */
      "dJ3e");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["ApiService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ArticlesService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CommentsService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["CommentsService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "JwtService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["JwtService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ProfilesService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["ProfilesService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TagsService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["TagsService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["UserService"];
      });
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./models */
      "sKXY");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _interceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./interceptors */
      "6H+C");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function () {
        return _interceptors__WEBPACK_IMPORTED_MODULE_3__["HttpTokenInterceptor"];
      });
      /***/

    },

    /***/
    "f4AX":
    /*!***********************************************!*\
      !*** ./src/app/core/services/user.service.ts ***!
      \***********************************************/

    /*! exports provided: UserService */

    /***/
    function f4AX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./api.service */
      "qc5V");
      /* harmony import */


      var _jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./jwt.service */
      "Rs8g");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserService = /*#__PURE__*/function () {
        function UserService(apiService, http, jwtService) {
          _classCallCheck(this, UserService);

          this.apiService = apiService;
          this.http = http;
          this.jwtService = jwtService;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.currentUser = this.currentUserSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
          this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
          this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
        } // Verify JWT in localstorage with server & load user's info.
        // This runs once on application startup.


        _createClass(UserService, [{
          key: "populate",
          value: function populate() {
            var _this7 = this;

            // If JWT detected, attempt to get & store user's info
            if (this.jwtService.getToken()) {
              this.apiService.get('/user').subscribe(function (data) {
                return _this7.setAuth(data.user);
              }, function (err) {
                return _this7.purgeAuth();
              });
            } else {
              // Remove any potential remnants of previous auth states
              this.purgeAuth();
            }
          }
        }, {
          key: "setAuth",
          value: function setAuth(user) {
            // Save JWT sent from server in localstorage
            this.jwtService.saveToken(user.token); // Set current user data into observable

            this.currentUserSubject.next(user); // Set isAuthenticated to true

            this.isAuthenticatedSubject.next(true);
          }
        }, {
          key: "purgeAuth",
          value: function purgeAuth() {
            // Remove JWT from localstorage
            this.jwtService.destroyToken(); // Set current user to an empty object

            this.currentUserSubject.next({}); // Set auth status to false

            this.isAuthenticatedSubject.next(false);
          }
        }, {
          key: "attemptAuth",
          value: function attemptAuth(type, credentials) {
            var _this8 = this;

            var route = type === 'login' ? '/login' : '';
            return this.apiService.post('/users' + route, {
              user: credentials
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              _this8.setAuth(data.user);

              return data;
            }));
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            return this.currentUserSubject.value;
          } // Update the user on the server (email, pass, etc)

        }, {
          key: "update",
          value: function update(user) {
            var _this9 = this;

            return this.apiService.put('/user', {
              user: user
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              // Update the currentUser observable
              _this9.currentUserSubject.next(data.user);

              return data.user;
            }));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_jwt_service__WEBPACK_IMPORTED_MODULE_3__["JwtService"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac
      });
      /***/
    },

    /***/
    "juF/":
    /*!******************************************************************!*\
      !*** ./src/app/shared/article-helpers/article-list.component.ts ***!
      \******************************************************************/

    /*! exports provided: ArticleListComponent */

    /***/
    function juF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function () {
        return ArticleListComponent;
      });
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core */
      "ey9i");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _article_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./article-preview.component */
      "mzfZ");

      function ArticleListComponent_app_article_preview_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-article-preview", 5);
        }

        if (rf & 2) {
          var article_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("article", article_r2);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function ArticleListComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArticleListComponent_li_7_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var pageNumber_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.setPageTo(pageNumber_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pageNumber_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, pageNumber_r3 === ctx_r1.currentPage));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pageNumber_r3);
        }
      }

      var ArticleListComponent = /*#__PURE__*/function () {
        function ArticleListComponent(articlesService) {
          _classCallCheck(this, ArticleListComponent);

          this.articlesService = articlesService;
          this.loading = false;
          this.currentPage = 1;
          this.totalPages = [1];
        }

        _createClass(ArticleListComponent, [{
          key: "config",
          set: function set(config) {
            if (config) {
              this.query = config;
              this.currentPage = 1;
              this.runQuery();
            }
          }
        }, {
          key: "setPageTo",
          value: function setPageTo(pageNumber) {
            this.currentPage = pageNumber;
            this.runQuery();
          }
        }, {
          key: "runQuery",
          value: function runQuery() {
            var _this10 = this;

            this.loading = true;
            this.results = []; // Create limit and offset filter (if necessary)

            if (this.limit) {
              this.query.filters.limit = this.limit;
              this.query.filters.offset = this.limit * (this.currentPage - 1);
            }

            this.articlesService.query(this.query).subscribe(function (data) {
              _this10.loading = false;
              _this10.results = data.articles; // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/

              _this10.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / _this10.limit)), function (val, index) {
                return index + 1;
              });
            });
          }
        }]);

        return ArticleListComponent;
      }();

      ArticleListComponent.ɵfac = function ArticleListComponent_Factory(t) {
        return new (t || ArticleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__["ArticlesService"]));
      };

      ArticleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ArticleListComponent,
        selectors: [["app-article-list"]],
        inputs: {
          limit: "limit",
          config: "config"
        },
        decls: 8,
        vars: 5,
        consts: [[3, "article", 4, "ngFor", "ngForOf"], [1, "app-article-preview", 3, "hidden"], [3, "hidden"], [1, "pagination"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "article"], [1, "page-item", 3, "ngClass", "click"], [1, "page-link"]],
        template: function ArticleListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ArticleListComponent_app_article_preview_0_Template, 1, 1, "app-article-preview", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Loading articles...\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " No articles are here... yet.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ArticleListComponent_li_7_Template, 3, 4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.results);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.loading || ctx.results.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.loading || ctx.totalPages.length <= 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.totalPages);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _article_preview_component__WEBPACK_IMPORTED_MODULE_3__["ArticlePreviewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: [".page-link[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJhcnRpY2xlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWxpbmsge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "mIkr":
    /*!***************************************************!*\
      !*** ./src/app/shared/layout/header.component.ts ***!
      \***************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function mIkr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core */
      "ey9i");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _show_authed_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../show-authed.directive */
      "TYhg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HeaderComponent_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Sign in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Sign up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_ul_5_img_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 16);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.currentUser.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      var _c0 = function _c0() {
        return {
          exact: true
        };
      };

      var _c1 = function _c1(a1) {
        return ["/profile", a1];
      };

      function HeaderComponent_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\xA0New Article ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\xA0Settings ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HeaderComponent_ul_5_img_14_Template, 1, 1, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx_r1.currentUser.username));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.currentUser.username, " ");
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(userService) {
          _classCallCheck(this, HeaderComponent);

          this.userService = userService;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.userService.currentUser.subscribe(function (userData) {
              _this11.currentUser = userData;
            });
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__["UserService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-layout-header"]],
        decls: 6,
        vars: 2,
        consts: [[1, "navbar", "navbar-light"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["class", "nav navbar-nav pull-xs-right", 4, "appShowAuthed"], [1, "nav", "navbar-nav", "pull-xs-right"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/register", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/editor", "routerLinkActive", "active", 1, "nav-link"], [1, "ion-compose"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "nav-link"], [1, "ion-gear-a"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["class", "user-pic", 3, "src", 4, "ngIf"], [1, "user-pic", 3, "src"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "conduit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HeaderComponent_ul_4_Template, 10, 0, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HeaderComponent_ul_5_Template, 16, 7, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appShowAuthed", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appShowAuthed", true);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _show_authed_directive__WEBPACK_IMPORTED_MODULE_3__["ShowAuthedDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "mzfZ":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/article-helpers/article-preview.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ArticlePreviewComponent */

    /***/
    function mzfZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function () {
        return ArticlePreviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _article_meta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./article-meta.component */
      "IDn2");
      /* harmony import */


      var _buttons_favorite_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../buttons/favorite-button.component */
      "SXxL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ArticlePreviewComponent_li_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r1, " ");
        }
      }

      var _c0 = function _c0(a1) {
        return ["/article", a1];
      };

      var ArticlePreviewComponent = /*#__PURE__*/function () {
        function ArticlePreviewComponent() {
          _classCallCheck(this, ArticlePreviewComponent);
        }

        _createClass(ArticlePreviewComponent, [{
          key: "onToggleFavorite",
          value: function onToggleFavorite(favorited) {
            this.article['favorited'] = favorited;

            if (favorited) {
              this.article['favoritesCount']++;
            } else {
              this.article['favoritesCount']--;
            }
          }
        }]);

        return ArticlePreviewComponent;
      }();

      ArticlePreviewComponent.ɵfac = function ArticlePreviewComponent_Factory(t) {
        return new (t || ArticlePreviewComponent)();
      };

      ArticlePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ArticlePreviewComponent,
        selectors: [["app-article-preview"]],
        inputs: {
          article: "article"
        },
        decls: 13,
        vars: 9,
        consts: [[1, "article-preview"], [3, "article"], [1, "pull-xs-right", 3, "article", "toggle"], [1, "preview-link", 3, "routerLink"], [1, "tag-list"], ["class", "tag-default tag-pill tag-outline", 4, "ngFor", "ngForOf"], [1, "tag-default", "tag-pill", "tag-outline"]],
        template: function ArticlePreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-article-meta", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-favorite-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggle", function ArticlePreviewComponent_Template_app_favorite_button_toggle_2_listener($event) {
              return ctx.onToggleFavorite($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Read more...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ArticlePreviewComponent_li_12_Template, 2, 1, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("article", ctx.article);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("article", ctx.article);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.article.favoritesCount, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.article.slug));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.article.tagList);
          }
        },
        directives: [_article_meta_component__WEBPACK_IMPORTED_MODULE_1__["ArticleMetaComponent"], _buttons_favorite_button_component__WEBPACK_IMPORTED_MODULE_2__["FavoriteButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "pKmL":
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /*! exports provided: CoreModule */

    /***/
    function pKmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./interceptors/http.token.interceptor */
      "C5T1");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services */
      "dJ3e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CoreModule = function CoreModule() {
        _classCallCheck(this, CoreModule);
      };

      CoreModule.ɵfac = function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      };

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_2__["HttpTokenInterceptor"],
          multi: true
        }, _services__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _services__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"], _services__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _services__WEBPACK_IMPORTED_MODULE_3__["CommentsService"], _services__WEBPACK_IMPORTED_MODULE_3__["JwtService"], _services__WEBPACK_IMPORTED_MODULE_3__["ProfilesService"], _services__WEBPACK_IMPORTED_MODULE_3__["TagsService"], _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CoreModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
        });
      })();
      /***/

    },

    /***/
    "qc5V":
    /*!**********************************************!*\
      !*** ./src/app/core/services/api.service.ts ***!
      \**********************************************/

    /*! exports provided: ApiService */

    /***/
    function qc5V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./jwt.service */
      "Rs8g");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http, jwtService) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.jwtService = jwtService;
        }

        _createClass(ApiService, [{
          key: "formatErrors",
          value: function formatErrors(error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error);
          }
        }, {
          key: "get",
          value: function get(path) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_url).concat(path), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
          }
        }, {
          key: "put",
          value: function put(path) {
            var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_url).concat(path), JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
          }
        }, {
          key: "post",
          value: function post(path) {
            var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_url).concat(path), JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
          }
        }, {
          key: "delete",
          value: function _delete(path) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_url).concat(path)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_jwt_service__WEBPACK_IMPORTED_MODULE_3__["JwtService"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac
      });
      /***/
    },

    /***/
    "sKXY":
    /*!**************************************!*\
      !*** ./src/app/core/models/index.ts ***!
      \**************************************/

    /*! no exports provided */

    /***/
    function sKXY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _article_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./article.model */
      "XWHW");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _article_list_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./article-list-config.model */
      "E0um");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _comment_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./comment.model */
      "0lwu");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _errors_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./errors.model */
      "b1ZQ");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _profile_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile.model */
      "bN3y");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user.model */
      "PQuL");
      /* empty/unused harmony star reexport */

      /***/

    },

    /***/
    "uOqR":
    /*!***********************************************!*\
      !*** ./src/app/core/services/tags.service.ts ***!
      \***********************************************/

    /*! exports provided: TagsService */

    /***/
    function uOqR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsService", function () {
        return TagsService;
      });
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api.service */
      "qc5V");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TagsService = /*#__PURE__*/function () {
        function TagsService(apiService) {
          _classCallCheck(this, TagsService);

          this.apiService = apiService;
        }

        _createClass(TagsService, [{
          key: "getAll",
          value: function getAll() {
            return this.apiService.get('/tags').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              return data.tags;
            }));
          }
        }]);

        return TagsService;
      }();

      TagsService.ɵfac = function TagsService_Factory(t) {
        return new (t || TagsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]));
      };

      TagsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: TagsService,
        factory: TagsService.ɵfac
      });
      /***/
    },

    /***/
    "vWSW":
    /*!*************************************************!*\
      !*** ./src/app/shared/list-errors.component.ts ***!
      \*************************************************/

    /*! exports provided: ListErrorsComponent */

    /***/
    function vWSW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListErrorsComponent", function () {
        return ListErrorsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ListErrorsComponent_ul_0_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r2, " ");
        }
      }

      function ListErrorsComponent_ul_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListErrorsComponent_ul_0_li_1_Template, 2, 1, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errorList);
        }
      }

      var ListErrorsComponent = /*#__PURE__*/function () {
        function ListErrorsComponent() {
          _classCallCheck(this, ListErrorsComponent);

          this.formattedErrors = [];
        }

        _createClass(ListErrorsComponent, [{
          key: "errors",
          set: function set(errorList) {
            this.formattedErrors = Object.keys(errorList.errors || {}).map(function (key) {
              return "".concat(key, " ").concat(errorList.errors[key]);
            });
          }
        }, {
          key: "errorList",
          get: function get() {
            return this.formattedErrors;
          }
        }]);

        return ListErrorsComponent;
      }();

      ListErrorsComponent.ɵfac = function ListErrorsComponent_Factory(t) {
        return new (t || ListErrorsComponent)();
      };

      ListErrorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListErrorsComponent,
        selectors: [["app-list-errors"]],
        inputs: {
          errors: "errors"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "error-messages", 4, "ngIf"], [1, "error-messages"], [4, "ngFor", "ngForOf"]],
        template: function ListErrorsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListErrorsComponent_ul_0_Template, 2, 1, "ul", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | settings-settings-module */
          "settings-settings-module").then(__webpack_require__.bind(null,
          /*! ./settings/settings.module */
          "7wo0")).then(function (m) {
            return m.SettingsModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile-profile-module */
          "profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "cRhG")).then(function (m) {
            return m.ProfileModule;
          });
        }
      }, {
        path: 'editor',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | editor-editor-module */
          "editor-editor-module").then(__webpack_require__.bind(null,
          /*! ./editor/editor.module */
          "ALb8")).then(function (m) {
            return m.EditorModule;
          });
        }
      }, {
        path: 'article',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | article-article-module */
          "article-article-module").then(__webpack_require__.bind(null,
          /*! ./article/article.module */
          "rZHr")).then(function (m) {
            return m.ArticleModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          // preload all modules; optionally we could
          // implement a custom preloading strategy for just some
          // of the modules (PRs welcome 😉)
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"],
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      var bootstrapPromise = _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]); // Logging bootstrap information


      bootstrapPromise.then(function (success) {
        return console.log("Bootstrap success");
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map