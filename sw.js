/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","8e15b143d7235b0a7c9f7b1ff71d8bdb"],["/2021/08/25/第一章初识/破冰大会/index.html","16d005f0fcf20c28681a169a0805f585"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","2bbfc9903360d19cf2b159a737c2e9a8"],["/2021/09/04/第一章初识/开学/index.html","0143f7b6c8fba6f30e4a5c4c52ae1058"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","3d0421093a3ab3cdbd4721aac09c3d8a"],["/2021/09/10/第二章情愫/有效择偶权/index.html","405e60ec5589173bf696a5fd3fa1e761"],["/2021/09/10/第二章情愫/本章概述/index.html","379c53a9a2ed11d8e02b794c25a2f01f"],["/2021/09/10/第二章情愫/鱼塘/index.html","96e3dd3bfc4027e15da1727084843982"],["/2021/09/10/草稿/草稿/index.html","8fbe83b726e4881c0976454d0c99ed99"],["/2021/09/12/第二章情愫/死缠烂打/index.html","0d96e3e64b8ad29515f47f87781983de"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","44ea1b4e63044aee45383de60380732a"],["/2021/09/15/2021-09-15/index.html","5e249f2de4911e00514309f4121db782"],["/2021/09/15/第二章情愫/微信好友/index.html","f1bf919be68eef56035b236e3eda5d54"],["/2021/09/17/第二章情愫/中秋月饼/index.html","87e44e67f586ad30b76e7bca198ed418"],["/2021/09/17/第二章情愫/吃饭/index.html","ae8c3d49eb165cc6ac2f97a0493c9a10"],["/2021/09/17/第二章情愫/官方认证CP/index.html","ad8e898bd8c3df3b71010bda2e56ad5c"],["/2021/09/18/2021-09-18/index.html","e569cd27b853bcc5cf0d8c1643543798"],["/2021/09/18/第二章情愫/续上火花/index.html","4b7f588395e74bf5c9f197f94a75be0f"],["/2021/09/20/第三章悸动/袒露心意/index.html","241c4833719993cb64efe4e9cac0c4fb"],["/2021/09/20/第四章发展/草稿 - 副本/index.html","a1f27b3b901ca09a4cc9e82965fb83b1"],["/2021/09/20/第四章发展/草稿/index.html","4d6d7feed5d413d6514b908d48058c90"],["/2021/09/21/第三章悸动/中秋快乐/index.html","fe08217bfef2495623e613ec88585c74"],["/2021/09/23/第三章悸动/特别关心/index.html","ee3e0143663a1adf9a2fa55807ef5fab"],["/2021/09/24/第三章悸动/推课表时间/index.html","c00c9de58a3cbdc366fa770ca1d56467"],["/2021/09/25/第三章悸动/开会的小插曲/index.html","f41c4869f7b068a3fbacc73d4af2609d"],["/2021/09/26/第三章悸动/溺水/index.html","ec24063d847e95a6258d4372a65f9344"],["/2021/09/27/第三章悸动/约定/index.html","aea0e9eeededf4cd15ec165fe6b216f6"],["/2021/10/03/第三章悸动/女闺蜜/index.html","aa8754aba524928e8dac99749968a191"],["/2021/10/05/第三章悸动/持之以恒/index.html","78fd5df28d19e5667111f8e9696bbf59"],["/2021/10/06/第三章悸动/想看雪/index.html","24dd06adc14034706c64de325cf72765"],["/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","b292d70bf1226b7e373bf64e33441e00"],["/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","da291aab09b232b27d17c5f743a78930"],["/2021/10/21/第三章悸动/同频共振/index.html","8a3500c2c4fd10b15e536ae92dcd86b8"],["/2021/12/09/附件/第一封信/index.html","dce2f71aa74da666b485281b54a3cd07"],["/2021年目录/index.html","4c6df200850e4004619463a5165e64b2"],["/2022/01/01/附件/第二封信/index.html","3931e1a40c59ccf38c8ac0d3f2a3a386"],["/2022/01/16/附件/第三封信/index.html","a518cd4d77ed8f050259cea23c692004"],["/2022/01/31/附件/第四封信/index.html","5c4e10b7d3e263fbf8528d30772043db"],["/2022/04/06/附件/第五封信/index.html","ce3780f15b067b820ac8053b8501972a"],["/2022/10/23/番外/喜好篇/index.html","15ea48061ed5058e129096c892df04cd"],["/2022/10/23/番外/重要日期篇/index.html","dee6d228e9d1012c0b09d3fe3036d528"],["/2022年目录/index.html","adfb984966f4e56f9875529c19770d44"],["/2023/02/13/二三年/二月/看海/index.html","b4f0b9f98db442b6ae4c0fe74b061f2a"],["/2023/02/18/二三年/二月/去机场/index.html","e1207c4643361e9ac25c37c5e486bce0"],["/2023/03/02/二三年/三月/对感情的一些看法/index.html","66c4c7357a2815dca0e9f5b34bc32e49"],["/2023/03/28/二三年/三月/一双鞋子/index.html","6acfab0988c72083d4dae99b9315a347"],["/2023年目录/index.html","d0f009448954b29ea0f5dfc695c60a44"],["/404.html","ce4dbd96c86be23c46496d280a740d62"],["/404/index.html","c6aebc1b460f80c1ffe1bfa8834e3f75"],["/about/index.html","62122dac5bdfb6fc67a550d9682ef46e"],["/archives/2021/08/index.html","d89eacfabe0bcf0f1302c1513308d93e"],["/archives/2021/09/index.html","001667f2da9440bfa39d1328ab9ddbdd"],["/archives/2021/09/page/2/index.html","89145122cbb169c1cc32a2afea5c6d71"],["/archives/2021/09/page/3/index.html","95766e99957913cf8dd0dd3b1c93899e"],["/archives/2021/09/page/4/index.html","2850ae83f9db5e8754ab9fc0d4f51a94"],["/archives/2021/09/page/5/index.html","e9ba7513971324f5f509716eea04e411"],["/archives/2021/10/index.html","3123f07aaafbc7faac6eb643f5006ca1"],["/archives/2021/12/index.html","99216b58cc00e2ccd67a2aa0ffa683fe"],["/archives/2021/index.html","52fe5abd5a81ce330fcfff5e5902a1d6"],["/archives/2021/page/2/index.html","652c77b3c0a8b7aae3eb409beda542a5"],["/archives/2021/page/3/index.html","8ae237c8f78c9d22080b5b70a7eb637a"],["/archives/2021/page/4/index.html","58877cd9e22f0faf0e0b50329f349ade"],["/archives/2021/page/5/index.html","b2bbe0b0e1bf6e712e27f683a7d8d328"],["/archives/2021/page/6/index.html","9bd1d3a334008d5866ff0a7453f6779f"],["/archives/2022/01/index.html","6986cfbcb5f18ab381fa397234eb694c"],["/archives/2022/04/index.html","3edeeb775b58e4a00d1b5e35aa67f588"],["/archives/2022/10/index.html","9724c8184c7cb93509d9e55547d810c3"],["/archives/2022/index.html","3de181aeeefd27b8c9525df84c035ced"],["/archives/2023/02/index.html","2edf92d64d39353c3ac4557236545c6e"],["/archives/2023/03/index.html","e2baf9ff92ae357c1adba236f9b1bf19"],["/archives/2023/index.html","b360957f4b306d8916214ac701b21c29"],["/archives/index.html","7a74bffa9dc2f76a52fa50e2821cac0f"],["/archives/page/2/index.html","7c861cc0cc1fa7422877308df99e7e8b"],["/archives/page/3/index.html","5c69fc99d9e5473d38c7baa366041843"],["/archives/page/4/index.html","862b7ce684cd1847dcd380b3ca935ae8"],["/archives/page/5/index.html","2fc54783f47ca89259e0f433199bbeb8"],["/archives/page/6/index.html","99e7599a5d8788391c08a26c824e9d92"],["/archives/page/7/index.html","50b7732d1c25d44b9ef2bd66909b64c5"],["/archives/page/8/index.html","e3b2bdaa1dd679af4774d452b2f959a9"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/2021年九月/index.html","41637c52811324433d79c50787e6a83f"],["/categories/index.html","b3cf59291d4ce004966db3e05b44aba9"],["/categories/二三年三月/index.html","9e1ff06606681b9db46245ed46e24cce"],["/categories/二三年二月/index.html","af665925a521962a6825349375029ffc"],["/categories/前言/index.html","6f48b209127d41dfae0a10f5e5e13735"],["/categories/番外/index.html","cbc7b860275b1ca02b5f1e7cca852eb8"],["/categories/第一章-初识/index.html","f55f148cf11263c76e7409103e1dffe4"],["/categories/第三章-悸动/index.html","65d7a5e18c33c3dc532c7c1a90906415"],["/categories/第三章-悸动/page/2/index.html","3de66a579aa2b7d149b0f9473b0e5dd9"],["/categories/第三章-悸动/page/3/index.html","8954a54e3180deb3c4b057bfb60f5d6c"],["/categories/第二章-情愫/index.html","63e2800ced13a5be73b5d07db7e06cab"],["/categories/第二章-情愫/page/2/index.html","00d4105e1da42c7d4def172a5298b55c"],["/categories/第四章-发展/index.html","ae9e89417b0b071f41e2206be1302559"],["/categories/草稿/index.html","57d6047909de02ab3b080151ee927c3d"],["/categories/附件/index.html","91eb79fe736a01a51b359f2a1bda7cbc"],["/contact/index.html","f287d9aa7a7de63563e016c41676d05b"],["/css/index.css","5e2c8bbb7fcc4dcf1dea5740d5b71d63"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","0d283b71b7babd961762d898a1b62aeb"],["/index.html","cc34ee3befc1b78bcad580c295f6eaed"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","762305dffee2492b6dacee7a8fb450dc"],["/music/index.html","bc2bc4f31d547be7fcc9daba2379e9a2"],["/page/2/index.html","b4b1ffb1f64d1867bc5127256ba2c149"],["/page/3/index.html","e4d85a20d57e330a3aa6c04e26c3d57c"],["/page/4/index.html","f05807c7c379f6daed63173a6192aee3"],["/page/5/index.html","9ce1b52775882f0b01ecd28f0faf7071"],["/style.css","5e2c8bbb7fcc4dcf1dea5740d5b71d63"],["/sw-register.js","afc8dea5f49c6bdf411772c3eb72265f"],["/tags/2021年九月/index.html","3fd51574d5580bf2042d7fde4fdcaa62"],["/tags/index.html","0d08550f3fbe4729e26d2e220c3e3051"],["/tags/一百天/index.html","31d79112e0d7c21eeaee90b33ebe3749"],["/tags/二三年三月/index.html","8fe4cb4fed34e446dff7cf6169b19f9b"],["/tags/二三年二月/index.html","237c1dbc0fe902bb891fa7dcac3e02f5"],["/tags/信件/index.html","35fc03a6d200ed338365a1af58c828fb"],["/tags/喜好/index.html","0c0b920c6ea046b06fab497977d0d292"],["/tags/想念/index.html","d892c143f6b61d5e19172337f714a21f"],["/tags/故事前文/index.html","7f0ec4413b33d9a82ce00f5a36dc9bab"],["/tags/春节/index.html","901a18526df89e51693c6daef7bd1939"],["/tags/生日/index.html","4b6ce1c2063f4b636091c08d3a5f75ff"],["/tags/番外/index.html","49a6accdb281b06242820a9005f22831"],["/tags/第一章-初识/index.html","6b337fdbe07f1b6ad99f54ade5a8a530"],["/tags/第三章-悸动/index.html","69f296a88d4354508866de9cfe164ec2"],["/tags/第三章-悸动/page/2/index.html","d0013bd6450630002dfe76e9dae578f0"],["/tags/第三章/index.html","58f55002031a398186816738f408ba86"],["/tags/第二章-情愫/index.html","c0829558ac9414b2c6cbf129cfeb5a4c"],["/tags/第二章-情愫/page/2/index.html","2c9a02dc0c7261da28e04268dd76548c"],["/tags/第四章-发展/index.html","ee33a568e87d7398d1e9a55992213985"],["/tags/草稿/index.html","83be9f5b07a24cd6441872764af6cb7e"],["/tags/跨年/index.html","70c59850c40a457580666024ae397820"],["/喜好/index.html","c1dd8fa84b66438444dab65d8e6254e9"],["/她和我的照片/index.html","c07907341fbbea2230fa32023a0c8187"]];
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
