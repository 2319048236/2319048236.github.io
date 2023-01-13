/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","48f27acc3d37e297a65e71e999bd45a3"],["/2021/08/25/第一章初识/破冰大会/index.html","dd44faf86be7040db61e667a4c912ea9"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","48c1a6f9376c8800f7ee8d37904fbdd4"],["/2021/09/04/第一章初识/开学/index.html","c406bc25454f44aec5a435ecf175924d"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","38df3f13dad3273bb6e956e30d9b7f0c"],["/2021/09/10/第二章情愫/有效择偶权/index.html","c2ca9a8ce4bfe6820e0fceb13454700e"],["/2021/09/10/第二章情愫/本章概述/index.html","08d990f57932fcf82adae3cf96297ac3"],["/2021/09/10/第二章情愫/鱼塘/index.html","7e9187f4d7847c2c97a13e80248548d1"],["/2021/09/10/草稿/草稿/index.html","5803ffb9e3f9c81523623f8f607e6c3a"],["/2021/09/12/第二章情愫/死缠烂打/index.html","4c7b24d72aac370a53c672ebac64438a"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","68560c8cc3a2dcb221a0e39172c39805"],["/2021/09/15/第二章情愫/微信好友/index.html","aa0d66e6fa867e1f9b0171e27e8f1870"],["/2021/09/17/第二章情愫/中秋月饼/index.html","52797ca97b24b930bdacefbcc996a69f"],["/2021/09/17/第二章情愫/吃饭/index.html","b1e54ed69f09d537b0ec37bb3aa25010"],["/2021/09/17/第二章情愫/官方认证CP/index.html","32d83853e8ae2a000ecbf56bbd15c9d5"],["/2021/09/18/第二章情愫/续上火花/index.html","a4fba80b8df647c1c1dca4b8b324d58c"],["/2021/09/20/第三章悸动/袒露心意/index.html","d4cda8c3fa20db01c4aaaa1e56904b08"],["/2021/09/20/第四章朦胧的爱意/草稿/index.html","6e17a264552644b739a76fa93c0114b5"],["/2021/09/21/第三章悸动/中秋快乐/index.html","6d060edf6f0ced860e94a15e564ecbf6"],["/2021/09/23/第三章悸动/特别关心/index.html","6e35d35b2cf9de781230b1bddbb6e9ae"],["/2021/09/24/第三章悸动/推课表时间/index.html","2fcc31c4e164caee02259c8c6813568d"],["/2021/09/25/第三章悸动/开会的小插曲/index.html","3fb8b057a3ffd78ea439a964e03144c4"],["/2021/09/26/第三章悸动/溺水/index.html","33515ecc0fe537af09a3b99bc3451207"],["/2021/09/27/第三章悸动/约定/index.html","8b3e9889af80ae8468d1160a43e5fe04"],["/2021/10/03/第三章悸动/女闺蜜/index.html","5305c38a6aaa2a9e350235babe80ef15"],["/2021/10/05/第三章悸动/持之以恒/index.html","57cae2c59f95fb5a1e249ff0365575a9"],["/2021/10/06/第三章悸动/想看雪/index.html","3c98eccdaf369e66e276cb3b80ba64c4"],["/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","95fc62da818b31763b5e8a43b6593d87"],["/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","c572ae295dd06dc9424682db266aaa1c"],["/2021/10/21/第三章悸动/同频共振/index.html","55eaefe8c3e73af9d2dcd1c62950025f"],["/2021/12/09/附件/第一封信/index.html","b1743e41e2bb8f82356724dd0769b558"],["/2021年目录/index.html","136a802e6082ae4a02a17906650592a9"],["/2022/01/01/附件/第二封信/index.html","64717eba469f829fc3631fa709c6ad01"],["/2022/01/16/附件/第三封信/index.html","ff5d7c7a4c8a54d992e54a199fa5c93d"],["/2022/01/31/附件/第四封信/index.html","1656338dec041228e67792e4076d47d3"],["/2022/04/06/附件/第五封信/index.html","6ec7a7ed6233091d1cefaee4f52ec0d3"],["/2022/10/23/番外/喜好篇/index.html","705dcbade29879141a1a65e1c6b236d3"],["/2022/10/23/番外/重要日期篇/index.html","c7ba9e870f2ef8496d84fc96b5603b8d"],["/2022年目录/index.html","e0f930b31e0b1148c404924f325d6977"],["/2023年目录/index.html","a6703ccd211e66f2b6849af150ebd85b"],["/404.html","48ea6faf0dac8eec854c37041ee35e47"],["/404/index.html","f749c66cc0e86ab900931114165015cc"],["/about/index.html","3c2a3c5f756cdd016b8b522359f7cb9f"],["/archives/2021/08/index.html","9607f99747a0e378767e114fac804596"],["/archives/2021/09/index.html","bead0c4f0e60d1609069e8d8a7a22348"],["/archives/2021/09/page/2/index.html","c6c734a10cd4095e2350c9143c8ed7f5"],["/archives/2021/09/page/3/index.html","43ee28657edf739a129c883d6a4e7a0e"],["/archives/2021/09/page/4/index.html","30f09fb2317005917bf552c2d7c67cde"],["/archives/2021/10/index.html","e98300620cd675210d7640d4672ec688"],["/archives/2021/12/index.html","aca5b8ddf778ea8aeb687c1fb9e63c28"],["/archives/2021/index.html","6c6aa7977211472fc2b19fb2c3c4903a"],["/archives/2021/page/2/index.html","7b644d491c2b725c177d0ffac5840b9f"],["/archives/2021/page/3/index.html","c3815570fee1b77ffc67eec19684237b"],["/archives/2021/page/4/index.html","221b84057d09df90516b7595d97861da"],["/archives/2021/page/5/index.html","505740c27c697c5070f55ae3a103668c"],["/archives/2021/page/6/index.html","dedb269d9a4a2601f42e72ac5b3d44ef"],["/archives/2022/01/index.html","52d7bc20d5b44b9d7850ce59739de307"],["/archives/2022/04/index.html","f90d054363a77732d61731060b728d4c"],["/archives/2022/10/index.html","36d80a8c10d16ef9ca4442cecaee157e"],["/archives/2022/index.html","ddcb0847a2abadaf1bcd1228497fa532"],["/archives/index.html","3a7c0a1e5f69eed8f8b2685d754e03fd"],["/archives/page/2/index.html","ef62ba0f37ee3978a80bb11b2232ec37"],["/archives/page/3/index.html","0b8d1a05872a4b155bc9e66d90de71a5"],["/archives/page/4/index.html","4a7512970d63b95869663cd740f77ff1"],["/archives/page/5/index.html","dc7da2694014538b0cf5619842eca064"],["/archives/page/6/index.html","1df4995ee2ebd78a8a4c3ba9053eee13"],["/archives/page/7/index.html","96cb0d7d3bb7998f40dbe50452bb4db3"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","22d7b4b73eb6a431ed2ded27516de818"],["/categories/前言/index.html","e29484f5756de95124da5a69c9892e00"],["/categories/番外/index.html","d4d5acbde170125d5f8fc0b4c127f5d1"],["/categories/第一章-初识/index.html","623ca8038d684a707042073b6c239cef"],["/categories/第三章-悸动/index.html","b542a4a3befa8b13590226e357c030d1"],["/categories/第三章-悸动/page/2/index.html","318c07fbe29b3fbd945f3f6b5ad5ffa2"],["/categories/第三章-悸动/page/3/index.html","cf06131971ba6634a2de8b9851d82068"],["/categories/第二章-情愫/index.html","539db32cffb0ea58bca01560873fcfaf"],["/categories/第二章-情愫/page/2/index.html","c04a8dbc7e877679402c30af86426948"],["/categories/草稿/index.html","78f234458bd8543ec623381f11e4727e"],["/categories/附件/index.html","1cf6401145329c3c7f6a2e77d2497d0e"],["/contact/index.html","f9b91952cfdcb55ef2fc21d7bc2d5c2b"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","7d5e4ed3e04e1b14c5325fb3584f9c6f"],["/index.html","02e8fc4cb7e47c8edeae2be36c18c546"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","53ac9ad5e7568d99864b8191d8f1c937"],["/music/index.html","9ee7c1e3e94ed3ff1a578a7534c8a84a"],["/page/2/index.html","5945b5995addfc45bab0125290b78dfe"],["/page/3/index.html","3b40db5e8b37a9a7e69abe3be2a36ebe"],["/page/4/index.html","98ed4d1dcbe38bbb71af764e7e32e2bf"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","8c2b858134f0d1156db3f25d2341cc5f"],["/tags/index.html","80af39a5933dd3e2f356d21bdd8a6deb"],["/tags/一百天/index.html","3b715c5cce6f878f61514b37dd263931"],["/tags/信件/index.html","c699d7c96f03bec883f79d3d554e7dbf"],["/tags/喜好/index.html","368c355a75774caa32386202ff74c1d4"],["/tags/想念/index.html","210b2b6b2366df425e6165e2ee67b226"],["/tags/故事前文/index.html","7f30a7e59cbc6642f80ec4c9259c8a7c"],["/tags/春节/index.html","6c4b7a37c9393a9aef61e5a457c5d76c"],["/tags/生日/index.html","a64012ca33a917e5d44c70819b282811"],["/tags/番外/index.html","547fadc34eb62f6a8b43f3c0458f6a70"],["/tags/第一章-初识/index.html","408b7bccd0a23a713fab663622b74fd0"],["/tags/第三章-悸动/index.html","5bde23aa09b970437fe8ce217c555fba"],["/tags/第三章-悸动/page/2/index.html","743f022924a1bda4fb1af00035795cef"],["/tags/第三章-悸动/page/3/index.html","8957fe8571c01accba4197bc77cc4496"],["/tags/第三章/index.html","1425932ffcf1aff26cfe26cd5d8fedae"],["/tags/第二章-情愫/index.html","9ea474ab8eb15739e854e055764664ad"],["/tags/第二章-情愫/page/2/index.html","ee70f7a858c9c983bfe3f46033607c01"],["/tags/草稿/index.html","3a09203153cf98a1ba6f9f37552d5952"],["/tags/跨年/index.html","7b3cd0dd99cf685b86f48aed0d1d694b"],["/喜好/index.html","78f1d47de7c7faf0aa6dc8fdb6e640c8"],["/她和我的照片/index.html","c69fc59645df8cac911999eb2ae8abed"]];
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
