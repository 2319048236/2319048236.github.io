/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","a2ed278d366a5c37f2540307aa184593"],["/2021/08/25/第一章初识/破冰大会/index.html","60e2dacc92ae2441b6adf4fff0ae3ad4"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","55a41b8480e33594a87967690de16a50"],["/2021/09/04/第一章初识/开学/index.html","e48258d730795e6c26bad2c3841c2d98"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","d6deb99a04023e711933f06f44ecb633"],["/2021/09/10/第二章情愫/有效择偶权/index.html","577240a2184f17fa91eb6b2072d1c6b4"],["/2021/09/10/第二章情愫/本章概述/index.html","9b4d04c07b555daa941a63eaa1572e88"],["/2021/09/10/第二章情愫/草稿/index.html","cdff307ee3109ad731675b411f3b5d39"],["/2021/09/10/第二章情愫/鱼塘/index.html","2b2f56c76225e4878439130b8c51d5d3"],["/2021/09/10/草稿/草稿/index.html","aea6a871269df51810102ba29ec7ffd7"],["/2021/09/12/第二章情愫/死缠烂打/index.html","8f8ee8dd698f101e3ce8962848a02eea"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","78ff96eb12928e71503283638470a5cd"],["/2021/09/15/第二章情愫/微信好友/index.html","bc45ebe60505c1e375fdff3ff8254f6a"],["/2021/09/17/第二章情愫/中秋月饼/index.html","b3f6aec7099fa86bb6b1c6834de22606"],["/2021/12/09/附件/第一封信/index.html","50b1a7fb2185f7aea1e9e0a389610090"],["/2022/01/01/附件/第二封信/index.html","52e68e3b1cbc237c12f58399827db527"],["/2022/01/16/附件/第三封信/index.html","cdd81c9738f139dc4c8c476266c0c6e1"],["/2022/01/31/附件/第四封信/index.html","8b4e1b445ca9e1a9c089ce9283923d21"],["/2022/04/06/附件/第五封信/index.html","dafa619fb1789e57ebacc54ec95d63be"],["/2022/10/23/番外/喜好篇/index.html","1259662300a09fa2117532b7aaf4de64"],["/2022/10/23/番外/重要日期篇/index.html","0b64e3793388dff21b7d35a95f5f4e49"],["/404.html","4db326cb1b5d12720994d61f13075d9e"],["/404/index.html","b1218930938bf2dfed1e9f277140231e"],["/about/index.html","886c4e1df69fda202e3d569d38953604"],["/archives/2021/08/index.html","4ba95b05d3cbe49097ee56df782a96a5"],["/archives/2021/09/index.html","cdfa693915d69ed41f11b13297f26495"],["/archives/2021/09/page/2/index.html","2302e8c05fc434217675f6f6d21c9da7"],["/archives/2021/12/index.html","ae9d7b23cb0bcde73444f02340f76862"],["/archives/2021/index.html","bcf4c58dbcd4b45bb3b2a1bb8cae4407"],["/archives/2021/page/2/index.html","73c297c07679457f25d0e419b22923a5"],["/archives/2021/page/3/index.html","7400cf68609ec15cdf24f89f5452af3f"],["/archives/2022/01/index.html","72cd2a04d55d5d9782e9e23f46f8701c"],["/archives/2022/04/index.html","000216859128c2ab1c42b44fc198d1f8"],["/archives/2022/10/index.html","4c71cd2b9a368742aacfc3db42860e32"],["/archives/2022/index.html","4ba551eb75325e4c75a4900e4fd16e9d"],["/archives/index.html","09158b7d204a1b881401f0c3201db7c7"],["/archives/page/2/index.html","868107fc6689e91c7a503e6c29d020a6"],["/archives/page/3/index.html","8aa53dcdbba8734e9e4dcc43d3d89f74"],["/archives/page/4/index.html","53200b29d5bcfa0d4c4d029154d47a94"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","2f348b30d86bd67b70dbb063dc0647b3"],["/categories/前言/index.html","70769ac6629dd71c2f666f12e4dd6d24"],["/categories/番外/index.html","6abf14252711c31485a6d5aac0afca49"],["/categories/第一章-初识/index.html","c9cf405ae8ca942c9773bfbe04cf78df"],["/categories/第二章-情愫/index.html","aa5b488d90833b40a80ac0737a4afc82"],["/categories/草稿/index.html","3b16b27d102edbb99ad983caa6cb124f"],["/categories/附件/index.html","9f4920b63e17e5d6e2f60f029aabae53"],["/comments/index.html","9b21e5d0f38002be8bb15d41b49fde31"],["/contact/index.html","fd4db106b564a50e7c7aea1f87abfa60"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","c57724a65d3875fdcbf65aba21e73a44"],["/index.html","0740eafb41d082eb09398f4fb0e8009e"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","13984fc2622bb6a40f4e313cc8e3c1fb"],["/music/index.html","60f7c08b1b90c3e5bfd4b93493a31d7d"],["/page/2/index.html","1c16cd824b3b1333c58587d7fe36bcee"],["/page/3/index.html","1335ac9989f12267574411d5331d7d9f"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","228009df9cb106761112f0308158bdac"],["/tags/index.html","eab839cfc58517accdfa746327a921f4"],["/tags/一百天/index.html","33a2193c61137054b87d2ab50ad21f70"],["/tags/信件/index.html","78c2a1adc0b64648dcb00aaf24815594"],["/tags/喜好/index.html","34e34236f9c7027452dfaa8a4e1929fb"],["/tags/想念/index.html","1034ea451ad56950d1bae24fc3851932"],["/tags/故事前文/index.html","e80e0304774105fd0c77a52c93ca9b79"],["/tags/春节/index.html","fe387e3868c812e0dc8a3f980026b334"],["/tags/生日/index.html","2b042c0a94c711e93fcd8f77538e3136"],["/tags/番外/index.html","20758d9f858d8baac30eebafea2070b1"],["/tags/第一章-初识/index.html","4a3c8eaad9780857734ef2a1ccd05d7b"],["/tags/第二章-情愫/index.html","253d660b20ca4017611d3052e7c146a7"],["/tags/第二章-情愫/page/2/index.html","60c18d59b4866c540f6e50129f7dffec"],["/tags/草稿/index.html","53de4b882a14f3ac0b6158c2f6036e8d"],["/tags/跨年/index.html","09dc412adaee3ab942782b51472ca2dd"],["/喜好/index.html","48f60264283178194c3a96ed98d580e9"],["/她和我的照片/index.html","b13fc38c9d10f806c147a863ac305471"],["/测试/index.html","7fa379fc72b6d3ea7676eb168020e902"],["/目录/index.html","019cfb9e934a79f1c52b49f7c16179e9"]];
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
