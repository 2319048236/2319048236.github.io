/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","89ffeec092ca1cd9ca0f288a3d78fc50"],["/2021/08/25/第一章初识/破冰大会/index.html","d6f46c75da1e9f237e014eb6ba6fc794"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","e4295cf39a6c33b545fc075fea9ff6b1"],["/2021/09/04/第一章初识/开学/index.html","3ed2e4fcfd4ae5ba355bebc3ffa7be67"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","503807287455539fca1c21273ca854a4"],["/2021/09/10/第二章情愫/有效择偶权/index.html","0b3a1bc0f2c9d093dc342baa6367ad32"],["/2021/09/10/第二章情愫/本章概述/index.html","5824c417fd79f8ef5abd2a215405c322"],["/2021/09/10/第二章情愫/鱼塘/index.html","1274bfb1d810b9ce7db3f32c14b6623a"],["/2021/09/10/草稿/草稿/index.html","d7c1c048c2b704ada433b1f661ac59fd"],["/2021/09/12/第二章情愫/死缠烂打/index.html","ae65b6c09864d5eed550b3e4984968a8"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","1cb4e55dad0e06df64c270349cedab74"],["/2021/09/15/第二章情愫/微信好友/index.html","f430e83a3c04c56c912a8d3e9805d87f"],["/2021/09/17/第二章情愫/中秋月饼/index.html","bcb190f9ecc036342f198be409b48c2e"],["/2021/09/17/第二章情愫/吃饭/index.html","1ce49f27fe7c9990f89bcda0615400a5"],["/2021/09/17/第二章情愫/官方认证CP/index.html","8186e20ba1962e473078f247a47f3a26"],["/2021/09/18/第二章情愫/续上火花/index.html","65a976c86f518981ce64610d19a9a704"],["/2021/09/19/第三章悸动/袒露心意/index.html","940124fd3ea48ca18d769af58ab53f69"],["/2021/12/09/附件/第一封信/index.html","8e50cbdc75dcd8604a5f1fe641e6a803"],["/2022/01/01/附件/第二封信/index.html","57996f31dd68873b5091677136995d6c"],["/2022/01/16/附件/第三封信/index.html","607f3a3a83c15df6f35ba264f4af05c6"],["/2022/01/31/附件/第四封信/index.html","bfafc3160f1f3392423a975f9afd4c3c"],["/2022/04/06/附件/第五封信/index.html","35bd5cbfc884710490d279365612943f"],["/2022/10/23/番外/喜好篇/index.html","8c6e267e3bd74088b6a2db3afe16821a"],["/2022/10/23/番外/重要日期篇/index.html","082b74e5912f705e990b82c7dd670d96"],["/404.html","df14d87ece8d432674c6e9df88c7b3df"],["/404/index.html","bc0d1d5bccaa27300cc9354cbbf5e89b"],["/about/index.html","9e28481c908b28d18867b4247c6d4eed"],["/archives/2021/08/index.html","1216142843a4984024353ea3cecc78bc"],["/archives/2021/09/index.html","fcb08784819d61fb71e914fd9bfbce6d"],["/archives/2021/09/page/2/index.html","38727438fb1301131e09b3545604397f"],["/archives/2021/09/page/3/index.html","1bdfe36d21b918ed4271f67911a7fad7"],["/archives/2021/12/index.html","836d333f684d1cfaad459a5e06b05277"],["/archives/2021/index.html","44ea05bc3e6db5821778281a3d5ada1a"],["/archives/2021/page/2/index.html","3575acd1b159a7a8605e91733255de17"],["/archives/2021/page/3/index.html","4faab2254cb93f3c1bb165d2225c0026"],["/archives/2022/01/index.html","cb0891ba44d57f1b1dbec08fd11eaa3d"],["/archives/2022/04/index.html","ad2436f49494ac3b3e2a16c6232f9aa0"],["/archives/2022/10/index.html","7f2fe19af53b8430f29a67148e82d3d3"],["/archives/2022/index.html","2181c57c9d8014d36ec6615532544805"],["/archives/index.html","71af0beb7959c99675adbba88be9a2ca"],["/archives/page/2/index.html","667c08bb0ac50c0f77bed9c14ce271e5"],["/archives/page/3/index.html","a3b1c6fe3c7144646ff0dcc797797700"],["/archives/page/4/index.html","d2037e74f1f903dd6dd5912e2bd3d138"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","e4386ca5af85d2c7e4fe815656c3b856"],["/categories/前言/index.html","1bb6ac85ee70ab58dfa8ee8030c57080"],["/categories/番外/index.html","4a492584e23a529457764d42be989282"],["/categories/第一章-初识/index.html","f54f8ec56c9f0f54fe2f5fb3d1e3f95c"],["/categories/第三章-悸动/index.html","a9cf458eba348d3b0837d3d894eaf80c"],["/categories/第二章-情愫/index.html","9e8ed8318a10f23fc7a5abccc5fc1da1"],["/categories/第二章-情愫/page/2/index.html","2dbeb5d08ae3c95dcfa3e60f9c74b06a"],["/categories/草稿/index.html","d8c7de62d805566add561065f5dcfa09"],["/categories/附件/index.html","fd2006e14a6603aa2fb97813c57e4054"],["/contact/index.html","9daa403e549bb052460a7c9d815d67e7"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","cc6ee6271d8616d78a311f34d6f8950b"],["/index.html","6f0c468bfe7e34a351375f144f72e4c1"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","6cde7bf02adb4fd1ee51b95ba5096f14"],["/music/index.html","e4529d13797abd927ccd5ba202821eb5"],["/page/2/index.html","78f1e40f920cf4c34767cc0f82401c43"],["/page/3/index.html","8673610f6a0d0cd88e702398b93c689c"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/tags/index.html","092488ee5a5368b42ef256c1dba64d66"],["/tags/一百天/index.html","5746140d5f9f9048631210d8b9808583"],["/tags/信件/index.html","08af34d900d99b4673103086a3a040e4"],["/tags/喜好/index.html","6a87df22f1ad4dd34ff93158c18ef19c"],["/tags/想念/index.html","cbedfcacae6763bf64194d728d88f664"],["/tags/故事前文/index.html","9f4459e8d7182ca169ebd3cff46b29c2"],["/tags/春节/index.html","b0cd241bef73c97577f1698610df4318"],["/tags/生日/index.html","1a43c428c16056dd6ecade721851ced8"],["/tags/番外/index.html","54f6b4b46c6b06848f4d6039f7d60fef"],["/tags/第一章-初识/index.html","77a34ab02c80c573289d10b814b02393"],["/tags/第三章-悸动/index.html","9675ca7f281e112328e19afce4d156b9"],["/tags/第二章-情愫/index.html","aa32fbdfb9536e20bd404b21e9ea61a8"],["/tags/第二章-情愫/page/2/index.html","c3a35378175947421af95c7a740ca75b"],["/tags/草稿/index.html","5050926ac3051bcbab0b0a5e9d1426ed"],["/tags/跨年/index.html","246f3ba15d76bbde0f6ebca4b3479bc7"],["/喜好/index.html","02e3edbaed8f487e9d5ae136a8351b3b"],["/她和我的照片/index.html","a0688740a820ed35f828be6ec8ca057f"],["/测试/index.html","a3e858a5d98e0be899e5aa5068e964f8"],["/目录/index.html","123aefa087032b3b6f5a48dd5c8c9933"]];
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
