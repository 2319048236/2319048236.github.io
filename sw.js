/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","26482898caf9c80a2e956c71050f4af9"],["/2021/08/25/第一章初识/破冰大会/index.html","b71e0e7566468089bf981d257cbbf157"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","bdb7d4e0f53cdb1a91e9f900a628a7f1"],["/2021/09/04/第一章初识/开学/index.html","18468e9a310ace4979ca4db45044d6e0"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","76c8565be9943192c31a0d480efa3070"],["/2021/09/10/第二章情愫/有效择偶权/index.html","bbea5598a89454fe5a004dcf04143447"],["/2021/09/10/第二章情愫/本章概述/index.html","16beeaffa8f5471f25c47fdb5c94c322"],["/2021/09/10/第二章情愫/鱼塘/index.html","7fb8e24e325351c82f0651b6097324f1"],["/2021/09/10/草稿/草稿/index.html","d2495ba0ffa84ce1fe0f86272a6a0dc2"],["/2021/09/12/第二章情愫/死缠烂打/index.html","9997f83a10942d814ecd23522c8e6076"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","78d55a9065f5ed21f2f8bc0a79689b0c"],["/2021/09/15/第二章情愫/微信好友/index.html","cdd76086ccca93c20d67a36999137e91"],["/2021/09/17/第二章情愫/中秋月饼/index.html","671d036287ebb50857c862b812adb4b4"],["/2021/09/17/第二章情愫/吃饭/index.html","e02836973d356572461bc2d9b53dc608"],["/2021/09/17/第二章情愫/官方认证CP/index.html","1b68cf518fd27e8c93a9af73b3b7d5c8"],["/2021/09/18/第二章情愫/续上火花/index.html","3f45d7e2320ad3cbc05529ccb9f89e83"],["/2021/09/19/第三章悸动/袒露心意/index.html","0b476686fabc9ffba5ffcfec6b8b4647"],["/2021/12/09/附件/第一封信/index.html","ad511f3ca990cf1d8fed4a240f59500e"],["/2022/01/01/附件/第二封信/index.html","fe8f031188d7c5b76552f0290ab450f2"],["/2022/01/16/附件/第三封信/index.html","238fdaecf4826c62df94ec5b2dda51ac"],["/2022/01/31/附件/第四封信/index.html","6c496a344cfbdf2e9c48019f3f45799c"],["/2022/04/06/附件/第五封信/index.html","d72e3a89401d483bac045ea0bf57b4e0"],["/2022/10/23/番外/喜好篇/index.html","98c1d11b0bdad18e03e334c9a30a851c"],["/2022/10/23/番外/重要日期篇/index.html","183887f2600fe13474aa950d5479ebed"],["/404.html","9116c2affab8a5182294cdce57c86147"],["/404/index.html","f425eec9e75b5b87132fe67e78e30ddc"],["/about/index.html","8b9ad492c81cb9acfddd1fa4aaca1364"],["/archives/2021/08/index.html","f62948a8654c1ebe2c78cc49afed33eb"],["/archives/2021/09/index.html","809935c933489e017bed0e55f975efb2"],["/archives/2021/09/page/2/index.html","ac15819913b4c1b96b4b23fc2fc482ad"],["/archives/2021/09/page/3/index.html","ffc4413de37a42cbcf4c9e9d14708b40"],["/archives/2021/12/index.html","740612842cd93ecb835c06e7ba17d000"],["/archives/2021/index.html","d37ebbc0a7eef734488d437e8e01f1cd"],["/archives/2021/page/2/index.html","cb31bb8f855c4a9171cd7fb2032f7c19"],["/archives/2021/page/3/index.html","42f3d53ec79ae5fed35496e10e563654"],["/archives/2022/01/index.html","da2b5f164ad3cfeb612dbf5ae5c315f8"],["/archives/2022/04/index.html","f760fc84500bd4746ae877e091fa1f74"],["/archives/2022/10/index.html","7cc3191fe1fbe437315dff6ffccd2a44"],["/archives/2022/index.html","922339b8a18551a5579ff4e7911041f6"],["/archives/index.html","f5215515b43eb4329951de67bd2f7c67"],["/archives/page/2/index.html","16f6761054e1327bb5cd6bc39b154026"],["/archives/page/3/index.html","8e72f61870a692d6731a6dcc45f9cb9b"],["/archives/page/4/index.html","de36b2883acdaf8ab7ccc032f0a45d24"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","00d09d04938e9d878d1ecf6b66c0a403"],["/categories/前言/index.html","ce3c4c3ea048bcff327a02d3526b5696"],["/categories/番外/index.html","9ea14d705892591497e1556ba9ca8bc5"],["/categories/第一章-初识/index.html","cc2bec60872fc51f2b828fc2669301b1"],["/categories/第三章-悸动/index.html","70aaaee82e5f3f748336924f2accb881"],["/categories/第二章-情愫/index.html","2c586f5804ffbeb08f4086969af12631"],["/categories/第二章-情愫/page/2/index.html","04d0b68be21dc458d12b957aa48dcbe4"],["/categories/草稿/index.html","14e98788c8600b90e59bb48b530e5683"],["/categories/附件/index.html","021192506d4fd64cbb2fbe5d5ab9416b"],["/contact/index.html","7fdf60d4956718ec1c8edba88c2561dd"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","7216d2437fbb8523704085a49eb130e5"],["/index.html","7b8a374fd11615f26eec2feaaedefc70"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","5786bb5f2d237c77a9727102617ef8ea"],["/music/index.html","354cb94e7fd2fd862be436054329eb2c"],["/page/2/index.html","825b070c5183ad7af56dd520d54d5351"],["/page/3/index.html","37e690a6d4d2a1fd9eb0ab747ae484fe"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","eba6e447ef8a09013e0432c917235e22"],["/tags/index.html","d73e2deceb8f1cdd03bdb78445a2eadb"],["/tags/一百天/index.html","13866e132e90315c7929f08e74650361"],["/tags/信件/index.html","ae7bf042436f6ed28d9869f37a70f883"],["/tags/喜好/index.html","5f89c44a2a99cd618aaa166ae628c35d"],["/tags/想念/index.html","9f0851ee6c2275d52cfb363781575780"],["/tags/故事前文/index.html","9896ab1784ab6f77479f0ca65eadeaec"],["/tags/春节/index.html","07eaeaa60725893113b63b33b3bc61fa"],["/tags/生日/index.html","e50f2729f5ce69032de5269351ae934c"],["/tags/番外/index.html","452820b8afdb3821df92941d8b2cde12"],["/tags/第一章-初识/index.html","a2ca567676f252ba9069a7055e48e251"],["/tags/第三章-悸动/index.html","b08b63ec4907791e75144db7c5d9e923"],["/tags/第二章-情愫/index.html","ffdd7c5d7f22ed1fefd341ac9d6dc628"],["/tags/第二章-情愫/page/2/index.html","89864420d88486e39e75130753a78db5"],["/tags/草稿/index.html","5e8ec192f82889dbfcc945cefa3a7063"],["/tags/跨年/index.html","85aa9180bf6778f0e04a5911fdf62513"],["/喜好/index.html","b8d4ce2053e5dd1a6725e6cc54f31311"],["/她和我的照片/index.html","8cac9df1d1b46dd8fda918009fa44ff6"],["/测试/index.html","192265ffd186b854f528c327ef4313a6"],["/目录/index.html","2435c37fdda5dbca5733be808566532b"]];
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
