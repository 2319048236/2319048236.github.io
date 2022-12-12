/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","4550fe13664f9f06a37b6b0d92249337"],["/2021/08/25/第一章初识/破冰大会/index.html","054a3b71645c95000fcd494028444f5b"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","3a53cea76dbbc6a8d3d353367da07a2b"],["/2021/09/04/第一章初识/开学/index.html","5bd313da98495b572a824b5703adcada"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","90d82a9e20f01e022e6801e07ad5fe3e"],["/2021/09/10/第二章情愫/有效择偶权/index.html","6d2e7584309d6a3f77304f6da28a9d4e"],["/2021/09/10/第二章情愫/本章概述/index.html","716069e243335e7eef3d9101b359f403"],["/2021/09/10/第二章情愫/鱼塘/index.html","f3eb08ac3404d939a3568c88f12f9e28"],["/2021/09/10/草稿/草稿/index.html","6ebbbbe086e63e0807027b92e1627e5f"],["/2021/09/12/第二章情愫/死缠烂打/index.html","c89956997e5f31fce80b1345f77afb9d"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","56fd5cf3601d99f53616ae303c4cc1b4"],["/2021/09/15/第二章情愫/微信好友/index.html","58bfcf13eac61e7cbad51aa8ddde14c9"],["/2021/09/17/第二章情愫/中秋月饼/index.html","139d7b9d17cc93ac511b1cf96c668758"],["/2021/09/17/第二章情愫/吃饭/index.html","1e50dbe9c93169543b2f243341e6d418"],["/2021/09/17/第二章情愫/官方认证CP/index.html","dbb4fccc58d2b416fc8603a108a152d2"],["/2021/09/18/第二章情愫/续上火花/index.html","3e1c68d498244eb7b34bb6b73f417a41"],["/2021/09/19/第三章悸动/袒露心意/index.html","a8579c0575e24a6ddb1240b3f24a05b1"],["/2021/12/09/附件/第一封信/index.html","95402e6dabe48f47e5344bbc57dbbb17"],["/2022/01/01/附件/第二封信/index.html","190287bcefe607eb150f2a61976770a9"],["/2022/01/16/附件/第三封信/index.html","12b38104ecfe181adb6b4f3f9c3812a0"],["/2022/01/31/附件/第四封信/index.html","bdc6a26615fcf3178d2a7530334d61ec"],["/2022/04/06/附件/第五封信/index.html","59da0e0fd3775107b9dfe621bb4b1cbd"],["/2022/10/23/番外/喜好篇/index.html","2f3d43cc023e7918437e2f05e1e9847e"],["/2022/10/23/番外/重要日期篇/index.html","75978fa978e877d268ed5c1a851eece7"],["/404.html","d8aa472a3e5db5d395ffafe217439680"],["/404/index.html","7f70abbc6d29cb3c54866c64d921610b"],["/about/index.html","a0408cc8fe9fa42b9d2a0ecee7049aa7"],["/archives/2021/08/index.html","b2bdb46f9a334f48e8284944e90376a0"],["/archives/2021/09/index.html","c161bf5678b8ab69c0d86eab7c57bdfa"],["/archives/2021/09/page/2/index.html","07c38053a6beefc9a9eaf7f22f1a20c8"],["/archives/2021/09/page/3/index.html","c95c29b5dee523abe56dc3d154c46893"],["/archives/2021/12/index.html","47ffc588eb4c4e16b0c53d89f98f3b45"],["/archives/2021/index.html","88b819f7fc0af5401ecfb9059e13441e"],["/archives/2021/page/2/index.html","07f01e553ddede9b3435db34eb648f9c"],["/archives/2021/page/3/index.html","be0cd36b2a48fc053a19463bed5ca621"],["/archives/2022/01/index.html","1b461696113017462379344982a723d3"],["/archives/2022/04/index.html","ec9b5931fdf228f8c19314e6739283a2"],["/archives/2022/10/index.html","ec5dd91f0d1cda2d8c13f5a0764d6451"],["/archives/2022/index.html","6ec73b94cd7313b6892a2abc8473998f"],["/archives/index.html","04f03b8d18093621e0bdd5abf180eebe"],["/archives/page/2/index.html","f17516af18b2750d7d5d9cb22e4f3aca"],["/archives/page/3/index.html","da268de7492c2d98e2b656ca76e5e5c2"],["/archives/page/4/index.html","f3af62da28d19eeeb7560d7447dbf8ee"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","05f24744ac2720a12cb55818d14a823f"],["/categories/前言/index.html","840c983c69c70eef205a83225f9556f7"],["/categories/番外/index.html","b7d7300a7519ab51727469a6ae9d35de"],["/categories/第一章-初识/index.html","58e0de3a3159a0927e7c8becdc27501b"],["/categories/第三章-悸动/index.html","4c01d4467fb36e6502c0ca35f9c079c9"],["/categories/第二章-情愫/index.html","c9402db01922360fc602d1a3dbd70d29"],["/categories/第二章-情愫/page/2/index.html","da2cee9a55242e8deb43989bc261e145"],["/categories/草稿/index.html","dd317843f0309784a501f7a7081683de"],["/categories/附件/index.html","4682ccecf30c6db0472b4e3e34021c07"],["/contact/index.html","229f4b4522fc0b4ce3e272ef08488a10"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","0b1ae03564c0a99273045174b1c1f564"],["/index.html","27407c8b40149c38ed19610577fb26bd"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","a2282eb33deb6d3fe314d8a7b0e78f28"],["/music/index.html","36730b3ceaa5574bb9be16f0a8f97de3"],["/page/2/index.html","54543c92cf7f09c82520090d509fadae"],["/page/3/index.html","7752c169becb84a3ce46f2bdb3e6b3e4"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","368fa1e49b68e1b897a50cb96b1774db"],["/tags/index.html","4bdaef0695c27484ddfb382fe29b2fd2"],["/tags/一百天/index.html","2322ebdc6460c463a34e324cf1c97630"],["/tags/信件/index.html","e1d524d062c271b346ee0ec281c8f67c"],["/tags/喜好/index.html","d0f67a21a457584bd968aadf91b2847a"],["/tags/想念/index.html","cdb4a9cb99ae12e7e222e894a4c3d822"],["/tags/故事前文/index.html","7cd80f26e28c38dc47718f2007320d52"],["/tags/春节/index.html","83e6622d1201ceb5051bd86d49d5447a"],["/tags/生日/index.html","eb13d70c006d80599e64f681e9d76972"],["/tags/番外/index.html","bd6bfc0ec03fb2e3dd1f4fef23222e5a"],["/tags/第一章-初识/index.html","a26be56bda54a56f8f2dae11c0920400"],["/tags/第三章-悸动/index.html","02e0e9c006668c8681f7c8ee17490122"],["/tags/第二章-情愫/index.html","d2e8403d4fcef269a47f12d5854ab9d8"],["/tags/第二章-情愫/page/2/index.html","f0edf57d22cf7afdeaf8cd9c625a72ed"],["/tags/草稿/index.html","105e3c98c2c647d03e3ba8c9e9ba8cc5"],["/tags/跨年/index.html","d6327bd52e7431a53fefd4563d4b9841"],["/喜好/index.html","a6ba0efabc047a7d99ac8808641c1290"],["/她和我的照片/index.html","0f978e663b26287c3167e62111f88cb1"],["/测试/index.html","724ab6d1f587418460a4fc3c0d9b7218"],["/目录/index.html","1f32882975fb730935ae654088d7ad88"]];
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
