(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editor-editor-module"], {
    /***/
    "ALb8":
    /*!*****************************************!*\
      !*** ./src/app/editor/editor.module.ts ***!
      \*****************************************/

    /*! exports provided: EditorModule */

    /***/
    function ALb8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorModule", function () {
        return EditorModule;
      });
      /* harmony import */


      var _editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editor.component */
      "xD4D");
      /* harmony import */


      var _editable_article_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editable-article-resolver.service */
      "h3Hm");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared */
      "M0ag");
      /* harmony import */


      var _editor_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editor-routing.module */
      "n/bn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EditorModule = function EditorModule() {
        _classCallCheck(this, EditorModule);
      };

      EditorModule.ɵfac = function EditorModule_Factory(t) {
        return new (t || EditorModule)();
      };

      EditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: EditorModule
      });
      EditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [_editable_article_resolver_service__WEBPACK_IMPORTED_MODULE_1__["EditableArticleResolver"]],
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _editor_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditorRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EditorModule, {
          declarations: [_editor_component__WEBPACK_IMPORTED_MODULE_0__["EditorComponent"]],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _editor_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditorRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "h3Hm":
    /*!*************************************************************!*\
      !*** ./src/app/editor/editable-article-resolver.service.ts ***!
      \*************************************************************/

    /*! exports provided: EditableArticleResolver */

    /***/
    function h3Hm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditableArticleResolver", function () {
        return EditableArticleResolver;
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

      var EditableArticleResolver = /*#__PURE__*/function () {
        function EditableArticleResolver(articlesService, router, userService) {
          _classCallCheck(this, EditableArticleResolver);

          this.articlesService = articlesService;
          this.router = router;
          this.userService = userService;
        }

        _createClass(EditableArticleResolver, [{
          key: "resolve",
          value: function resolve(route, state) {
            var _this = this;

            return this.articlesService.get(route.params['slug']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (article) {
              if (_this.userService.getCurrentUser().username === article.author.username) {
                return article;
              } else {
                _this.router.navigateByUrl('/');
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              return _this.router.navigateByUrl('/');
            }));
          }
        }]);

        return EditableArticleResolver;
      }();

      EditableArticleResolver.ɵfac = function EditableArticleResolver_Factory(t) {
        return new (t || EditableArticleResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
      };

      EditableArticleResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: EditableArticleResolver,
        factory: EditableArticleResolver.ɵfac
      });
      /***/
    },

    /***/
    "n/bn":
    /*!*************************************************!*\
      !*** ./src/app/editor/editor-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: EditorRoutingModule */

    /***/
    function nBn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorRoutingModule", function () {
        return EditorRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editor.component */
      "xD4D");
      /* harmony import */


      var _editable_article_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editable-article-resolver.service */
      "h3Hm");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core */
      "ey9i");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: ':slug',
        component: _editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        resolve: {
          article: _editable_article_resolver_service__WEBPACK_IMPORTED_MODULE_2__["EditableArticleResolver"]
        }
      }];

      var EditorRoutingModule = function EditorRoutingModule() {
        _classCallCheck(this, EditorRoutingModule);
      };

      EditorRoutingModule.ɵfac = function EditorRoutingModule_Factory(t) {
        return new (t || EditorRoutingModule)();
      };

      EditorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: EditorRoutingModule
      });
      EditorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EditorRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "xD4D":
    /*!********************************************!*\
      !*** ./src/app/editor/editor.component.ts ***!
      \********************************************/

    /*! exports provided: EditorComponent */

    /***/
    function xD4D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
        return EditorComponent;
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


      var _shared_list_errors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/list-errors.component */
      "vWSW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function EditorComponent_span_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditorComponent_span_17_Template_i_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

            var tag_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r2.removeTag(tag_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", tag_r1, " ");
        }
      }

      var EditorComponent = /*#__PURE__*/function () {
        function EditorComponent(articlesService, route, router, fb) {
          _classCallCheck(this, EditorComponent);

          this.articlesService = articlesService;
          this.route = route;
          this.router = router;
          this.fb = fb;
          this.article = {};
          this.tagField = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
          this.errors = {};
          this.isSubmitting = false; // use the FormBuilder to create a form group

          this.articleForm = this.fb.group({
            title: '',
            description: '',
            body: ''
          }); // Initialized tagList as empty array

          this.article.tagList = []; // Optional: subscribe to value changes on the form
          // this.articleForm.valueChanges.subscribe(value => this.updateArticle(value));
        }

        _createClass(EditorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // If there's an article prefetched, load it
            this.route.data.subscribe(function (data) {
              if (data.article) {
                _this2.article = data.article;

                _this2.articleForm.patchValue(data.article);
              }
            });
          }
        }, {
          key: "addTag",
          value: function addTag() {
            // retrieve tag control
            var tag = this.tagField.value; // only add tag if it does not exist yet

            if (this.article.tagList.indexOf(tag) < 0) {
              this.article.tagList.push(tag);
            } // clear the input


            this.tagField.reset('');
          }
        }, {
          key: "removeTag",
          value: function removeTag(tagName) {
            this.article.tagList = this.article.tagList.filter(function (tag) {
              return tag !== tagName;
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this3 = this;

            this.isSubmitting = true; // update the model

            this.updateArticle(this.articleForm.value); // post the changes

            this.articlesService.save(this.article).subscribe(function (article) {
              return _this3.router.navigateByUrl('/article/' + article.slug);
            }, function (err) {
              _this3.errors = err;
              _this3.isSubmitting = false;
            });
          }
        }, {
          key: "updateArticle",
          value: function updateArticle(values) {
            Object.assign(this.article, values);
          }
        }]);

        return EditorComponent;
      }();

      EditorComponent.ɵfac = function EditorComponent_Factory(t) {
        return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: EditorComponent,
        selectors: [["app-editor-page"]],
        decls: 20,
        vars: 5,
        consts: [[1, "editor-page"], [1, "container", "page"], [1, "row"], [1, "col-md-10", "offset-md-1", "col-xs-12"], [3, "errors"], [3, "formGroup"], [3, "disabled"], [1, "form-group"], ["formControlName", "title", "type", "text", "placeholder", "Article Title", 1, "form-control", "form-control-lg"], ["formControlName", "description", "type", "text", "placeholder", "What's this article about?", 1, "form-control"], ["formControlName", "body", "rows", "8", "placeholder", "Write your article (in markdown)", 1, "form-control"], ["type", "text", "placeholder", "Enter tags", 1, "form-control", 3, "formControl", "keyup.enter"], [1, "tag-list"], ["class", "tag-default tag-pill", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-lg", "pull-xs-right", "btn-primary", 3, "click"], [1, "tag-default", "tag-pill"], [1, "ion-close-round", 3, "click"]],
        template: function EditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-list-errors", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "fieldset", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "fieldset", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "fieldset", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "fieldset", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "textarea", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "              ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "fieldset", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function EditorComponent_Template_input_keyup_enter_15_listener() {
              return ctx.addTag();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, EditorComponent_span_17_Template, 3, 1, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_18_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Publish Article ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("errors", ctx.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.articleForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isSubmitting);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.tagField);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.article.tagList);
          }
        },
        directives: [_shared_list_errors_component__WEBPACK_IMPORTED_MODULE_4__["ListErrorsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=editor-editor-module-es5.js.map