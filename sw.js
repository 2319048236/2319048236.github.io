/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","ffec2a9c400a5bd232907091db2c62d7"],["/2021/08/25/第一章初识/破冰大会/index.html","17f122fa4b11ede6ff01683521df3272"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","b9d495f8eeda544652b026a0eb68633c"],["/2021/09/04/第一章初识/开学/index.html","42678749931fbe04f4967c4f1be0302a"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","ed1472a2f20b146aa8efa55cbb07c5b7"],["/2021/09/10/第二章情愫/有效择偶权/index.html","b48e55aa1bb4dedd06a895a15149aadd"],["/2021/09/10/第二章情愫/本章概述/index.html","c54f7fd3b5ee7ad280d4420498b257ac"],["/2021/09/10/第二章情愫/草稿/index.html","eb6d2eac146fef01fcfe0ee19a6075cf"],["/2021/09/10/第二章情愫/鱼塘/index.html","0fea57c5f8562bf41dc31f7daf526705"],["/2021/09/10/草稿/草稿/index.html","978e1e593e68722b91e0560b84520e54"],["/2021/09/12/第二章情愫/死缠烂打/index.html","e81a26406319ff231f1f4a585c1b33e4"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","c4ca5c3385a80a2f7fddc14071f1aa6e"],["/2021/09/15/第二章情愫/微信好友/index.html","c911898d4a28f5485c9dc91238e6de2b"],["/2021/09/17/第二章情愫/中秋月饼/index.html","7441b95bb8ee2448573758dc4676357b"],["/2021/09/17/第二章情愫/官方认证CP/index.html","b09000cf9dce9ff7b2c2ed0451f1d3c4"],["/2021/12/09/附件/第一封信/index.html","ef1c03428c4112ffe9ef549bbbcaa321"],["/2022/01/01/附件/第二封信/index.html","4da75939d397f7d58497d4c0f4c07e9e"],["/2022/01/16/附件/第三封信/index.html","d5fbea454546ad83f469b11cfe888ec0"],["/2022/01/31/附件/第四封信/index.html","669077cf6f30d70b353bc82a6655ec09"],["/2022/04/06/附件/第五封信/index.html","be947ac3e36810fc35d2db41688288ae"],["/2022/10/23/番外/喜好篇/index.html","693bd02e41ac1d2c36e1f53b0608836d"],["/2022/10/23/番外/重要日期篇/index.html","7c35de523aa9c559378be10e5ba727b0"],["/404.html","a3e8e2e1de6f1c4ad65fab9f3488192a"],["/404/index.html","7fe7d0777e44818a3bc99cbcb09613fa"],["/about/index.html","a7d136343fd95084e3b591a14bb9a430"],["/archives/2021/08/index.html","8fa73aa6930fe1019271257598566c3e"],["/archives/2021/09/index.html","ef0f0c47ad8b6d78b86d8b8ba0cb2096"],["/archives/2021/09/page/2/index.html","fd401979173bf7a183c6103b60d85c2c"],["/archives/2021/12/index.html","c6f90bee53a1eddf3d0c0f5fd60a3784"],["/archives/2021/index.html","4626f09825219caefd0b5f37b0b969fd"],["/archives/2021/page/2/index.html","9765937219c59004bdb14c93fcc84308"],["/archives/2021/page/3/index.html","b86b09af56128a48f2eec01646e4a7db"],["/archives/2022/01/index.html","ea2859b33ed150c4ffcfa04d27324dda"],["/archives/2022/04/index.html","b8015b0fee4a57907b53b839aa4d55bc"],["/archives/2022/10/index.html","610103213873541df13edf050ae10d03"],["/archives/2022/index.html","72d80ab087d6cc64af73c32b711e64bb"],["/archives/index.html","e6062156e621dfadfc7a33ac1bb8ce62"],["/archives/page/2/index.html","39a1763720f489387c73f500de9daf4f"],["/archives/page/3/index.html","65f29ff33a6c14928ade4d576092b892"],["/archives/page/4/index.html","2c6d714670fad93f9d822b0cc3fdcbd0"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","bb2f7372190bebb18887b8031d087978"],["/categories/前言/index.html","6874a737554a819bdab2dcca34e41c57"],["/categories/番外/index.html","749445413b6ee801459069bc0a1337fb"],["/categories/第一章-初识/index.html","4b965b29a028b3233efe0d2d29e334a0"],["/categories/第二章-情愫/index.html","618323d339407158c32e3e305eb95d6e"],["/categories/第二章-情愫/page/2/index.html","df1c593a748a250db7be1d552f679d90"],["/categories/草稿/index.html","834651f63a88c298830eb848d7750c12"],["/categories/附件/index.html","9217b23de93d167a1b2cd4ff3292e709"],["/contact/index.html","521a781c1328cb8d930f759495a494c9"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","87aeeeb9832e403caf87030fc94d3291"],["/index.html","d5e91fb18a8375816b6fa716764ca7eb"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","e51883baa9bccbfe717442683ed97b59"],["/music/index.html","485910663f7f384dd99f068e850a44ea"],["/page/2/index.html","c8fbc2c6935650265a388f99bd7c85aa"],["/page/3/index.html","89eef5b6b92d0bb8231a77524b64590b"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/tags/index.html","b93975d96ed8ded1f5046b300ec5bdd4"],["/tags/一百天/index.html","ab373dd8437027d4206a0b7f0048e349"],["/tags/信件/index.html","a80982930da7f66b0240f1197614a552"],["/tags/喜好/index.html","9b5408d71f98569e00a6e5e147b21f40"],["/tags/想念/index.html","b1b7ab52b0859548b70f5f2c4ae2f621"],["/tags/故事前文/index.html","dd828a7a5f65291c7e92fb514bd1d368"],["/tags/春节/index.html","4b8da1bdc4d2f16c87915fab3411d3a2"],["/tags/生日/index.html","429bd395109d368e26bbe99fbe44f95d"],["/tags/番外/index.html","82a8260a1b4ce963d4d57b5643ff2953"],["/tags/第一章-初识/index.html","e77e8f67b7005c41f464dd6f17472835"],["/tags/第二章-情愫/index.html","1741f3651eb25f141c730b154f4f297c"],["/tags/第二章-情愫/page/2/index.html","505dfe949785abd6ed31a6712e10eefa"],["/tags/草稿/index.html","9c4792e35ac16e782b0e400eadbed3d5"],["/tags/跨年/index.html","57e47bdb5d5b92c68914889b39365d1c"],["/喜好/index.html","93b321047823262d9a5bfe0d6c6890ef"],["/她和我的照片/index.html","f7503c5135c1b9a573b0fa809b628867"],["/测试/index.html","880ded267d0519add7de8518cb4b9410"],["/目录/index.html","11a1574ac1085a455d38624f035f17a9"]];
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
