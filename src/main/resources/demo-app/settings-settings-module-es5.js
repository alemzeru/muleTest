(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
    /***/
    "70H3":
    /*!************************************************!*\
      !*** ./src/app/settings/settings.component.ts ***!
      \************************************************/

    /*! exports provided: SettingsComponent */

    /***/
    function H3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
        return SettingsComponent;
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

      var SettingsComponent = /*#__PURE__*/function () {
        function SettingsComponent(router, userService, fb) {
          _classCallCheck(this, SettingsComponent);

          this.router = router;
          this.userService = userService;
          this.fb = fb;
          this.user = {};
          this.errors = {};
          this.isSubmitting = false; // create form group using the form builder

          this.settingsForm = this.fb.group({
            image: '',
            username: '',
            bio: '',
            email: '',
            password: ''
          }); // Optional: subscribe to changes on the form
          // this.settingsForm.valueChanges.subscribe(values => this.updateUser(values));
        }

        _createClass(SettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Make a fresh copy of the current user's object to place in editable form fields
            Object.assign(this.user, this.userService.getCurrentUser()); // Fill the form

            this.settingsForm.patchValue(this.user);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.userService.purgeAuth();
            this.router.navigateByUrl('/');
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this = this;

            this.isSubmitting = true; // update the model

            this.updateUser(this.settingsForm.value);
            this.userService.update(this.user).subscribe(function (updatedUser) {
              return _this.router.navigateByUrl('/profile/' + updatedUser.username);
            }, function (err) {
              _this.errors = err;
              _this.isSubmitting = false;
            });
          }
        }, {
          key: "updateUser",
          value: function updateUser(values) {
            Object.assign(this.user, values);
          }
        }]);

        return SettingsComponent;
      }();

      SettingsComponent.??fac = function SettingsComponent_Factory(t) {
        return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_core__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      SettingsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: SettingsComponent,
        selectors: [["app-settings-page"]],
        decls: 25,
        vars: 3,
        consts: [[1, "settings-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "errors"], [3, "formGroup", "ngSubmit"], [3, "disabled"], [1, "form-group"], ["type", "text", "placeholder", "URL of profile picture", "formControlName", "image", 1, "form-control"], ["type", "text", "placeholder", "Username", "formControlName", "username", 1, "form-control", "form-control-lg"], ["rows", "8", "placeholder", "Short bio about you", "formControlName", "bio", 1, "form-control", "form-control-lg"], ["type", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control", "form-control-lg"], ["type", "password", "placeholder", "New Password", "formControlName", "password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right"], [1, "btn", "btn-outline-danger", 3, "click"]],
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "Your Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "app-list-errors", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_7_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "fieldset", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "fieldset", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](10, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "fieldset", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](12, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "fieldset", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "textarea", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, "              ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "fieldset", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](17, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "fieldset", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](19, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21, " Update Settings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](22, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SettingsComponent_Template_button_click_23_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, " Or click here to logout. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("errors", ctx.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.settingsForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", ctx.isSubmitting);
          }
        },
        directives: [_shared_list_errors_component__WEBPACK_IMPORTED_MODULE_4__["ListErrorsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "7Dlj":
    /*!*****************************************************!*\
      !*** ./src/app/settings/settings-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: SettingsRoutingModule */

    /***/
    function Dlj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function () {
        return SettingsRoutingModule;
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


      var _settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./settings.component */
      "70H3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }];

      var SettingsRoutingModule = function SettingsRoutingModule() {
        _classCallCheck(this, SettingsRoutingModule);
      };

      SettingsRoutingModule.??fac = function SettingsRoutingModule_Factory(t) {
        return new (t || SettingsRoutingModule)();
      };

      SettingsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: SettingsRoutingModule
      });
      SettingsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](SettingsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "7wo0":
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.module.ts ***!
      \*********************************************/

    /*! exports provided: SettingsModule */

    /***/
    function wo0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsModule", function () {
        return SettingsModule;
      });
      /* harmony import */


      var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./settings.component */
      "70H3");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared */
      "M0ag");
      /* harmony import */


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./settings-routing.module */
      "7Dlj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SettingsModule = function SettingsModule() {
        _classCallCheck(this, SettingsModule);
      };

      SettingsModule.??fac = function SettingsModule_Factory(t) {
        return new (t || SettingsModule)();
      };

      SettingsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: SettingsModule
      });
      SettingsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](SettingsModule, {
          declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_0__["SettingsComponent"]],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=settings-settings-module-es5.js.map