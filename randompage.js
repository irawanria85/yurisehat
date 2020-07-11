var pages = [ 

"https://yurisehat.blogspot.com/p/hot-news-today.html",
"https://yurisehat.blogspot.com/p/trending-topic.html",
"https://yurisehat.blogspot.com/p/hot-news-trend.html",
"https://yurisehat.blogspot.com/p/hot-news.html",
"https://yurisehat.blogspot.com/p/funny-most-awkward-moments.html",
"https://yurisehat.blogspot.com/p/lanjut.html",
"https://yurisehat.blogspot.com/p/please-wait.html",

]; 
function randomPage() { 
return pages[Math.round(Math.random() * (pages.length - 1))]; 
} 
location.href= randomPage(); 
