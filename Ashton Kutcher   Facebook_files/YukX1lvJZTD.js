/*!CK:3242298465!*//*1408657760,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["pP6W5"]); }

__d("onCanPlayHTMLMediaElement",["EventListener","HTMLMediaElementReadyStates","emptyFunction","invariant","setImmediate"],function(a,b,c,d,e,f,g,h,i,j,k){function l(m,n){j(m instanceof window.HTMLMediaElement);if(m.readyState===h.HAVE_FUTURE_DATA){k(n);return {remove:i};}else return g.listen(m,'canplay',n);}e.exports=l;},null);