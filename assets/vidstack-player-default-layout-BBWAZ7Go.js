const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-BEi14iNw2-BWqEpMyw.js","assets/vidstack-D9mvYVIz-RqVQ1Hhz.js"])))=>i.map(i=>d[i]);
import{w as e}from"./app-Bss4AI-Q.js";import{At as t,Ct as n,Dt as r,Ft as i,G as a,H as o,It as s,K as c,Mt as l,Ot as u,Pt as d,St as f,Tt as p,W as m,X as h,Y as g,at as _,ct as v,it as y,jt as ee,n as te,nt as b,o as ne,pt as x,rt as re,tt as S,vt as ie,wt as ae,xt as oe,yt as se}from"./vidstack-D9mvYVIz-RqVQ1Hhz.js";import{S as ce,a as le,b as ue,d as de,t as fe,x as pe,y as me}from"./vidstack-CgfrU1hS-kn7SV6Mr.js";import{n as he,t as ge}from"./vidstack-DmKKlMSK-CwWwVtjd.js";import{n as C,r as w}from"./vidstack-CYE89tBD-BQ0NG9DX.js";import{n as _e}from"./vidstack-B1Z6f96t-DSxfLiaI.js";import{a as ve,i as ye,n as T,o as E,r as be,t as xe}from"./vidstack-DM8v4Khu-CRx9w9KD.js";import{t as D}from"./vidstack-LrKZmdyw-CXa2ynTq.js";var{I:Se}=ve,Ce=e=>e.strings===void 0,we={},Te=(e,t=we)=>e._$AH=t,O={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},k=e=>(...t)=>({_$litDirective$:e,values:t}),Ee=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},A=(e,t)=>{var n,r;let i=e._$AN;if(i===void 0)return!1;for(let e of i)(r=(n=e)._$AO)==null||r.call(n,t,!1),A(e,t);return!0},j=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},De=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ae(t)}};function Oe(e){this._$AN===void 0?this._$AM=e:(j(this),this._$AM=e,De(this))}function ke(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)A(r[e],!1),j(r[e]);else r!=null&&(A(r,!1),j(r));else A(this,e)}var Ae=e=>{var t,n;e.type==O.CHILD&&((t=e)._$AP??(t._$AP=ke),(n=e)._$AQ??(n._$AQ=Oe))},je=class extends Ee{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),De(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(r=this.disconnected)==null||r.call(this)),t&&(A(this,e),j(this))}setValue(e){if(Ce(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Me=e=>e??T,Ne=class extends Ee{constructor(e){if(super(e),this.et=T,e.type!==O.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===T||e==null)return this.ft=void 0,this.et=e;if(e===ye)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.et)return this.ft;this.et=e;let t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ne.directiveName=`unsafeHTML`,Ne.resultType=1;var Pe=class extends Ne{};Pe.directiveName=`unsafeSVG`,Pe.resultType=2;var Fe=k(Pe),Ie=class extends je{#e=null;#t=!1;#n=null;constructor(e){super(e),this.#t=e.type===O.ATTRIBUTE||e.type===O.BOOLEAN_ATTRIBUTE}render(e){return e!==this.#e&&(this.disconnected(),this.#e=e,this.isConnected&&this.#r()),this.#e?this.#i(n(this.#e)):T}reconnected(){this.#r()}disconnected(){this.#n?.(),this.#n=null}#r(){this.#e&&(this.#n=h(this.#o.bind(this)))}#i(e){return this.#t?Me(e):e}#a(e){this.setValue(this.#i(e))}#o(){this.#a(this.#e?.())}};function M(e){return k(Ie)(a(e))}var Le=class{#e;#t;elements=new Set;constructor(e,t){this.#e=e,this.#t=t}connect(){this.#r();let e=new MutationObserver(this.#n);for(let t of this.#e)e.observe(t,{childList:!0,subtree:!0});f(()=>e.disconnect()),f(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(e,t){re(e)?(t.textContent=``,t.append(e)):(be(null,t),be(e,t)),t.style.display||(t.style.display=`contents`);let n=t.firstElementChild;if(!n)return;let r=t.getAttribute(`data-class`);r&&n.classList.add(...r.split(` `))}#n=o(this.#r.bind(this));#r(e){if(e&&!e.some(e=>e.addedNodes.length))return;let t=!1,n=this.#e.flatMap(e=>[...e.querySelectorAll(`slot`)]);for(let e of n)!e.hasAttribute(`name`)||this.elements.has(e)||(this.elements.add(e),t=!0);t&&this.#t(this.elements)}},Re=0,N=`data-slot-id`,ze=class{#e;slots;constructor(e){this.#e=e,this.slots=new Le(e,this.#n.bind(this))}connect(){this.slots.connect(),this.#n();let e=new MutationObserver(this.#t);for(let t of this.#e)e.observe(t,{childList:!0});f(()=>e.disconnect())}#t=o(this.#n.bind(this));#n(){for(let e of this.#e)for(let t of e.children){if(t.nodeType!==1)continue;let e=t.getAttribute(`slot`);if(!e)continue;t.style.display=`none`;let n=t.getAttribute(N);n||t.setAttribute(N,n=++Re+``);for(let r of this.slots.elements){if(r.getAttribute(`name`)!==e||r.getAttribute(N)===n)continue;let i=document.importNode(t,!0);e.includes(`-icon`)&&i.classList.add(`vds-icon`),i.style.display=``,i.removeAttribute(`slot`),this.slots.assign(i,r),r.setAttribute(N,n)}}}};function Be({name:e,class:t,state:n,paths:r,viewBox:i=`0 0 32 32`}){return E`<svg
    class="${`vds-icon`+(t?` ${t}`:``)}"
    viewBox="${i}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${Me(e??n)}
  >
    ${x(r)?Fe(r):M(r)}
  </svg>`}var Ve=class{#e={};#t=!1;slots;constructor(e){this.slots=new Le(e,this.#r.bind(this))}connect(){this.slots.connect()}load(){this.loadIcons().then(e=>{this.#e=e,this.#t=!0,this.#r()})}*#n(){for(let e of Object.keys(this.#e)){let t=`${e}-icon`;for(let n of this.slots.elements)n.name===t&&(yield{icon:this.#e[e],slot:n})}}#r(){if(this.#t)for(let{icon:e,slot:t}of this.#n())this.slots.assign(e,t)}},He=class extends Ve{connect(){super.connect();let{player:e}=C();if(!e.el)return;let t,n=new IntersectionObserver(e=>{e[0]?.isIntersecting&&(t?.(),t=void 0,this.load())});n.observe(e.el),t=f(()=>n.disconnect())}},P=new WeakMap,F=k(class extends je{render(e){return T}update(e,[t]){let n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.dt=e.options?.host,this.ot(this.lt=e.element)),T}ot(e){if(typeof this.G==`function`){let t=this.dt??globalThis,n=P.get(t);n===void 0&&(n=new WeakMap,P.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){return typeof this.G==`function`?P.get(this.dt??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Ue=c();function I(){return s(Ue)}var We={colorScheme:`system`,download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:`bottom`,noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1},L=class extends te{static props=We;#e;#t=a(()=>{let e=this.$props.when();return this.#r(e)});#n=a(()=>{let e=this.$props.smallWhen();return this.#r(e)});get isMatch(){return this.#t()}get isSmallLayout(){return this.#n()}onSetup(){this.#e=C(),this.setAttributes({"data-match":this.#t,"data-sm":()=>this.#n()?``:null,"data-lg":()=>this.#n()?null:``,"data-size":()=>this.#n()?`sm`:`lg`,"data-no-scrub-gesture":this.$props.noScrubGesture}),p(Ue,{...this.$props,when:this.#t,smallWhen:this.#n,userPrefersAnnouncements:t(!0),userPrefersKeyboardAnimations:t(!0),menuPortal:t(null)})}onAttach(e){ce(e,this.$props.colorScheme)}#r(e){return e!==`never`&&(b(e)?e:a(()=>e(this.#e.player.state))())}},Ge=L.prototype;ae(Ge,`isMatch`),ae(Ge,`isSmallLayout`);function Ke(e,t){h(()=>{let{player:n}=C(),r=n.el;return r&&u(r,`data-layout`,t()&&e),()=>r?.removeAttribute(`data-layout`)})}function R(e,t){return e()?.[t]??t}function z(){return M(()=>{let{translations:e,userPrefersAnnouncements:t}=I();return t()?E`<media-announcer .translations=${M(e)}></media-announcer>`:null})}function B(e,t=``){return E`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:``}`}
  ></slot>`}function V(e){return e.map(e=>B(e))}function H(e,t){return M(()=>R(e,t))}function U({tooltip:e}){let{translations:t}=I(),{remotePlaybackState:n}=w(),r=M(()=>`${R(t,`AirPlay`)} ${i(n())}`),a=H(t,`AirPlay`);return E`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${r}>
          ${B(`airplay`)}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function qe({tooltip:e}){let{translations:t}=I(),{remotePlaybackState:n}=w(),r=M(()=>`${R(t,`Google Cast`)} ${i(n())}`),a=H(t,`Google Cast`);return E`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${r}>
          ${B(`google-cast`)}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function W({tooltip:e}){let{translations:t}=I(),n=H(t,`Play`),r=H(t,`Pause`);return E`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${H(t,`Play`)}
        >
          ${V([`play`,`pause`,`replay`])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${n}</span>
        <span class="vds-pause-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Je({tooltip:e,ref:t=oe}){let{translations:n}=I(),r=H(n,`Mute`),i=H(n,`Unmute`);return E`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${H(n,`Mute`)}
          ${F(t)}
        >
          ${V([`mute`,`volume-low`,`volume-high`])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${i}</span>
        <span class="vds-unmute-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ye({tooltip:e}){let{translations:t}=I(),n=H(t,`Closed-Captions On`),r=H(t,`Closed-Captions Off`);return E`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${H(t,`Captions`)}
        >
          ${V([`cc-on`,`cc-off`])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${r}</span>
        <span class="vds-cc-off-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Xe(){let{translations:e}=I(),t=H(e,`Enter PiP`),n=H(e,`Exit PiP`);return E`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${H(e,`PiP`)}
        >
          ${V([`pip-enter`,`pip-exit`])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ze({tooltip:e}){let{translations:t}=I(),n=H(t,`Enter Fullscreen`),r=H(t,`Exit Fullscreen`);return E`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${H(t,`Fullscreen`)}
        >
          ${V([`fs-enter`,`fs-exit`])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${n}</span>
        <span class="vds-fs-exit-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Qe({backward:e,tooltip:t}){let{translations:n,seekStep:r}=I(),i=e?`Seek Backward`:`Seek Forward`,a=H(n,i);return E`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${M(()=>(e?-1:1)*r())}
          aria-label=${a}
        >
          ${B(e?`seek-backward`:`seek-forward`)}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${H(n,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function $e(){let{translations:e}=I(),{live:t}=w(),n=H(e,`Skip To Live`),r=H(e,`LIVE`);return t()?E`
        <media-live-button class="vds-live-button" aria-label=${n}>
          <span class="vds-live-button-text">${r}</span>
        </media-live-button>
      `:null}function et(){return M(()=>{let{download:e,translations:t}=I(),n=e();if(v(n))return null;let{source:r,title:i}=w(),a=r(),o=he({title:i(),src:a,download:n});return x(o?.url)?E`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${H(t,`Download`)}
                href=${ge(o.url,{download:o.name})}
                download=${o.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${H(t,`Download`)}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function tt(){let{translations:e}=I();return E`
    <media-captions
      class="vds-captions"
      .exampleText=${H(e,`Captions look like this`)}
    ></media-captions>
  `}function G(){return E`<div class="vds-controls-spacer"></div>`}function nt(e,t){return E`
    <media-menu-portal .container=${M(e)} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function rt(e,t,n,r){let i=x(t)?document.querySelector(t):t;i||=e?.closest(`dialog`),i||=document.body;let a=document.createElement(`div`);a.style.display=`contents`,a.classList.add(n),i.append(a),h(()=>{if(!a)return;let{viewType:e}=w(),t=r();u(a,`data-view-type`,e()),u(a,`data-sm`,t),u(a,`data-lg`,!t),u(a,`data-size`,t?`sm`:`lg`)});let{colorScheme:o}=I();return ce(a,o),a}function it({placement:e,tooltip:n,portal:r}){let{textTracks:i}=C(),{viewType:o,seekableStart:s,seekableEnd:c}=w(),{translations:l,thumbnails:u,menuPortal:f,noModal:p,menuGroup:m,smallWhen:h}=I();if(a(()=>{let e=s(),n=c(),r=t(null);return _e(i,`chapters`,r.set),!r()?.cues.filter(t=>t.startTime<=n&&t.endTime>=e)?.length})())return null;let g=a(()=>p()?d(e):h()?null:d(e)),_=a(()=>!h()&&m()===`bottom`&&o()===`video`?26:0),v=t(!1);function ee(){v.set(!0)}function te(){v.set(!1)}let b=E`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${M(g)}
      offset=${M(_)}
    >
      ${M(()=>v()?E`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${M(u)}
          >
            <template>
              <media-radio class="vds-chapter-radio vds-radio">
                <media-thumbnail class="vds-thumbnail"></media-thumbnail>
                <div class="vds-chapter-radio-content">
                  <span class="vds-chapter-radio-label" data-part="label"></span>
                  <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
                  <span class="vds-chapter-radio-duration" data-part="duration"></span>
                </div>
              </media-radio>
            </template>
          </media-chapters-radio-group>
        `:null)}
    </media-menu-items>
  `;return E`
    <media-menu class="vds-chapters-menu vds-menu" @open=${ee} @close=${te}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${H(l,`Chapters`)}
          >
            ${B(`menu-chapters`)}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${y(n)?M(n):n}
        >
          ${H(l,`Chapters`)}
        </media-tooltip-content>
      </media-tooltip>
      ${r?nt(f,b):b}
    </media-menu>
  `}function at(e){let{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g,` `)}var ot={type:`color`},st={type:`radio`,values:{"Monospaced Serif":`mono-serif`,"Proportional Serif":`pro-serif`,"Monospaced Sans-Serif":`mono-sans`,"Proportional Sans-Serif":`pro-sans`,Casual:`casual`,Cursive:`cursive`,"Small Capitals":`capitals`}},ct={type:`slider`,min:0,max:400,step:25,upIcon:null,downIcon:null},lt={type:`slider`,min:0,max:100,step:5,upIcon:null,downIcon:null},ut={type:`radio`,values:[`None`,`Drop Shadow`,`Raised`,`Depressed`,`Outline`]},K={fontFamily:`pro-sans`,fontSize:`100%`,textColor:`#ffffff`,textOpacity:`100%`,textShadow:`none`,textBg:`#000000`,textBgOpacity:`100%`,displayBg:`#000000`,displayBgOpacity:`0%`},q=Object.keys(K).reduce((e,n)=>({...e,[n]:t(K[n])}),{});for(let e of Object.keys(q)){let t=D.getItem(`vds-player:${m(e)}`);x(t)&&q[e].set(t)}function dt(){for(let e of Object.keys(q)){let t=K[e];q[e].set(t)}}var ft=!1,pt=new Set;function mt(){let{player:e}=C();pt.add(e),ht(e),f(()=>pt.delete(e)),ft||=(r(()=>{for(let e of ie(q)){let t=q[e],n=K[e],r=`vds-player:${m(e)}`;h(()=>{let i=t(),a=i===n;for(let t of pt)gt(t,e,i);a?D.removeItem(r):D.setItem(r,i)})}},null),!0)}function ht(e){for(let t of ie(q))gt(e,t,q[t]())}function gt(e,t,n){let r=K[t],i=`--media-user-${m(t)}`,a=n===r?null:_t(t,n);if(t===`fontFamily`){let t=n===`capitals`?`small-caps`:null;e.el?.style.setProperty(`--media-user-font-variant`,t)}e.el?.style.setProperty(i,a)}function _t(e,t){switch(e){case`fontFamily`:return yt(t);case`fontSize`:case`textOpacity`:case`textBgOpacity`:case`displayBgOpacity`:return vt(t);case`textColor`:return`rgb(${at(t)} / var(--media-user-text-opacity, 1))`;case`textShadow`:return bt(t);case`textBg`:return`rgb(${at(t)} / var(--media-user-text-bg-opacity, 1))`;case`displayBg`:return`rgb(${at(t)} / var(--media-user-display-bg-opacity, 1))`}}function vt(e){return(parseInt(e)/100).toString()}function yt(e){switch(e){case`mono-serif`:return`"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace`;case`mono-sans`:return`"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace`;case`pro-sans`:return`Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif`;case`casual`:return`"Comic Sans MS", Impact, Handlee, fantasy`;case`cursive`:return`"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive`;case`capitals`:return`"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps`;default:return`"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif`}}function bt(e){switch(e){case`drop shadow`:return`rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px`;case`raised`:return`rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px`;case`depressed`:return`rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px`;case`outline`:return`rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px`;default:return``}}var xt=0;function J({label:e=``,value:t=``,children:n}){if(!e)return E`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${n}</div>
      </div>
    `;let r=`vds-menu-section-${++xt}`;return E`
    <section class="vds-menu-section" role="group" aria-labelledby=${r}>
      <div class="vds-menu-section-title">
        <header id=${r}>${e}</header>
        ${t?E`<div class="vds-menu-section-value">${t}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${n}</div>
    </section>
  `}function St({label:e,children:t}){return E`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${e}</div>
      ${t}
    </div>
  `}function Y({label:e,icon:t,hint:n}){return E`
    <media-menu-button class="vds-menu-item">
      ${B(`menu-arrow-left`,`vds-menu-close-icon`)}
      ${t?B(t,`vds-menu-item-icon`):null}
      <span class="vds-menu-item-label">${M(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${n?M(n):null} </span>
      ${B(`menu-arrow-right`,`vds-menu-open-icon`)}
    </media-menu-button>
  `}function Ct({value:e=null,options:t,hideLabel:n=!1,children:r=null,onChange:i=null}){function a(e){let{value:t,label:i}=e;return E`
      <media-radio class="vds-radio" value=${t}>
        ${B(`menu-radio-check`)}
        ${n?null:E`
              <span class="vds-radio-label" data-part="label">
                ${x(i)?i:M(i)}
              </span>
            `}
        ${y(r)?r(e):r}
      </media-radio>
    `}return E`
    <media-radio-group
      class="vds-radio-group"
      value=${x(e)?e:e?M(e):``}
      @change=${i}
    >
      ${S(t)?t.map(a):M(()=>t().map(a))}
    </media-radio-group>
  `}function wt(e){return S(e)?e.map(e=>({label:e,value:e.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function Tt(){return E`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function Et(){return E`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function Dt({label:e=null,value:t=null,upIcon:n=``,downIcon:r=``,children:i,isMin:a,isMax:o}){let s=e||t,c=[r?B(r,`down`):null,i,n?B(n,`up`):null];return E`
    <div
      class=${`vds-menu-item vds-menu-slider-item${s?` group`:``}`}
      data-min=${M(()=>a()?``:null)}
      data-max=${M(()=>o()?``:null)}
    >
      ${s?E`
            <div class="vds-menu-slider-title">
              ${[e?E`<div>${e}</div>`:null,t?E`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}var Ot={...ct,upIcon:`menu-opacity-up`,downIcon:`menu-opacity-down`},kt={...lt,upIcon:`menu-opacity-up`,downIcon:`menu-opacity-down`};function At(){return M(()=>{let{hasCaptions:e}=w(),{translations:t}=I();return e()?E`
      <media-menu class="vds-font-menu vds-menu">
        ${Y({label:()=>R(t,`Caption Styles`)})}
        <media-menu-items class="vds-menu-items">
          ${[J({label:H(t,`Font`),children:[jt(),Mt()]}),J({label:H(t,`Text`),children:[Nt(),Ft(),Pt()]}),J({label:H(t,`Text Background`),children:[It(),Lt()]}),J({label:H(t,`Display Background`),children:[Rt(),zt()]}),J({children:[Bt()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function jt(){return X({label:`Family`,option:st,type:`fontFamily`})}function Mt(){return X({label:`Size`,option:Ot,type:`fontSize`})}function Nt(){return X({label:`Color`,option:ot,type:`textColor`})}function Pt(){return X({label:`Opacity`,option:kt,type:`textOpacity`})}function Ft(){return X({label:`Shadow`,option:ut,type:`textShadow`})}function It(){return X({label:`Color`,option:ot,type:`textBg`})}function Lt(){return X({label:`Opacity`,option:kt,type:`textBgOpacity`})}function Rt(){return X({label:`Color`,option:ot,type:`displayBg`})}function zt(){return X({label:`Opacity`,option:kt,type:`displayBgOpacity`})}function Bt(){let{translations:e}=I();return E`
    <button class="vds-menu-item" role="menuitem" @click=${dt}>
      <span class="vds-menu-item-label">${M(()=>R(e,`Reset`))}</span>
    </button>
  `}function X({label:e,option:t,type:n}){let{player:r}=C(),{translations:i}=I(),a=q[n],o=()=>R(i,e);function s(){ee(),r.dispatchEvent(new Event(`vds-font-change`))}if(t.type===`color`){function e(e){a.set(e.target.value),s()}return St({label:M(o),children:E`
        <input
          class="vds-color-picker"
          type="color"
          .value=${M(a)}
          @input=${e}
        />
      `})}if(t.type===`slider`){let{min:e,max:n,step:r,upIcon:i,downIcon:c}=t;function l(e){a.set(e.detail+`%`),s()}return Dt({label:M(o),value:M(a),upIcon:i,downIcon:c,isMin:()=>a()===e+`%`,isMax:()=>a()===n+`%`,children:E`
        <media-slider
          class="vds-slider"
          min=${e}
          max=${n}
          step=${r}
          key-step=${r}
          .value=${M(()=>parseInt(a()))}
          aria-label=${M(o)}
          @value-change=${l}
          @drag-value-change=${l}
        >
          ${Tt()}${Et()}
        </media-slider>
      `})}let c=wt(t.values);return E`
    <media-menu class=${`vds-${m(n)}-menu vds-menu`}>
      ${Y({label:o,hint:()=>{let e=a(),t=c.find(t=>t.value===e)?.label||``;return R(i,x(t)?t:t())}})}
      <media-menu-items class="vds-menu-items">
        ${Ct({value:a,options:c,onChange({detail:e}){a.set(e),s()}})}
      </media-menu-items>
    </media-menu>
  `}function Vt({label:e,checked:r,defaultChecked:i=!1,storageKey:a,onChange:o}){let{translations:s}=I(),c=t(!!((a?D.getItem(a):null)??i)),l=t(!1),u=M(fe(c)),d=H(s,e);a&&o(n(c)),r&&h(()=>void c.set(r()));function f(e){e?.button!==1&&(c.set(e=>!e),a&&D.setItem(a,c()?`1`:``),o(c(),e),l.set(!1))}function p(e){_(e)&&f()}function m(e){e.button===0&&l.set(!0)}return E`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${d}
      aria-checked=${u}
      data-active=${M(()=>l()?``:null)}
      @pointerup=${f}
      @pointerdown=${m}
      @keydown=${p}
    ></div>
  `}function Ht(){return M(()=>{let{translations:e}=I();return E`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${Y({label:()=>R(e,`Accessibility`),icon:`menu-accessibility`})}
        <media-menu-items class="vds-menu-items">
          ${[J({children:[Ut(),Wt()]}),J({children:[At()]})]}
        </media-menu-items>
      </media-menu>
    `})}function Ut(){let{userPrefersAnnouncements:e,translations:t}=I(),n=`Announcements`;return St({label:H(t,n),children:Vt({label:n,storageKey:`vds-player::announcements`,onChange(t){e.set(t)}})})}function Wt(){return M(()=>{let{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:n}=I(),{viewType:r}=w();if(a(()=>r()!==`video`||n())())return null;let i=`Keyboard Animations`;return St({label:H(e,i),children:Vt({label:i,defaultChecked:!0,storageKey:`vds-player::keyboard-animations`,onChange(e){t.set(e)}})})})}function Gt(){return M(()=>{let{noAudioGain:e,translations:t}=I(),{audioTrack:n,audioTracks:r,canSetAudioGain:i}=w();return a(()=>!(i()&&!e())&&r().length<=1)()?null:E`
      <media-menu class="vds-audio-menu vds-menu">
        ${Y({label:()=>R(t,`Audio`),icon:`menu-audio`,hint:()=>n()?.label??``})}
        <media-menu-items class="vds-menu-items">
          ${[Kt(),qt()]}
        </media-menu-items>
      </media-menu>
    `})}function Kt(){return M(()=>{let{translations:e}=I(),{audioTracks:t}=w(),n=H(e,`Default`);return a(()=>t().length<=1)()?null:J({children:E`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${Y({label:()=>R(e,`Track`)})}
          <media-menu-items class="vds-menu-items">
            <media-audio-radio-group
              class="vds-audio-track-radio-group vds-radio-group"
              empty-label=${n}
            >
              <template>
                <media-radio class="vds-audio-track-radio vds-radio">
                  <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                  <span class="vds-radio-label" data-part="label"></span>
                </media-radio>
              </template>
            </media-audio-radio-group>
          </media-menu-items>
        </media-menu>
      `})})}function qt(){return M(()=>{let{noAudioGain:e,translations:t}=I(),{canSetAudioGain:n}=w();if(a(()=>!n()||e())())return null;let{audioGain:r}=w();return J({label:H(t,`Boost`),value:M(()=>Math.round(((r()??1)-1)*100)+`%`),children:[Dt({upIcon:`menu-audio-boost-up`,downIcon:`menu-audio-boost-down`,children:Jt(),isMin:()=>((r()??1)-1)*100<=Yt(),isMax:()=>((r()??1)-1)*100===Xt()})]})})}function Jt(){let{translations:e}=I(),t=H(e,`Boost`),n=Yt,r=Xt,i=Zt;return E`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${M(n)}
      max=${M(r)}
      step=${M(i)}
      key-step=${M(i)}
    >
      ${Tt()}${Et()}
    </media-audio-gain-slider>
  `}function Yt(){let{audioGains:e}=I(),t=e();return S(t)?t[0]??0:t.min}function Xt(){let{audioGains:e}=I(),t=e();return S(t)?t[t.length-1]??300:t.max}function Zt(){let{audioGains:e}=I(),t=e();return S(t)?t[1]-t[0]||25:t.step}function Qt(){return M(()=>{let{translations:e}=I(),{hasCaptions:t}=w(),n=H(e,`Off`);return t()?E`
      <media-menu class="vds-captions-menu vds-menu">
        ${Y({label:()=>R(e,`Captions`),icon:`menu-captions`})}
        <media-menu-items class="vds-menu-items">
          <media-captions-radio-group
            class="vds-captions-radio-group vds-radio-group"
            off-label=${n}
          >
            <template>
              <media-radio class="vds-caption-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
              </media-radio>
            </template>
          </media-captions-radio-group>
        </media-menu-items>
      </media-menu>
    `:null})}function $t(){return M(()=>{let{hideQualityBitrate:e,translations:t}=I(),{canSetQuality:n,qualities:r}=w();if(!n()||r().length<=1)return null;let i=H(t,`Auto`);return E`
      <media-menu class="vds-quality-menu vds-menu">
        ${Y({label:()=>R(t,`Quality`),icon:`menu-quality-up`})}
        <media-menu-items class="vds-menu-items">
          <media-quality-radio-group
            class="vds-quality-radio-group vds-radio-group"
            auto-label=${i}
            ?hide-bitrate=${M(e)}
          >
            <template>
              <media-radio class="vds-quality-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
                <span class="vds-radio-hint" data-part="bitrate"></span>
              </media-radio>
            </template>
          </media-quality-radio-group>
        </media-menu-items>
      </media-menu>
    `})}function en(){return M(()=>{let{translations:e}=I(),{canSetPlaybackRate:t,playbackRate:n}=w();return t()?E`
      <media-menu class="vds-speed-menu vds-menu">
        ${Y({label:()=>R(e,`Speed`),icon:`menu-speed-up`,hint:()=>n()===1?R(e,`Normal`):n()+`x`})}
        <media-menu-items class="vds-menu-items">
          ${J({label:H(e,`Speed`),value:M(()=>n()===1?R(e,`Normal`):n()+`x`),children:Dt({upIcon:`menu-font-size-up`,downIcon:`menu-font-size-down`,children:an(),isMin:()=>n()===tn(),isMax:()=>n()===nn()})})}
        </media-menu-items>
      </media-menu>
    `:null})}function tn(){let{playbackRates:e}=I(),t=e();return S(t)?t[0]??0:t.min}function nn(){let{playbackRates:e}=I(),t=e();return S(t)?t[t.length-1]??2:t.max}function rn(){let{playbackRates:e}=I(),t=e();return S(t)?t[1]-t[0]||.25:t.step}function an(){let{translations:e}=I(),t=H(e,`Speed`),n=tn,r=nn,i=rn;return E`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${M(n)}
      max=${M(r)}
      step=${M(i)}
      key-step=${M(i)}
    >
      ${Tt()}${Et()}
    </media-speed-slider>
  `}function on({placement:e,portal:n,tooltip:r}){return M(()=>{let{viewType:i}=w(),{translations:o,menuPortal:s,noModal:c,menuGroup:l,smallWhen:u}=I(),f=a(()=>c()?d(e):u()?null:d(e)),p=a(()=>!u()&&l()===`bottom`&&i()===`video`?26:0),m=t(!1);mt();function h(){m.set(!0)}function g(){m.set(!1)}let _=E`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${M(f)}
        offset=${M(p)}
      >
        ${M(()=>m()?[en(),$t(),Ht(),Gt(),Qt()]:null)}
      </media-menu-items>
    `;return E`
      <media-menu class="vds-settings-menu vds-menu" @open=${h} @close=${g}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${H(o,`Settings`)}
            >
              ${B(`menu-settings`,`vds-rotate-icon`)}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${y(r)?M(r):r}
          >
            ${H(o,`Settings`)}
          </media-tooltip-content>
        </media-tooltip>
        ${n?nt(s,_):_}
      </media-menu>
    `})}function Z({orientation:e,tooltip:n}){return M(()=>{let{pointer:r,muted:i,canSetVolume:a}=w();if(r()===`coarse`&&!i())return null;if(!a())return Je({tooltip:n});let o=t(void 0);return E`
      <div class="vds-volume" ?data-active=${M(me(o))} ${F(o.set)}>
        ${Je({tooltip:n})}
        <div class="vds-volume-popup">${sn({orientation:e})}</div>
      </div>
    `})}function sn({orientation:e}={}){let{translations:t}=I();return E`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${H(t,`Volume`)}
      orientation=${Me(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function cn(){let e=t(void 0),n=t(0),{thumbnails:r,translations:i,sliderChaptersMinWidth:a,disableTimeSlider:o,seekStep:s,noScrubGesture:c}=I(),l=H(i,`Seek`),u=M(o),d=M(()=>n()<a()),f=M(r);return ue(e,()=>{let t=e();t&&n.set(t.clientWidth)}),E`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${l}
      key-step=${M(s)}
      ?disabled=${u}
      ?no-swipe-gesture=${M(c)}
      ${F(e.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${d}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          .src=${f}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function ln(){return E`
    <div class="vds-time-group">
      ${M(()=>{let{duration:e}=w();return e()?[E`<media-time class="vds-time" type="current"></media-time>`,E`<div class="vds-time-divider">/</div>`,E`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function un(){return M(()=>{let{live:e,duration:t}=w();return e()?$e():t()?E`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function dn(){return M(()=>{let{live:e}=w();return e()?$e():ln()})}function fn(){return M(()=>{let{textTracks:e}=C(),{title:n,started:r}=w(),i=t(null);return _e(e,`chapters`,i.set),i()&&(r()||!n())?pn():E`<media-title class="vds-chapter-title"></media-title>`})}function pn(){return E`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}var mn=class extends He{async loadIcons(){let t=(await e(async()=>{let{icons:e}=await import(`./vidstack-BEi14iNw2-BWqEpMyw.js`);return{icons:e}},__vite__mapDeps([0,1]))).icons,n={};for(let e of Object.keys(t))n[e]=Be({name:e,paths:t[e]});return n}},hn=class extends L{static props={...super.props,when:({viewType:e})=>e===`audio`,smallWhen:({width:e})=>e<576}};function gn(){return[z(),tt(),E`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Qe({backward:!0,tooltip:`top start`}),W({tooltip:`top`}),Qe({tooltip:`top`}),_n(),cn(),un(),Z({orientation:`vertical`,tooltip:`top`}),Ye({tooltip:`top`}),et(),U({tooltip:`top`}),vn()]}
        </media-controls-group>
      </media-controls>
    `]}function _n(){return M(()=>{let e=t(void 0),n=t(!1),r=C(),{title:i,started:a,currentTime:o,ended:s}=w(),{translations:c}=I(),u=pe(e),d=()=>a()||o()>0,f=()=>`${R(c,s()?`Replay`:d()?`Continue`:`Play`)}: ${i()}`;h(()=>{u()&&document.activeElement===document.body&&r.player.el?.focus({preventScroll:!0})});function p(){let t=e(),r=!!t&&!u()&&t.clientWidth<t.children[0].clientWidth;t&&l(t,`vds-marquee`,r),n.set(r)}function m(){return E`
        <span class="vds-title-text">
          ${M(f)}${M(()=>d()?pn():null)}
        </span>
      `}return ue(e,p),i()?E`
          <span class="vds-title" title=${M(f)} ${F(e.set)}>
            ${[m(),M(()=>n()&&!u()?m():null)]}
          </span>
        `:G()})}function vn(){let e=`top end`;return[it({tooltip:`top`,placement:e,portal:!0}),on({tooltip:`top end`,placement:e,portal:!0})]}var yn=class extends ne(xe,hn){static tagName=`media-audio-layout`;static attrs={smallWhen:{converter(e){return e!==`never`&&!!e}}};#e;#t=t(!1);onSetup(){this.forwardKeepAlive=!1,this.#e=C(),this.#r(),this.#a()}onConnect(){this.#r(),Ke(`audio`,()=>this.isMatch),this.#i()}render(){return M(this.#n.bind(this))}#n(){return this.isMatch?gn():null}#r(){this.classList.add(`vds-audio-layout`)}#i(){let{menuPortal:e}=I();h(()=>{if(!this.isMatch)return;let t=rt(this,this.menuContainer,`vds-audio-layout`,()=>this.isSmallLayout),n=t?[this,t]:[this];return(this.$props.customIcons()?new ze(n):new mn(n)).connect(),e.set(t),()=>{t.remove(),e.set(null)}})}#a(){let{pointer:e}=this.#e.$state;h(()=>{e()===`coarse`&&h(this.#o.bind(this))})}#o(){if(!this.#t()){se(this,`pointerdown`,this.#s.bind(this),{capture:!0});return}se(this,`pointerdown`,e=>e.stopPropagation()),se(window,`pointerdown`,this.#c.bind(this))}#s(e){let{target:t}=e;de(t)&&t.closest(`.vds-time-slider`)&&(e.stopImmediatePropagation(),this.setAttribute(`data-scrubbing`,``),this.#t.set(!0))}#c(){this.#t.set(!1),this.removeAttribute(`data-scrubbing`)}},bn=k(class extends Ee{constructor(){super(...arguments),this.key=T}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(Te(e),this.key=t),n}}),xn=class extends L{static props={...super.props,when:({viewType:e})=>e===`video`,smallWhen:({width:e,height:t})=>e<576||t<380}};function Sn(){return M(()=>{let e=C(),{noKeyboardAnimations:n,userPrefersKeyboardAnimations:r}=I();if(a(()=>n()||!r())())return null;let i=t(!1),{lastKeyboardAction:o}=e.$state;h(()=>{i.set(!!o());let e=setTimeout(()=>i.set(!1),500);return()=>{i.set(!1),window.clearTimeout(e)}});let s=a(()=>{let e=o()?.action;return e&&i()?m(e):null}),c=a(()=>`vds-kb-action${i()?``:` hidden`}`),l=a(Cn),u=a(()=>{let e=Tn();return e?le(e):null});function d(){let e=u();return e?E`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${e}</div>
        </div>
      `:null}return E`
      <div class=${M(c)} data-action=${M(s)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${M(l)}</div>
        </div>
        ${M(()=>bn(o(),d()))}
      </div>
    `})}function Cn(){let{$state:e}=C(),t=e.lastKeyboardAction()?.action,n=e.audioGain()??1;switch(t){case`toggleMuted`:return e.muted()?`0%`:wn(e.volume(),n);case`volumeUp`:case`volumeDown`:return wn(e.volume(),n);default:return``}}function wn(e,t){return`${Math.round(e*t*100)}%`}function Tn(){let{$state:e}=C();switch(e.lastKeyboardAction()?.action){case`togglePaused`:return e.paused()?`kb-pause-icon`:`kb-play-icon`;case`toggleMuted`:return e.muted()||e.volume()===0?`kb-mute-icon`:e.volume()>=.5?`kb-volume-up-icon`:`kb-volume-down-icon`;case`toggleFullscreen`:return`kb-fs-${e.fullscreen()?`enter`:`exit`}-icon`;case`togglePictureInPicture`:return`kb-pip-${e.pictureInPicture()?`enter`:`exit`}-icon`;case`toggleCaptions`:return e.hasCaptions()?`kb-cc-${e.textTrack()?`on`:`off`}-icon`:null;case`volumeUp`:return`kb-volume-up-icon`;case`volumeDown`:return`kb-volume-down-icon`;case`seekForward`:return`kb-seek-forward-icon`;case`seekBackward`:return`kb-seek-backward-icon`;default:return null}}function En(){return[z(),Mn(),Q(),Sn(),tt(),E`<div class="vds-scrim"></div>`,E`
      <media-controls class="vds-controls">
        ${[On(),G(),E`<media-controls-group class="vds-controls-group"></media-controls-group>`,G(),E`
            <media-controls-group class="vds-controls-group">
              ${cn()}
            </media-controls-group>
          `,E`
            <media-controls-group class="vds-controls-group">
              ${[W({tooltip:`top start`}),Z({orientation:`horizontal`,tooltip:`top`}),dn(),fn(),Ye({tooltip:`top`}),Dn(),U({tooltip:`top`}),qe({tooltip:`top`}),et(),Xe(),Ze({tooltip:`top end`})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function Dn(){return M(()=>{let{menuGroup:e}=I();return e()===`bottom`?$():null})}function On(){return E`
    <media-controls-group class="vds-controls-group">
      ${M(()=>{let{menuGroup:e}=I();return e()===`top`?[G(),$()]:null})}
    </media-controls-group>
  `}function kn(){return[z(),Mn(),Q(),tt(),Sn(),E`<div class="vds-scrim"></div>`,E`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[U({tooltip:`top start`}),qe({tooltip:`bottom start`}),G(),Ye({tooltip:`bottom`}),et(),$(),Z({orientation:`vertical`,tooltip:`bottom end`})]}
        </media-controls-group>

        ${G()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[G(),W({tooltip:`top`}),G()]}
        </media-controls-group>

        ${G()}

        <media-controls-group class="vds-controls-group">
          ${[dn(),fn(),Ze({tooltip:`top end`})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${cn()}
        </media-controls-group>
      </media-controls>
    `,jn()]}function An(){return E`
    <div class="vds-load-container">
      ${[Q(),W({tooltip:`top`})]}
    </div>
  `}function jn(){return M(()=>{let{duration:e}=w();return e()===0?null:E`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function Q(){return E`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function $(){let{menuGroup:e,smallWhen:t}=I(),n=()=>e()===`top`||t()?`bottom`:`top`,r=a(()=>`${n()} ${e()===`top`?`end`:`center`}`),i=a(()=>`${n()} end`);return[it({tooltip:r,placement:i,portal:!0}),on({tooltip:r,placement:i,portal:!0})]}function Mn(){return M(()=>{let{noGestures:e}=I();return e()?null:E`
      <div class="vds-gestures">
        <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="pointerup"
          action="toggle:controls"
        ></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="dblpointerup"
          action="toggle:fullscreen"
        ></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
      </div>
    `})}var Nn=class extends ne(xe,xn){static tagName=`media-video-layout`;static attrs={smallWhen:{converter(e){return e!==`never`&&!!e}}};#e;onSetup(){this.forwardKeepAlive=!1,this.#e=C(),this.#t()}onConnect(){this.#t(),Ke(`video`,()=>this.isMatch),this.#n()}render(){return M(this.#r.bind(this))}#t(){this.classList.add(`vds-video-layout`)}#n(){let{menuPortal:e}=I();h(()=>{if(!this.isMatch)return;let t=rt(this,this.menuContainer,`vds-video-layout`,()=>this.isSmallLayout),n=t?[this,t]:[this];return(this.$props.customIcons()?new ze(n):new mn(n)).connect(),e.set(t),()=>{t.remove(),e.set(null)}})}#r(){let{load:e}=this.#e.$props,{canLoad:t,streamType:n,nativeControls:r}=this.#e.$state;return!r()&&this.isMatch?e()===`play`&&!t()?An():n()===`unknown`?Q():this.isSmallLayout?kn():En():null}};g(yn),g(Nn);