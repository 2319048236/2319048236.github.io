/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","d3f26eea8cd5deb80fba6ce9a5b5288c"],["/2021/08/25/第一章初识/破冰大会/index.html","7c8e72ae15c4236714ef8a6b3dc21152"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","3d1296febde3243dc456f0fe8faf62b0"],["/2021/09/04/第一章初识/开学/index.html","b1d9a42dc257d2ee6002112312097442"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","f7490eb65fdc12ccdbdfa36eabb85bb7"],["/2021/09/10/第二章情愫/有效择偶权/index.html","0083021b5ccd40186d417aa19d57f5af"],["/2021/09/10/第二章情愫/本章概述/index.html","00b3977c06a7860827ca5f0ac9f88e9b"],["/2021/09/10/第二章情愫/鱼塘/index.html","d6784b94f9446955f846242bef56dafc"],["/2021/09/10/草稿/草稿/index.html","6c99db6e2f276493708c21cf2becde97"],["/2021/09/12/第二章情愫/死缠烂打/index.html","81427445a9044e76553a4b51ae8df2c4"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","b5c6d752bb607254f88740915d283594"],["/2021/09/15/第二章情愫/微信好友/index.html","98015584adc3e916895743447d90e157"],["/2021/09/17/第二章情愫/中秋月饼/index.html","115ae0ac4267aeb98398bcf3f8f47e8d"],["/2021/09/17/第二章情愫/吃饭/index.html","937d875408b90f7c54772b0afc641b6e"],["/2021/09/17/第二章情愫/官方认证CP/index.html","a5f55929b35db4bcac8896ac52ac9366"],["/2021/09/18/第二章情愫/续上火花/index.html","5003429ed6c8ad810be0f41ce91a1f8c"],["/2021/09/19/第三章悸动/袒露心意/index.html","b83f6bc5dc912703cbfa84d80d1a3635"],["/2021/12/09/附件/第一封信/index.html","4a19147f0084e753a3c3c4f4e11bc2c1"],["/2022/01/01/附件/第二封信/index.html","6f8f9fa88acf63d07b86ce792d45e461"],["/2022/01/16/附件/第三封信/index.html","c0dcea3e33a7d0c4a404754773595ba7"],["/2022/01/31/附件/第四封信/index.html","caf0bd3bfab62dba4fa587712e7bf38f"],["/2022/04/06/附件/第五封信/index.html","0a7c673d16f224d1e0530aeb0fdb7cea"],["/2022/10/23/番外/喜好篇/index.html","cedf1d3318a44d4342200882fbfeb36e"],["/2022/10/23/番外/重要日期篇/index.html","725372f719f8b96c85de1797c79c317d"],["/404.html","006f954ca369f50d5ee7928be665bdbc"],["/404/index.html","4795b90188c00943fc6657bbe20b5ed9"],["/about/index.html","27ccce32bb1d1f87fb2dc8c127792f60"],["/archives/2021/08/index.html","7ba77e2be08fb4f3d39bb55858b75444"],["/archives/2021/09/index.html","ddabbf97a58f6dc02bfa75e024057f55"],["/archives/2021/09/page/2/index.html","f49b6687c1e592ddc6a599693c2e2885"],["/archives/2021/09/page/3/index.html","1d4322db8fd54ddf298b1f0e99cb7324"],["/archives/2021/12/index.html","84ebf940435f96ff2805c35a832e573b"],["/archives/2021/index.html","c83a8063648ccc8d4c868cd3b92d1981"],["/archives/2021/page/2/index.html","36bdbf610f10738a257817da1756a4a8"],["/archives/2021/page/3/index.html","21f84ae2279ce8b1fe2551a9d7fc526f"],["/archives/2022/01/index.html","0a4a7bf4683da5bd046043afa7770705"],["/archives/2022/04/index.html","555c07c093a12cc110fd6764b1605fb1"],["/archives/2022/10/index.html","223aca28c12780fccfa3e0ccc50dc2c2"],["/archives/2022/index.html","00d2e8194376ba1416844b11b5f713af"],["/archives/index.html","4a80c8e461befa7fba92bf88abc21e38"],["/archives/page/2/index.html","bb82802873d2d125f1d96c60cd66f080"],["/archives/page/3/index.html","7f363efb0edb09b2302e304e62d7f065"],["/archives/page/4/index.html","ebe9676e8252b5164fdc31315794c7d0"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","c489e074d708fb3574b1525edc8fbee1"],["/categories/前言/index.html","5c9c95b6d35d5a08d9a4621f83f572f0"],["/categories/番外/index.html","195d5ac1ace459a0e36af17516ccdd11"],["/categories/第一章-初识/index.html","0dae5edcdaf0499e49f5899b106399a9"],["/categories/第三章-悸动/index.html","2635b30cb61d48abbfe469c085f98228"],["/categories/第二章-情愫/index.html","98e5ac1b975669fb51f78eb3cec84934"],["/categories/第二章-情愫/page/2/index.html","bcd6c63f71157fdec6d3773ba203e9c1"],["/categories/草稿/index.html","f9159c77d9bf2d9bb3bbe63352eb0565"],["/categories/附件/index.html","9212ba2b9d04f005c608466c50242e6a"],["/contact/index.html","9ec8b9b06e0c1d3f482d62f71d90475e"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","3b883c4a4e741955cb60f938b3a6ebe8"],["/index.html","b1ea892b82e0c65397fe977af4ba94b1"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","f83aaa346823748e01ea365c6a55aebf"],["/music/index.html","65fb53ce8c4f34d5492c90ea517711c6"],["/page/2/index.html","5a5f0ef5e4ca5372ec7e516cf5c56b64"],["/page/3/index.html","4da7f5152aedbd0cdac9765ee8a9ec2c"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","56f59e1f847b50076c0b194116312d28"],["/tags/index.html","350d1ca3e74e816beef3d274cdbae643"],["/tags/一百天/index.html","3decb82155da9bcfefe656ff916126e4"],["/tags/信件/index.html","8417e0477f78435e724d7125ee729217"],["/tags/喜好/index.html","69fbf4835cc5b462c0840f5d3a0ae414"],["/tags/想念/index.html","4212c644ee7c6d2f9f691ca50d15dfa0"],["/tags/故事前文/index.html","7dea047024d18bb43373ac22709bf283"],["/tags/春节/index.html","3d62bfc01cf8255e240f9aca75ec4dd0"],["/tags/生日/index.html","d8dd908add55de3340f260cb3c042eb6"],["/tags/番外/index.html","f3f345663b8956d0f489f212e566552b"],["/tags/第一章-初识/index.html","39be5ec13a587e21e57de134a6222438"],["/tags/第三章-悸动/index.html","70c816bf137d8ead32849b61d83e65c7"],["/tags/第二章-情愫/index.html","4878fc5e14fcffcee0d56794b9cdef83"],["/tags/第二章-情愫/page/2/index.html","18b6528eee70196a625fb9ec0860db9d"],["/tags/草稿/index.html","901d7d40502b1a026f98099ba54c1dff"],["/tags/跨年/index.html","741f3101bb6ec41f9a2059c961029928"],["/喜好/index.html","7dd51dd9483159bbf449865371502892"],["/圣诞树/index.html","da3a9acf53c143ed1f3919c122445a57"],["/她和我的照片/index.html","f628a4b36812863379df72ef3c025f70"],["/测试/index.html","817eae8d6c2fa80ec119acec2fba2bc4"],["/目录/index.html","7c0fd06ee6ab8ff4d9708f18a14269a0"]];
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
