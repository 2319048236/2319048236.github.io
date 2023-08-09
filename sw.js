/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/project/2021/08/24/前言/故事-前文/index.html","283368ebf5cef4528a450d7eea317cb7"],["/project/2021/08/25/第一章初识/破冰大会/index.html","0d6ec7fbefd85123cb2ae1d989a8a817"],["/project/2021/08/27/第一章初识/私聊记录(一)/index.html","f0861ec7dff1c6250b78f75036f4bfce"],["/project/2021/09/04/第一章初识/开学/index.html","c921c134406541fc6b01f583d8188793"],["/project/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","1347d681d6a233a97329aeddad1760ff"],["/project/2021/09/10/第二章情愫/有效择偶权/index.html","eadc1e9b7c43fb7060b6e99a8c7557e1"],["/project/2021/09/10/第二章情愫/本章概述/index.html","5f57ea62be092afdf2db2b926eb11711"],["/project/2021/09/10/第二章情愫/鱼塘/index.html","04d403d3c394ad9cae6d8ce0ed6a2214"],["/project/2021/09/12/第二章情愫/死缠烂打/index.html","d7290d93d9377ec5075f7afe0be417fb"],["/project/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","c80bf7408032a9280d716437c8ac2be6"],["/project/2021/09/15/2021-09-15/index.html","5edd10f6f3a2d7ac897513e74624634f"],["/project/2021/09/15/第二章情愫/微信好友/index.html","3e62b2683f68d654194cb0083ce11bb7"],["/project/2021/09/17/第二章情愫/中秋月饼/index.html","02162c470eb1de38a9ffeb0414017006"],["/project/2021/09/17/第二章情愫/吃饭/index.html","21515c1314a1ab454a82d864a7868bb6"],["/project/2021/09/17/第二章情愫/官方认证CP/index.html","a36436fa00c4732a1506ed27e5a687d3"],["/project/2021/09/18/2021-09-18/index.html","0dfa7880c68fe7dcb659c92a08a95e99"],["/project/2021/09/18/第二章情愫/续上火花/index.html","053af24f19267662c0c0fb50b1e8bce3"],["/project/2021/09/20/第三章悸动/袒露心意/index.html","faf98d550ecd81a30aa8f7b2c73c4c21"],["/project/2021/09/20/第四章发展/进展/index.html","4df53782a8dd7bf207721665dcb8e87d"],["/project/2021/09/21/第三章悸动/中秋快乐/index.html","1f61d2a6648db850bea28b998a6c294f"],["/project/2021/09/23/第三章悸动/特别关心/index.html","e73044fb2213f4ed05bb165f1e14bfc7"],["/project/2021/09/24/第三章悸动/推课表时间/index.html","fee683205ad0a20ba14ed1e7999d3311"],["/project/2021/09/25/第三章悸动/开会的小插曲/index.html","dcebb1cd6fca277a88f624c1fcbcdbca"],["/project/2021/09/26/第三章悸动/溺水/index.html","bc6752fdaa39c6ea8b326eb063dae2b4"],["/project/2021/09/27/第三章悸动/约定/index.html","f702c58a946d44c50a69aa30eee7ff0e"],["/project/2021/10/03/第三章悸动/女闺蜜/index.html","21d8aebf60d3af192862c81fe7b13361"],["/project/2021/10/05/第三章悸动/持之以恒/index.html","d1de5bf524a2c9bc3318fa23348bca7d"],["/project/2021/10/06/第三章悸动/想看雪/index.html","a6bb4d40056e6adbc686d4cfe9e1e0b6"],["/project/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","f45d8793b212d14c47b0732cc9d95f3d"],["/project/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","fd77297c347d91c6132e617e659222c1"],["/project/2021/10/21/第三章悸动/同频共振/index.html","8148a458bdcca28fdfd2880a1f85a5de"],["/project/2021/12/09/附件/第一封信/index.html","a8273939f7ff87296b7132bbd9c83754"],["/project/2021年目录/index.html","ffa84d543625d3a1a4b0d569d71858d3"],["/project/2022/01/01/附件/第二封信/index.html","c6a5432022d921eeca6606fc5b077161"],["/project/2022/01/16/附件/第三封信/index.html","4ea01d6cb74d702224d0e3de613fe00c"],["/project/2022/01/31/附件/第四封信/index.html","f621423c5ca48c77ca2e9d99e84fccb6"],["/project/2022/04/06/附件/第五封信/index.html","28ae3ecbdb0d7b355277f1d9080531e7"],["/project/2022/10/23/番外/喜好篇/index.html","431eebac33865a07806ae3ff30d2d6d0"],["/project/2022/10/23/番外/重要日期篇/index.html","d8660a077c80dd2a6c8d9e91c283f521"],["/project/2022年目录/index.html","8ac8134b640a8e69cf51b8ab5e694645"],["/project/2023/02/13/二三年/二月/看海/index.html","d0075150467e7acb6dade33dee1b0e7c"],["/project/2023/02/18/二三年/二月/去机场/index.html","59abf644c8895627d33dfecda59f0188"],["/project/2023/03/02/二三年/三月/对感情的一些看法/index.html","94d69c6c59dca5f9d863f6138fbb271d"],["/project/2023/03/28/二三年/三月/一双鞋子/index.html","5182d1e8ccee5abf407b2cc7e1adb4e8"],["/project/2023年目录/index.html","78f07e87a4adc17610d2c3f9d57bfdfd"],["/project/404.html","e41fa12ba449f14c8ad0dacae9efcdea"],["/project/404/index.html","512250b9b31a575155d917fd18f582c0"],["/project/about/index.html","fd492baf96fd1aba9cb197853f02cf42"],["/project/archives/2021/08/index.html","1ba524fa07d0b565c149dc21c5c7c1dd"],["/project/archives/2021/09/index.html","b3a5fa7c14cfd09982afffd7dc76bb37"],["/project/archives/2021/09/page/2/index.html","4522852fa29cd68589b8bbe7ed91721a"],["/project/archives/2021/09/page/3/index.html","ff309527de7846fd101b1d5f5c3f1552"],["/project/archives/2021/09/page/4/index.html","df68ff346c057987f95b4a9af6b47746"],["/project/archives/2021/10/index.html","85aba6b9de5737d1daed5cd5c15a17a9"],["/project/archives/2021/12/index.html","d36e10d9ec2f269727b68e4065c803f5"],["/project/archives/2021/index.html","1aff0d639eec19d06f16fdc14a15d7f3"],["/project/archives/2021/page/2/index.html","23f5101788d0b5b3bcff8b85bc61aafd"],["/project/archives/2021/page/3/index.html","fcc49c35d2d38d25e50d5eca49ccfba0"],["/project/archives/2021/page/4/index.html","14d6f46282c6cbb45a8b97047be7d16d"],["/project/archives/2021/page/5/index.html","ea7f5c2e33f36406fc774ad72161bdbd"],["/project/archives/2021/page/6/index.html","39956f8a9d18a53453784d42223184e1"],["/project/archives/2022/01/index.html","c83c48fdd7503ac5ff7ceb0504ba4a05"],["/project/archives/2022/04/index.html","f7b28f91d893fcaa3e6aeebb0d13ddff"],["/project/archives/2022/10/index.html","ef83b7fd1aaf6359585e6b407a68e52c"],["/project/archives/2022/index.html","439ab07d2e5545d7e412733098c0d0e6"],["/project/archives/2023/02/index.html","07565f96c17adba8022ebc1dbd898b9d"],["/project/archives/2023/03/index.html","5e36ca9c925d0d8d3b1cab4335d99d6c"],["/project/archives/2023/index.html","d61024bd25e1b61de9d03cf1f0377d3d"],["/project/archives/index.html","f6cacdfc59de95f779ad80ab6030871e"],["/project/archives/page/2/index.html","8f0f3397b46549f758dfb8044dd6f633"],["/project/archives/page/3/index.html","db5452a50fe92635ee82f39ac8f8ba16"],["/project/archives/page/4/index.html","bbb7bbaba0a89c0e492690fda3fc9fd6"],["/project/archives/page/5/index.html","6cfcad9adb31a2281001cbbd6ad17a3d"],["/project/archives/page/6/index.html","ad542787517a3cfb11499c8669ad3b20"],["/project/archives/page/7/index.html","cd4ccd27300e5573636dd5b1db80f7b6"],["/project/archives/page/8/index.html","7d78e78ca5e72fd700fcd89ac55f793e"],["/project/categories/2021年九月/index.html","c24313c77682dc073ff21c4fb54da127"],["/project/categories/index.html","a9bce1443f4b8213bf8a0e75b159e0b1"],["/project/categories/二三年三月/index.html","4c60203d69eba6becb5bad24322be893"],["/project/categories/二三年二月/index.html","04631dd013ebbb6741f3184eb166667d"],["/project/categories/前言/index.html","b5d3ec197b566a30e0d655075bd66824"],["/project/categories/番外/index.html","5103ded07f41dde1b54687d0f905725a"],["/project/categories/第一章-初识/index.html","7132bdca9e36dacc54762961c4846154"],["/project/categories/第三章-悸动/index.html","9d986cdc254e100c330edae7d25e6523"],["/project/categories/第三章-悸动/page/2/index.html","3b1d96a5fba5a0cf6c527c587f9eacab"],["/project/categories/第三章-悸动/page/3/index.html","59bd2a185ffe153891a40edd84afa589"],["/project/categories/第二章-情愫/index.html","3be09526782b999b27a1fe35a50c8e20"],["/project/categories/第二章-情愫/page/2/index.html","50b0b67cb4f42d77dcda1320113ff480"],["/project/categories/第四章-发展/index.html","3a754c713561d21b05519de270333e31"],["/project/categories/附件/index.html","f25866540d80aca0442913be684a6414"],["/project/contact/index.html","d87cc258bd7fed09a24f3cc37dbd8cf5"],["/project/css/index.css","5e2c8bbb7fcc4dcf1dea5740d5b71d63"],["/project/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/project/gallery/index.html","3b19397f0d9a16d663c33d10d027132e"],["/project/index.html","395ad390632764d17f29bf6af345b164"],["/project/js/index.js","a1258f18be2726dc809260de62eba819"],["/project/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/project/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/project/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/project/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/project/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/project/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/project/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/project/movies/index.html","0e4209793d61a9f14c9f1ad0059b9927"],["/project/music/index.html","19576064950ba0130c39ad29f6f8729d"],["/project/page/2/index.html","816e55e5f107381f8f2fce94906e7de8"],["/project/page/3/index.html","b4d06ad71da263ebff9cf6ba23f687ba"],["/project/page/4/index.html","8ffd342aeef65f9d1b84e59809af93de"],["/project/page/5/index.html","a88a7090663550da089e62a299607345"],["/project/project/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/project/project/style.css","5e2c8bbb7fcc4dcf1dea5740d5b71d63"],["/project/sw-register.js","af8724484b4d375828c16768bba486e8"],["/project/tags/2021年九月/index.html","920ae368f664d55f75a054c28dc9d9a2"],["/project/tags/index.html","2c895fd0569f183ec68e40b21910f330"],["/project/tags/一百天/index.html","07b3af4a24e61b9ec2c53a2c2197197e"],["/project/tags/二三年三月/index.html","534b2b0337b4a067c45057c3b62f1ac6"],["/project/tags/二三年二月/index.html","673d7a693ba5271a3458133b7edf8413"],["/project/tags/信件/index.html","841867f558c8b35eeff4b8d7920eb781"],["/project/tags/喜好/index.html","49dee31eeae68fc6736854f9049550e9"],["/project/tags/想念/index.html","be1eaf1036518cf135b90ce078c0125a"],["/project/tags/故事前文/index.html","d94bdd1031b87a0b845945efda0b7faf"],["/project/tags/春节/index.html","c1aebdd5c36d1aa0a35506c794fd9a80"],["/project/tags/生日/index.html","3eba7d7f24fd46a81624b44db48bdc71"],["/project/tags/番外/index.html","6b747df9dd9d3de6eac9d68059228981"],["/project/tags/第一章-初识/index.html","f005ac5e0797f252dbeb3ecae2276147"],["/project/tags/第三章-悸动/index.html","3a205c07a11854ad319858dadfe2c64b"],["/project/tags/第三章-悸动/page/2/index.html","4f6d3e4cb6f13a5a389c8bdd4481646d"],["/project/tags/第三章/index.html","728e276118674c8ddefabf6e8b8d65b8"],["/project/tags/第二章-情愫/index.html","4aab0ccba166d6dced8a3423faa8f8e7"],["/project/tags/第二章-情愫/page/2/index.html","fd7b9efb5cd92a7d26522a2323ebde7c"],["/project/tags/第四章-发展/index.html","c758d2f703781e6afc2324db5f886982"],["/project/tags/跨年/index.html","ed363ae15f8d10cc8c0262e35cc5b501"],["/project/喜好/index.html","2b6dcf19f79d5018c11173ff5ded57c2"],["/project/她和我的照片/index.html","9c6bfd10fac7a0f3ae8db4829e66820e"]];
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
