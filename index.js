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
      "short":"A giant emerald that weighs over 360 kilograms was discovered in the Brazilian mining region of Carnaiba in April. The 1.3-meter stone was sold to an individual who did not reveal how much he had paid for it. Notably, a 20-kilo emerald found in the same mine in 2001 was valued at $310 million (over ₹2,000 crore).",
      "content":"A giant emerald measuring 1.3 metres (4.3 feet) and weighing a whopping 360 kilograms (794 pounds) was discovered in April in the mining region of Carnaiba in the north of Brazil. The precious stone was found 200 metres (656 feet) below the surface of the Carnaiba mine in the Pindobacu district, by the Bahia Mineral Cooperative. The emerald was sold to an individual who refused to give an interview for security purposes, and did not reveal how much he had paid. The owner’s lawyer, Marcio Jandir, said all the relevant documentation for the sale had been completed. He said the owner was authorised to travel with the stone throughout Brazilian territory as he intended to present it at museums and libraries. The emerald is the second of its kind found in the region, following another discovered in 2001 which weighed 20 kilograms (44 pounds) and was valued at 310 million U.S.-dollars. The emerald was transported to the United States illegally and became the subject of a legal dispute between Brazil and the United States until it was decided in 2015 it would remain in the United States. (Reuters)",
      "likes":56,
      "id":"1161022966406956503",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495649370520_605.jpg?resize=400px:*'"
   },
   {
      "code":"BAcJeJrQca9",
      "heading":"Trailer of Game of Thrones season 7 released",
      "short":"The trailer of the seventh season of the HBO series Game of Thrones (GoT) has been released. Characters including Jon Snow, Daenerys Targaryen, Arya Stark, Tyrion Lannister, Cersei Lannister and her brother Jaime have featured in the trailer. The new season, which will consist of only seven episodes, will premiere on July 16.",
      "content":"The trailer of the seventh season of the HBO series Game of Thrones (GoT) has been released. Characters including Jon Snow, Daenerys Targaryen, Arya Stark, Tyrion Lannister, Cersei Lannister and her brother Jaime have featured in the trailer. The new season, which will consist of only seven episodes, will premiere on July 16.",
      "likes":59,
      "id":"1160844458347054781",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495651918721_265.jpg?resize=400px:*'"
   },
   {
      "code":"BAF_KY4wcRY",
      "heading":"Man United beat Ajax to clinch maiden Europa League title",
      "short":"Manchester United defeated Dutch side Ajax 2-0 to win their maiden Europa League title in Stockholm on Wednesday. United began scoring with Paul Pogba's deflected effort in the 18th minute, before Henrikh Mkhitaryan's 48th-minute flick doubled their lead. With the win, United automatically qualify for the next season's Champions League despite finishing sixth in the Premier League points table.",
      "content":"Jose Mourinho’s first season at Manchester United will be deemed by many as a failure unless they win Wednesday’s Europa League final against Ajax Amsterdam to secure Champions League qualification.The Portuguese coach arrived at Old Trafford at the start of this campaign charged with the task of restoring United to, if not their old dominance, at least a place at the top table in the Premier League elite.But a sixth-place finish is lower than Mourinho’s predecessor Louis van Gaal managed in his two seasons, which concluded with fourth and fifth places.It is not the prestige of the Europa League title that would change the perspective on the former Chelsea and Real Madrid manager’s first year at United but the place that triumph would secure in the continent’s top club competition.For United, a second straight season outside the European elite would not only be a blow for the fans and the club’s status but could also affect their ability to recruit the very best talent from across the globe.For Mourinho, there is also his own ‘brand’ to consider.The 54-year-old left Chelsea last season after a shocking campaign of under-achievement, only for largely the same group of players to march to the Premier League title this term under his replacement Italian Antonio Conte.The move to United offered a chance to restore Mourinho’s reputation as a winner - but a season with just a League Cup triumph and no Champions League place would surely have his critics crowing again.",
      "likes":79,
      "id":"1154606670337393752",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495657530265_714.jpg?resize=400px:*'"
   },
   {
      "code":"BAPIPRjQce9",
      "heading":"Ashwin named best international cricketer of the year",
      "short":"Indian spinner Ravichandran Ashwin has won the International Cricketer of the Year award at the CEAT Cricket Rating International Awards 2017. The 30-year-old said that India's practice matches against New Zealand and Bangladesh will be an indicator of his form as he makes his comeback to the Indian cricket team ahead of the Champions Trophy 2017.",
      "content":"Off-spinner Ravichandran Ashwin will return to action after a two-month hiatus for the ICC Champions Trophy, starting in the United Kingdom on June 1. Ashwin believes India’s practice matches against New Zealand and Bangladesh will be an indicator to his form as he makes his India comeback.Ashwin missed the Indian Premier League (IPL) due to sports hernia, but is all set to pull his weight for India in their title defence of the Champions trophy. India kick off their campaign with the high-profile clash against arch-rivals Pakistan at Edgbaston on June 4.“I might be able to throw something new in this tournament. I am equipped enough to do so. The two practice games will give me an indication how well I go in the tournament,” Ashwin said at the CEAT Cricket Rating International Awards 2017. “It will depend on how well my variations come to fore. I am hoping to put these practice matches to good use and bring something new to the table, give something new to the team,” said the bowling all-rounder.",
      "likes":47,
      "id":"1157179863266871229",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495636294134_419.jpg?resize=400px:*'"
   },
   {
      "code":"-hZh6IQcfN",
      "heading":"Odisha students receive fake job offer letters in placement",
      "short":"Several students of Odisha's Siksha O Anusandhan (SOA) University have received fake job offer letters through campus placement. The issue came to light after over 50 BTech students returned from a company in Gurugram where they had gone with the job offer letters given to them. The students held a protest inside the campus on Wednesday against the same.",
      "content":"Bhubaneswar, May 24 (PTI) Students of a private university here demonstrated in the campus today after job offer letters they had received through campus placement were found to be fakes.Students of Siksha O Anusandhan (SOA) University and their parents said the matter came to light when over 50 BTech students returned empty handed from a company in Gurgaon where they had gone with the job offer letters purpotedly given by it.Police were deployed near the university campus to prevent any untoward incident, police said.The students said they were selected through campus placement, but company officials in Gurgaon told them that the offer letters given to them were fakes.On being informed by the students and their parents, the authorities crosschecked and found that job offers of several other reputed companies were also fake, a university official said.University officials admitted the incident and said that the students had fallen victims of imposters who had no connection in several companies.The consultancy firm, which had been engaged to facilitate the placement, had apparently made false job promises on behalf of the companies, they said.Dean of ITER, the faculty of engineering and technology of the institute, P K Sahoo said a meeting was held with the vice-chancellor and efforts are on to revolve the issue.He said the affected students have been assured that they would be given a stipend of Rs 20,000 each to be engaged as teaching assistants. The university would also bear TA/DA of the students, who had gone to join the companies.",
      "likes":66,
      "id":"1126293663140399053",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495640041090_903.jpg?resize=400px:*'"
   },
   {
      "code":"-B3eiIwcYV",
      "heading":"Manchester bomber had proven links to ISIS: French minister",
      "short":"The French Interior Minister Gerard Collomb has claimed that British and French intelligence have 'proven' information that British-born attacker Salman Abedi, who killed 22 people in UK's Manchester on Monday, was linked to Islamic State. He further claimed that Abedi returned from Libya and had probably travelled to Syria. Notably, ISIS has claimed responsibility for Monday's attack.",
      "content":"Police scrambled to close down a network around the Manchester suicide bomber with arrests in Britain and Tripoli on Wednesday, as details about the investigation were leaked to U.S. media, infuriating authorities who fear a second attack is imminent.British-born Salman Abedi, 22, who was known to security services, killed 22 people at a concert venue packed with children on Monday.Authorities believe he had help in building the bomb, which photographs published by the New York Times showed was sophisticated and powerful, and that his accomplices could be ready to strike again.Manchester police arrested five men and one woman on Wednesday, bringing the total held for questioning to seven, and searched multiple addresses in northern and central England.Explosives were found at one site, the Independent reported, citing security service sources.A source said British investigators were hunting for anyone who may have helped build the suicide bomb.",
      "likes":33,
      "id":"1117418173361145365",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495628242218_407.jpg?resize=400px:*'"
   },
   {
      "code":"BAhvZrRwcfu",
      "heading":"Twin bomb blasts in Indonesia's capital kill 3",
      "short":"At least 3 people have been killed and several others have been injured in two bomb blasts at a bus station in the eastern part of Indonesia's capital Jakarta, according to reports. The location has reportedly been cordoned off by the police and investigations are underway. No group has claimed responsibility for the attack yet.",
      "content":"Two suspected suicide bombers killed three Indonesian police officers and injured 10 people on Wednesday night in twin blasts near a bus station in the eastern part of the capital, police said.The blasts went off five minutes apart at Jakarta's Kampung Melayu terminal, police said.National Police spokesman Setyo Wasisto said three officers had been killed, and that examination of the scene had shown that there appeared to have been two suicide bombers, not one as originally thought.Five officers and five civilians were wounded, he said.Indonesia has suffered a series of mostly low-level attacks by Islamic State sympathizers in the last 17 months, but Wasisto said police had not confirmed any Islamist motive for Wednesday's bombing.Authorities in the world's biggest Muslim-majority nation are increasingly worried about a surge in radicalism, driven in part by a new generation of militants inspired by Islamic State.",
      "likes":30,
      "id":"1162418651480049646",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495642165212_928.jpg?resize=400px:*'"
   },
   {
      "code":"BAAJqbOQcW5",
      "heading":"Hedge Fund plunges 62% after betting against Chinese economy",
      "short":"A hedge fund, the Nexus fund, at Emerging Sovereign Group that bet against the Chinese economy sunk 62% this year through April. It dropped 8.2% in April, marking the third consecutive month of negative returns for the fund. China bears have suffered as economic growth accelerated in first quarter and officials have been guiding the yuan higher against the dollar.",
      "content":"A hedge fund at Emerging Sovereign Group that has bet against the Chinese economy sunk about 62 percent this year through April.The Nexus fund dropped 8.2 percent last month, according to an email to investors seen by Bloomberg News. The April results mark at least the third consecutive month of negative returns for the fund.China bears have suffered as economic growth accelerated in the first quarter and officials have been guiding the yuan higher against the dollar in a move that’s caught market watchers by surprise. The Nexus fund gained 35 percent in 2015, profiting from moves by China’s central bank to devalue the yuan by the most since 1994. But the fund has underpeformed since 2016 when it dropped 15.5 percent, Bloomberg has reported.ESG is run by co-founders Kevin Kenny, Mete Tuncel and Jason Kirschner, who bought out Carlyle Group LP’s 55 percent stake and took full control of the firm in October. Most of the assets at ESG, which managed $3.5 billion as of December, are in two of its other funds.",
      "likes":40,
      "id":"1152964002473690553",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495627782991_171.jpg?resize=400px:*'"
   },
   {
      "code":"_4jHytwcUA",
      "heading":"Sachin releases video clip from biopic showing brother Ajit",
      "short":"Sachin Tendulkar has released a clip from his upcoming biopic 'Sachin: A Billion Dreams', highlighting his elder brother Ajit's contribution to his career. Sharing the clip on Instagram, Sachin wrote, 'There is no buddy like a brother!! Thank you for your support over the years, Ajit.' He added that it was Ajit who took him to his coach Ramakant Achrekar.",
      "content":"Sachin Tendulkar has released a clip from his upcoming biopic 'Sachin: A Billion Dreams', highlighting his elder brother Ajit's contribution to his career. Sharing the clip on Instagram, Sachin wrote, 'There is no buddy like a brother!! Thank you for your support over the years, Ajit.' He added that it was Ajit who took him to his coach Ramakant Achrekar.",
      "likes":62,
      "id":"1150824171912152320",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495636723164_742.jpg?resize=400px:*'"
   },
   {
      "code":"_zbaOlQcbn",
      "heading":"Delighted at 30 as I was at 7: Fan on meeting late Bond star",
      "short":"Marc Haynes, a scriptwriter, said, 'I was as delighted at 30 as I had been at 7,' in a Facebook post about meeting late actor Roger Moore, known for playing James Bond in films. While Haynes first met Moore at 7, the next time was when he was a scriptwriter for a UNICEF project and Moore featured in the campaign.",
      "content":"Sir Roger Moore (89) died yesterday, and people have been paying tribute to him from all over the world. However, there is one incident which sums up the kind of gentleman he was perfectly,shared by Mark Haynes, a scriptwriter from London who had met Moore at an airport when he was seven and then again after a gap of 23 years. “As a seven-year-old in about 1983, in the days before First Class Lounges at airports, I was with my grandad in Nice Airport and saw Roger Moore sitting at the departure gate, reading a paper. I told my granddad I’d just seen James Bond and asked if we could go over so I could get his autograph. My grandad had no idea who James Bond or Roger Moore were, so we walked over and he popped me in front of Roger Moore, with the words “my grandson says you’re famous. Can you sign this?”",
      "likes":52,
      "id":"1149382879529256679",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495649864679_870.jpg?resize=400px:*')"
   },
   {
      "code":"_rmvQfQce8",
      "heading":"Investor Mahesh Murthy exits media startup The Ken",
      "short":"Mahesh Murthy, the co-founder of early-stage investment firm Seedfund, has exited his investment in subscription-based digital media startup The Ken. The Ken had raised about ₹2.68 crore from a group of angel investors including Murthy in February this year. 'I sold my shares as I got a great exit and return on my investment,' said Murthy on his exit.",
      "content":"Mahesh Murthy, the co-founder of early-stage investment firm Seedfund, has exited his investment in subscription-based digital media startup The Ken, after placing his bets on the company three months ago. The Ken, run by Kenrise Media Pvt Ltd, had raised $400,000 (Rs 2.68 crore then) from a group of angel investors including Murthy in February this year.The Ken’s other investors include entrepreneurs such as Paytm founder Vijay Shekhar Sharma, TaxiForSure’s Aprameya Radhakrishna, Freshdesk’s Girish Mathrubootham and Shan Krishnasamy, FusionCharts’ Pallav Nadhani and [24]7 co-founder Shanmugam Nagarajan. Aarin Capital managing director Deepak Natraj, former SoftBank director Pavan Ongole, Graticule Asset Management MD Sandeep Mathur and Exfinity Ventures chairman V Balakrishnan have also invested.",
      "likes":35,
      "id":"1147180903383025596",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495623987899_556.jpg?resize=400px:*'"
   },
   {
      "code":"_ep9kiQcVy",
      "heading":"How did a hacker get access to Zomato user records?",
      "short":"Zomato has revealed that 1.7 crore of its user records were accessed by a hacker last week using a web hosting service's database that was leaked in 2015. A Zomato developer had an account with the service, login credentials of which had been leaked. The developer used the same login details for GitHub, where Zomato's code was developed.",
      "content":"Zomato has revealed that 1.7 crore of its user records were accessed by a hacker last week using a web hosting service's database that was leaked in 2015. A Zomato developer had an account with the service, login credentials of which had been leaked. The developer used the same login details for GitHub, where Zomato's code was developed.",
      "likes":64,
      "id":"1143535906423162226",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495618146171_170.jpg?resize=400px:*'"
   },
   {
      "code":"_XpJcrwcSn",
      "heading":"Madras HC puts NEET 2017 results on hold till June 7",
      "short":"The Madras High Court on Wednesday ordered an interim stay on the National Eligibility cum Entrance Test (NEET) 2017 results till June 7. This comes after a petition called for the cancellation of the exam as different sets of question papers were used in different parts of the country. The petitioner also claimed that the Tamil question paper was easier.",
      "content":"Madras High Court on Wednesday has called for an interim stay on the announcement of NEET (National Eligibility and Entrance Test) 2017 results. The Madurai Bench in its interim order has asked the Central Board of Secondary Education (CBSE) not to declare the much-awaited results of NEET 2017 (Common Medical Entrance) until and unless final orders are passed on a petition filed by a petitioner seeking its cancellation. The interim stay is until June 7.Last week the Madras High Court had called for the opinion of Union Health Secretary, on a plea which requests the cancellation of the National Eligibility and Entrance Test (NEET) 2017 for admissions to MBBS and BDS courses.",
      "likes":74,
      "id":"1141561999742846119",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495636228979_218.jpg?resize=400px:*'"
   },
   {
      "code":"_KnU7MwceA",
      "heading":"WHO elects first ever African Director-General",
      "short":"The World Health Organisation on Tuesday elected its first African Director-General, Tedros Adhanom Ghebreyesus. Promising to stand up for rights of the poor, Tedros said, 'All roads should lead to universal health coverage. I will not rest until we have met this.' He will replace Margaret Chan, who will step down after a 10-year term at the end of June.",
      "content":"The World Health Organisation has its first ever director-general from Africa, after the election of Dr Tedros Adhanom Ghebreyesus, the former Ethiopian health minister.Dr Tedros, as he is known, beat the British candidate, Dr David Nabarro, after three tense rounds of voting on Tuesday. Third was Pakistan’s Dr Sania Nishtar. The decision by member states came at the World Health Assembly in Geneva after a fraught campaign.",
      "likes":54,
      "id":"1137894817632733056",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495627247664_927.jpg?resize=400px:*'"
   },
   {
      "code":"_HMejJQcY5",
      "heading":"No theaters in Kashmir to screen 1st Kashmiri film in 30yrs",
      "short":"'Kashmir Daily' is the first Kashmiri language film released in 30 years, however, there are no movie halls to screen it in Kashmir. The Valley has had no cinema halls since 1989 when the outfit 'Allah Tigers' banned them and threatened those operating them. It is being screened in a Srinagar event hall three times daily from May 23-26.",
      "content":"Filmmaker Hussain Khan, who has finally completed work on the first Kashmiri movie in three decades, is now staring at a major stumbling block.Khan's maiden film 'Kashmir Daily' tells the life of a journalist. He has written, directed and produced the movie, which cost him Rs. 70 lakh.Before the 80s, Kashmir's movie scene was lively and thriving. 'There were long queues outside the iconic Palladium cinema in Lal Chowk, and getting a ticket was very difficult,' says Bhawani Bashir Yasir, a veteran theatre personality.",
      "likes":18,
      "id":"1136932306813044281",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495635786713_940.jpg?resize=400px:*'"
   },
   {
      "code":"_Fq2zmwcaz",
      "heading":"Startup raises ₹25 cr for robots that pick up and park cars",
      "short":"French startup Stanley Robotics, which is building robots that pick up cars at the entrance of parking lots and park them, has raised ₹25 crore from Elaia Partners, Bpifrance and Idinvest Partners. The automated parking system can also double park cars depending on when the owner is expected to return. The system is already in use at a Paris airport.",
      "content":"French startup Stanley Robotics just raised $4 million (€3.6 million) from Elaia Partners, Bpifrance and Idinvest Partners. The company is building giant robots that pick up your car at the entrance of a parking lot and park it for you.Stanley Robotics plans to take advantage of that with a robot called Stan. It is going to make airport parking lots more efficient. When you think about it, your average parking lot has a ton of wasted space: you need to be able to circulate between all parking spaces, you can’t double park and you need to be able to leave your car and get back to the airport quickly.",
      "likes":48,
      "id":"1136502965197194931",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495628679858_864.jpg?resize=400px:*'"
   },
   {
      "code":"_A2r0aQcfD",
      "heading":"Jack Ma teaches tai chi to entrepreneurs for ₹9.4 lakh",
      "short":"Chinese e-commerce giant Alibaba's Founder and billionaire Jack Ma has launched courses for entrepreneurs on the philosophy of tai chi, a form of martial arts, according to Chinese media reports. Ma teaches six classes over three days a year with the course reportedly costing 100,000 yuan (₹9.4 lakh). The billionaire has reportedly been practicing the martial art's philosophy since 1988.",
      "content":"Chinese billionaire Jack Ma has launched tai chi philosophy courses for entrepreneurs, reports The Straits Times citing Chinese media.Alibaba founder teaches six classes over three days a year with the course reportedly costing 100,000 yuan ($14.500).Ma, a former English teacher has been a long-time fan of martial arts. The billionaire has reportedly been practicing tai chi quan since 1988.Jack Ma says that tai chi and tai chi quan are different, as the former represents a philosophy and the latter is the martial art itself.",
      "likes":57,
      "id":"1135147611821557699",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495634696707_703.jpg?resize=400px:*'"
   },
   {
      "code":"-1rhFawccs",
      "heading":"Trump discusses 'madman' Jong-un with Duterte in leaked call",
      "short":"US President Donald Trump had told his Philippine counterpart Rodrigo Duterte in a phone call last month that he is prepared to use force against 'madman' Kim Jong-un over North Korea's nuclear issue, according to a leaked transcript. Trump further told Duterte that he hoped the 'good guy', Chinese President Xi Jinping, will help solve the issue.",
      "content":"Donald Trump told Philippines’ Rodrigo Duterte in a phone call last month that he is prepared to use force against “madman” Kim Jong-un but hoped the “good guy” Xi Jinping will help solve the North Korean nuclear issue, according to a leaked transcript.At the time when the conversation took place, Washington had already sent the USS Carl Vinson to Korean waters. Just days before the conversation, the USS Michigan, a guided-missile submarine arrived in South Korea as an additional show of force amid tensions between the US and North Korea.",
      "likes":39,
      "id":"1132002270913873708",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495636015389_829.jpg?resize=400px:*'"
   },
   {
      "code":"-pjx-gQcVi",
      "heading":"Donald Trump, Pope Francis meet for first time in Vatican",
      "short":"In the third leg of his first overseas trip as US President, Donald Trump on Wednesday met Pope Francis for the first time at the Vatican. The Pope and Trump reportedly discussed world affairs, including interfaith dialogue and peace in the Middle East with emphasis on protection of Christians. 'It was an honour to be with the Pope,' Trump said.",
      "content":"Pope Francis once said that Christians must have “cheerful faces and eyes full of joy”. But there was little evidence of those emotions as Donald Trump descended on the Vatican on Wednesday for his first face-to-face meeting with the Argentinian pontiff.Greeting the US president in the papal library, Francis did not exude his usual warmth and cheerfulness even as Trump proclaimed that it was a “great honour” to meet him.",
      "likes":81,
      "id":"1128590547628442978",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495629079798_528.jpg?resize=400px:*'"
   },
   {
      "code":"-oTZ0zQcWt",
      "heading":"Lionel Messi's 21-month jail sentence for tax fraud confirmed",
      "short":"Barcelona forward Lionel Messi's 21-month jail sentence for tax fraud has been confirmed by Spain's Supreme Court. Messi and his father were sentenced last year, the appeal for which has now been turned down. However, the two are unlikely to go to jail, since Spanish law allows sentences under two years to be served under probation.",
      "content":"Spain's Supreme Court on Wednesday rejected an appeal by Barcelona football star Lionel Messi and stood by a Catalan regional court's 21-month prison sentence for tax fraud, court documents showed.The five-times World Player of the Year is unlikely to go to prison, however.Messi and his father Jorge were found guilty by a Catalan court last July on three counts of tax fraud between 2007 and 2009 to the tune of 4.1 million euros on image rights and were also fined 2 million euros (£1.7 million).A court statement said Messi 'unequivocally understood his obligation to pay tax on income obtained from exploiting his image rights...therefore it is not logical that he should ignore his duty to pay tax on them'.",
      "likes":81,
      "id":"1128237044221461933",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495627652468_114.jpg?resize=400px:*'"
   },
   {
      "code":"-mxKQoQcQh",
      "heading":"China downgraded by Moody's for the first time in 28 years",
      "short":"Moody's Investors Service on Wednesday downgraded China's credit ratings for first time since 1989, saying it expects the economy's financial strength to erode in coming years as growth slows and debt rises. Moody’s reduced the rating to A1 from Aa3, while also changing the outlook to stable from negative. However, China argued the credit downgrade was based on inappropriate methodology.",
      "content":"UK shares managed to end the day in positive territory, as investors shrugged off Moody’s downgrade of China’s credit rating. The FTSE 100 edged higher while the FTSE 250 recorded yet another closing high. But with the euro holding steady, European markets were more subdued, dipping lower by the close.Back with Moody’s downgrade of China’s credit rating, and Capital Economics says it is not surprised the market reaction has been limited.China’s struggles to bring down leverage, while maintaining rapid economic growth are well-documented, and Moody’s had lowered its outlook for China in March 2016. Equity markets dropped initially – the Shanghai Composite fell by about 1% on the news – but had recouped their losses by the end of trading. We have long argued that Chinese equities might face a downward correction once the economy starts to slow, and as the crackdown on leverage begins to bite.",
      "likes":47,
      "id":"1127804966031967265",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495619404070_367.jpg?resize=400px:*'"
   },
   {
      "code":"-fasqlQceO",
      "heading":"Tom Cruise confirms 'Top Gun' sequel",
      "short":"Actor Tom Cruise has confirmed that a sequel to his 1986 film Top Gun is 'definitely happening'. Cruise added, 'It's true... I'm going to start filming it probably in the next year.'' Last year, producer Jerry Bruckheimer had tweeted a photo of himself with Cruise, where he wrote that he discussed Top Gun 2 with the actor.",
      "content":"Tom Cruise has confirmed rumours that a sequel to 1986 classic Top Gun is in the works, with filming to begin “probably in the next year”.He revealed the news while on a promotional tour for his upcoming film Mummy, telling Australian morning show Sunrise, “It is definitely happening.”. In January 2016, producer Jerry Bruckheimer tweeted a photo of himself with Cruise, saying: “Just got back from a weekend in New Orleans to see my old friend Tom Cruise and discuss a little Top Gun 2.” The sequel was hinted at again in April this year during an “Ask me anything” on Reddit, when Val Kilmer – who starred in the original film with Cruise and Kelly McGillis – was asked by a user whether he would be doing Top Gun 2. “Hell yes,” he replied, “and what a hoot it will be.”",
      "likes":46,
      "id":"1125735850454402958",
      "display_src":"http://images.newsinshorts.com.edgesuite.net/app_assets/images/2017/24may/inshorts_image_1495627837119_258.jpg?resize=400px:*'"
   }
];

app.listen(3000, function() {
    console.log('listening on port 3000');
});
app.get('/', function(req, res) {
    res.json(posts); // it converts into json file automatically 
});
