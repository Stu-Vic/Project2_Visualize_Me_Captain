// //this is the logic script for any d3 stuff we want to use


// init();

// function init() {

//     d3.json("/api/identitylist/", function(data) {

//         var names = data.map(a => a.Identities);

//         console.log(names);

//         // appending the names to the dropdown list
//         names.forEach(function(Append) {
//             var option = d3.select("#selDataset");
//             option.append("option").text(Append);
//         });
        
//     })
// };

// function optionChanged(value) {
//  // call the API with the name selected, so call ..../Katy Perry from the database
//     dashBoard(value);
        
// };

function wordCloud() {
    var svgWidth = 850;
    var svgHeight = 350;
    
    d3
    .select("cloud")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
    var frequency_list = 
    
    // d3.json('/api/wordcloud/?identity=%22Barack%20Obama%22', function(data) {
    //     console.log(data);
    //     })
    
    // Remove this list after api call works
    [{"text":"#ActOnClimate\"","size":107},{"text":"#ActOnClimate","size":87},{"text":"#SOTU\"","size":78},{"text":"#DoYourJob","size":72},{"text":"#GetCovered","size":72},{"text":"#DoYourJob\"","size":71},{"text":"#SCOTUS","size":47},{"text":"#ImmigrationAction\"","size":43},{"text":"#Obamacare","size":41},{"text":"#SOTU","size":40},{"text":"#ActOnClimate.","size":37},{"text":"#IranDeal\"","size":32},{"text":"#ActOnClimate:","size":23},{"text":"#LeadOnTrade\"","size":21},{"text":"#GetCovered\"","size":18},{"text":"#ACAWorks\"","size":17},{"text":"#GetCovered:","size":16},{"text":"#LoveWins\"","size":15},{"text":"#GetCovered.","size":14},{"text":"#RaiseTheWage\"","size":14},{"text":"#LoveIsLove","size":14},{"text":"#IranDeal","size":13},{"text":"#OFAFallSummit\"","size":13},{"text":"#ImmigrationAction","size":13},{"text":"#TPP","size":13},{"text":"#LoveIsLove\"","size":12},{"text":"#Selma50","size":12},{"text":"#MarchOn\"","size":12},{"text":"#LeadOnLeave","size":12},{"text":"#StopGunViolence","size":12},{"text":"#LeadOnLeave\"","size":11},{"text":"#Obamacare,","size":10},{"text":"#DoSomething","size":10},{"text":"#FixOvertime\"","size":9},{"text":"#CollegeOpportunity\"","size":9},{"text":"#Obamacare.","size":8},{"text":"#IranDeal.","size":8},{"text":"#WearOrange","size":8},{"text":"#DoYourJob.","size":8},{"text":"#Obamacare:","size":7},{"text":"#NetNeutrality\"","size":7},{"text":"#Selma50\"","size":7},{"text":"#StandWithWomen\"","size":7},{"text":"#EnoughAlready\"","size":7},{"text":"#ParisAgreement","size":7},{"text":"#ImmigrationAction.","size":6},{"text":"#KeystoneXL\"","size":6},{"text":"#WomenSucceed\"","size":6},{"text":"#FindYourPark","size":6},{"text":"#MadeInAmerica\"","size":6},{"text":"#overtime","size":6},{"text":"#CollegeOpportunity","size":6},{"text":"#LeadOnTrade:","size":6},{"text":"#ReadySetEnroll\"","size":6},{"text":"#Cybersecurity\"","size":6},{"text":"#Obamacare\"","size":6},{"text":"#FixOvertime","size":6},{"text":"#ImmigrationAction:","size":5},{"text":"#DoSomething\"","size":5},{"text":"#ObamaTownHall","size":5},{"text":"#TBT","size":5},{"text":"#LeadOnTrade.","size":5},{"text":"#DisarmHate","size":5},{"text":"#SwitchToClean\"","size":5},{"text":"#StopGunViolence.","size":5},{"text":"#StopGunViolence\"","size":4},{"text":"#EqualPayNow\"","size":4},{"text":"#COP21","size":4},{"text":"#UnitedOnClimate.","size":4},{"text":"#BetterWithObamacare:","size":4},{"text":"#MadeInAmerica","size":4},{"text":"#FixTheSystem\"","size":4},{"text":"#EqualPayDay","size":4},{"text":"#44Turns54","size":4},{"text":"#VRA50\"","size":4},{"text":"#NAACP106\"","size":4},{"text":"#ReadySetEnroll","size":4},{"text":"#ConnectED\"","size":4},{"text":"#RaiseTheWage","size":4},{"text":"#RaiseTheWage.","size":4},{"text":"#ActOnClimate,","size":4},{"text":"#JoiningForces\"","size":4},{"text":"#BetterWithObamacare\"","size":3},{"text":"#EqualPay","size":3},{"text":"#LeadOnTrade","size":3},{"text":"#LeadOnLeave.","size":3},{"text":"#StopGunViolence:","size":3},{"text":"#EnoughAlready","size":3},{"text":"#AmericaLeads\"","size":3},{"text":"#LetGirlsLearn","size":3},{"text":"#FindYourPark\"","size":3},{"text":"#SCOTUSnominee","size":3},{"text":"#CleanWaterRules\"","size":3},{"text":"#BuyNowSaveLater","size":3},{"text":"#CollegeOpportunity.","size":3},{"text":"#StayCovered\"","size":3},{"text":"#HappyHalloween","size":3},{"text":"#InvestInUs\"","size":3},{"text":"#CleanWaterRules","size":3},{"text":"#SheBelieves","size":3},{"text":"#GimmeFive","size":3},{"text":"#ThisIsWhy","size":3},{"text":"#MerricksMerits","size":3},{"text":"#ADA25\"","size":3},{"text":"#LoveWins","size":3},{"text":"#DisarmHate\"","size":3},{"text":"#UnitedOnClimate","size":3},{"text":"#WomensEqualityDay","size":3},{"text":"#OneNationOneTeam\"","size":3},{"text":"#DisarmHate.","size":3},{"text":"#ClimateChangeIsReal.","size":3},{"text":"#Oscars","size":2},{"text":"#ChampionDenier","size":2},{"text":"#OFAFellows","size":2},{"text":"#LoveIsLove.","size":2},{"text":"#Valentines","size":2},{"text":"#NCES8\"","size":2},{"text":"#ObamaAndKids","size":2},{"text":"#Grammys","size":2},{"text":"#IranDeal?","size":2},{"text":"#SXSW2016","size":2},{"text":"#RecoveryAct.","size":2},{"text":"#FixTheSystem.","size":2},{"text":"#WHCOA\"","size":2},{"text":"#MarchOn","size":2},{"text":"#CanILive\"","size":2},{"text":"#EarthDay!","size":2},{"text":"#PopeInDC\"","size":2},{"text":"#ActOnClimate\u2014show","size":2},{"text":"#ClimateChange","size":2},{"text":"#EndGunViolence","size":2},{"text":"#SOTU:","size":2},{"text":"#SOTU.","size":2},{"text":"#Baracketology\"","size":2},{"text":"#COP21\"","size":2},{"text":"#ThankATeacher\"","size":2},{"text":"#SOTU,","size":2},{"text":"#ThankATeacher","size":2},{"text":"#PopeInDC","size":2},{"text":"#OFAFallSummit","size":2},{"text":"#OFAFallSummit.","size":2},{"text":"#GetReadyGetCovered\"","size":2},{"text":"#MLKDay\"","size":2},{"text":"#CleanPowerPlan","size":2},{"text":"#IranDeal:","size":2},{"text":"#ObamaTownHall\"","size":2},{"text":"#SwitchToClean","size":2},{"text":"#ObamaLeaders","size":2},{"text":"#RaiseTheWage:","size":2},{"text":"#CleanEnergy","size":2},{"text":"#NetNeutrality:","size":2},{"text":"#WearOrange\"","size":2},{"text":"#LatinaEqualPay","size":2},{"text":"#POTUSonFallon","size":2},{"text":"#ActOnJobs\"","size":2},{"text":"#WHCD:","size":2},{"text":"#StayCovered","size":2},{"text":"#LetGirlsLearn\"","size":2},{"text":"#Thanksgiving","size":2},{"text":"#4DaysLeft","size":2},{"text":"#GetCoveredNow\"","size":2},{"text":"#EarthDay","size":2},{"text":"#WHScienceFair.","size":2},{"text":"#EqualPayDay\"","size":2},{"text":"#WHScienceFair:","size":2},{"text":"#ScarierThanHalloween","size":2},{"text":"#MyBrothersKeeper\"","size":2},{"text":"#UNGA","size":2},{"text":"#LaborDay","size":2},{"text":"#FF\"","size":2},{"text":"#OurOcean\"","size":2},{"text":"#Healthy2015","size":2},{"text":"#HappyAnniversary","size":2},{"text":"#CollegeOpportunity:","size":1},{"text":"#WearingOrange","size":1},{"text":"#NationalRunningDay","size":1},{"text":"#Healthy2015\"","size":1},{"text":"#ImmigrantHeritageMonth","size":1},{"text":"#LeadOnTrade\u2014add","size":1},{"text":"#PovertySummit","size":1},{"text":"#G7Summit","size":1},{"text":"#HappyMothersDay:","size":1},{"text":"#2DaysLeft","size":1},{"text":"#MemorialDay","size":1},{"text":"#Healthy2015,","size":1},{"text":"#BBKing","size":1},{"text":"#3daysleft!","size":1},{"text":"#MemorialDayWeekend\"","size":1},{"text":"#LeadOnTrade,","size":1},{"text":"#ActOnClimate?","size":1},{"text":"#GetCovered!","size":1},{"text":"#NationalBestFriendsDay","size":1},{"text":"#healthy2015?","size":1},{"text":"#NWHW","size":1},{"text":"#OFAFellows\"","size":1},{"text":"#Healthy2015.","size":1},{"text":"#NoMoreGames","size":1},{"text":"#MarchOn:","size":1},{"text":"#NoMoreGames\"","size":1},{"text":"#FlagDay","size":1},{"text":"#StayCovered:","size":1},{"text":"#RuinAPixarMovie\"","size":1},{"text":"#PlutoFlyby","size":1},{"text":"#NetNeutrality","size":1},{"text":"#OFAction\"","size":1},{"text":"#DSCOVR","size":1},{"text":"#HealthCareCountdown.","size":1},{"text":"#HappyHalloween\"","size":1},{"text":"#NationalIceCreamMonth\u2014better","size":1},{"text":"#KeepingUSHealthy","size":1},{"text":"#Medicare!","size":1},{"text":"#Obamacare\u2014that","size":1},{"text":"#Medicaid","size":1},{"text":"#Medicare","size":1},{"text":"#Obamacare?","size":1},{"text":"#BestFansInTheWorld","size":1},{"text":"#USWNTParade","size":1},{"text":"#OFAction","size":1},{"text":"#LaudatoSi","size":1},{"text":"#DACAworks,","size":1},{"text":"#DACAworks.","size":1},{"text":"#TBT\"","size":1},{"text":"#CharlestonShooting.","size":1},{"text":"#CyberMonday","size":1},{"text":"#ThisIsWhy\"","size":1},{"text":"#PutSolarOnIt","size":1},{"text":"#ImmigrationAction.\"","size":1},{"text":"#ACAworks\"","size":1},{"text":"#Cuba.","size":1},{"text":"#ClimateThanks","size":1},{"text":"#TeamMac","size":1},{"text":"#TeamCheese","size":1},{"text":"#ImmigrationAction,","size":1},{"text":"#WorldAIDSDay\"","size":1},{"text":"#BooksForAll\"","size":1},{"text":"#collegein5words","size":1},{"text":"#WestWingWeek!","size":1},{"text":"#WHFilmFest.","size":1},{"text":"#WHScienceFair\"","size":1},{"text":"#BetterWithObamacare.","size":1},{"text":"#LetsMove\"","size":1},{"text":"#GetCoveredNow:","size":1},{"text":"#ActOnClimate\u2014Mexico","size":1},{"text":"#FallonTonight\"","size":1},{"text":"#eatbrighter:","size":1},{"text":"#CyberSummit","size":1},{"text":"#GetCoveredNow","size":1},{"text":"#YOLO:","size":1},{"text":"#ItsOnUs","size":1},{"text":"#Leadership\"","size":1},{"text":"#MomDance","size":1},{"text":"#WHFilmFest","size":1},{"text":"#ACAWorks","size":1},{"text":"#HappyHanukkah\"","size":1},{"text":"#ObamaOnKimmel","size":1},{"text":"#WomensHistoryMonth\"","size":1},{"text":"#44Turns54\"","size":1},{"text":"#EnoughAlready\u2014time","size":1},{"text":"#LLAP\"","size":1},{"text":"#FundDHS:","size":1},{"text":"#FundDHS","size":1},{"text":"#Kimmel!","size":1},{"text":"#11MillionAndCounting","size":1},{"text":"#ChampionDenier?","size":1},{"text":"#ObamaResponde","size":1},{"text":"#ChampionDenier\"","size":1},{"text":"#EnoughAlready\u2014no","size":1},{"text":"#ProtectYourSavings\"","size":1},{"text":"#LoveYourPetDay.","size":1},{"text":"#GimmeFive\"","size":1},{"text":"#EasterEggRoll","size":1},{"text":"#OpeningDay.","size":1},{"text":"#FreeCommunityCollege","size":1},{"text":"#MadeInAmerica.","size":1},{"text":"#SolarJobs\"","size":1},{"text":"#BetterBroadband.","size":1},{"text":"#BetterBroadband:","size":1},{"text":"#BetterBroadband","size":1},{"text":"#FreeCommunityCollege\"","size":1},{"text":"#Periscope:","size":1},{"text":"#BlackHistoryMonth\u2014it's","size":1},{"text":"#WHCD\"","size":1},{"text":"#LeadOnLeave:","size":1},{"text":"#LoveisLove","size":1},{"text":"#BooksForAll","size":1},{"text":"#ReachHigher.","size":1},{"text":"#CollegeSigningDay?","size":1},{"text":"#BetterBroadband\"","size":1},{"text":"#GoSolar\"","size":1},{"text":"#NationalHighFiveDay!","size":1},{"text":"#AskTheWH\"","size":1},{"text":"#ActOnClimate.\"","size":1},{"text":"#EqualPayNow","size":1},{"text":"#MartinLutherKingDay\"","size":1},{"text":"#SpotTheDenier\"","size":1},{"text":"#YesWeTan","size":1},{"text":"#MiddleClassTaxCuts","size":1},{"text":"#AskTheSurgeonGeneral","size":1},{"text":"#EasterEggRoll:","size":1},{"text":"#LGBT","size":1},{"text":"#BigBlockOfCheeseDay:","size":1},{"text":"#RoevWade\"","size":1},{"text":"#AmericaLeads","size":1},{"text":"#YoEnroll\"","size":1},{"text":"#HappyInternationalWomensDay","size":1},{"text":"#CriminalJusticeReform\"","size":1},{"text":"#CleanPowerPlan\u2014the","size":1},{"text":"#Orlando.","size":1},{"text":"#WHCD.","size":1},{"text":"#WHCD","size":1},{"text":"#MillionSolarStrong\"","size":1},{"text":"#TPP:","size":1},{"text":"#RIPMuhammadAli\"","size":1},{"text":"#StateOfWomen","size":1},{"text":"#FallonTonight","size":1},{"text":"#POTUSonFallon\"","size":1},{"text":"#Pride2016","size":1},{"text":"#OrlandoUnited","size":1},{"text":"#ParisAgreement\u2014the","size":1},{"text":"#NoBillNoBreak\"","size":1},{"text":"#MyDecision","size":1},{"text":"#FourthOfJuly","size":1},{"text":"#Dallas:","size":1},{"text":"#DallasMemorial","size":1},{"text":"#RaiseTheWage.\"","size":1},{"text":"#Obamacare's","size":1},{"text":"#JobsReport","size":1},{"text":"#TeamUSA:","size":1},{"text":"#ParisAgreement.","size":1},{"text":"#Passover\"","size":1},{"text":"#44.)","size":1},{"text":"#EasterEggRoll,","size":1},{"text":"#SCOTUSnominee.","size":1},{"text":"#StPatricksDay.","size":1},{"text":"#DoYourJobFriday","size":1},{"text":"#Brussels","size":1},{"text":"#ACA","size":1},{"text":"#ACAanniversary\"","size":1},{"text":"#ACA,","size":1},{"text":"#NationalPuppyDay","size":1},{"text":"#GoodFriday\"","size":1},{"text":"#EasterEggRoll.","size":1},{"text":"#EarthDay.","size":1},{"text":"#PublicHealthWeek.","size":1},{"text":"#DoYourJob)","size":1},{"text":"#LeadOnLeave\u2014show","size":1},{"text":"#NationalPetDay","size":1},{"text":"#EqualPayDay,","size":1},{"text":"#EqualPayDay.","size":1},{"text":"#NationalParkWeek","size":1},{"text":"#EarthDay,","size":1},{"text":"#ClimateAction.","size":1},{"text":"#NPS100","size":1},{"text":"#WomensEqualityDay\"","size":1},{"text":"#ParisAgreement:","size":1},{"text":"#MarchMadness","size":1},{"text":"#ObamaSummit!","size":1},{"text":"#ObamaInIndia","size":1},{"text":"#ValentinesDay","size":1},{"text":"#ObamaFellows.","size":1},{"text":"#CollegeSigningDay!","size":1},{"text":"#ObamaFellows:","size":1},{"text":"#InternationalMentoringDay","size":1},{"text":"#GRAMMYs.","size":1},{"text":"#MBKRising","size":1},{"text":"#CollegeSigningDay,","size":1},{"text":"#GunViolence:","size":1},{"text":"#RoyalBaby","size":1},{"text":"#OneNationOneTeam","size":1},{"text":"#CommunityLeadership","size":1},{"text":"#USA","size":1},{"text":"#MandelaDay","size":1},{"text":"#ClimateStrike","size":1},{"text":"#DayoftheGirl!","size":1},{"text":"#ObamaSummit.","size":1},{"text":"#ObamaLeaders:","size":1},{"text":"#Goalkeepers17","size":1},{"text":"#Irma","size":1},{"text":"#ProfileInCourage?","size":1},{"text":"#ProfileInCourage","size":1},{"text":"#ConstitutionDay2016:","size":1},{"text":"#HispanicHeritageMonth","size":1},{"text":"#UNGA\"","size":1},{"text":"#FirstDayofFall.","size":1},{"text":"#BeforeTheFlood","size":1},{"text":"#SXSL","size":1},{"text":"#SXSL:","size":1},{"text":"#StopTheDebtTrap.","size":1},{"text":"#StopTheDebtTrap\"","size":1},{"text":"#NationalComingOutDay","size":1},{"text":"#YomKippur\"","size":1},{"text":"#HispanicHeritageMonth,","size":1},{"text":"#HispanicHeritageMonth.","size":1},{"text":"#ACA.","size":1},{"text":"#DoYourJob,","size":1},{"text":"#ACA:","size":1},{"text":"#JobsReport\"","size":1},{"text":"#ObamaFarewell\"","size":1},{"text":"#FarewellAddress","size":1},{"text":"#SCOTUSnominee:","size":1},{"text":"#PiDay.","size":1},{"text":"#OneDayIWill","size":1},{"text":"#PeoplesClimate","size":1},{"text":"#VICEonHBO","size":1},{"text":"#NationalCoffeeDay","size":1},{"text":"#UCCShooting\"","size":1},{"text":"#UCCShooting","size":1},{"text":"#OurOcean2015","size":1},{"text":"#StartTheConvo","size":1},{"text":"#TPP\"","size":1},{"text":"#PeopleOverPolitics\"","size":1},{"text":"#MadeInAmerica:","size":1},{"text":"#NationalDessertDay.","size":1},{"text":"#MedalOfHonor","size":1},{"text":"#BetterMakeRoom","size":1},{"text":"#AstronomyNight","size":1},{"text":"#SheBelieves\"","size":1},{"text":"#Obamacare\u2014that\u2019s","size":1},{"text":"#GetReadyGetCovered","size":1},{"text":"#PeopleOverPolitics","size":1},{"text":"#KeystoneXL","size":1},{"text":"#KeystoneXL.","size":1},{"text":"#VeteransDay\"","size":1},{"text":"#SquadGoals","size":1},{"text":"#LeadOnLeave\u2014because","size":1},{"text":"#ConstitutionDay","size":1},{"text":"#ActOnClimate\u2014years","size":1},{"text":"#44turns54","size":1},{"text":"#JonVoyage","size":1},{"text":"#FixOvertime:","size":1},{"text":"#SocialSecurity\u2014a","size":1},{"text":"#Cuba","size":1},{"text":"#IranDeal\u2014and","size":1},{"text":"#WomensEqualityDay,","size":1},{"text":"#Katrina10","size":1},{"text":"#Katrina10\"","size":1},{"text":"#Alaska","size":1},{"text":"#ObamaAK","size":1},{"text":"#IranDeal,","size":1},{"text":"#LaborDay.","size":1},{"text":"#WrongThenWrongNow","size":1},{"text":"#NeverForget","size":1},{"text":"#AskPOTUS","size":1},{"text":"#911Anniversary","size":1},{"text":"#RoshHashanah","size":1},{"text":"#CollegeScorecard:","size":1},{"text":"#VeteransDay","size":1},{"text":"#YesSheCan","size":1},{"text":"#IWD2016","size":1},{"text":"#StopGunViolence,","size":1},{"text":"#BigBlockOfCheeseDay","size":1},{"text":"#SOTU?","size":1},{"text":"#YouTubeAsksObama\"","size":1},{"text":"#YouTubeAsksObama","size":1},{"text":"#Roe43\"","size":1},{"text":"#Wethebest","size":1},{"text":"#EqualPay:","size":1},{"text":"#GetCovered\u2014but","size":1},{"text":"#AreYouCovered\"","size":1},{"text":"#SB50","size":1},{"text":"#CloseTheGap","size":1},{"text":"#NationalPizzaDay","size":1},{"text":"#WomenInSTEM:","size":1},{"text":"#MyBrothersKeeper","size":1},{"text":"#RecoveryAct,","size":1},{"text":"#ItsOnUs\"","size":1},{"text":"#PeaceCorpsWeek2016\"","size":1},{"text":"#WomensHistoryMonth","size":1},{"text":"#Selma51","size":1},{"text":"#InternationalWomensDay","size":1},{"text":"#GunsInAmerica\"","size":1},{"text":"#GunsInAmerica","size":1},{"text":"#SOTU\u2014join","size":1},{"text":"#OFAdventure:","size":1},{"text":"#ActOnClimate\u2014this","size":1},{"text":"#ActOnClimate\u2014add","size":1},{"text":"#ActOnClimate\u2014and","size":1},{"text":"#ImmigrationAction\u2014but","size":1},{"text":"#ActOnClimate\u2014don't","size":1},{"text":"#HappyThanksgiving\"","size":1},{"text":"#HappyThanksgiving","size":1},{"text":"#UnitedOnClimate\"","size":1},{"text":"#UnitedOnClimate\u2014join","size":1},{"text":"#UnitedOnClimate\u2014it's","size":1},{"text":"#UnitedOnClimate\u2014and","size":1},{"text":"#13thAmendment","size":1},{"text":"#ESSA\"","size":1},{"text":"#ESSA","size":1},{"text":"#EnoughAlready:","size":1},{"text":"#ParisAgreement\"","size":1},{"text":"#UnitedOnClimate\u2014add","size":1},{"text":"#SandyHook\"","size":1},{"text":"#2015In5Words","size":1},{"text":"#HealthCareCountdown","size":1}]
            
    
    var color = d3.scale.linear()
            .domain([0,1,2,3,4,5,6,10,15,20,100])
            .range(["#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777", "#666", "#555", "#444", "#333", "#222"]);
    
    d3.layout.cloud().size([800, 300])
            .words(frequency_list)
            .rotate(0)
            .fontSize(function(d) { return d.size; })
            .on("end", draw)
            .start();
    
    function draw(words) {
        d3.select("body").append("svg")
            .attr("width", 850)
            .attr("height", 350)
            .attr("class", "wordcloud")
            .append("g")
            // without the transform, words words would get cutoff to the left and top, they would
            // appear outside of the SVG area
            .attr("transform", "translate(320,200)")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("fill", function(d, i) { return color(i); })
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
        }
    }

    // d3.json(`/api/wordcloud/?identity=${user_input}`).then((data) => {

    //      console.log(data);          


        
        //var sel_value = parseString(d3.select("#selDataset").property("value"));

//     });
// };

// function dashBoard(value) {

//     // var user_input = d3.select("#selDataset").val();
//     // console.log(user_input);

//     d3.json(`/api/dashboard/?name=${value}`).then((data) => {

//         var data = data

//         console.log(data);

//         Object.entries(data).forEach(([key, value]) => {
//             if (key.includes('Total')) {
//                 d3.select("#user-totals").append("h5").text(`${key}: ${value}`);
//             }
//         });
        
//         Object.entries(data).forEach(([key, value]) => {
//             if (key.includes('Month')) {
//                 d3.select("#month-totals").append("h5").text(`${key}: ${value}`);
//             }
//         });

//         Object.entries(data).forEach(([key, value]) => {
//             if (key.includes('Day')) {
//                 d3.select("#day-totals").append("h5").text(`${key}: ${value}`);
//             }
//         });



//     })
// }