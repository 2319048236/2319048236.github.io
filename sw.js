/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","21914254063c637fb27b45fd915ac451"],["/2021/08/25/第一章初识/破冰大会/index.html","6909ae5fb58361c67a37f2d31333e299"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","bea8d9a8aac2d287d03b049433b30488"],["/2021/09/04/第一章初识/开学/index.html","432f48a40b12db0f62aa05854a7a5649"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","dd1f7d3fb8cc4c063411abe10884170f"],["/2021/09/10/第二章情愫/有效择偶权/index.html","193559bab5389426c48f42cc78df98c0"],["/2021/09/10/第二章情愫/本章概述/index.html","21b64e92a3265925f6235e588b5e6301"],["/2021/09/10/第二章情愫/草稿/index.html","c3de997604dbad7873c779b0d3df2c61"],["/2021/09/10/第二章情愫/鱼塘/index.html","d3849f5c9fd2d377ae66966bbb84683f"],["/2021/09/10/草稿/草稿/index.html","3acd63678cf6579e61187c293133e482"],["/2021/09/12/第二章情愫/死缠烂打/index.html","7fdd443a64fdc7bcf6c7c9ae23557e49"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","49fe95c032137df93003bc4e3d0fb370"],["/2021/09/15/第二章情愫/微信好友/index.html","b2d5ec72b5c2162bfa6965973be8925b"],["/2021/09/17/第二章情愫/中秋月饼/index.html","7c29149163132da31a1ce71d95e9154f"],["/2021/12/09/附件/第一封信/index.html","27a5ef4f9d5579cfa4d97509f18b6ca3"],["/2022/01/01/附件/第二封信/index.html","739e279d4dd3c7cac599af22bdc4e3ba"],["/2022/01/16/附件/第三封信/index.html","125986f73de7379f4044991958c0ca8a"],["/2022/01/31/附件/第四封信/index.html","137eae372c8f3d789e2cfbb13e91e37a"],["/2022/04/06/附件/第五封信/index.html","490a60527adc8446d17ddcf7a0e21b8e"],["/2022/10/23/番外/喜好篇/index.html","5ecf95c7f7a96a8abba08b4be7075d6e"],["/2022/10/23/番外/重要日期篇/index.html","91cd0be6a5d3e06c0509a1043d03a37d"],["/404.html","109ec0225e9bef4b8a1b0a65a7e5e686"],["/404/index.html","cfc093948b29d4bcea1d7ff5305d25f9"],["/about/index.html","ad86c862a76d22c62a467f7b4f9d6df8"],["/archives/2021/08/index.html","c3599d19893c93b5b839f616680ec7dd"],["/archives/2021/09/index.html","10e7dfbc790f552bbfdc75d9eec5ec20"],["/archives/2021/09/page/2/index.html","6cb8139a52df98c51668b3892bea4170"],["/archives/2021/12/index.html","5e21d9fa4fca474cedf68288e1242f08"],["/archives/2021/index.html","cafb5468c31c8461627ca152a04288da"],["/archives/2021/page/2/index.html","34d0a5efe26c6f5053d8a519559be789"],["/archives/2021/page/3/index.html","f49e86427662beeacdeaf0542b49c7b3"],["/archives/2022/01/index.html","5fabc7831c27ba0c8fb1e0ebbbcef242"],["/archives/2022/04/index.html","d20c54e21d261456d7058302469cecf2"],["/archives/2022/10/index.html","3bb50e27262d0a538c65c44b7574360f"],["/archives/2022/index.html","8599fa90cbbe86f2c5bd4888ab28cd54"],["/archives/index.html","2de4859e26716314611f1e15ab04f9ee"],["/archives/page/2/index.html","e35338334797eb00f326eff2949c47b0"],["/archives/page/3/index.html","9f53c543cedc111d77d766e595459598"],["/archives/page/4/index.html","50b61af53e4ec4f2e7525d4a5bf94a42"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","88120863293cfa16722c4d812d19f38b"],["/categories/前言/index.html","455228a622aa01048c86f00a743045ec"],["/categories/番外/index.html","7e7198491bce38ad8574aa688b0023fc"],["/categories/第一章-初识/index.html","30c13089c350a2659e53f6539906544b"],["/categories/第二章-情愫/index.html","50bb388cb918597244b4c03e204c775d"],["/categories/草稿/index.html","c0d0a634d7ef8c46e8e3a9383a1a9897"],["/categories/附件/index.html","8a7b9577659f2035dd9c06f6ab0300a3"],["/comments/index.html","98d056f3148e3040911b44808c0ed9c4"],["/contact/index.html","2cfd924150e1c67a5c939c931bca8934"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","945506c6bc95aca05102c76f83313d54"],["/index.html","21b226ea42a75953918f385b53ae128c"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","767f51956a442984096a580bd76ce334"],["/music/index.html","53082c5c53e6335e3dbbecddf517d011"],["/page/2/index.html","27efe6828272c8170777ec15cda7e373"],["/page/3/index.html","bba6d32577445ac1e2a3bad3148ae46d"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","d71e79ae2b1c274ce6224d9bc731d6e1"],["/tags/index.html","364cfc5319f34a8e46bbbd9105d2be44"],["/tags/一百天/index.html","b4c390e86ab0bc30c3c8cfc6493d8628"],["/tags/信件/index.html","0060bbcf94d98023d087c0ecbb89b9d0"],["/tags/喜好/index.html","83328127fd2750338ac87e9aec549f16"],["/tags/想念/index.html","958ba49a9d7efa54ac2b146de479fde0"],["/tags/故事前文/index.html","7fb0d796e194910eed56a5edaab42bf4"],["/tags/春节/index.html","d33b1db9f7f221b149c192a805fa18a3"],["/tags/生日/index.html","efd1f2c06abf5f2a4317eb2ae8e62263"],["/tags/番外/index.html","b40f4afef88120335c3d6ea0998a30d9"],["/tags/第一章-初识/index.html","26a6919208f1dba2a30ba26e152b0e9d"],["/tags/第二章-情愫/index.html","d98e8b1cc76de53cb15389dd72bbe97b"],["/tags/第二章-情愫/page/2/index.html","70cc50f9fb0414cc78e83a6078f61c91"],["/tags/草稿/index.html","1b368614b4b1858efaf2556d2a9cbbd6"],["/tags/跨年/index.html","c47a76262f500abfd9e072412dc9db2d"],["/喜好/index.html","f994871961d583c4f9c4ebbeb27a991c"],["/她和我的照片/index.html","b1c5e118658a71c77ad6efa6d6655c2f"],["/测试/index.html","4b29a9d3062325d658c3d0afc5525c6f"],["/目录/index.html","1bc74e548f5f901b3354af17a4451357"]];
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
