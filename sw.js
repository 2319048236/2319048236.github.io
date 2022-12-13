/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","9a96d8bd295e3c4da2e760fa0dd7819f"],["/2021/08/25/第一章初识/破冰大会/index.html","504396b98dcf3331707fec7907f01724"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","e11bc2fa081b5a2109242391df2f21ec"],["/2021/09/04/第一章初识/开学/index.html","539b583556b85a89850bfc892cefb543"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","bddba43cbb7e0c9749674a5c904f1fdb"],["/2021/09/10/第二章情愫/有效择偶权/index.html","32ef45c1e352c8ef0f7e127aa5dd0b48"],["/2021/09/10/第二章情愫/本章概述/index.html","20f7f5ddbe07bd4048a8471bb30a2782"],["/2021/09/10/第二章情愫/鱼塘/index.html","9a1f39272d7e793a6de4e5f685e36065"],["/2021/09/10/草稿/草稿/index.html","e02828320fe5ec6a7b0113e525a0bebc"],["/2021/09/12/第二章情愫/死缠烂打/index.html","08e9a88289e56c29e224446a692092d1"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","fba36b46d9be3de779390d4cd168690c"],["/2021/09/15/第二章情愫/微信好友/index.html","ea179cc7a885a2c92ccc7aae777c6d08"],["/2021/09/17/第二章情愫/中秋月饼/index.html","595597cf079a417f5944cbab98aaeda6"],["/2021/09/17/第二章情愫/吃饭/index.html","5a23fceb6adc4fa93a174b501d5eba82"],["/2021/09/17/第二章情愫/官方认证CP/index.html","9e4536f498d77e11423b5719b8143dde"],["/2021/09/18/第二章情愫/续上火花/index.html","b8084bff492ae52ee18dd63a2af4a3ad"],["/2021/09/19/第三章悸动/袒露心意/index.html","3595d3617ea00a5fe5fad5be31300904"],["/2021/12/09/附件/第一封信/index.html","d6209a399f20f5675d1c4991e3a18236"],["/2022/01/01/附件/第二封信/index.html","86ba5c61b4ef96bb8bb0721b36657b7b"],["/2022/01/16/附件/第三封信/index.html","78a2ab649da3854b994afcdf1bcce9d5"],["/2022/01/31/附件/第四封信/index.html","b69fdd6220b56f1e9110fece203124b0"],["/2022/04/06/附件/第五封信/index.html","524d3ce81e2238e316855e95ccd5b76e"],["/2022/10/23/番外/喜好篇/index.html","c15795e706480543332c6f80bbe1fda5"],["/2022/10/23/番外/重要日期篇/index.html","72e43a9f604594d64c32ea620602df1e"],["/404.html","53f3e3336520a525e109c4d5b230312b"],["/404/index.html","e290ac204fa35e6303075450914b403e"],["/about/index.html","995dc98f52171e7a7b1aad1fc9d87e37"],["/archives/2021/08/index.html","7824e03be30a6608550906cd72ea9f1e"],["/archives/2021/09/index.html","721eaa86e27bdf9ea83d96f38e3c8006"],["/archives/2021/09/page/2/index.html","11bc5c6f24effb8b92d655f54f2df3ca"],["/archives/2021/09/page/3/index.html","df799fc5c0bcac504d263c987ad7cc19"],["/archives/2021/12/index.html","16c51c72fdb4a0cbf5c7908dcc7119d6"],["/archives/2021/index.html","f9c9ee1f6d6855c05a262a124d20ca7b"],["/archives/2021/page/2/index.html","e576571f757b30e1c6a2aa133b7cbbd2"],["/archives/2021/page/3/index.html","32b10679f86633ff8737f291343b2b7a"],["/archives/2022/01/index.html","3b8de2d7949fd8dca31a72ec4e964896"],["/archives/2022/04/index.html","4c403d979a2522f9881bf620388a152d"],["/archives/2022/10/index.html","ad0c28a32281287c5e40f3f270378e41"],["/archives/2022/index.html","7815b3691b447aa3e936c41a709c0f16"],["/archives/index.html","d51b765bd8dd2b2b64ce9e6b7f22f818"],["/archives/page/2/index.html","1e3a8550190300bccf5889fd0af8a3b7"],["/archives/page/3/index.html","f06ce3782dfaa0936e9362e12f841f29"],["/archives/page/4/index.html","34bcdcac2b559361583e39865a266a62"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","96b54127518bd1c6ec6e7eadc3b2d1f2"],["/categories/前言/index.html","7f445679e89035b66921548fa059a1be"],["/categories/番外/index.html","611e3db59aded5e2f9a7e43d1b6b8140"],["/categories/第一章-初识/index.html","f720524fe42f86eb7ae06541a393fec2"],["/categories/第三章-悸动/index.html","7cbb3d449cb3664be0cffd50ad68766d"],["/categories/第二章-情愫/index.html","e6e0f7da2150f125eebc008b13c20cc2"],["/categories/第二章-情愫/page/2/index.html","96e06c19510802400b2e6ce61c52585e"],["/categories/草稿/index.html","460f16fbcd2987753750e1e8155139d0"],["/categories/附件/index.html","b332960bd2e7239a4e801436871e944e"],["/contact/index.html","71dd1f4d9a885175765fd979e177b9eb"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","2f11506640ab4f8ebbe7ff2a6a81f1c2"],["/index.html","665c0322466cfb40e7aa0bef82f44a21"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","0f55da9e028a170aff12e8626c3fbe30"],["/music/index.html","a51ecbf8e3840c20c0eb733208fba37d"],["/page/2/index.html","cd8f66f3fd7a4c4e19e9a9297a2d2e4e"],["/page/3/index.html","2a59b1c91bef92f9b269ef4f4e994d8d"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","1883ef811a8f60a7cb44a14efaf6a259"],["/tags/index.html","f64a6bd38ee122ffe4bd0a33a11b6afe"],["/tags/一百天/index.html","554606893afb9a4360ec6cad92f13370"],["/tags/信件/index.html","70ef83958ad70d232c7b348b647d0213"],["/tags/喜好/index.html","38d19878683afef7a99ea97588511ff7"],["/tags/想念/index.html","8fb311b0e1a15933a91f7142bc845ee5"],["/tags/故事前文/index.html","492eb7ad3977c1d6ef7c84f46d251a93"],["/tags/春节/index.html","daeb84c01b65224ce31f1715330fdbfa"],["/tags/生日/index.html","21b317057141cb11bc102df15e780caf"],["/tags/番外/index.html","7eb2d22c3cf32bb4d8456acb34c96c05"],["/tags/第一章-初识/index.html","58dcfdb88fd1fceabb8262efc1800f17"],["/tags/第三章-悸动/index.html","61a0daa6e499067d5d67dc0bfa9738eb"],["/tags/第二章-情愫/index.html","f005c4c4d74f6596448532b7856cb213"],["/tags/第二章-情愫/page/2/index.html","58db54264cfb220771637beca59170d9"],["/tags/草稿/index.html","18fc71e4f2d1e06f625903012e2cb257"],["/tags/跨年/index.html","9a1beab7bf3b559fdcbde6fc049b3071"],["/喜好/index.html","fdaeeadb4aa9418dbbcc0d80afc315e6"],["/她和我的照片/index.html","ca15d24df8597f649329fee95c729576"],["/测试/index.html","33ee2bd8fbb6eae900ebe6cd5f14da9f"],["/目录/index.html","7c42a5e573ea2e5ac3137260df14f635"]];
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
