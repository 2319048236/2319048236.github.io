/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","554388edb3b5facde014bdc6aba26747"],["/2021/08/25/第一章初识/破冰大会/index.html","857f2582f77c2ab67a781482ea2969b8"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","80789ab7a12ce09f12cba89b3840a54a"],["/2021/09/04/第一章初识/开学/index.html","9aec6926a18b153c2ab6394640408888"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","6fcf35fc13a6da45f4b0b578a2d2ee46"],["/2021/09/10/第二章情愫/有效择偶权/index.html","8bfe77964cdaf455bc02a29d0688bdf3"],["/2021/09/10/第二章情愫/本章概述/index.html","713410b8d3c50169a82e613cbd20acdc"],["/2021/09/10/第二章情愫/鱼塘/index.html","558d2d1f9009da8a1352ca4ce98bb1db"],["/2021/09/10/草稿/草稿/index.html","10a2206f61aa85abef7ee974f5410e76"],["/2021/09/12/第二章情愫/死缠烂打/index.html","18be72e97624c265f1af372e9b78f4fe"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","9e3143f2dffc5336a56eb031c8717bbb"],["/2021/09/15/第二章情愫/微信好友/index.html","8f9b9088d253dc6c5587487dd3ba979e"],["/2021/09/17/第二章情愫/中秋月饼/index.html","879fe26fbb609eb2080750cd91712115"],["/2021/09/17/第二章情愫/吃饭/index.html","e9a8ebf70e0dc3f2104489a573ac7393"],["/2021/09/17/第二章情愫/官方认证CP/index.html","05c51c0b1055f8e42e0285debff372e2"],["/2021/09/18/第二章情愫/续上火花/index.html","247e073bad0fa7cff4c6e3392c911573"],["/2021/09/19/第三章悸动/袒露心意/index.html","352240622ddfcf00ed168ed6f9024fee"],["/2021/12/09/附件/第一封信/index.html","2a7c7f0b924a9dc528e4e25e515ae403"],["/2022/01/01/附件/第二封信/index.html","f4211ed230f3d8d347c02ac4469fc079"],["/2022/01/16/附件/第三封信/index.html","b5daf53c0448f57590cb6b87c7f2af1c"],["/2022/01/31/附件/第四封信/index.html","d1e8264110df7a2d7057b856f6203965"],["/2022/04/06/附件/第五封信/index.html","1662e47209aca0e301de43819098df1e"],["/2022/10/23/番外/喜好篇/index.html","2df4a04a595dcb3f0722ac8b3f359b8a"],["/2022/10/23/番外/重要日期篇/index.html","a8f6f56e95b4f59354d4af61e271c385"],["/404.html","a6b15ac4d88c84c917c7d5f105cd13dd"],["/404/index.html","f4028531ac29f9566f3b5cc874be88f3"],["/about/index.html","4c5f9ce681dc555acf8838022d82f055"],["/archives/2021/08/index.html","a6696343947a87f68c35da508e9d8831"],["/archives/2021/09/index.html","473e5313c694f3280e7c06519148c157"],["/archives/2021/09/page/2/index.html","46bbb8ff4440cd62757727cb33d4fba2"],["/archives/2021/09/page/3/index.html","a587d5b17a91c4897de79beef5c58a61"],["/archives/2021/12/index.html","dc28dc8a4033a409e8c0bfa48af37678"],["/archives/2021/index.html","c5f9cb86926b865102579e740b8c16d0"],["/archives/2021/page/2/index.html","8956d5b93d24ba0464477cce0b82233a"],["/archives/2021/page/3/index.html","d615db206bd9f9f8564239cffa62d4b5"],["/archives/2022/01/index.html","ba6d8d5b47a656f4e9f3b7545dc41cdb"],["/archives/2022/04/index.html","106a18fce2492a569fb199224475f24c"],["/archives/2022/10/index.html","d51d47edf97b0296d68abacb28e5edda"],["/archives/2022/index.html","f6ee6f8c6b3cb40301ce91adc8fef64c"],["/archives/index.html","6a7e3efbe50f6b6a90a2beb1683de089"],["/archives/page/2/index.html","1de0329bc82a0cac6ecad1c2fe62f434"],["/archives/page/3/index.html","bfbc770115a2fffce8ef05aab8e58ceb"],["/archives/page/4/index.html","c38f8a2f1dac20cfc994011582f97033"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","168585ed91e5865908fe18800b8b139f"],["/categories/前言/index.html","136b37d014dd44961fe4529189ba5586"],["/categories/番外/index.html","50d95ecaad43ff15c017f0b583c9f1f8"],["/categories/第一章-初识/index.html","b20d60e4d6b30ad9e9cea98891c58731"],["/categories/第三章-悸动/index.html","777c8eac88a46c5eb54527e4a90ab230"],["/categories/第二章-情愫/index.html","287a076d12943638be3558941f0a1dc2"],["/categories/第二章-情愫/page/2/index.html","ee6dc439f5270905d33645034dc75ea7"],["/categories/草稿/index.html","64b5d3058a7fccaa8b892bd790f5c86c"],["/categories/附件/index.html","5c5e6d4ec4d50779915937cc411a4a6b"],["/contact/index.html","a2bca859e9c72c2c709fb44d2bd2bc95"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","284999264c9a43d80413b0c8eb0c75bd"],["/index.html","0d414a1b7ecf09f6022e16a81fdc5647"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","b997c8024fae961931b7221d102270f8"],["/music/index.html","48c60ba401a0aa34f7dbddf04fb9ff06"],["/page/2/index.html","68863d1f6b394af3a1cc969a8680ae2b"],["/page/3/index.html","a827cde44b266db4ab39b2e30512e770"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","af6050c1d5e9ed306545516811628047"],["/tags/index.html","e4746d9b219f1c2740f11676bd5fe193"],["/tags/一百天/index.html","7f2874deebd2907bb7ed762adccb570a"],["/tags/信件/index.html","b96436cb618287c1ec53808796384ac6"],["/tags/喜好/index.html","4b5250ed8f65d782537c7500ebba3521"],["/tags/想念/index.html","6f80b9e09825c83aa969da488d704584"],["/tags/故事前文/index.html","37b168bf236f49462908f1e16c578fa2"],["/tags/春节/index.html","fa9cc5245b7220c6678bb4b8b710784d"],["/tags/生日/index.html","535abcab97819dfbcd975db188d7c6bc"],["/tags/番外/index.html","1bb796d466fc3b1f2aff6ab38bd5891a"],["/tags/第一章-初识/index.html","8ae688499d1c68005e87ffeac54f704f"],["/tags/第三章-悸动/index.html","f1d71d4f1330bf386a3a79b0df64d9e8"],["/tags/第二章-情愫/index.html","33a6f810e944edbd894d265072280c6c"],["/tags/第二章-情愫/page/2/index.html","a28ad3c953ca70bfecf24fc44aae57d6"],["/tags/草稿/index.html","249d33c9b6c641949f138f72e4cdafa6"],["/tags/跨年/index.html","f6e50982eca7e38855e40b0e1bcaefb5"],["/喜好/index.html","96ebd6b44a01908d4567a4a7fecb905f"],["/她和我的照片/index.html","d261725da82d73bf528eb106820696c1"],["/测试/index.html","c96110732d0c06f93fc542fbf318c7ee"],["/目录/index.html","e342385d64fe04912a3e2e100da906ae"]];
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
