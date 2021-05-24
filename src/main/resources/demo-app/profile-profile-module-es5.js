(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "0MqT":
    /*!********************************************************!*\
      !*** ./src/app/profile/profile-favorites.component.ts ***!
      \********************************************************/

    /*! exports provided: ProfileFavoritesComponent */

    /***/
    function MqT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileFavoritesComponent", function () {
        return ProfileFavoritesComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/article-helpers/article-list.component */
      "juF/");

      var ProfileFavoritesComponent = /*#__PURE__*/function () {
        function ProfileFavoritesComponent(route, router) {
          _classCallCheck(this, ProfileFavoritesComponent);

          this.route = route;
          this.router = router;
          this.favoritesConfig = {
            type: 'all',
            filters: {}
          };
        }

        _createClass(ProfileFavoritesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.parent.data.subscribe(function (data) {
              _this.profile = data.profile;
              _this.favoritesConfig.filters.favorited = _this.profile.username;
            });
          }
        }]);

        return ProfileFavoritesComponent;
      }();

      ProfileFavoritesComponent.ɵfac = function ProfileFavoritesComponent_Factory(t) {
        return new (t || ProfileFavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      ProfileFavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProfileFavoritesComponent,
        selectors: [["app-profile-favorites"]],
        decls: 1,
        vars: 2,
        consts: [[3, "limit", "config"]],
        template: function ProfileFavoritesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-article-list", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("limit", 10)("config", ctx.favoritesConfig);
          }
        },
        directives: [_shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_2__["ArticleListComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "W6KJ":
    /*!**********************************************!*\
      !*** ./src/app/profile/profile.component.ts ***!
      \**********************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function W6KJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
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
      /* harmony import */


      var _shared_buttons_follow_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/buttons/follow-button.component */
      "UCte");

      var _c0 = function _c0() {
        return ["/settings"];
      };

      var _c1 = function _c1() {
        return {
          exact: true
        };
      };

      var _c2 = function _c2(a1) {
        return ["/profile", a1];
      };

      var _c3 = function _c3(a1) {
        return ["/profile", a1, "favorites"];
      };

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(route, userService) {
          _classCallCheck(this, ProfileComponent);

          this.route = route;
          this.userService = userService;
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (data) {
              _this2.profile = data.profile; // Load the current user's data.

              return _this2.userService.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (userData) {
                _this2.currentUser = userData;
                _this2.isUser = _this2.currentUser.username === _this2.profile.username;
              }));
            })).subscribe();
          }
        }, {
          key: "onToggleFollowing",
          value: function onToggleFollowing(following) {
            this.profile.following = following;
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile-page"]],
        decls: 26,
        vars: 18,
        consts: [[1, "profile-page"], [1, "user-info"], [1, "container"], [1, "row"], [1, "col-xs-12", "col-md-10", "offset-md-1"], [1, "user-img", 3, "src"], [3, "hidden", "profile", "toggle"], [1, "btn", "btn-sm", "btn-outline-secondary", "action-btn", 3, "routerLink", "hidden"], [1, "ion-gear-a"], [1, "articles-toggle"], [1, "nav", "nav-pills", "outline-active"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions", "routerLink"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "app-follow-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("toggle", function ProfileComponent_Template_app_follow_button_toggle_10_listener($event) {
              return ctx.onToggleFollowing($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Edit Profile Settings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " My Posts ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Favorited Posts ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.profile.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.profile.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.profile.bio);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.isUser)("profile", ctx.profile);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0))("hidden", !ctx.isUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c2, ctx.profile.username));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c3, ctx.profile.username));
          }
        },
        directives: [_shared_buttons_follow_button_component__WEBPACK_IMPORTED_MODULE_4__["FollowButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "cRhG":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfileModule */

    /***/
    function cRhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
        return ProfileModule;
      });
      /* harmony import */


      var _profile_articles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-articles.component */
      "dA0S");
      /* harmony import */


      var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.component */
      "W6KJ");
      /* harmony import */


      var _profile_favorites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile-favorites.component */
      "0MqT");
      /* harmony import */


      var _profile_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile-resolver.service */
      "gEDs");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared */
      "M0ag");
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "v+7O");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfileModule = function ProfileModule() {
        _classCallCheck(this, ProfileModule);
      };

      ProfileModule.ɵfac = function ProfileModule_Factory(t) {
        return new (t || ProfileModule)();
      };

      ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: ProfileModule
      });
      ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [_profile_resolver_service__WEBPACK_IMPORTED_MODULE_3__["ProfileResolver"]],
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProfileModule, {
          declarations: [_profile_articles_component__WEBPACK_IMPORTED_MODULE_0__["ProfileArticlesComponent"], _profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"], _profile_favorites_component__WEBPACK_IMPORTED_MODULE_2__["ProfileFavoritesComponent"]],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "dA0S":
    /*!*******************************************************!*\
      !*** ./src/app/profile/profile-articles.component.ts ***!
      \*******************************************************/

    /*! exports provided: ProfileArticlesComponent */

    /***/
    function dA0S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileArticlesComponent", function () {
        return ProfileArticlesComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/article-helpers/article-list.component */
      "juF/");

      var ProfileArticlesComponent = /*#__PURE__*/function () {
        function ProfileArticlesComponent(route, router) {
          _classCallCheck(this, ProfileArticlesComponent);

          this.route = route;
          this.router = router;
          this.articlesConfig = {
            type: 'all',
            filters: {}
          };
        }

        _createClass(ProfileArticlesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.route.parent.data.subscribe(function (data) {
              _this3.profile = data.profile;
              _this3.articlesConfig = {
                type: 'all',
                filters: {}
              }; // Only method I found to refresh article load on swap

              _this3.articlesConfig.filters.author = _this3.profile.username;
            });
          }
        }]);

        return ProfileArticlesComponent;
      }();

      ProfileArticlesComponent.ɵfac = function ProfileArticlesComponent_Factory(t) {
        return new (t || ProfileArticlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      ProfileArticlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProfileArticlesComponent,
        selectors: [["app-profile-articles"]],
        decls: 1,
        vars: 2,
        consts: [[3, "limit", "config"]],
        template: function ProfileArticlesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-article-list", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("limit", 10)("config", ctx.articlesConfig);
          }
        },
        directives: [_shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_2__["ArticleListComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "gEDs":
    /*!*****************************************************!*\
      !*** ./src/app/profile/profile-resolver.service.ts ***!
      \*****************************************************/

    /*! exports provided: ProfileResolver */

    /***/
    function gEDs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileResolver", function () {
        return ProfileResolver;
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

      var ProfileResolver = /*#__PURE__*/function () {
        function ProfileResolver(profilesService, router) {
          _classCallCheck(this, ProfileResolver);

          this.profilesService = profilesService;
          this.router = router;
        }

        _createClass(ProfileResolver, [{
          key: "resolve",
          value: function resolve(route, state) {
            var _this4 = this;

            return this.profilesService.get(route.params['username']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              return _this4.router.navigateByUrl('/');
            }));
          }
        }]);

        return ProfileResolver;
      }();

      ProfileResolver.ɵfac = function ProfileResolver_Factory(t) {
        return new (t || ProfileResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_1__["ProfilesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      ProfileResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: ProfileResolver,
        factory: ProfileResolver.ɵfac
      });
      /***/
    },

    /***/
    "v+7O":
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfileRoutingModule */

    /***/
    function v7O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
        return ProfileRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _profile_articles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile-articles.component */
      "dA0S");
      /* harmony import */


      var _profile_favorites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile-favorites.component */
      "0MqT");
      /* harmony import */


      var _profile_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile-resolver.service */
      "gEDs");
      /* harmony import */


      var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile.component */
      "W6KJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: ':username',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
        resolve: {
          profile: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_3__["ProfileResolver"]
        },
        children: [{
          path: '',
          component: _profile_articles_component__WEBPACK_IMPORTED_MODULE_1__["ProfileArticlesComponent"]
        }, {
          path: 'favorites',
          component: _profile_favorites_component__WEBPACK_IMPORTED_MODULE_2__["ProfileFavoritesComponent"]
        }]
      }];

      var ProfileRoutingModule = function ProfileRoutingModule() {
        _classCallCheck(this, ProfileRoutingModule);
      };

      ProfileRoutingModule.ɵfac = function ProfileRoutingModule_Factory(t) {
        return new (t || ProfileRoutingModule)();
      };

      ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: ProfileRoutingModule
      });
      ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map