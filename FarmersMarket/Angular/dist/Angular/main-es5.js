function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Models/marketDetailsResponse.ts":
  /*!*************************************************!*\
    !*** ./src/app/Models/marketDetailsResponse.ts ***!
    \*************************************************/

  /*! exports provided: MarketDetailsResponse */

  /***/
  function srcAppModelsMarketDetailsResponseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarketDetailsResponse", function () {
      return MarketDetailsResponse;
    });

    var MarketDetailsResponse = function MarketDetailsResponse() {
      _classCallCheck(this, MarketDetailsResponse);
    };
    /***/

  },

  /***/
  "./src/app/Models/messageModel.ts":
  /*!****************************************!*\
    !*** ./src/app/Models/messageModel.ts ***!
    \****************************************/

  /*! exports provided: MessageModel */

  /***/
  function srcAppModelsMessageModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageModel", function () {
      return MessageModel;
    });

    var MessageModel = function MessageModel() {
      _classCallCheck(this, MessageModel);

      this.button = "OK";
    };
    /***/

  },

  /***/
  "./src/app/Modules/about/about.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/Modules/about/about.component.ts ***!
    \**************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppModulesAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent(dialogRef) {
        _classCallCheck(this, AboutComponent);

        this.dialogRef = dialogRef;
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 21,
      vars: 0,
      consts: [["href", "https://trello.com/b/T5xt0Bd0/farmers-market", "target", "_blank"], ["mat-raised-button", "", 3, "click"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About FMF (Farmer's Market Finder)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This application was constructed using an ASP.NET Core Web API.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The API uses Entity Framework Core and an Azure SQL Database");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The front-end (this site) is created using Angular 9 and Material Design Components");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "With this application, you're able to use either a zip code or your current location to find Farmers' Markets near you.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "The list is ordered by distance, and you're able to view details about each farm when clicked on, and favorite the ones you like.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "On top of storing and retrieving information about the markets in the SQL Database, all user actions are stored in the database as well, for audit and tracking reasons.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "For extras, check out the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Trello Board");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " that was used to create this project.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_19_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      styles: ["h2[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kdWxlcy9hYm91dC9DOlxcVXNlcnNcXG1ha2ljXFxzb3VyY2VcXHJlcG9zXFxEb3ROZXREZW1vXFxGYXJtZXJzTWFya2V0XFxBbmd1bGFyL3NyY1xcYXBwXFxNb2R1bGVzXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL01vZHVsZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9Nb2R1bGVzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCJoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Modules/friendly-message/friendly-message.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Modules/friendly-message/friendly-message.component.ts ***!
    \************************************************************************/

  /*! exports provided: FriendlyMessageComponent */

  /***/
  function srcAppModulesFriendlyMessageFriendlyMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendlyMessageComponent", function () {
      return FriendlyMessageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_Models_messageModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Models/messageModel */
    "./src/app/Models/messageModel.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function FriendlyMessageComponent_h3_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message.title);
      }
    }

    function FriendlyMessageComponent_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message.message2);
      }
    }

    var FriendlyMessageComponent =
    /*#__PURE__*/
    function () {
      function FriendlyMessageComponent(dialogRef, data) {
        _classCallCheck(this, FriendlyMessageComponent);

        this.dialogRef = dialogRef;
        this.message = new src_app_Models_messageModel__WEBPACK_IMPORTED_MODULE_2__["MessageModel"]();
        this.message = data;
      }

      _createClass(FriendlyMessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.message.timeout > 0) {
            setTimeout(function () {
              _this.close();
            }, this.message.timeout);
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return FriendlyMessageComponent;
    }();

    FriendlyMessageComponent.ɵfac = function FriendlyMessageComponent_Factory(t) {
      return new (t || FriendlyMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    FriendlyMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FriendlyMessageComponent,
      selectors: [["app-friendly-message"]],
      decls: 8,
      vars: 4,
      consts: [[1, "container"], ["fxLayoutAlign", "center center", 4, "ngIf"], [1, "message"], [4, "ngIf"], ["id", "confirmButtonDiv", "fxLayoutAlign", "end center"], ["mat-raised-button", "", 3, "click"], ["fxLayoutAlign", "center center"]],
      template: function FriendlyMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FriendlyMessageComponent_h3_1_Template, 2, 1, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FriendlyMessageComponent_p_4_Template, 2, 1, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendlyMessageComponent_Template_button_click_6_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.message2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.button);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: [".container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.container[_ngcontent-%COMP%]   #confirmButtonDiv[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.container[_ngcontent-%COMP%]   #confirmButtonDiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kdWxlcy9mcmllbmRseS1tZXNzYWdlL0M6XFxVc2Vyc1xcbWFraWNcXHNvdXJjZVxccmVwb3NcXERvdE5ldERlbW9cXEZhcm1lcnNNYXJrZXRcXEFuZ3VsYXIvc3JjXFxhcHBcXE1vZHVsZXNcXGZyaWVuZGx5LW1lc3NhZ2VcXGZyaWVuZGx5LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL01vZHVsZXMvZnJpZW5kbHktbWVzc2FnZS9mcmllbmRseS1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7QUNBUjtBREdJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0RSO0FESUk7RUFDSSxnQkFBQTtBQ0ZSO0FESVE7RUFDSSxxQ0FBQTtBQ0ZaIiwiZmlsZSI6InNyYy9hcHAvTW9kdWxlcy9mcmllbmRseS1tZXNzYWdlL2ZyaWVuZGx5LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHsgXHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI2NvbmZpcm1CdXR0b25EaXYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmNvbnRhaW5lciBoMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAubWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY29udGFpbmVyICNjb25maXJtQnV0dG9uRGl2IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jb250YWluZXIgI2NvbmZpcm1CdXR0b25EaXYgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FriendlyMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-friendly-message',
          templateUrl: './friendly-message.component.html',
          styleUrls: ['./friendly-message.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Modules/load-spinner/load-spinner.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Modules/load-spinner/load-spinner.component.ts ***!
    \****************************************************************/

  /*! exports provided: LoadSpinnerComponent */

  /***/
  function srcAppModulesLoadSpinnerLoadSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadSpinnerComponent", function () {
      return LoadSpinnerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoadSpinnerComponent =
    /*#__PURE__*/
    function () {
      function LoadSpinnerComponent() {
        _classCallCheck(this, LoadSpinnerComponent);
      }

      _createClass(LoadSpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoadSpinnerComponent;
    }();

    LoadSpinnerComponent.ɵfac = function LoadSpinnerComponent_Factory(t) {
      return new (t || LoadSpinnerComponent)();
    };

    LoadSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadSpinnerComponent,
      selectors: [["app-load-spinner"]],
      decls: 1,
      vars: 0,
      consts: [["src", "../../../assets/Images/appleLoader.png", 1, "rotate"]],
      template: function LoadSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }
      },
      styles: [".rotate[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  -webkit-animation: rotation 1.5s infinite linear;\n          animation: rotation 1.5s infinite linear;\n  margin-top: 20px;\n}\n\n@-webkit-keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kdWxlcy9sb2FkLXNwaW5uZXIvQzpcXFVzZXJzXFxtYWtpY1xcc291cmNlXFxyZXBvc1xcRG90TmV0RGVtb1xcRmFybWVyc01hcmtldFxcQW5ndWxhci9zcmNcXGFwcFxcTW9kdWxlc1xcbG9hZC1zcGlubmVyXFxsb2FkLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL01vZHVsZXMvbG9hZC1zcGlubmVyL2xvYWQtc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLHVCQUFBO0VDQ047RURDRTtJQUNJLHlCQUFBO0VDQ047QUFDRjs7QURQQTtFQUNJO0lBQ0ksdUJBQUE7RUNDTjtFRENFO0lBQ0kseUJBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvTW9kdWxlcy9sb2FkLXNwaW5uZXIvbG9hZC1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdGF0ZSB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGFuaW1hdGlvbjogcm90YXRpb24gMS41cyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyBcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGlvbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gICAgfVxyXG59ICIsIi5yb3RhdGUge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbmltYXRpb246IHJvdGF0aW9uIDEuNXMgaW5maW5pdGUgbGluZWFyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-load-spinner',
          templateUrl: './load-spinner.component.html',
          styleUrls: ['./load-spinner.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Services/geolocation.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/Services/geolocation.service.ts ***!
    \*************************************************/

  /*! exports provided: GeolocationService */

  /***/
  function srcAppServicesGeolocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationService", function () {
      return GeolocationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GeolocationService =
    /*#__PURE__*/
    function () {
      function GeolocationService() {
        _classCallCheck(this, GeolocationService);
      }

      _createClass(GeolocationService, [{
        key: "getPosition",
        value: function getPosition() {
          return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (resp) {
              resolve({
                lat: resp.coords.latitude,
                lon: resp.coords.longitude
              });
            }, function (err) {
              reject(err);
            });
          });
        }
      }]);

      return GeolocationService;
    }();

    GeolocationService.ɵfac = function GeolocationService_Factory(t) {
      return new (t || GeolocationService)();
    };

    GeolocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GeolocationService,
      factory: GeolocationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeolocationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Services/markets.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/Services/markets.service.ts ***!
    \*********************************************/

  /*! exports provided: MarketsService */

  /***/
  function srcAppServicesMarketsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarketsService", function () {
      return MarketsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MarketsService =
    /*#__PURE__*/
    function () {
      function MarketsService(http) {
        _classCallCheck(this, MarketsService);

        this.http = http;
        this.version = "/v1/market";
        this.baseUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl).concat(this.version);
      }

      _createClass(MarketsService, [{
        key: "listMarketsByZip",
        value: function listMarketsByZip(zip) {
          var url = "".concat(this.baseUrl, "/zip/").concat(zip);
          return this.http.get(url);
        }
      }, {
        key: "listMarketsByLocation",
        value: function listMarketsByLocation(lat, lon) {
          var url = "".concat(this.baseUrl, "/location?lat=").concat(lat, "&lon=").concat(lon);
          return this.http.get(url);
        }
      }, {
        key: "getMarketDetailsById",
        value: function getMarketDetailsById(marketId) {
          var url = "".concat(this.baseUrl, "/details/").concat(marketId);
          return this.http.get(url);
        }
      }, {
        key: "flipFavoriteStatusById",
        value: function flipFavoriteStatusById(marketId) {
          var url = "".concat(this.baseUrl, "/favorite/").concat(marketId);
          return this.http.get(url);
        }
      }]);

      return MarketsService;
    }();

    MarketsService.ɵfac = function MarketsService_Factory(t) {
      return new (t || MarketsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    MarketsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MarketsService,
      factory: MarketsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarketsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _Modules_friendly_message_friendly_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Modules/friendly-message/friendly-message.component */
    "./src/app/Modules/friendly-message/friendly-message.component.ts");
    /* harmony import */


    var _Modules_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Modules/about/about.component */
    "./src/app/Modules/about/about.component.ts");
    /* harmony import */


    var _Models_marketDetailsResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Models/marketDetailsResponse */
    "./src/app/Models/marketDetailsResponse.ts");
    /* harmony import */


    var _Services_markets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Services/markets.service */
    "./src/app/Services/markets.service.ts");
    /* harmony import */


    var _Services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Services/geolocation.service */
    "./src/app/Services/geolocation.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _Modules_load_spinner_load_spinner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./Modules/load-spinner/load-spinner.component */
    "./src/app/Modules/load-spinner/load-spinner.component.ts");

    function AppComponent_mat_error_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Only use digits 0-9. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_mat_error_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Only use 5 digit zip code. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_mat_icon_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_mat_icon_12_Template_mat_icon_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var market_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r16.flipFavoriteValue($event, market_r11.marketNumber);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_ng_template_13_Template_mat_icon_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var market_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r19.flipFavoriteValue($event, market_r11.marketNumber);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star_border");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_div_16_div_1_p_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r25);
      }
    }

    function AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_div_16_div_1_p_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r26);
      }
    }

    function AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_div_16_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "location_on");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Address:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "schedule");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Schedule:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_div_16_div_1_p_17_Template, 2, 1, "p", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "category");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Products:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_div_16_div_1_p_25_Template, 2, 1, "p", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r22.marketDetail.googleAddressUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.marketDetail.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.marketDetail.schedule);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.marketDetail.products);
      }
    }

    function AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_div_16_div_1_Template, 26, 4, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r15.gettingDetails)("ngIfElse", _r7);
      }
    }

    function AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_Template_mat_expansion_panel_header_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var market_r11 = ctx.$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r27.getMarketsDetail(market_r11.marketNumber);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "storefront");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_mat_icon_12_Template, 2, 0, "mat-icon", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_ng_template_13_Template, 2, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_div_16_Template, 2, 2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var market_r11 = ctx.$implicit;

        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](market_r11.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", market_r11.distance, " miles away");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", market_r11.isFavorite)("ngIfElse", _r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.marketDetail);
      }
    }

    function AppComponent_div_30_mat_accordion_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_30_mat_accordion_1_mat_expansion_panel_1_Template, 17, 6, "mat-expansion-panel", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.markets);
      }
    }

    function AppComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_30_mat_accordion_1_Template, 2, 1, "mat-accordion", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.markets.length > 0)("ngIfElse", _r5);
      }
    }

    function AppComponent_ng_template_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Markets Listed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Try Searching by Zip or Locaiton");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_template_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-load-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(marketServ, formBuilder, geoServ, dialog) {
        _classCallCheck(this, AppComponent);

        this.marketServ = marketServ;
        this.formBuilder = formBuilder;
        this.geoServ = geoServ;
        this.dialog = dialog;
        this.markets = [];
        this.marketDetail = new _Models_marketDetailsResponse__WEBPACK_IMPORTED_MODULE_4__["MarketDetailsResponse"]();
        this.gettingList = false;
        this.gettingDetails = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.zipFormGroup = this.formBuilder.group({
            zip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]]
          });
        }
      }, {
        key: "openInfo",
        value: function openInfo() {
          this.dialog.open(_Modules_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], {
            width: "80%",
            maxWidth: "500px",
            height: "auto",
            maxHeight: "95vh"
          });
        }
      }, {
        key: "setGettingListValue",
        value: function setGettingListValue() {
          var _this2 = this;

          this.gettingList = true;
          setTimeout(function () {
            _this2.gettingList = false;
          }, 3000);
        }
      }, {
        key: "setGettingDetailValue",
        value: function setGettingDetailValue() {
          var _this3 = this;

          this.gettingDetails = true;
          setTimeout(function () {
            _this3.gettingDetails = false;
          }, 10000);
        }
      }, {
        key: "checkForEnter",
        value: function checkForEnter(event) {
          if (event.key == "Enter") {
            this.listMarketsByZip();
          }
        }
      }, {
        key: "listMarketsByZip",
        value: function listMarketsByZip() {
          var _this4 = this;

          if (this.zipFormGroup.valid && this.zipFormGroup.value.zip && this.zipFormGroup.value.zip != "00000") {
            this.setGettingListValue();
            this.marketServ.listMarketsByZip(this.zipFormGroup.value.zip).subscribe(function (list) {
              _this4.markets = list.response;
              _this4.gettingList = false;
            });
          }
        }
      }, {
        key: "listMarketsByLocation",
        value: function listMarketsByLocation() {
          var _this5 = this;

          this.setGettingListValue();
          this.zipFormGroup.reset();
          this.geoServ.getPosition().then(function (location) {
            if (location && location.lon && location.lon) {
              //if location is found, get list of marekts.
              _this5.marketServ.listMarketsByLocation(location.lat.toString(), location.lon.toString()).subscribe(function (list) {
                _this5.markets = list.response;
                _this5.gettingList = false;
              });
            } else {
              //throw error
              _this5.gettingList = false;

              _this5.dialog.open(_Modules_friendly_message_friendly_message_component__WEBPACK_IMPORTED_MODULE_2__["FriendlyMessageComponent"], {
                width: "auto",
                height: "auto",
                data: {
                  "title": "Permissions Error",
                  "message": "We were not able to find your location.",
                  "message2": "Ensure that locaions is allows for this site.",
                  "button": "OK"
                }
              });
            }
          });
        }
      }, {
        key: "getMarketsDetail",
        value: function getMarketsDetail(marketId) {
          var _this6 = this;

          this.setGettingDetailValue();
          this.marketServ.getMarketDetailsById(marketId).subscribe(function (details) {
            _this6.marketDetail = details;
            _this6.gettingDetails = false;
            console.log("Market Details", details);
          });
        }
      }, {
        key: "flipFavoriteValue",
        value: function flipFavoriteValue(event, marketId) {
          event.stopPropagation();
          var market = this.markets.find(function (item) {
            return item.marketNumber == marketId;
          });
          market.isFavorite = !market.isFavorite;
          this.marketServ.flipFavoriteStatusById(marketId).subscribe(function (fav) {
            console.log("favorite status", fav);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_markets_service__WEBPACK_IMPORTED_MODULE_5__["MarketsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 35,
      vars: 5,
      consts: [["id", "header", "fxLayout", "row", "fxLayoutAlign", "space-between center"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["id", "FMFLogo", "src", "./../assets/Images/FMFLogo-250.png"], ["id", "FMFName"], [3, "click"], ["id", "body", "fxLayout", "column", "fxLayoutAlign", "start center"], ["id", "innerBodyDiv"], [1, "bodyText"], ["id", "marketList", "fxLayout", "column"], ["id", "controls", "fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutAlign.lt-md", "space-between center", "fxLayoutAlign.lt-lg", "space-between center", "fxLayoutAlign", "space-between center"], ["id", "zipCodeForm", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutAlign.lt-sm", "space-between center"], [3, "formGroup"], ["id", "zip", "matInput", "", "formControlName", "zip", "name", "zip", 3, "keyup"], [4, "ngIf"], ["id", "zipSearchBtn", "mat-raised-button", "", 3, "click"], ["id", "locationSearchBtn", "mat-raised-button", "", 3, "click"], ["id", "resultsPane", 4, "ngIf", "ngIfElse"], ["noMarkets", ""], ["loadSpinner", ""], ["id", "resultsPane"], [4, "ngIf", "ngIfElse"], ["hideToggle", "", 3, "expanded", 4, "ngFor", "ngForOf"], ["hideToggle", "", 3, "expanded"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "marketItem"], ["fxLayout", "row"], [1, "marketIcon"], ["fxLayout", "column"], [1, "marketName"], [1, "marketDistance"], ["class", "favorite", 3, "click", 4, "ngIf", "ngIfElse"], ["notFavorite", ""], [1, "detailDivider"], ["class", "marketDetails", 4, "ngIf"], [1, "favorite", 3, "click"], [1, "notFavorite", 3, "click"], [1, "marketDetails"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 4, "ngIf", "ngIfElse"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], ["fxFlex", "45", "fxLayout", "column"], [1, "title"], ["target", "_blank", 3, "href"], [4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["fxLayoutAlign", "center center"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Farmer's Market Finder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_icon_click_5_listener() {
            return ctx.openInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Farmer's Market Finder is a great tool that can find farmer's markets by either zip code or using your location.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "You can also favorite markets and view more details about them by clicking on them.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Zip Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AppComponent_Template_input_keyup_21_listener($event) {
            return ctx.checkForEnter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppComponent_mat_error_22_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_mat_error_23_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_24_listener() {
            return ctx.listMarketsByZip();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Search By Zip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " - Or - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_28_listener() {
            return ctx.listMarketsByLocation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Search By My Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppComponent_div_30_Template, 2, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AppComponent_ng_template_31_Template, 5, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AppComponent_ng_template_33_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.zipFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.zipFormGroup.controls["zip"].hasError("pattern") && (ctx.zipFormGroup.controls["zip"].dirty || ctx.zipFormGroup.controls["zip"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.zipFormGroup.controls["zip"].hasError("pattern") && ctx.zipFormGroup.controls["zip"].hasError("minlength") || ctx.zipFormGroup.controls["zip"].hasError("maxlength") && (ctx.zipFormGroup.controls["zip"].dirty || ctx.zipFormGroup.controls["zip"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gettingList)("ngIfElse", _r7);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanelTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _Modules_load_spinner_load_spinner_component__WEBPACK_IMPORTED_MODULE_16__["LoadSpinnerComponent"]],
      styles: ["#header[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n}\n#header[_ngcontent-%COMP%]   #FMFLogo[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 75px;\n}\n#header[_ngcontent-%COMP%]   #FMFName[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: bold;\n  margin-left: 15px;\n  margin-top: 10px;\n}\n#header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 30px;\n  margin-top: -15px;\n  color: var(--primary-dark);\n}\n#body[_ngcontent-%COMP%] {\n  width: 100vw;\n  margin-top: 20px;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%] {\n  width: 75vw;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   .bodyText[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 15px;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n  font-weight: bold;\n  padding-right: 30px;\n  padding-left: 30px;\n  height: 36px;\n  margin-left: 15px;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #controls[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--primary);\n  margin-top: 10px;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  height: auto;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-light);\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover   .notFavorite[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%]   .marketItem[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 10px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%]   .marketItem[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-light);\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%]   .marketItem[_ngcontent-%COMP%]:hover   .notFavorite[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%]   .marketItem[_ngcontent-%COMP%]   .marketIcon[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%]   .marketItem[_ngcontent-%COMP%]   .marketName[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 0;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%]   .marketItem[_ngcontent-%COMP%]   .marketDistance[_ngcontent-%COMP%] {\n  font-weight: normal;\n  color: var(--primary-dark);\n  margin-bottom: 0;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%]   .marketItem[_ngcontent-%COMP%]   .notFavorite[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n  visibility: hidden;\n  color: grey;\n  font-size: 30px;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%]   .marketItem[_ngcontent-%COMP%]   .notFavorite[_ngcontent-%COMP%]:hover {\n  color: var(--secondary);\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%]   .marketItem[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n  color: var(--secondary);\n  font-size: 30px;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%]   .marketItem[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%]:hover {\n  color: grey;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%]   .marketDetails[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%]   .marketDetails[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n#body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #resultsPane[_ngcontent-%COMP%]   .marketDetails[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: bold;\n  font-size: 16px;\n}\n@media (max-width: 770px) {\n  #header[_ngcontent-%COMP%]   #FMFName[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  #body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n  #body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   .notFavorite[_ngcontent-%COMP%] {\n    visibility: visible !important;\n  }\n}\n@media (max-width: 420px) {\n  #header[_ngcontent-%COMP%]   #FMFLogo[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  #header[_ngcontent-%COMP%]   #FMFName[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  #body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n  #body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #controls[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: -5px;\n    margin-bottom: -5px;\n  }\n  #body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #controls[_ngcontent-%COMP%]   #zipCodeForm[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  #body[_ngcontent-%COMP%]   #innerBodyDiv[_ngcontent-%COMP%]   #marketList[_ngcontent-%COMP%]   #controls[_ngcontent-%COMP%]   #locationSearchBtn[_ngcontent-%COMP%] {\n    margin: 15px 0;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtYWtpY1xcc291cmNlXFxyZXBvc1xcRG90TmV0RGVtb1xcRmFybWVyc01hcmtldFxcQW5ndWxhci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NSO0FERUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQVI7QURHSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ0RSO0FES0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBRElJO0VBQ0ksV0FBQTtBQ0ZSO0FESVM7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNGYjtBREtTO0VBQ0ksZ0JBQUE7QUNIYjtBRE1pQjtFQUNHLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDSnBCO0FET2dCO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQ0xwQjtBRFNhO0VBQ0ksZ0JBQUE7QUNQakI7QURXaUI7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNUckI7QURXcUI7RUFDSSxzQ0FBQTtBQ1R6QjtBRFV5QjtFQUNJLG1CQUFBO0FDUjdCO0FEYWlCO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDWHJCO0FEYXFCO0VBQ0ksc0NBQUE7QUNYekI7QURheUI7RUFDSSxtQkFBQTtBQ1g3QjtBRGVxQjtFQUNJLGtCQUFBO0FDYnpCO0FEZ0JxQjtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNkekI7QURpQnFCO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDZnpCO0FEa0JxQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDaEJ6QjtBRGtCeUI7RUFDSSx1QkFBQTtBQ2hCN0I7QURvQnFCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ2xCekI7QURvQnlCO0VBQ0ksV0FBQTtBQ2xCN0I7QUR1QmlCO0VBQ0ksZ0JBQUE7QUNyQnJCO0FEdUJxQjtFQUNJLGtCQUFBO0FDckJ6QjtBRHdCcUI7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ3RCekI7QUQ4QkE7RUFFUTtJQUNJLGVBQUE7RUM1QlY7O0VEaUNNO0lBQ0ksV0FBQTtFQzlCVjtFRGdDVTtJQUNJLDhCQUFBO0VDOUJkO0FBQ0Y7QURtQ0E7RUFFUTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDbENWO0VEb0NNO0lBQ0ksZUFBQTtFQ2xDVjs7RUR3Q1U7SUFDSSxlQUFBO0VDckNkO0VEMkNrQjtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUN6Q3RCO0VENENrQjtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7RUMxQ3RCO0VENkNrQjtJQUNJLFdBQUE7RUMzQ3RCO0VEOENrQjtJQUNJLGNBQUE7SUFDQSxXQUFBO0VDNUN0QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcblxyXG4gICAgI0ZNRkxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgIH1cclxuXHJcbiAgICAjRk1GTmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNib2R5IHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgI2lubmVyQm9keURpdiB7XHJcbiAgICAgICAgd2lkdGg6IDc1dnc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgIC5ib2R5VGV4dHsgXHJcbiAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgI21hcmtldExpc3Qge1xyXG4gICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuXHJcbiAgICAgICAgICAgICAjY29udHJvbHMge1xyXG4gICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICNyZXN1bHRzUGFuZSB7XHJcbiAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAubm90RmF2b3JpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgIC5tYXJrZXRJdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLm5vdEZhdm9yaXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAubWFya2V0SWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIC5tYXJrZXROYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgLm1hcmtldERpc3RhbmNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIC5ub3RGYXZvcml0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAuZmF2b3JpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgLm1hcmtldERldGFpbHN7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBtYXQtaWNvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NzBweCkge1xyXG4gICAgI2hlYWRlciB7XHJcbiAgICAgICAgI0ZNRk5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjYm9keSB7XHJcbiAgICAgICAgI2lubmVyQm9keURpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xyXG5cclxuICAgICAgICAgICAgLm5vdEZhdm9yaXRlIHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICNoZWFkZXIge1xyXG4gICAgICAgICNGTUZMb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI0ZNRk5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNib2R5IHtcclxuICAgICAgICAjaW5uZXJCb2R5RGl2IHtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNtYXJrZXRMaXN0e1xyXG4gICAgICAgICAgICAgICAgI2NvbnRyb2xzIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC01cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjemlwQ29kZUZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNsb2NhdGlvblNlYXJjaEJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIjaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xufVxuI2hlYWRlciAjRk1GTG9nbyB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG4jaGVhZGVyICNGTUZOYW1lIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4jaGVhZGVyIG1hdC1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuI2JvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4jYm9keSAjaW5uZXJCb2R5RGl2IHtcbiAgd2lkdGg6IDc1dnc7XG59XG4jYm9keSAjaW5uZXJCb2R5RGl2IC5ib2R5VGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4jYm9keSAjaW5uZXJCb2R5RGl2ICNtYXJrZXRMaXN0IHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbiNib2R5ICNpbm5lckJvZHlEaXYgI21hcmtldExpc3QgI2NvbnRyb2xzIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4jYm9keSAjaW5uZXJCb2R5RGl2ICNtYXJrZXRMaXN0ICNjb250cm9scyBwIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuI2JvZHkgI2lubmVyQm9keURpdiAjbWFya2V0TGlzdCAjcmVzdWx0c1BhbmUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuI2JvZHkgI2lubmVyQm9keURpdiAjbWFya2V0TGlzdCAjcmVzdWx0c1BhbmUgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbiNib2R5ICNpbm5lckJvZHlEaXYgI21hcmtldExpc3QgI3Jlc3VsdHNQYW5lIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xufVxuI2JvZHkgI2lubmVyQm9keURpdiAjbWFya2V0TGlzdCAjcmVzdWx0c1BhbmUgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIC5ub3RGYXZvcml0ZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4jYm9keSAjaW5uZXJCb2R5RGl2ICNtYXJrZXRMaXN0ICNyZXN1bHRzUGFuZSAubWFya2V0SXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4jYm9keSAjaW5uZXJCb2R5RGl2ICNtYXJrZXRMaXN0ICNyZXN1bHRzUGFuZSAubWFya2V0SXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xufVxuI2JvZHkgI2lubmVyQm9keURpdiAjbWFya2V0TGlzdCAjcmVzdWx0c1BhbmUgLm1hcmtldEl0ZW06aG92ZXIgLm5vdEZhdm9yaXRlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbiNib2R5ICNpbm5lckJvZHlEaXYgI21hcmtldExpc3QgI3Jlc3VsdHNQYW5lIC5tYXJrZXRJdGVtIC5tYXJrZXRJY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuI2JvZHkgI2lubmVyQm9keURpdiAjbWFya2V0TGlzdCAjcmVzdWx0c1BhbmUgLm1hcmtldEl0ZW0gLm1hcmtldE5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiNib2R5ICNpbm5lckJvZHlEaXYgI21hcmtldExpc3QgI3Jlc3VsdHNQYW5lIC5tYXJrZXRJdGVtIC5tYXJrZXREaXN0YW5jZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuI2JvZHkgI2lubmVyQm9keURpdiAjbWFya2V0TGlzdCAjcmVzdWx0c1BhbmUgLm1hcmtldEl0ZW0gLm5vdEZhdm9yaXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuI2JvZHkgI2lubmVyQm9keURpdiAjbWFya2V0TGlzdCAjcmVzdWx0c1BhbmUgLm1hcmtldEl0ZW0gLm5vdEZhdm9yaXRlOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59XG4jYm9keSAjaW5uZXJCb2R5RGl2ICNtYXJrZXRMaXN0ICNyZXN1bHRzUGFuZSAubWFya2V0SXRlbSAuZmF2b3JpdGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuI2JvZHkgI2lubmVyQm9keURpdiAjbWFya2V0TGlzdCAjcmVzdWx0c1BhbmUgLm1hcmtldEl0ZW0gLmZhdm9yaXRlOmhvdmVyIHtcbiAgY29sb3I6IGdyZXk7XG59XG4jYm9keSAjaW5uZXJCb2R5RGl2ICNtYXJrZXRMaXN0ICNyZXN1bHRzUGFuZSAubWFya2V0RGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4jYm9keSAjaW5uZXJCb2R5RGl2ICNtYXJrZXRMaXN0ICNyZXN1bHRzUGFuZSAubWFya2V0RGV0YWlscyBtYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiNib2R5ICNpbm5lckJvZHlEaXYgI21hcmtldExpc3QgI3Jlc3VsdHNQYW5lIC5tYXJrZXREZXRhaWxzIC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NzBweCkge1xuICAjaGVhZGVyICNGTUZOYW1lIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cblxuICAjYm9keSAjaW5uZXJCb2R5RGl2IHtcbiAgICB3aWR0aDogOTB2dztcbiAgfVxuICAjYm9keSAjaW5uZXJCb2R5RGl2IC5ub3RGYXZvcml0ZSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgI2hlYWRlciAjRk1GTG9nbyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gICNoZWFkZXIgI0ZNRk5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gICNib2R5ICNpbm5lckJvZHlEaXYgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICNib2R5ICNpbm5lckJvZHlEaXYgI21hcmtldExpc3QgI2NvbnRyb2xzIGJ1dHRvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgI2JvZHkgI2lubmVyQm9keURpdiAjbWFya2V0TGlzdCAjY29udHJvbHMgcCB7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICB9XG4gICNib2R5ICNpbm5lckJvZHlEaXYgI21hcmtldExpc3QgI2NvbnRyb2xzICN6aXBDb2RlRm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2JvZHkgI2lubmVyQm9keURpdiAjbWFya2V0TGlzdCAjY29udHJvbHMgI2xvY2F0aW9uU2VhcmNoQnRuIHtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _Services_markets_service__WEBPACK_IMPORTED_MODULE_5__["MarketsService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _Services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _Modules_friendly_message_friendly_message_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./Modules/friendly-message/friendly-message.component */
    "./src/app/Modules/friendly-message/friendly-message.component.ts");
    /* harmony import */


    var _Modules_about_about_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./Modules/about/about.component */
    "./src/app/Modules/about/about.component.ts");
    /* harmony import */


    var _Modules_load_spinner_load_spinner_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./Modules/load-spinner/load-spinner.component */
    "./src/app/Modules/load-spinner/load-spinner.component.ts"); //Import Material


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], // Material
      _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _Modules_friendly_message_friendly_message_component__WEBPACK_IMPORTED_MODULE_42__["FriendlyMessageComponent"], _Modules_about_about_component__WEBPACK_IMPORTED_MODULE_43__["AboutComponent"], _Modules_load_spinner_load_spinner_component__WEBPACK_IMPORTED_MODULE_44__["LoadSpinnerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], // Material
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _Modules_friendly_message_friendly_message_component__WEBPACK_IMPORTED_MODULE_42__["FriendlyMessageComponent"], _Modules_about_about_component__WEBPACK_IMPORTED_MODULE_43__["AboutComponent"], _Modules_load_spinner_load_spinner_component__WEBPACK_IMPORTED_MODULE_44__["LoadSpinnerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], // Material
          _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          entryComponents: [_Modules_friendly_message_friendly_message_component__WEBPACK_IMPORTED_MODULE_42__["FriendlyMessageComponent"], _Modules_about_about_component__WEBPACK_IMPORTED_MODULE_43__["AboutComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseUrl: "https://localhost:44354/api"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\makic\source\repos\DotNetDemo\FarmersMarket\Angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map