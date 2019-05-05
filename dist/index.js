var t=require("lit-html"),e=["closed","locked","off"],o=new Set(["fan","input_boolean","light","switch","group","automation"]),n=function(t,e,o,n){n=n||{},o=null==o?{}:o;var i=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return i.detail=o,t.dispatchEvent(i),i},i=function(t,e,o){void 0===o&&(o=!1),o?history.replaceState(null,"",e):history.pushState(null,"",e),n(window,"location-changed",{replace:o})},r=function(t,e,o){void 0===o&&(o=!0);var n,i=function(t){return t.substr(0,t.indexOf("."))}(e),r="group"===i?"homeassistant":i;switch(i){case"lock":n=o?"unlock":"lock";break;case"cover":n=o?"open_cover":"close_cover";break;default:n=o?"turn_on":"turn_off"}return t.callService(r,n,{entity_id:e})},a=function(t,o){var n=e.includes(t.states[o].state);return r(t,o,n)},c=function(t,e){n(t,"haptic",e)},s="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,l=function(t){function e(){t.call(this),this.holdTime=500,this.ripple=document.createElement("paper-ripple"),this.timer=void 0,this.held=!1,this.cooldownStart=!1,this.cooldownEnd=!1}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.connectedCallback=function(){var t=this;Object.assign(this.style,{borderRadius:"50%",position:"absolute",width:s?"100px":"50px",height:s?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none"}),this.appendChild(this.ripple),this.ripple.style.color="#03a9f4",this.ripple.style.color="var(--primary-color)",["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(function(e){document.addEventListener(e,function(){clearTimeout(t.timer),t.stopAnimation(),t.timer=void 0},{passive:!0})})},e.prototype.bind=function(t){var e=this;if(!t.longPress){t.longPress=!0,t.addEventListener("contextmenu",function(t){var e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1});var o=function(t){var o,n;e.cooldownStart||(e.held=!1,t.touches?(o=t.touches[0].pageX,n=t.touches[0].pageY):(o=t.pageX,n=t.pageY),e.timer=window.setTimeout(function(){e.startAnimation(o,n),e.held=!0},e.holdTime),e.cooldownStart=!0,window.setTimeout(function(){return e.cooldownStart=!1},100))},n=function(o){e.cooldownEnd||["touchend","touchcancel"].includes(o.type)&&void 0===e.timer||(clearTimeout(e.timer),e.stopAnimation(),e.timer=void 0,t.dispatchEvent(e.held?new Event("ha-hold"):new Event("ha-click")),e.cooldownEnd=!0,window.setTimeout(function(){return e.cooldownEnd=!1},100))};t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("touchend",n),t.addEventListener("touchcancel",n),t.addEventListener("mousedown",o,{passive:!0}),t.addEventListener("click",n)}},e.prototype.startAnimation=function(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.holdDown=!0,this.ripple.simulatedRipple()},e.prototype.stopAnimation=function(){this.ripple.holdDown=!1,this.style.display="none"},e}(HTMLElement);customElements.get("long-press")||customElements.define("long-press",l);var p=function(t){var e=function(){var t=document.body;if(t.querySelector("long-press"))return t.querySelector("long-press");var e=document.createElement("long-press");return t.appendChild(e),e}();e&&e.bind(t)},u=t.directive(function(){return function(t){p(t.committer.element)}});exports.DEFAULT_DOMAIN_ICON="hass:bookmark",exports.DEFAULT_PANEL="lovelace",exports.DOMAINS_WITH_CARD=["climate","cover","configurator","input_select","input_number","input_text","lock","media_player","scene","script","timer","vacuum","water_heater","weblink"],exports.DOMAINS_WITH_MORE_INFO=["alarm_control_panel","automation","camera","climate","configurator","cover","fan","group","history_graph","input_datetime","light","lock","media_player","script","sun","updater","vacuum","water_heater","weather"],exports.DOMAINS_HIDE_MORE_INFO=["input_number","input_select","input_text","scene","weblink"],exports.DOMAINS_MORE_INFO_NO_HISTORY=["camera","configurator","history_graph","scene"],exports.STATES_OFF=e,exports.DOMAINS_TOGGLE=o,exports.UNIT_C="°C",exports.UNIT_F="°F",exports.DEFAULT_VIEW_ENTITY_ID="group.default_view",exports.fireEvent=n,exports.handleClick=function(t,e,o,r){var s;switch(r&&o.hold_action?s=o.hold_action:!r&&o.tap_action&&(s=o.tap_action),s||(s={action:"more-info"}),s.action){case"more-info":o.entity&&(n(t,"hass-more-info",{entityId:o.entity}),s.haptic&&c(t,s.haptic));break;case"navigate":s.navigation_path&&(i(0,s.navigation_path),s.haptic&&c(t,s.haptic));break;case"url":s.url&&window.open(s.url),s.haptic&&c(t,s.haptic);break;case"toggle":o.entity&&(a(e,o.entity),s.haptic&&c(t,s.haptic));break;case"call-service":if(!s.service)return;var l=s.service.split(".",2);e.callService(l[0],l[1],s.service_data),s.haptic&&c(t,s.haptic)}},exports.forwardHaptic=c,exports.longPressBind=p,exports.longPress=u,exports.navigate=i,exports.toggleEntity=a,exports.turnOnOffEntity=r;
//# sourceMappingURL=index.js.map