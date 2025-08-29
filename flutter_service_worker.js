'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "58efcd81bc59c1ad0ae64b982007c407",
".git/config": "2762fe07d4791b0423a4484d00cd35b2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0d973182f6a21bced79c135669e73a57",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2c73a70daefe50c791d457027f56d6ea",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "099fac925ee71b37dcdf114921360325",
".git/logs/refs/heads/master": "099fac925ee71b37dcdf114921360325",
".git/logs/refs/remotes/origin/gh-pages": "e6c7d07c7f45d8fb58a56ad17ac47784",
".git/objects/9e/3d75d7a0368d524f80773aee1ca2384110e42e": "08ad0fdbb34a90c477f5564377548304",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0b/2cec1c81ece425331e4527fefcda4cabf957b5": "cf9976e5b3601dce6adb61aa6d75ff35",
".git/objects/0d/1ffef302984fb802b84aad0429efe5c0fb4673": "7a8afb6d89c38306709ab4993899d277",
".git/objects/0d/626f7cdd3e6b5e45f51fb779741a199604835d": "454913e67376653bb147e5738a60b3f1",
".git/objects/12/f23d2d5194d0d73510af8736595af5d6b72df5": "7082c1a5aa813797f01f72ded952c8e6",
".git/objects/1d/cd80869bbfa3215dac355a57f192b85cdedb4f": "b5d0aaedf4111341ae67a3da90eeab5e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/2610e24bc6975941050a049158cb9daf50de6f": "951c42fd896eef559f2898daae62d9fa",
".git/objects/21/f62be258ac72c25eb3745c31f3badd0983df01": "114f3f7514a2e8c45febd133fead4770",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/f130a012f317711209aae3eeb670629077d85c": "2965ac3f856fc4c2851457a12fddaa85",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5d/b25e115c46c38023ba8f9098bc88309df76d2d": "ca07eac45923a658aa4a3b795c6c1744",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/85ad7a150c561ff29b361c8ae10519a3b6a60e": "12f4a6ade76627755357439c16eba9fb",
".git/objects/67/af995ce4fdf4265678c948a78629b8fbde82b2": "347fd55d73d566d1b7a15653655f0172",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/71/b5229a6f30aaacb0ef21c905cedbe8e11b4130": "e6199f05695a13c49c066a726baa5ffd",
".git/objects/75/7d8ba06fa8487d1707aa3d3c163f19dee6bc5f": "48a967743010c56b158c19d6205fa4b5",
".git/objects/83/d818b133af92886dfeb39c6489950006d1ea72": "27f01a50bc338fbd0af54f0e1c4bee1b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8c/ce7e389206bdc75e26fd667b2853c45cb8ae5c": "d8b27100c141c39dd845dc93e9d419f8",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/6c3eb0215a201f8e23a6ca871ed125a8c43071": "ec66124217add20816daaaf0abdcacad",
".git/objects/9a/a632855606d8f5313fdad2504a769f53dedb07": "bb60f46ec6bdc63d3c1c61fe8c9b7e9c",
".git/objects/a4/76febda587d91507052504a15282cd7f317ea7": "2509f231223831bb22f9aabaf858b7b4",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b5/8e11edd970500269c243ace83c10e156a43a73": "728d14825e30451be5766c9da95750a8",
".git/objects/bb/a57abb31aabce6e2ff615a2fb5bcc4c199684c": "d87723d3a9fcd045fc75f092e38fb2b7",
".git/objects/c0/fa7aff2aa3b73f2b04ddad6f16ffc331ceedcd": "b93af592572593ce38f742f763a13816",
".git/objects/c6/4f7fcd6bee985fcc2054794e38436a6d252aad": "7dad04c43e7f4d5429a600a47418747a",
".git/objects/cd/3d9c7b59c6f290dd4473b3546a7e316424d416": "1a507d62431ce15b2ad97ead726189d9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/716d16965533dbc531cbb14bb641639f62569f": "bc6af6617ce30fd7874176fa114b50e8",
".git/objects/da/d648190a82d64fd104e4b14fcce195f13f42e1": "4be1ae97b896a8b0132c935305fddcd3",
".git/objects/e3/690231043dbf33b896f71336e9bb071bda4a5c": "2338bf8296296ac489d832f4d6f8e2b5",
".git/objects/e3/fb315efac79cd00810683335f06b690cbf12cb": "cdd51c72fef71492e65e0fa83cfe855a",
".git/objects/e4/6de92ffacb903f7a98fb6e7c8a01145e6ce42f": "a9d399a110d33fb7f2f5abe37a7246bf",
".git/objects/e5/4d0d9d5fc513fb92813c86945776be356503f2": "6ad86dd50db5a7fb0bbcaf4e93082b7b",
".git/objects/e9/8da964264f50bd5e93b34da49e83db236ab343": "feeb69f5528cb28aad0f91e2b872e09b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ef/64399239c4788cd7dbfac354f6ab37bdb9d157": "5e9423655fb865363712f81591044d2b",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/a5ca23fb35838453d73dd93c1806991e76e8e3": "ef0f7a802b3b8b01703b35d9c8c1566d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/e351d5bad141aefa23dadbc7545b4f61139c28": "91a3e389ac39cb17a21270d52ced2eda",
".git/refs/heads/master": "22ac5a335d3af29bd7335d120dc1a8de",
".git/refs/remotes/origin/gh-pages": "22ac5a335d3af29bd7335d120dc1a8de",
"assets/AssetManifest.bin": "8f74b42254148053f532bc03b1eaef49",
"assets/AssetManifest.bin.json": "fe1faadc18aa29d7c162c212820494ba",
"assets/AssetManifest.json": "6385b169a86a5ece6f9d4d1431424031",
"assets/assets/images/myPhoto.png": "09a7a6c8778d7d42a0a595f74cf0df07",
"assets/assets/images/samplePhoto.PNG": "8c07fb92ab085d5ee045f63b7aef1c5c",
"assets/download/FuadAbughaliCV.docx": "8889e1b9553d6c6e6b746388df13e7f3",
"assets/download/FuadAbughaliCV.pdf": "d64664359bd871d7c7d6b5b70d3e57a4",
"assets/download/sample%2520c.v..docx": "ebc6c3a1d7c575ac235ab07e4a37a0c1",
"assets/download/sample%2520c.v..pdf": "3f56960ad754b2fdfb39be72c8bcc0c2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "02f93b1b25f540150b9d4cf58cdcaca6",
"assets/NOTICES": "5c05b8c2f1e7257ed9a6075514c6c190",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"download/FuadAbughaliCV.docx": "aefdcb879242c42e3fa7cdf102722e6d",
"download/FuadAbughaliCV.pdf": "ba50b3980ab1c4ccfc2c94e3572b58d0",
"download_setup.js": "3a00852a0630b9897398b80582e8bdea",
"favicon.png": "34fdb9f33c5a08e870035fbfd7d9f64a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "87fcd05dd1dfe294decd52f833ce0943",
"icons/Icon-192.png": "7f125350c6f73b3cc1737dc285dc8377",
"icons/Icon-512.png": "d4c2d0d5226ab46e7559bda6d8d2885c",
"icons/Icon-maskable-192.png": "7f125350c6f73b3cc1737dc285dc8377",
"icons/Icon-maskable-512.png": "d4c2d0d5226ab46e7559bda6d8d2885c",
"index.html": "83adb138a76bd40892d2d29becb59802",
"/": "83adb138a76bd40892d2d29becb59802",
"main.dart.js": "db4d504df3284aeb7a446215dafdce09",
"manifest.json": "d01497b4b9903b5421d494a0449668ae",
"version.json": "83684c3e56f04ceabbc52a8f8e805e83"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
