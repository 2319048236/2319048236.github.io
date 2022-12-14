/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","cc4a05d285e0223d608d2ec9ead46361"],["/2021/08/25/第一章初识/破冰大会/index.html","816734c236d0c23f3e571ef234a45664"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","35de70a262b7bf9ec7a6c1d1b85d207c"],["/2021/09/04/第一章初识/开学/index.html","8d9f84aea11b480a0b66ef1239704618"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","78896794e34ca3015456a957dcdbf590"],["/2021/09/10/第二章情愫/有效择偶权/index.html","f083459d53b769a200f8a5c5d2689f76"],["/2021/09/10/第二章情愫/本章概述/index.html","c1ea66115c0d34f9915a8b699fae0c24"],["/2021/09/10/第二章情愫/鱼塘/index.html","78389688744f0e3ace164a3f180f2acf"],["/2021/09/10/草稿/草稿/index.html","99fd978042f4301d8ef191406497987b"],["/2021/09/12/第二章情愫/死缠烂打/index.html","2a0a90f8d6b92bcb3638d506828d0893"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","33c708efa77c6a72c8d36dba02082074"],["/2021/09/15/第二章情愫/微信好友/index.html","3f39eb400df72f1da5d67ef5923eed20"],["/2021/09/17/第二章情愫/中秋月饼/index.html","2273d587e4b86130429120c8eaf118f6"],["/2021/09/17/第二章情愫/吃饭/index.html","d25e31ec7c945913dca8fb24199a5982"],["/2021/09/17/第二章情愫/官方认证CP/index.html","5605ae8ff77c60c2127b07ecdf462dff"],["/2021/09/18/第二章情愫/续上火花/index.html","0603cbc912ea5150a15ac540812551c9"],["/2021/09/19/第三章悸动/袒露心意/index.html","ac7f36c9b8b7bc06cc25f5b86a790dff"],["/2021/12/09/附件/第一封信/index.html","1663dfb7785646bc97f3199f5208e178"],["/2022/01/01/附件/第二封信/index.html","5fe554927211be10d9d91e78174f53e7"],["/2022/01/16/附件/第三封信/index.html","df1c76ff0b3d9906fd2719aa47f78227"],["/2022/01/31/附件/第四封信/index.html","3cab9d5042afd270857094e20ac67f27"],["/2022/04/06/附件/第五封信/index.html","54fc5a9be3c116aad71fb392af1ef134"],["/2022/10/23/番外/喜好篇/index.html","142a2b5ed201ffd89d53537bd4e7f022"],["/2022/10/23/番外/重要日期篇/index.html","d67d3ecabe3b23c56a8d397919133914"],["/404.html","b4951c63a64ede1ac44cafbe81aefd3a"],["/404/index.html","e43554dbca527fe15a90b62e96a5d0d3"],["/about/index.html","e73d95c88b6e449364e764cde4fbd341"],["/archives/2021/08/index.html","f6a488b999890b4ea9d5f50d807acd98"],["/archives/2021/09/index.html","76c9799c7dbe5c05d16d862641d46457"],["/archives/2021/09/page/2/index.html","8a3a6c5846adfa0f547aa3b91b4ed0a2"],["/archives/2021/09/page/3/index.html","9aac61e5d1c9a2a350cba1cfab87f5a7"],["/archives/2021/12/index.html","9d34beb870cc8635da5ae77e14b85303"],["/archives/2021/index.html","3529f118b53ce6a09128264fdfc52e1f"],["/archives/2021/page/2/index.html","8d1ca10c5302b12735ed27644515fb17"],["/archives/2021/page/3/index.html","9b9d81a2b1886604aed67ba057eda8a3"],["/archives/2022/01/index.html","b36cb76cbfc456d4da9a1ab8a202e48c"],["/archives/2022/04/index.html","eb847e453d7ac5e0e3696cb16a62aba5"],["/archives/2022/10/index.html","d5b0aaf102d84dfeb3eee194d0666bed"],["/archives/2022/index.html","a55e7bd8f62c3441bef6e1da8d744432"],["/archives/index.html","6c4e983212a6b403fd3d24ce22ad6a29"],["/archives/page/2/index.html","2f14ee91810344f473cc48a0e4e33697"],["/archives/page/3/index.html","5b8418e0d30d0462a862b946c0d84658"],["/archives/page/4/index.html","b4a8eaa6d78359f6546e2a7517ae7506"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","13206f8d82a7484672a9b4d2ae9e54ed"],["/categories/前言/index.html","caccf1d549633d9784d6466118d484d5"],["/categories/番外/index.html","5d7e9616d1a6497505986c41a73b8459"],["/categories/第一章-初识/index.html","5be5901611eb293f7302cfa9f9bea8d8"],["/categories/第三章-悸动/index.html","3637ca8d8516343a0a1a472748aa7e13"],["/categories/第二章-情愫/index.html","f5ab6fef81017599a746a16c5b655d0a"],["/categories/第二章-情愫/page/2/index.html","a1a35542dd66894d73a19600b4b903a3"],["/categories/草稿/index.html","2411c29fb9cc70d66a09709d1dae0ce4"],["/categories/附件/index.html","d9e17943cfa65aaaf5da3f0e1ce6ccf5"],["/contact/index.html","53d0c9b550d0b7b4c9bfc49f0f19fdb9"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","1fdc6cba8c95cef2b2f7710eb464cce3"],["/index.html","3b0a0285cbbd119669e4bea52fa50885"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","36b37e63c498916ce5d38b4deff20f4c"],["/music/index.html","b591c7b03f27eda4e746aaf6df8fbf5f"],["/page/2/index.html","c99ff0d8c39a09a4a95c19f02a4ab381"],["/page/3/index.html","4b9032f3acec0cf6f7d8006afc3f368a"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","7ae6006dc13f9bf08bb7b04bf2102077"],["/tags/index.html","8ad3588ef760e9e4ca11b173933dd55a"],["/tags/一百天/index.html","ec2229fe1408b9f67b2cab4f11cf50a2"],["/tags/信件/index.html","5466a68a19db177fe61e28d4d2d6fb3f"],["/tags/喜好/index.html","f10c881ebb504f1d4af0d8b497423b3e"],["/tags/想念/index.html","29bbe306b0b02f0c11fba3622b7f6a1c"],["/tags/故事前文/index.html","2b2ea84e17f5043afdddf55b8eb1a71d"],["/tags/春节/index.html","d1d7d08ee4bcc561db283c84d3334a27"],["/tags/生日/index.html","98155c76893e4570c0c921db2a23bc34"],["/tags/番外/index.html","51351e482e12f5d9348431c8b9a54443"],["/tags/第一章-初识/index.html","1de0c49f0c736c61d4621844e45ffd78"],["/tags/第三章-悸动/index.html","ab1dac6bd89fd3a880c0059fcc376750"],["/tags/第二章-情愫/index.html","f97e12b4903036bfdbb4e69f1d23785d"],["/tags/第二章-情愫/page/2/index.html","a88ccd512087d4aafa8d514ec86299ea"],["/tags/草稿/index.html","a381e8b55ece9d6f47cc250fb1c631e5"],["/tags/跨年/index.html","7b0803b47cf3923a2c4430d17d261bf8"],["/喜好/index.html","a0fe4e4cdd760d9f0f72d3077dcbf296"],["/她和我的照片/index.html","f36eed101ee89e966ed4d17e92e9700b"],["/测试/index.html","07bf8fb5e7e5afa0b75da28a0850d79d"],["/目录/index.html","9647d6310dc9b1aee177d181e0ed99c0"]];
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
