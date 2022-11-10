/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","a3cb800fba450077c1e371ae023e8b09"],["/2021/08/25/第一章初识/破冰大会/index.html","9c01e62524475e86579c53672edf03c1"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","e798ffe3129309e5ab9810624906e329"],["/2021/09/04/第一章初识/开学/index.html","ff3188414639720f38c745556f9c5f65"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","122f3c4366633d053597e148a570cc49"],["/2021/09/10/第二章情愫/有效择偶权/index.html","001c460532e36b474073a74ff3e1aa6f"],["/2021/09/10/第二章情愫/本章概述/index.html","cb82bc7448dfd96f1057a51358ac311e"],["/2021/09/10/第二章情愫/草稿/index.html","1fcf3bbc6d1733c7e7fb1b6b566be0c3"],["/2021/09/10/第二章情愫/鱼塘/index.html","b50e650f9c5e682bdc4b2e0ed722c17b"],["/2021/09/10/草稿/草稿/index.html","2b576520723c23950f44d6c02e89c8e4"],["/2021/09/12/第二章情愫/死缠烂打/index.html","e17851055d8edbaffe6f23049d0b96ba"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","a211417f8571e81d5cec1ec162deff53"],["/2021/09/15/第二章情愫/微信好友/index.html","2bc9a36682c94c03666f48d6ce1819a5"],["/2021/12/09/附件/第一封信/index.html","ee9df48c2db7057c33aa208e602855dc"],["/2022/01/01/附件/第二封信/index.html","572d0dd64b8a16cb7582265da432cb96"],["/2022/01/16/附件/第三封信/index.html","d29ac9f33fb734d4ced9468fc530f043"],["/2022/01/31/附件/第四封信/index.html","412245b46eaa37b351e5584b63aba7e2"],["/2022/04/06/附件/第五封信/index.html","d804e2366aac98572e87df515b9488a2"],["/2022/10/23/番外/喜好篇/index.html","9d7ac525fba463e921f0db995fc522e4"],["/2022/10/23/番外/重要日期篇/index.html","aa85caf2eda52eb5aa5fe43ec999703f"],["/404.html","201c6d9a4169ac748e7b5f94790e1da0"],["/404/index.html","fd955ba169266a2ea14891b434c9a1d1"],["/about/index.html","efee01a17198087b898dc0b80e8d37bd"],["/archives/2021/08/index.html","9b13821d872e453e3311fdcceaf8d13f"],["/archives/2021/09/index.html","f1611032a1fc9d137515e99dac39c4ab"],["/archives/2021/09/page/2/index.html","eee26558e0d8d63e05975b9a570d6009"],["/archives/2021/12/index.html","0ca5333782ecf85d9b5c0a98b1c0e1a1"],["/archives/2021/index.html","a51458b93945a7dd9ef8168cad164741"],["/archives/2021/page/2/index.html","e6a78ab5364aec463e8c7a6ff6c43bb5"],["/archives/2021/page/3/index.html","c04ffb50bd61af18e651253b2978cea2"],["/archives/2022/01/index.html","3ff37cfed96333974490555bbad49144"],["/archives/2022/04/index.html","63158f150d599fb6e4fa236e1deb0c87"],["/archives/2022/10/index.html","156f071f80de1cc36642e838054ac4dd"],["/archives/2022/index.html","e0e101b5c677c66d5b44589a672fca37"],["/archives/index.html","a3d3ef2ee64b686f097ad527e154a991"],["/archives/page/2/index.html","f06c8c15c2c0e1320451667bdd7d3432"],["/archives/page/3/index.html","d374416b45984f01947bcd08b980ba15"],["/archives/page/4/index.html","4318309ba29da9d908c46262ba0d280a"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","a33f50bfc5ede2ba1e938b1763d1b259"],["/categories/前言/index.html","5c02f2d74d5edcafa0a9a60f0b716e7b"],["/categories/番外/index.html","716806bc34e99c05461327ad0e922056"],["/categories/第一章-初识/index.html","6da92438dc05f632230befc7a802997e"],["/categories/第二章-情愫/index.html","e9a34b69d4e06cc59f96483e39b937e9"],["/categories/草稿/index.html","d3266cc5077b61f6fa7eb47677bd857e"],["/categories/附件/index.html","8e32baf9ba581977715e424d3fa7cd41"],["/comments/index.html","7584a0f327ef8ea60c4187deb188645d"],["/contact/index.html","0a803a224fbe5a251f3e5232e1d7072c"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","200c1a2cf24505e7e617914f99a8453d"],["/index.html","8046acbde61fc6c38cece3b48017014c"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","c7471fbda10033bd3a21c6faafcb3a63"],["/music/index.html","339b1f4d22f346348267e4fd308e8539"],["/page/2/index.html","3fec19f9444b70ed473918f5467b2b3e"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/tags/index.html","a64adc56a4b4f6cb38844d1628437e80"],["/tags/一百天/index.html","caa3537c33f41ae1b6cbfb994180b9df"],["/tags/信件/index.html","4bd2adc318ec02dfccdc5ab28fdae4ad"],["/tags/喜好/index.html","d7733df0b203b0347aef8403e0724725"],["/tags/想念/index.html","5bd6474b3d55cb7a9ede70864a80eaeb"],["/tags/故事前文/index.html","7529208442eb0268d75d296bbb87d939"],["/tags/春节/index.html","93397f18dfdd7a5e8a200eac16ee6d38"],["/tags/生日/index.html","1b7ae08170f00fcd8224893cbfee4f12"],["/tags/番外/index.html","2f74e6957f73a4951262241807f0a2e6"],["/tags/第一章-初识/index.html","877f1b32cca6cd7389f8db87ef616931"],["/tags/第二章-情愫/index.html","e476fab22a7a51c0c1a106d3646d651a"],["/tags/草稿/index.html","ccf884f5c68c19671b35c086b2db9e58"],["/tags/跨年/index.html","8a5fa70b0a17ac9748e9cfa8f73865b2"],["/喜好/index.html","955e6e1d460e3631c984b63193775f7b"],["/她和我的照片/index.html","f295c3b618fec211df04554d6fa7c668"],["/测试/index.html","9ac7b950809e882a822e8a11d5782711"],["/目录/index.html","01fdc2d46381ba9fdc62a9edab53203b"]];
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
