/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","b970a743f02da961ee210d689ac216b5"],["/2021/08/25/第一章初识/破冰大会/index.html","9f0184ecd28a503f36f9d7eb534ade16"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","4b6e5e40a436c318d49275da299b0882"],["/2021/09/04/第一章初识/开学/index.html","555a73dcc27290c12621405f6d5f3c5b"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","478a94804ebaf1f548398af3451b337a"],["/2021/09/10/第二章情愫/有效择偶权/index.html","56a374e99fbbd2978b2d264bab237178"],["/2021/09/10/第二章情愫/本章概述/index.html","8dfadbbe2f4417bd67b82fa84760d1eb"],["/2021/09/10/第二章情愫/鱼塘/index.html","28aeae7b7eb6e6d383e1c615ba504ccf"],["/2021/09/10/草稿/草稿/index.html","0cf60feb3a9aaefb91941eaf94deb64e"],["/2021/09/12/第二章情愫/死缠烂打/index.html","45b7fb96b3915a3c8452cc06ee27e205"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","76ce1821455c82dbaf61a66c594ab488"],["/2021/09/15/第二章情愫/微信好友/index.html","8060f214663e332d98d9762403ba05ee"],["/2021/09/17/第二章情愫/中秋月饼/index.html","90b265dc0c2b4fe27e12c657ffd199ce"],["/2021/09/17/第二章情愫/吃饭/index.html","bf55749c4092fa19dc74c77489b5ee6e"],["/2021/09/17/第二章情愫/官方认证CP/index.html","31954e9494d64b53db6102479b4fb66d"],["/2021/09/18/第二章情愫/续上火花/index.html","b9b2e8342f5e8cb63012e0a25665221a"],["/2021/09/19/第三章悸动/袒露心意/index.html","590dbcfd65d42fbb3f5e1d0de27ca469"],["/2021/12/09/附件/第一封信/index.html","054689d79ed4b5d8ca3c0656017947f5"],["/2022/01/01/附件/第二封信/index.html","bfdf0357c01f5fc42c38e96bf4f2940e"],["/2022/01/16/附件/第三封信/index.html","0988afda06d29e1606c30c0a58ca6666"],["/2022/01/31/附件/第四封信/index.html","509c0e5c39cc79cb7ec25f75b81e4860"],["/2022/04/06/附件/第五封信/index.html","b643c8536dddb024c22582ca7ef12801"],["/2022/10/23/番外/喜好篇/index.html","77a56c987f39758bee2f124ce6664736"],["/2022/10/23/番外/重要日期篇/index.html","fb5274838e5c1532744933446514b58e"],["/404.html","7be611283d31804b4aad548877230864"],["/404/index.html","36278ef83c60bb4f93367a8dc4f6fd73"],["/about/index.html","8cee8c4ffc8cb56c812f63ad9416a86c"],["/archives/2021/08/index.html","f38503b443a6d0683d95c155d292e354"],["/archives/2021/09/index.html","574ffcb0878dd2b02ca24ec0ac592387"],["/archives/2021/09/page/2/index.html","9bdcaa044e862b4aeeafd71878f774d4"],["/archives/2021/09/page/3/index.html","10a6a2512e491a380bddb5db2f4c8823"],["/archives/2021/12/index.html","d41ce8c40e0bac3c68badb65819941dc"],["/archives/2021/index.html","d39c0262e2bd8305b85d3bcff3df4a0b"],["/archives/2021/page/2/index.html","f443cf949b869b90c5cd369d3bfd486d"],["/archives/2021/page/3/index.html","a11534e7989ce7bcfd5045a231ea0474"],["/archives/2022/01/index.html","326aa6b37d8fdf3c600c9b158ac95abb"],["/archives/2022/04/index.html","cdbc885dd112156eec6f61211114b3f2"],["/archives/2022/10/index.html","4d7223b00193b1c155de4b161661e3a5"],["/archives/2022/index.html","dbaacbec2d4e4a91dd906eb4e24bc5aa"],["/archives/index.html","9daaf0e747ee6992022db8cec3cd2a08"],["/archives/page/2/index.html","c7c61e7b15d9b91554bcf9482ff808e4"],["/archives/page/3/index.html","5752de492d6233c4c111b3783b5add5c"],["/archives/page/4/index.html","2d43eb045ba055b984a7f31d102d48ea"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","10993e23bf9710e0de1f9fc21b51b2a4"],["/categories/前言/index.html","76adc7314831462f755bbc540c015560"],["/categories/番外/index.html","2b7c28d1b197cf4318336224004fe400"],["/categories/第一章-初识/index.html","b2cb10adbe48ff3895a6ccf8a999d6d9"],["/categories/第三章-悸动/index.html","4ca17c8d3acf58cf99fcb1efb878389f"],["/categories/第二章-情愫/index.html","3ce58ffac67f26763d953d081d1cea21"],["/categories/第二章-情愫/page/2/index.html","e96cb1d4d5331c836687775771691e2a"],["/categories/草稿/index.html","73f5e3b8985d50b7e93d79791aaa3b8b"],["/categories/附件/index.html","04fa0debd594426837cc675e19f9c70f"],["/contact/index.html","6419d866d8d59ad63a1ccd80dc68f92f"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","88fb38262461b378e73a5088a72af796"],["/index.html","a4b273d456a85ffc31d3737efc2f389b"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","a74486b099717696a9d6fc87186a59a9"],["/music/index.html","fdc39bb4d3bce0daf8d401bd7fe17f90"],["/page/2/index.html","35b622be72c529b7c103cc3048210600"],["/page/3/index.html","e6037c2fd9e2377aab66339d59b3f66e"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/tags/index.html","53d7623370a9fa941bb8f62010bea6e6"],["/tags/一百天/index.html","e97609d36e4be5a496a704656b71c90b"],["/tags/信件/index.html","5ced169b72279a8c644b9b2ad10b300e"],["/tags/喜好/index.html","42a037110753d6bc49a166f30b3c9f2f"],["/tags/想念/index.html","b8850a38e0c90bf88d6e182aea8a18d4"],["/tags/故事前文/index.html","687fb271a2317251278734a7e7b3cb60"],["/tags/春节/index.html","092cf1e0703e42cd039f0e65a90e25b3"],["/tags/生日/index.html","46d58ffc627d2c8880e9076426a1d871"],["/tags/番外/index.html","8e64a2c6219a09f84330117cc1723842"],["/tags/第一章-初识/index.html","1bf5194844a449a9a1ed3f6524854aaf"],["/tags/第三章-悸动/index.html","c10548858feb707b0a6af9614e0653d8"],["/tags/第二章-情愫/index.html","5de2611a4c82ca160708ce96781a4ac4"],["/tags/第二章-情愫/page/2/index.html","be97cb14ed8e28963af66b1383d059ed"],["/tags/草稿/index.html","bbe1ae793fdbf66fcb1227259680f6b9"],["/tags/跨年/index.html","0c3438d9de20f0219ce42324e1cd5602"],["/喜好/index.html","b2ac520271a280751a7218a1bb25c68c"],["/她和我的照片/index.html","7ead4fa486874d159ca209f4ea89e9fd"],["/测试/index.html","e73cc0e8901e6c4b1d798bd97790c1fa"],["/目录/index.html","47632e9021abb678e285a8fabcedce73"]];
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
