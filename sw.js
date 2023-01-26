/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","de30cd93bdcdf260439d669663ce923f"],["/2021/08/25/第一章初识/破冰大会/index.html","5c0e732f6e0de552f1c41170b132e2a7"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","c372d528fdbbe39a7c5f9aba05287f92"],["/2021/09/04/第一章初识/开学/index.html","9cc52b0b01b118796ea6cf571a3d2f08"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","2b5c6fe202a3eba836bfd8026bbadbf9"],["/2021/09/10/第二章情愫/有效择偶权/index.html","dd661f91d867a04f722b244539d3c16c"],["/2021/09/10/第二章情愫/本章概述/index.html","eb0fc1b7c688662a3c8cc408a6de45d4"],["/2021/09/10/第二章情愫/鱼塘/index.html","48c7180a6e89801d5aa112c62ebbc44f"],["/2021/09/10/草稿/草稿/index.html","b86faff7be2f49726f132fa63ae98a0f"],["/2021/09/12/第二章情愫/死缠烂打/index.html","b94061fcf5b7620413a8c8bbb5f6a76f"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","fbe13e991ea56658a8afb24255e6e858"],["/2021/09/15/第二章情愫/微信好友/index.html","b7909e2098c7eb4c94bccacbe152708a"],["/2021/09/17/第二章情愫/中秋月饼/index.html","3f9fca8370854e9e0a86c3d074ddada0"],["/2021/09/17/第二章情愫/吃饭/index.html","72e5a70661b6b7a0181f4fba96401835"],["/2021/09/17/第二章情愫/官方认证CP/index.html","3d0b3058ccc808c5e74693c9c175b9bb"],["/2021/09/18/第二章情愫/续上火花/index.html","1511fbf2b652304bc8f1e3456f04379a"],["/2021/09/20/第三章悸动/袒露心意/index.html","e2889268719490b0e564d26c0b0a60ff"],["/2021/09/20/第四章发展/草稿 - 副本/index.html","d5ba3ace136f45d55e17b636550452b8"],["/2021/09/20/第四章发展/草稿/index.html","be0a22a90ac11aa8d47c22b08e147a05"],["/2021/09/21/第三章悸动/中秋快乐/index.html","330bc228a707e7bdb08fdb8f25bb2442"],["/2021/09/23/第三章悸动/特别关心/index.html","6a126fc5591f3d7bd7ebbc202be08443"],["/2021/09/24/第三章悸动/推课表时间/index.html","188d2b7dddaae2b57b8be25f289e15f5"],["/2021/09/25/第三章悸动/开会的小插曲/index.html","29cc15b6d9833a2be66bec4253abdb64"],["/2021/09/26/第三章悸动/溺水/index.html","6a53998292b23afbd37773fa9a2b5d8d"],["/2021/09/27/第三章悸动/约定/index.html","da36014cb521e43fdcdcdb89d10b262b"],["/2021/10/03/第三章悸动/女闺蜜/index.html","08fe761f08c04551d4d223bd56774720"],["/2021/10/05/第三章悸动/持之以恒/index.html","b61e7d5866f850f6d597836ed2a9e223"],["/2021/10/06/第三章悸动/想看雪/index.html","faf6c0840d1c2b9fba48d4b01a1a4418"],["/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","ee195b8bacf8a3a1a25cb059a7a315b2"],["/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","5e1134a72cf555bb2986c674bb993f81"],["/2021/10/21/第三章悸动/同频共振/index.html","4c0dcfd945a966378452ff6ec41c3fa3"],["/2021/12/09/附件/第一封信/index.html","8b44d963c32a6fa88839d5499de0cf68"],["/2021年目录/index.html","96b18e4af3c68f0eb44f2ddacea12b01"],["/2022/01/01/附件/第二封信/index.html","73cbab808d7262bf4e70bf55f992b686"],["/2022/01/16/附件/第三封信/index.html","3f092c423a1a93a8f368b3184c631c54"],["/2022/01/31/附件/第四封信/index.html","6a06a45153f051db45aace47ac9bcd2e"],["/2022/04/06/附件/第五封信/index.html","b03ba064db1df50c00df04516e072894"],["/2022/10/23/番外/喜好篇/index.html","a0f708393f6c7c9906776839b0c7462c"],["/2022/10/23/番外/重要日期篇/index.html","4d2307880007434f470cfcc5faf9bb26"],["/2022年目录/index.html","d73e4234e54483fb44d8a4deff0d1b07"],["/2023年目录/index.html","6fa01caccb6cd2ee12e7044ba98edba0"],["/404.html","b31242618f898d2310f3d3df2c9f75be"],["/404/index.html","0c2c66b0e5fab1bec11ab9d953d865c3"],["/about/index.html","2d1f910e0bcfd2a574f722f85bb4e0a0"],["/archives/2021/08/index.html","90e131849e08650067eec45d9eb53c34"],["/archives/2021/09/index.html","706b178fcbc12e7d4515db517da58629"],["/archives/2021/09/page/2/index.html","b80b681478fccd6fe6d8ec605149aa40"],["/archives/2021/09/page/3/index.html","cde0b911c335f6be00792e67e17b488b"],["/archives/2021/09/page/4/index.html","49c01c7a61777c853abc6408e6fd00c9"],["/archives/2021/10/index.html","9c665509f5b11b441118a9d8e2fa65f5"],["/archives/2021/12/index.html","2dade81bbaf56eca6e52b99ec26a3a0f"],["/archives/2021/index.html","30ffccd25d193924d744112fd47a94d9"],["/archives/2021/page/2/index.html","aaca561f365ca3452a1ce07a40bc0ee0"],["/archives/2021/page/3/index.html","df80d14a296331860b77298334e9e31e"],["/archives/2021/page/4/index.html","2e53969d774745b8d4d39fb7bbd9e13f"],["/archives/2021/page/5/index.html","9f38b4bdcd857ce10497b3b695799b7e"],["/archives/2021/page/6/index.html","50f0a3f28d221c7f2231a3c0a8eccf65"],["/archives/2022/01/index.html","84d9ad80775b40149834920c41815277"],["/archives/2022/04/index.html","f61d8bb8beb524362cccb981f386dacf"],["/archives/2022/10/index.html","58706ba59d525abed375db4f0f649afb"],["/archives/2022/index.html","4db81dfa46b98cf166095cf2a8b468b9"],["/archives/index.html","421baf62a304939c9650383f24d97457"],["/archives/page/2/index.html","d11c302ad13d96e9f9782266bbd9bfa6"],["/archives/page/3/index.html","93502fccdd416b8b65be06bf03cb2c73"],["/archives/page/4/index.html","f269b56d437e844523d6aeb747e186a7"],["/archives/page/5/index.html","5dc7b41eb3521cdd575bbd844deb4c69"],["/archives/page/6/index.html","ebc44d48574980a99d4645cbe5794b8e"],["/archives/page/7/index.html","eefd4e0a4df07f96996e6d688060a82e"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","ff9fd0e89c76fb0f04356722e5bb122e"],["/categories/前言/index.html","3a19862374731de8a5aa01f1ef0dd05e"],["/categories/番外/index.html","6d6c095c0ded1e982a3441ee1740fe1d"],["/categories/第一章-初识/index.html","0cec8e926dc6bff27ad6d734e24132a4"],["/categories/第三章-悸动/index.html","ecde20081e168e7a440be69100e8113e"],["/categories/第三章-悸动/page/2/index.html","fc1e4c0fbec958581512173048df2805"],["/categories/第三章-悸动/page/3/index.html","01f125f011217ce0bdff895b72dacf44"],["/categories/第二章-情愫/index.html","8a3d62d79c0617a41429f3643dd4ec07"],["/categories/第二章-情愫/page/2/index.html","cef9002ebe6a6204511759c6cb02e8b7"],["/categories/第四章-发展/index.html","1342fcfe4e90aeaf1ae67d9a459e6655"],["/categories/草稿/index.html","60005afd4e8f996c78a203c8a494a387"],["/categories/附件/index.html","51161755b3730c146d929ad319e30935"],["/contact/index.html","13bd6a656c64ec172278cf0c2ddedc68"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","ed745a5f654685ffe28d3a8b9cb5e8ce"],["/index.html","c594e127a1da0bc5ea7383d22f6a06d7"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","96babcc37b9a397aed4296305d26ecc5"],["/music/index.html","49c0753698c6d1e78e97c0fb3ac519f5"],["/page/2/index.html","e37559ea07e0c2d444201470a3985931"],["/page/3/index.html","d86590a8e6015606324598ec3258e5fe"],["/page/4/index.html","af3ab53c854d7cdf15df0a4b53c23dc4"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","df6420e414e49517fb20e08ebf17298b"],["/tags/index.html","c670a5255f326119f76b5a79767aad7d"],["/tags/一百天/index.html","8441eafbe1be4105914c9cf21c8bada8"],["/tags/信件/index.html","b518ff160a72b45688ba627a95c69ac1"],["/tags/喜好/index.html","ea68e520a5b9cd22ec5f22e5801fac35"],["/tags/想念/index.html","38817cad65b4e0cf4b13bc1d14c1f3bd"],["/tags/故事前文/index.html","e168a142a0e76922d97084fb999ea477"],["/tags/春节/index.html","e4593f4b7476053d4542176d59bd25e8"],["/tags/生日/index.html","bb7345a0a8c90551b072168a3f5fd447"],["/tags/番外/index.html","b84958c26294eea272c0570082904f2f"],["/tags/第一章-初识/index.html","5a8102f28ff63bd14737e9cd82aceb9e"],["/tags/第三章-悸动/index.html","2c6e1258677966b8f75960bc55c29e80"],["/tags/第三章-悸动/page/2/index.html","2d00b99c7c591e52a0af30dff29e7763"],["/tags/第三章/index.html","a272058228225ce8b16eab406ed398f7"],["/tags/第二章-情愫/index.html","85e5813ceb525a1bc52832530bf40f03"],["/tags/第二章-情愫/page/2/index.html","df25d1279f4953525ad260ab293e8334"],["/tags/第四章-发展/index.html","045a164d2a034a18e9bda44ecba72833"],["/tags/草稿/index.html","63794f7ebb1c3a1f76ce6f12abce501b"],["/tags/跨年/index.html","639a9daa263f0269ba9038e1c0468610"],["/喜好/index.html","9986534d8407a5b87e34ce93762d3f1c"],["/圣诞树/index.html","5e16c6df23596be7db7b3d98a96da407"],["/她和我的照片/index.html","752669cc05ff1ab2515c09ddeb370a62"]];
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
