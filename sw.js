/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","209a7c0942c12b0887d96f4773f5def3"],["/2021/08/25/第一章初识/破冰大会/index.html","83c3f4a75ac7fe45df0caf886723cbfb"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","4f64aefb080570fbc0f9e6c6807f35df"],["/2021/09/04/第一章初识/开学/index.html","7d1187f06596be61bbf1514eb0d8ce9e"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","49542e8e954ce32b11266c3eab280a68"],["/2021/09/10/第二章情愫/有效择偶权/index.html","66d213ffd33d0371144801b9c7e14c79"],["/2021/09/10/第二章情愫/本章概述/index.html","1c91d0abf678ad0fa8c0491c5eec3f5d"],["/2021/09/10/第二章情愫/鱼塘/index.html","18cb73705d3684ec82cd7b119ed86b21"],["/2021/09/10/草稿/草稿/index.html","66b40695361444497f97f057fca83582"],["/2021/09/12/第二章情愫/死缠烂打/index.html","82c91004a9b76c7eac0f7f4d0be29241"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","2117a696506592a2c483fca34828cf14"],["/2021/09/15/第二章情愫/微信好友/index.html","d98eeab5623581009612d37990a7e21d"],["/2021/09/17/第二章情愫/中秋月饼/index.html","dc921146f54c98681161161afb8736de"],["/2021/09/17/第二章情愫/吃饭/index.html","04845393c27ca3a80844d9526af0db1e"],["/2021/09/17/第二章情愫/官方认证CP/index.html","3ed895542843bb9093a8e8cc8ce3e42f"],["/2021/09/18/第二章情愫/续上火花/index.html","85f1bdb8a8db49bf478270d6eac7949f"],["/2021/09/20/第三章悸动/袒露心意/index.html","190bba450082ad4afcb03cd92aac1449"],["/2021/09/20/第四章发展/草稿 - 副本/index.html","aa9c753f549933b24c4f42b184d45fdf"],["/2021/09/20/第四章发展/草稿/index.html","be7059aabe040c3099f78cdfb997be0d"],["/2021/09/21/第三章悸动/中秋快乐/index.html","70c1782822ac69418e892d75589ffcf2"],["/2021/09/23/第三章悸动/特别关心/index.html","867a701bc4f75223847f75f987602617"],["/2021/09/24/第三章悸动/推课表时间/index.html","f1f3d6a87264d5e13121875d1caeb31e"],["/2021/09/25/第三章悸动/开会的小插曲/index.html","97893cbead03b3f55d7f17147518391a"],["/2021/09/26/第三章悸动/溺水/index.html","e23da9181ec4c91172d40b7cddce431b"],["/2021/09/27/第三章悸动/约定/index.html","de33a9f3fc6a182d9b63f7337ed5dc94"],["/2021/10/03/第三章悸动/女闺蜜/index.html","aacbf4945f2a62f4c9eed9d63097d038"],["/2021/10/05/第三章悸动/持之以恒/index.html","0a8c947e8aa91a5ab053f2a9c314dd1b"],["/2021/10/06/第三章悸动/想看雪/index.html","522ba88df07dc1ced6024d2f0bed9d8c"],["/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","5dc84bc5cb20e92d79fc43530bec0b4f"],["/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","c0f73f036348d96293f6134649876312"],["/2021/10/21/第三章悸动/同频共振/index.html","fb59917cd57b585ef247bd9934b583cc"],["/2021/12/09/附件/第一封信/index.html","fd677fc51af6e7382d7131227ed6dd11"],["/2021年目录/index.html","85d7fc1bc82785adc84bdfdf2f5bab60"],["/2022/01/01/附件/第二封信/index.html","dbf254c349d7b30da08f1795df522862"],["/2022/01/16/附件/第三封信/index.html","ca0ac0a2c7fffc21415f1890962580b8"],["/2022/01/31/附件/第四封信/index.html","27b88816005a5f26817ef867e5b1edbb"],["/2022/04/06/附件/第五封信/index.html","846e4e1b07d66d335ed27e7ddc990794"],["/2022/10/23/番外/喜好篇/index.html","5f93ad122ea57aa687342d7ac01eb34d"],["/2022/10/23/番外/重要日期篇/index.html","d7b1a93af8c4832843f4b932f1ace7d6"],["/2022年目录/index.html","a126f9231696a25190851254db0f48ed"],["/2023年目录/index.html","bed8647785be08b037da6bef8d3ce573"],["/404.html","80ef6b55d3811adf80ef0c66bad29ab8"],["/404/index.html","da11135f28dcd9cf6b30425474e81bdc"],["/about/index.html","1564154e7a986184099ca8c7e7fc1a59"],["/archives/2021/08/index.html","d7890dc9480cfcc0ebb46b45f928eb7d"],["/archives/2021/09/index.html","7228bf1e5ea952af43f2ebe2165ff2e0"],["/archives/2021/09/page/2/index.html","9e0389e0d96e86317c7f101a60fddaed"],["/archives/2021/09/page/3/index.html","960b02facb3de7971bdfb7b93c3f451a"],["/archives/2021/09/page/4/index.html","5492f479c102325db390dd18987d3d03"],["/archives/2021/10/index.html","89efa6ad9e91d5e8a4238b08a1337467"],["/archives/2021/12/index.html","0f0bcd310eb6e0c0b5083fb28a528785"],["/archives/2021/index.html","2315b3e7a29f1c6d5783a051f98c1e27"],["/archives/2021/page/2/index.html","1d833b62138ecbd0e5644ba123844e8f"],["/archives/2021/page/3/index.html","1007c34feb9feb0aebcbf2e02dd496da"],["/archives/2021/page/4/index.html","7f8631c73eb4d6c7a78867cbd5faf0f9"],["/archives/2021/page/5/index.html","62048de1351cb9568dd4f42e949a3477"],["/archives/2021/page/6/index.html","2119b5b40b9f041107161d591565cb1d"],["/archives/2022/01/index.html","4c5324700b66b0b214a0d351f034db7e"],["/archives/2022/04/index.html","20ce56e9a256d11fac6e41d390050235"],["/archives/2022/10/index.html","c3e587c4c954ab6f98fa329afa9ddbf9"],["/archives/2022/index.html","98c4cb55d0607b8f4998fc03fb41ea35"],["/archives/index.html","debe472ef1ed7c2dfda1e078bcb1bf7a"],["/archives/page/2/index.html","d291beeb529b6c0f2527868a0cfd9c1c"],["/archives/page/3/index.html","6138c6f68f6405161b9325e262d16c32"],["/archives/page/4/index.html","dcabcdbc500407b8ae6363aaf887f7c7"],["/archives/page/5/index.html","bdfed74d5ab1d937107d24e0bed46e27"],["/archives/page/6/index.html","84adaab0da80002489b6c9bd17552796"],["/archives/page/7/index.html","d79c101034655969cba3ad69bde5643a"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","50fc6cc2c7202303ac23a091126e082c"],["/categories/前言/index.html","a2a4eaee2a5007c0201d2b1b08d3dcaf"],["/categories/番外/index.html","85dc3f450efe92ee9d9fb46de89c3501"],["/categories/第一章-初识/index.html","d42c599da7009cad5c52229796fbed2e"],["/categories/第三章-悸动/index.html","55316822247b8eb5637bd557f46f0a94"],["/categories/第三章-悸动/page/2/index.html","3bfe15b89af675eaa636910fda38f3b7"],["/categories/第三章-悸动/page/3/index.html","a2991cc3ddb97b13cded936eaa76711a"],["/categories/第二章-情愫/index.html","58fcda5c34fada9fdf9dd05c2b8b7662"],["/categories/第二章-情愫/page/2/index.html","b0963e3d43ca304946c4e115ea1a7672"],["/categories/第四章-发展/index.html","3b47f5791ae8f83710614a02563417dd"],["/categories/草稿/index.html","dbe9b8a63ecbb951e41388e75ca06986"],["/categories/附件/index.html","2ca82933c8b98cf7bfdad69f386b903b"],["/contact/index.html","d11f65ac6ac7d6b2f48cb1842f97183b"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","a1863fa934f25ba7f6f18edb5f6034ea"],["/index.html","73e3440513cc56d8121f5c50713d73c9"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","affdfcd1f4d86e8cb7847c09ef7cb7d4"],["/music/index.html","6be979faa2882921bcefe79151107bb8"],["/page/2/index.html","c4ea8fb91126f94679541a2a764289a5"],["/page/3/index.html","8aa4d83302da5fb6d7893a5042bd83b2"],["/page/4/index.html","a0d2cc6f8f26b57bcd706f9e8ed98b5f"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","d90a470471a26736cf5956e7da87778d"],["/tags/index.html","cb6ba72f88fb8646273c51395d84e793"],["/tags/一百天/index.html","837d96151ec6ffbf01cc462eb0f0c6e4"],["/tags/信件/index.html","7b0771ec19f2b06121ce131e84265dab"],["/tags/喜好/index.html","cd23754cd86ac330e2d0d4a90cf9f671"],["/tags/想念/index.html","77def6842313b1ccdf02d01169117063"],["/tags/故事前文/index.html","3a62b468c905aed77949901f46ed170e"],["/tags/春节/index.html","ef5c1dff3adb9ffc2adde8f49e334041"],["/tags/生日/index.html","f068cbf99ff580896419b90929442e05"],["/tags/番外/index.html","c480886a50fca4582c93b62937e52157"],["/tags/第一章-初识/index.html","4748641b793c772bc6c72a018c76b318"],["/tags/第三章-悸动/index.html","7cc688aa940d7a5489ff965a039b1b4c"],["/tags/第三章-悸动/page/2/index.html","0eed8d8f9ad17a04b7b0dc3bf4b43837"],["/tags/第三章/index.html","333490e51c0ac94dd363b7953f10eafc"],["/tags/第二章-情愫/index.html","3af22a44d0bd96f648468d544e3c515c"],["/tags/第二章-情愫/page/2/index.html","d697445cb56d71625454a9aa94f7b09a"],["/tags/第四章-发展/index.html","8c54ef3a299d008908e256f2c387d625"],["/tags/草稿/index.html","4348abc996d2670cc324f500aa095d40"],["/tags/跨年/index.html","0a81cb484cb8876c4ee23cb9f4fff43a"],["/喜好/index.html","028f35288839fd99a1b247b97d3913da"],["/她和我的照片/index.html","99f83a74be04359473bda2b07a6a660a"]];
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
