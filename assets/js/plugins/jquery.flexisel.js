/*
 * File: jquery.flexisel.js
 * Version: 2.1.0
 * Description: Responsive carousel jQuery plugin
 * Author: 9bit Studios
 * Copyright 2016, 9bit Studios
 * http://www.9bitstudios.com
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
!function(v){v.fn.flexisel=function(e){var i,l,n,a,t=v.extend({visibleItems:4,itemsToScroll:3,animationSpeed:400,infinite:!0,navigationTargetSelector:null,autoPlay:{enable:!1,interval:5e3,pauseOnHover:!0},responsiveBreakpoints:{portrait:{changePoint:480,visibleItems:1,itemsToScroll:1},landscape:{changePoint:640,visibleItems:2,itemsToScroll:2},tablet:{changePoint:768,visibleItems:3,itemsToScroll:3}}},e),o=v(this),s=v.extend(t,e),r=!0,c=s.visibleItems,f=s.itemsToScroll,d=[],u={init:function(){return this.each(function(){u.appendHTML(),u.setEventHandlers(),u.initializeItems()})},initializeItems:function(){var e=s.responsiveBreakpoints;for(var t in e)d.push(e[t]);d.sort(function(e,t){return e.changePoint-t.changePoint});var n=o.children();i=u.getCurrentItemWidth(),l=n.length,n.width(i),o.css({left:-i*(c+1)}),o.fadeIn(),v(window).trigger("resize")},appendHTML:function(){if(o.addClass("nbs-flexisel-ul"),o.wrap("<div class='nbs-flexisel-container'><div class='nbs-flexisel-inner'></div></div>"),o.find("li").addClass("nbs-flexisel-item"),s.navigationTargetSelector&&0<v(s.navigationTargetSelector).length?v("<div class='nbs-flexisel-nav-left'><i class='material-icons'>chevron_left</i></div><div class='nbs-flexisel-nav-right'><i class='material-icons'>chevron_right</i></div>").appendTo(s.navigationTargetSelector):(s.navigationTargetSelector=o.parent(),v("<div class='nbs-flexisel-nav-left'><i class='material-icons'>chevron_left</i></div><div class='nbs-flexisel-nav-right'><i class='material-icons'>chevron_right</i></div>").insertAfter(o)),s.infinite){var e=o.children(),t=e.clone(),n=e.clone();o.prepend(t),o.append(n)}},setEventHandlers:function(){var t=o.children();v(window).on("resize",function(e){clearTimeout(n),n=setTimeout(function(){u.calculateDisplay(),i=u.getCurrentItemWidth(),t.width(i),s.infinite?o.css({left:-i*Math.floor(t.length/2)}):(u.clearDisabled(),v(s.navigationTargetSelector).find(".nbs-flexisel-nav-left").addClass("disabled"),o.css({left:0}))},100)}),v(s.navigationTargetSelector).find(".nbs-flexisel-nav-left").on("click",function(e){u.scroll(!0)}),v(s.navigationTargetSelector).find(".nbs-flexisel-nav-right").on("click",function(e){u.scroll(!1)}),s.autoPlay.enable&&(u.setAutoplayInterval(),!0===s.autoPlay.pauseOnHover&&o.on({mouseenter:function(){r=!1},mouseleave:function(){r=!0}})),o[0].addEventListener("touchstart",u.touchHandler.handleTouchStart,!1),o[0].addEventListener("touchmove",u.touchHandler.handleTouchMove,!1)},calculateDisplay:function(){var e=v("html").width(),t=d[d.length-1].changePoint;for(var n in d){if(t<=e){c=s.visibleItems,f=s.itemsToScroll;break}if(e<d[n].changePoint){c=d[n].visibleItems,f=d[n].itemsToScroll;break}}},scroll:function(e){if(void 0===e&&(e=!0),1==r){if(r=!1,i=u.getCurrentItemWidth(),s.autoPlay.enable&&clearInterval(a),s.infinite)o.animate({left:e?"+="+i*f:"-="+i*f},s.animationSpeed,function(){r=!0,e?u.offsetItemsToBeginning(f):u.offsetItemsToEnd(f),u.offsetSliderPosition(e)});else{var t=i*f;e?o.animate({left:u.calculateNonInfiniteLeftScroll(t)},s.animationSpeed,function(){r=!0}):o.animate({left:u.calculateNonInfiniteRightScroll(t)},s.animationSpeed,function(){r=!0})}s.autoPlay.enable&&u.setAutoplayInterval()}},touchHandler:{xDown:null,yDown:null,handleTouchStart:function(e){this.xDown=e.touches[0].clientX,this.yDown=e.touches[0].clientY},handleTouchMove:function(e){if(this.xDown&&this.yDown){var t=e.touches[0].clientX,n=e.touches[0].clientY,i=this.xDown-t;this.yDown;0<Math.abs(i)&&(0<i?u.scroll(!1):u.scroll(!0)),this.xDown=null,this.yDown=null,r=!0}}},getCurrentItemWidth:function(){return o.parent().width()/c},offsetItemsToBeginning:function(e){void 0===e&&(e=1);for(var t=0;t<e;t++)o.children().last().insertBefore(o.children().first())},offsetItemsToEnd:function(e){void 0===e&&(e=1);for(var t=0;t<e;t++)o.children().first().insertAfter(o.children().last())},offsetSliderPosition:function(e){var t=parseInt(o.css("left").replace("px",""));e?t-=i*f:t+=i*f,o.css({left:t})},getOffsetPosition:function(){return parseInt(o.css("left").replace("px",""))},calculateNonInfiniteLeftScroll:function(e){return u.clearDisabled(),0<=u.getOffsetPosition()+e?(v(s.navigationTargetSelector).find(".nbs-flexisel-nav-left").addClass("disabled"),0):u.getOffsetPosition()+e},calculateNonInfiniteRightScroll:function(e){u.clearDisabled();var t=l*i-c*i;return u.getOffsetPosition()-e<=-t?(v(s.navigationTargetSelector).find(".nbs-flexisel-nav-right").addClass("disabled"),-t):u.getOffsetPosition()-e},setAutoplayInterval:function(){a=setInterval(function(){r&&u.scroll(!1)},s.autoPlay.interval)},clearDisabled:function(){var e=v(s.navigationTargetSelector);e.find(".nbs-flexisel-nav-left").removeClass("disabled"),e.find(".nbs-flexisel-nav-right").removeClass("disabled")}};return u[e]?u[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void v.error('Method "'+method+'" does not exist in flexisel plugin!'):u.init.apply(this)}}(jQuery);