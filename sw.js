/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","e7af04786f3bb4f88b225355353a845e"],["/2021/08/25/第一章初识/破冰大会/index.html","e6b0926cc436b283ab33a21ed8b1f98f"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","886dc4e19932e805f62a15cd1994d2ce"],["/2021/09/04/第一章初识/开学/index.html","c42f5562a36c120614f3cec23b3c06ac"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","47ce1b288c2efad42c95d95ace4d4762"],["/2021/09/10/第二章情愫/有效择偶权/index.html","49fe401fd0bb48b3d785aceb7f7cf64d"],["/2021/09/10/第二章情愫/本章概述/index.html","c2c533dc99a5312f457756b796c0129a"],["/2021/09/10/第二章情愫/鱼塘/index.html","1e049cb8cff16ad48467d0c78f6053c3"],["/2021/09/10/草稿/草稿/index.html","83db5d58621cc3394d8e81c3439f9543"],["/2021/09/12/第二章情愫/死缠烂打/index.html","3bec699802876292fd4c934268f69b41"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","581755f2d780e5d68eeb1fbd8599ecdc"],["/2021/09/15/第二章情愫/微信好友/index.html","897ade7c3698418f4632785c7cf5709b"],["/2021/09/17/第二章情愫/中秋月饼/index.html","2d20509c305890f7dd5175b7573b9a71"],["/2021/09/17/第二章情愫/吃饭/index.html","2df4e53e30273d8742d2e2848780db20"],["/2021/09/17/第二章情愫/官方认证CP/index.html","e540fce785828f6f2ca5cd961b816abd"],["/2021/09/18/第二章情愫/续上火花/index.html","aec836871537e13bca25c9b73f3e1ff2"],["/2021/09/20/第三章悸动/袒露心意/index.html","465fca49ce0ea7f74f22e29ab0ddd713"],["/2021/09/20/第四章发展/草稿 - 副本/index.html","56d83dac2d45e32b020c72606df16e1a"],["/2021/09/20/第四章发展/草稿/index.html","31a78b7dce579a189d41aee0e5e631df"],["/2021/09/21/第三章悸动/中秋快乐/index.html","26a816d0105a9fdf881341c1dd437af4"],["/2021/09/23/第三章悸动/特别关心/index.html","205e3abaab229e393639f8f5b49197d2"],["/2021/09/24/第三章悸动/推课表时间/index.html","d4f0a04216788c48ddb1f5770b0c24e9"],["/2021/09/25/第三章悸动/开会的小插曲/index.html","9a8df8178b06be20035fa36395811159"],["/2021/09/26/第三章悸动/溺水/index.html","c36142b00aa2618c0c25bd824ead8fbe"],["/2021/09/27/第三章悸动/约定/index.html","588e57e16ab51971a2c01f8276a42880"],["/2021/10/03/第三章悸动/女闺蜜/index.html","f44d3583f93de787771135f89d64e758"],["/2021/10/05/第三章悸动/持之以恒/index.html","742227796fa6f02efce3d8b398cc1417"],["/2021/10/06/第三章悸动/想看雪/index.html","4d2eb1457189d91c2a8fd09ffd4e0698"],["/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","20f982edfcbb3b4b4f1359607ffd1abd"],["/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","9a3f8a6221bebf5f867f66ddb55c0d8a"],["/2021/10/21/第三章悸动/同频共振/index.html","3e15a2912a9731f5ddf53e48e162ebee"],["/2021/12/09/附件/第一封信/index.html","ec035266decb8178672effa284d8ce8b"],["/2021年目录/index.html","d4c9018ef6d21d04f1c7341007ff76f7"],["/2022/01/01/附件/第二封信/index.html","f8eb332d1bc26a45a6aa6e12755ed941"],["/2022/01/16/附件/第三封信/index.html","ca18d9fc3aa20a7da356648186bbd85d"],["/2022/01/31/附件/第四封信/index.html","2f80900bdbc0e6c9630572af243ad2f6"],["/2022/04/06/附件/第五封信/index.html","41efe9a85ca9964567076982f42e1554"],["/2022/10/23/番外/喜好篇/index.html","fc1c38e7a6d81beb9c2af6a03b56cc65"],["/2022/10/23/番外/重要日期篇/index.html","dae62d24936cbad72205dad7e7e0872c"],["/2022年目录/index.html","9e5bbc3a29137df63df50e10d3fa00f5"],["/2023年目录/index.html","4d8f65b4746d2c47e918ca08318d9ee9"],["/404.html","023ab072e58be4f9cda22d7a7b523d12"],["/404/index.html","068eba2b7b2778a2354f773eb539fc76"],["/about/index.html","6a8981f55e496486e337c3b9446fcb5b"],["/archives/2021/08/index.html","bc5039511bd9b78f8aedcd4c988ff146"],["/archives/2021/09/index.html","963f9a4debc0055c2f6c44556ce9c9cf"],["/archives/2021/09/page/2/index.html","69c5b6435ff2b0563ceb8c77bbad4286"],["/archives/2021/09/page/3/index.html","8e999f2fc00ff72467515e8aff25df8f"],["/archives/2021/09/page/4/index.html","fb5b0bce2a366839f2018bbc0c5524d7"],["/archives/2021/10/index.html","bfb6795a31354d258b5d5b3689ca1082"],["/archives/2021/12/index.html","08ab4aa901774d96e6f035635eb7c555"],["/archives/2021/index.html","df90d5531d1d439d70b9a676e302d735"],["/archives/2021/page/2/index.html","168e26bb67e64938446ed24e3ee61511"],["/archives/2021/page/3/index.html","57e7219e6ef237a3c25487fe25d1a4a9"],["/archives/2021/page/4/index.html","efc586ced85a493476e5b204f06b2c9b"],["/archives/2021/page/5/index.html","700cc17b4d80500d53ce05f0ab1761d5"],["/archives/2021/page/6/index.html","0d94de1cb6b8ec210acf28bea69a660b"],["/archives/2022/01/index.html","38e793dc904d39091ceb098c2c4ca5c0"],["/archives/2022/04/index.html","8931ed33a199063b77b87d1c2e87a55c"],["/archives/2022/10/index.html","d1b8ec2e1a55539e8b86204a2d91ed59"],["/archives/2022/index.html","216ed60b6f1a66c977a8a93a4e67c55e"],["/archives/index.html","a86e0f00ff4401541b91e48b1aa03fb8"],["/archives/page/2/index.html","4dbd33c6d881b02f130f41e42172318a"],["/archives/page/3/index.html","f1f6e6d02cd4e4ec7f51d27c3bb69f65"],["/archives/page/4/index.html","a32335436eb58254961dc16c3f7593cd"],["/archives/page/5/index.html","e0c3cc23767b77f6e47c1765bebab128"],["/archives/page/6/index.html","66fe479a1481cfe8d647d2384cda7ce6"],["/archives/page/7/index.html","bbbf4257a2d37e0d3f99af2855d64579"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","e898430d53594634923b06341c7f28f9"],["/categories/前言/index.html","c42894d4a9f0af6ca3a7f8f426999a5c"],["/categories/番外/index.html","a7dd782cc0765eca63f08e6e707aeb18"],["/categories/第一章-初识/index.html","e894ae16d7a11702215a21def9d264a0"],["/categories/第三章-悸动/index.html","83aa6e1e33f727eebc1fced5e473cfc5"],["/categories/第三章-悸动/page/2/index.html","2a34774c23baa0219215ef6839a1e204"],["/categories/第三章-悸动/page/3/index.html","f736962b449b17624f6d4e5590899731"],["/categories/第二章-情愫/index.html","4510af7ae2357ed60a62907873ecbf98"],["/categories/第二章-情愫/page/2/index.html","2011f975d99b3d547d8c08e344dcb7a4"],["/categories/第四章-发展/index.html","957eedeabf856e68b40d1630a9a0b850"],["/categories/草稿/index.html","ae8ef0b440a8f8ce5d3f151d2b3bb2f0"],["/categories/附件/index.html","8792e85d165d9f1cb7731ce911c91e7b"],["/contact/index.html","95f6cb2b310eea308cac6e9c209061c3"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","4cc4ea41ddf77484fb03af660d54d1c4"],["/index.html","235fb7b69ce5d3b0df8bb44c579a3d47"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","e1da335491abc7ca8ce74f85c2cb77bb"],["/music/index.html","70b32fff6c97e9ee1885c5a5b0152fa4"],["/page/2/index.html","84374386f0dad6d949172b5c30ac3f18"],["/page/3/index.html","4e112e157ed76f1a81fe5c0ba41b9764"],["/page/4/index.html","cf287843e6de5e1bad2367dd75d5b1f6"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","8656ebdf8f856557b5ef09852394ed96"],["/tags/index.html","5ce98f20dda6cb01ec9e0cdee36a6f0c"],["/tags/一百天/index.html","e61dfac4850af3956c3b2a0bd645f76e"],["/tags/信件/index.html","80c5b575a86713d6c8f95af1ae79aeab"],["/tags/喜好/index.html","b7e35d9899455c28c9d5451a732d51db"],["/tags/想念/index.html","91b5cb462190f36b50223041d6f78045"],["/tags/故事前文/index.html","a9012a85580290781fa6f3e97181c5ca"],["/tags/春节/index.html","733f9e74197ee3a45359e42f6c88d34e"],["/tags/生日/index.html","c84f7689a822744c7f8fe18e1c918fd8"],["/tags/番外/index.html","9c27695ae060b81a9bcc648c89165efc"],["/tags/第一章-初识/index.html","fe5ec50959a18e9273a8b7d8f9e7b23b"],["/tags/第三章-悸动/index.html","a34f96bc236e5721208e2a52e6634ff9"],["/tags/第三章-悸动/page/2/index.html","f0cda00bfe0f4d0468a97518a58a0bd1"],["/tags/第三章/index.html","566448606c1c90dfe2bc9ab3e0149c74"],["/tags/第二章-情愫/index.html","356aa76331bb292b0b2cd09bb7bf3b0a"],["/tags/第二章-情愫/page/2/index.html","a6f10de8b63df6306de4d55f93658d68"],["/tags/第四章-发展/index.html","76600ec06d47c8905f2daec4750fd48e"],["/tags/草稿/index.html","53000f4fa6c1abda2e35172776742f9f"],["/tags/跨年/index.html","05bc88b5f15da473a618afdf54fcff23"],["/喜好/index.html","23304ddb2253f013f93f501d6b99522f"],["/圣诞树/index.html","5e16c6df23596be7db7b3d98a96da407"],["/她和我的照片/index.html","7829ebb0da446afd8bf0518a8b98ce4d"]];
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
