/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","9447c740d0f02dc8964973d9321777c6"],["/2021/08/25/第一章初识/破冰大会/index.html","9cbcc817230c8602ef8981cf39c8e931"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","7f09e235c2c50d35b5c575fa1dc9ef09"],["/2021/09/04/第一章初识/开学/index.html","711f6ff91cae80096151d5cc80d29b95"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","17b0c1b4e6a6e15347762965dea47cfe"],["/2021/09/10/第二章情愫/有效择偶权/index.html","2564b0499f9c85946de78c2f7ca7475e"],["/2021/09/10/第二章情愫/本章概述/index.html","2bfda99f345bd3ce8f9ade75407eb4b7"],["/2021/09/10/第二章情愫/草稿/index.html","eeef445efcace31b8b77a0ba2e528b70"],["/2021/09/10/第二章情愫/鱼塘/index.html","870d40b184f34c4a9dd3c241830674a6"],["/2021/09/10/草稿/草稿/index.html","66c33c6eca81328da5be139b932a4033"],["/2021/09/12/第二章情愫/死缠烂打/index.html","667e32d40b62967bc653aff26f72002e"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","cafec8c5fee8936749377588d4fde4d6"],["/2021/09/15/第二章情愫/微信好友/index.html","d52bbab738e9a715842b426b1672def0"],["/2021/12/09/附件/第一封信/index.html","050f5ffc9201fd21e9a0d418c4520463"],["/2022/01/01/附件/第二封信/index.html","4ce17c5b4324ba741943e54219044a73"],["/2022/01/16/附件/第三封信/index.html","8c555c9207793ccf54039fe607f1e5f4"],["/2022/01/31/附件/第四封信/index.html","243b36ba4f04f332e38259261a749048"],["/2022/04/06/附件/第五封信/index.html","9e34163e95171aa133ecd78f2bfe2538"],["/2022/10/23/番外/喜好篇/index.html","c8ffe114c951a39bbe4dd605d7312e04"],["/2022/10/23/番外/重要日期篇/index.html","c20b977bf8d5853b3ccfa72917ed9e79"],["/404.html","c96f7498277f9d070ee4ef698c6b480f"],["/404/index.html","85b2f75d226eb529d18d0b65df78cbb5"],["/about/index.html","13310d51226f89a1a3d7b977a363a97a"],["/archives/2021/08/index.html","fa3d7e6936f1c059796b9b74fce03d0d"],["/archives/2021/09/index.html","5746a7058fc249eda0bdf9ce5d79ea65"],["/archives/2021/09/page/2/index.html","957579b891bb1838b48906c59d8abb5e"],["/archives/2021/12/index.html","4f815df9059722bfa4f824ca499693e8"],["/archives/2021/index.html","8415f2527c58552af8842097fd86ed93"],["/archives/2021/page/2/index.html","1892f1e3b22ea19926c06926dcd470db"],["/archives/2021/page/3/index.html","2dc2df033269a3cb08f1b52cd5844419"],["/archives/2022/01/index.html","03ff953e2d187e87de91a90f6606b752"],["/archives/2022/04/index.html","13bec49358f7c6eb378084c74ddd180a"],["/archives/2022/10/index.html","013ab29cee3cf716d4bb43781eb38f1c"],["/archives/2022/index.html","cf1fd706f35921ca9b7286ba56949ef5"],["/archives/index.html","0e153012e191b52aeb68721946e316d4"],["/archives/page/2/index.html","e6a8e7ca3fb191ed1d688e0e1a96b421"],["/archives/page/3/index.html","10ed6a739c34803753f1c7ea45bf50a4"],["/archives/page/4/index.html","cceee08e5abd1b3da59c1712f39e590a"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","57019ad0d163f07278cd6eb16cbadfdb"],["/categories/前言/index.html","5517b04b2f8b614028071b9a55d5db43"],["/categories/番外/index.html","2a8e23b97b621b68ad60224d0f015967"],["/categories/第一章-初识/index.html","044b8ddbc766dafcc45d041f2a1f1a35"],["/categories/第二章-情愫/index.html","11b72531ed581abb7cbfcc4887049ea4"],["/categories/草稿/index.html","f594fda0e98c4903202c2ae2a43c1197"],["/categories/附件/index.html","400a6764faf67ce61aee98a974894b1e"],["/comments/index.html","2b48cac7b01bedc87ab2d8cf58e1cb50"],["/contact/index.html","50f59c4d24e2e0bc14f8d13a9e1c9297"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","06fd3e2404455775231ee16d05663f45"],["/index.html","30b58cb44ef3784930126dbbea8e5db7"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","6b10b3ea981ce41c1deaa02e5209dd37"],["/music/index.html","f3f59e4143533db00d8658cef546cb13"],["/page/2/index.html","3724d1d5e58e4f97f921022b601d8d95"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","795630ac8c2b4d5a4a2a88ef9977bea0"],["/tags/index.html","2119ddb17fabf287dbeb0ff1bc28b859"],["/tags/一百天/index.html","0f299b1c97a93ea33ae72f2f1e08804f"],["/tags/信件/index.html","36eb337115a3e2b35740a76cff7a48d7"],["/tags/喜好/index.html","b15bd7860a6852373395f673a8f8b11e"],["/tags/想念/index.html","b1b53bdcc8a9fe8b84b7a383ecad3534"],["/tags/故事前文/index.html","5101e24a43be6d8f365753584e5d0919"],["/tags/春节/index.html","61018636e472ceef4975f083f9a90fba"],["/tags/生日/index.html","dea6bb7d44d90f5a2958e2272aab9b8d"],["/tags/番外/index.html","7d341766a0a8effa5dda7f24f043b0a5"],["/tags/第一章-初识/index.html","306fd5702a330b1df7515ae1995890d3"],["/tags/第二章-情愫/index.html","4b6e2f0d10d9186a69846c7d828b3805"],["/tags/草稿/index.html","3049e07c7496ee8ba252c2415ae9cabe"],["/tags/跨年/index.html","ed8d7b24e69a9bc9a5bcdf8d9d6aee69"],["/喜好/index.html","77d03301d474179e9d1fbbff7b7b85b1"],["/她和我的照片/index.html","e7432b447668276cdd149193313b096d"],["/测试/index.html","1ef5e98f639d8d4dca99f2465f121c4a"],["/目录/index.html","0d75171499723690e9b14c9a28883d88"]];
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
