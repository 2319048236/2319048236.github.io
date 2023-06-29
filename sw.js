/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/08/24/前言/故事-前文/index.html","07e371e29f724c58dc67aede10ac9207"],["/2021/08/25/第一章初识/破冰大会/index.html","7b33809e36808a8af90a971a4f466bcf"],["/2021/08/27/第一章初识/私聊记录(一)/index.html","2b6d4c4f81cdaf4b77429c17aa921a18"],["/2021/09/04/第一章初识/开学/index.html","bd6bc11d29c6571773b9c1eae8faeeec"],["/2021/09/07/第一章初识/拌嘴-喜好-加深印象/index.html","22bdf42880c196f3c164ac068aa7f6a2"],["/2021/09/10/第二章情愫/有效择偶权/index.html","eaeeb28121e14a2576773edb2e47c29c"],["/2021/09/10/第二章情愫/本章概述/index.html","df221fa6c15a4a6ded3475253d6459f7"],["/2021/09/10/第二章情愫/鱼塘/index.html","0dced0b26c802e6732f284042988f66a"],["/2021/09/10/草稿/草稿/index.html","c47a6cf8e47ffa61a865255582056c19"],["/2021/09/12/第二章情愫/死缠烂打/index.html","3754cbbd82ad331165d4f00870c6b7f9"],["/2021/09/13/第二章情愫/让整个世界都可以保护你/index.html","8b1ab3f6fd0295f326061f04fd68cbc1"],["/2021/09/15/第二章情愫/微信好友/index.html","e0ba3f7bd363ad185b4b767c8795e8cb"],["/2021/09/17/第二章情愫/中秋月饼/index.html","90ded4652ecd55adc6917abd874134ec"],["/2021/09/17/第二章情愫/吃饭/index.html","aa319bd4dfef977e557af93f596b6ea0"],["/2021/09/17/第二章情愫/官方认证CP/index.html","9aead41ba8388201cb628842ec2ea99f"],["/2021/09/18/第二章情愫/续上火花/index.html","cf180ec49282086995e6b4a8f43b9dd1"],["/2021/09/20/第三章悸动/袒露心意/index.html","dffd939d08ff2205c9bebd13e7f14b44"],["/2021/09/20/第四章发展/草稿 - 副本/index.html","5c90e206203f075ee6ce073e7aab6781"],["/2021/09/20/第四章发展/草稿/index.html","068c193d766c3ad68a955b72a698aac7"],["/2021/09/21/第三章悸动/中秋快乐/index.html","50bbd8defdf5bfb20d7cf3ea7af8dd24"],["/2021/09/23/第三章悸动/特别关心/index.html","0829d4ce817a57bfb833bdd8f20ae233"],["/2021/09/24/第三章悸动/推课表时间/index.html","cd11c92c367bd29a7a52e79c1d67db8d"],["/2021/09/25/第三章悸动/开会的小插曲/index.html","9319771376c99c98b0640604cd62ea12"],["/2021/09/26/第三章悸动/溺水/index.html","9c31832be6ffd4c955e15134b170881b"],["/2021/09/27/第三章悸动/约定/index.html","f04b61cbad809345a626b785b6996eed"],["/2021/10/03/第三章悸动/女闺蜜/index.html","786d14a2c5bbb74e24df783c840e7241"],["/2021/10/05/第三章悸动/持之以恒/index.html","fab24170002579521dc6fd4f4a6facf9"],["/2021/10/06/第三章悸动/想看雪/index.html","28488637d14f00b3b9bce29c4a0b12ca"],["/2021/10/08/第三章悸动/这样子真的很暖心呀/index.html","0a488673e9163cb4408d55b181416aa3"],["/2021/10/11/第三章悸动/谈一段健康的恋爱/index.html","56cac1330b45c481f4db58f78d270906"],["/2021/10/21/第三章悸动/同频共振/index.html","7e811988346d65556f89095552375c8d"],["/2021/12/09/附件/第一封信/index.html","cd8beab63e121737886cb47e85d56bcb"],["/2021年目录/index.html","82814d0b61f36496e96740e637d475b6"],["/2022/01/01/附件/第二封信/index.html","db649f3983efa0a68fbd0b886910123b"],["/2022/01/16/附件/第三封信/index.html","1c656a56760016468014f2f93235e692"],["/2022/01/31/附件/第四封信/index.html","73c1ed6a034f0757ed0ca038e178d517"],["/2022/04/06/附件/第五封信/index.html","5aa60c6e7786a0f03f51000482f4fe3e"],["/2022/10/23/番外/喜好篇/index.html","11d0615c40e0c9c0eccbda759a984e1f"],["/2022/10/23/番外/重要日期篇/index.html","63929ac5d8e1e77514473f135e871f74"],["/2022年目录/index.html","57a28db2ede6f954e9b2119f5e15d78f"],["/2023/02/13/二三年/二月/看海/index.html","a0cbf8d080b360cbbec86ae0734e45f5"],["/2023/02/18/二三年/二月/去机场/index.html","2de27d7809e3b10b18472dd0fc192eca"],["/2023/03/02/二三年/三月/对感情的一些看法/index.html","f0ceb5f0c2adcd71bd2cfa31a9cd632b"],["/2023/03/28/二三年/三月/一双鞋子/index.html","3f6ef12c2a3edc6adafab4a7bcd09ae5"],["/2023年目录/index.html","348dc49051e314dc2671b2b9a18559a3"],["/404.html","bebbef951e3cab5a7516d830279d373d"],["/404/index.html","9084aeebc32874ae9559e0be7be56e03"],["/about/index.html","6231338d949c4c5e246a52a3f30ed8d8"],["/archives/2021/08/index.html","63b5de5cad26335e2300aab778e79fea"],["/archives/2021/09/index.html","1fbbc8e2c8aae1986d6b3f94f05910f7"],["/archives/2021/09/page/2/index.html","314bfb270cd0adf0f3cb8418fd1266f4"],["/archives/2021/09/page/3/index.html","3ebfc4666a528f2eaac00ae7c0d52919"],["/archives/2021/09/page/4/index.html","2aece6d9cb845cabe8d43ae214913fa0"],["/archives/2021/10/index.html","82ae81a10531b6c017aea2e1a86c646e"],["/archives/2021/12/index.html","925f0d0f7bbb5a11bf4ff4a216775df7"],["/archives/2021/index.html","80e291966d5ba1cfbbd0cc7c45e87cdf"],["/archives/2021/page/2/index.html","185c94f58c9d7fba1ee493aba8eb9c98"],["/archives/2021/page/3/index.html","a2116b693da20f9afdc419807c49ed6b"],["/archives/2021/page/4/index.html","05b9134fe9a6c20f1de24a0bcbe68a8c"],["/archives/2021/page/5/index.html","5d64485da05b5585ebde149bcab7be0d"],["/archives/2021/page/6/index.html","b21ac7601fbb398ced29f892f71db7e3"],["/archives/2022/01/index.html","93591545c3761079452f00c316548226"],["/archives/2022/04/index.html","90aee5c4591009f23f12d65415986b6d"],["/archives/2022/10/index.html","9cacc8ab0d59d21cbd53159bf51921b9"],["/archives/2022/index.html","6506671ad2e67ab81734fba6b9b297c5"],["/archives/2023/02/index.html","1bbeea28228d71ca6db667bab99617e4"],["/archives/2023/03/index.html","59fcf8d43bf0f1df3fc3bbc87245bb6e"],["/archives/2023/index.html","bb92dbea41c00aa1fb104f720d257177"],["/archives/index.html","6bcb5f0107c01b478bd6028f4c45d65f"],["/archives/page/2/index.html","bd6f5c52a500f1d883771df1fb9269e2"],["/archives/page/3/index.html","0ac790e2cfdb2d4572583bc2b3361408"],["/archives/page/4/index.html","1a8cc0b52bad98caf89ad131a109065f"],["/archives/page/5/index.html","91b61a8afaff31fde4e3b82403fa2c36"],["/archives/page/6/index.html","e31fc30af61460865ed5f3146adcbb1d"],["/archives/page/7/index.html","7a2f0777f95e1ca715f7dc2aa68b706a"],["/bundle.js","916e787ddac3ed163b05085fc68dd54e"],["/categories/index.html","704f627a35d3589e811efca49df6d197"],["/categories/二三年三月/index.html","a28a3d14031b1b6a12e8adfb3bf971cd"],["/categories/二三年二月/index.html","7f6df2324d4cd9261ae1081fa152e2b9"],["/categories/前言/index.html","afdf619551a740e6001f09f16e263ca4"],["/categories/番外/index.html","fe3f41d328687d4eaba7d4ba56418c12"],["/categories/第一章-初识/index.html","673e59646f81ac4547ad9908d59a7d10"],["/categories/第三章-悸动/index.html","cf02b35ac77d025f22c4cdef36b62ae8"],["/categories/第三章-悸动/page/2/index.html","b943500a876440c4dcb38a18f61744b9"],["/categories/第三章-悸动/page/3/index.html","491673494f141cde9257b3002172afc9"],["/categories/第二章-情愫/index.html","140dbdf92ce0cb1d5978eba864bb6750"],["/categories/第二章-情愫/page/2/index.html","3debf06fafdc223a8fe75dd90c927f82"],["/categories/第四章-发展/index.html","c17cabd8a153da0da29075d6b5cfb9f2"],["/categories/草稿/index.html","a5286996d63d2af83a71f5fb64a05185"],["/categories/附件/index.html","d687891f95bc7a68b3ffd215de170265"],["/contact/index.html","b856595ab1e55d231bd81e496fbd591e"],["/css/index.css","feaea791654fdd2eafad101255c7e4a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","13979ac81eade6a157a3f4d1093db98d"],["/index.html","e8968c2a38c904e619db59554911e297"],["/js/index.js","a1258f18be2726dc809260de62eba819"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/movies/index.html","b3ae26e288d8d9552dfbcbd2044013c4"],["/music/index.html","346d74c528327f0b396f5d204841c8ed"],["/page/2/index.html","9b049c9b8c134d40b490e72fae492d50"],["/page/3/index.html","7f50ba4cb14e36a7148b4840226d5aff"],["/page/4/index.html","5a50e61dbf75d2c1cd69813d8c40a7df"],["/page/5/index.html","18bae7213032e5384624730aeceab33a"],["/style.css","feaea791654fdd2eafad101255c7e4a6"],["/sw-register.js","5ffcd5724e107a176dcaf6406ba99988"],["/tags/index.html","8776d83940c5b6240ab8a1ba8d9bfa1c"],["/tags/一百天/index.html","41bd4d1a430ae772dfb87c7fd9c4bc36"],["/tags/二三年三月/index.html","2f74425fd2107b792d6b892219140bd7"],["/tags/二三年二月/index.html","27450423a03409e48b8d671c35d9fa43"],["/tags/信件/index.html","571d6c40f3dd3b14236599cc083c557f"],["/tags/喜好/index.html","1e1efaaecd4b0073ea34068920fe9605"],["/tags/想念/index.html","6fc1d9aa7691f3ed4ea192555fd1893d"],["/tags/故事前文/index.html","51806769c9ecf6eb2e4989f5f7dc3a82"],["/tags/春节/index.html","57977ee4e1cd4f3c86598bd340b2c756"],["/tags/生日/index.html","84784e53fce3749fac5e56ec0c50c324"],["/tags/番外/index.html","47ee6c6834bee3d61bc12e5d0d42b540"],["/tags/第一章-初识/index.html","529d7844409904414b24b8b1e326778d"],["/tags/第三章-悸动/index.html","39d1472314a782987055c9a0f01900f6"],["/tags/第三章-悸动/page/2/index.html","8fc7e7abe203ce0d6ca2646941cb5ddb"],["/tags/第三章/index.html","c9e53662e4ca5f4dc36c07cd410f3aeb"],["/tags/第二章-情愫/index.html","dbd98b037c32b91ac520ea944ec0c8f2"],["/tags/第二章-情愫/page/2/index.html","560882d07a1888e5be35482528a2a70d"],["/tags/第四章-发展/index.html","8e7fb40ae4e597cc2d5489c6ba1d4c6c"],["/tags/草稿/index.html","ed5a76ece04263e90ce414b83e111fef"],["/tags/跨年/index.html","70f917c43207c54f511d814210a1af45"],["/专属浪漫/index.html","5929e4782ab245643493146f556ef5aa"],["/喜好/index.html","aae03a5f03b1bd90b455a0f75645db3d"],["/圣诞树/index.html","4a44670b53dc23e5536ba217c37cf906"],["/她和我的照片/index.html","4b08ff4dbf969d03533a3e910dd5c99c"]];
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
