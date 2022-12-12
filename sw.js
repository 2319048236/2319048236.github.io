/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","adaa2f2fef9edf75c57718d330955d74"],["/2021/08/25/第一章初识/破冰大会/index.html","ce3602b6155e3516a7fc4e661eac6535"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","511b1da877c6c0bfa4b6a4b2ef51f619"],["/2021/09/04/第一章初识/开学/index.html","a1a278a3c4af69aba27a04db78b045f7"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","b80f52aa6494e35abf3c32016cf5c3bb"],["/2021/09/10/第二章情愫/有效择偶权/index.html","64787d40958e532df28e0be973775678"],["/2021/09/10/第二章情愫/本章概述/index.html","6a79222373cfee51f989ae1ecc839a77"],["/2021/09/10/第二章情愫/鱼塘/index.html","e84b2be54ef375f8f7bf25cc47dc88a0"],["/2021/09/10/草稿/草稿/index.html","2e1bf88f4cd2261623ea89092603effb"],["/2021/09/12/第二章情愫/死缠烂打/index.html","9f7ac25fed1c128c751995b992e56342"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","0b2398b6c074b7af86792f7d1a163a7b"],["/2021/09/15/第二章情愫/微信好友/index.html","9e5537964222a6d81bce52fa5b0073e2"],["/2021/09/17/第二章情愫/中秋月饼/index.html","d5d620693d6bdac0d343edbca21bba80"],["/2021/09/17/第二章情愫/吃饭/index.html","f91e1c43a3faefc6cde02dda483bdfb9"],["/2021/09/17/第二章情愫/官方认证CP/index.html","44ceb31d3207fcbeb7b5426d8d21200e"],["/2021/09/18/第二章情愫/续上火花/index.html","03e489f697b37b009c9a94266e06097f"],["/2021/09/19/第三章悸动/袒露心意/index.html","9fddbf206919886334e4cf789542d23a"],["/2021/12/09/附件/第一封信/index.html","7a0a1a8abbfe5b37319c350eeae424b3"],["/2022/01/01/附件/第二封信/index.html","7565ed69530ef7112b12cf7f059dc9eb"],["/2022/01/16/附件/第三封信/index.html","4d6ced53fcb56645759d109355ff6a65"],["/2022/01/31/附件/第四封信/index.html","dd118d53570e4a53eaa780491a7d0c9c"],["/2022/04/06/附件/第五封信/index.html","6ff584a96d18db30e288a5fb0ade1a37"],["/2022/10/23/番外/喜好篇/index.html","ea2f100b91b9f66dbb004f0d2ed809c0"],["/2022/10/23/番外/重要日期篇/index.html","3bb280ba6904f8f13360c9b34d949186"],["/404.html","aa33399f8e33a09bca0d3a1a207b4570"],["/404/index.html","2ac01d0b81acad58d3583c7aad12b339"],["/about/index.html","f2c878df9d80f074c7253e8999dac2cd"],["/archives/2021/08/index.html","f2cd8d373e477157e385dbb6bd2cb054"],["/archives/2021/09/index.html","d914fe9ef4dddb4b7cbec5db2b26997b"],["/archives/2021/09/page/2/index.html","ff08e362d7fdd8155af2dde5721c125a"],["/archives/2021/09/page/3/index.html","9f7dbea09f20076e5650ff94c225eee8"],["/archives/2021/12/index.html","eca534d8410f3104095cf488b7485c70"],["/archives/2021/index.html","5600a4e3ea58b05f863a2d000dea6435"],["/archives/2021/page/2/index.html","9e316adf4b9af7169868a1dee9f021bd"],["/archives/2021/page/3/index.html","0e481a4fcbab10c3866927a7bd6a08b5"],["/archives/2022/01/index.html","a2ca8868b0046189e65f33f9c07b855d"],["/archives/2022/04/index.html","2f7908501357ed9ccf921635d667b3e2"],["/archives/2022/10/index.html","9268e4734b31ce44131eee7869235be9"],["/archives/2022/index.html","c3a017b05f8170f835f68ec933c0cbb9"],["/archives/index.html","5e9ef75a5e224b9660916457ec2e5f8a"],["/archives/page/2/index.html","a9e4b5e38c9d1eb20fada23c72d049de"],["/archives/page/3/index.html","162e36173de1c5f5ed54b6a1a42051de"],["/archives/page/4/index.html","a941c67836b3443647a02d494e82d730"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","13e83080bd33f311fd370ae1324435b4"],["/categories/前言/index.html","d6d84c5842cdf47d8101670f54cfffa4"],["/categories/番外/index.html","23e9e7a26e15105c7d80f8c4eda747c0"],["/categories/第一章-初识/index.html","0cba6fb9c5a8d3ee0efcd8a33447e80d"],["/categories/第三章-悸动/index.html","6a658e6a6f5e1fe56cfdc37c7f93645a"],["/categories/第二章-情愫/index.html","7c7c92a4f56165293b2edabd9793ee08"],["/categories/第二章-情愫/page/2/index.html","7f767365ca452ea277726c0d021e76df"],["/categories/草稿/index.html","d00b3032ce8d6ae92b6b4d714455b644"],["/categories/附件/index.html","c3a0d5131f92604dd7952ca13b4ebadd"],["/contact/index.html","a40347a6a0bf7b89aca774c300eefe20"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","b23b8799495f45efb32ebaf45ac03699"],["/index.html","4779ef2f9942c9538c04b2321ea0c47e"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","2162a27fd2e39fc5658a1bc4312f05f3"],["/music/index.html","df183982e0cfe5702e046992b2a217b9"],["/page/2/index.html","087d032cbdbd87993f6998be41ab841a"],["/page/3/index.html","1809c4b4dc19a53798f7b189253da881"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","cc2aaf5d8b5654335a2203d6843f75c3"],["/tags/index.html","c839a951754001fb5c04c6c284157bc8"],["/tags/一百天/index.html","7b5b8c37b4631073b22f2743ecd710fc"],["/tags/信件/index.html","249459b7ae846413f5fa9f7058b88e7c"],["/tags/喜好/index.html","0d9f2687c64c8e019b238f1b4be72890"],["/tags/想念/index.html","694d0303f2bc3f4c5f9ebb6c65a26db6"],["/tags/故事前文/index.html","85606d03e2fca53453e92cf745b56ef0"],["/tags/春节/index.html","7e5d83941c883f947dcfb4b0902f0075"],["/tags/生日/index.html","1f2f745b1ff1b08b30f3662eb93b1874"],["/tags/番外/index.html","5ed87256e83017a0851ac08283816a4f"],["/tags/第一章-初识/index.html","376e8362a8d2a2826361b9e5537dc029"],["/tags/第三章-悸动/index.html","5fbb5aa3f25e604b06c380bcf1142dd5"],["/tags/第二章-情愫/index.html","6296fd013bbbee7715242fed6da7f6e5"],["/tags/第二章-情愫/page/2/index.html","d80d06a68dd40378a894545b95cfaec7"],["/tags/草稿/index.html","534e6b253ed237df642f74be317d9686"],["/tags/跨年/index.html","6a3123411a4f261d64c786059916a266"],["/喜好/index.html","aeac8c0134ac0fba89c5488e6c334f67"],["/她和我的照片/index.html","60cd177c62caca71d38d6c0b3ad55237"],["/测试/index.html","958c987f924f64229645f9b152607357"],["/目录/index.html","75fb7b4ddf0f0937331815287b49937c"]];
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
