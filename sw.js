/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","5941b01f818b6f7d964995d598d569e5"],["/2021/08/25/第一章初识/破冰大会/index.html","529c57a8d4f12d464f1540b731a21518"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","87225a136c3d28c554a064506f106396"],["/2021/09/04/第一章初识/开学/index.html","987533fd5d7ae143151fbc0dcb78d71d"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","a58df21e476d550e6e40ec5c32068133"],["/2021/09/10/第二章情愫/有效择偶权/index.html","8d2380ff65e538cbd6c102e9cac2dde7"],["/2021/09/10/第二章情愫/本章概述/index.html","16ac42d086fa6501c26ec3f7d720b3a3"],["/2021/09/10/第二章情愫/草稿/index.html","a50c19f94aef94994d528457060891e0"],["/2021/09/10/第二章情愫/鱼塘/index.html","f8723438edbfd114afe63d7c46a1a68e"],["/2021/09/10/草稿/草稿/index.html","727a9a16be66612594ddbd2e55028b29"],["/2021/09/12/第二章情愫/死缠烂打/index.html","daf044447731588ab5780569b7b6c7af"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","8fdce89b21b00dd1a61b486f4331765a"],["/2021/09/15/第二章情愫/微信好友/index.html","2a62dfc7a59a5598e53bdad768e29b5d"],["/2021/09/17/第二章情愫/中秋月饼/index.html","927d49222810b71a1f7c292cfeecc3fa"],["/2021/12/09/附件/第一封信/index.html","d3da085f103bc9a067f42c1534b848a7"],["/2022/01/01/附件/第二封信/index.html","dcf045b616cfd7189e07065a841c297d"],["/2022/01/16/附件/第三封信/index.html","0f07a62cd57d6c027cd2de462230a447"],["/2022/01/31/附件/第四封信/index.html","ff3ca10bfb5fea813d9329bb0dcc76f2"],["/2022/04/06/附件/第五封信/index.html","3e20b0819214f049a8e09d675b59ef32"],["/2022/10/23/番外/喜好篇/index.html","30785c789cf1ce5702e34c34f16011f5"],["/2022/10/23/番外/重要日期篇/index.html","5fb0954152993f049a185e6fca19c0bc"],["/404.html","a92d9344ea9779e71fb0e809bcb4eed0"],["/404/index.html","17bbb0fe89acb5f8c6df51bf6eec8bcf"],["/about/index.html","089c4652284be6319b5ebda893e13280"],["/archives/2021/08/index.html","b039217067722d2377b42065750eb48e"],["/archives/2021/09/index.html","44ebc78f1a29a76a744ced8214b84355"],["/archives/2021/09/page/2/index.html","6a17e2fc2a5a2cdffab9201b386229ca"],["/archives/2021/12/index.html","cc9e8f6e970059120354e70dc8d2a568"],["/archives/2021/index.html","e6cca84da30b5fae5d780a6503891818"],["/archives/2021/page/2/index.html","677751f408c68add942586c532a26fe3"],["/archives/2021/page/3/index.html","bfcb528938ca04d0da4b61619eda9395"],["/archives/2022/01/index.html","e598487a08228a49e6e1adb75080ed10"],["/archives/2022/04/index.html","2fbd1649fc71f6802fcd9b55a91cbe92"],["/archives/2022/10/index.html","e9c9c4659511d58029a3c83fb5a499bf"],["/archives/2022/index.html","52b19c5e900a89f783b204052ebb6592"],["/archives/index.html","0b8ef11ccc4bd9e789a767910e686928"],["/archives/page/2/index.html","b1dbdce1f0312e739435e48668abcd51"],["/archives/page/3/index.html","4dd9797110c2d8fe9492267abfe50049"],["/archives/page/4/index.html","610661c10b3048e5644b2e15b8189367"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","041c81b11e8acdbc8b26311df7aa6e22"],["/categories/前言/index.html","0f7022c4ec49a60e7ac6949e566fa0a8"],["/categories/番外/index.html","6b72d73518e80bb835ef69aa4a9b1aff"],["/categories/第一章-初识/index.html","28fc93cf33af99a47119da02cdebadd3"],["/categories/第二章-情愫/index.html","829dbe17d486bf21dc103b355b47aedb"],["/categories/草稿/index.html","8e8cc904a194f0dcc8be0bdba8f21108"],["/categories/附件/index.html","0bd67cf0948595bfb5a15035150e1a84"],["/comments/index.html","63e72266d52c1230528ec27e708ce2de"],["/contact/index.html","4ecb975534f2a82d7249fde42e06acea"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","990d8bf38b523ef615fd7f7ca847e29b"],["/index.html","179c7de91473253af19a5acc8686d75e"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","48dff1097cbd3bcb225a2fd57af14129"],["/music/index.html","d2cd94a20462daf747734c624fb5e222"],["/page/2/index.html","ae9787b07e48b75842419e55c9e4a9ae"],["/page/3/index.html","1bd2266b1a61d48b2936e93c8098ed27"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/tags/index.html","937a3c7b2dd8f774044e1f2a8a19a49e"],["/tags/一百天/index.html","ce5d467a1e7b5b486e0cd9faf1cf4e7a"],["/tags/信件/index.html","521981a3bfb7900a690556f81d508ad4"],["/tags/喜好/index.html","51c3ed3aa158b0f5f45bba876bd9178d"],["/tags/想念/index.html","dadad3acaf64d494cb4872f77a324d42"],["/tags/故事前文/index.html","26fcea1f348e8790ec09c67a7cf2139a"],["/tags/春节/index.html","fe18d142655e316b1a5c8efda6855ccf"],["/tags/生日/index.html","fe6e4c3cab83b596edf082389909d8ad"],["/tags/番外/index.html","599fcc5dcff82754f57e0a09ef815da2"],["/tags/第一章-初识/index.html","b3be72f05ce905fe81a8dcce6b276e41"],["/tags/第二章-情愫/index.html","4bdc9e44f7f27c8351d7d15c8af21ff9"],["/tags/第二章-情愫/page/2/index.html","27a1614ee17e7a5ef338f3965928ae0e"],["/tags/草稿/index.html","fda1fbc8de06944a494f53c14bb80eee"],["/tags/跨年/index.html","442add20e8409fbef8ffc3704cf58671"],["/喜好/index.html","73071758fae29767d89f71a899a6dee8"],["/她和我的照片/index.html","47d41c21e7bccffd07d7d1db744f3fa2"],["/测试/index.html","9645fa48645ae49ae85e578d6e025a0b"],["/目录/index.html","4c73f7c2237e1892c691a0bb9663ac0b"]];
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
