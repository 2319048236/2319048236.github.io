/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","c5cf942bbb6fa307aabad5f7908f719e"],["/2021/08/25/第一章初识/破冰大会/index.html","7017da42f2d6707d8012b57965c2ead2"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","3ce006af09534ec2ab2487485f186175"],["/2021/09/04/第一章初识/开学/index.html","1edbd53442b9e209798bf54e0669ab4d"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","12e6f3c9444d3fdc125dd8241f438e49"],["/2021/09/10/第二章情愫/有效择偶权/index.html","da2ad4951145b64b1e391c7d5c765da7"],["/2021/09/10/第二章情愫/本章概述/index.html","4144f01230ddeb5a164d7681e93e2592"],["/2021/09/10/第二章情愫/鱼塘/index.html","9035d86cc8101f78b38d03f7947f0dbf"],["/2021/09/10/草稿/草稿/index.html","d06aa4b10fe3c8b90f225e6b8ecbb4ad"],["/2021/09/12/第二章情愫/死缠烂打/index.html","7d8c60fe8d42c06a7535b3c1ce451695"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","32377b089f15ef0564c88ad6d89943e5"],["/2021/09/15/第二章情愫/微信好友/index.html","2116bf2b662be628f812afa5cf5b30c8"],["/2021/09/17/第二章情愫/中秋月饼/index.html","6d364a21522b91891785178729427391"],["/2021/09/17/第二章情愫/吃饭/index.html","8c69d03effcb0689b8236a683a95970b"],["/2021/09/17/第二章情愫/官方认证CP/index.html","634160fd59892ad41f3d2aedd2bb0dac"],["/2021/09/18/第二章情愫/续上火花/index.html","17fcfb06b51f8b4d90e735dbc6eae64f"],["/2021/09/19/第三章悸动/袒露心意/index.html","8caee60567cdb9a952d6de40dd0db5ee"],["/2021/12/09/附件/第一封信/index.html","c2e845ecd30313ca19e22633fc508528"],["/2022/01/01/附件/第二封信/index.html","999b8df941b1840017195b2ef834362c"],["/2022/01/16/附件/第三封信/index.html","772d534dfaa44220caf3405149a79b73"],["/2022/01/31/附件/第四封信/index.html","24ca203b972974b70e9af9058377ffd9"],["/2022/04/06/附件/第五封信/index.html","ceb802f882a2c19ef03453bcb68f7423"],["/2022/10/23/番外/喜好篇/index.html","63ee6d16c20d7b79bf16e560b1b565da"],["/2022/10/23/番外/重要日期篇/index.html","5ab97be5e6b24c85205da0b855d70c7d"],["/404.html","eadbfaa77ee9ff86f4c113cedff1dbe2"],["/404/index.html","7750700294d40d0a430a5312d26dc672"],["/about/index.html","a5201de1b250ac9cafd8e6f474b92913"],["/archives/2021/08/index.html","1b12451028a71efbf4d0bc8fcd50a085"],["/archives/2021/09/index.html","ceb9e45054c1ab2c5673ee0012ec1406"],["/archives/2021/09/page/2/index.html","617f3a35df786b2a02b519b89945e658"],["/archives/2021/09/page/3/index.html","3e2019735fefa2b9320ad2908c48e5d7"],["/archives/2021/12/index.html","0b6d3048ed137bd6972557c84378c8d3"],["/archives/2021/index.html","584c676272db67cb7a47b06547c600e6"],["/archives/2021/page/2/index.html","6cedd4492997b51e43d915311036a592"],["/archives/2021/page/3/index.html","d1e5965134487b29800a62c83b9dfd7b"],["/archives/2022/01/index.html","f42a095e7a97fcd3c15c29777ea16ed0"],["/archives/2022/04/index.html","a759bb0a3165d3892ea1a717148857c3"],["/archives/2022/10/index.html","ec27de192343879b4d934b4a9e0bf5c6"],["/archives/2022/index.html","1888ec3f468b2011b5a0ba0f7b356eda"],["/archives/index.html","cecfe7cc932cb8571bab8b1988dc9a0f"],["/archives/page/2/index.html","1c83f29178466a35128d520a7f2c379b"],["/archives/page/3/index.html","349918989ea82de90bd8a96aab20d950"],["/archives/page/4/index.html","96cc97ce8aea5400201d2994b96b7090"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","8e210c918962a4f47e67d2a58aada9ac"],["/categories/前言/index.html","e85c3299170f58698ea03977e5639a15"],["/categories/番外/index.html","7dc6f8b367b250916c278cce6b0eb598"],["/categories/第一章-初识/index.html","c3b29264606a3ab08250ed5105452591"],["/categories/第三章-悸动/index.html","5db4193407a1bdde541e01ddf3a72187"],["/categories/第二章-情愫/index.html","d74b203388bd1ffb18181ee2a2fa4391"],["/categories/第二章-情愫/page/2/index.html","b89a593f248138470a1f335d14f7cde3"],["/categories/草稿/index.html","e8320292bc6c8231a1a5f33f39ad2156"],["/categories/附件/index.html","8b77561ad2a6f5e09ee565e5773f9b77"],["/contact/index.html","6a23166f0d0addde4634701eb880a734"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","f364fd22acd6323c1f0e0d551f457c13"],["/index.html","1dce1ff4499dbd36efb76b37ae746ce0"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","b1c46425213a2cf5804bfb66dc8b8f75"],["/music/index.html","09a2bffc657ab2ed41f0676baa05abec"],["/page/2/index.html","5a5f0ef5e4ca5372ec7e516cf5c56b64"],["/page/3/index.html","4da7f5152aedbd0cdac9765ee8a9ec2c"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","33e3c04852e027bc069f79b818bbb2b8"],["/tags/index.html","eb1b1e054e968a707413dfcff00e3750"],["/tags/一百天/index.html","71fd0e27993b1ac89751cd9a149692f1"],["/tags/信件/index.html","a72e0c156bea671851a458e5a98996b3"],["/tags/喜好/index.html","0b8fa9bbaf2fdefbd3ff750689f0ed76"],["/tags/想念/index.html","e39c4133b06e5e2e47b919e04c5e3eb7"],["/tags/故事前文/index.html","1b65a39b5774e6aa9bb35f00761808d8"],["/tags/春节/index.html","e752a3af88d23eff339b35d0b44e5545"],["/tags/生日/index.html","8154ec6cf6375dcebd63404f14e8f587"],["/tags/番外/index.html","16e18bbaba4977a47d767a45780fcce8"],["/tags/第一章-初识/index.html","4f527f76b9ccdab75b5e9defa3ed53b9"],["/tags/第三章-悸动/index.html","fc8e8e94ccffcc68e018a0f5e8955de7"],["/tags/第二章-情愫/index.html","a4952b03f9d1bb20641558550dac8b07"],["/tags/第二章-情愫/page/2/index.html","08eb949e8f6b6c3cf4c042f2153c2e51"],["/tags/草稿/index.html","938c8f69338755c074bc0b1724cbde83"],["/tags/跨年/index.html","6ddd52b3dd69b496d0649432f9997630"],["/喜好/index.html","407187e07ce6fdcb08e1893736362688"],["/圣诞树/index.html","5e16c6df23596be7db7b3d98a96da407"],["/她和我的照片/index.html","ac9b859799bb1da98ce56975e97d048b"],["/测试/index.html","f6273173dce805903af0f58c73af832a"],["/目录/index.html","65036419e1f5b0ac325bced4c8f325e5"]];
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
