/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","90c481fb45e561979d2c90b3582a54b9"],["/2021/08/25/第一章初识/破冰大会/index.html","8c5eb686ebe6db249869edee36c3d297"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","d8cd3c7abf07cc7e709a99c092da9afe"],["/2021/09/04/第一章初识/开学/index.html","7c1de038f4589e56f88af02230fccdc8"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","1ef25f569b2417ea50776bd697c8eb25"],["/2021/09/10/第二章情愫/有效择偶权/index.html","f587fe6db24a5a5d60625d10b2e85d51"],["/2021/09/10/第二章情愫/本章概述/index.html","d6f538834f4dfe9a275467296de07972"],["/2021/09/10/第二章情愫/草稿/index.html","9fbddecfea9447e20dd7ff3e2eefa70a"],["/2021/09/10/第二章情愫/鱼塘/index.html","c93988c075b38040d22e572569acd524"],["/2021/09/10/草稿/草稿/index.html","1d87900247c761c9f006c2ce41aac17e"],["/2021/09/12/第二章情愫/死缠烂打/index.html","4f38475457615793dde979a1471fc714"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","033e270940fb80c0c7847f1c2886935a"],["/2021/09/15/第二章情愫/微信好友/index.html","6bed6c44bcbe691af971411ddb177391"],["/2021/09/17/第二章情愫/中秋月饼/index.html","fab6e65aabe7b346cfb90fe565961674"],["/2021/12/09/附件/第一封信/index.html","e79d072d20051b037fe9be9c875028f9"],["/2022/01/01/附件/第二封信/index.html","7afd2d1741c02567ecb12b8a4e412ca0"],["/2022/01/16/附件/第三封信/index.html","5c2b2001b885530e2bfde91022522cf1"],["/2022/01/31/附件/第四封信/index.html","f71b024c2154ae220a0d70f9855649fa"],["/2022/04/06/附件/第五封信/index.html","3a8326f06e8dacb3b07a5dbeb54ad0f8"],["/2022/10/23/番外/喜好篇/index.html","af8ea240dd495130f0ae61075108ee8a"],["/2022/10/23/番外/重要日期篇/index.html","5cecf85511961b0dcb068c6ff8ce3544"],["/404.html","7728cbc4f4401878f705f09e8642703f"],["/404/index.html","1026bad875750f0fbed5c3abf9ebb96f"],["/about/index.html","9ac5e2527cbc9785fc7bfd383c0939b8"],["/archives/2021/08/index.html","2668574ae49b5504f980a607239fb719"],["/archives/2021/09/index.html","59cbaf01df09245190c50c091d2cb74e"],["/archives/2021/09/page/2/index.html","210d2d66e41541da020a607402aae609"],["/archives/2021/12/index.html","9259448bc5fb066194fb254a72b381f5"],["/archives/2021/index.html","0462c4e0296b789c9e4201f65f01b44b"],["/archives/2021/page/2/index.html","0ef4e4fa12227fae64bfbe1908f713fd"],["/archives/2021/page/3/index.html","afa2e30a72dc1f57f18dd902b48e4c46"],["/archives/2022/01/index.html","003771f84c43b821427077f9a1817ab7"],["/archives/2022/04/index.html","7ba22d0ac79417d49a936762f8bf5be7"],["/archives/2022/10/index.html","f561feb2769f202184ee15a87d59afbf"],["/archives/2022/index.html","655a088907694c30cea08d7a3a1407a8"],["/archives/index.html","5a715b2520df8fcb2d65e7ab0349f81c"],["/archives/page/2/index.html","7404640b427e831d31118f034c829d53"],["/archives/page/3/index.html","de2d4b2d815d1291c22eb6d3dfbb2e95"],["/archives/page/4/index.html","b88c74965a561eadbacbb60b89f6f406"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","9f16fd74a83d6e07b73333dea3881dce"],["/categories/前言/index.html","6b6d4115ad631b11a59606a0624dca31"],["/categories/番外/index.html","5421a50b021bb00edf4ef4cae5f0806a"],["/categories/第一章-初识/index.html","79cdc9819951e0de25fa5f858db370b2"],["/categories/第二章-情愫/index.html","477688639653b292eb09471438213463"],["/categories/草稿/index.html","ab3f7cc732a94ff1f3fab64c55b18c9b"],["/categories/附件/index.html","1a8ae636d2e0361742822645485f4235"],["/comments/index.html","8cf3b81ed19a4db7d22d9fe3255540e7"],["/contact/index.html","eddaa6b4e85f602fb3e15a0cbb435e5f"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","9232b550f5270e1b93329481be862601"],["/index.html","7d1b70a70d2765564814457cbda2f8b3"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","f62b853576c42133db00fb10d9687d72"],["/music/index.html","efd6dc7f89505271c3bc3e178e79ca72"],["/page/2/index.html","1b5f155a6bb5036fbf792923c0df8f2f"],["/page/3/index.html","3d988979a967efd11ae2de595a634904"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/tags/index.html","41ab763d77cda69e2fff9c0d8fe30dcd"],["/tags/一百天/index.html","404cef1c2f5198901dda91b30384f4c2"],["/tags/信件/index.html","ee9505539cfb5599bd6a572145b1a369"],["/tags/喜好/index.html","f20e53711b641280d6c8769ef1dffc5a"],["/tags/想念/index.html","8c7c9de44311ab40bfeb4e1b1f07b802"],["/tags/故事前文/index.html","d510723b6ead9aa90a9d342d6ad558b6"],["/tags/春节/index.html","c2f8a8550ae48739880a599044b5ebb8"],["/tags/生日/index.html","53e01107abdb0fdaf07275d96b368aee"],["/tags/番外/index.html","a2fb9428227975afc3bb5eb6cb5a7ed2"],["/tags/第一章-初识/index.html","544767adeb581998d57fa8d16b04590e"],["/tags/第二章-情愫/index.html","9ef1ce3fe679bfd0317073ddcaf17b22"],["/tags/第二章-情愫/page/2/index.html","425243cc970e87bcba010abcd584ba18"],["/tags/草稿/index.html","6b51023d63de885d98ebece0e4b4303b"],["/tags/跨年/index.html","c8b43c7a98cbca86e4fdd30e0257aff2"],["/喜好/index.html","b1021a0f65b3382bdaf6aa5dc8083dad"],["/她和我的照片/index.html","5457973167dca932041ca7f0eef9bbb3"],["/测试/index.html","2357384cea0555e8bafaae46b002b0a0"],["/目录/index.html","927d0cba010e6e1b859326bb7d505c35"]];
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
