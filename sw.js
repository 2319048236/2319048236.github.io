/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","6dd1afb278a0e2175cefac9812e5d6f8"],["/2021/08/25/第一章初识/破冰大会/index.html","f4b90253cf94f143f6455fec6611e9f2"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","1a531ad90f78442be2236f080231365d"],["/2021/09/04/第一章初识/开学/index.html","acd8689408f5a57375f4e92a8af30dc1"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","7c685a6d9c869175ddab11eecc3935f6"],["/2021/09/10/第二章情愫/有效择偶权/index.html","f5e658922d6458a8e43064fba71a80a5"],["/2021/09/10/第二章情愫/本章概述/index.html","353ea0939f8c1fd4398a01b073ac5bc6"],["/2021/09/10/第二章情愫/鱼塘/index.html","6b5e46ae6f8f51a42475753ecd1b642c"],["/2021/09/10/草稿/草稿/index.html","4ac0cd5a43100e2ed11d6206ddc7fc00"],["/2021/09/12/第二章情愫/死缠烂打/index.html","efeda364f6b108f62d1850901a8dfb43"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","a5254cd167c7f2ff118f2b0dd27d192f"],["/2021/09/15/第二章情愫/微信好友/index.html","f757c3c93ae7a3217c56ad499a37d912"],["/2021/09/17/第二章情愫/中秋月饼/index.html","d0f56fb961748feec4dd93a26f5cb01a"],["/2021/09/17/第二章情愫/吃饭/index.html","8b0776fae1e61eb4dc43f21af45f54e9"],["/2021/09/17/第二章情愫/官方认证CP/index.html","4002bebe9cb4a18259323281db307331"],["/2021/09/18/第二章情愫/续上火花/index.html","822e525d0f0927759b129d763ca84096"],["/2021/09/20/第三章悸动/草稿/index.html","c965fe98a7184ec603f7b90ae46efe32"],["/2021/09/20/第三章悸动/袒露心意/index.html","439bd2ccd27ef4d9c3ae435c87dea8b2"],["/2021/09/21/第三章悸动/中秋快乐/index.html","3f56c290ec5f1893e706197cbb786ec5"],["/2021/09/23/第三章悸动/特别关心/index.html","a9b6e618c7811ecb0dcf349978fcc0d3"],["/2021/09/24/第三章悸动/推课表时间/index.html","f10939cd723654ecf5c91b3efa35f300"],["/2021/09/25/第三章悸动/开会的小插曲/index.html","0dc949ac94f8b213a10a5f64048d9ad8"],["/2021/09/26/第三章悸动/溺水/index.html","01ff2ba72c60a845df8652b20a9e3370"],["/2021/09/27/第三章悸动/约定/index.html","fcd3ebe8c857de1fe37bf503d986effb"],["/2021/10/03/第三章悸动/女闺蜜/index.html","52170f5e70c66e5ef836c97269e975a2"],["/2021/10/05/第三章悸动/持之以恒/index.html","da0115d94669489ea5d4f596e935459a"],["/2021/10/06/第三章悸动/想看雪/index.html","5b3cc6eb35c6c4e530c8df8b9bc7766d"],["/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","64a1fc6cf7a940b402adb002e20233af"],["/2021/12/09/附件/第一封信/index.html","d174cd3913b942e0a291085876e53826"],["/2021年目录/index.html","397f613edc76b345479b248f76d093ff"],["/2022/01/01/附件/第二封信/index.html","c3823e252799ce0e044d4812872e71cb"],["/2022/01/16/附件/第三封信/index.html","4c55b4f9e60c3ab65ac12995552b7262"],["/2022/01/31/附件/第四封信/index.html","8c1cc85cbbc102f33187fdaaacea30d0"],["/2022/04/06/附件/第五封信/index.html","c5466998066b34bccdbe6d6fe09e6465"],["/2022/10/23/番外/喜好篇/index.html","72e7ca23c05a42d83fcf0729023e613a"],["/2022/10/23/番外/重要日期篇/index.html","2b16c338ace8aeb7787434696f13012f"],["/2022年目录/index.html","049dfdcf765b2d0f2e2c0a8f6d8e5eef"],["/2023年目录/index.html","40de2f4e63e87e95966af88e0f74f83d"],["/404.html","a01464c90fce3358b4fd6212a802cae5"],["/404/index.html","4d4be67427ae8c562b39289830c895af"],["/about/index.html","084bbb7e0d098045d345021e4c3aa6b5"],["/archives/2021/08/index.html","626e17d80066f1d935fa7127ff050e06"],["/archives/2021/09/index.html","8db577f39a7df422e8fd6680571be09b"],["/archives/2021/09/page/2/index.html","ec7c6e1d3927816a7b325f27fe2e6f27"],["/archives/2021/09/page/3/index.html","6bc9012cff70811a1d3d910f37db48d6"],["/archives/2021/09/page/4/index.html","29e458f9337b735daead26464ff9e2ba"],["/archives/2021/10/index.html","87e82e84951edee59637dee37f6dcd54"],["/archives/2021/12/index.html","3b9289e1b34dca139aa04f81210a34dd"],["/archives/2021/index.html","153dae6c113b6e807861c58f525ba9ac"],["/archives/2021/page/2/index.html","f833b63a24487f8724b8854d64219165"],["/archives/2021/page/3/index.html","0590e4954c879716581ecc96fd7f0810"],["/archives/2021/page/4/index.html","2d66d6abd2ee32b89b8bf2775dc11ac3"],["/archives/2021/page/5/index.html","3b651d853139861f2a0a58d0bc327851"],["/archives/2022/01/index.html","756ef87df17a08e39b1ccd2d2715bce6"],["/archives/2022/04/index.html","44b5e60b72f51a2529cfc4d47764ce9b"],["/archives/2022/10/index.html","3d00e3715ec30195ded1834de4e1146b"],["/archives/2022/index.html","0df49a694c846107b13c7a4b7158c3d7"],["/archives/index.html","9c2b87b105454efff8684e31ad0ced2f"],["/archives/page/2/index.html","6c6a7a71fc3560003f4b1d214b4994b9"],["/archives/page/3/index.html","246e04789497caab80efaa4c609ac61e"],["/archives/page/4/index.html","1163a6ba9b839571a3cda82554535f43"],["/archives/page/5/index.html","4bb3c66ae36ac57ab73d542984c83768"],["/archives/page/6/index.html","3494723e5095a76e9dcb9e1df10ba7bf"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","addeae9e03e4b37d6b85a2a726a5b829"],["/categories/前言/index.html","30e4e09b171b9faa031f6624a6e9952b"],["/categories/番外/index.html","23270d25fe00ac38ebc67934ec04c66d"],["/categories/第一章-初识/index.html","3824f56ebcf01dadae420f8434d3ed89"],["/categories/第三章-悸动/index.html","606b24abb1c295b42df13bf41f097708"],["/categories/第三章-悸动/page/2/index.html","ee407d673f27852ec88a9f4a1c5b9262"],["/categories/第二章-情愫/index.html","a9fa574d14439d100f9c24ed51d3b7a5"],["/categories/第二章-情愫/page/2/index.html","0871aeebb7c95f1e73a471d7b1f098e0"],["/categories/草稿/index.html","70bd25b0830a12a2808163537545021b"],["/categories/附件/index.html","65cb8bbd6c48211d6e425916c93f883e"],["/contact/index.html","199a0394310a7b40b8d87911543bdc74"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","b5c2bf687da42e7030610e7fb2c3aee4"],["/index.html","d7b31637c7eb052e6ef1bb932e2ecbc8"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","bbcdb8b2a93f8c565acc42502288fae3"],["/music/index.html","9bc76fcb9d4546678a959180a1e1860c"],["/page/2/index.html","82ab4dd12c5e8b4c15d68fa55505b5a1"],["/page/3/index.html","3908362c4bfe99d5f90c19c9d9893a8d"],["/page/4/index.html","6fa82becb834e49150ca415d3c841bcb"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","99421132873cc3a2c2c5850eb96d4982"],["/tags/index.html","64bb9aed3243f817e8d7171e2a15d596"],["/tags/一百天/index.html","74b6a7c9e14a607e31204abcb970a49b"],["/tags/信件/index.html","f0306551bc6d31d548e6207cf80568f9"],["/tags/喜好/index.html","b480985b41498fa5382d3289985133b1"],["/tags/想念/index.html","34e71e2e991c96da3c44260417d26a0f"],["/tags/故事前文/index.html","4ab464894f2a4193f8283627660be081"],["/tags/春节/index.html","05b4c0768ff301493a545ebbfd634421"],["/tags/生日/index.html","3be6274f2d805192d71b07f09b2f1f22"],["/tags/番外/index.html","58c348d51c2a5e4864d86bda0c2966d3"],["/tags/第一章-初识/index.html","05a014802763e7c30e641ae627528d96"],["/tags/第三章-悸动/index.html","a2750a0997bdb6b76bef0d309053018b"],["/tags/第三章-悸动/page/2/index.html","e1f0f4e12abf5a82bc9521c4af1bd4cf"],["/tags/第三章/index.html","2a0c6f9c0bee6b7fe91c450c077c7ee7"],["/tags/第二章-情愫/index.html","75da6b450573826ad2e34704bd59100b"],["/tags/第二章-情愫/page/2/index.html","dae65a33d08878b95f90a62ddbcd8e62"],["/tags/草稿/index.html","bd44e117638374b233b23b5dade79a26"],["/tags/跨年/index.html","4e96eb55b6e8a5ed695efe625818616e"],["/喜好/index.html","1e148b048f8f7569f335317d88c79998"],["/她和我的照片/index.html","dd615b839636312cad6785d8aab72687"],["/测试/index.html","5fd4ddf1a4e75c3a32f6f20e3c455210"]];
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
