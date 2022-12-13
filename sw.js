/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","053b2e38d89c84272e4bb5e3cf8dd9a6"],["/2021/08/25/第一章初识/破冰大会/index.html","a53c376a5b0104e7c4ba24295050f77b"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","7d65bd86f3b5f55bc7a0935ca5643e4a"],["/2021/09/04/第一章初识/开学/index.html","200c760661f3abd22373a535346b2d46"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","390bd9402b29e406db8c29b8cededf33"],["/2021/09/10/第二章情愫/有效择偶权/index.html","7c018a9f297e1d8d0b1888760e34c595"],["/2021/09/10/第二章情愫/本章概述/index.html","3030bcb414ed33473667fcb3011ab6f0"],["/2021/09/10/第二章情愫/鱼塘/index.html","e95842fe3807f7479b7656a7f339a0bd"],["/2021/09/10/草稿/草稿/index.html","9e05300ae267656f0240ff3527456c92"],["/2021/09/12/第二章情愫/死缠烂打/index.html","c09282982b541cacbd0c0f94d6fff0ac"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","8db557794d38f0548b73bc89e6f1669f"],["/2021/09/15/第二章情愫/微信好友/index.html","b3c75492b9f1805f7ad71d04fb821444"],["/2021/09/17/第二章情愫/中秋月饼/index.html","1525a7aa2d577e0062867ee45d009e28"],["/2021/09/17/第二章情愫/吃饭/index.html","558490aba743186d20eb0d0906734d88"],["/2021/09/17/第二章情愫/官方认证CP/index.html","e007d34e8af988bde6a9c1ddf8c83636"],["/2021/09/18/第二章情愫/续上火花/index.html","8b65391d1f8e6d0775939a8a1f059223"],["/2021/09/19/第三章悸动/袒露心意/index.html","7ec07044a931340c99d85464fe5ec53e"],["/2021/12/09/附件/第一封信/index.html","f09e64c6f1a5390b1f782e59bdb8ba10"],["/2022/01/01/附件/第二封信/index.html","62de7746bb9a91b31e20ce67419b19d6"],["/2022/01/16/附件/第三封信/index.html","dbc645aa52167038437c807526e6b339"],["/2022/01/31/附件/第四封信/index.html","3a33af9c738a6cc83b009cc20e0b5e51"],["/2022/04/06/附件/第五封信/index.html","81a9d052c0066c1dbae6a761fec0e09d"],["/2022/10/23/番外/喜好篇/index.html","b551e2e57ed11ef74a3afafd3aed025f"],["/2022/10/23/番外/重要日期篇/index.html","8f9a9b2cce2c6ba6e194a2e49efde402"],["/404.html","b88cff6e397a87260160edff03019c51"],["/404/index.html","390ca742879ae7747370993826d38dc8"],["/about/index.html","cd17efe40a717eeab5200381e4f74bb6"],["/archives/2021/08/index.html","625671910baedb4de921db53bac36d2e"],["/archives/2021/09/index.html","ca698e7e103e9077353194a605147ed7"],["/archives/2021/09/page/2/index.html","427e3ce7dbce5b18cbe9ff68f0e68480"],["/archives/2021/09/page/3/index.html","5ee00e78eba09da5deceec3ecf38cbac"],["/archives/2021/12/index.html","4a9901c700d14f75875f943186cbc6ee"],["/archives/2021/index.html","d51497f0d6555f4f94733dffc1b68ed9"],["/archives/2021/page/2/index.html","cc96bc2bc957590d4d9aec5670a68fa8"],["/archives/2021/page/3/index.html","1386bad68793282f7854201cdcf6c909"],["/archives/2022/01/index.html","6790686888ad38d96bae52d323c29f69"],["/archives/2022/04/index.html","fe4cfc4016ca6cba8be97405b108d3cf"],["/archives/2022/10/index.html","fe3c5624cc5c6c672ba4f013503fda72"],["/archives/2022/index.html","a524d9d969af76300b6c9fab0ab15d38"],["/archives/index.html","06457516d6fdb19f0a4c9dfae267a5b6"],["/archives/page/2/index.html","54a67c72d961d3ddf69fa067c7e8fbb7"],["/archives/page/3/index.html","ff3e8c48f00e91b19f3c9ecf0214fbd6"],["/archives/page/4/index.html","818b79c4747f95c3b8ab26cd5deec12a"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","514e2cce68fb5a856b8276b2280b3841"],["/categories/前言/index.html","8ee8b6eb0e4b12281e88e3537aa5af7f"],["/categories/番外/index.html","398ddeb9bad83a3e2780bf84d492f27f"],["/categories/第一章-初识/index.html","cd7088ef7fb50e6140cd4fb574f26b6d"],["/categories/第三章-悸动/index.html","3e6ec24b976c9f24265c66be9b2a14dd"],["/categories/第二章-情愫/index.html","4cdd0f68bf35a92b22c5961a5b56a9a8"],["/categories/第二章-情愫/page/2/index.html","5f91eb44e668266d8eafd113b4b1eaaa"],["/categories/草稿/index.html","f767fbabd02c9162a6b6d63cc33806e8"],["/categories/附件/index.html","165446b90d065f87e73f58576c3d9751"],["/contact/index.html","feee7251b8d7f2f88a5c98c3128f7834"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","412c01e50751bb133911f822068bcce0"],["/index.html","37cc1a742e306b9f1218f5c42aacba1a"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","0b85d8b4138bd87b34020d58b3c6daf2"],["/music/index.html","930da987e34ab6e1785faebb070cd98b"],["/page/2/index.html","0167d7eece28fe8472d92f5b0c72faa5"],["/page/3/index.html","f383ebee292fa9b77bc6416cf8c304cd"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","178cb3dfc234286e08628b18446f633c"],["/tags/index.html","2239e78933e53e70649425e568e9818b"],["/tags/一百天/index.html","1c8eac64a4fcdf472b679bb61b0c22ec"],["/tags/信件/index.html","4c192c8eaedc4afde561fe056fe69c72"],["/tags/喜好/index.html","f9f746722b506e6fb57002ef89e74a9b"],["/tags/想念/index.html","ea49bb58be3ca320c4ceafd3798bece1"],["/tags/故事前文/index.html","86199f69a1aa3eb9ad702d011e65482d"],["/tags/春节/index.html","c5376419d54332fdc8082a422ffe19b9"],["/tags/生日/index.html","160a96a61443730ad5d9195e0d7f47d7"],["/tags/番外/index.html","75019c5626aacb8ef24407a823a3c3e5"],["/tags/第一章-初识/index.html","2531da8638b58428f11fc001fd04b6c1"],["/tags/第三章-悸动/index.html","db2d931a3d7f5748eb1ea9b5463fa7fd"],["/tags/第二章-情愫/index.html","91782121f5eb271d492797122da7db1e"],["/tags/第二章-情愫/page/2/index.html","82c21fed005a8bc227dbec7d809f9b64"],["/tags/草稿/index.html","e92652edcdae62b6e9a0758ad50a352e"],["/tags/跨年/index.html","ae4489aaa81c669902d59ee8bc03d70c"],["/喜好/index.html","495db3a459a8834bc5619979bfb417e5"],["/她和我的照片/index.html","8f2b70edaa4e52ce8fe50dfbb4bb845f"],["/测试/index.html","59fa1b002e60b1f5643b598a4e6c0b71"],["/目录/index.html","bc6848623784665fe0ed9ab14664e5ea"]];
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
