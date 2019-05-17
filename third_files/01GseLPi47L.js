(function(f){var b=window.AmazonUIPageJS||window.P,e=b._namespace||b.attributeErrors,c=e?e("PerformanceResourceTimingAssets",""):b;c.guardFatal?c.guardFatal(f)(c,window):c.execute(function(){f(c,window)})})(function(f,b,e){"use strict";f.when("performance-resource-timing-utils").register("performance-resource-timing",function(c){function f(a){for(var k={},b=0;b<a.length;++b){var d=a[b],g=c.determineType(d.name),h=d.duration,p=d.responseEnd,l=d.transferSize||0,d=l/1024,l=0===l&&100>h,m=k[g]||(k[g]=
{}),g=function(a,b){m[a]=(m[a]||0)+(void 0!==b?b:1)},n=function(a,b){m[a]=Math.max(m[a]||0,b)};g("requests");g("requests"+(l?"-cached":"-uncached"));g("total-duration",h);n("max-duration",h);g("total-transferred",d);n("max-transferred",d);n("long-pull",p)}e(k);return k}function e(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b],d=100*(c["requests-cached"]||0)/c.requests;c["cache-hit-rate"]=d;c["cache-hit-rate-bucket"]=10*Math.ceil(d/10)}}function h(a,c){b.ue&&b.ue.count&&b.ue.count(a,void 0!==
c?c:1)}return{collectIfAvailable:function(){var a=b.performance&&b.performance.getEntriesByType&&b.performance.getEntriesByType("resource");if(a&&a.length){var a=f(a),c;for(c in a)if(a.hasOwnProperty(c)){var e=a[c],d;for(d in e)if(e.hasOwnProperty(d)){var g=e[d];h("resource-timing-"+c+"-"+d,g);"cache-hit-rate-bucket"===d&&b.ue&&b.ue.tag&&b.ue.tag("timing:"+c+":"+d+":"+g)}}}else h("resource-timing-unavailable")}}});f.when("performance-resource-timing","load").execute(function(b){b.collectIfAvailable()});
"use strict";f.register("performance-resource-timing-utils",function(){var b={jpg:"images",jpeg:"images",png:"images",webp:"images",gif:"images",css:"assets",js:"assets",woff2:"fonts"},e=/\.([^\/\.\?\#]+)((\?|\#).*)?$/,f=/\/images\/I\//;return{determineType:function(h){var a=e.exec(h),a=b[a&&1<a.length?a[1]:void 0]||"unknown";"images"===a&&f.test(h)&&(a="product-images");return a}}})});