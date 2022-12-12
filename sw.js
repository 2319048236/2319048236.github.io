/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","5edb350ad5a4cfc441f30fc66b6608fd"],["/2021/08/25/第一章初识/破冰大会/index.html","307516ddd619c0c5e19b348a2c47444b"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","de91a95abf7d55a582ec0ad6cee30c69"],["/2021/09/04/第一章初识/开学/index.html","1ec556a6eaa647b4f53411ac90f19ddb"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","4c50bd1cea7821f14e0dfcf99ce48e82"],["/2021/09/10/第二章情愫/有效择偶权/index.html","9c7c0b0db4e1dba881d72c7be0af917d"],["/2021/09/10/第二章情愫/本章概述/index.html","23ccadf2d5a47137cad0607802bc6b85"],["/2021/09/10/第二章情愫/鱼塘/index.html","2c924cdc238e776ac884aee96347c5af"],["/2021/09/10/草稿/草稿/index.html","8a20a51688df1ddb3b3cf1fa84cb4640"],["/2021/09/12/第二章情愫/死缠烂打/index.html","d526be2390a1dbe1cd0d903a951e2ac8"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","e0234e3eed947ecd37d8d68d928c980e"],["/2021/09/15/第二章情愫/微信好友/index.html","d93e168bc1c119ede4331fa742091695"],["/2021/09/17/第二章情愫/中秋月饼/index.html","f8b573376418cc7f390ba65c208b49f2"],["/2021/09/17/第二章情愫/吃饭/index.html","43ef2d6fa10a9522b07f4e7186f0b739"],["/2021/09/17/第二章情愫/官方认证CP/index.html","e0bfe26c30c4099d1c44acd6d0407dcd"],["/2021/09/18/第二章情愫/续上火花/index.html","d03ae990bedd1af033b41a65283e86fc"],["/2021/09/19/第三章悸动/袒露心意/index.html","223802287c7509700151a99ea5eb8ba7"],["/2021/12/09/附件/第一封信/index.html","14f1ac3cdb7024943a22a8809e555ca0"],["/2022/01/01/附件/第二封信/index.html","2f142fd3b20f7922fbc0756da8504d60"],["/2022/01/16/附件/第三封信/index.html","a490931bf9f552319d8491236ef34b53"],["/2022/01/31/附件/第四封信/index.html","2ef08f8fbd62975df7bdfa1664150fe6"],["/2022/04/06/附件/第五封信/index.html","30cf977fa1682210174220dc8e187a35"],["/2022/10/23/番外/喜好篇/index.html","efefb1927fb2c006b77eecdfe14fe841"],["/2022/10/23/番外/重要日期篇/index.html","a620b080fc1529cc1fae20a7c98edd3a"],["/404.html","94efb48e628ea4c1e4703ac9d33ba0c4"],["/404/index.html","43ca35a8b5e58e4f256a13306795690c"],["/about/index.html","1e6fb9e9bcb10563fa647e72bdb69c2d"],["/archives/2021/08/index.html","8df03d4d5ba985e35ca9796915464db4"],["/archives/2021/09/index.html","3dfd83317a028f78ca317a4edea99a78"],["/archives/2021/09/page/2/index.html","2c98124462c4bf730100e664c5762cbb"],["/archives/2021/09/page/3/index.html","8c37e3b87c8d846f77dbbf3d92cfd339"],["/archives/2021/12/index.html","48f8f6e31cb19ed459c0eb81f42784be"],["/archives/2021/index.html","88d1bb59eb9c20e83d189bb6398af988"],["/archives/2021/page/2/index.html","82b621c1f4c81bd467a41d61e1883459"],["/archives/2021/page/3/index.html","1079084e7dc832c96f8fa114f31ac951"],["/archives/2022/01/index.html","9761419ce49687301d91ca8a177503be"],["/archives/2022/04/index.html","2676e83c030bab662663794b20492ebd"],["/archives/2022/10/index.html","0b1a2deb48fbafcdb39ce1c646b7cc65"],["/archives/2022/index.html","846276df211bef170061bfea70148c7d"],["/archives/index.html","f8ca5f749ab1fc606063f794e1dcebb6"],["/archives/page/2/index.html","5f51464b64d3780edcecd8bd70f62156"],["/archives/page/3/index.html","571daef40a0b49b3b4d53d907d0ef718"],["/archives/page/4/index.html","3a3dd74d70293d6e5aa5916c1a248c92"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","3cf5efb1c21946f843093a5b13ff4e94"],["/categories/前言/index.html","ac0d5f1fdd574190b37c2ba47444991e"],["/categories/番外/index.html","017ed2137fc85303ccbcb2f22c0b405c"],["/categories/第一章-初识/index.html","0542505184dba51cee9dc9312bcd99d3"],["/categories/第三章-悸动/index.html","548d40b43ba3c4f9ea983c7f5d14d388"],["/categories/第二章-情愫/index.html","9a1ee6fc252634352e6c973e51c52d6a"],["/categories/第二章-情愫/page/2/index.html","d8bce97069005ce571c8887c1ba6a244"],["/categories/草稿/index.html","20dbef69a1c8d24c1e4c1380612ec033"],["/categories/附件/index.html","d3822793ad05cc11db63a625ab71cac0"],["/contact/index.html","aea09974f7270c0513e4ccd1d831d674"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","be75180713bd921e8f3f628cb6f1487f"],["/index.html","a1e344ac0e6d2163e8c9f1f86af3526e"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","5f0bb827612fc27dc8765bac683cb2c3"],["/music/index.html","40210d265d424084189641d199b32ddd"],["/page/2/index.html","5a5f0ef5e4ca5372ec7e516cf5c56b64"],["/page/3/index.html","4da7f5152aedbd0cdac9765ee8a9ec2c"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","a7191643d2d51b4295e36c89ba711983"],["/tags/index.html","4b4004820773cef33036497239a509b9"],["/tags/一百天/index.html","9a06cc413aa1090516f3dc0777b9df1d"],["/tags/信件/index.html","ea0edbf17f8bbeac7149211f1e71c707"],["/tags/喜好/index.html","029f2a04d90c6eb32633d8b1062e6b1a"],["/tags/想念/index.html","5e1e65eddf04c3e5f3662f3f22d9574d"],["/tags/故事前文/index.html","88fe3012a96a18624161f0a58ca49393"],["/tags/春节/index.html","bae4efb6e9f81ab08fe3ff5e023278c2"],["/tags/生日/index.html","216156ad5ce19ae428728ee5bf33cbbd"],["/tags/番外/index.html","df4c76abf8f59c719c8e668e1e0d0e50"],["/tags/第一章-初识/index.html","04971849a0c8847808159eead6f97d42"],["/tags/第三章-悸动/index.html","de621dde2c9d66f28c5a7bce1044bdf9"],["/tags/第二章-情愫/index.html","193e2a0532df74a0437882c3dfdb27ea"],["/tags/第二章-情愫/page/2/index.html","fb5cca2fd3a3e1838cd1100ce2358285"],["/tags/草稿/index.html","803d3283852ea937db0a08da75772376"],["/tags/跨年/index.html","c29f7e650d7b9a8432802d3a8b7ccf16"],["/喜好/index.html","8a58a70a2e0ab30bad07637f6b58eb1f"],["/圣诞树/index.html","5e16c6df23596be7db7b3d98a96da407"],["/她和我的照片/index.html","27409ac494dca56aab893bb58b605450"],["/测试/index.html","6d1909f2809fae498342d18375491c2d"],["/目录/index.html","0ca0c7ab429f40d8a04dcaeffc6c2f14"]];
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
