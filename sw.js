/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","f572edcf9667132c19479fa10e8ba01e"],["/2021/08/25/第一章初识/破冰大会/index.html","249e1b57c68f739129d1818554e84f9d"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","2c7d0eeff0e781327ddbb0c6bb6f4d89"],["/2021/09/04/第一章初识/开学/index.html","ce30a394f1578a96457d53303ba5c49e"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","bb2ae88650b80a51f7095a0cd845598f"],["/2021/09/10/第二章情愫/有效择偶权/index.html","a9df1c78e96650a404ee78327e26ddfa"],["/2021/09/10/第二章情愫/本章概述/index.html","9ba97261a67b5ec947784039bd17c8c0"],["/2021/09/10/第二章情愫/鱼塘/index.html","a9071cec64b0908a239ec4c9a9759ad1"],["/2021/09/10/草稿/草稿/index.html","01445aa8cee9881335688396c6994c0d"],["/2021/09/12/第二章情愫/死缠烂打/index.html","8ebfe6b8011010e6d086399ad4d482b0"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","79b3ec9ec1eab8828874c97fd3976318"],["/2021/09/15/第二章情愫/微信好友/index.html","2b28a9c4d63a69764de4654e4a29b960"],["/2021/09/17/第二章情愫/中秋月饼/index.html","a5b251669afe06819187a94342879c7e"],["/2021/09/17/第二章情愫/吃饭/index.html","7d14c18b3d646ab7a901d499a3cedf30"],["/2021/09/17/第二章情愫/官方认证CP/index.html","4faf27c44bdd1db4c3356972fb976a39"],["/2021/09/18/第二章情愫/续上火花/index.html","c8ef4e60eae06514e78b2d73602b78c9"],["/2021/09/19/第三章悸动/袒露心意/index.html","c596a47ed375b8376b1f0356ff2dbbc3"],["/2021/12/09/附件/第一封信/index.html","fde498f66ad02ee50348348ef5b81d57"],["/2022/01/01/附件/第二封信/index.html","ebafae134d9c151aec3ae0661bed3ec4"],["/2022/01/16/附件/第三封信/index.html","0f11005577b444bcd080ae3dccebe1fd"],["/2022/01/31/附件/第四封信/index.html","3fd6d195b76875c60796eef560761214"],["/2022/04/06/附件/第五封信/index.html","8c635d76001aa8bbe6b8d2156c8de4e3"],["/2022/10/23/番外/喜好篇/index.html","aabc44eb8103ec80b3693faae45cea9a"],["/2022/10/23/番外/重要日期篇/index.html","d20612dc7527174cf936279e10453070"],["/404.html","981afac10a4a3ca16f8a2a8835cef91e"],["/404/index.html","53e49b15a0bcc8ef4e41977728dc8b1e"],["/about/index.html","073fac3c26043d067557584f6fe8dd98"],["/archives/2021/08/index.html","35d89e0ddf83fa06093e234d8f1216c2"],["/archives/2021/09/index.html","6aca90be008fc2c58f82e7cb93146eb2"],["/archives/2021/09/page/2/index.html","afe8e6922e36993566bbabd1f70c4e01"],["/archives/2021/09/page/3/index.html","482628eb35dad532b472859a2d25ce94"],["/archives/2021/12/index.html","4ae7b46cf1d5f385e49ff1df979f5102"],["/archives/2021/index.html","3d5fd68eba01930ff9845ceea96ef716"],["/archives/2021/page/2/index.html","6231098ece0b933583309bea1c58ede7"],["/archives/2021/page/3/index.html","d8da47d2df07fc4c40f86c6222df5cfa"],["/archives/2022/01/index.html","2f23a6eaa595a69ca6c8d632aac8d545"],["/archives/2022/04/index.html","29921fb70390f983c43c9821685f3c12"],["/archives/2022/10/index.html","1bd556235d68f2239d36ba97201eae64"],["/archives/2022/index.html","f2ee5d25d558361606dd45bf74a730f8"],["/archives/index.html","7d2dfbebdde46db518698251b6310975"],["/archives/page/2/index.html","2545db8005e3bef078992e8c6a6aad0a"],["/archives/page/3/index.html","414aac3ad50ab034d315228857e58cf7"],["/archives/page/4/index.html","8a4e35b1d1756fb1e053368e37d84bfb"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","cc79915d9f609ce8e447a1182ae0a2bf"],["/categories/前言/index.html","c589c26b063f421c5b3af8ed121dfe18"],["/categories/番外/index.html","c09c234ab0f18713e80fde86b7968d08"],["/categories/第一章-初识/index.html","6fb7cea2b552453d787ccb38ae1f0f1f"],["/categories/第三章-悸动/index.html","60e970ba312b205b32620075b9793975"],["/categories/第二章-情愫/index.html","cba93c9b7bc98c882bd6738c077dbf09"],["/categories/第二章-情愫/page/2/index.html","144fee6065250b41fc4313bf714edbe8"],["/categories/草稿/index.html","90f308a8a43a73ece4cc818c37271c13"],["/categories/附件/index.html","6bca27922d0a3ee751b14dca545cea67"],["/contact/index.html","20cfe9d29de24cd74eaf49a25ef1e684"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","8c798926024e9e3425d6295c437dfefd"],["/index.html","7fbdc504fc19cc676e5586c9f137589d"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","de057d28cf7393b78a12c60aac594bc5"],["/music/index.html","79f710a9911901160ad92e83e79b5b9f"],["/page/2/index.html","0e9faf92cf6a16b119017a6350a5cea9"],["/page/3/index.html","018f8683d340724f5bba46001ebfb69c"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","83b31013e5809c1aa98e1a8e00b4523a"],["/tags/index.html","2376516ad975a8d90b2ce5d20b9d173e"],["/tags/一百天/index.html","b32ae2b0be32663d476364992092672f"],["/tags/信件/index.html","6426ae987228261f45345835bdd6c2f0"],["/tags/喜好/index.html","976a9cd86e2c9df6261537a569dc7fa2"],["/tags/想念/index.html","d58fc9484efb74f4202bfd911e734ff8"],["/tags/故事前文/index.html","bf1768f25287cfd410b61da12e24c4c1"],["/tags/春节/index.html","1ed5023a1743f48f2011f8e385ffdd94"],["/tags/生日/index.html","5a67d475636e0dc2a174a20a85fa214b"],["/tags/番外/index.html","b1a21f4d009e19969489d707991341a0"],["/tags/第一章-初识/index.html","c838748075773fee63d357ea8ece15d3"],["/tags/第三章-悸动/index.html","be787c5d04c782fd7a62706c2f83d73e"],["/tags/第二章-情愫/index.html","7e0cfaf42c463cbbfeeef006c9619fbe"],["/tags/第二章-情愫/page/2/index.html","8a6cddc20f6ad92434e71150955bc301"],["/tags/草稿/index.html","7b3c5c9aaef19cf634ef5f083d2a511f"],["/tags/跨年/index.html","c190a1acab89a58fbd802b861f7f6a37"],["/喜好/index.html","5dd7711e6db450758e16b478285d7b93"],["/她和我的照片/index.html","69243bacc5d5449dcea4b12642ba8fcd"],["/测试/index.html","47437c396155f438ceec7e0bac60be61"],["/目录/index.html","b343d7124605866e6efa5f9223ef9ea6"]];
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
