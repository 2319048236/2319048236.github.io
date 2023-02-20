/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","76612b1b0e7577a9d20c64104460205c"],["/2021/08/25/第一章初识/破冰大会/index.html","4c0313d097f171a0c17e9711b6970023"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","345881fcfcc4cf355e8116be7f362cae"],["/2021/09/04/第一章初识/开学/index.html","cc5634d4ab130d712892b507ce550281"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","1136af8affe4da69d9225e882859959a"],["/2021/09/10/第二章情愫/有效择偶权/index.html","da5b759ec4d34b18ed235a2d4697cf53"],["/2021/09/10/第二章情愫/本章概述/index.html","be0a92d872c5fb40c855f095c64778f9"],["/2021/09/10/第二章情愫/鱼塘/index.html","9481f9ae025711c2f2935f1de292db4e"],["/2021/09/10/草稿/草稿/index.html","fc41ebf3463ee2648b9f3501980e7d1e"],["/2021/09/12/第二章情愫/死缠烂打/index.html","9c2ef45d4d2864a9c0dbec62cb989264"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","4e7e66a88453366b4a956e263c9b85d0"],["/2021/09/15/第二章情愫/微信好友/index.html","58b6523aaf117f082bd30b106eb9c4a6"],["/2021/09/17/第二章情愫/中秋月饼/index.html","86500305c11079925573396e3bff465d"],["/2021/09/17/第二章情愫/吃饭/index.html","e26b8044af52a182c5c65c3d456dffc8"],["/2021/09/17/第二章情愫/官方认证CP/index.html","d334209107d0dcc206989b9e8d211770"],["/2021/09/18/第二章情愫/续上火花/index.html","e2f8d2bc09db7a601c723babb1c996dd"],["/2021/09/20/第三章悸动/袒露心意/index.html","46d7a7e03c0621dd7c149c74b84cdbad"],["/2021/09/20/第四章发展/草稿 - 副本/index.html","8759f9dde1223ff264f5306063b5c91e"],["/2021/09/20/第四章发展/草稿/index.html","d370ebb5102822e9dbcc0826ce20f2a1"],["/2021/09/21/第三章悸动/中秋快乐/index.html","c072d3f459193dd158b3b6e12a9eeeb5"],["/2021/09/23/第三章悸动/特别关心/index.html","a1a3a0eddb61149352ae4b12c1f40ae2"],["/2021/09/24/第三章悸动/推课表时间/index.html","f58b4abc2e390b662d79d0c7cf16b0c7"],["/2021/09/25/第三章悸动/开会的小插曲/index.html","7b3c1a9c21993c156aaaa29e73dc992c"],["/2021/09/26/第三章悸动/溺水/index.html","73ea42a1f2d537afe4c1fe9a0f51d520"],["/2021/09/27/第三章悸动/约定/index.html","d4a3a6402c6103aa6260701a66551ddc"],["/2021/10/03/第三章悸动/女闺蜜/index.html","60ec1db42c7948a7739fa024a02f0bf7"],["/2021/10/05/第三章悸动/持之以恒/index.html","7bd4b102ad6c9da56067cac785345c66"],["/2021/10/06/第三章悸动/想看雪/index.html","9e9fedf3529caee8298b8c617dcb9051"],["/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","8da273ac7c184bd218fa59274401a7e4"],["/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","f147d76e7c72853d0cc798d44d913a8e"],["/2021/10/21/第三章悸动/同频共振/index.html","e812bca9ca3e7e9713e3d60363558ca2"],["/2021/12/09/附件/第一封信/index.html","255b7dd787b607d220c0d7ec4261467f"],["/2021年目录/index.html","2433e52abbc8bc61ef478683a6bc8738"],["/2022/01/01/附件/第二封信/index.html","8b0e3bb0d0aa48ce2ec9b2b4517daf33"],["/2022/01/16/附件/第三封信/index.html","915801c489b918a5e2553f66a8ffd80e"],["/2022/01/31/附件/第四封信/index.html","1b7a0b2fb328fd3d375364fd0688cae4"],["/2022/04/06/附件/第五封信/index.html","40da0c5c1b046a68c165936522e4a32c"],["/2022/10/23/番外/喜好篇/index.html","d6107f7cf0fe810a7686b3637f872059"],["/2022/10/23/番外/重要日期篇/index.html","f5d4107af90b47342a9d08f8e0289856"],["/2022年目录/index.html","c6740937248f1606149e3a2aeedf9036"],["/2023年目录/index.html","ed8dacf323a45ad8c94b72a040dba28a"],["/404.html","9f5eac38849c5022ceea9407cdfbc36a"],["/404/index.html","feda37969373206389771394ba94590a"],["/about/index.html","0687bd99107d4e9a608529fcb6b1e5bc"],["/archives/2021/08/index.html","6f8e2a8d4d6245591e3c295b49aa1bdc"],["/archives/2021/09/index.html","e9d4c1d1c600ec2d0526184aa96bbb3c"],["/archives/2021/09/page/2/index.html","83541124c9b94ca600d610678b3082fe"],["/archives/2021/09/page/3/index.html","f88d2bbd23c6983e85067fe125229b87"],["/archives/2021/09/page/4/index.html","f7441f6dae406f7e9f8cbcf6ded8cc0b"],["/archives/2021/10/index.html","18fe97e7826be65a210d9ddb3d596be4"],["/archives/2021/12/index.html","956cdf47017a0e5b4aa3bc0f24ea2289"],["/archives/2021/index.html","4330382ccadc8d65500e9fd49c7a29a6"],["/archives/2021/page/2/index.html","c54560ffd6cb3fe70bef64632b33b410"],["/archives/2021/page/3/index.html","9dd34e887ff980ff5f94e69ba55242b1"],["/archives/2021/page/4/index.html","49333432643785d375bdbc8f4a57c420"],["/archives/2021/page/5/index.html","9665611f88c60a2a3637ba2500a53647"],["/archives/2021/page/6/index.html","ffcd6ac366726b8ca16a519d842192ee"],["/archives/2022/01/index.html","588df8ef75d88f36c17ee4ca7a0227d0"],["/archives/2022/04/index.html","114f86492642971969069f503151718a"],["/archives/2022/10/index.html","492d24a399e6baf02ec984fbcb1ebfdb"],["/archives/2022/index.html","3a85699b5154fdd6437e70fc2697ec43"],["/archives/index.html","9407e161b39f767335a0b5668116cd92"],["/archives/page/2/index.html","952a3150e3d84a6ace04f1ac2c5b801e"],["/archives/page/3/index.html","4749aa84e338f7b76b4981aecb709c57"],["/archives/page/4/index.html","ed1afc18e245191fc18ff96662576890"],["/archives/page/5/index.html","ab90acb39c66c396c740e7ea98b85110"],["/archives/page/6/index.html","121e09342e8df07b9828952245158763"],["/archives/page/7/index.html","06be5db07a75435dc12da8af7022bd0f"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","dace8141c5c7caa3818d4fdaf2d579cf"],["/categories/前言/index.html","ca7db79e1a5df0b8a3448177da030e13"],["/categories/番外/index.html","7f6d9c8a391206b0df533cec9c38e09f"],["/categories/第一章-初识/index.html","2cc093ff6de821cde9919198a92e6872"],["/categories/第三章-悸动/index.html","92c920a48c95651d4aa799afeec55f39"],["/categories/第三章-悸动/page/2/index.html","ecb78298311bf51d2f13892101c58822"],["/categories/第三章-悸动/page/3/index.html","0759154de2e54edd3b36681584e0283d"],["/categories/第二章-情愫/index.html","ad59928f2dd9f9ea948401e6b99b55b3"],["/categories/第二章-情愫/page/2/index.html","01bdf3b33239c0ff76ee8fdbb3ce29c6"],["/categories/第四章-发展/index.html","da17679f4b1f8ceebad296530e794679"],["/categories/草稿/index.html","ba9b36f06374293516a653194150e0a9"],["/categories/附件/index.html","19a15b20b35e2742b4f0e6662db93325"],["/contact/index.html","556d69950ac6cffeb63faa536b91a1ed"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","0a597b07764b1b7ab0ddfdf923590da7"],["/index.html","d026774dcf20b9801eefd78c40b5cd9f"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","b40bd814f186ce53189246705133245b"],["/music/index.html","3188bc8c4fbc9c84bc14daf0a312c935"],["/page/2/index.html","c9a9527a0f2dddbb77496c0de2838719"],["/page/3/index.html","b4f658ee11190ee3d01b6f2685d9d6f7"],["/page/4/index.html","77f30c6bf8608547406a957f83c95a13"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","58d0cdf88f213f724eec183ddae0ea00"],["/tags/index.html","a6829e6da61aef224f621f0098624b96"],["/tags/一百天/index.html","a7e2f13318a0c3a2656e97b1164ce80a"],["/tags/信件/index.html","a681dc315f2e4dc4f2c897c66f0c20a0"],["/tags/喜好/index.html","d10e2c3099693e2f449d74d7da927b22"],["/tags/想念/index.html","66b6ba22ba03306c984ea912d80e2124"],["/tags/故事前文/index.html","03effec445e256db88890d4cb93e2c09"],["/tags/春节/index.html","152037b9806d77cdf24a1ca7fb51722c"],["/tags/生日/index.html","2265fd4292cd3d09e979a488d86af8af"],["/tags/番外/index.html","6e522864f15b40f6ec5d53aa988ea8b4"],["/tags/第一章-初识/index.html","29e9fe2aa6d929973bc8517af7ceb27c"],["/tags/第三章-悸动/index.html","b3e92e7fec71d1cfd8c6c71bd9af7484"],["/tags/第三章-悸动/page/2/index.html","a29a416af603583e20118f58128a9287"],["/tags/第三章/index.html","76635fb4b2a52e2d2fcbef2c15728276"],["/tags/第二章-情愫/index.html","49262cd6992883bae2dad14ac60170df"],["/tags/第二章-情愫/page/2/index.html","f664333ac8c7ca10fc3c788c5d6e14b0"],["/tags/第四章-发展/index.html","53185374e371612c83ae70537f5e643f"],["/tags/草稿/index.html","116dfab5ace55a75d3f81ed58fa5b07c"],["/tags/跨年/index.html","18c02a7a559de71718d2541eb9f3a93e"],["/喜好/index.html","cd04033ee13491979cbb185f584f2780"],["/她和我的照片/index.html","5c17e170f8a357a26ce6a067a976ab7f"]];
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
