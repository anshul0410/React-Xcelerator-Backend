var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var posts = [
   {
      "code":"BAcyDyQwcXX",
      "heading":"Giant emerald weighing 360 kg found in Brazil",
      "content":"A giant emerald measuring 1.3 metres (4.3 feet) and weighing a whopping 360 kilograms (794 pounds) was discovered in April in the mining region of Carnaiba in the north of Brazil. The precious stone was found 200 metres (656 feet) below the surface of the Carnaiba mine in the Pindobacu district, by the Bahia Mineral Cooperative. The emerald was sold to an individual who refused to give an interview for security purposes, and did not reveal how much he had paid. The owner’s lawyer, Marcio Jandir, said all the relevant documentation for the sale had been completed. He said the owner was authorised to travel with the stone throughout Brazilian territory as he intended to present it at museums and libraries. The emerald is the second of its kind found in the region, following another discovered in 2001 which weighed 20 kilograms (44 pounds) and was valued at 310 million U.S.-dollars. The emerald was transported to the United States illegally and became the subject of a legal dispute between Brazil and the United States until it was decided in 2015 it would remain in the United States. (Reuters)",
      "likes":56,
      "id":"1161022966406956503",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495649370520_605.jpg?resize=400px:*'"
   },
   {
      "code":"BAcJeJrQca9",
      "heading":"Trailer of Game of Thrones season 7 released",
      "content":"The trailer of the seventh season of the HBO series Game of Thrones (GoT) has been released. Characters including Jon Snow, Daenerys Targaryen, Arya Stark, Tyrion Lannister, Cersei Lannister and her brother Jaime have featured in the trailer. The new season, which will consist of only seven episodes, will premiere on July 16.",
      "likes":59,
      "id":"1160844458347054781",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495651918721_265.jpg?resize=400px:*'"
   },
   {
      "code":"BAF_KY4wcRY",
      "heading":"Man United beat Ajax to clinch maiden Europa League title",
      "content":"Jose Mourinho’s first season at Manchester United will be deemed by many as a failure unless they win Wednesday’s Europa League final against Ajax Amsterdam to secure Champions League qualification.The Portuguese coach arrived at Old Trafford at the start of this campaign charged with the task of restoring United to, if not their old dominance, at least a place at the top table in the Premier League elite.But a sixth-place finish is lower than Mourinho’s predecessor Louis van Gaal managed in his two seasons, which concluded with fourth and fifth places.It is not the prestige of the Europa League title that would change the perspective on the former Chelsea and Real Madrid manager’s first year at United but the place that triumph would secure in the continent’s top club competition.For United, a second straight season outside the European elite would not only be a blow for the fans and the club’s status but could also affect their ability to recruit the very best talent from across the globe.For Mourinho, there is also his own ‘brand’ to consider.The 54-year-old left Chelsea last season after a shocking campaign of under-achievement, only for largely the same group of players to march to the Premier League title this term under his replacement Italian Antonio Conte.",
      "likes":79,
      "id":"1154606670337393752",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495657530265_714.jpg?resize=400px:*'"
   },
   {
      "code":"BAPIPRjQce9",
      "heading":"Ashwin named best international cricketer of the year",
      "content":"Off-spinner Ravichandran Ashwin will return to action after a two-month hiatus for the ICC Champions Trophy, starting in the United Kingdom on June 1. Ashwin believes India’s practice matches against New Zealand and Bangladesh will be an indicator to his form as he makes his India comeback.Ashwin missed the Indian Premier League (IPL) due to sports hernia, but is all set to pull his weight for India in their title defence of the Champions trophy. India kick off their campaign with the high-profile clash against arch-rivals Pakistan at Edgbaston on June 4.“I might be able to throw something new in this tournament. I am equipped enough to do so. The two practice games will give me an indication how well I go in the tournament,” Ashwin said at the CEAT Cricket Rating International Awards 2017.",
      "likes":47,
      "id":"1157179863266871229",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495636294134_419.jpg?resize=400px:*'"
   },
   {
      "code":"-hZh6IQcfN",
      "caption":"New Stickers just came in. I'll do another mailing in a few weeks if you want some. #javascript",
      "likes":66,
      "id":"1126293663140399053",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/11875511_1562439187344831_813588280_n.jpg"
   },
   {
      "code":"-B3eiIwcYV",
      "caption":"Tacos for breakfast. I love you Austin. 🇺🇸",
      "likes":33,
      "id":"1117418173361145365",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e35/11917950_927755223968499_1198055371_n.jpg"
   },
   {
      "code":"BAhvZrRwcfu",
      "caption":"Tried poke for the first time at @pokehbar. Delicious! It's like a bowl of sushi",
      "likes":30,
      "id":"1162418651480049646",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e35/12501993_1504179163220771_2060674913_n.jpg"
   },
   {
      "code":"BAAJqbOQcW5",
      "caption":"Brunchin'",
      "likes":40,
      "id":"1152964002473690553",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/1516572_445736812276082_2116173059_n.jpg"
   },
   {
      "code":"_4jHytwcUA",
      "caption":"2015 can be summed up with one baby and a many lines of code. And sometimes a coding baby. 👶🏼⌨",
      "likes":62,
      "id":"1150824171912152320",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e35/10723795_1149927178351091_1859033096_n.jpg"
   },
   {
      "code":"_zbaOlQcbn",
      "caption":"Lekker Chocoladeletter",
      "likes":52,
      "id":"1149382879529256679",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12346073_1035047523184672_768982339_n.jpg"
   },
   {
      "code":"_rmvQfQce8",
      "caption":"Just discovered the #hamont farmers market has a new ramen place! 🍜",
      "likes":35,
      "id":"1147180903383025596",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12331739_1671776806423597_995664526_n.jpg"
   },
   {
      "code":"_ep9kiQcVy",
      "caption":"⛄️",
      "likes":64,
      "id":"1143535906423162226",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12354078_447337935474115_1484398925_n.jpg"
   },
   {
      "code":"_XpJcrwcSn",
      "caption":"6 page spread on flexbox in this months netmag!",
      "likes":74,
      "id":"1141561999742846119",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12362588_1688046211438811_1395882545_n.jpg"
   },
   {
      "code":"_KnU7MwceA",
      "caption":"Hanging out in my office waiting for 5:00 beers to come around.",
      "likes":54,
      "id":"1137894817632733056",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12301208_1533749386944985_1334730917_n.jpg"
   },
   {
      "code":"_HMejJQcY5",
      "caption":"Today I learned that a long pull espresso is called a 'lungo'",
      "likes":18,
      "id":"1136932306813044281",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12357319_493317964181479_310198908_n.jpg"
   },
   {
      "code":"_Fq2zmwcaz",
      "caption":"Awesome hand lettered gift from @eunibae and the HackerYou crew.",
      "likes":48,
      "id":"1136502965197194931",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12317458_1692845870986430_331905833_n.jpg"
   },
   {
      "code":"_A2r0aQcfD",
      "caption":"Some serious hardware meet JavaScript hacks going down this week at hackeryou. Excited for demo day!",
      "likes":57,
      "id":"1135147611821557699",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12276809_750065668431999_184252508_n.jpg"
   },
   {
      "code":"-1rhFawccs",
      "caption":"Some major audio upgrades coming to my next videos 😍",
      "likes":39,
      "id":"1132002270913873708",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12331333_1650987978502155_1162510634_n.jpg"
   },
   {
      "code":"-pjx-gQcVi",
      "caption":"My baby and me. Thanks to @bearandsparrow for this one.",
      "likes":81,
      "id":"1128590547628442978",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12298962_863814057068027_460827278_n.jpg"
   },
   {
      "code":"-oTZ0zQcWt",
      "caption":"It's too early. Send coffee.",
      "likes":81,
      "id":"1128237044221461933",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12328347_990748230999662_1512917342_n.jpg"
   },
   {
      "code":"-mxKQoQcQh",
      "caption":"They both have figured it out. #lifewithsnickers",
      "likes":47,
      "id":"1127804966031967265",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e35/12256736_1758525004381641_1136705181_n.jpg"
   },
   {
      "code":"-fasqlQceO",
      "caption":"Kaitlin decorated the house for the Christmas. So gezellig! #casabos",
      "likes":46,
      "id":"1125735850454402958",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/12277581_1028556737218368_1184190781_n.jpg"
   },
   {
      "code":"-VBgtGQcSf",
      "caption":"Trying the new Hamilton Brewery beer. Big fan.",
      "likes":27,
      "id":"1122810327591928991",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12224456_175248682823294_1558707223_n.jpg"
   },
   {
      "code":"-FpTyHQcau",
      "caption":"I'm in Austin for a conference and doing some training. Enjoying some local brew with my baby.",
      "likes":82,
      "id":"1118481761857291950",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/11326072_550275398458202_1726754023_n.jpg"
   }
];

app.listen(3000, function() {
    console.log('listening on port 3000');
});
app.get('/', function(req, res) {
    res.json(posts); // it converts into json file automatically 
});
