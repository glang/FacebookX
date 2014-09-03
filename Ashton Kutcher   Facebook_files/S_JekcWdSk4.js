/*!CK:1153790492!*//*1408326658,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["50CU0"]); }

__d("ComposerXDatepickerIconReset",["CSS","cx"],function(a,b,c,d,e,f,g,h){function i(j){g.removeClass(j.element,"_4_na");g.removeClass(j.element,"_509o");}e.exports=i;},null);
__d("legacy:dom-html",["HTML"],function(a,b,c,d){a.HTML=b('HTML');},3);
__d("PopoverMenuShowOnHover",["Event"],function(a,b,c,d,e,f,g){var h=250;function i(j){"use strict";this._popoverMenu=j;this._listeners=[];}i.prototype.enable=function(){"use strict";this._attachMouseListeners(this._popoverMenu.getTriggerElem());this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',this._onSetMenu.bind(this));};i.prototype.disable=function(){"use strict";while(this._listeners.length)this._listeners.pop().remove();if(this._setMenuSubscription){this._setMenuSubscription.unsubscribe();this._setMenuSubscription=null;}};i.prototype._onSetMenu=function(){"use strict";this._attachMouseListeners(this._popoverMenu.getMenu().getRoot());};i.prototype._attachMouseListeners=function(j){"use strict";var k=this._popoverMenu.getPopover(),l=null;this._listeners.push(g.listen(j,'mouseleave',k.hideLayer.bind(k)),g.listen(j,'mouseenter',function(){l=Date.now();k.showLayer();}),g.listen(j,'click',function(m){if(Date.now()<l+h)m.stop();}));};e.exports=i;},null);
__d("TimelineCommentsLoader",["Event","CommentPrelude","CSS","DOM","Parent","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={init:function(){m.init=l;g.listen(document.body,'click',function(n){var o=k.byClass(n.getTarget(),'fbTimelineFeedbackCommentLoader');if(o){n.kill();h.click(o,false);var p=k.byTag(o,'form'),q=j.scry(p,'li.uiUfiViewAll input');if(!q.length)q=j.scry(p,'li.fbUfiViewPrevious input');if(!q.length)q=j.scry(p,'a.UFIPagerLink');q[0].click();i.show(j.find(p,'li.uiUfiComments'));i.removeClass(o,'fbTimelineFeedbackCommentLoader');}});}};e.exports=m;},null);
__d("TimelineDrag",["ArbiterMixin","Event","Locale","Style","Vector","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=l(g);for(var n in m)if(m.hasOwnProperty(n))p[n]=m[n];var o=m===null?null:m.prototype;p.prototype=Object.create(o);p.prototype.constructor=p;p.__superConstructor__=m;function p(q,r,s){"use strict";s=s||{};this._listenOn=s.listenOn;this._offsetInput=r;this._defaultOffset=s.default_offset;this._killClicks=s.killClicks;this._vertical=true;this._RTLXSwitch=false;this.setPicture(q,s);}p.prototype.setPicture=function(q,r){"use strict";if(!q)return false;r=r||{};this._picture=q;this._defaultOffset=r.default_offset;if(r.offsetInput)this._offsetInput=r.offsetInput;if(r.vertical!==undefined)this._vertical=r.vertical;if(r.height)this._containerHeight=r.height;if(r.width)this._containerWidth=r.width;if(this._vertical){this._offsetType='top';this._eventCoord='y';}else{this._RTLXSwitch=i.isRTL();this._offsetType='left';this._eventCoord='x';}if(this._picture.complete){this._initialLoad();}else this._loadListener=h.listen(this._picture,'load',function(){this._loadListener.remove();this._loadListener=null;this._initialLoad();}.bind(this));};p.prototype.destroy=function(){"use strict";this._stopDrag();this._saveOffset();this._mousedown&&this._mousedown.remove();this._mousedown=null;this._onclick&&this._onclick.remove();this._onclick=null;this._loadListener&&this._loadListener.remove();this._loadListener=null;};p.prototype._initialLoad=function(){"use strict";var q=this._listenOn?this._listenOn:this._picture;this._mousedown&&this._mousedown.remove();this._mousedown=h.listen(q,'mousedown',this._onMouseDown.bind(this));if(this._vertical){this._maxOffset=this._containerHeight-this._picture.offsetHeight;}else this._maxOffset=this._containerWidth-this._picture.offsetWidth;if(this._defaultOffset!==undefined)this._setOffset(this._defaultOffset);this._onclick&&this._onclick.remove();this._onclick=null;if(this._killClicks)this._onclick=h.listen(q,'click',this._onClick.bind(this));this._saveOffset();};p.prototype._onClick=function(event){"use strict";event.kill();};p.prototype._onMouseDown=function(event){"use strict";var q=parseInt(j.get(this._picture,this._offsetType),10)||0;this._pictureStartDragOffset=q-k.getEventPosition(event)[this._eventCoord];this._startDrag();event.kill();};p.prototype._startDrag=function(){"use strict";if(!this._dragStarted){this.inform('startdrag',this);this._dragTokens=[h.listen(document.documentElement,'mouseup',this._onMouseUp.bind(this)),h.listen(document.documentElement,'mousemove',this._onMouseMove.bind(this))];this._dragStarted=true;}};p.prototype._saveOffset=function(){"use strict";var q=parseInt(j.get(this._picture,this._offsetType),10);if(this._RTLXSwitch){this._offsetInput.value=q+this._containerWidth-this._picture.offsetWidth;}else this._offsetInput.value=q;};p.prototype._stopDrag=function(){"use strict";if(this._dragStarted){this.inform('stopdrag',this);this._dragStarted=false;this._dragTokens.forEach(function(q){q.remove();});this._saveOffset();}};p.prototype._onMouseUp=function(event){"use strict";this._stopDrag();event.kill();};p.prototype._setOffset=function(q){"use strict";if(this._RTLXSwitch){q=Math.max(0,Math.min(q,-this._maxOffset));}else q=Math.min(0,Math.max(q,this._maxOffset));j.set(this._picture,this._offsetType,q+'px');};p.prototype._onMouseMove=function(event){"use strict";this._setOffset(this._pictureStartDragOffset+k.getEventPosition(event)[this._eventCoord]);event.kill();};e.exports=p;},null);
__d("TimelineCover",["Arbiter","Button","CSS","DOM","DOMScroll","Event","HTML","Parent","Run","Style","TimelineDrag","$","cx","fbt","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){function v(w,x,y){"use strict";this.root=r('fbProfileCover');if(typeof x==='object'){this._coverHeight=x.cover_height;this._coverWidth=x.cover_width;this.previewing=x.previewing;this._isLegacy=false;}else{this._isLegacy=true;this._coverHeight=x;this.previewing=y;}this._parentSection=n.byClass(this.root,'fbTimelineSection');this.cover=j.find(this.root,'.cover');v.instance=this;this.editing=false;o.onBeforeUnload(this.onBeforeUnload.bind(this));if(!this._parentSection)this._parentSection=n.byClass(this.root,'fbEventHeader');if(this.previewing){this.editMode();this.updateCoverImage(this.previewing);}}v.prototype.showLoadingIndicator=function(){"use strict";var w=u('fbCoverImageContainer');if(w)i.addClass(w,'opaquedLoading');};v.prototype.hideLoadingIndicator=function(){"use strict";var w=u('fbCoverImageContainer');if(w)i.removeClass(w,'opaquedLoading');};v.prototype.onBeforeUnload=function(){"use strict";if(this.isInEditMode())return "If you leave this page, your cover photo will not be saved. To save, press the \"save\" button below your cover photo.";};v.prototype.isCoverImageVerticalFlow=function(w){"use strict";return !(w.style.height);};v.prototype.editMode=function(){"use strict";h.setEnabled(j.find(this.root,'button.cancelButton'),true);h.setEnabled(j.find(this.root,'button.saveButton'),true);this.hideLoadingIndicator();this._coverImage=j.scry(this.root,'.coverImage')[0];var w=j.scry(this._coverImage,'.coverWrap')[0];if(w){var x=j.find(w,'.coverPhotoImg');this._originalIsVertical=this.isCoverImageVerticalFlow(x);this._originalOffset=p.get(x,this._originalIsVertical?'top':'left');}i.addClass(this._parentSection,'fbEditCover');k.scrollTo(this.root);if(this.previewing){j.remove(this._coverImage);i.show(this._coverImage);}var y=j.scry(this._coverImage,'.coverPhotoImg')[0];if(y)this._createDragger();this.editing=true;g.inform('CoverPhotoEdit',{sender:this,state:"open"});};v.prototype._exitEditMode=function(){"use strict";if(this._timelineDrag){this._timelineDrag.destroy();this._timelineDrag=null;}j.find(this.root,'input.hiddenPhotoID').value=null;j.find(this.root,'input.hiddenVideoID').value=null;h.setEnabled(j.find(this.root,'button.cancelButton'),false);h.setEnabled(j.find(this.root,'button.saveButton'),false);i.removeClass(this._parentSection,'fbEditCover');this.hideLoadingIndicator();this.previewing=false;g.inform('CoverPhotoEdit',{sender:this,state:"closed"});this.editing=false;};v.prototype._createDragger=function(w){"use strict";var x;if(this._isLegacy){x=j.find(this.root,'input.photoOffsetInput');this._originalIsVertical=true;}else{var y=w===undefined?this._originalIsVertical:w;x=y?j.find(this.root,'input.photoOffsetYInput'):j.find(this.root,'input.photoOffsetXInput');}this._timelineDrag=new q(j.find(this.root,'.coverImage .coverPhotoImg'),x,{height:this._coverHeight,width:this._coverWidth,listenOn:this.cover,vertical:y,killClicks:true});};v.prototype.updateCoverImage=function(w,x,y){"use strict";this.videoID=y;if(x)this.editMode();j.find(this.root,'input.hiddenPhotoID').value=w;j.find(this.root,'input.hiddenVideoID').value=y||null;h.setEnabled(j.find(this.root,'button.saveButton'),true);if(x)j.replace(j.find(this.root,'.coverImage'),typeof x==='string'?m(x):x);var z=j.find(j.find(this.root,'.coverImage'),'.coverPhotoImg'),aa=this.isCoverImageVerticalFlow(z),ba;if(this._isLegacy){ba=j.find(this.root,'input.photoOffsetInput');}else ba=aa?j.find(this.root,'input.photoOffsetYInput'):j.find(this.root,'input.photoOffsetXInput');if(this._timelineDrag){this._timelineDrag.setPicture(z,{offsetInput:ba,vertical:aa});}else this._createDragger(aa);this._updateHeader();};v.prototype.cancelUpdate=function(){"use strict";j.remove(j.scry(this.root,'.coverImage')[0]);j.prependContent(this.cover,this._coverImage);if(this._originalOffset!==undefined)p.set(j.find(this._coverImage,'.coverPhotoImg'),this._originalIsVertical?'top':'left',this._originalOffset);this._exitEditMode();this._updateHeader();};v.prototype.saveComplete=function(){"use strict";this._coverImage=j.scry(this.root,'.coverImage')[0];var w=n.byClass(this.root,'fbTimelineTopSectionBase');w&&i.removeClass(w,"_6_5");this._exitEditMode();this._updateHeader();};v.prototype.isInEditMode=function(){"use strict";return this.editing;};v.prototype._updateHeader=function(){"use strict";var w=j.scry(this.root,'.coverImage')[0];if(!w)return;var x=i.hasClass(w,'coverNoImage'),y=i.hasClass(this._parentSection,'noCoverImage');if(x!==y)i.conditionClass(this._parentSection,'noCoverImage',x);};v.getInstance=function(){"use strict";return v.instance;};v.staticUpdateCoverImage=function(w){"use strict";v.getInstance().updateCoverImage(null,w);};v.instance=null;e.exports=v;},null);
__d("TimelineCoverDisclaimer",["Dialog"],function(a,b,c,d,e,f,g){function h(i,j,k){if(h.displayed===undefined){h.displayed=true;}else return;new g().setModal(true).setTitle(i).setBody(j).setButtonsMessage(k).setButtons(g.OK).show();}e.exports=h;},null);
__d("legacy:TimelineCoverDisclaimer",["TimelineCoverDisclaimer"],function(a,b,c,d){a.TimelineCoverDisclaimer=b('TimelineCoverDisclaimer');},3);
__d("TimelineNavLight",["CSS","DOM","DOMQuery","Parent","TimelineSection","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(o){var p=i.scry(o,"._6-7")[0],q=i.scry(o,"._6-6"),r=j.byClass(o,"_70k").offsetWidth,s=q[q.length-1];if(s.offsetLeft+s.offsetWidth>r)g.addClass(o,"_5215");for(var t=q.length-1;t>1;t--)if(q[t].offsetLeft+q[t].offsetWidth>r){h.remove(q[t]);}else break;var u="_529n";g.removeClass(j.byClass(o,u),u);k.subscribe('Medley/transitionToSection',function(v,w){if(p&&w===p.getAttribute('data-medley-id'))return;p&&g.removeClass(p,"_6-7");for(var x=0;x<q.length;++x)if(q[x].getAttribute('data-medley-id')===w){g.addClass(q[x],"_6-7");p=q[x];return;}});}e.exports=n;},null);
__d("legacy:TimelineCover",["TimelineCover"],function(a,b,c,d){a.TimelineCover=b('TimelineCover');},3);