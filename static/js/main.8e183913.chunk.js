(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),i=a.n(r),c=(a(16),a(9)),s=a(1),u=a(6),l=a.n(u);var p=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:l.a,alt:"Mesto. Russia"}))},m=o.a.createContext();var d=function(e){var t=e._id,a=e.link,n=e.name,r=e.likes,i=e.owner,c=e.onCardClick,s=e.onCardLike,u=e.onCardDelete,l={_id:t,link:a,name:n,owner:i,likes:r},p=o.a.useContext(m),d=r.some((function(e){return e._id===p._id})),_="card__like-button ".concat(d?"card__like-button_active":""),f=i._id===p._id,h="card__trash-button ".concat(f?"":"card__trash-button_hidden");return o.a.createElement("div",{id:"card-template"},o.a.createElement("div",{className:"card"},o.a.createElement("img",{className:"card__image",src:a,alt:n,onClick:function(){c(l)}}),o.a.createElement("p",{className:"card__name"},n),o.a.createElement("button",{className:h,type:"button",onClick:function(){u(l)}}),o.a.createElement("div",{className:"card__likes"},o.a.createElement("button",{className:_,type:"button",onClick:function(){s(l)}}),o.a.createElement("p",{className:"card__like-count"},r.length))))};var _=function(e){var t=e.cards,a=e.onCardClick,n=e.onCardLike,r=e.onCardDelete,i=e.onEditAvatar,c=e.onEditProfile,s=e.onAddPlace,u=o.a.useContext(m);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatar-container"},o.a.createElement("img",{className:"profile__avatar",src:u.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})),o.a.createElement("button",{className:"profile__avatar-button",type:"button",onClick:i}),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__button-wrapper"},o.a.createElement("h1",{className:"profile__name"},u.name),o.a.createElement("button",{className:"profile__edit-button",type:"button",onClick:c})),o.a.createElement("p",{className:"profile__about"},u.about)),o.a.createElement("button",{className:"profile__add-button",type:"button",onClick:s})),o.a.createElement("section",{className:"photo-grid"},t.map((function(e){var t=e._id,i=e.link,c=e.name,s=e.owner,u=e.likes;return o.a.createElement(d,{key:t,_id:t,link:i,name:c,owner:s,likes:u,onCardClick:a,onCardLike:n,onCardDelete:r})}))))};var f=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var h=function(e){var t=e.cardTitle,a=e.cardSrc,n=e.isOpen,r=e.onClose;return o.a.createElement("div",{id:"image-form",className:"popup ".concat(n&&"popup_open")},o.a.createElement("figure",{className:"popup__container popup__container_img"},o.a.createElement("img",{className:"popup__image",src:a,alt:"".concat(t)}),o.a.createElement("figcaption",{className:"popup__figcaption"},"".concat(t)),o.a.createElement("button",{id:"image-expander_close-button",className:"popup__close-button",type:"reset",onClick:r})))},v=a(7),b=a(8),E=new(function(){function e(t){var a=t.baseUrl,n=t.token;Object(v.a)(this,e),this._baseUrl=a,this._token=n}return Object(b.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"addCard",value:function(e){var t=e.name,a=e.link,n=e.alt;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:a,alt:n})}).then(this._handleResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"setUserInfo",value:function(e){var t=e.name,a=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:a})}).then(this._handleResponse)}},{key:"setUserAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(this._handleResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._handleResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-13",token:"05e19680-152e-4468-99ab-dd133195a5d0"}),k=a(10);var C=function(e){var t=e.name,a=e.title,n=e.isOpen,r=e.onClose,i=e.onSubmit,c=e.buttonTitle,s=e.isLoading,u=Object(k.a)(e,["name","title","isOpen","onClose","onSubmit","buttonTitle","isLoading"]);return o.a.createElement("div",{id:"".concat(t,"-form"),className:"popup ".concat(n&&"popup_open")},o.a.createElement("form",{id:"".concat(t,"-form_container"),className:"popup__container",onSubmit:i,noValidate:!0},o.a.createElement("h2",{className:"popup__header"},a),u.children,o.a.createElement("button",{className:"popup__submit-button",type:"submit"},!0===s?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":c),o.a.createElement("button",{className:"popup__close-button",type:"reset",onClick:r})))};var g=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=e.isLoading,i=o.a.useContext(m),c=o.a.useState(""),u=Object(s.a)(c,2),l=u[0],p=u[1],d=o.a.useState(""),_=Object(s.a)(d,2),f=_[0],h=_[1];function v(e){"userName"===e.target.name?p(e.target.value):h(e.target.value)}return o.a.useEffect((function(){p(i.name),h(i.about)}),[i]),o.a.createElement(C,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n(l,f)},isLoading:r},o.a.createElement("input",{id:"user-input",className:"popup__input popup__input_type_user-name",name:"userName",type:"text",minLength:"2",maxLength:"40",pattern:"[a-zA-Z\u0430-\u044f\u0410-\u042f -]{1,}",placeholder:"\u0418\u043c\u044f",defaultValue:l,onChange:v,required:!0}),o.a.createElement("span",{id:"user-input-error",className:"popup__input-error"}),o.a.createElement("input",{id:"about-input",className:"popup__input popup__input_type_user-about",name:"userAbout",type:"text",minLength:"2",maxLength:"200",placeholder:"\u041e \u0441\u0435\u0431\u0435",defaultValue:f,onChange:v,required:!0}),o.a.createElement("span",{id:"about-input-error",className:"popup__input-error"}))};var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=e.isLoading,i=o.a.useRef();return o.a.useEffect((function(){i.current.value=""}),[t]),o.a.createElement(C,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n(i.current.value)},isLoading:r},o.a.createElement("input",{id:"avatar-input",className:"popup__input popup__input_type_image-link",name:"userAvatar",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",ref:i,required:!0}),o.a.createElement("span",{id:"avatar-input-error",className:"popup__input-error"}))};var y=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,r=e.isLoading,i=o.a.useState(""),c=Object(s.a)(i,2),u=c[0],l=c[1],p=o.a.useState(""),m=Object(s.a)(p,2),d=m[0],_=m[1];return o.a.useEffect((function(){l(""),_("")}),[t]),o.a.createElement(C,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n(u,d)},isLoading:r},o.a.createElement("input",{id:"name-input",className:"popup__input popup__input_type_place-name",name:"cardName",type:"text",minLength:"1",maxLength:"30",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:u,onChange:function(e){l(e.target.value)},required:!0}),o.a.createElement("span",{id:"name-input-error",className:"popup__input-error"}),o.a.createElement("input",{id:"link-input",className:"popup__input popup__input_type_image-link",name:"cardLink",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",value:d,onChange:function(e){_(e.target.value)},required:!0}),o.a.createElement("span",{id:"link-input-error",className:"popup__input-error"}))};var O=function(){var e=o.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),i=Object(s.a)(r,2),u=i[0],l=i[1],d=o.a.useState(!1),v=Object(s.a)(d,2),b=v[0],k=v[1],C=o.a.useState({isOpen:!1}),O=Object(s.a)(C,2),L=O[0],S=O[1],U=o.a.useState(""),j=Object(s.a)(U,2),T=j[0],A=j[1],x=o.a.useState([]),P=Object(s.a)(x,2),R=P[0],D=P[1],w=o.a.useState(!1),z=Object(s.a)(w,2),I=z[0],q=z[1];function J(){n(!1),l(!1),k(!1),S({isOpen:!1}),q(!1)}return o.a.useEffect((function(){Promise.all([E.getUserInfo(),E.getInitialCards()]).then((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];A(a),D(n)})).catch((function(e){return console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445: ".concat(e))}))}),[]),o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"page__content"},o.a.createElement(m.Provider,{value:T},o.a.createElement(p,null),o.a.createElement(_,{onEditProfile:function(){n(!0)},onAddPlace:function(){l(!0)},onEditAvatar:function(){k(!0)},onCardClick:function(e){S({isOpen:!0,src:e.link,title:e.name})},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===T._id}));E.changeLikeCardStatus(e._id,!t).then((function(t){var a=R.map((function(a){return a._id===e._id?t:a}));D(a)})).catch((function(e){return console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u043b\u0430\u0439\u043a\u0430: ".concat(e))}))},onCardDelete:function(e){E.removeCard(e._id).then((function(){D(R.filter((function(t){return t._id!==e._id})))})).catch((function(e){return console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))},cards:R}),o.a.createElement(g,{isOpen:a,onClose:J,onUpdateUser:function(e,t){q(!0),E.setUserInfo({name:e,about:t}).then((function(e){A(e),J()})).catch((function(e){return console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445: ".concat(e))}))},isLoading:I}),o.a.createElement(y,{isOpen:u,onClose:J,onAddPlace:function(e,t){q(!0),E.addCard({name:e,link:t,alt:e}).then((function(e){D([e].concat(Object(c.a)(R))),J()})).catch((function(e){return console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))},isLoading:I}),o.a.createElement(N,{isOpen:b,onClose:J,onUpdateAvatar:function(e){q(!0),E.setUserAvatar({avatar:e}).then((function(e){A(e),J()})).catch((function(e){return console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(e))}))},isLoading:I}),o.a.createElement(h,{cardSrc:L.src,cardTitle:L.title,isOpen:L.isOpen,onClose:J}),o.a.createElement(f,null))))};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a.p+"static/media/logo.855a8c98.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.8e183913.chunk.js.map