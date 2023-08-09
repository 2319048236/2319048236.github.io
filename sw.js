/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/project/2021/08/24/前言/故事-前文/index.html","dc3fc4507a1142912ab8101db4c03668"],["/project/2021/08/25/第一章初识/破冰大会/index.html","30c824724097fdc72b1601f266b86fd5"],["/project/2021/08/27/第一章初识/私聊记录(一)/index.html","66631f1025f7b1864bb4e9bd39dff50c"],["/project/2021/09/04/第一章初识/开学/index.html","a03d9b6dff5256fb623df7b1e56756c5"],["/project/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","fd62f12cf21426299a2adf1582047c8e"],["/project/2021/09/10/第二章情愫/有效择偶权/index.html","4e9233ad73f944196e6ab5a6909549b7"],["/project/2021/09/10/第二章情愫/本章概述/index.html","91d5367598dba264b1ece95187c0265a"],["/project/2021/09/10/第二章情愫/鱼塘/index.html","453ff47333be0392affcb468bff20d26"],["/project/2021/09/12/第二章情愫/死缠烂打/index.html","bf5a1ad2286261dddceb891d8330d938"],["/project/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","b1f4e0a88f988b2493a9250deb9ffd55"],["/project/2021/09/15/2021-09-15/index.html","2bece0c189bc0090d9438e6a8a3a3eea"],["/project/2021/09/15/第二章情愫/微信好友/index.html","c4eb2153f6ee0678740fef0a320d2681"],["/project/2021/09/17/第二章情愫/中秋月饼/index.html","da06c91ac1b4bdc28417ef21dbd7af05"],["/project/2021/09/17/第二章情愫/吃饭/index.html","beecefb11564cd80a850f48bad0546de"],["/project/2021/09/17/第二章情愫/官方认证CP/index.html","56c5a6a08a06159d8b018a8c34267986"],["/project/2021/09/18/2021-09-18/index.html","9f7f54660d4888dae383abcd248221a9"],["/project/2021/09/18/第二章情愫/续上火花/index.html","1662652e037b0f437f287015b58ef5e3"],["/project/2021/09/20/第三章悸动/袒露心意/index.html","2a513a9517e94b5b67deab3357123bf3"],["/project/2021/09/20/第四章发展/进展/index.html","0ca0cd91cc0228bb72e82f11036862f1"],["/project/2021/09/21/第三章悸动/中秋快乐/index.html","544f0609fadefab8ff8adf04b4935eb2"],["/project/2021/09/23/第三章悸动/特别关心/index.html","d5cac635b8d183e6885b6e56cc530e70"],["/project/2021/09/24/第三章悸动/推课表时间/index.html","a62d6cce02b7638b288743550cc64d0a"],["/project/2021/09/25/第三章悸动/开会的小插曲/index.html","259e3cd466b328aad8a4f6fc3dbacf71"],["/project/2021/09/26/第三章悸动/溺水/index.html","9548516648f6c5681d660956c050b23f"],["/project/2021/09/27/第三章悸动/约定/index.html","84649ef74a7a82693d5ae8ac9fffd97e"],["/project/2021/10/03/第三章悸动/女闺蜜/index.html","829102cbebf53b67b0cc30cc18fc1d7e"],["/project/2021/10/05/第三章悸动/持之以恒/index.html","4dc3c83aec5c453ce3f3fab0832728ae"],["/project/2021/10/06/第三章悸动/想看雪/index.html","8956f7e2e1b36922e15ba8e56d3e753d"],["/project/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","63dc7768324099bbb97c9f273ec94005"],["/project/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","bbe1b384931c6aaea7fa9fb35a0072b5"],["/project/2021/10/21/第三章悸动/同频共振/index.html","c10fc506cf4af446511eb62e4af9d2c1"],["/project/2021/12/09/附件/第一封信/index.html","12a8e1513d624d6781daff64d4b5d28c"],["/project/2021年目录/index.html","8ea27bd20120cde783d535a603b963c8"],["/project/2022/01/01/附件/第二封信/index.html","9b2ae812510723874207ea2fe86a3f4f"],["/project/2022/01/16/附件/第三封信/index.html","1c4811a2674831839ded26e9e0ca8ac6"],["/project/2022/01/31/附件/第四封信/index.html","5d4510113a2de6b3742d3ae7e9ef5ef2"],["/project/2022/04/06/附件/第五封信/index.html","354c122c797b354bd9d3f750a3f1c7e5"],["/project/2022/10/23/番外/喜好篇/index.html","a4f2febfb8ea54bf0b54ab2a82379c9b"],["/project/2022/10/23/番外/重要日期篇/index.html","01d0c38ed79765249a070568b166ee8a"],["/project/2022年目录/index.html","4e2e6802969047b1baa07b0a225048a9"],["/project/2023/02/13/二三年/二月/看海/index.html","fdcb55f1dca19ab9087e070235f84a85"],["/project/2023/02/18/二三年/二月/去机场/index.html","33a164874acbf79fb9ec56eb57811ba7"],["/project/2023/03/02/二三年/三月/对感情的一些看法/index.html","fc6d51b4e30914b302a3daf7e58a2b07"],["/project/2023/03/28/二三年/三月/一双鞋子/index.html","05b3a8e53b89a96f212a891fd968ae69"],["/project/2023年目录/index.html","e08ae17e39b81e24f96c03159f3b94f5"],["/project/404.html","23067609126510d85fa0baf25d75ffe3"],["/project/404/index.html","e6b06038a8f66166ba8de119b4deac0e"],["/project/about/index.html","2b04b4a20fc0d5052ccc911dc14bb1d7"],["/project/archives/2021/08/index.html","b3f6268d0e88bfc19acb89e49de79b48"],["/project/archives/2021/09/index.html","feb349c9131a862590d35956707f94d8"],["/project/archives/2021/09/page/2/index.html","d3969a61d767af9525eaaca866315882"],["/project/archives/2021/09/page/3/index.html","581f96ee15a802248949d89a6728d5b0"],["/project/archives/2021/09/page/4/index.html","68e65a62eebc68f922e8469a6033c30b"],["/project/archives/2021/10/index.html","191793d2a77e4c513d9311cd32ddd38b"],["/project/archives/2021/12/index.html","ba99d66d4ad28a7390b7117a977747aa"],["/project/archives/2021/index.html","054d1fc13fc846b2501154199c0e0c46"],["/project/archives/2021/page/2/index.html","169048856af85c1bc41d26fc89ae1710"],["/project/archives/2021/page/3/index.html","8100e0af562c584d6ab7b42944c11605"],["/project/archives/2021/page/4/index.html","38b3c61eae94b9f6e07e5179a91a98ab"],["/project/archives/2021/page/5/index.html","61b34914a74c786b969b8d7dc87c702f"],["/project/archives/2021/page/6/index.html","7aab326c2eaa2960562ec7b69ecd6d55"],["/project/archives/2022/01/index.html","dfb52fecb7c70605a345295513e1e7d0"],["/project/archives/2022/04/index.html","e9c1cf0a489c1a6285b9c153c809ab3a"],["/project/archives/2022/10/index.html","e17f24773c5443b7cf56d6a24838992f"],["/project/archives/2022/index.html","be9ef30b219eac5af8271e00a10f0069"],["/project/archives/2023/02/index.html","f5c0c8fba577735e71ae68df840a9a8d"],["/project/archives/2023/03/index.html","f2f1c28ac122e6b774264529e6424c50"],["/project/archives/2023/index.html","ff32a0db80f0435027e43b3a659653cc"],["/project/archives/index.html","48d6f7cfda600c7a36e680cdfff7f4c4"],["/project/archives/page/2/index.html","d8df33697fd65f095adb9cc3b88ce6a9"],["/project/archives/page/3/index.html","4539e38e4a18aaab026d46066ba6514d"],["/project/archives/page/4/index.html","81e87cf382188fe81840d8322dfa1932"],["/project/archives/page/5/index.html","587e907c3c5d3a6f15f353c033f781a6"],["/project/archives/page/6/index.html","9beff47139791b3c3a14af807d27c3bc"],["/project/archives/page/7/index.html","3628595a9b8ff4279296857902eb230a"],["/project/archives/page/8/index.html","1dd60d30baad3a4b6aca484bd8de3f92"],["/project/categories/2021年九月/index.html","5840d2429af8237fd62682f415b60140"],["/project/categories/index.html","3086990e1f43c5ed7b8f2c4d83efe4e0"],["/project/categories/二三年三月/index.html","aba71f615d7931a3be07741412468e7b"],["/project/categories/二三年二月/index.html","db251be36a79532aa23ccf4fe80f2cee"],["/project/categories/前言/index.html","2e54fdf26b31cb874ba0e5df079ede59"],["/project/categories/番外/index.html","dae8bce243c68c9573f4ed5d1a7107ad"],["/project/categories/第一章-初识/index.html","7a3bbb9450ac4f7c1b0562094deac41e"],["/project/categories/第三章-悸动/index.html","78e459b9eabb849b234157cf4b6e5182"],["/project/categories/第三章-悸动/page/2/index.html","4828cb0dfc385c6a515569f1866f984e"],["/project/categories/第三章-悸动/page/3/index.html","45a6daae9fa81508cfdb628386a8d1c3"],["/project/categories/第二章-情愫/index.html","4821ca29996367fbc1b436aa79238761"],["/project/categories/第二章-情愫/page/2/index.html","804cc7bf62e8f039c07102f305b9e692"],["/project/categories/第四章-发展/index.html","953874c851f2cfc555205893fdeeda4b"],["/project/categories/附件/index.html","2f3f966f69b64141a85e5559d3532eaa"],["/project/contact/index.html","52cd96f0a3f4880af40fc15e47891418"],["/project/css/index.css","5e2c8bbb7fcc4dcf1dea5740d5b71d63"],["/project/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/project/gallery/index.html","5c813638ac2262f2b026345ee7aa6137"],["/project/index.html","03fed107071f04b6337f1ef5bab48118"],["/project/js/index.js","a1258f18be2726dc809260de62eba819"],["/project/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/project/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/project/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/project/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/project/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/project/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/project/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/project/movies/index.html","20e9591bc7b6b5fb03d60fbf3646d0c4"],["/project/music/index.html","92ea0de58b48e4885ea92b1cf1cd27ce"],["/project/page/2/index.html","461eeb52a88db787fbb60c367b3955cb"],["/project/page/3/index.html","f0f9aab0956b35917fa2e790da8b4075"],["/project/page/4/index.html","9ad172ad94d405f47e3f3698f8d702be"],["/project/page/5/index.html","b8a59cb5e19775e90d9140e997647439"],["/project/project/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/project/project/style.css","5e2c8bbb7fcc4dcf1dea5740d5b71d63"],["/project/sw-register.js","ca6c5f9d81daa2a664fe2c12359128c1"],["/project/tags/2021年九月/index.html","79297f194f97236e3c85ecd4f0625dcb"],["/project/tags/index.html","fb4e76089ea3933655ca97f9980d092e"],["/project/tags/一百天/index.html","a568356431073942fb0d7bf7c7497879"],["/project/tags/二三年三月/index.html","c0acbe33250d4b141705dfefaa31fc00"],["/project/tags/二三年二月/index.html","eea862215893b55a8750cf3be2943b4c"],["/project/tags/信件/index.html","f7af5e35edf283413d26ccaf7f76c450"],["/project/tags/喜好/index.html","91e4a1e59445d4d7a288059a127e96a4"],["/project/tags/想念/index.html","5f13513c630da5fd652fd5c79fb61a56"],["/project/tags/故事前文/index.html","5db652da45e4fe9ccead463b9707f749"],["/project/tags/春节/index.html","29cb45e642c71f133f12558fa174b549"],["/project/tags/生日/index.html","67ec98c175fcb7f7e193c31745ebe50e"],["/project/tags/番外/index.html","59f4ef3ade1849af549c79300e383931"],["/project/tags/第一章-初识/index.html","2012b4356e439464eb621c3c7e697934"],["/project/tags/第三章-悸动/index.html","a7096f4a98ffac1cff2191d534cbc038"],["/project/tags/第三章-悸动/page/2/index.html","6f5c386c30e6f496896e0f3f4712cdd9"],["/project/tags/第三章/index.html","facde0b2148f286a7e9181b2a4239582"],["/project/tags/第二章-情愫/index.html","1381a59d69a19f8113783cba111bc8e2"],["/project/tags/第二章-情愫/page/2/index.html","43a16a93da67048214702744d9c9a7f4"],["/project/tags/第四章-发展/index.html","105611f36575d87f23ba38ddaad2d414"],["/project/tags/跨年/index.html","2bcce9fce254e884d9546a2cdc8ac375"],["/project/喜好/index.html","fb4e95540d03eab6b6985e3aff432437"],["/project/她和我的照片/index.html","515827cda5c567391ec4ec0f7c980378"]];
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
