/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","b9b44d148ee6d08c13b6382435ce283c"],["/2021/08/25/第一章初识/破冰大会/index.html","9a2ccc927d29dc9894bee739ffff351c"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","1ad608d41cb51a3bf1f98993478bbb9b"],["/2021/09/04/第一章初识/开学/index.html","a9155d4a8ba903ead9957229e255541e"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","ba6a84762f305eb05c8d52842bd56eb0"],["/2021/09/10/第二章情愫/有效择偶权/index.html","407e4ee93b5dc6b7baa91610ed98d4b7"],["/2021/09/10/第二章情愫/本章概述/index.html","ed708e614e730bd03037325c020c171e"],["/2021/09/10/第二章情愫/鱼塘/index.html","6f3c0ce7219ec42ae275f3c663d68baf"],["/2021/09/10/草稿/草稿/index.html","68ae38e75aef680677d9710823f61235"],["/2021/09/12/第二章情愫/死缠烂打/index.html","4f040df81fb45e1c0e3d6a9fc3d4401f"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","f3b7bdbf51460198f202fa67f3a22a96"],["/2021/09/15/第二章情愫/微信好友/index.html","4c8640b201386056e996bafbd8aa59b8"],["/2021/09/17/第二章情愫/中秋月饼/index.html","ae88bce9405d593b3558149f23538cac"],["/2021/09/17/第二章情愫/吃饭/index.html","ece51afc472082081cd7d0ab18ed218e"],["/2021/09/17/第二章情愫/官方认证CP/index.html","15fad9c6047292b4658f517b820075d8"],["/2021/09/18/第二章情愫/续上火花/index.html","7cd47f7a1bee9cc045489fe9eab9e921"],["/2021/09/20/第三章悸动/袒露心意/index.html","24ad66a4e5e1e04b5f7758a51b4d63ce"],["/2021/09/20/第四章发展/草稿 - 副本/index.html","76e7ba4dafc782d7575f685c00dad975"],["/2021/09/20/第四章发展/草稿/index.html","8ac8417419a050c33350ac4476c7a4ee"],["/2021/09/21/第三章悸动/中秋快乐/index.html","1e625b752f6ab6635f5d105790c148a1"],["/2021/09/23/第三章悸动/特别关心/index.html","15a79c51d8bebb3b78fdf85880bc85c2"],["/2021/09/24/第三章悸动/推课表时间/index.html","9c2f66980b7e1487da45976abf56ff38"],["/2021/09/25/第三章悸动/开会的小插曲/index.html","99251f5f8eb51a3d553680b6b22ad1e3"],["/2021/09/26/第三章悸动/溺水/index.html","6c4c2115058b50d656a3de6e5fab6777"],["/2021/09/27/第三章悸动/约定/index.html","a0a076f807fb0e8a5ad9122db4492e51"],["/2021/10/03/第三章悸动/女闺蜜/index.html","29de4dfa193516815181bbe5a307b037"],["/2021/10/05/第三章悸动/持之以恒/index.html","562e14c8f07b91f370a64d4d5f311125"],["/2021/10/06/第三章悸动/想看雪/index.html","389115d6c281904c503f3b578a664957"],["/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","0e2d313e3e3f3bb7eb5e0d938a0297cb"],["/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","114891871f5cebd3649c99ded9d3fb31"],["/2021/10/21/第三章悸动/同频共振/index.html","8f38426b26b20970931209058746f9e0"],["/2021/12/09/附件/第一封信/index.html","6f501b9dec02478660845f2f1f6151a2"],["/2021年目录/index.html","c1bc088cc116b328792437865b07bd54"],["/2022/01/01/附件/第二封信/index.html","4982e01dc9664c8ce39997a93e4a57aa"],["/2022/01/16/附件/第三封信/index.html","42ee377f5274ff187653368042a1d024"],["/2022/01/31/附件/第四封信/index.html","a014aca4e205e2d4014140e603e95c6d"],["/2022/04/06/附件/第五封信/index.html","989ea879f13b47d0c7ba1ffa7c42e2d3"],["/2022/10/23/番外/喜好篇/index.html","4e906a9e036b33ea3303be40df50b1a7"],["/2022/10/23/番外/重要日期篇/index.html","fa0c7c52e2aa96b8186774443670c683"],["/2022年目录/index.html","e973084bd163ba512e8a6c9f9af00334"],["/2023年目录/index.html","bda5c7988a27c93be673fdc4b4d013e0"],["/404.html","844834cf5e65a38181266fc8c85e83ba"],["/404/index.html","ca174c5d3f16e19eff30d539ba05a88c"],["/about/index.html","028e231419bc500ab5f2606d3ab8668a"],["/archives/2021/08/index.html","fc8bcc877bb9ff15ca2868279b13b5aa"],["/archives/2021/09/index.html","5af6e02c7e625a4442dc1a38c47be722"],["/archives/2021/09/page/2/index.html","4b65c919af6474fc00f5b3d2677262a2"],["/archives/2021/09/page/3/index.html","d7a14bbf2f86de85759358af321466e4"],["/archives/2021/09/page/4/index.html","6e9418b33482cd45098051160ef4472f"],["/archives/2021/10/index.html","abda584dc3ecdb8f9b9fdea466cebcd6"],["/archives/2021/12/index.html","bf30d3cb6ab58646fbf1d19082d128cc"],["/archives/2021/index.html","81dd0bad152131ebb32320acbe7ebcc8"],["/archives/2021/page/2/index.html","b219bdef7004d859a306edac60ae3f7c"],["/archives/2021/page/3/index.html","f3bb2ee1bf5e4a1d0a87aef98da2ec09"],["/archives/2021/page/4/index.html","f0fc7e5cdf5d87671f286c6a0b3b07d4"],["/archives/2021/page/5/index.html","1775cea4b15e30682ed4a233f4e06500"],["/archives/2021/page/6/index.html","7569ab7d2ae9e5ef536038b94420b4d0"],["/archives/2022/01/index.html","03e3033900f27f327fe8c75b677eefa6"],["/archives/2022/04/index.html","b9814e4704f597afa13c602f19a63975"],["/archives/2022/10/index.html","2f456e66bce7b4cd31b150fa6b25007b"],["/archives/2022/index.html","909301291159e71c7952f3e71dc2bb8d"],["/archives/index.html","6eeb4ae48fadc61b9327c1e3d03b41ba"],["/archives/page/2/index.html","4c56f7ba99fa48a5f5a6987f9fad69eb"],["/archives/page/3/index.html","891693e233afc557cbe265d262f80fb0"],["/archives/page/4/index.html","aa393907f26b0744c8e84c9f763d6558"],["/archives/page/5/index.html","b578cf45c60ccaaf3ad66533ee7f8ed4"],["/archives/page/6/index.html","0b86ea515fd9ddadb441246d7f1f50ce"],["/archives/page/7/index.html","64d1dcfa546a4fbe9e96d7908e8c281d"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","fa46810c497d72cf98329c081f4692c1"],["/categories/前言/index.html","0a9162fd250fd50357af146724d2ea4e"],["/categories/番外/index.html","95705d199349b5282be6f1b66b7b980d"],["/categories/第一章-初识/index.html","35235e9ac7bb97020cacde30bf38ebb6"],["/categories/第三章-悸动/index.html","fed525ec2056d5149676d4b8466f597f"],["/categories/第三章-悸动/page/2/index.html","b05ad52cac7191a773074968c97edf3a"],["/categories/第三章-悸动/page/3/index.html","3c3d81d1519a9dc9aed843164846e8b0"],["/categories/第二章-情愫/index.html","b140fa6201da17bdd2d668db4655d4ff"],["/categories/第二章-情愫/page/2/index.html","30a90bf2c13a47f192e4ccfde729e51f"],["/categories/第四章-发展/index.html","e5b9d378a6b881264cfbde177112a46f"],["/categories/草稿/index.html","e0b70deb9637e4dcd1cd3d4d3e3fed91"],["/categories/附件/index.html","f04b048f52663d321110deca2a7769ca"],["/contact/index.html","ef55f08e19f00f30ff195d113e0ec2fb"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","6068eaa858caf954bbf01b9342678811"],["/index.html","8aa697614f461eb456dfc2d13a15b90c"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","87c372933bcb815be2146a3aecae6b59"],["/music/index.html","a8dcb4e01e2240dca5d921f78549fd59"],["/page/2/index.html","abb14769fbf75f201611443e4f6e1109"],["/page/3/index.html","07954522b27d2746d07ee1aea2b34020"],["/page/4/index.html","db59db95b140d173a80747b0b5e52943"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","5de67da23fdf3f64c6711fca93ab7e91"],["/tags/index.html","ea2d2c2db79e296f2af15d9d7c2dde82"],["/tags/一百天/index.html","38eaf78795f367fa11a3adc9eb90b966"],["/tags/信件/index.html","3e617783a231cb636d3ebbee94680ab2"],["/tags/喜好/index.html","08d33d222635322fbcd62ec2109dc0cd"],["/tags/想念/index.html","57da64bf5b4d6936bad0f7a4bdfe9572"],["/tags/故事前文/index.html","0bbf156071e158a4b9e29d97a75bf87b"],["/tags/春节/index.html","21c9789259fdb6d4e9a97a7392860ba6"],["/tags/生日/index.html","809f36b141e4637127c85518b5c6ca51"],["/tags/番外/index.html","e35d379d3c4435c4d27d3796b818f592"],["/tags/第一章-初识/index.html","914318c07e8a23248d39bc45ee8a6fee"],["/tags/第三章-悸动/index.html","1a42c0171e1948d229a3495893fe3fc5"],["/tags/第三章-悸动/page/2/index.html","fd2c09689baddd3d6cbe73f37dfb8bd3"],["/tags/第三章/index.html","87370c24a8a6931a5059e931e6474ca7"],["/tags/第二章-情愫/index.html","666def83c83f16830da4f16e6daf8f94"],["/tags/第二章-情愫/page/2/index.html","13cdac20b9ff39eaa453a552b711097f"],["/tags/第四章-发展/index.html","51ef36c7367d1fbe164cf7358dc2f457"],["/tags/草稿/index.html","06aa7532fe23fe99bcb654dbbda59ae6"],["/tags/跨年/index.html","3ca04d2690f52314c7cacdba16b0b0b5"],["/喜好/index.html","5049377bb60d495060c48b439051c3d8"],["/她和我的照片/index.html","8145e10939199bf15cf55d9e4602cf16"]];
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
