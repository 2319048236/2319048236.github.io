/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","4ffa2ad5bfa7a0cb6e2a42eda5b2ae8a"],["/2021/08/25/第一章初识/破冰大会/index.html","73f6fc4e2f9ef35908f691b9082b5a81"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","454eb88324211030ecb5a3882f583985"],["/2021/09/04/第一章初识/开学/index.html","f756e9fb07327197e34ac5d9ff07cc82"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","db2242ab35b48c9821857f5688b62823"],["/2021/09/10/第二章情愫/有效择偶权/index.html","9f3fc5312bb2133f879e63862ca9c150"],["/2021/09/10/第二章情愫/本章概述/index.html","c2e0c60649251093b555fe189fbc0a3e"],["/2021/09/10/第二章情愫/草稿/index.html","4f424fb818ad2dfb6bab0a12aabd219c"],["/2021/09/10/第二章情愫/鱼塘/index.html","a7ee595f262dc5be2143093643990c16"],["/2021/09/10/草稿/草稿/index.html","1220e54976782fd3b028bf38ad897738"],["/2021/09/12/第二章情愫/死缠烂打/index.html","9a96fc0ff7ac32a2519b96cf73548db1"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","9f9246b4e78a356011295f1b2ff5c79c"],["/2021/09/15/第二章情愫/微信好友/index.html","314c322f9edef079835c57e0211871d1"],["/2021/09/17/第二章情愫/中秋月饼/index.html","c2557af582f817a52899ebb896a5c0f4"],["/2021/12/09/附件/第一封信/index.html","7c34d76ffeb2f700f137572cae382967"],["/2022/01/01/附件/第二封信/index.html","5165b565ad78254fd015f059c9f713e2"],["/2022/01/16/附件/第三封信/index.html","ff268d74ba13a1421b619b4347748b9f"],["/2022/01/31/附件/第四封信/index.html","50018303b3606e73b3bff42b5ad678bc"],["/2022/04/06/附件/第五封信/index.html","52d34cdda5f9cd068df845f1e9cecf7d"],["/2022/10/23/番外/喜好篇/index.html","f30867954d1ce917bb1d31abba078992"],["/2022/10/23/番外/重要日期篇/index.html","e1dc7f364e7c59cd7fa91979cfe770f4"],["/404.html","ff6b6f48ac933fb74c1ff413348136df"],["/404/index.html","1f9077a5b00ee67ff16c1d2cb24b116d"],["/about/index.html","64ac0dbea5ffe9495f90cefa39b9856f"],["/archives/2021/08/index.html","e746a4ef50bccc8c1e9850818f608179"],["/archives/2021/09/index.html","a09bbab9abb154ee2b6ad2076d5009f3"],["/archives/2021/09/page/2/index.html","122b630a7492f408ab6048609a68d19f"],["/archives/2021/12/index.html","8df8fe23562bde03a58f9af8b1e365b1"],["/archives/2021/index.html","dde9a5bc713f0834e1149ac67755904e"],["/archives/2021/page/2/index.html","f8804a06cf72c7d3961fe687ef0898b1"],["/archives/2021/page/3/index.html","f035c510b6d70833d13c607865087302"],["/archives/2022/01/index.html","8d269a3fce749435b971b42d41a8a63b"],["/archives/2022/04/index.html","abec2b76e32ec3214bee5679414ab9fa"],["/archives/2022/10/index.html","73cad2028027acca8c4bb839f58a00b9"],["/archives/2022/index.html","6936fa283e8f617fdc0718ebdd6ecb76"],["/archives/index.html","485edfdd6bd7996bbc8ef2e70a95d435"],["/archives/page/2/index.html","598136afe819f61712d6968c580543b3"],["/archives/page/3/index.html","2d00b3549c81104cebb6c43eab5f2c56"],["/archives/page/4/index.html","7175e3418597188dcf5b125914e3d0d1"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","26e8a0d0fce2d12b4b50715db1ee07bd"],["/categories/前言/index.html","40b4861d3007d23b0108206eb238242c"],["/categories/番外/index.html","5537c96da768a228082dd464d569d4b5"],["/categories/第一章-初识/index.html","2e7bd81d56da07b95c3b0f6e1092a453"],["/categories/第二章-情愫/index.html","f27f29f66111f75f16b063e5ef09f511"],["/categories/草稿/index.html","a7ccb11e7fe8b2f2509ee026e11e9cf9"],["/categories/附件/index.html","e5db051e75aea0adaa7af03a3c3e899e"],["/comments/index.html","8ba18e8a37e445d1f962021cf5cf91bd"],["/contact/index.html","e11dd9c09e9d570b0e3ceb287add2b6c"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","d1e4f9f5c31d6308a382f3f4428fe4a7"],["/index.html","8023519e95c2f8ebe3e9c737afda1178"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","d4435155bee7ede2a369cd50183cfb07"],["/music/index.html","19b95d805a88a69b6c476b146349bbc2"],["/page/2/index.html","74ee897e628fd588733739e4e6ca0661"],["/page/3/index.html","5119f66938c203417c85c27614e8b642"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","ad94af5cdd743a8f01784a6d1a7dcb8a"],["/tags/index.html","b90c2d22b107f591b8602b78759310de"],["/tags/一百天/index.html","887e5246cf813913d652c41b2589e770"],["/tags/信件/index.html","6b44c5d256cc868621c40e08e6b9aa77"],["/tags/喜好/index.html","d50993c6037d837d6fa75b9c0566899c"],["/tags/想念/index.html","661888c03f5743404fdd1556bd5b1dd4"],["/tags/故事前文/index.html","2ba4a9f41f9fd3f5b8b5068f40b1ae3d"],["/tags/春节/index.html","f502babd77963f4b4b03e4a27203f814"],["/tags/生日/index.html","1cd4c4cc2116f1f76b6407f6fc69a602"],["/tags/番外/index.html","8d79f394bdb083b8045f8806775b7020"],["/tags/第一章-初识/index.html","c05121a694e3415f2d0443c3275cc3ec"],["/tags/第二章-情愫/index.html","e78a2981ce1976bc21bb7e8a87bd6300"],["/tags/第二章-情愫/page/2/index.html","c9d3e7cf6daffd51becbb762b156d5bd"],["/tags/草稿/index.html","d1feedbb3450cdc629cac92f35b07aa2"],["/tags/跨年/index.html","88f42ef9d0df93d4869fff1649126ebd"],["/喜好/index.html","2c3f40a1f200c92ff9b57293574c8a7d"],["/她和我的照片/index.html","a6712d2b259e526565fb3596d7a61edd"],["/测试/index.html","b193e1c0cbcc378c2e2e815bc3fbf973"],["/目录/index.html","ae3d0d2e260482e788d849ea530416af"]];
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
