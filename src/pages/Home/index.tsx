import React, { useEffect, useState} from "react";
import axios from "axios";

const RSS = `<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:admin="http://webns.net/mvcb/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:atom="http://purl.org/atom/ns#" xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0">
<channel>
<title>
<![CDATA[ www.espn.com - NBA ]]>
</title>
<description>Latest NBA news from www.espn.com</description>
<link>https://www.espn.com</link>
<ttl>30</ttl>
<language>en</language>
<generator>ESPN Inc. https://www.espn.com</generator>
<copyright>Copyright 2015 ESPN Inc.</copyright>
<lastBuildDate>Fri, 13 Jan 2023 12:43:56 GMT</lastBuildDate>
<image>
<url>https://a.espncdn.com/i/espn/teamlogos/lrg/trans/espn_dotcom_black.gif</url>
<title>www.espn.com - NBA</title>
<link>https://www.espn.com</link>
<width>110</width>
<height>110</height>
</image>
<item>
<title>
<![CDATA[ Luka shines in clutch, outduels LeBron in 2OT win ]]>
</title>
<description>
<![CDATA[ Luka Doncic came through in the clutch again, making two stepback 3s to force overtime and double overtime in the Mavs' 119-115 win over the Lakers on Thursday. ]]>
</description>
<enclosure url="https://a.espncdn.com/photo/2023/0113/r1117066_2_600x400_3-2.jpg" length="0" type="image/jpg"/>
<link>
<![CDATA[ https://www.espn.com/nba/story/_/id/35437110/mavs-luka-doncic-shines-clutch-outduels-lebron-2ot-win ]]>
</link>
<pubDate>Fri, 13 Jan 2023 04:04:48 EST</pubDate>
<guid isPermaLink="false">
<![CDATA[ US-EN-35437110 ]]>
</guid>
</item>
<item>
<title>
<![CDATA[ Lakers rip critical no-call, say foul 'clear as day' ]]>
</title>
<description>
<![CDATA[ LeBron James and Lakers head coach Darvin Ham expressed their frustration with a no-call on Tim Hardaway Jr.'s defense of a potential game-winning 3 by Troy Brown Jr. at the end of regulation Thursday night. ]]>
</description>
<enclosure url="https://a.espncdn.com/photo/2023/0113/r1117068_600x400_3-2.jpg" length="0" type="image/jpg"/>
<link>
<![CDATA[ https://www.espn.com/nba/story/_/id/35437183/lakers-rip-no-call-end-regulation-say-foul-clear-day ]]>
</link>
<pubDate>Fri, 13 Jan 2023 04:04:48 EST</pubDate>
<guid isPermaLink="false">
<![CDATA[ US-EN-35437183 ]]>
</guid>
</item>
<item>
<title>
<![CDATA[ 'Grateful' Rubio returns, gives spark as Cavs rally ]]>
</title>
<description>
<![CDATA[ Ricky Rubio had nine points in 10 minutes Thursday night in his first game since a knee injury more than a year ago, and said he's hoping to have "a strong season, not just a comeback season." ]]>
</description>
<enclosure url="https://a.espncdn.com/photo/2023/0113/r1117057_600x400_3-2.jpg" length="0" type="image/jpg"/>
<link>
<![CDATA[ https://www.espn.com/nba/story/_/id/35436289/ricky-rubio-return-gives-spark-cavs-overcome-lillard-50 ]]>
</link>
<pubDate>Fri, 13 Jan 2023 04:04:48 EST</pubDate>
<guid isPermaLink="false">
<![CDATA[ US-EN-35436289 ]]>
</guid>
</item>
<item>
<title>
<![CDATA[ Haliburton (elbow, knee) out at least two weeks ]]>
</title>
<description>
<![CDATA[ Tyrese Haliburton was diagnosed with a left elbow sprain and a mild left knee bone contusion and will be reevaluated in around two weeks, the Indiana Pacers announced. ]]>
</description>
<enclosure url="https://a.espncdn.com/photo/2022/1012/r1074525_600x400_3-2.jpg" length="0" type="image/jpg"/>
<link>
<![CDATA[ https://www.espn.com/nba/story/_/id/35433591/pacers-tyrese-haliburton-elbow-knee-least-2-weeks ]]>
</link>
<pubDate>Fri, 13 Jan 2023 04:04:48 EST</pubDate>
<guid isPermaLink="false">
<![CDATA[ US-EN-35433591 ]]>
</guid>
</item>
<item>
<title>
<![CDATA[ Celtics star Brown sidelined with adductor strain ]]>
</title>
<description>
<![CDATA[ Boston Celtics star Jaylen Brown is out for Thursday's game against the Nets and could miss "a week or two," according to coach Joe Mazzulla. ]]>
</description>
<enclosure url="https://a.espncdn.com/photo/2023/0112/r1116961_600x400_3-2.jpg" length="0" type="image/jpg"/>
<link>
<![CDATA[ https://www.espn.com/nba/story/_/id/35433957/boston-celtics-jaylen-brown-sidelined-adductor-strain ]]>
</link>
<pubDate>Fri, 13 Jan 2023 04:04:48 EST</pubDate>
<guid isPermaLink="false">
<![CDATA[ US-EN-35433957 ]]>
</guid>
</item>
<item>
<title>
<![CDATA[ Spoelstra's idea: 100K watch Heat play outdoors ]]>
</title>
<description>
<![CDATA[ Heat coach Erik Spoelstra said he'd like to see 100,000 fans at a Miami outdoor game. "Let's do that. Make that happen," he said. ]]>
</description>
<enclosure url="https://a.espncdn.com/photo/2023/0113/r1117040_600x400_3-2.jpg" length="0" type="image/jpg"/>
<link>
<![CDATA[ https://www.espn.com/nba/story/_/id/35435704/heat-erik-spoelstra-wants-see-100k-fans-attend-outdoor-game ]]>
</link>
<pubDate>Fri, 13 Jan 2023 04:04:48 EST</pubDate>
<guid isPermaLink="false">
<![CDATA[ US-EN-35435704 ]]>
</guid>
</item>
<item>
<title>
<![CDATA[ Ben Simmons joins coach Jacque Vaughn in NBA history books with rare stat line ]]>
</title>
<description>
<![CDATA[ Ben Simmons became the 18th player in NBA history to dish out 13 assists without scoring a point. Oddly enough, head coach Jacque Vaughn became a member of the club of players who recorded 13 assists and zero points in April 2006. ]]>
</description>
<enclosure url="https://a.espncdn.com/photo/2023/0113/r1117062_608x342_16-9.jpg" length="0" type="image/jpg"/>
<link>
<![CDATA[ https://www.espn.com/nba/story/_/id/35436293/ben-simmons-nets-rare-stat-line-jacque-vaughn ]]>
</link>
<pubDate>Fri, 13 Jan 2023 02:29:15 EST</pubDate>
<guid isPermaLink="false">
<![CDATA[ US-EN-35436293 ]]>
</guid>
</item>
<item>
<title>
<![CDATA[ Could Luka ever catch King James? 'I'd rather go back to my farm in Slovenia' ]]>
</title>
<description>
<![CDATA[ Luka Doncic is 29,702 points behind LeBron James. But is the Mavs 23-year-old guard already the NBA's best challenger to King James' eventual all-time scoring throne? ]]>
</description>
<enclosure url="https://a.espncdn.com/photo/2023/0111/r1116416_1296x729_16-9.jpg" length="0" type="image/jpg"/>
<link>
<![CDATA[ https://www.espn.com/nba/story/_/id/35426366/luka-heir-nba-eventual-points-king-now-just-amazed-watching-lebron ]]>
</link>
<pubDate>Thu, 12 Jan 2023 21:59:25 EST</pubDate>
<guid isPermaLink="false">
<![CDATA[ US-EN-35426366 ]]>
</guid>
</item>
<item>
<title>
<![CDATA[ NBA Power Rankings: Who can beat the Nuggets right now? ]]>
</title>
<description>
<![CDATA[ Denver has surged to the top of the West during a stretch that includes wins over the Nets, Cavaliers, Clippers and other contenders. ]]>
</description>
<enclosure url="https://a.espncdn.com/photo/2023/0109/nba_power_rankings_16x9.jpg" length="0" type="image/jpg"/>
<link>
<![CDATA[ https://www.espn.com/nba/story/_/id/35420088/nba-power-rankings-nuggets-powering-nba-elite-kevin-durant-injury-big-help-boston ]]>
</link>
<pubDate>Thu, 12 Jan 2023 14:04:58 EST</pubDate>
<guid isPermaLink="false">
<![CDATA[ US-EN-35420088 ]]>
</guid>
</item>
<item>
<title>
<![CDATA[ Fantasy 30: Updates on James Harden, Tyrese Haliburton and Bradley Beal ]]>
</title>
<description>
<![CDATA[ All the latest fantasy basketball news, including James Harden racking up assists, the latest NBA trade rumors and injury updates on Tyrese Haliburton and Bradley Beal. ]]>
</description>
<enclosure url="https://a.espncdn.com/photo/2023/0112/r1116939_2_576x324_16-9.jpg" length="0" type="image/jpg"/>
<link>
<![CDATA[ https://www.espn.com/fantasy/basketball/story/_/id/35432609/mens-fantasy-basketball-30-news-notes-every-nba-team-james-harden-tyrese-haliburton-bradley-beal-week-13 ]]>
</link>
<pubDate>Thu, 12 Jan 2023 18:20:24 EST</pubDate>
<guid isPermaLink="false">
<![CDATA[ US-EN-35432609 ]]>
</guid>
</item>
<item>
<title>
<![CDATA[ Roundtable: Which player's fantasy value would be most impacted if traded? ]]>
</title>
<description>
<![CDATA[ Our experts point out the players whose values would change if they were traded before the Feb. 9 deadline. ]]>
</description>
<enclosure url="https://a.espncdn.com/photo/2023/0111/r1116386_576x324_16-9.jpg" length="0" type="image/jpg"/>
<link>
<![CDATA[ https://www.espn.com/fantasy/basketball/story/_/id/35425961/mens-fantasy-basketball-players-most-impacted-traded-russell-westbrook-fred-vanvleet-nba ]]>
</link>
<pubDate>Thu, 12 Jan 2023 18:20:24 EST</pubDate>
<guid isPermaLink="false">
<![CDATA[ US-EN-35425961 ]]>
</guid>
</item>
<item>
<title>
<![CDATA[ When will LeBron James break the NBA's career points record? ]]>
</title>
<description>
<![CDATA[ LeBron James is fewer than 400 points away from breaking Kareem Abdul-Jabbar's record. We have the latest stats and projections as the Lakers star chases down the milestone. ]]>
</description>
<enclosure url="https://a.espncdn.com/photo/2022/1122/lebron-tracker-16x9_p2.png" length="0" type="image/jpg"/>
<link>
<![CDATA[ https://www.espn.com/espn/feature/story/_/id/34584960/when-lebron-james-break-nba-career-points-record ]]>
</link>
<pubDate>Tue, 10 Jan 2023 08:19:31 EST</pubDate>
<guid isPermaLink="false">
<![CDATA[ US-EN-34584960 ]]>
</guid>
</item>
</channel>
</rss>`;


const Home: React.FC = () => {
  const [feed, setFeed] = useState<Array<any>>([]);

  useEffect(() => {
    // axios
    //   .get(`https://www.espn.com/espn/rss/nba/news`)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    console.log(RSS);
  }, [])

  return (
    <div className="p-12 mt-20">
      <div className="grid grid-cols-3 gap-4 my-4">
        <div className="col-span-2">
          <img
            width="100%"
            src="https://frontofficesports.com/wp-content/uploads/2023/01/FOS-PM-23-1.10-NFL-Sponsor-Revenue-1024x683.jpg"
            alt="No Img"
          />
        </div>
        <div>
          1
        </div>
      </div>
      <div className="bg-black px-4 py-8">
        <p className="text-white text-3xl text-bold">Featured</p>
        <div className="flex gap-4 border-t-2 border-white py-4">
          <img
            src="https://frontofficesports.com/wp-content/uploads/2022/12/FOS-22-12.27-Tom-Brady-Earnings-300x200.jpg"
            alt=""
          />
          <img
            src="https://frontofficesports.com/wp-content/uploads/2022/12/FOS-22-12.27-Tom-Brady-Earnings-300x200.jpg"
            alt=""
          />
          <img
            src="https://frontofficesports.com/wp-content/uploads/2022/12/FOS-22-12.27-Tom-Brady-Earnings-300x200.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
