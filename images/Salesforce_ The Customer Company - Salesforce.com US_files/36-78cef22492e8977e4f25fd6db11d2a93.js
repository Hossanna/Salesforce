(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1493:
/*!******************************************************************************!*\
  !*** ../player/components/media/video/hlsJsVideo/hlsJsVideo.tsx + 1 modules ***!
  \******************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ../player/components/media/video/Video.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ../player/components/utils/customHooks/useMux.ts */
/*! ModuleConcatenation bailout: Cannot concat with ../player/components/utils/customHooks/useStoreSelector.ts */
/*! ModuleConcatenation bailout: Cannot concat with ../player/components/utils/errorBoundary/logError.ts (<- Module is referenced from these modules with unsupported syntax: ./shell/middlewares/chunk-loader.js (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with ../player/state/analytics/actions.ts */
/*! ModuleConcatenation bailout: Cannot concat with ../player/state/config/types.ts */
/*! ModuleConcatenation bailout: Cannot concat with ../player/state/playback/actions.ts */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/hls.js/dist/hls.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-redux/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,r){"use strict";r.r(t);var A=r(366),S=r.n(A),D=r(370),n=r(906),m=r.n(n),h=r(944),w=r(907),y=r(368),k=r(379),I=r(401),_=r(583);var P=r(261);t.default=function(e){var a=e.onNetworkError,o=Object(D.c)(),e=Object(A.useState)(!0),n=e[0],t=e[1],r=Object(y.c)("canPlay"),c=Object(y.c)("quality"),u=Object(y.c)("audioTrack"),f=Object(y.b)("preload"),i=Object(D.d)(function(e){e=e.ui.splashScreen;return"none"!==f||!e}),s=Object(D.d)(function(e){var t=e.playback.currentChapter,e=e.config.chapters;return i?e[t].sources.hls:null}),l=Object(D.d)(function(e){var t=e.playback.paused,r=e.config,e=r.firstFrame,r=r.playlistStartOpen;return"auto"!==f&&n&&(!t||e||r)}),O=Object(A.useRef)(null),b=Object(A.useRef)(),E=Object(A.useRef)(c),e=Object(A.useState)(!1),d=e[0],v=e[1],e=Object(A.useState)(!1),j=e[0],p=e[1],e=Object(A.useState)(!1),T=e[0],R=e[1];return Object(A.useEffect)(function(){b.current=new m.a({autoStartLoad:"auto"===f,capLevelToPlayerSize:!0,startLevel:"auto"===E.current?-1:void 0,maxBufferSize:1e6});function r(){return p(!0)}function n(e,t){t=t.audioTracks,v(!0),t=t.map(function(e){return e.name}),o(Object(k.v)(t))}function c(){return R(!0)}function u(e,t){t.fatal&&t.type==m.a.ErrorTypes.NETWORK_ERROR&&(Object(P.logError)({error:new Error(t.details),allowBots:!1}),a())}return b.current.on(m.a.Events.MEDIA_ATTACHED,r),b.current.on(m.a.Events.MANIFEST_PARSED,n),b.current.on(m.a.Events.AUDIO_TRACKS_UPDATED,c),b.current.on(m.a.Events.ERROR,u),b.current.attachMedia(O.current),o(Object(I.q)("hls")),function(){var e,t;v(!1),p(!1),R(!1),null!==(e=b.current)&&void 0!==e&&e.off(m.a.Events.MEDIA_ATTACHED,r),null!==(e=b.current)&&void 0!==e&&e.off(m.a.Events.MANIFEST_PARSED,n),null!==(e=b.current)&&void 0!==e&&e.off(m.a.Events.AUDIO_TRACKS_UPDATED,c),null!==(e=b.current)&&void 0!==e&&e.off(m.a.Events.ERROR,u);try{null!==(t=b.current)&&void 0!==t&&t.destroy()}catch(e){if(!(e instanceof TypeError&&"listener must be a function"===e.message))throw e}o(Object(I.k)())}},[o,f,a]),Object(A.useEffect)(function(){var e,t,r,n;j&&s&&(t=s.find(function(e){return"auto"===e.profile})||s[0],n=(r=s.map(function(e){return e.profile})).includes(E.current)?E.current:t.profile,null!==(e=b.current)&&void 0!==e&&e.loadSource(t.url),o(Object(k.w)(r)),o(Object(k.D)(n)))},[j,s,o]),Object(A.useEffect)(function(){var t,e;d&&b.current&&(e=b.current.levels.map(function(e){return e.height}),b.current.nextLevel=(e=e,"auto"===(t=c)?-1:e.map(function(t){return _.d.find(function(e){return t<=parseInt(e)})}).findIndex(function(e){return e===t})))},[d,c]),Object(A.useEffect)(function(){T&&b.current&&(b.current.audioTrack=u)},[T,u]),Object(A.useEffect)(function(){var e;l&&d&&(null!==(e=b.current)&&void 0!==e&&e.startLoad(),t(!1))},[l,d]),Object(A.useEffect)(function(){r&&O.current&&0===O.current.currentTime&&(O.current.currentTime=O.current.currentTime)},[O,r]),Object(w.a)(O,b),S.a.createElement(h.a,{ref:O,testDataId:"hls-video"})}}}]);