/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","3910f8d541d9f4d4dd0bd9b6baa04b49"],["/2021/08/25/第一章初识/破冰大会/index.html","b68a9971f66810f3f07d787c39689135"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","5bbcf50e7d4bcce9585ec06d7f9972fb"],["/2021/09/04/第一章初识/开学/index.html","318935e4342e90c9cf7050dc80fd306e"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","5ad2a9628192bad48ddc00d5cc0080b1"],["/2021/09/10/第二章情愫/有效择偶权/index.html","8939d848b00c4128f96b45f03cf0b7e6"],["/2021/09/10/第二章情愫/本章概述/index.html","c2e00a41149797915149965fa65f37a3"],["/2021/09/10/第二章情愫/鱼塘/index.html","946f3e639e62d4f0a4ee98a3cdf4b4f5"],["/2021/09/10/草稿/草稿/index.html","4f44bb7358cd484acbe51f10a98df05e"],["/2021/09/12/第二章情愫/死缠烂打/index.html","b3cda6d09a0c20d3c2f351242ed9753e"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","5f738ba53dd5a77a39812e36af790930"],["/2021/09/15/2021-09-15/index.html","5c7d1452cbde1e9dc4fcf1a6b557cc10"],["/2021/09/15/第二章情愫/微信好友/index.html","60a0f0ee8939f5b1d4b03fbba9b62aa1"],["/2021/09/17/第二章情愫/中秋月饼/index.html","7fa78923930e0afb073d332c3d037688"],["/2021/09/17/第二章情愫/吃饭/index.html","f668b8d4a09a3978400e37032e5c90d1"],["/2021/09/17/第二章情愫/官方认证CP/index.html","ab5cf2e2a7f711888f0809d08517531f"],["/2021/09/18/2021-09-18/index.html","1dddb57e4e431301cd5101818dad7f85"],["/2021/09/18/第二章情愫/续上火花/index.html","338f90e973a80714fca84bdb5da296df"],["/2021/09/20/第三章悸动/袒露心意/index.html","61a7850203b35ebca7fffa907fd1187a"],["/2021/09/20/第四章发展/草稿 - 副本/index.html","6c706f022ffe4ac0bf18e12fdaa35107"],["/2021/09/20/第四章发展/草稿/index.html","7335b2de7e60ece458015f05d2708970"],["/2021/09/21/第三章悸动/中秋快乐/index.html","ae5ae6f4dc3ab75b0eba48bf4f326397"],["/2021/09/23/第三章悸动/特别关心/index.html","aae6d5ec1e02d1ffedebdcafa48ad9f1"],["/2021/09/24/第三章悸动/推课表时间/index.html","3a3202783de32935cab356f69b81a42b"],["/2021/09/25/第三章悸动/开会的小插曲/index.html","79e50c772f5bbac10645a1c765d5c5fb"],["/2021/09/26/第三章悸动/溺水/index.html","848a24ec77dc6e27e9c3c6a31ca388e7"],["/2021/09/27/第三章悸动/约定/index.html","9a4742c185d4a4aa399e5076f0562866"],["/2021/10/03/第三章悸动/女闺蜜/index.html","262c8174f510b6f1be975a082237fa11"],["/2021/10/05/第三章悸动/持之以恒/index.html","b7d84512978ff148203e923c2f7b86ce"],["/2021/10/06/第三章悸动/想看雪/index.html","570a855a382af0f8164d0566c6aa532b"],["/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","cb6f3c3355d02f89e942b7bd23ac8ad8"],["/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","7837226fda576f17c18f95c07dae412a"],["/2021/10/21/第三章悸动/同频共振/index.html","580bb3fc9ebb4b95e25d17a3a9309c06"],["/2021/12/09/附件/第一封信/index.html","15b563b16c24284926a5f9e9a4ac5c10"],["/2021年目录/index.html","10fda548a0a209a94372547c09da850a"],["/2022/01/01/附件/第二封信/index.html","662fd8093f33437d319671dc2ccc85db"],["/2022/01/16/附件/第三封信/index.html","6bee4336fc9d7aca2eee0627cd4aa96a"],["/2022/01/31/附件/第四封信/index.html","bd29e3f79c8fa1c328f92fb3d2edd6d9"],["/2022/04/06/附件/第五封信/index.html","84116e1eb2163f5e3d5858701d0bdb5e"],["/2022/10/23/番外/喜好篇/index.html","9d00bf9c1d93e7a05b7a0080cdbab674"],["/2022/10/23/番外/重要日期篇/index.html","e0d38f54262faf725111f40a7f2e2034"],["/2022年目录/index.html","835f33c8b7cc94bc7a7e986c99e461ec"],["/2023/02/13/二三年/二月/看海/index.html","40bf7005bf33d26cab3c036f4ff0dc56"],["/2023/02/18/二三年/二月/去机场/index.html","b9836cbddea3c4fa13ac6c6893a298e9"],["/2023/03/02/二三年/三月/对感情的一些看法/index.html","c8d7763a644335e977c6fe57eb42835f"],["/2023/03/28/二三年/三月/一双鞋子/index.html","fe660c4532ea0b7fc95a1fd377aae08f"],["/2023年目录/index.html","7e7192a9c2d151c12f55aa292cee5a77"],["/404.html","bead26a34fe07ad126e001d9e75eb456"],["/404/index.html","bcce6633a3181bd3bbdaff013d203598"],["/about/index.html","f5517c6e2f2ce6d8f5e52c39d4ca9ed1"],["/archives/2021/08/index.html","64580ea5583cf8929d13bd85b263f109"],["/archives/2021/09/index.html","6d67dc312554e7703bfb3d2ac340dd57"],["/archives/2021/09/page/2/index.html","74d435bcd27d24d0011b4e9b142fdb89"],["/archives/2021/09/page/3/index.html","4c86447aef0635ee39bb6c452abe9be4"],["/archives/2021/09/page/4/index.html","f0ddb8965b440447766fa28bad04d067"],["/archives/2021/09/page/5/index.html","97b8bce5e8a289d736125dfe4db2f02e"],["/archives/2021/10/index.html","8ef0c1dcc3872af875519a0696e762fd"],["/archives/2021/12/index.html","42e7717b42a00aba1bbaab04b43dd09f"],["/archives/2021/index.html","c509ab7332888bc81a2c349a79fe9527"],["/archives/2021/page/2/index.html","7e723a4e3dcf6737805fe68544bd254c"],["/archives/2021/page/3/index.html","5195d8e4d73b9f7da4b6cec0fc3828b3"],["/archives/2021/page/4/index.html","9f863c236fd95c4df1e7cbce13b15a07"],["/archives/2021/page/5/index.html","a181811bd4dd5d27fd3c6fcdd2a0ae7d"],["/archives/2021/page/6/index.html","2f00273eafc51129ad2a536be6c959e6"],["/archives/2022/01/index.html","73ac1d61a490cc584404cdbfb21c23b8"],["/archives/2022/04/index.html","e6d314e9f2acb79ae2597f61a2719c51"],["/archives/2022/10/index.html","e7b8cb2fc7fb4563eeb408511f6ce189"],["/archives/2022/index.html","4fb42d6635b8db341c7e215e4e1daf47"],["/archives/2023/02/index.html","6cc05e00291b91782de00c365b07fb81"],["/archives/2023/03/index.html","2202c6f0395eff70ae343ff82c55210d"],["/archives/2023/index.html","aa838dd55094f8dfccb7ea63b5f75900"],["/archives/index.html","284771f91f7731a3e9e8ace595d7bd82"],["/archives/page/2/index.html","22c0cda569f0021aba6eceff90c9f0be"],["/archives/page/3/index.html","2a073937331c3932a85f6772f1b372cb"],["/archives/page/4/index.html","75e45610165addd8890b48f7120a41c9"],["/archives/page/5/index.html","1ec8355b7a2304228515fb3cffa398c9"],["/archives/page/6/index.html","81f8dd3ead00b39d40faa0de50cabeb6"],["/archives/page/7/index.html","f848e1336a0106524043468a55b73ad0"],["/archives/page/8/index.html","9d2d8c33178aca087a5d3b84453ae2d7"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/2021年九月/index.html","b5745b908ffb4259b03c4e366892add6"],["/categories/index.html","a503e218954252f6c15df9ebc340cf13"],["/categories/二三年三月/index.html","a3db568c355088d46320c394db847e5f"],["/categories/二三年二月/index.html","f88b9bf9848abc8ba40b9e1d8c4c088b"],["/categories/前言/index.html","0ccff46548be4afaa8c38bde885603f6"],["/categories/番外/index.html","2523f859b77de4ce990f91d623ba6b6a"],["/categories/第一章-初识/index.html","c3134bac52b1665ab21b54e952d27cb5"],["/categories/第三章-悸动/index.html","19b11f2330de60493bcaa2f15bd6e67d"],["/categories/第三章-悸动/page/2/index.html","ac6930fa58c3829e00669a08fed18fa6"],["/categories/第三章-悸动/page/3/index.html","c0df87fdde42b07977d989d50a2538dc"],["/categories/第二章-情愫/index.html","a5bdfffa6700dbbe77f92d8ef0417731"],["/categories/第二章-情愫/page/2/index.html","dd71888e49d631f65a8cfded44914adb"],["/categories/第四章-发展/index.html","a3ddbeed99c26a42a8fc4a395e93a491"],["/categories/草稿/index.html","482414e08242e81056a7a6a9be40e209"],["/categories/附件/index.html","d9defe38a80e22c364a043db646127d1"],["/contact/index.html","37731e20d3e2e3bad10f7f5bf06932ce"],["/css/index.css","5e2c8bbb7fcc4dcf1dea5740d5b71d63"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","0f28098dfdd95756012134d20493aacb"],["/index.html","96529656c72d767f3e0f352bb03618be"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","0a0a3f50915d04f1850140709db81413"],["/music/index.html","e898db7908ca3b2d29494742b740b745"],["/page/2/index.html","550a4af6b7029f95ce84b1f0ffb31681"],["/page/3/index.html","2d46181a70fd9550f778a2aed1d2787e"],["/page/4/index.html","2bda82068fa678a1eb5bf5e517cbf77d"],["/page/5/index.html","3f078a034e6e01f60b58bf64da5ecdea"],["/style.css","5e2c8bbb7fcc4dcf1dea5740d5b71d63"],["/sw-register.js","99f2ffad5007f709c3d2cf35e238c145"],["/tags/2021年九月/index.html","28bccb09460fb756d9fd2c1ef1188d74"],["/tags/index.html","828cf4fab5b798dfd822b7f8a164c2d3"],["/tags/一百天/index.html","a0263d2453865df5607f5072d09a619c"],["/tags/二三年三月/index.html","43ed02275475aae3fd2761e4aa140b2c"],["/tags/二三年二月/index.html","9e1d24e7c4af93a2139f29980f1b5d8d"],["/tags/信件/index.html","35597f0407bd5268da70d1300fc6d9f7"],["/tags/喜好/index.html","eb2204256f6e8cf40a6de0588c654900"],["/tags/想念/index.html","bc409c37ce3aa78db2c96656fd22fb0b"],["/tags/故事前文/index.html","5f2044a069333df046c397a377446852"],["/tags/春节/index.html","e3fad63847d8b0ab87e6e0bde355ad9c"],["/tags/生日/index.html","2a793fcf8e33fe1b460a8632fdaaa356"],["/tags/番外/index.html","415e708cd9de3be7906c4f107d0f6f23"],["/tags/第一章-初识/index.html","503a85db40a75e8ed5b383093ef7092b"],["/tags/第三章-悸动/index.html","4f48fb287c5425ef95805e8ae02a37a4"],["/tags/第三章-悸动/page/2/index.html","2b37e36b34773a87640541159cd381ae"],["/tags/第三章/index.html","51983954cbb404d50bb541ca728c20f9"],["/tags/第二章-情愫/index.html","cd7fb544bd56dd20c0d5c66963ceaaa4"],["/tags/第二章-情愫/page/2/index.html","788d845784bd7d32fc842d703e075edd"],["/tags/第四章-发展/index.html","93b5f0d1eb78184bdff5918794725694"],["/tags/草稿/index.html","737489047def2c2eaddb161d6f98dbf7"],["/tags/跨年/index.html","39505d1969ad9222c9126879295ea8bc"],["/专属浪漫/index.html","5929e4782ab245643493146f556ef5aa"],["/喜好/index.html","f93b91b3d9cbba5d876ec5ee8361a9a2"],["/圣诞树/index.html","4a44670b53dc23e5536ba217c37cf906"],["/她和我的照片/index.html","b97c81eeabd37e14e039801d377ebf4b"],["/聊天记录/index.html","16ca3e01402cbb7a2de48d0506d8fd6b"],["/聊天记录/小九/index.html","08d8d1088c9755bf5d51dccb17eea3b5"],["/聊天记录/小九/女生.html","e5d0d6d81e88b4299d2b5c81b849a83b"]];
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
