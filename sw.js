/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","99a5dedc11845c319ae57af138aaceab"],["/2021/08/25/第一章初识/破冰大会/index.html","33bc81e98e49c0cfb7ab7215aa010a73"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","580c0daf8d55bf214d762d79a07702df"],["/2021/09/04/第一章初识/开学/index.html","88b68a1f16c2682d38ff3e8b9cd5a396"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","4452497e08146d03bba36cebdfe9a675"],["/2021/09/10/第二章情愫/有效择偶权/index.html","ba8e88a997d08981ed11b1a2c15a5d50"],["/2021/09/10/第二章情愫/本章概述/index.html","08a10c8e5ea5c6a179cb32f7caaa1b69"],["/2021/09/10/第二章情愫/鱼塘/index.html","a05e73fbee500244d460d23d6090c322"],["/2021/09/10/草稿/草稿/index.html","b272e260ed59bdbdec958607e372b8d6"],["/2021/09/12/第二章情愫/死缠烂打/index.html","2955c5169e165bd9a75f731f03d44582"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","22bebfc53aa93fbb565b7cbca790bdc0"],["/2021/09/15/第二章情愫/微信好友/index.html","c1f16bbb054fd223edfe7e37ed21a2e3"],["/2021/09/17/第二章情愫/中秋月饼/index.html","9553eb318b751e239e89afd409ebea95"],["/2021/09/17/第二章情愫/吃饭/index.html","5800d70ce2bba8b1be606e4c211744c1"],["/2021/09/17/第二章情愫/官方认证CP/index.html","c8509f4059d13d24d9d4e3798cfb2caf"],["/2021/09/18/第二章情愫/续上火花/index.html","6f9983cf4f30b3571ae3a549c2042402"],["/2021/09/19/第三章悸动/袒露心意/index.html","c52faba8b64f1b838dfa4d339ac493e0"],["/2021/12/09/附件/第一封信/index.html","4afe2bb8f6b680e6e893347e231ff9ba"],["/2022/01/01/附件/第二封信/index.html","fa81e701fa9ab9395c7ba70f63647d74"],["/2022/01/16/附件/第三封信/index.html","fc82fac715220fe478823c3337258065"],["/2022/01/31/附件/第四封信/index.html","78444a3bca2db762dbe6f025e40bb2df"],["/2022/04/06/附件/第五封信/index.html","3a0072894fa47e8838cc44ba62b593fb"],["/2022/10/23/番外/喜好篇/index.html","4a235e888d23a4bacefe4ad8b4a1eced"],["/2022/10/23/番外/重要日期篇/index.html","a038edeaf615683a4baa16c8cded28b2"],["/404.html","b318791df54abdcc08059c0b0f2d9a34"],["/404/index.html","8fa231247506e4289e9a4053ef74e68f"],["/about/index.html","c741080be776ab0d2baae0e21c9ceb8b"],["/archives/2021/08/index.html","3b47a1895e166ffde6eb994dff3cf702"],["/archives/2021/09/index.html","e1169a0ef91a1efc607beba579ddbf7a"],["/archives/2021/09/page/2/index.html","42c124e7042b24df95299e19537a9793"],["/archives/2021/09/page/3/index.html","18740015650838c1fca04d095e6f5295"],["/archives/2021/12/index.html","0d009b96a4ac68abf32721b390708d71"],["/archives/2021/index.html","3d8084058f90931f3814a8dfcd160fb3"],["/archives/2021/page/2/index.html","5e9c9a7c8a8ab15670ca1c0b25a156a9"],["/archives/2021/page/3/index.html","2ae9a0203ecf406ffbcb0c99ccdd3ac9"],["/archives/2022/01/index.html","3e9e9de562d9874dee9731962981ed7d"],["/archives/2022/04/index.html","35e38cb76851f56ea284f7139fa99492"],["/archives/2022/10/index.html","2ede9513ab4015c04141472c5f3da432"],["/archives/2022/index.html","130400dc4a90c9d20d2c18ffe4077d42"],["/archives/index.html","f9d3485d317dd869a7c00e5684219a09"],["/archives/page/2/index.html","1a447e72408513f0d504694ea53d9d9c"],["/archives/page/3/index.html","bafa14b6bb64ca6423046702c9ff6d6e"],["/archives/page/4/index.html","84bc4c0a7ac67130d66568c51c30179b"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","cebdeb1af40c01ceda73726a7b365d87"],["/categories/前言/index.html","6d10f0afce86f4ea36f5484300ea84b1"],["/categories/番外/index.html","d6711ed97c932770de20d9f18ea00555"],["/categories/第一章-初识/index.html","629c44e515f19dde31d6ee7a176983a5"],["/categories/第三章-悸动/index.html","ba9b4978670473e9148f2b98e233f6fe"],["/categories/第二章-情愫/index.html","3bb3990cdb2e3291ced715f1f5e1cbb2"],["/categories/第二章-情愫/page/2/index.html","828c0a78bcc5090acba219901a5755ac"],["/categories/草稿/index.html","4db01fef0eb41c2b247e7ac6d78362a9"],["/categories/附件/index.html","b0c9376f5ee8263673113d86eff63fda"],["/contact/index.html","e69090f5fa323e04d4809ae7edddfee3"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","399f94a071803c56fa6978213f030591"],["/index.html","fefe0ef8c765637ec272389d927e0fa8"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","3320608427c730d41d7382ddc62cd96b"],["/music/index.html","9f5455cfd36b608ab2ab84c5bf8f7321"],["/page/2/index.html","bcf587b94f3a41795b7ce4affc7af3b0"],["/page/3/index.html","f2b3728e10ea9bf9bb4b717d2e2e21f5"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","1b43cb20a07611088444708e0f993eab"],["/tags/index.html","982b6dc402454adaf72774fccb1c4d6d"],["/tags/一百天/index.html","d4725669dfe9b050d856e51254fa3625"],["/tags/信件/index.html","88281810acdcc7b2ef5d082d6e824cf5"],["/tags/喜好/index.html","0db3bfc0f26ef02fca3efcf87de5b703"],["/tags/想念/index.html","e881a75b104ae9dd1ff2971166cc3ed3"],["/tags/故事前文/index.html","93e2ba40c0a279a466d6f25e33aa6d39"],["/tags/春节/index.html","6be684fd9ec46a12e642e64e9d8958b3"],["/tags/生日/index.html","e220bdcba26aef05b029a88d8992925e"],["/tags/番外/index.html","a30c0eaf8b8f259dbc6733f359a5cc0b"],["/tags/第一章-初识/index.html","3553cdbcc599154e8e487326ff46d9d7"],["/tags/第三章-悸动/index.html","e411c3d3c3a1c3d68cc1c5b90fe82b24"],["/tags/第二章-情愫/index.html","76ddfc314850add33e9ad3cb4178be82"],["/tags/第二章-情愫/page/2/index.html","00fa1d54e87b985f1bb2f21fb7210432"],["/tags/草稿/index.html","d9966f73496bd95c5f15370b6fd37a4b"],["/tags/跨年/index.html","e64945ad92062007261dd6f8cc15ba37"],["/喜好/index.html","c220da0cc4bc57da89dc080796e5ebe8"],["/她和我的照片/index.html","60872d4010e26df65c733a75b1e8bb89"],["/测试/index.html","dfa7f9e8d755ba3c9406a1ed027371c3"],["/目录/index.html","f417b330d1264b864aad39915c53520c"]];
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
