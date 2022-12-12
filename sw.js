/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","0a8b87bd597673c318be4b3e771580ae"],["/2021/08/25/第一章初识/破冰大会/index.html","f3d4e4e57ce880712a73bc2141297c48"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","fb46957e49a027e0791465d54ed13df9"],["/2021/09/04/第一章初识/开学/index.html","2ffffcd3e3782befad1f7cb2a2727a49"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","7d428c5c2d605209f660e6226af91450"],["/2021/09/10/第二章情愫/有效择偶权/index.html","a7ae59b8a8eb28da2bc260459c491041"],["/2021/09/10/第二章情愫/本章概述/index.html","bff48104caf99f9f5352701ad6010239"],["/2021/09/10/第二章情愫/鱼塘/index.html","105acddfef59b781dd1e55e212d00686"],["/2021/09/10/草稿/草稿/index.html","f8ecbd18a54fe09f32401c9aff179fac"],["/2021/09/12/第二章情愫/死缠烂打/index.html","2a59a51adb1575eb8ee70abb46eefc42"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","aacd861e50c661c734b4a2d4eef80970"],["/2021/09/15/第二章情愫/微信好友/index.html","903461ecafab9746bfbbdf4932558b07"],["/2021/09/17/第二章情愫/中秋月饼/index.html","034043e3f63178f8cacb404bf624aaa5"],["/2021/09/17/第二章情愫/吃饭/index.html","b7d72d6a51837bf44f3d6a160c3ae436"],["/2021/09/17/第二章情愫/官方认证CP/index.html","00590429468957c3c28e67a2aad470db"],["/2021/09/18/第二章情愫/续上火花/index.html","f276b7d80a1e9e54a363338cd0e8f90a"],["/2021/09/19/第三章悸动/袒露心意/index.html","c73272f357f960353dcf4709577927f7"],["/2021/12/09/附件/第一封信/index.html","ba88dffdf340040619e2265a68421c63"],["/2022/01/01/附件/第二封信/index.html","c22f7ae88d685a8b0e5b7da18a9bbc32"],["/2022/01/16/附件/第三封信/index.html","ae91b5d29566b164917539e190268d9f"],["/2022/01/31/附件/第四封信/index.html","b40476838e7f2be75eb7636c619ccd57"],["/2022/04/06/附件/第五封信/index.html","d9117ca6bae0a720ca1715089e2b164b"],["/2022/10/23/番外/喜好篇/index.html","9e21799ac9dc4157c88a6151655cbfe4"],["/2022/10/23/番外/重要日期篇/index.html","872bf73ab5a049f1839a4da8529a0a4f"],["/404.html","6d62b4e5616e92ca86edb196b150a7a7"],["/404/index.html","1543e193fd629829b143d32fd0b85af5"],["/about/index.html","ba12f17a2405c45cd33b254e98bb6604"],["/archives/2021/08/index.html","eb583fc75ada2db7d2a39badcda8ee42"],["/archives/2021/09/index.html","c877410360d17133e8fbd26515544760"],["/archives/2021/09/page/2/index.html","a05c32b017023dd0e90847dbf93a13c7"],["/archives/2021/09/page/3/index.html","bb1a32e0c8b1a1db556e0ed2b1e94955"],["/archives/2021/12/index.html","fdde3352ff453e68387f46bfb8b3d9ad"],["/archives/2021/index.html","ea8a0501bd896c80420bab7e7e3d5e54"],["/archives/2021/page/2/index.html","71db02a71bd2159f5eec991a02f9d89f"],["/archives/2021/page/3/index.html","8100870939cd0e37c613a2c9fea23769"],["/archives/2022/01/index.html","9f1697a4ea71fb0dc7aabac67b036815"],["/archives/2022/04/index.html","7fe0ec621a0977d10bb3bf23a9d235a9"],["/archives/2022/10/index.html","8c58d02daefbb6e935a5e7066af3eb39"],["/archives/2022/index.html","0402f595b0e9091b90af7f589edae740"],["/archives/index.html","f630b9cfe82a94c90487c6da1d7e9fac"],["/archives/page/2/index.html","897935e22eb6c77d706233f3bd559b06"],["/archives/page/3/index.html","95c90bd80925cc556486978b284ab2be"],["/archives/page/4/index.html","c5ff772542489275d07cb1c965fd7de0"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","d36d07ecc91cdbf356a0c8047cc086af"],["/categories/前言/index.html","a2f26de7812f4e6b45433d083064062d"],["/categories/番外/index.html","5feb64f7c21ee2e76eaa06df87181316"],["/categories/第一章-初识/index.html","571beb0d7cc30c67b4211e5965062327"],["/categories/第三章-悸动/index.html","cd6e8071d6af29575704d665f7de0197"],["/categories/第二章-情愫/index.html","1d5bafb516712a7e547ef213b3bb3c2c"],["/categories/第二章-情愫/page/2/index.html","b67d732ac6425a304ac51cbc5d671ec3"],["/categories/草稿/index.html","d9a1ab1cecdbe09e14facf92396d1e8c"],["/categories/附件/index.html","6ab4053cf8fdc2af957dc4f91fa58708"],["/contact/index.html","8566203bea1db09f9a04ebeea0ca8dfc"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","e47091d8c93dd7903c1b765780439ce9"],["/index.html","efa1fd8d43e504f1c8b125586decc24c"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","67ad259450dec20f2bc8f4fc35cd7840"],["/music/index.html","810b51d99d38b8521ab9966624f82100"],["/page/2/index.html","8f6dc3917852deb18d629e2950831c40"],["/page/3/index.html","d95d4750869bfcb2c92fb84eca175355"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","eb7677764d6e3506336997da1fc47841"],["/tags/index.html","6c36fa5d9f947bc67e13b3006e15a44d"],["/tags/一百天/index.html","338484b296c56e208e4f75db8085d7b2"],["/tags/信件/index.html","30ce8061fcf51fbe81258d6ccfffeea3"],["/tags/喜好/index.html","59eba567062cd58a6eef3b37c48531ed"],["/tags/想念/index.html","40e403504ffebe200b026e1cbe0e2ffd"],["/tags/故事前文/index.html","38c374349b6bc1d41a458668808772e3"],["/tags/春节/index.html","5d767e707623eb083c4fa47317df6c21"],["/tags/生日/index.html","6032ea6bc8ab2929e32d66b63952ff49"],["/tags/番外/index.html","3979c0c9581dab636e431529f3c7802d"],["/tags/第一章-初识/index.html","f48a4285b35f63f6103164ab2e95e693"],["/tags/第三章-悸动/index.html","602d6844f8cb41d944e6f719d30a25ff"],["/tags/第二章-情愫/index.html","7db62b64bbb19a449fb07c705a9b10e1"],["/tags/第二章-情愫/page/2/index.html","fa6b2a6575d744b1773b2eaf6241d3ad"],["/tags/草稿/index.html","b4b98151e39e0f228d90e61d0f2eca5f"],["/tags/跨年/index.html","f337f2c9e5b96783455fa226ecfb2a3b"],["/喜好/index.html","02fb364f1fc7132ccd18c883fc32adb7"],["/她和我的照片/index.html","4688b565fa12b482f2cbb8f12f58630c"],["/测试/index.html","53e4e8c1b82da02ed4c2f6748f1c4d3d"],["/目录/index.html","89b64144e6e53da248e485d46bb445bf"]];
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
