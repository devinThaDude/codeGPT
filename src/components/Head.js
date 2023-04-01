import React from 'react';
import { Helmet } from 'react-helmet';
  var host = window.location.hostname;
  var element = document.createElement('script');
  var firstScript = document.getElementsByTagName('script')[0];
  var url = ''
    .concat('assets/', 'm7yf6D7SNBZWY', '/', host, '/choice.js');
  var uspTries = 0;
  var uspTriesLimit = 3;
  element.async = true;
  element.type = 'text/javascript';
  element.src = url;

  firstScript.parentNode.insertBefore(element, firstScript);

async function makeStub() {
    var TCF_LOCATOR_NAME = '__tcfapiLocator';
    var queue = [];
    var win = window;
    var cmpFrame;

    function addFrame() {
      var doc = win.document;
      var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

      if (!otherCMP) {
        if (doc.body) {
          var iframe = doc.createElement('iframe');

          iframe.style.cssText = 'display:none';
          iframe.name = TCF_LOCATOR_NAME;
          doc.body.appendChild(iframe);
        } else {
          setTimeout(addFrame, 5);
        }
      }
      return !otherCMP;
    }

async function tcfAPIHandler() {
      var gdprApplies;
      var args = arguments;

      if (!args.length) {
        return queue;
      } else if (args[0] === 'setGdprApplies') {
        if (
          args.length > 3 &&
          args[2] === 2 &&
          typeof args[3] === 'boolean'
        ) {
          gdprApplies = args[3];
          if (typeof args[2] === 'function') {
            args[2]('set', true);
          }
        }
      } else if (args[0] === 'ping') {
        var retr = {
          gdprApplies: gdprApplies,
          cmpLoaded: false,
          cmpStatus: 'stub'
        };

        if (typeof args[2] === 'function') {
          args[2](retr);
        }
      } else {
        if(args[0] === 'init' && typeof args[3] === 'object') {
          args[3] = { ...args[3], tag_version: 'V2' };
        }
        queue.push(args);
      }
    }

async function postMessageEventHandler(event) {
      var msgIsString = typeof event.data === 'string';
      var json = {};

      try {
        if (msgIsString) {
          json = JSON.parse(event.data);
        } else {
          json = event.data;
        }
      } catch (ignore) {}

      var payload = json.__tcfapiCall;

      if (payload) {
        window.__tcfapi(
          payload.command,
          payload.version,
          function(retValue, success) {
            var returnMsg = {
              __tcfapiReturn: {
                returnValue: retValue,
                success: success,
                callId: payload.callId
              }
            };
            if (msgIsString) {
              returnMsg = JSON.stringify(returnMsg);
            }
            if (event && event.source && event.source.postMessage) {
              event.source.postMessage(returnMsg, '*');
            }
          },
          payload.parameter
        );
      }
    }

    while (win) {
      try {
        if (win.frames[TCF_LOCATOR_NAME]) {
          cmpFrame = win;
          break;
        }
      } catch (ignore) {}

      if (win === window.top) {
        break;
      }
      win = win.parent;
    }
    if (!cmpFrame) {
      addFrame();
      win.__tcfapi = tcfAPIHandler;
      win.addEventListener('message', postMessageEventHandler, false);
    }
  };

  makeStub();

  var uspStubFunction = function() {
    var arg = arguments;
    if (typeof window.__uspapi !== uspStubFunction) {
      setTimeout(function() {
        if (typeof window.__uspapi !== 'undefined') {
          window.__uspapi.apply(window.__uspapi, arg);
        }
      }, 500);
    }
  };

  var checkIfUspIsReady = function() {
    uspTries++;
    if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
      console.warn('USP is not accessible');
    } else {
      clearInterval(uspInterval);
    }
  };

  if (typeof window.__uspapi === 'undefined') {
    window.__uspapi = uspStubFunction;
    var uspInterval = setInterval(checkIfUspIsReady, 6000);
  }



const Head = () => {
  return (
<html
      id="XF"
      dir="LTR"
      data-app="public"
      data-template="forum_list"
      data-container-key=""
      data-content-key=""
      data-logged-in="false"
      data-cookie-prefix="xf_"
      data-csrf="1680309846,e50896b459e8773a4cc3c92068b11d43"
      className="has-js template-forum_list has-no-touchevents has-passiveeventlisteners has-hiddenscroll has-os-linux has-browser-mozilla has-pointer-nav"
      data-run-jobs=""
      lang="en-US"
    >
<Helmet>
  
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
<title>codeGPTForums</title>
<link rel="manifest" href=""/>
<meta name="theme-color" content="#1b7298"/>
<meta name="apple-mobile-web-app-title" content="codeGPTForums"/>
<link rel="apple-touch-icon" href=""/>
<meta name="description" content="The codeGPTForums is the place to find help with your coding and programming queries. We're a friendly community of coders ready to assist."/>
<meta property="og:description" content="The codeGPTForums is the place to find help with your coding and programming queries. We're a friendly community of coders ready to assist."/>
<meta property="twitter:description" content="The codeGPTForums is the place to find help with your coding and programming queries. We're a friendly community of coders ready to assist."/>
<link rel="canonical" href=""/>
<meta property="og:site_name" content="codeGPTForums"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="codeGPTForums"/>
<meta property="twitter:title" content="codeGPTForums"/>
<meta property="og:url" content=""/>
<meta property="og:image" content=""/>
<meta property="twitter:image" content=""/>
<meta property="twitter:card" content="summary"/>
<link rel="preload" href="assets/fa-regular-400-min.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
<link rel="preload" href="assets/fa-brands-400-min.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
<link rel="stylesheet" href="assets/style.css"/>
<link rel="stylesheet" href="assets/style2.css"/>
<link rel="stylesheet" href="assets/style3.css"/>
<script async="" type="text/javascript" src="assets/m7yf6D7SNBZWY/apparelafterlife.com/choice.js"></script>
<script src="assets/rules-p-m7yf6D7SNBZWY.js" async=""></script>
<script src="assets/AE.js" async="" type="text/javascript"></script>
<script async="" type="text/javascript" src="assets/tcfv2/cmp2.js?referer=www.apparelafterlife.com"></script>
<script src="assets/rules.js" async=""></script>
<script src="assets/AE.js" async="" type="text/javascript"></script>
<script async="" type="text/javascript" src="assets/cmp2.js?refferer=www.apparelafterlife.com"></script>
<script async="" type="text/javascript" src="assets/choice/m7yf6D7SNBZWY/www.apparelafterlife.com/choice.js"></script>
<script async="" src="assets/analytics.js"></script>
<script src="assets/js/xf/preamble.min.js?_v=8d8be27b" type="text/javascript"></script>
<link rel="icon" type="image/png" href="assets/images/favicon.ico" sizes="32x32"/>
</Helmet>
</html>
  );
};

export default Head;
