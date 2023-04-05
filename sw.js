/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","910a6c48b385820b9954f535a3453959"],["/2021/08/25/第一章初识/破冰大会/index.html","2a67835cc00c5da788527dec890e3d7b"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","6fc77fd8b361092673864109db2e8936"],["/2021/09/04/第一章初识/开学/index.html","fc153f4b657d8b0f8b35c4d550138fec"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","1020032338e632b8f514aa43ae860f17"],["/2021/09/10/第二章情愫/有效择偶权/index.html","a8687faa0a52d8e360a1674de16e5e9f"],["/2021/09/10/第二章情愫/本章概述/index.html","88c33b3accfda24614f5ebcfd8ea4c55"],["/2021/09/10/第二章情愫/鱼塘/index.html","e9cd58db225f080810fe77d5ccf3e948"],["/2021/09/10/草稿/草稿/index.html","e2817f74aab31a3a41180100cdc99a9a"],["/2021/09/12/第二章情愫/死缠烂打/index.html","0a38f46a586dfd6bb6120f1498af1cf4"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","566f3362c1a567b4a5660b1d09c9b015"],["/2021/09/15/第二章情愫/微信好友/index.html","1d227ce4c7c8e42611a263a641d9cb33"],["/2021/09/17/第二章情愫/中秋月饼/index.html","e90d26a0378c6a71b36f5ce3d5f5c5a7"],["/2021/09/17/第二章情愫/吃饭/index.html","433ce78052649d03c1a783bda94c7d8f"],["/2021/09/17/第二章情愫/官方认证CP/index.html","967a610a6b20abe42c74b87b3d3188f0"],["/2021/09/18/第二章情愫/续上火花/index.html","2d33225a0ab62f950bac7b318284690b"],["/2021/09/20/第三章悸动/袒露心意/index.html","b2445b99f21c24d8bc906a95d1ed632c"],["/2021/09/20/第四章发展/草稿 - 副本/index.html","0941e5bd08d5dc63a1ef96e3bdbd5f66"],["/2021/09/20/第四章发展/草稿/index.html","57e774c74e696731797f396f2013104a"],["/2021/09/21/第三章悸动/中秋快乐/index.html","6b1a1b72e1ccf3b694947b7cb18994c6"],["/2021/09/23/第三章悸动/特别关心/index.html","234e1f5c42f7e28a27fa5d2b9faad452"],["/2021/09/24/第三章悸动/推课表时间/index.html","93b43921780af7464cbc139dc3a09863"],["/2021/09/25/第三章悸动/开会的小插曲/index.html","0573da8df9d7b3f317acc545f4581eb6"],["/2021/09/26/第三章悸动/溺水/index.html","c67c18715a118b6fffcd27870fcea643"],["/2021/09/27/第三章悸动/约定/index.html","d964672bd42c90a3ba496787874ee2fd"],["/2021/10/03/第三章悸动/女闺蜜/index.html","fdbc5b14512536fd0a947c43b5d99b3e"],["/2021/10/05/第三章悸动/持之以恒/index.html","ad5ce1882ba3fc55ff98e22917f13c09"],["/2021/10/06/第三章悸动/想看雪/index.html","d0a29401020f5cad570e6fbe44d8d41d"],["/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","7245977307d0c7c9d0e8d3be2139e4da"],["/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","ac4ae51755bb974303f1996578dd93a7"],["/2021/10/21/第三章悸动/同频共振/index.html","14031109466bbb6bbe6091a22f00505a"],["/2021/12/09/附件/第一封信/index.html","5693aefa0cbf5e8ab7f9bb3f89a77057"],["/2021年目录/index.html","59e82932eb19a4f9c0d58bc0e3285c1e"],["/2022/01/01/附件/第二封信/index.html","8af1ddb1721f14fed3c92eff506eee13"],["/2022/01/16/附件/第三封信/index.html","829333ca8afc632d64e82d552ef9c562"],["/2022/01/31/附件/第四封信/index.html","17ceb58c2b7ce331339dfe57767b2012"],["/2022/04/06/附件/第五封信/index.html","d754b3b25e650cfa73e7c23232b7ef2d"],["/2022/10/23/番外/喜好篇/index.html","f2516f9f3166252626d7fa66b663adbc"],["/2022/10/23/番外/重要日期篇/index.html","7a48b5c3451a2c828a9c3e26798f9adf"],["/2022年目录/index.html","ff04d590a18a39fa159462f69a14a61a"],["/2023/02/13/二三年/二月/看海/index.html","dd81c6213064f87fd7845052bf7d8b94"],["/2023/02/18/二三年/二月/去机场/index.html","48e1673f0e471301f5e7fc30597be312"],["/2023/03/02/二三年/三月/对感情的一些看法/index.html","b4a4272589a0b037ea5cf130b93992fb"],["/2023/03/28/二三年/三月/一双鞋子/index.html","44725ddc01f277e83113fdcb668eb2da"],["/2023年目录/index.html","881cb43ee55d567f9444bc62470c037e"],["/404.html","f0ab8b885f4f5f3fa1e2ea4695c13897"],["/404/index.html","d6427ced0c278243da2fbb181b9a032d"],["/about/index.html","242281f20c11fece267f3a1eabecf754"],["/archives/2021/08/index.html","538832f61ea57b7c4da1c50eaa36ba70"],["/archives/2021/09/index.html","64bf3745bb51cbfea32aa568daf39781"],["/archives/2021/09/page/2/index.html","5cdd77213f042c59103e27f9317d5a22"],["/archives/2021/09/page/3/index.html","971dd52c871804e6919534ca43c7f650"],["/archives/2021/09/page/4/index.html","c2c1664dfe646396f1d5af3a9627a3f8"],["/archives/2021/10/index.html","e1a37a3534aa358d9985821f6e887bc5"],["/archives/2021/12/index.html","a983a13e1d5f75ef6fb8eeac8efda075"],["/archives/2021/index.html","50d4f4eff6057a186382c7b1838a8071"],["/archives/2021/page/2/index.html","eff897733302a447a4c729eaaad1c734"],["/archives/2021/page/3/index.html","96ebbb8c25ca1d271b43a2b35f888cb0"],["/archives/2021/page/4/index.html","6775d101ccb4e2cf8667cab2228c175a"],["/archives/2021/page/5/index.html","a2d5b57d17dab531d7919339ded4a035"],["/archives/2021/page/6/index.html","0e64afd975c260f39804e56375fb0311"],["/archives/2022/01/index.html","656e4647e0126f4a4191b9b9214440c1"],["/archives/2022/04/index.html","7dba8adf10f32764b469897c2b5f5b55"],["/archives/2022/10/index.html","994370ead8f80f2e004f9e875d071db7"],["/archives/2022/index.html","690053d59a77a2a221b331ad06c2a454"],["/archives/2023/02/index.html","e1f9d73238f59264383e003203402aaa"],["/archives/2023/03/index.html","f7301df3dd7725da69c6e5c72b3ea6ee"],["/archives/2023/index.html","c291f0d364d961c22aae0d5f3c25c23d"],["/archives/index.html","bbeff62ccba9e03cb128991ee81aa6d0"],["/archives/page/2/index.html","d52debbc61876a9a4c4d8f91de3a7672"],["/archives/page/3/index.html","b9277a06099e20106ce2fe51fe1764f8"],["/archives/page/4/index.html","fed615ec894233928c11daa9aa3c205e"],["/archives/page/5/index.html","e4fc8a8aec569bdada0933f21d65b986"],["/archives/page/6/index.html","fbac8a5302973e644956156cb1b21658"],["/archives/page/7/index.html","ef77f96ef86243a9965668877da64712"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","fc0f8576beae1b2a0f4cedb34ff0b327"],["/categories/二三年三月/index.html","fba1019672277b884cc3596e0f6274af"],["/categories/二三年二月/index.html","4266973d6f5fd5636509f624badfb8a5"],["/categories/前言/index.html","649a151a953ff5697b9e24d94afdcf6b"],["/categories/番外/index.html","004a0225dab6c39681cbf40a021974ec"],["/categories/第一章-初识/index.html","0e3458e78472c874c0261e48a08aa487"],["/categories/第三章-悸动/index.html","9f9e0baf10194d5f6da00fb0f7b02e82"],["/categories/第三章-悸动/page/2/index.html","e7941f651904b33c150483408eead592"],["/categories/第三章-悸动/page/3/index.html","590a04ee6e155c8ff1def0e720b6f4a3"],["/categories/第二章-情愫/index.html","40df4922a66e91458e5fbc00776236c7"],["/categories/第二章-情愫/page/2/index.html","2030672bd970e1c3d0d0dfae962afa68"],["/categories/第四章-发展/index.html","9fc633c91ec076cd1708ba774941e34f"],["/categories/草稿/index.html","fc55f4d88471a87818da3cb9542a8f25"],["/categories/附件/index.html","0ca43d1f2971e3b7f82f2b1433f63584"],["/contact/index.html","b81aa91012a5e8fc7168d987b2d5e73b"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","e0a116c1660b23d957246e723325d5b1"],["/index.html","613cc7fe3ac2cebba6629b4ed71f6fe2"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","867b305164236d149503635a8c1a702a"],["/music/index.html","6e7d9c1032786d41f1dd267e07102959"],["/page/2/index.html","244e91441e4d64f48230c05d826a191f"],["/page/3/index.html","6d11177e721ae06547a63335bea6e472"],["/page/4/index.html","a1e6c7f640065d4531a66603918e55c7"],["/page/5/index.html","bea6e5e15e321ca73c1511d25d7745c4"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","ce990829228b120c3e301d99fcf92b36"],["/tags/index.html","bcbd2daeec153be9af2d4bc3bc77c1c4"],["/tags/一百天/index.html","63f5c0df71ada3cd20ab96c0b91e5eac"],["/tags/二三年三月/index.html","76f888a2dc01a3b891e189a2ad7e3912"],["/tags/二三年二月/index.html","e0254520a263bfa852f62ce08e822c3a"],["/tags/信件/index.html","a162781411e88c2bff286fa738cca1d9"],["/tags/喜好/index.html","476e7db936ed4f9945628e47ab8b3b0c"],["/tags/想念/index.html","a3b0ecbe19a0d66eab9cc428ce644621"],["/tags/故事前文/index.html","806db9c36ac6f476ace679a7e218000e"],["/tags/春节/index.html","9618427913ab62e78def1f5a7d06fb76"],["/tags/生日/index.html","f5a96d852d8bb5721418565fb1c780af"],["/tags/番外/index.html","7b767d29011ace77d5ef8b475db37a4e"],["/tags/第一章-初识/index.html","4de86d30590515651ad46a677579f7f7"],["/tags/第三章-悸动/index.html","2749ad52af56e123460857478cba3800"],["/tags/第三章-悸动/page/2/index.html","13834a5d4d0b00112e544a13da02edc0"],["/tags/第三章/index.html","239774929b89888d7529b770b9b815c9"],["/tags/第二章-情愫/index.html","8046d52d96f84dbe82a7396ec7fc1397"],["/tags/第二章-情愫/page/2/index.html","1f7b4b62bc0b3b86bdf2a9b02b623996"],["/tags/第四章-发展/index.html","351161ab2adc4ac24c2153910550315a"],["/tags/草稿/index.html","2bb30791b863cd6f77d5debedd9cd985"],["/tags/跨年/index.html","dc587737551b54b29173731171a4ea2d"],["/喜好/index.html","1f4602e67448c8fb51be81ce9b218e1c"],["/她和我的照片/index.html","a83d8a3f4043cf8abaeb3822f058df2c"]];
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
