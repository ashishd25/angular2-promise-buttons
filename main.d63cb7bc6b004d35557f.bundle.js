webpackJsonp([0,3],{0:function(n,t,e){n.exports=e("s7k+")},AD9c:function(n,t,e){"use strict";var i=e("3j3K"),l=e("rCTf"),r=(e.n(l),e("eErF")),o=(e.n(r),e("qf0L")),s=e("J/TY");e.d(t,"a",function(){return u});var u=function(){function n(n,t){this.cfg=Object.assign({},o.a,t),this.btnEl=n.nativeElement}return Object.defineProperty(n.prototype,"promiseBtn",{set:function(n){var t=n instanceof l.Observable,e=n instanceof Promise||null!==n&&"object"==typeof n&&"function"==typeof n.then&&"function"==typeof n.catch;t?this.promise=n.toPromise():e&&(this.promise=n),this.checkAndInitPromiseHandler(this.btnEl)},enumerable:!0,configurable:!0}),n.prototype.ngAfterContentInit=function(){this.prepareBtnEl(this.btnEl),this.checkAndInitPromiseHandler(this.btnEl)},n.prototype.ngOnDestroy=function(){this.minDurationTimeout&&clearTimeout(this.minDurationTimeout)},n.prototype.prepareBtnEl=function(n){this.appendSpinnerTpl(n)},n.prototype.checkAndInitPromiseHandler=function(n){n&&this.promise&&this.initPromiseHandler(n)},n.prototype.addLoadingClass=function(n){"string"==typeof this.cfg.btnLoadingClass&&n.classList.add(this.cfg.btnLoadingClass)},n.prototype.removeLoadingClass=function(n){"string"==typeof this.cfg.btnLoadingClass&&n.classList.remove(this.cfg.btnLoadingClass)},n.prototype.initLoadingState=function(n){this.addLoadingClass(n),this.disableBtn(n)},n.prototype.cancelLoadingStateIfPromiseAndMinDurationDone=function(n){this.cfg.minDuration&&!this.isMinDurationTimeoutDone||!this.isPromiseDone||(this.removeLoadingClass(n),this.enableBtn(n))},n.prototype.disableBtn=function(n){this.cfg.disableBtn&&n.setAttribute("disabled","disabled")},n.prototype.enableBtn=function(n){this.cfg.disableBtn&&n.removeAttribute("disabled")},n.prototype.initPromiseHandler=function(n){var t=this,e=this.promise;this.isMinDurationTimeoutDone=!1,this.isPromiseDone=!1,this.cfg.minDuration&&(this.minDurationTimeout=setTimeout(function(){t.isMinDurationTimeoutDone=!0,t.cancelLoadingStateIfPromiseAndMinDurationDone(n)},this.cfg.minDuration));var i=function(){t.isPromiseDone=!0,t.cancelLoadingStateIfPromiseAndMinDurationDone(n)};this.cfg.handleCurrentBtnOnly||this.initLoadingState(n),e.finally?e.finally(i):e.then(i).catch(i)},n.prototype.appendSpinnerTpl=function(n){n.insertAdjacentHTML("beforeend",this.cfg.spinnerTpl)},n.prototype.handleCurrentBtnOnly=function(){var n=this;if(!this.cfg.handleCurrentBtnOnly)return!1;setTimeout(function(){n.promise&&n.initLoadingState(n.btnEl)},0)},n.ctorParameters=function(){return[{type:i.W},{type:void 0,decorators:[{type:i.D,args:[s.a]}]}]},n}()},"J/TY":function(n,t,e){"use strict";var i=e("3j3K");e.d(t,"a",function(){return l});var l=new i.z("cfg")},"L/RD":function(n,t){function e(n){throw new Error("Cannot find module '"+n+"'.")}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="L/RD"},QjNt:function(n,t,e){"use strict";var i=e("J/TY");e.d(t,"a",function(){return l});var l=function(){function n(){}return n.forRoot=function(t){return{ngModule:n,providers:[{provide:i.a,useValue:t}]}},n}()},RRpH:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=function(){function n(){}return n}()},XoxQ:function(n,t,e){"use strict";function i(n){return o._16(0,[(n()(),o._17(0,null,null,2,"button",[["class","btn btn-raised"]],null,[[null,"click"]],function(n,t,e){var i=!0,l=n.component;if("click"===t){i=!1!==o._18(n,1).handleCurrentBtnOnly()&&i}if("click"===t){i=!1!==l.success(e)&&i}return i},null,null)),o._19(598016,null,0,u.a,[o.W,_.a],{promiseBtn:[0,"promiseBtn"]},null),(n()(),o._20(null,["Success after delay\n"])),(n()(),o._20(null,["\n"])),(n()(),o._17(0,null,null,2,"button",[["class","btn btn-raised"]],null,[[null,"click"]],function(n,t,e){var i=!0,l=n.component;if("click"===t){i=!1!==o._18(n,5).handleCurrentBtnOnly()&&i}if("click"===t){i=!1!==l.error()&&i}return i},null,null)),o._19(598016,null,0,u.a,[o.W,_.a],{promiseBtn:[0,"promiseBtn"]},null),(n()(),o._20(null,["Error after delay\n"])),(n()(),o._20(null,["\n"])),(n()(),o._17(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o._20(null,["\n"])),(n()(),o._17(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o._20(null,["\n"])),(n()(),o._17(0,null,null,2,"button",[["class","btn btn-raised"]],null,[[null,"click"]],function(n,t,e){var i=!0,l=n.component;if("click"===t){i=!1!==o._18(n,13).handleCurrentBtnOnly()&&i}if("click"===t){i=!1!==l.endless()&&i}return i},null,null)),o._19(598016,null,0,u.a,[o.W,_.a],{promiseBtn:[0,"promiseBtn"]},null),(n()(),o._20(null,["Never resolving promise\n"])),(n()(),o._20(null,["\n"])),(n()(),o._17(0,null,null,2,"button",[["class","btn btn-raised"]],null,[[null,"click"]],function(n,t,e){var i=!0;if("click"===t){i=!1!==o._18(n,17).handleCurrentBtnOnly()&&i}return i},null,null)),o._19(598016,null,0,u.a,[o.W,_.a],{promiseBtn:[0,"promiseBtn"]},null),(n()(),o._20(null,["Loading initially and forever\n"])),(n()(),o._20(null,["\n\n"])),(n()(),o._17(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o._20(null,["Same promise buttons"])),(n()(),o._20(null,["\n"])),(n()(),o._17(0,null,null,2,"button",[["class","btn btn-raised"]],null,[[null,"click"]],function(n,t,e){var i=!0,l=n.component;if("click"===t){i=!1!==o._18(n,24).handleCurrentBtnOnly()&&i}if("click"===t){i=!1!==l.success(e)&&i}return i},null,null)),o._19(598016,null,0,u.a,[o.W,_.a],{promiseBtn:[0,"promiseBtn"]},null),(n()(),o._20(null,["We\n"])),(n()(),o._20(null,["\n"])),(n()(),o._17(0,null,null,2,"button",[["class","btn btn-raised"]],null,[[null,"click"]],function(n,t,e){var i=!0,l=n.component;if("click"===t){i=!1!==o._18(n,28).handleCurrentBtnOnly()&&i}if("click"===t){i=!1!==l.success(e)&&i}return i},null,null)),o._19(598016,null,0,u.a,[o.W,_.a],{promiseBtn:[0,"promiseBtn"]},null),(n()(),o._20(null,["share\n"])),(n()(),o._20(null,["\n\n"])),(n()(),o._17(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o._20(null,["Chained promise buttons"])),(n()(),o._20(null,["\n"])),(n()(),o._17(0,null,null,2,"button",[["class","btn btn-raised"]],null,[[null,"click"]],function(n,t,e){var i=!0,l=n.component;if("click"===t){i=!1!==o._18(n,35).handleCurrentBtnOnly()&&i}if("click"===t){i=!1!==l.chain()&&i}return i},null,null)),o._19(598016,null,0,u.a,[o.W,_.a],{promiseBtn:[0,"promiseBtn"]},null),(n()(),o._20(null,["Load promise chain ","\n"])),(n()(),o._20(null,["\n\n\n"])),(n()(),o._17(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o._20(null,["Inside a form"])),(n()(),o._20(null,["\n"])),(n()(),o._17(0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,t,e){var i=!0,l=n.component;if("submit"===t){i=!1!==o._18(n,43).onSubmit(e)&&i}if("reset"===t){i=!1!==o._18(n,43).onReset()&&i}if("submit"===t){i=!1!==l.submit()&&i}return i},null,null)),o._19(8192,null,0,a.d,[],null,null),o._19(8192,null,0,a.e,[[8,null],[8,null]],null,null),o._21(1024,null,a.f,null,[a.e]),o._19(8192,null,0,a.g,[a.f],null,null),(n()(),o._20(null,["\n  "])),(n()(),o._17(0,null,null,2,"button",[["class","btn btn-raised"],["type","submit"]],null,[[null,"click"]],function(n,t,e){var i=!0;if("click"===t){i=!1!==o._18(n,48).handleCurrentBtnOnly()&&i}return i},null,null)),o._19(598016,null,0,u.a,[o.W,_.a],{promiseBtn:[0,"promiseBtn"]},null),(n()(),o._20(null,["Submit\n  "])),(n()(),o._20(null,["\n"])),(n()(),o._20(null,["\n\n\n"])),(n()(),o._17(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o._20(null,["With an observable"])),(n()(),o._20(null,["\n"])),(n()(),o._17(0,null,null,2,"button",[["class","btn btn-raised"]],null,[[null,"click"]],function(n,t,e){var i=!0,l=n.component;if("click"===t){i=!1!==o._18(n,56).handleCurrentBtnOnly()&&i}if("click"===t){i=!1!==l.initObservable()&&i}return i},null,null)),o._19(598016,null,0,u.a,[o.W,_.a],{promiseBtn:[0,"promiseBtn"]},null),(n()(),o._20(null,["Observable ","\n"]))],function(n,t){var e=t.component;n(t,1,0,e.successPromise),n(t,5,0,e.errorPromise),n(t,13,0,e.endlessPromise),n(t,17,0,e.endlessInitialPromise),n(t,24,0,e.successPromise),n(t,28,0,e.successPromise),n(t,35,0,e.chainedPromises),n(t,48,0,e.submitPromise),n(t,56,0,e.observableItem)},function(n,t){var e=t.component;n(t,36,0,e.promiseIndex),n(t,41,0,o._18(t,45).ngClassUntouched,o._18(t,45).ngClassTouched,o._18(t,45).ngClassPristine,o._18(t,45).ngClassDirty,o._18(t,45).ngClassValid,o._18(t,45).ngClassInvalid,o._18(t,45).ngClassPending),n(t,57,0,e.obsVal)})}function l(n){return o._16(0,[(n()(),o._17(0,null,null,1,"app-root",[],null,null,null,i,h)),o._19(24576,null,0,s.a,[],null,null)],null,null)}var r=e("mYxl"),o=e("3j3K"),s=e("nBc1"),u=e("AD9c"),_=e("J/TY"),a=e("NVOs");e.d(t,"a",function(){return f});var c=[r.a],h=o._15({encapsulation:0,styles:c,data:{}}),f=o._22("app-root",s.a,l,{},{},[])},j55w:function(n,t,e){"use strict";var i=e("3j3K"),l=e("RRpH"),r=e("2Je8"),o=e("Qbdm"),s=e("NVOs"),u=e("QjNt"),_=e("XoxQ"),a=e("J/TY");e.d(t,"a",function(){return f});var c=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])};return function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),h=function(n){function t(t){return n.call(this,t,[_.a],[_.a])||this}return c(t,n),Object.defineProperty(t.prototype,"_LOCALE_ID_12",{get:function(){return null==this.__LOCALE_ID_12&&(this.__LOCALE_ID_12=i.b(this.parent.get(i.c,null))),this.__LOCALE_ID_12},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgLocalization_13",{get:function(){return null==this.__NgLocalization_13&&(this.__NgLocalization_13=new r.a(this._LOCALE_ID_12)),this.__NgLocalization_13},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Compiler_14",{get:function(){return null==this.__Compiler_14&&(this.__Compiler_14=new i.d),this.__Compiler_14},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_APP_ID_15",{get:function(){return null==this.__APP_ID_15&&(this.__APP_ID_15=i.e()),this.__APP_ID_15},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_IterableDiffers_16",{get:function(){return null==this.__IterableDiffers_16&&(this.__IterableDiffers_16=i.f()),this.__IterableDiffers_16},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_KeyValueDiffers_17",{get:function(){return null==this.__KeyValueDiffers_17&&(this.__KeyValueDiffers_17=i.g()),this.__KeyValueDiffers_17},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DomSanitizer_18",{get:function(){return null==this.__DomSanitizer_18&&(this.__DomSanitizer_18=new o.b(this.parent.get(o.c))),this.__DomSanitizer_18},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Sanitizer_19",{get:function(){return null==this.__Sanitizer_19&&(this.__Sanitizer_19=this._DomSanitizer_18),this.__Sanitizer_19},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_HAMMER_GESTURE_CONFIG_20",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_20&&(this.__HAMMER_GESTURE_CONFIG_20=new o.d),this.__HAMMER_GESTURE_CONFIG_20},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EVENT_MANAGER_PLUGINS_21",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_21&&(this.__EVENT_MANAGER_PLUGINS_21=[new o.e(this.parent.get(o.c)),new o.f(this.parent.get(o.c)),new o.g(this.parent.get(o.c),this._HAMMER_GESTURE_CONFIG_20)]),this.__EVENT_MANAGER_PLUGINS_21},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EventManager_22",{get:function(){return null==this.__EventManager_22&&(this.__EventManager_22=new o.h(this._EVENT_MANAGER_PLUGINS_21,this.parent.get(i.h))),this.__EventManager_22},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomSharedStylesHost_23",{get:function(){return null==this.__ɵDomSharedStylesHost_23&&(this.__ɵDomSharedStylesHost_23=new o.i(this.parent.get(o.c))),this.__ɵDomSharedStylesHost_23},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomRendererFactory2_24",{get:function(){return null==this.__ɵDomRendererFactory2_24&&(this.__ɵDomRendererFactory2_24=new o.j(this._EventManager_22,this._ɵDomSharedStylesHost_23)),this.__ɵDomRendererFactory2_24},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RendererFactory2_25",{get:function(){return null==this.__RendererFactory2_25&&(this.__RendererFactory2_25=this._ɵDomRendererFactory2_24),this.__RendererFactory2_25},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵSharedStylesHost_26",{get:function(){return null==this.__ɵSharedStylesHost_26&&(this.__ɵSharedStylesHost_26=this._ɵDomSharedStylesHost_23),this.__ɵSharedStylesHost_26},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Testability_27",{get:function(){return null==this.__Testability_27&&(this.__Testability_27=new i.i(this.parent.get(i.h))),this.__Testability_27},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Meta_28",{get:function(){return null==this.__Meta_28&&(this.__Meta_28=new o.k(this.parent.get(o.c))),this.__Meta_28},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Title_29",{get:function(){return null==this.__Title_29&&(this.__Title_29=new o.l(this.parent.get(o.c))),this.__Title_29},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵi_30",{get:function(){return null==this.__ɵi_30&&(this.__ɵi_30=new s.a),this.__ɵi_30},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new r.b,this._ErrorHandler_1=o.m(),this._APP_INITIALIZER_2=[i.j,o.n(this.parent.get(o.o,null),this.parent.get(i.k,null))],this._ApplicationInitStatus_3=new i.l(this._APP_INITIALIZER_2),this._ɵf_4=new i.m(this.parent.get(i.h),this.parent.get(i.n),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new i.o(this._ApplicationRef_5),this._BrowserModule_7=new o.p(this.parent.get(o.p,null)),this._ɵba_8=new s.b,this._FormsModule_9=new s.c,this._Angular2PromiseButtonModule_10=new u.a,this._AppModule_11=new l.a,this._userCfg_31=void 0,this._AppModule_11},t.prototype.getInternal=function(n,t){return n===r.b?this._CommonModule_0:n===i.p?this._ErrorHandler_1:n===i.q?this._APP_INITIALIZER_2:n===i.l?this._ApplicationInitStatus_3:n===i.m?this._ɵf_4:n===i.r?this._ApplicationRef_5:n===i.o?this._ApplicationModule_6:n===o.p?this._BrowserModule_7:n===s.b?this._ɵba_8:n===s.c?this._FormsModule_9:n===u.a?this._Angular2PromiseButtonModule_10:n===l.a?this._AppModule_11:n===i.c?this._LOCALE_ID_12:n===r.c?this._NgLocalization_13:n===i.d?this._Compiler_14:n===i.s?this._APP_ID_15:n===i.t?this._IterableDiffers_16:n===i.u?this._KeyValueDiffers_17:n===o.q?this._DomSanitizer_18:n===i.v?this._Sanitizer_19:n===o.r?this._HAMMER_GESTURE_CONFIG_20:n===o.s?this._EVENT_MANAGER_PLUGINS_21:n===o.h?this._EventManager_22:n===o.i?this._ɵDomSharedStylesHost_23:n===o.j?this._ɵDomRendererFactory2_24:n===i.w?this._RendererFactory2_25:n===o.t?this._ɵSharedStylesHost_26:n===i.i?this._Testability_27:n===o.k?this._Meta_28:n===o.l?this._Title_29:n===s.a?this._ɵi_30:n===a.a?this._userCfg_31:t},t.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_23&&this._ɵDomSharedStylesHost_23.ngOnDestroy()},t}(i.x),f=new i.y(h,l.a)},mYxl:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=[""]},nBc1:function(n,t,e){"use strict";var i=e("rCTf");e.n(i);e.d(t,"a",function(){return o});var l=1e3,r={success:function(){return new Promise(function(n){setTimeout(function(){n({msg:"SUCCESS"})},l)})},error:function(){return new Promise(function(n,t){setTimeout(function(){t({msg:"ERROR"})},l)})},endless:function(){return new Promise(function(n){setTimeout(n,99999999)})},initObservable:function(){return new i.Observable(function(n){setTimeout(function(){n.next(1)},1e3),setTimeout(function(){n.next(2)},2e3),setTimeout(function(){n.next(3)},3e3),setTimeout(function(){n.complete()},4e3)})}},o=function(){function n(){this.endlessInitial()}return n.prototype.success=function(n){return console.log(n),this.successPromise=r.success(),this.successPromise},n.prototype.error=function(){this.errorPromise=r.error().catch(function(){console.log("YEAH ERROR")})},n.prototype.endless=function(){this.endlessPromise=r.endless()},n.prototype.endlessInitial=function(){this.endlessInitialPromise=r.endless()},n.prototype.initObservable=function(){var n=this;this.obsVal="INITIALIZED",this.observableItem=r.initObservable(),this.observableItem.subscribe(function(t){n.obsVal=t},function(){},function(){n.obsVal="COMPLETED"})},n.prototype.submit=function(){this.submitPromise=r.success()},n.prototype.chain=function(){return this.promiseIndex=0,this.chainedPromises=this.countChain().then(this.countChain.bind(this)).then(this.countChain.bind(this)).then(this.countChain.bind(this)).then(this.countChain.bind(this)),this.chainedPromises},n.prototype.countChain=function(){var n=this;return r.success().then(function(){n.promiseIndex++})},n.ctorParameters=function(){return[]},n}()},oYMd:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i={production:!0}},qf0L:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i={spinnerTpl:'<span class="btn-spinner"></span>',disableBtn:!0,btnLoadingClass:"is-loading",handleCurrentBtnOnly:!1,minDuration:!1}},"s7k+":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("ZSR1"),l=(e.n(i),e("I8yv")),r=(e.n(l),e("3j3K")),o=e("oYMd"),s=e("Qbdm"),u=e("j55w");o.a.production&&e.i(r.a)(),e.i(s.a)().bootstrapModuleFactory(u.a)}},[0]);