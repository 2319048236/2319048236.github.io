/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","fe433e007d2135a257a2ffe29b6a3824"],["/2021/08/25/第一章初识/破冰大会/index.html","18e8b217252c4f6970fbdcb6972dbda9"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","5c0f2d7352ff2cc60f3fe83fedc60643"],["/2021/09/04/第一章初识/开学/index.html","d17c7ae56746418c5149d3a5604e52da"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","639f06b2e7ed1debbd5a8ce32777baa0"],["/2021/09/10/第二章情愫/有效择偶权/index.html","14b7f44881176d576ccd3a7eda225285"],["/2021/09/10/第二章情愫/本章概述/index.html","bf2062cd997d276608ca5aa61a41eedb"],["/2021/09/10/第二章情愫/鱼塘/index.html","a56e296f271701d0bc55bb1391e6a13c"],["/2021/09/10/草稿/草稿/index.html","495177e67148f993976809c7e4e7f9cf"],["/2021/09/12/第二章情愫/死缠烂打/index.html","6241be740d220a66182e20102e620445"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","209eded08f67a5e5aef51507dbe22a05"],["/2021/09/15/第二章情愫/微信好友/index.html","a49cc480f10624599294c6e78d0bf75d"],["/2021/09/17/第二章情愫/中秋月饼/index.html","34964a91c414cbab0eee8124245fa03f"],["/2021/09/17/第二章情愫/吃饭/index.html","9e9f89d06597eb61e3cbe28d9c28644f"],["/2021/09/17/第二章情愫/官方认证CP/index.html","4a9e1f2fc488e171d3c8d76398c017e8"],["/2021/09/18/第二章情愫/续上火花/index.html","615cfa3c7670872f650eb2f55acb0433"],["/2021/09/20/第三章悸动/袒露心意/index.html","cee01d34670eb302aa2fb116c44f9e0d"],["/2021/09/20/第四章发展/草稿 - 副本/index.html","dfdb4842b4678c499a36790bf8ed2a72"],["/2021/09/20/第四章发展/草稿/index.html","2d06c4aea22d7a3a10b4347cad0444cd"],["/2021/09/21/第三章悸动/中秋快乐/index.html","e6cbc1ffed01afcc40ea11a819b25270"],["/2021/09/23/第三章悸动/特别关心/index.html","d8faf9d7a8d228679a399d5bd6ee1037"],["/2021/09/24/第三章悸动/推课表时间/index.html","8dbbba0d1799b26977bcee6ce5f74f69"],["/2021/09/25/第三章悸动/开会的小插曲/index.html","bef0b92c616c803b30a75dfb1068d086"],["/2021/09/26/第三章悸动/溺水/index.html","fa58d62a1218070e966069b0399a705c"],["/2021/09/27/第三章悸动/约定/index.html","c78e3e770ab6440ab918b45e0908ee73"],["/2021/10/03/第三章悸动/女闺蜜/index.html","2f7dfa5c3b2d8f7d6f51939e161a720a"],["/2021/10/05/第三章悸动/持之以恒/index.html","fea8eda63b33cb64a20e77b893f39c4c"],["/2021/10/06/第三章悸动/想看雪/index.html","e0ea98267aecb30db13ecd2028b014e9"],["/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","92f5a1c1a6dd6275c3c0dad6e12e0a03"],["/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","3fdb4362b9009eba9533c530f1bb297c"],["/2021/10/21/第三章悸动/同频共振/index.html","17f36977fa653b096b95088c3816c94b"],["/2021/12/09/附件/第一封信/index.html","37684e9944d265678092d87141695129"],["/2021年目录/index.html","bf4bded2d0f0a2bbecb11f4d17819c24"],["/2022/01/01/附件/第二封信/index.html","47ea51faf90090088d4f0a5bf305ef8b"],["/2022/01/16/附件/第三封信/index.html","6fc6dabbd1d90650118dae98b36cb312"],["/2022/01/31/附件/第四封信/index.html","ed8539cf8d014a374b810765806cded4"],["/2022/04/06/附件/第五封信/index.html","3d17e1309b92cc8fb4604e22217a8f6f"],["/2022/10/23/番外/喜好篇/index.html","cfdad86c998ea7f3e3fd3a894f8624a0"],["/2022/10/23/番外/重要日期篇/index.html","3911c403039fcfcdc29abc336c824fd4"],["/2022年目录/index.html","12d3c8ebd7331cc22c8fc9ee8d5a55fb"],["/2023年目录/index.html","869658b30b5fefeccf9a545691c5ee84"],["/404.html","85bdc484302fe9c6cfe27b8d51badb96"],["/404/index.html","69303004a677f55f00cca806f868e1fc"],["/about/index.html","c797d589813122f07e011545a92f3fa5"],["/archives/2021/08/index.html","392c16e3c5db7e1fd0018c0355b22512"],["/archives/2021/09/index.html","c12360f2cd6084d0ed8c9b4fdafad641"],["/archives/2021/09/page/2/index.html","aa7581cb1ec79b27f80a93cf367cd02e"],["/archives/2021/09/page/3/index.html","f3f026078355f2d86044a4df8e89a04b"],["/archives/2021/09/page/4/index.html","5685879de17ffb81470169d20f9caad7"],["/archives/2021/10/index.html","6c73136bc28febf9b610ca41270f436c"],["/archives/2021/12/index.html","55101323cf50d8eaf72874b6b465faf6"],["/archives/2021/index.html","e0bed70b06d862c958367362f10c60c2"],["/archives/2021/page/2/index.html","0756061375a385e79b6eb742c740d17f"],["/archives/2021/page/3/index.html","81def69e1cf3604ac4e20c797f3350ec"],["/archives/2021/page/4/index.html","b8ea658faeb4a36609c1fd7e5e5459d9"],["/archives/2021/page/5/index.html","a9af87a3d597360061e2f35ae76ff57b"],["/archives/2021/page/6/index.html","31c8e5dc582b6eb6047a6b3b8dc6e870"],["/archives/2022/01/index.html","9874c4fcbf3c70318feda7dbb32ffd10"],["/archives/2022/04/index.html","c3e10dd6957b3923fdde692e21f7cf5b"],["/archives/2022/10/index.html","25796e1b197a8735af6b5804e00f7857"],["/archives/2022/index.html","433eb7e0ad30147af00ba18ba8985039"],["/archives/index.html","284816f6663ecf81f7d2acdc8d4f806d"],["/archives/page/2/index.html","7b569cb55052c1ef8839e0e566799dd5"],["/archives/page/3/index.html","56fd5f909f220129d66a247486031b19"],["/archives/page/4/index.html","8e31769980f76d8d8001233063fcd667"],["/archives/page/5/index.html","ca0610354995d95794b7514153727235"],["/archives/page/6/index.html","3575dff8ba4a0f986457f9cc24fb48bc"],["/archives/page/7/index.html","c6a01ac9ffdf8ef43f64477e06b0a36a"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","3b08201056caedbd52d04a1bb81255dc"],["/categories/前言/index.html","f4d27a32cdac7e3645b8b94756fb3b41"],["/categories/番外/index.html","eabb2499fd89add4092075664de794c1"],["/categories/第一章-初识/index.html","298de2acd7fed498608ce51033976d10"],["/categories/第三章-悸动/index.html","6f7a08947b63c254f24d64edaace9429"],["/categories/第三章-悸动/page/2/index.html","1a37e32cf0979820cac78bc9bf3d6dcd"],["/categories/第三章-悸动/page/3/index.html","6e47af9022ace23926a0e60932d61b40"],["/categories/第二章-情愫/index.html","354dc356a61d025d755effacfe6292fc"],["/categories/第二章-情愫/page/2/index.html","bbc97604ad16e17ac789b699f8006aa6"],["/categories/第四章-发展/index.html","3e3bd1f42ae93ec7ec9aa5715609da27"],["/categories/草稿/index.html","2827f2e499390501bdb13451a4f3800b"],["/categories/附件/index.html","57b312f0758c918c14d883eaa39cc2a0"],["/contact/index.html","4ff336bfc2e06660447d997c2a99c782"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","5e19912991cd49963e18b8f4a79ce175"],["/index.html","f3aaa36b9983a9ab648369d421336ec4"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","cd5ce1236243c9dc86305cb717c99a6f"],["/music/index.html","b3e37bf5adfe46a1b8be26d173a48d16"],["/page/2/index.html","007f8255624ad12e37358e064d6a6f6e"],["/page/3/index.html","2e9765d085585fbcb435c39b77050b4a"],["/page/4/index.html","8ae5ff64762726b929421692228a1a2d"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","d5f05ddb82be0e2c6a87068b8d90f9ad"],["/tags/index.html","fecf01c5dda6f2f93ca0df00b6e30b3c"],["/tags/一百天/index.html","3c9d41f7d81d15d99b3847964acca2e2"],["/tags/信件/index.html","e45171114e33f76fed7eac748a818bd7"],["/tags/喜好/index.html","f3ee54a3faf9fc2e2852bb51ee66106e"],["/tags/想念/index.html","3459b5fcfcf697339f8dc9af953803c6"],["/tags/故事前文/index.html","2d28819e3924b6a73841f6dc7e3396c7"],["/tags/春节/index.html","e9a59e76287e6e69c6b333ec5428f4de"],["/tags/生日/index.html","37832f12f10253bacba57c10aea8da06"],["/tags/番外/index.html","ccc80224bb6dd1630dadff59492e6f10"],["/tags/第一章-初识/index.html","b7783ccd3d70ccaf711f0c0bb0e137a1"],["/tags/第三章-悸动/index.html","d5e0a505f5b3c9760f90064c5c814db6"],["/tags/第三章-悸动/page/2/index.html","3c4a343127cf712060d2162a7f3f2f76"],["/tags/第三章/index.html","c01d1a503e908aeac9aabbca2ffa64f0"],["/tags/第二章-情愫/index.html","f79440820b0b15e8061f284229d50f17"],["/tags/第二章-情愫/page/2/index.html","0a81eb7ad1bf0b65a433a9b43f29ef74"],["/tags/第四章-发展/index.html","89bf83246098afa1fcd132eea85335db"],["/tags/草稿/index.html","7251aa62821cc6ad83e791c28f7de5ea"],["/tags/跨年/index.html","102b56d9db99a845d6e124f8a5b8c4da"],["/喜好/index.html","d9a74644a248c6facc7347294b1c1b05"],["/她和我的照片/index.html","b84bdcd97f03f582d4a0843fd9ba7caa"]];
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
