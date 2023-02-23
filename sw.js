/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","96e3cbb9bccc230e038a7ff1b04ff1d2"],["/2021/08/25/第一章初识/破冰大会/index.html","0d653fa4d2af45716987e4f86b9b9e91"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","4abb60ac4032b8b0073c6ca6180856b9"],["/2021/09/04/第一章初识/开学/index.html","dd3ad9db0b88c85df3a3647d47fbcc08"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","8e499021845871a75648fc9dfa92d410"],["/2021/09/10/第二章情愫/有效择偶权/index.html","9e30ef421b4b6b9121abd97b954e04ee"],["/2021/09/10/第二章情愫/本章概述/index.html","aa3542d0a6cafe140952974bd015515b"],["/2021/09/10/第二章情愫/鱼塘/index.html","5b4303184002a21a67080b878d2cd561"],["/2021/09/10/草稿/草稿/index.html","022787169e081608555aa85966e1290f"],["/2021/09/12/第二章情愫/死缠烂打/index.html","5497066f86f5e7bc355f6d3a6229fd72"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","cf2d8cd0818a9225873e9277386d436a"],["/2021/09/15/第二章情愫/微信好友/index.html","0d18f284b2992793e930b90276863c33"],["/2021/09/17/第二章情愫/中秋月饼/index.html","86396412bccef167f54ee75c3417573c"],["/2021/09/17/第二章情愫/吃饭/index.html","eb67aa162c9df190aa0593234ff0acee"],["/2021/09/17/第二章情愫/官方认证CP/index.html","2543503c35e1adf0bf6c7f8588c56d45"],["/2021/09/18/第二章情愫/续上火花/index.html","6f87fb1cf121210a3e9f3ca5954e2ed1"],["/2021/09/20/第三章悸动/袒露心意/index.html","8e17e2824dd845c1bef467397f87e1cc"],["/2021/09/20/第四章发展/草稿 - 副本/index.html","7e3c48e4e50c261d6ef023bbad6a5a6b"],["/2021/09/20/第四章发展/草稿/index.html","f3023986e61f1a83c948a44cb84a0d99"],["/2021/09/21/第三章悸动/中秋快乐/index.html","5e1c902ccccbf008abcc4e36cd8caf6c"],["/2021/09/23/第三章悸动/特别关心/index.html","166137912a29b9086ba6eb1fca8c748e"],["/2021/09/24/第三章悸动/推课表时间/index.html","ec4dfd8d6b2c4091344e93f49e88ce70"],["/2021/09/25/第三章悸动/开会的小插曲/index.html","2d455028febdd92ef33aeec61a3e4503"],["/2021/09/26/第三章悸动/溺水/index.html","1589ebb92353d3100c6f1ea49b9225a2"],["/2021/09/27/第三章悸动/约定/index.html","3d4584e6a109287f95cfb22f1df302a2"],["/2021/10/03/第三章悸动/女闺蜜/index.html","d0d1fb77b4f86ae36f6705d6f40aaa34"],["/2021/10/05/第三章悸动/持之以恒/index.html","d22420accc5d68d3ce89c0339226b3ef"],["/2021/10/06/第三章悸动/想看雪/index.html","f85462298fcbacbbe8f80ff7779b224f"],["/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","133cc215ac32b7094eae074453f3c6b1"],["/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","0735f71d630601581fed5b764328201b"],["/2021/10/21/第三章悸动/同频共振/index.html","9e261d63021c16b330c9032d534118e9"],["/2021/12/09/附件/第一封信/index.html","aa50e02cdc3d91d0d6a826cb6a3615ac"],["/2021年目录/index.html","8dce3379352bae41a858aacb660e6633"],["/2022/01/01/附件/第二封信/index.html","1664c933126ca3928159500defd33243"],["/2022/01/16/附件/第三封信/index.html","1b8810a43cdff05a5bb7c1cfbc77ca69"],["/2022/01/31/附件/第四封信/index.html","7484bbf664e04b5c32cd5bc8aa60eb8f"],["/2022/04/06/附件/第五封信/index.html","089c0a31c218bb724ba91524971c3ab2"],["/2022/10/23/番外/喜好篇/index.html","cee917f3591cedb5953ce389cc06ef77"],["/2022/10/23/番外/重要日期篇/index.html","c557f941633373451489a8611e2137ac"],["/2022年目录/index.html","e89e3ee6b1fbc87505af24e9713f6447"],["/2023年目录/index.html","88307fd1fc4a536106c119db8d4ed7bf"],["/404.html","3c39bc7f689ddab19b88d09c457d3315"],["/404/index.html","dee8e3683ebcc3cda9620816b3a1ccdd"],["/about/index.html","676f2dfa9de54b7821f5938769619651"],["/archives/2021/08/index.html","7ab1f3e115f40ad4c32a041492f2b38b"],["/archives/2021/09/index.html","50f47c5f2416db1395536b2229f67b32"],["/archives/2021/09/page/2/index.html","8d2762f81c94f406c1b02a81de2a865a"],["/archives/2021/09/page/3/index.html","cafa895f3b20684d7d9ca39fc4ce7690"],["/archives/2021/09/page/4/index.html","f6e94f534895e7d0aa9dc1a329007063"],["/archives/2021/10/index.html","53ab851823203f3db60f196657de9e75"],["/archives/2021/12/index.html","bd1a91fe605837171f08a1238421c30c"],["/archives/2021/index.html","9afa9c0b9b8bc2d81cdc65f97ba571d1"],["/archives/2021/page/2/index.html","6f735a31e16eddb0142dfcb49f643305"],["/archives/2021/page/3/index.html","5c800f264b52f0cf34a1eadd8da0b925"],["/archives/2021/page/4/index.html","1ec66ce80f4bbe59c79d2f19df3da47a"],["/archives/2021/page/5/index.html","94752f132e13518014f993539dae1201"],["/archives/2021/page/6/index.html","7bb9d578d26928ead47db115b88a177d"],["/archives/2022/01/index.html","c5979a6c4e0ebb1ec4dbd8c663a0ad81"],["/archives/2022/04/index.html","0215c02b726044927f0ea23b801e274f"],["/archives/2022/10/index.html","693fca4c10f9808f073b8e25746d22c8"],["/archives/2022/index.html","1bc8f95f1feb8e25997de8e8f0315a3d"],["/archives/index.html","43f701bb5758eeb3e0dfc06701bba1bb"],["/archives/page/2/index.html","189830ca191f367639a46e448209560b"],["/archives/page/3/index.html","aec9e9491d9c63a331f673b42bde90c4"],["/archives/page/4/index.html","cde8bc0e2521603c774ec1501caa576b"],["/archives/page/5/index.html","871093f6efeff7af5b4d69a01cee8564"],["/archives/page/6/index.html","2cc774833b2d8a832ee8f12c8a5529be"],["/archives/page/7/index.html","85cf0a415c7ea13af04b51ff7984175a"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","ff23a81a7908d6806cb1e50a66fff577"],["/categories/前言/index.html","6f5b2e77ee12a31aa346b739d7b1961b"],["/categories/番外/index.html","b8f339ad3d0912ed5276172176fb2fe2"],["/categories/第一章-初识/index.html","17b3f527cd5651a6a859177e667a7d57"],["/categories/第三章-悸动/index.html","447af9d4ff4af44b38d9d7166be57c73"],["/categories/第三章-悸动/page/2/index.html","839506bd08cf47f8a159090ad15748c4"],["/categories/第三章-悸动/page/3/index.html","c077064927f82ff9d5633a86bbe540b5"],["/categories/第二章-情愫/index.html","75b32f2de5c3f8d9031d9443e9514abc"],["/categories/第二章-情愫/page/2/index.html","b7f5c035f1efbb85064c2b3001a25804"],["/categories/第四章-发展/index.html","d2ab245c33324408c137ef92f9106007"],["/categories/草稿/index.html","6df07d9fee905b0d091bd6146358196b"],["/categories/附件/index.html","25990ecfa9112b089ecae04bb180a2e5"],["/contact/index.html","3e29742150fa70cb18d67d58edcf8d48"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","dfbea58e988e724370529197972bec12"],["/index.html","f7ad399f89ff99abb672791722f08dbe"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","90520125ce6829e428829c42ac7cea5e"],["/music/index.html","9015593995dd7a5b6e4dc7afd5846c9f"],["/page/2/index.html","582621969ad24c648f4de153349e9ead"],["/page/3/index.html","1b98a2dfcdfd96972339d365b1999735"],["/page/4/index.html","5d43ed8edf4a30c9f1b728565590efbd"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","006f26199ef8ca93dda4f843aed4917c"],["/tags/index.html","3b62d1148784ebe4a7153e4bcdd089c3"],["/tags/一百天/index.html","6ddfe834a06f377a9b94bd957e4bb628"],["/tags/信件/index.html","882570ba91508882efe3d2f84921dd9f"],["/tags/喜好/index.html","58932216a5f94595836ff42a262c0b87"],["/tags/想念/index.html","c29e21c432827069e7a694a9f84e4bf4"],["/tags/故事前文/index.html","fc1c0f69f3142c26d7e46279f5e57ad7"],["/tags/春节/index.html","d2e166d913d12acd11c086af22c91986"],["/tags/生日/index.html","f387101a5f75de28fa1b0f1de8e97c8c"],["/tags/番外/index.html","52426f70c3988d7b6d604ed9f12b7893"],["/tags/第一章-初识/index.html","b903aace79e7247e82916a20afbe5a25"],["/tags/第三章-悸动/index.html","5c2c0a148c377164f29687a47c4a6542"],["/tags/第三章-悸动/page/2/index.html","9c37ec0afb2fc8fed6f2cdfb84e80809"],["/tags/第三章/index.html","e2346683eee51bb4b994882809b834d3"],["/tags/第二章-情愫/index.html","91a64c9510ada8f365d33e7216f04e10"],["/tags/第二章-情愫/page/2/index.html","7178c428d3c89f6eb4a8cb937fed52b9"],["/tags/第四章-发展/index.html","5439106d1bac33680dcd2e302c62bd0f"],["/tags/草稿/index.html","a239b9fc709e3c85607d3b224815c684"],["/tags/跨年/index.html","9220a833d8fde41e783e81fc589956f1"],["/专属浪漫/css/default.css","3622a6f748d5b9ec66c166fe7b23570a"],["/专属浪漫/index.html","2e2802cbe0ff3daef2696a3f2010d140"],["/专属浪漫/js/functions.js","e6e0812c427d4907d439f9e8958c4725"],["/专属浪漫/js/jquery.min.js","225212e809fb75d5fcd65505e9ccf65e"],["/专属浪漫/js/jscex-async-powerpack.min.js","82e37ffa7eee324ffe6ffcb36f81ca48"],["/专属浪漫/js/jscex-async.min.js","3a5687b9dd22fbc711ca6ca23c1d2823"],["/专属浪漫/js/jscex-builderbase.min.js","c5a78a202593f4ad27d9aa626e8cb303"],["/专属浪漫/js/jscex-jit.js","0aa32050c7b2339c495e7da9783a51e4"],["/专属浪漫/js/jscex-parser.js","fc61323f6b421cf2ec32b4218cf50511"],["/专属浪漫/js/jscex.min.js","583524034bebfb1dfb5ffbb0e858e65e"],["/专属浪漫/js/love.js","9fab8f24d541421284b5229e795deeb2"],["/喜好/index.html","10fc27f7b3bbce79ccdae69e17790938"],["/圣诞树/index.html","5e16c6df23596be7db7b3d98a96da407"],["/她和我的照片/index.html","c3f583bfd2364b855c484c0da0afa5d1"]];
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
