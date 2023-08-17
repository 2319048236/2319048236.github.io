/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/project/2021/08/24/前言/故事-前文/index.html","c17ef18ac523504d0a221d32dab29007"],["/project/2021/08/25/第一章初识/破冰大会/index.html","57f27eb1abdccce4ef496635526fa2b9"],["/project/2021/08/27/第一章初识/私聊记录(一)/index.html","210f8911515fd6b3e2a636cc2ecdfb91"],["/project/2021/09/04/第一章初识/开学/index.html","9e7012a4640023a48e25176528c0971d"],["/project/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","14fb5d5f927823a3f81bfad65421c573"],["/project/2021/09/10/第二章情愫/有效择偶权/index.html","da8bd914e363d328fe4736087f306a56"],["/project/2021/09/10/第二章情愫/本章概述/index.html","84420e0ea0d90886a47d1eb952642c6e"],["/project/2021/09/10/第二章情愫/鱼塘/index.html","9e4c914dd14956ce2d4b946e9c125a25"],["/project/2021/09/12/第二章情愫/死缠烂打/index.html","3caefb26a573d6cf205f06c8c30db0ea"],["/project/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","156a94dc0acb4c1003f8fb0798b6e643"],["/project/2021/09/15/2021-09-15/index.html","a31c07c7c8dff0f391ccbf77e4e08834"],["/project/2021/09/15/第二章情愫/微信好友/index.html","626a31a3f9af0ffbd524406e47892f89"],["/project/2021/09/17/第二章情愫/中秋月饼/index.html","6f4f8a32ea4ff6b395fd9a9c2984ee6f"],["/project/2021/09/17/第二章情愫/吃饭/index.html","ac4e32edc802aaba35e3091b37512712"],["/project/2021/09/17/第二章情愫/官方认证CP/index.html","9fca67ef97d4b9acfb83b0e66a8283cf"],["/project/2021/09/18/2021-09-18/index.html","34458d2391abc9e4e76bdb821c9659fe"],["/project/2021/09/18/第二章情愫/续上火花/index.html","e7c8e4df477d562f708836beb1352da1"],["/project/2021/09/20/第三章悸动/袒露心意/index.html","f03ab5b774524e70cf4768dd12def5dc"],["/project/2021/09/20/第四章发展/进展/index.html","4b546e0906ab4dc977d087ac6e5f6ec7"],["/project/2021/09/21/第三章悸动/中秋快乐/index.html","a574f4138576e813a3b3223cf115679e"],["/project/2021/09/23/第三章悸动/特别关心/index.html","7b2cda464ac81df6f7642bae27cf514a"],["/project/2021/09/24/第三章悸动/推课表时间/index.html","09a5492478cf82d936930b5343cf9109"],["/project/2021/09/25/第三章悸动/开会的小插曲/index.html","f992ae1d8fb549a82ed6666a4f22dbcc"],["/project/2021/09/26/第三章悸动/溺水/index.html","bbeaacff0091ead0e3d649eb697bb108"],["/project/2021/09/27/第三章悸动/约定/index.html","d7ec19cf36285b534da3b2b9999a5691"],["/project/2021/10/03/第三章悸动/女闺蜜/index.html","61c42191bac45374b7d27a250bb70d78"],["/project/2021/10/05/第三章悸动/持之以恒/index.html","608612c2212a07b0b2d2e0a5ea61df62"],["/project/2021/10/06/第三章悸动/想看雪/index.html","12b43f9a7c67f45dfbf6101c2469dc24"],["/project/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","24fe118e1d8185c71c7d7f8cbd1a8457"],["/project/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","ee1060ab4ec61c5aced3368f8da4eb94"],["/project/2021/10/21/第三章悸动/同频共振/index.html","9104e47de54cfa764f27ab0f1407d435"],["/project/2021/12/09/附件/第一封信/index.html","3cf13043f59ade71997d0d0b61968b6c"],["/project/2021年目录/index.html","ea207d59fc46cfa2c0a14a1516640a1c"],["/project/2022/01/01/附件/第二封信/index.html","f914706b78e9b460988aae74d415bdc4"],["/project/2022/01/16/附件/第三封信/index.html","ce6c7ae417e3af6df7d695c46e66272e"],["/project/2022/01/31/附件/第四封信/index.html","9b632b76786ef642e400b9e92235cfd6"],["/project/2022/04/06/附件/第五封信/index.html","a14bce921e0873c3eab611fa82af65e3"],["/project/2022/10/23/番外/喜好篇/index.html","89db8fb7de004123c345a92ab51951d8"],["/project/2022/10/23/番外/重要日期篇/index.html","d21c491903c24d80d934eb6b769d4c1e"],["/project/2022年目录/index.html","37738f5283f01e871f9ea873e40ef774"],["/project/2023/02/13/二三年/二月/看海/index.html","01362350610ba08568dcaebee37343f5"],["/project/2023/02/18/二三年/二月/去机场/index.html","81a8beb0a9908b584fe660bf9e68d209"],["/project/2023/03/02/二三年/三月/对感情的一些看法/index.html","f8d913d62aec80623f318a7e45c1e950"],["/project/2023/03/28/二三年/三月/一双鞋子/index.html","ff4971345ec79b4513e942cb9443dbfd"],["/project/2023年目录/index.html","4f8313160dc79e372acb2d96bdc26f84"],["/project/404.html","86bace75e4b8004a55df0dbaa955b4a3"],["/project/404/index.html","f79dcde63de430be5e9b8cfae6b2c18e"],["/project/about/index.html","aa14a0ae26ace1f3f12f3b8e98bcaee8"],["/project/archives/2021/08/index.html","29eed39baf2d3f334d64b5f7d57f1eab"],["/project/archives/2021/09/index.html","71925995c7ec2e9b82d3f5a20a04eedb"],["/project/archives/2021/09/page/2/index.html","2bf1a74cadf6e8c99a5810f729051dc0"],["/project/archives/2021/09/page/3/index.html","fd89c959b4b25413d029423e9a685bd1"],["/project/archives/2021/09/page/4/index.html","34fe256f099ba7da178afac5576eaa57"],["/project/archives/2021/10/index.html","61798ce8e52b3197da49a5c5b4284d56"],["/project/archives/2021/12/index.html","a4bf29c05e46a1857d4a6abe2211330a"],["/project/archives/2021/index.html","63bee674160f4e7feb6f7d30e9cf9253"],["/project/archives/2021/page/2/index.html","89efd95be54002423ceaa95a28056641"],["/project/archives/2021/page/3/index.html","93b9765670ea433b967b820c6dda714f"],["/project/archives/2021/page/4/index.html","50b1a65dbe2d7fd7bff03e8d2acccadf"],["/project/archives/2021/page/5/index.html","dc5dd69c984f358f25fe7a2327740fae"],["/project/archives/2021/page/6/index.html","86aed90558d50dcc9189b8f4428bda57"],["/project/archives/2022/01/index.html","6c2088b11f891f4beb049645c24cf222"],["/project/archives/2022/04/index.html","233a2390323fddd8cca6cee9b3ebb9a8"],["/project/archives/2022/10/index.html","f7aded58d7097dfab32ca770d5ca5dfb"],["/project/archives/2022/index.html","b4671167760557c5361a8d5374de9c96"],["/project/archives/2023/02/index.html","83951e40c3bd82a9531c8c8936b8c5bb"],["/project/archives/2023/03/index.html","eadb8c1fedd7eca6d6e017833ba726e4"],["/project/archives/2023/index.html","022e42fb031f6246fd5c6006d84f386a"],["/project/archives/index.html","12433ec8f12d71289b28e6e64c9481ef"],["/project/archives/page/2/index.html","6af626cb4969f5fd49a5fb122fd2db8f"],["/project/archives/page/3/index.html","9af61f42a2e71347f0b33609f348a5e4"],["/project/archives/page/4/index.html","e200c10763b356114f693d73a6e597b4"],["/project/archives/page/5/index.html","c948dd30495c50c3068473f723ef04e3"],["/project/archives/page/6/index.html","f8fc32e11c0cc84d44ad222a0a8b9e31"],["/project/archives/page/7/index.html","cf8725962a699695685815145a6f3579"],["/project/archives/page/8/index.html","003a4c24b3d0383d4102289f55679047"],["/project/categories/2021年九月/index.html","f97991d66e7501f87a55b5e233234bda"],["/project/categories/index.html","087eae0b483be1dc15b26385456a9368"],["/project/categories/二三年三月/index.html","9691f106618fbcc4c8c19a0b12491132"],["/project/categories/二三年二月/index.html","780f64bb3890f536c761f54ebf567df8"],["/project/categories/前言/index.html","a6a157082a6442bd4cd195f3a4824265"],["/project/categories/番外/index.html","86bcf766c2ae8de7176cce3f0c04f534"],["/project/categories/第一章-初识/index.html","8e018be495d6f70adce179026be45463"],["/project/categories/第三章-悸动/index.html","c32310748015a794fdc6029c35e34544"],["/project/categories/第三章-悸动/page/2/index.html","f4637ab1ab3daad91a1fdfa870560706"],["/project/categories/第三章-悸动/page/3/index.html","eaf4a7317ed049bd1324df27d25b9394"],["/project/categories/第二章-情愫/index.html","9145ccb7347b28d78f15411f406bc1ab"],["/project/categories/第二章-情愫/page/2/index.html","baf041d7e19be756ef101cb6215d3a6c"],["/project/categories/第四章-发展/index.html","5a67b977c86484cc4f4ed754b8a29795"],["/project/categories/附件/index.html","2be6ed116388f32e855601f47c0ce018"],["/project/contact/index.html","fdc49290d998160fb9ed473cfaa92e0e"],["/project/css/index.css","a9252d8dc5e205289e65f6a085c3d429"],["/project/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/project/gallery/index.html","2dd6213653b7fd824ff3f8ecbfe0ec85"],["/project/index.html","c34fcc1e2fb67f1d3c673bf8976d0bd7"],["/project/js/index.js","a1258f18be2726dc809260de62eba819"],["/project/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/project/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/project/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/project/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/project/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/project/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/project/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/project/movies/index.html","3c88c905d87ebf00bf5c53b3b4ecf3fb"],["/project/music/index.html","5cf881f78026b6d75f8aa2b8b49757e4"],["/project/page/2/index.html","fb7ada1bce261190fc3cae6fe0f7c4e6"],["/project/page/3/index.html","2d3988d2c4034f20786664ff36d21d9d"],["/project/page/4/index.html","3f722d3e614384cfd156530699706359"],["/project/page/5/index.html","7446a3dfbe16ad289e26d0d133e421cc"],["/project/project/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/project/project/style.css","a9252d8dc5e205289e65f6a085c3d429"],["/project/sw-register.js","64127e1af577b7efb4264233a3870883"],["/project/tags/2021年九月/index.html","9cb79490c68666bbca86d747f7de1345"],["/project/tags/index.html","7bac6c0a882f71457ba580c674fba693"],["/project/tags/一百天/index.html","37328f20e9fa983791413086770c26ab"],["/project/tags/二三年三月/index.html","8fd26c3f263acd6bb34e1fd8a9e7e62a"],["/project/tags/二三年二月/index.html","e42319e22dea7be069cac6a30cb2c7d3"],["/project/tags/信件/index.html","e2863cfd52dce7f9c072cac97eb97b6e"],["/project/tags/喜好/index.html","e0befe547fb733eda77c6fd86cecfff4"],["/project/tags/想念/index.html","051f97e3c88a3dd46d7b906904817ed4"],["/project/tags/故事前文/index.html","c6e225713ef2bf37fb083dc2c35968a1"],["/project/tags/春节/index.html","9a8c1658559a75d31aa0b87c3109ad2a"],["/project/tags/生日/index.html","36563b0761bda3920bb2566cc540696d"],["/project/tags/番外/index.html","5c9274d28396b78b1caef63bbd166374"],["/project/tags/第一章-初识/index.html","5628aade0b52b3ef82e45412ad0a4518"],["/project/tags/第三章-悸动/index.html","829d36b1b9afd05fd60b2343373ab4b3"],["/project/tags/第三章-悸动/page/2/index.html","d09933befc526591a6d73374011bd10d"],["/project/tags/第三章/index.html","dd11a7a56b8284e40a502013f0056cc1"],["/project/tags/第二章-情愫/index.html","527e0b79373dc83833644f0bdc6b3ec1"],["/project/tags/第二章-情愫/page/2/index.html","f685413cf0aff164a606e37728d4e7c4"],["/project/tags/第四章-发展/index.html","27ddf28c6cacfd8baf57b4efd00ac627"],["/project/tags/跨年/index.html","d4a6891ea9f335e12d80e7d8691be329"],["/project/喜好/index.html","de823309e3e58a9c9375d7058f33b1e3"],["/project/她和我的照片/index.html","05c4b463081272e46331b5989cb51b4e"]];
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
