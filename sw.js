/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/project/2021/08/24/前言/故事-前文/index.html","bbf61782f79e399c00e2edfae815d299"],["/project/2021/08/25/第一章初识/破冰大会/index.html","dc5a3d2a43e7f554c98bd4ca438fc0ac"],["/project/2021/08/27/第一章初识/私聊记录(一)/index.html","2c6ceebdc9988fc8eb15e31d41afe608"],["/project/2021/09/04/第一章初识/开学/index.html","b47fb54d18d01e9e0a1991a36e737fa3"],["/project/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","1bd10e266193af33cfa11da21d4bb944"],["/project/2021/09/10/第二章情愫/有效择偶权/index.html","2b18fc8ae7bfcba178e1fc05d8a7cf90"],["/project/2021/09/10/第二章情愫/本章概述/index.html","f9a2a0b706103d357f63bc84141eb055"],["/project/2021/09/10/第二章情愫/鱼塘/index.html","6bfeb9ea03366894f16340c5712975e5"],["/project/2021/09/12/第二章情愫/死缠烂打/index.html","5a4910d2787fcfa140c3125dcc493a01"],["/project/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","27d02b246483e6f0fc4a8fbf9c953859"],["/project/2021/09/15/2021-09-15/index.html","0e4892ef9e824df47a3fb34d168eab44"],["/project/2021/09/15/第二章情愫/微信好友/index.html","ffa56112ce048e9bc5bb7332db3927f9"],["/project/2021/09/17/第二章情愫/中秋月饼/index.html","b4775968ace50d5e30506b024655c027"],["/project/2021/09/17/第二章情愫/吃饭/index.html","d7462e3004b18fdf070f5948a6449410"],["/project/2021/09/17/第二章情愫/官方认证CP/index.html","968c30c481cbfd5a3fd25a46fe64d719"],["/project/2021/09/18/2021-09-18/index.html","bb08a59bf5737dde62f6f4490fd4d126"],["/project/2021/09/18/第二章情愫/续上火花/index.html","8e9f0e4df387ff2d3c8625fad7aa40b8"],["/project/2021/09/20/第三章悸动/袒露心意/index.html","7538d11fc820064c4e841f7b2cad2854"],["/project/2021/09/20/第四章发展/进展/index.html","561f93681e060510d06ad6bb952f900c"],["/project/2021/09/21/第三章悸动/中秋快乐/index.html","d248523b97f03ee75e6a8184a56927d0"],["/project/2021/09/23/第三章悸动/特别关心/index.html","4b8e921d92337fe2c5b6c6bd931e7fe1"],["/project/2021/09/24/第三章悸动/推课表时间/index.html","21d1f55d927ab2f66bdb7b169862517c"],["/project/2021/09/25/第三章悸动/开会的小插曲/index.html","b7d2c8b7045c6bd110fffae7d6160d82"],["/project/2021/09/26/第三章悸动/溺水/index.html","2bf02e1b96e4e7f94b1cee8387dc6eeb"],["/project/2021/09/27/第三章悸动/约定/index.html","f43bebf41efd72e3fd83e9cf718584db"],["/project/2021/10/03/第三章悸动/女闺蜜/index.html","b05e75f45922dc9513fa79d7836cbe72"],["/project/2021/10/05/第三章悸动/持之以恒/index.html","516499508fa18260e319b7d7ce89038f"],["/project/2021/10/06/第三章悸动/想看雪/index.html","ae77343bfcd16b6c4a90bc2ad07aead4"],["/project/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","39598f2eea606c998fed2b632fbf94d1"],["/project/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","185c33e1de90ef66600e4f49e27523ee"],["/project/2021/10/21/第三章悸动/同频共振/index.html","113b0e64338af7f1751a9e7e66ac4f9d"],["/project/2021/12/09/附件/第一封信/index.html","54325132f01268879263a62223fcfb9d"],["/project/2021年目录/index.html","9ff2123384554ebf0a2d41f1e6995c66"],["/project/2022/01/01/附件/第二封信/index.html","f6cbd4e39e9e5caa6e1f6d0a57cc1a3b"],["/project/2022/01/16/附件/第三封信/index.html","60e4108d742cf650fbfb533abe00f4a6"],["/project/2022/01/31/附件/第四封信/index.html","dd04547946a4eda87571d572c15b44e1"],["/project/2022/04/06/附件/第五封信/index.html","9e8c527c0a687d407874135e1780589b"],["/project/2022/10/23/番外/喜好篇/index.html","50180217651ec2e4466f381f65bc3167"],["/project/2022/10/23/番外/重要日期篇/index.html","50c8cf98e302fec3a4e484e087bbc9fd"],["/project/2022年目录/index.html","73b058725c3e6fa04c24a52b470a7096"],["/project/2023/02/13/二三年/二月/看海/index.html","895d4ab6213fede9ac3bed3b96061a0a"],["/project/2023/02/18/二三年/二月/去机场/index.html","ffce2c6675918021b85bfa3d8dd90af0"],["/project/2023/03/02/二三年/三月/对感情的一些看法/index.html","7ffffb3990354b6df61749e9193b7802"],["/project/2023/03/28/二三年/三月/一双鞋子/index.html","d07cd8f852c0b8fc48a3798affb749cf"],["/project/2023年目录/index.html","0aaaca7b2a0771f48f954ae37cb4ec41"],["/project/404.html","0a1807fabd772ce3f1b638387173c70f"],["/project/404/index.html","2560b94e796684570e0a57ea69caeff1"],["/project/about/index.html","d08b24fdb9a0a1e1cbb3944bd738e7fc"],["/project/archives/2021/08/index.html","de633d2326097e411e49f01b606814bb"],["/project/archives/2021/09/index.html","c9e215ffa2d0875de535ba6dd53e4e14"],["/project/archives/2021/09/page/2/index.html","2e466ba465745454445ea5e81df9d1e1"],["/project/archives/2021/09/page/3/index.html","220b4e1bebe28e2606c18b60d0274522"],["/project/archives/2021/09/page/4/index.html","7431cf02ee1d0c9993f7ae038321c5a1"],["/project/archives/2021/10/index.html","0629776d1ba9ee448a782f3cc39d1f9a"],["/project/archives/2021/12/index.html","aa1e8bf630f83f4269b072077940520c"],["/project/archives/2021/index.html","1ef0f30587eeecf5c50f10bf066d4b56"],["/project/archives/2021/page/2/index.html","8dc0b970e72daf24c0f7726b0a7e97c0"],["/project/archives/2021/page/3/index.html","8f031c93c8123729b5c52086dd5ac6ec"],["/project/archives/2021/page/4/index.html","a8f9be7ace50cde0ad314a7ad25a1b2a"],["/project/archives/2021/page/5/index.html","ba88475d44b7c85d701259fae860c6c2"],["/project/archives/2021/page/6/index.html","d1cbe7f223b90d4d7edbcb9d4d2f2c8f"],["/project/archives/2022/01/index.html","49f4d03194f2a179322493e516979b12"],["/project/archives/2022/04/index.html","da0a244ae66db1895c21c69a5a9de171"],["/project/archives/2022/10/index.html","8cad37eb40992447ce69664d3f1323fd"],["/project/archives/2022/index.html","11993622edc543076511a46f95fa123f"],["/project/archives/2023/02/index.html","bef082dcb919736ffb203b729731d17f"],["/project/archives/2023/03/index.html","5b1c0c80a8e0886d3cda885aacfdb178"],["/project/archives/2023/index.html","de3efca2b01292f0cfae4a5e07cb474f"],["/project/archives/index.html","15990b9138123c6208b212f9a80581a4"],["/project/archives/page/2/index.html","f73524655c8e8b3652c1fa83a7e61b82"],["/project/archives/page/3/index.html","3ffac5be4117e3f367a0abaa91343de2"],["/project/archives/page/4/index.html","3fe487078b24e85f1c0c420ccb07f0b2"],["/project/archives/page/5/index.html","54ac47713dfac0b7451d8668462d59cb"],["/project/archives/page/6/index.html","cbf832424c85202fb91f180de6736c04"],["/project/archives/page/7/index.html","b240478c8f781cf2c06d51967742940b"],["/project/archives/page/8/index.html","224d17f21317d9d194a750a1ddc82b1e"],["/project/categories/2021年九月/index.html","990431843ca6d3206abe9e639fb9e5fa"],["/project/categories/index.html","90d83197153a0f40eb06068136263d00"],["/project/categories/二三年三月/index.html","b1708768462ff0d2dfbcb73dd358ec84"],["/project/categories/二三年二月/index.html","479c3110b7f76419ab210a439e0a5cee"],["/project/categories/前言/index.html","a5b6a9cb25bbb9619303268ee8226d26"],["/project/categories/番外/index.html","34c7f9c46c96ca804c3b02869d518516"],["/project/categories/第一章-初识/index.html","c02636acae7475415b03d36b9a885c8e"],["/project/categories/第三章-悸动/index.html","eee28df87c8965256c735c7980902a39"],["/project/categories/第三章-悸动/page/2/index.html","4353e8c4d7e414507adf87b7adf93ddd"],["/project/categories/第三章-悸动/page/3/index.html","14aab8dccb9ea6680fc6ba609a1843c2"],["/project/categories/第二章-情愫/index.html","cff80d639869827952e8f8b66800ad8a"],["/project/categories/第二章-情愫/page/2/index.html","0ce02e8cbc666b3e0a15294c684dbbdb"],["/project/categories/第四章-发展/index.html","aa396645ec48376fad08b35cdbd060c2"],["/project/categories/附件/index.html","e347e0c93952ffe31eb672ac341ad222"],["/project/contact/index.html","2ea6796f4a52dedb8279051ee7fa96a4"],["/project/css/index.css","f37819209280bd98b198ff6342d8df66"],["/project/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/project/gallery/index.html","d7c0ae74c2d146072234cd1d84aeeee4"],["/project/index.html","dd083b1754a6bdc9f0b7f6a005e47f3c"],["/project/js/index.js","a1258f18be2726dc809260de62eba819"],["/project/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/project/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/project/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/project/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/project/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/project/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/project/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/project/movies/index.html","3c6bf10e43595757f00c79357fc04196"],["/project/music/index.html","72ac1dd779bced88d187bbd2c4960b72"],["/project/page/2/index.html","b0b09ac82d6a2a7e5cd0beb7b1a68e25"],["/project/page/3/index.html","e291cd71af6f63fe93e6cb425fee5849"],["/project/page/4/index.html","34b91767f4684dd568415030d0b32f54"],["/project/page/5/index.html","997a37a16593a7e2121c34c37b3c8329"],["/project/project/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/project/project/style.css","f37819209280bd98b198ff6342d8df66"],["/project/sw-register.js","38ee9c96dcca7e871fb2b7f74e42645c"],["/project/tags/2021年九月/index.html","9abf328f8c829232691716c06bdd74e4"],["/project/tags/index.html","eb62a2c49808c30c42963ddeff9ea307"],["/project/tags/一百天/index.html","c562dbe8f997052c152bb043b0a130fe"],["/project/tags/二三年三月/index.html","e9f4737a44c443e392a7d1074fb2d155"],["/project/tags/二三年二月/index.html","8718b17f1566ff25108665ecbb967d1a"],["/project/tags/信件/index.html","cd4d7140bb5d9ed6005a4196e471d73a"],["/project/tags/喜好/index.html","f22311878078225abf7015f8c33d2f1e"],["/project/tags/想念/index.html","9300421ef676a815500e023e3c09b571"],["/project/tags/故事前文/index.html","ce8ca4763ba70a1d2027d6d3be98b997"],["/project/tags/春节/index.html","1a4ac40d0fee5bf1913c453ed506a83c"],["/project/tags/生日/index.html","8bf60543174dce5895692083389494e9"],["/project/tags/番外/index.html","7463313307a3dc03abcc49ef56ac0813"],["/project/tags/第一章-初识/index.html","0123712757ba8b5fa25912b48f34c6b3"],["/project/tags/第三章-悸动/index.html","b1a8e0e8f7e57ddd86155425fa710b94"],["/project/tags/第三章-悸动/page/2/index.html","0af8fbf3fbb26e77c7c0c371536138e6"],["/project/tags/第三章/index.html","1ce1e9a8db876db34ae27a97cf5cf230"],["/project/tags/第二章-情愫/index.html","5b5e853578d1b89c73e96fa0eb692ddf"],["/project/tags/第二章-情愫/page/2/index.html","291df90cf75716f799c235707cfe14ae"],["/project/tags/第四章-发展/index.html","1850b1da54b480933d26cfc70c3ffb5e"],["/project/tags/跨年/index.html","00e946b3c47239e1be1d8d21332ba1c0"],["/project/喜好/index.html","a64b773b0840e484512362984227d926"],["/project/她和我的照片/index.html","1718a24501050d3533c091edbda2fa7c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
