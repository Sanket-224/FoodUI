(function(f){var d=window.AmazonUIPageJS||window.P,g=d._namespace||d.attributeErrors,a=g?g("TwisterHardlinesDetailPageAsset"):d;a.guardFatal?a.guardFatal(f)(a,window):a.execute(function(){f(a,window)})})(function(f,d,g){f.when("A","jQuery","atf").execute(function(a,b){a.on.ready(function(){function c(a,c,d,e,f){b(a).slideToggle(300);b(c).slideToggle(300);b(d).toggleClass("tmmShowPrompt tmmHidePrompt");b(e).toggleClass("tmmShowPrompt tmmHidePrompt");b(f).toggleClass("rotate")}function e(a){a.position();
a.width();b(".swatchElement");a.find(".swatchElement").each(function(){b(this).attr("data-width",b(this).width())});b("#formats").find(".a-row").removeClass("nonJSFormats")}function g(){var a=b("#formats"),c=a.width()-40,d=0;a.find(".swatchElement").each(function(){b(this).is(":visible")&&(d+=b(this).width())});d>c?b(a.find(".swatchElement:visible").get().reverse()).each(function(){var a=0,e=!1;b(this).find(".format").hasClass("a-button-selected")?(a=b(this).prev(".swatchElement").width(),e=b(this).prev(".swatchElement").is(":hidden"),
b(this).prev(".swatchElement").hide()):(a=b(this).width(),e=b(this).is(":hidden"),b(this).hide());e||(d-=a);return d>c}):d<c&&a.find(".swatchElement").each(function(){if(b(this).is(":hidden"))return b(this).attr("data-width")<=c-d&&b(this).show(),!1})}var n=0,h=0,l,m=function(a){"undefined"!=typeof a&&(l=new a.ImpressionLogger("dpbxapps","bxapps-atfMarker",!0,!0))};"undefined"!=typeof amznJQ?amznJQ.available("DPClientLogger",function(){m(d.DPClientLogger)}):f.when("DPClientLogger").execute(m);a.declarative("tmm-see-more-editions-click",
["click"],function(e){var f=e.data,g=f.metabindingUrl;if(e.$target.hasClass("a-link-expander")||e.$target.parent().hasClass("a-link-expander")){var f=f.metabindingPlaceHolder,h="#metabinding_row_top_"+f,k="#metabinding_row_bottom_"+f,l="#editionsSeePrompt_"+f,m="#editionsHidePrompt_"+f,n="#editionsIcon_"+f,p="isAjaxComplete_"+f,q="isAjaxInProgress_"+f;e="#tmmSpinnerDiv_"+f;var r=a.state("mediamatrix-state"),f=r["url_"+f].replace(/&amp;/g,"&");b("#formats .tmmErrorClass").hide();"1"===r[p]||"1"===
r[q]?c(h,k,l,m,n):(a.ajax(f,{method:"get",success:function(){r[p]="1";a.state("mediamatrix-state",r);c(h,k,l,m,n)},indicator:b(e),error:function(){b($tmmErrorDiv).show();r[q]="0";a.state("mediamatrix-state",r)}}),r[q]="1",a.state("mediamatrix-state",r))}else"#"!==g&&(d.location=g)});if(0<b("#formats > .a-link-expander").length){var p=d.ue;p&&p.count&&p.count("mediaMatrixExpanderPresent",1)}b("#formats > .a-link-expander").click(function(){c("#tmmSwatches","#twister","#showMoreFormatsPrompt","#hideMoreFormatsPrompt",
"#formatsIcon");if(!h){var a=d.ue;a&&a.count&&a.count("mediaMatrixExpanderClicked",1);h=1}l&&b("#twister").is(":visible")&&!n&&(l.logImpression("tmm-show-more-formats-viewed"),n=1)});var p=a.state("mediamatrix-state"),r="1";"undefined"!==typeof p&&"undefined"!==typeof p.showHybridMediaMatrix&&"1"===p.showHybridMediaMatrix?r="0":"undefined"!==typeof p&&"undefined"!==typeof p.isDvdWeblabEnabled&&"1"===p.isDvdWeblabEnabled&&(r="0");"1"===r&&(b("#formats.responsive").each(function(){e(b(this))}),g(),
a.on("resize",g));b("#formats .unselected .format").mouseenter(function(){b(this).find(".a-color-secondary").addClass("a-color-price").removeClass("a-color-secondary")}).mouseleave(function(){b(this).find(".a-color-price").addClass("a-color-secondary").removeClass("a-color-price")});b("#landingItemRentalLink").attr("href","javascript:document.getElementById('rentBuySection').click();")})});f.when("A","jQuery","a-dropdown").execute(function(a,b,c){function e(a){return a?a.replace(/&#0/g,"&#"):undef}
function f(a){for(var b=a.getOptions(),b=b?b.size():0,c=1;c<b;c++)a.removeOption(1)}function g(a,c){var d=a.getOption(0),f=d.info()[0];d.remove();b.each(c,function(b,c){a.addOption({text:v[e(c)],value:c,css_class:"dropdownAvailable"},1)});a.addOption(f,0);a.val(f.value)}function h(a){C=a.value;f(D);"-1"!==C&&(l(),g(D,Object.keys(r[e(C)])))}function l(){Object.keys||(Object.keys=function(){var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString"),c="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),
d=c.length;return function(e){if("object"!==typeof e&&("function"!==typeof e||null===e))throw new TypeError("Object.keys called on non-object");var f=[],g;for(g in e)a.call(e,g)&&f.push(g);if(b)for(g=0;g<d;g++)a.call(e,c[g])&&f.push(c[g]);return f}}())}function m(a){A=a.value;"-1"!==A&&"-1"!==C&&(d.location=t[r[e(C)][e(A)]])}function p(a){a=a.value;"-1"!==a&&(d.location=t[e(a)])}var r,y=a.state("dcdMetaData");if(y){var t=y.asinToDetailPageURLMap,v=y.truncatedValuesMap,x=y.dimensionKeys,B=x[0],C=-1,
A=-1,D;2===x.length?(r=y.doubleValuesToAsinMap,y=x[1],x=c.getSelect("native_dcd_dropdown_"+B),D=c.getSelect("native_dcd_dropdown_"+y),x.setValue("-1"),D.setValue("-1"),f(D),a.on("a:dropdown:selected:"+B,h),a.on("a:dropdown:selected:"+y,m)):(x=c.getSelect("native_dcd_dropdown_"+B),(c=y.selectedAsin)?x.setValue(c):x.setValue("-1"),a.on("a:dropdown:selected:asin-redirect",p))}})});
/* ******** */
(function(f){var d=window.AmazonUIPageJS||window.P,g=d._namespace||d.attributeErrors,a=g?g("PInfoHardlinesDetailPageAsset"):d;a.guardFatal?a.guardFatal(f)(a,window):a.execute(function(){f(a,window)})})(function(f,d,g){f.when("A","jQuery","atf").execute(function(a,b,c){function e(){var a=parseInt(b("#byline").width()),c=0;b("#byline .author").each(function(){b(this).is(".notFaded")&&(c+=b(this).outerWidth())});c+=b("#byline .more").outerWidth();if(c>a){var d=b("#byline .author.notFaded").length;b(b("#byline .author.notFaded").get().reverse()).each(function(e){c>
a&&e<d-1&&(e=b(this).width(),b(this).removeClass("notFaded"),b(this).fadeOut(10,function(){b(this).hide()}),c-=e,b("#byline .moreCount").html(b("#byline .author").length-b("#byline .author.notFaded").length),b("#byline .more").addClass("notFaded").fadeIn(10))})}else if(c<a&&b("#byline .author.notFaded").length<b("#byline .author").length){var e=a-c;b("#byline .author").each(function(){if(!b(this).hasClass("notFaded")){var a=b(this).outerWidth();a<=e?(e-=a,b(this).addClass("notFaded").fadeIn(10),a=
b("#byline .author").length-b("#byline .author.notFaded").length,0===a?b("#byline .more").removeClass("notFaded").fadeOut(10):(b("#byline .moreCount").html(a),b("#byline .more").addClass("notFaded").fadeIn(10))):e=0}})}}b("#byline .showMoreLink").click(function(){b("#byline .author").each(function(){b(this).hasClass("notFaded")||b(this).addClass("notFaded").fadeIn(0);b("#byline .more").removeClass("notFaded").fadeOut(0)});return!1});b("#byline .contributorNameID").mouseenter(function(){var c=b(this).attr("data-asin"),
d={},e="isAjaxComplete_"+c,f="isAjaxInProgress_"+c,g=a.state("popoverImage-state");d.entityID=c;"1"!==g[e]&&"1"!==g[f]&&(b.ajax({url:"/gp/product/utility/by-line/book-contributor-details/ajax/author-image.html",data:d,dataType:"html",timeout:1E3,success:function(d){b("#contributorImageContainer"+c).get(0).innerHTML=d;g[e]="1";a.state("popoverImage-state",g)},error:function(){g[f]="0";a.state("popoverImage-state",g)}}),g[f]="1",a.state("popoverImage-state",g))});(function(a){var c=parseInt(a.width()),
d=parseInt(a.find(".more").outerWidth()),e=0;b("#byline .author").each(function(){b(this).is(".notFaded")&&(e+=b(this).outerWidth())});b("#byline .more").attr("data-width",d);var f=c-d;if(f>e)a.find(".author").each(function(){var a=b(this).index();3<=parseInt(a)?(a=b(this).outerWidth(),b(this).attr("data-width",a),a<f?(f-=a,b(this).addClass("notFaded"),b(this).fadeIn("slow")):(f=0,b(this).fadeOut("slow"))):(a=b(this).outerWidth(),b(this).attr("data-width",a),f-=a)});else{var g=b("#byline .author.notFaded").length;
b(b("#byline .author.notFaded").get().reverse()).each(function(a){f<e&&a<g-1&&(a=b(this).outerWidth(),e-=a,b(this).fadeOut("slow").removeClass("notFaded"))})}c=a.find(".author").length-a.find(".author.notFaded").length;0<c&&(a.find(".moreCount").html(c),a.find(".more").fadeIn("slow"),a.find(".more").addClass("notFaded"))})(a.$("#byline"));b(d).resize(function(){e()})});f.when("A","jQuery","atf").execute(function(a,b,c){function e(){var a=parseInt(b("#bylineInfo").width()),c=0;b("#bylineInfo .author").each(function(){b(this).is(".notFaded")&&
(c+=b(this).outerWidth())});c+=b("#bylineInfo .more").outerWidth();if(c>a){var d=b("#bylineInfo .author.notFaded").length;b(b("#bylineInfo .author.notFaded").get().reverse()).each(function(e){c>a&&e<d-1&&(e=b(this).width(),b(this).removeClass("notFaded"),b(this).fadeOut(10,function(){b(this).hide()}),c-=e,b("#bylineInfo .moreCount").html(b("#bylineInfo .author").length-b("#bylineInfo .author.notFaded").length),b("#bylineInfo .more").addClass("notFaded").fadeIn(10))})}else if(c<a&&b("#bylineInfo .author.notFaded").length<
b("#bylineInfo .author").length){var e=a-c;b("#bylineInfo .author").each(function(){if(!b(this).hasClass("notFaded")){var a=b(this).outerWidth();a<=e?(e-=a,b(this).addClass("notFaded").fadeIn(10),a=b("#bylineInfo .author").length-b("#bylineInfo .author.notFaded").length,0===a?b("#bylineInfo .more").removeClass("notFaded").fadeOut(10):(b("#bylineInfo .moreCount").html(a),b("#bylineInfo .more").addClass("notFaded").fadeIn(10))):e=0}})}}b("#bylineInfo .showMoreLink").click(function(){b("#bylineInfo .author").each(function(){b(this).hasClass("notFaded")||
b(this).addClass("notFaded").fadeIn(0);b("#bylineInfo .more").removeClass("notFaded").fadeOut(0)});return!1});b("#bylineInfo .contributorNameID").mouseenter(function(){var c=b(this).attr("data-asin"),d={},e="isAjaxComplete_"+c,f="isAjaxInProgress_"+c,g=a.state("popoverImage-state");d.entityID=c;"1"!==g[e]&&"1"!==g[f]&&(b.ajax({url:"/gp/product/utility/by-line/book-contributor-details/ajax/author-image.html",data:d,dataType:"html",timeout:1E3,success:function(d){b("#contributorImageContainer"+c).get(0).innerHTML=
d;g[e]="1";a.state("popoverImage-state",g)},error:function(){g[f]="0";a.state("popoverImage-state",g)}}),g[f]="1",a.state("popoverImage-state",g))});(function(a){var c=parseInt(a.width()),d=parseInt(a.find(".more").outerWidth()),e=0;b("#bylineInfo .author").each(function(){b(this).is(".notFaded")&&(e+=b(this).outerWidth())});b("#bylineInfo .more").attr("data-width",d);var f=c-d;if(f>e)a.find(".author").each(function(){var a=b(this).index();3<=parseInt(a)?(a=b(this).outerWidth(),b(this).attr("data-width",
a),a<f?(f-=a,b(this).addClass("notFaded"),b(this).fadeIn("slow")):(f=0,b(this).fadeOut("slow"))):(a=b(this).outerWidth(),b(this).attr("data-width",a),f-=a)});else{var g=b("#bylineInfo .author.notFaded").length;b(b("#bylineInfo .author.notFaded").get().reverse()).each(function(a){f<e&&a<g-1&&(a=b(this).outerWidth(),e-=a,b(this).fadeOut("slow").removeClass("notFaded"))})}c=a.find(".author").length-a.find(".author.notFaded").length;0<c&&(a.find(".moreCount").html(c),a.find(".more").fadeIn("slow"),a.find(".more").addClass("notFaded"))})(a.$("#bylineInfo"));
b(d).resize(function(){e()})});f.when("A","jQuery").register("product-description-fix",function(a,b){return{fixTableIssue:function(){b("#productDescription .productDescriptionWrapper table").each(function(){var a=b(this).attr("width");"undefined"!==typeof a?b(this).css("width",a):b(this).css("width","auto")})}}})});
/* ******** */
(function(f){var d=window.AmazonUIPageJS||window.P,g=d._namespace||d.attributeErrors,a=g?g("OffersHardlinesDetailPageAsset"):d;a.guardFatal?a.guardFatal(f)(a,window):a.execute(function(){f(a,window)})})(function(f,d,g){f.when("A","jQuery","atf").register("accordionBuyBoxJS",function(a,b,c){var e={updateCssClass:function(a){var c=b("#rbbContainer");c.find(".selected .a-icon-radio-active").removeClass("a-icon-radio-active").addClass("a-icon-radio-inactive");c.find(".selected .offer-price").removeClass("a-color-price").addClass("a-color-secondary");
a.parents(".rbbSection").removeClass("unselected").addClass("selected");a.parents(".rbbSection").toggleClass("dp-accordion-active",500);a.find(".a-icon-radio-inactive").removeClass("a-icon-radio-inactive").addClass("a-icon-radio-active");a.find(".offer-price").removeClass("a-color-secondary").addClass("a-color-price");b("#rbbContainer .rbbSection .rbbContent").find(".offer-price").removeClass("a-color-secondary").addClass("a-color-price")},animate:function(a){var c=b("#rbbContainer"),d=a.attr("id"),
e,f;c.find(".rbbSection").each(function(a,c){b(c).find(".rbbHeader")[0].id==d?e=b(c):b(c).hasClass("selected")&&(f=b(c))});f.find(".rbbContent").slideUp(500,function(){f.removeClass("selected").addClass("unselected");f.toggleClass("dp-accordion-active",500)});e.find(".rbbContent").slideDown(500);b.browser.msie&&7==parseInt(b.browser.version,10)&&(e.find(".rbbContent").css("display","inline"),setTimeout(function(){e.find(".rbbContent").css("display","block")},505))},oneClickJS:function(){b("#one-click-button, #one-click-button-ubb").click(function(){var a=
"https://"+d.location.host+b("#addToCart").attr("action");b("#addToCart").attr("action",a);return!0})},usedBuyBoxJS:function(){b("#one-click-button-ubb, #usedbuyBox #add-to-cart-button-ubb").click(function(){var a=b("#addToCart"),c=a.attr("action").replace("ref=dp_start-bbf_1_glance","ref=dp_start-ubbf_1_glance");a.attr("action",c);return!0});f.when("a-popover").execute(function(c){var d=b("#usedItemConditionInfoLink"),e=c.create(d,{width:250,position:"triggerBottom",activate:a.capabilities.touch?
"onmousemove":"onclick",closeButton:!1,popoverLabel:"Used condition details",name:"usedItemConditionDetailsPopover",dataStrategy:"preload"});d.mouseleave(function(){e.hide()})})},initialize:function(){b(".rbbHeaderLink").attr("href","javascript:void(0);");b("#rbbContainer .rbbSection.unselected .dp-accordion-inner").hide();b("#rbbContainer .rbbSection .rbbHeader").click(function(c){b(c.target);c=b(this);var d=c.hasClass("rbbHeader")?c:c.parents(".rbbHeader");if(d.parents(".rbbSection").hasClass("selected"))return!1;
c=b("#rbbContainer .rbbSection.selected .rbbHeader").attr("id");var f=d.attr("id");e.updateCssClass(d);b("#abbWrapper [id^=mbb-offeringID-]").each(function(){this.checked=!1});d=b(this);e.animate(d);a.trigger("buybox:accordion:changed",f,c);return!0});e.oneClickJS();e.usedBuyBoxJS()}};return e})});
/* ******** */
(function(a){var c=window.AmazonUIPageJS||window.P,d=c._namespace||c.attributeErrors,b=d?d("DetailPagePromotionalBundleAssets",""):c;b.guardFatal?b.guardFatal(a)(b,window):b.execute(function(){a(b,window)})})(function(a,c,d){a.when("A","ready").execute("kbpMobileExpander",function(b){var a=b.$;a(".pb-bundle-section-expander").click(function(b){a(".pb-bundle-mobile-box").removeClass("aok-hidden");a(".pb-bundle-expander-box").addClass("aok-hidden")})})});
/* ******** */