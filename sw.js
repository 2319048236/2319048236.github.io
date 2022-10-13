/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/12/测试 /index.html","a3832174f9719d5f79264c612136c135"],["/2021/12/09/第一封信/index.html","66aaa6c2ae6056e465dd80bcc923ad43"],["/2022/09/10/第三封信/index.html","aad8761862c11e9929fbc32cb6922525"],["/2022/09/10/第二封信/index.html","2204c8dda3bfc37365fd426c500d62f9"],["/2022/09/10/第五封信/index.html","07750325aa55db2c328c6ed67ff7a788"],["/2022/09/10/第四封信/index.html","206a45225f7c41c7f174ad50028b98c8"],["/404.html","de4a746ff59a28590f9fbafadbcf39aa"],["/404/index.html","e7e1df3267f5ed14d98b2380beb51c60"],["/about/index.html","3fd48360500141019e5176425a44f8b6"],["/about/index原本.html","994a9d5940b0c1d11750046cb79e9bcf"],["/archives/2021/11/index.html","65f5c6b9c2d9260c23494364db42cfca"],["/archives/2021/12/index.html","c116055dc27a4a1b3611907de8bd930b"],["/archives/2021/index.html","a56e083ada770dea281a2b345dca3570"],["/archives/2022/09/index.html","ba8e9c770d0d8dc5ae8acf74369083b2"],["/archives/2022/index.html","eaf7a2201a6d214a4ad152567dfbec00"],["/archives/index.html","39dcae93ee3950743a6dbc66ef139efa"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","431279def2147feee0276a4a8d93bd0c"],["/categories/相遇/index.html","84601f0be1dfdb172a3d4303460b19b4"],["/categories/笔记/index.html","c314bd4085d366d011e4b6b93b01b15c"],["/comments/index.html","182eb4a0f74c33d6b83bb0e8fa8daf81"],["/contact/index.html","014ecc84c8cefcf834ec4ee48e9093e3"],["/css/index.css","b9a58e656209bdf50294338f75b6e677"],["/css/matery.css","43791082257a82449244f853a9d87b94"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","99b4d150f1dc086481c0da4b5f515472"],["/img/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/img/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/img/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/img/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/img/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/img/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/img/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/img/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/img/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/img/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/img/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/img/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/img/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/img/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/img/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/img/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/img/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/img/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/img/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/img/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/img/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/img/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/img/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.png","6fd306e0fb239e42ec8f82793e6ae6ee"],["/img/头像.jpg","11caf72a6ab728a3d172b7188192a9f9"],["/index.html","3a141d341e1d0b32f923c5161f4f8fff"],["/js/calendar.js","d1f98313113a80aee9e7601376a609c8"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/languages.js","13f02f1612f2a9c6bf4932ece42bbfe0"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","638a8dbc2e7125e4ce7af84e730d3830"],["/music/index.html","fd621563e9d14781ae723f680737bb4a"],["/style.css","b9a58e656209bdf50294338f75b6e677"],["/sw-register.js","dcb2db2026e883b13620d0fb48739d34"],["/tags/Java/index.html","dd3688f21ee612ca959c99c6e56746e4"],["/tags/index.html","34c4e6d4d940dcbcebecf53c5e5be53a"],["/tags/信件/index.html","9ac939d61739e89eac673a513ba2ea87"],["/tags/她和我的故事/index.html","f7028670c8612692a4492312338b1c47"],["/她和我的照片/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/她和我的照片/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/她和我的照片/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/她和我的照片/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/她和我的照片/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/她和我的照片/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/她和我的照片/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/她和我的照片/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/她和我的照片/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/她和我的照片/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/她和我的照片/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/她和我的照片/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/她和我的照片/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/她和我的照片/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/她和我的照片/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/她和我的照片/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/她和我的照片/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/她和我的照片/featureimages/24.jpg","d7ad165b9a1ee69a1e92d8c865ac83d2"],["/她和我的照片/featureimages/25.jpg","da3a9096761b19ccb6783051737987f7"],["/她和我的照片/featureimages/26.jpg","faec3811f9c87a38eebbc2578bffcbba"],["/她和我的照片/featureimages/27.jpg","9b06d296f759d2d66fe45a17cf9263a6"],["/她和我的照片/featureimages/28.jpg","b54b7fd0a802a64d7805d1c25a78f31f"],["/她和我的照片/featureimages/29.jpg","63bd413620af074371cff9609ea80887"],["/她和我的照片/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/她和我的照片/featureimages/30.jpg","26f4370143a7234996e085a98e1fe768"],["/她和我的照片/featureimages/31.jpg","0fe11f0ad8cdb06a79019b50b13bc065"],["/她和我的照片/featureimages/32.jpg","1f04a88c7c92b56cb37cb00ac05bf64e"],["/她和我的照片/featureimages/33.jpg","2f06689eaa59b25bb6c2405434822bd1"],["/她和我的照片/featureimages/34.jpg","471ffc744137b137ba355ac72aff98d6"],["/她和我的照片/featureimages/35.jpg","f5cfa979f02e97a643b54372024fc300"],["/她和我的照片/featureimages/36.jpg","e6d90f1e817d41eb4f69e7ebced5c318"],["/她和我的照片/featureimages/37.jpg","fa10a5fc946a476594142b5cde43a634"],["/她和我的照片/featureimages/38.jpg","f2af59c7ae90088918c5f34ee43b1bb9"],["/她和我的照片/featureimages/39.jpg","4cc14ca08a28e9b705accfb0493fd463"],["/她和我的照片/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/她和我的照片/featureimages/40.jpg","f5a161c43e3e154794ad94994cd6da1b"],["/她和我的照片/featureimages/41.jpg","2a6feabd36a7e2c056d8ca27af3281c4"],["/她和我的照片/featureimages/42.jpg","6727a13d2b0d0b052b962cbf8a7fc2f7"],["/她和我的照片/featureimages/43.jpg","8ee883f76b2030c5ae829ecbf841c6c8"],["/她和我的照片/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/她和我的照片/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/她和我的照片/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/她和我的照片/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/她和我的照片/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/她和我的照片/index.html","b4c2e1a25193cee78347ab656097b632"]];
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
