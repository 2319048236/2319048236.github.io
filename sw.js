/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","51a18319c7fff73fd936c17cdb45af39"],["/2021/08/25/第一章初识/破冰大会/index.html","345186900093cc5be0887d15ff6825a3"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","2d22cef3a911fbba401bc3207086d877"],["/2021/09/04/第一章初识/开学/index.html","7ae6fded0e56b124f77edca5925707c2"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","5368ee1cea08e22fa0df15e5fb741382"],["/2021/09/10/第二章情愫/有效择偶权/index.html","aaf7e7ade136179cdeba1139b30424e0"],["/2021/09/10/第二章情愫/本章概述/index.html","8ee6df6e27072651ff3036abc4a94ee3"],["/2021/09/10/第二章情愫/鱼塘/index.html","25b2d7cec7e3b36ff20ae0bcd73470a7"],["/2021/09/10/草稿/草稿/index.html","e3cdbc6ae4a501f603443c535928eb00"],["/2021/09/12/第二章情愫/死缠烂打/index.html","b50860f54a0218108e4eebf34c413ed7"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","9df4ac01caf2f9dbe371af6b94ee5982"],["/2021/09/15/第二章情愫/微信好友/index.html","f996db0f10812e96a51839d0d19d9806"],["/2021/09/17/第二章情愫/中秋月饼/index.html","00f5f0f744569201067a3d3dc969cd51"],["/2021/09/17/第二章情愫/吃饭/index.html","2717210facb69e35beed18dbde4dcddf"],["/2021/09/17/第二章情愫/官方认证CP/index.html","acc503ee42f904601db14cb0bdf50302"],["/2021/09/18/第二章情愫/续上火花/index.html","a8fe6da6859827e1b7fb6a16e8fd45c2"],["/2021/09/20/第三章悸动/袒露心意/index.html","1686e2d164eff67d3b2a877a59a9229e"],["/2021/09/20/第四章发展/草稿 - 副本/index.html","9c97d1fe75556fddadfc6ae02785a770"],["/2021/09/20/第四章发展/草稿/index.html","c40bdfb689c150af2c2f154a6b0aa9e2"],["/2021/09/21/第三章悸动/中秋快乐/index.html","0553b6d1bbc6960b7f1bc0c79db6e512"],["/2021/09/23/第三章悸动/特别关心/index.html","0ec5e2d3b449ea7fbc14688dcb53724f"],["/2021/09/24/第三章悸动/推课表时间/index.html","85b1f44a362a2af240f1821f5d9f9de8"],["/2021/09/25/第三章悸动/开会的小插曲/index.html","6325ae55b5fcedc3e5cf4eefe81fd58c"],["/2021/09/26/第三章悸动/溺水/index.html","511e5534377261e4de50191100e17f69"],["/2021/09/27/第三章悸动/约定/index.html","03561c5919914fea2a0832951d42bf32"],["/2021/10/03/第三章悸动/女闺蜜/index.html","162b886225e31a1917a8e6b73419577c"],["/2021/10/05/第三章悸动/持之以恒/index.html","2587f194c228abc98f2880034f32d0b4"],["/2021/10/06/第三章悸动/想看雪/index.html","ed107e84188acca2fb9a93f03646f38e"],["/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","67b9cafa06675dfa58c6995b39de99c8"],["/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","b9c1e2f7f2fdc90bdb421ba06f3ab1ea"],["/2021/10/21/第三章悸动/同频共振/index.html","5787221580383bddbf20dc944e948b70"],["/2021/12/09/附件/第一封信/index.html","5817ca6e00126f67a0c0384615d7e70a"],["/2021年目录/index.html","e59ee28e5bccef723562defb1a5c11c8"],["/2022/01/01/附件/第二封信/index.html","2ac52392fff5768cc8f362b4f161c0fd"],["/2022/01/16/附件/第三封信/index.html","3a1314dbf96b9551e6f4c1e4fbd3b392"],["/2022/01/31/附件/第四封信/index.html","0246685694e03510725ada682519cc4d"],["/2022/04/06/附件/第五封信/index.html","ccd67747d836a9910be50defe460143d"],["/2022/10/23/番外/喜好篇/index.html","e8c117cb2290a3065f3d4ed8406ad412"],["/2022/10/23/番外/重要日期篇/index.html","83e2a10ff757d843c14ab6653d39d9d7"],["/2022年目录/index.html","6ded8cf94c5fd40ef92bcd881b4fee13"],["/2023/02/13/二三年/二月/看海/index.html","22652222af5a2c5c9d3d3d5fae1ec07a"],["/2023/02/18/二三年/二月/去机场/index.html","f86806bdd69971c4889d48ef2b287e66"],["/2023年目录/index.html","d0b2a1b5d12d2afa79c4a1293d7372cb"],["/404.html","de900458f2736cc45cda4f3bdc763683"],["/404/index.html","32cda794714e69e700dd7c5099c2bafd"],["/about/index.html","1abcca3b396197b85e4f1873d8289824"],["/archives/2021/08/index.html","df01e87610e985d9c7fcfcf8783add50"],["/archives/2021/09/index.html","3f79acb226c5b6f4908a90fef4359a04"],["/archives/2021/09/page/2/index.html","81cd6f7ffa42bf7b938c621c3acdbde2"],["/archives/2021/09/page/3/index.html","9a31a9fea6d43646a3c13523dc7c7e3e"],["/archives/2021/09/page/4/index.html","5b2e5e13bc2395324acf9508926aa58f"],["/archives/2021/10/index.html","26d2b974a5aefcbbbad816252c3f2ef8"],["/archives/2021/12/index.html","2499c14f3a2941c332f479b0469bd14f"],["/archives/2021/index.html","f022fc4778f58beb772d395290cf5185"],["/archives/2021/page/2/index.html","997f13a33fcbaf18783775fc1ae62675"],["/archives/2021/page/3/index.html","c060743013a96c5f469be693f4a556dc"],["/archives/2021/page/4/index.html","d4d4eb2f5f64fa07d4c6753b55974eae"],["/archives/2021/page/5/index.html","010b8ba3a00c2b73b487a8ac1c11ac3e"],["/archives/2021/page/6/index.html","ab18e76ae58361309a97a9211361c14f"],["/archives/2022/01/index.html","f08598931ac24246936c184855289cf4"],["/archives/2022/04/index.html","0fa94e87894fbf25b0733a196430a699"],["/archives/2022/10/index.html","f5ee7a3cbff1a6b6d311d159193a96f8"],["/archives/2022/index.html","45e6b74acaae7a8d5c908a5ca482de4d"],["/archives/2023/02/index.html","7a9a90616f97e5294e2a8e3c177abe5d"],["/archives/2023/index.html","ddaef66158497efd36045fb22721c883"],["/archives/index.html","79c526fbf007a774edee05996f7b81f4"],["/archives/page/2/index.html","f6d723d8575f6d68070d48a8178960f6"],["/archives/page/3/index.html","a307c91ced2e5ad534dcca291d9fa231"],["/archives/page/4/index.html","45bbb226baed4e7c8ecb8343fb008f37"],["/archives/page/5/index.html","d2b355b1658b966b9272e93e29e1bb29"],["/archives/page/6/index.html","18a04d6f6fe5d932b25cce3c1bc11b97"],["/archives/page/7/index.html","379632e3877d59ebb96e2870f04a9388"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","712fc8a94f2a74bc818dab5b8ba5fc1a"],["/categories/二三年二月/index.html","a846487f5773c8aa9051756ce107cdfb"],["/categories/前言/index.html","0d98627b5dc5eea37330a5500c0e4bb4"],["/categories/番外/index.html","2e9b08a2d560e3c43c6c3dbe8ff80283"],["/categories/第一章-初识/index.html","7d784348371fcc2956676eeaf61c0a7a"],["/categories/第三章-悸动/index.html","47effb73249b0b3d37969b987ee9f7c8"],["/categories/第三章-悸动/page/2/index.html","a7d58d90747e41d9a73fb3bc4a029375"],["/categories/第三章-悸动/page/3/index.html","2a20a3094c3ed678055227eb10dc12c5"],["/categories/第二章-情愫/index.html","f1f6e8fdbf849262db78b9025a0026d5"],["/categories/第二章-情愫/page/2/index.html","0c7462a7c4a12dc299ffb36bf6a20190"],["/categories/第四章-发展/index.html","23401b63c61fd2e6452233edd7a59e0c"],["/categories/草稿/index.html","fea58f740aef2f4b8d360dfb3b066ea2"],["/categories/附件/index.html","8217969704c866907afe06ea31dfae30"],["/contact/index.html","f23a6ddb8feae5139c3a01595a3c989e"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","e0e9da09eed1eb1bf63baf9036c1c63c"],["/index.html","c28fec18261e9b09ee3c473bc12c4816"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","7337e1d6873ad3499a188c8734238fc2"],["/music/index.html","26e17df5fd54154120d1ee55e25ec3f7"],["/page/2/index.html","65c9865817d93b73652a149e99f60688"],["/page/3/index.html","30b05921a6bbd50622251c3fe9527336"],["/page/4/index.html","f7e6eff9c5f28f30d82b98269f135727"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","85f06f5a66541757948f02adfe3f00bb"],["/tags/index.html","8837b05d82f60e056ce7ad737a95339e"],["/tags/一百天/index.html","b8048984729ffe49bea75976fb3da030"],["/tags/二三年二月/index.html","08ed17230ed8a49bfef88cb844fb455a"],["/tags/信件/index.html","e0946f8f68060aa0f2c59691abfd804a"],["/tags/喜好/index.html","ec1ffa6ced38afe916af8eceaa1b47e6"],["/tags/想念/index.html","0662b2225219aafb3dab87a47957bed4"],["/tags/故事前文/index.html","4d4e84841cf1330ae6d34a61284f0e0b"],["/tags/春节/index.html","c7201ac35e889500973c67557fbd74f0"],["/tags/生日/index.html","371d64b6be63e34fad2bc8923ac1c474"],["/tags/番外/index.html","cb42103ea71bcba2bcf43e0c9cbaf42a"],["/tags/第一章-初识/index.html","2c266866657834ea6bfb987eaa7cabd4"],["/tags/第三章-悸动/index.html","8d942c01d58901dd1ce1afba3f77249a"],["/tags/第三章-悸动/page/2/index.html","4bbf44f9b2028647bc3acad257081288"],["/tags/第三章/index.html","24a39a8ea76150b82273e79aea286f60"],["/tags/第二章-情愫/index.html","3ed68b2ce0b8abc18fc84b6a5b4860ce"],["/tags/第二章-情愫/page/2/index.html","1dd37d30be701fde310724d9e6fe4bf2"],["/tags/第四章-发展/index.html","5767f7592c8083f062877543c5944477"],["/tags/草稿/index.html","082d3af44d1cd26e0b29133936841aac"],["/tags/跨年/index.html","456f7ff05fdf9f44f2c834c3b03cac9b"],["/专属浪漫/index.html","5929e4782ab245643493146f556ef5aa"],["/喜好/index.html","847bd5bf44df98d4a15aafc46079c559"],["/圣诞树/index.html","4a44670b53dc23e5536ba217c37cf906"],["/她和我的照片/index.html","cdb223227fb7c3698768a98d559d6e29"]];
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
