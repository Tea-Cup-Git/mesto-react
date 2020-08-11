(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=(a(13),a(1)),s=a(5),l=a.n(s);var p=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:l.a,alt:"Mesto. Russia"}))},u=a(2),m=a(6),_=a(7),d=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=document.querySelector(".popup_open .popup__submit-button");t.textContent=e?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},h=new(function(){function e(t){var a=t.baseUrl,n=t.token;Object(m.a)(this,e),this._baseUrl=a,this._token=n}return Object(_.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"addCard",value:function(e){var t=e.name,a=e.link,n=e.alt;return d(!0),fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:a,alt:n})}).then(this._handleResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"setUserInfo",value:function(e){var t=e.name,a=e.about;return d(!0),fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:a})}).then(this._handleResponse)}},{key:"setUserAvatar",value:function(e){var t=e.avatar;return d(!0),fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(this._handleResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._handleResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._handleResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-13",token:"05e19680-152e-4468-99ab-dd133195a5d0"});var f=function(e){var t=e.src,a=e.title,n=e.likes,o=Object(u.a)(e,["src","title","likes"]);return r.a.createElement("div",{id:"card-template"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card__image",src:t,alt:a,onClick:function(){var e={src:t,title:a};o.onCardClick(e)}}),r.a.createElement("p",{className:"card__name"},a),r.a.createElement("button",{className:"card__trash-button",type:"button"}),r.a.createElement("div",{className:"card__likes"},r.a.createElement("button",{className:"card__like-button",type:"button"}),r.a.createElement("p",{className:"card__like-count"},n.length))))};var b=function(e){var t=e.onCardClick,a=Object(u.a)(e,["onCardClick"]),n=r.a.useState(""),o=Object(i.a)(n,2),c=o[0],s=o[1],l=r.a.useState(""),p=Object(i.a)(l,2),m=p[0],_=p[1],d=r.a.useState(""),b=Object(i.a)(d,2),E=b[0],v=b[1],k=r.a.useState([]),N=Object(i.a)(k,2),y=N[0],g=N[1];return r.a.useEffect((function(){h.getUserInfo().then((function(e){s(e.name),_(e.about),v(e.avatar)}))}),[]),r.a.useEffect((function(){h.getInitialCards().then((function(e){g(e.map((function(e){return{id:e._id,src:e.link,title:e.name,likes:e.likes}})))}))}),[]),r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__avatar-container"},r.a.createElement("img",{className:"profile__avatar",src:E,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})),r.a.createElement("button",{className:"profile__avatar-button",type:"button",onClick:a.onEditAvatar}),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__button-wrapper"},r.a.createElement("h1",{className:"profile__name"},c),r.a.createElement("button",{className:"profile__edit-button",type:"button",onClick:a.onEditProfile})),r.a.createElement("p",{className:"profile__about"},m)),r.a.createElement("button",{className:"profile__add-button",type:"button",onClick:a.onAddPlace})),r.a.createElement("section",{className:"photo-grid"},y.map((function(e){var a=e.id,n=Object(u.a)(e,["id"]);return r.a.createElement(f,Object.assign({key:a},n,{onCardClick:t}))}))))};var E=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var v=function(e){return r.a.createElement("div",{id:"".concat(e.name,"-form"),className:"popup ".concat(e.isOpen&&"popup_open")},r.a.createElement("form",{id:"".concat(e.name,"-form_container"),className:"popup__container",noValidate:!0},r.a.createElement("h2",{className:"popup__header"},e.title),e.children,r.a.createElement("button",{className:"popup__submit-button",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),r.a.createElement("button",{className:"popup__close-button",type:"reset",onClick:e.onClose})))};var k=function(e){var t=e.cardTitle,a=e.cardSrc,n=Object(u.a)(e,["cardTitle","cardSrc"]);return r.a.createElement("div",{id:"image-form",className:"popup ".concat(n.isOpen&&"popup_open")},r.a.createElement("figure",{className:"popup__container popup__container_img"},r.a.createElement("img",{className:"popup__image",src:a,alt:"".concat(t)}),r.a.createElement("figcaption",{className:"popup__figcaption"},"".concat(t)),r.a.createElement("button",{id:"image-expander_close-button",className:"popup__close-button",type:"reset",onClick:n.onClose})))};var N=function(){var e=r.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),c=Object(i.a)(o,2),s=c[0],l=c[1],u=r.a.useState(!1),m=Object(i.a)(u,2),_=m[0],d=m[1],h=r.a.useState({isOpen:!1}),f=Object(i.a)(h,2),N=f[0],y=f[1];function g(){n(!1),l(!1),d(!1),y({isOpen:!1})}return r.a.createElement("div",{className:"root"},r.a.createElement("div",{className:"page"},r.a.createElement(p,null),r.a.createElement(b,{onEditProfile:function(){n(!0)},onAddPlace:function(){l(!0)},onEditAvatar:function(){d(!0)},onCardClick:function(e){y({isOpen:!0,src:e.src,title:e.title})}}),r.a.createElement(v,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:a,onClose:g},r.a.createElement("input",{id:"user-input",className:"popup__input popup__input_type_user-name",name:"userName",type:"text",minLength:"2",maxLength:"40",pattern:"[a-zA-Z\u0430-\u044f\u0410-\u042f -]{1,}",placeholder:"\u0418\u043c\u044f",required:!0}),r.a.createElement("span",{id:"user-input-error",className:"popup__input-error"}),r.a.createElement("input",{id:"about-input",className:"popup__input popup__input_type_user-about",name:"userAbout",type:"text",minLength:"2",maxLength:"200",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0}),r.a.createElement("span",{id:"about-input-error",className:"popup__input-error"})),r.a.createElement(v,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:s,onClose:g},r.a.createElement("input",{id:"name-input",className:"popup__input popup__input_type_place-name",name:"name",type:"text",minLength:"1",maxLength:"30",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0}),r.a.createElement("span",{id:"name-input-error",className:"popup__input-error"}),r.a.createElement("input",{id:"link-input",className:"popup__input popup__input_type_image-link",name:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",required:!0}),r.a.createElement("span",{id:"link-input-error",className:"popup__input-error"})),r.a.createElement(v,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:_,onClose:g},r.a.createElement("input",{id:"avatar-input",className:"popup__input popup__input_type_image-link",name:"userAvatar",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",required:!0}),r.a.createElement("span",{id:"avatar-input-error",className:"popup__input-error"})),r.a.createElement(v,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"},r.a.createElement("button",{className:"popup__submit-button",type:"submit"},"\u0414\u0430")),r.a.createElement(k,{cardSrc:N.src,cardTitle:N.title,isOpen:N.isOpen,onClose:g}),r.a.createElement(E,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))},5:function(e,t,a){e.exports=a.p+"static/media/logo.855a8c98.svg"},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.e67dd216.chunk.js.map