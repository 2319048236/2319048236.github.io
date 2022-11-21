/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","c10011a0bc5aa99fda60193f7e4a8333"],["/2021/08/25/第一章初识/破冰大会/index.html","421487834dde650e69a59745314e3607"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","b308d4461facda57e332d5e7f20aed9a"],["/2021/09/04/第一章初识/开学/index.html","de8ec6be52cc7e074cd3879d3a628a31"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","a0ccba7da118f87af21bdac93a6f615d"],["/2021/09/10/第二章情愫/有效择偶权/index.html","c05f192b799280e5a204cb00f93f0c51"],["/2021/09/10/第二章情愫/本章概述/index.html","28d885aab45b143629e4de8dd46df09e"],["/2021/09/10/第二章情愫/草稿/index.html","0dca0bafba435c2735c98bc133c04dd4"],["/2021/09/10/第二章情愫/鱼塘/index.html","ab704c634ad24243fe84d928175bc19e"],["/2021/09/10/草稿/草稿/index.html","f0aec288240baf2b84ae193c1493dc1e"],["/2021/09/12/第二章情愫/死缠烂打/index.html","ef7f2326ec0ada080ba292730664c329"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","0108ee46168d2a0b721db08b7f353701"],["/2021/09/15/第二章情愫/微信好友/index.html","fef223e86441cefbde450a592f119563"],["/2021/09/17/第二章情愫/中秋月饼/index.html","9961590afdc37c4ae9386e2c1ed6f695"],["/2021/12/09/附件/第一封信/index.html","69b2a441c449b4148390c1872726f3ef"],["/2022/01/01/附件/第二封信/index.html","d9bbd0b5b0091d0f110a1ee2c7737fc5"],["/2022/01/16/附件/第三封信/index.html","c0378131a76c3c3a0742f867b62697ee"],["/2022/01/31/附件/第四封信/index.html","4fa010bbbe97e0edabe349acaf85a2bd"],["/2022/04/06/附件/第五封信/index.html","047b58e273d2a965f6bfd3b049c71b8c"],["/2022/10/23/番外/喜好篇/index.html","a12af16820d1b9bda73cc6a3b7051463"],["/2022/10/23/番外/重要日期篇/index.html","2096407b3a4aee3f18b0fb19928cd8bd"],["/404.html","a7b31291dea440a052dd947f65de3fbd"],["/404/index.html","15f4caf5fc47cd9522dcc3b548adf100"],["/about/index.html","b1a10f8691f1c00078472f6212043926"],["/archives/2021/08/index.html","56124afbd3fae6f644634f1e82260284"],["/archives/2021/09/index.html","4fe1e4fbc7d7ee381201433185a1d026"],["/archives/2021/09/page/2/index.html","288405421be533d734c54e559879ea90"],["/archives/2021/12/index.html","a17d5e3c82e0cd51ea21170c342aeadd"],["/archives/2021/index.html","e27c606e04880153fb538ea56ecc4652"],["/archives/2021/page/2/index.html","a2d900a10de6278008532f890a72791a"],["/archives/2021/page/3/index.html","8560f29e81869fe3b91646e2a769de89"],["/archives/2022/01/index.html","f6f72c81d3341060df74f55ccd34fae3"],["/archives/2022/04/index.html","8e07a1415c652326138df2e0ff75222a"],["/archives/2022/10/index.html","fde13b14cfa9a22162a24679cb21e114"],["/archives/2022/index.html","d6184b992ac5881a1f5bfbefe5c7443f"],["/archives/index.html","a58e534b2c2faf982df5c883b5ced69d"],["/archives/page/2/index.html","51486c609534aeef6c1875029bbebc84"],["/archives/page/3/index.html","ba4409195fe17324fbebf88470178ca8"],["/archives/page/4/index.html","9ef5f2332d22bb01e55bd3aa4016e7fb"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","1ab96f161de2987eed987214532784f3"],["/categories/前言/index.html","e88a66674030eba686861a02dc86af04"],["/categories/番外/index.html","7c06540bb3acc3a9e88891056309c522"],["/categories/第一章-初识/index.html","9a48b6a183be86e7abd1b6408cc98d6b"],["/categories/第二章-情愫/index.html","cedddb420e8b425135591c19e500a4cf"],["/categories/草稿/index.html","0ff426dd0b4aa0e833613950b3354ac3"],["/categories/附件/index.html","a4c82bfbb442bde9b25e98ca96cb4752"],["/comments/index.html","5c58de2c9f71df4e16db64b2c2a0b4fd"],["/contact/index.html","65b4c8f89cb219ccd688ffed8edd50c6"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","fbf66edc1f618da8a22349877a7a849b"],["/index.html","9d118e9c9e0abe489f597e082930f53a"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","952665e31e8ffb78ee254fc4ae158ecb"],["/music/index.html","33cd4a279ef11a7d47ed436b98bfd4cb"],["/page/2/index.html","f716f6649c1989d563a8bf943e464878"],["/page/3/index.html","df9a20516dffefe61b2297bffdc2f746"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/tags/index.html","55e7d432ecf1622c61a1dd3ec3a7a012"],["/tags/一百天/index.html","d008a008c76f1db6c1dce781824f578f"],["/tags/信件/index.html","c4fa42b40775d2309b4689f7d2cad199"],["/tags/喜好/index.html","0bf3e1313261761c6767f467b32dc6ac"],["/tags/想念/index.html","d9a928ac0df1064dc09a94f5494dd70e"],["/tags/故事前文/index.html","855081c70011b9d0966e5b52305a96c1"],["/tags/春节/index.html","1852f11ae10934583d33e0fdf52c328c"],["/tags/生日/index.html","35069c9dbb274326c2d5a4ce35829189"],["/tags/番外/index.html","e1c7a27a1242f35abbfdb6fb8e091096"],["/tags/第一章-初识/index.html","604e9004fe9c01c795d6ba6713fc0064"],["/tags/第二章-情愫/index.html","8c915d89328d3a3d414baa93a9ec67f7"],["/tags/第二章-情愫/page/2/index.html","27d562d23d4a0ee2b1dd9b204b27fb48"],["/tags/草稿/index.html","75bba5737853800586e785eeea521a03"],["/tags/跨年/index.html","2202b5c19ddbf918a41bf65d4ec74990"],["/喜好/index.html","dcd89c2611406c752411b197deb81123"],["/她和我的照片/index.html","e5015c5c74b577cd0f6a63fcd729fa2b"],["/测试/index.html","342efc35f85d7edbd21b338e1c1e21fa"],["/目录/index.html","a2381ec153ce431a5769dc4f555e1f09"]];
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
