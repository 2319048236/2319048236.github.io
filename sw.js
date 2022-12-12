/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","0f6ddc5b0e80c8946482f993c741c83f"],["/2021/08/25/第一章初识/破冰大会/index.html","b2ce88b3ecc6db58ad3604ed54a2498e"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","069411e2f6c88b687fe5331fb9278401"],["/2021/09/04/第一章初识/开学/index.html","65795747ffd7107b68f95cb6dd4d7293"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","38aedc6f429f014bfefb425bb6a5e1d5"],["/2021/09/10/第二章情愫/有效择偶权/index.html","ab46d78cee5feb9a0193e211b7108cea"],["/2021/09/10/第二章情愫/本章概述/index.html","5db1bd4df48b3cac96a37e77d492969e"],["/2021/09/10/第二章情愫/鱼塘/index.html","90e0d55bd00cb8b0829f7f3944f24e33"],["/2021/09/10/草稿/草稿/index.html","30b424113dd549bd083be3bec9bd7223"],["/2021/09/12/第二章情愫/死缠烂打/index.html","b1be47f173d19ae89828a5e9a54dfa1d"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","13bb086a1b483ca6ac7a369a762d8143"],["/2021/09/15/第二章情愫/微信好友/index.html","b4f536f4e0e888b40d399087ba2aaaa1"],["/2021/09/17/第二章情愫/中秋月饼/index.html","5116cf2188c994f5671b6ae138ee8bad"],["/2021/09/17/第二章情愫/吃饭/index.html","469fc42933b207baadf850fd5a912517"],["/2021/09/17/第二章情愫/官方认证CP/index.html","3072db1ef432ce902b3c8c9e518b8fb2"],["/2021/09/18/第二章情愫/续上火花/index.html","e3cab83aea153f13110eff7e0da47cad"],["/2021/09/19/第三章悸动/袒露心意/index.html","2e30af023c143924afa61e884a5b4559"],["/2021/12/09/附件/第一封信/index.html","0d733338ffb95630071c871cd8e26c14"],["/2022/01/01/附件/第二封信/index.html","ef8eec2a8874c1415e7f5a7ab0555872"],["/2022/01/16/附件/第三封信/index.html","50fd253b27cf13f65f017baef246f64b"],["/2022/01/31/附件/第四封信/index.html","2747d0f0da7a7332a236dddf4bc57bc2"],["/2022/04/06/附件/第五封信/index.html","fe8503041f2d5f638375b886d07c36dd"],["/2022/10/23/番外/喜好篇/index.html","14dead0b967647159a570f11f4e892cd"],["/2022/10/23/番外/重要日期篇/index.html","5c87f81c420c94ab3dc518633b6ff8d8"],["/404.html","c066f03822b819464d8c8c58b56363b1"],["/404/index.html","e0600bded9cd0e2b7e027d8dde1caa2a"],["/about/index.html","34c82ada30e8cf656ae5f3730d2ab32a"],["/archives/2021/08/index.html","e442b665471b9068c44b8b5b42122b41"],["/archives/2021/09/index.html","a38abef0d4507e7931be228834369917"],["/archives/2021/09/page/2/index.html","4577dda03443b55c3d55bcd27513eb4e"],["/archives/2021/09/page/3/index.html","78df69a4f2a2a13316c5b33243029c2e"],["/archives/2021/12/index.html","8eb49cea386f5ebbefe44db5d137f5e4"],["/archives/2021/index.html","71bd97ebbf935046dec74ce3ccf9a1b4"],["/archives/2021/page/2/index.html","de5edfed743f57c5e74abdc3e9e52bdb"],["/archives/2021/page/3/index.html","2b9129d23c3593499b791c27128f4e20"],["/archives/2022/01/index.html","43f603d0914ae25c5d4a1a33d1c73c20"],["/archives/2022/04/index.html","08b7328cd285a838c47b4ea60e4dda3a"],["/archives/2022/10/index.html","7897044714944b1afec1dfc59675b898"],["/archives/2022/index.html","d24568ea7723dd28721c4eb11a5bc6bf"],["/archives/index.html","8f01f5486fe3890f1bf4dfb8151bac84"],["/archives/page/2/index.html","2c45e6d526984eccbcc8f8372425ed02"],["/archives/page/3/index.html","c54cd783bad947e5783cd288fa6d4ec8"],["/archives/page/4/index.html","9e16e6f667d5c014b1898c20971773c1"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","0a17d809adf68ae0de7b26920912acc4"],["/categories/前言/index.html","50ec212a13228b963a94cd03029ef51f"],["/categories/番外/index.html","626761eb4582ba72c877528f80ce6363"],["/categories/第一章-初识/index.html","dedef00e835187bfdf01004954548118"],["/categories/第三章-悸动/index.html","278db618b121112782e380835960c10c"],["/categories/第二章-情愫/index.html","bf3c924a9400c048a8a61e2112b0418c"],["/categories/第二章-情愫/page/2/index.html","b33b9cc7327918fef959f51e921c874c"],["/categories/草稿/index.html","ffea2658b3e3ead2f5c23a94280f88de"],["/categories/附件/index.html","81e36bab08105c3b20456480cb94887c"],["/contact/index.html","d5a4789d32ecc1feda2eb18a0c30f7fb"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","72f1b0df38dbd91c46d091ce1ee44b5d"],["/index.html","de41e59bd159cd49f356a58da3b0e7a9"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","4171cbd2c415c44c21535c39e7f676b3"],["/music/index.html","a0225668bf0cba930e1ce47778707142"],["/page/2/index.html","91ba8d1530d5b2b06bb451a514c43bf0"],["/page/3/index.html","c8ddb2212dd7bdc2a9ca625131e1b1ad"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","6c7d364a83a57a26a9ca504f4d381db1"],["/tags/index.html","c406d472dd236c42abf75eae99238419"],["/tags/一百天/index.html","660316bb5b227491810c929f18687417"],["/tags/信件/index.html","9a323fe27f8719b94ab9e467a08d5c51"],["/tags/喜好/index.html","b127727e4200676b32039ee792299969"],["/tags/想念/index.html","f535afe28a05a5f1529556853a2ff5a2"],["/tags/故事前文/index.html","b9e523c0a43be22b6eedfd40f5f07c3f"],["/tags/春节/index.html","941831a1b794f88baeecb4ec8bdfec30"],["/tags/生日/index.html","adf0c5d5af5062fc972f24138f60e672"],["/tags/番外/index.html","0b0e3b9483280a9715e1c564fb9f92e9"],["/tags/第一章-初识/index.html","f03bed9a232dc3217fddebfacfd8df8b"],["/tags/第三章-悸动/index.html","41d749f5566db42fca8447098aa1f683"],["/tags/第二章-情愫/index.html","01e3966fd8701f42f9bf4bae24a060f2"],["/tags/第二章-情愫/page/2/index.html","a553f26fd3a087e71846515fb8ccc4c3"],["/tags/草稿/index.html","e92a769b375591132e8083f73aaa196a"],["/tags/跨年/index.html","ac5d84b7bfcb1ca46b9b83fb90b14b87"],["/喜好/index.html","d70ba8e08f310239e1b1af857afe18b9"],["/她和我的照片/index.html","4c81239c744d73021d36c79f69f23337"],["/测试/index.html","13d037489323fb0958c7f48be5a9a65f"],["/目录/index.html","8eba634eccef09fc6ff7baedac17daef"]];
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
