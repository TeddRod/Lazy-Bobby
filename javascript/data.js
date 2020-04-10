// *** start of database ***

// --- SMS ---

const messages = [

    {
        sender : "from:  Jimmy" ,
        text :  "Yo! Wanna play ProFootball2020 on GameStation tonight? Oh bring some 'you-know-whath'! SeeYa, peace..." ,
        affAnswer :  "Sure, but don't cry if you loose" ,
        negAnswer : "Nah, wakeup early tomorow.."  ,
        affPoints :  [18,-11,-7,-8] ,
        negPoints :  [-8,1,5,0] 
    },

    {
        sender : "from:  MyLove" ,
        text :  "Hey baby, what's the plan for today ?" ,
        affAnswer :  "Let's go shopping!!!" ,
        negAnswer : "Play games with the crew all day"  ,
        affPoints :  [-9,20,0,-24] ,
        negPoints :  [18,-12,0,0] 
    },

    {
        sender : "from:  the F*****g Boss" ,
        text :  "you have 2 days pass the deadline, better work overtime today" ,
        affAnswer :  "I would give my life for the company, your Majesty" ,
        negAnswer : "Sorry my dog ​​was run over by a truck... for the 5th time.."  ,
        affPoints :  [0,10,9,10] ,
        negPoints :  [9,-12,-24,0] 
    },

    {
        sender : "from:  Homie" ,
        text :  "can you pass the urine test for me" ,
        affAnswer :  "no problemo my amigo" ,
        negAnswer : "this is the 5th time this month"  ,
        affPoints :  [15,-12,0,0] ,
        negPoints :  [-7,5,0,0] 
    },

    {
        sender : "from:  Unknow" ,
        text :  "we met last night you remember, you want us to go have a drink" ,
        affAnswer :  "only one drink?" ,
        negAnswer : "my girl will not agree"  ,
        affPoints :  [17,-23,0,-11] ,
        negPoints :  [-2,9,0,0] 
    },
    
    {
        sender : "from:  MyLove" ,
        text :  "can you take my grandma to bingo tonight?" ,
        affAnswer :  "am already with her" ,
        negAnswer : "nop, i can't, i have Aqua-pony"  ,
        affPoints :  [-9,13,0,0] ,
        negPoints :  [12,-9,0,0] 
    },

    {
        sender : "from:  Coworker" ,
        text :  "was it your yogurt in the fridge because it was really good" ,
        affAnswer :  "it was 15 days expired" ,
        negAnswer : "it was the boss by the way he wants to see you"  ,
        affPoints :  [9,0,-10,0] ,
        negPoints :  [12,0,-7,0] 
    },

    {
        sender : "from:  My Buddy" ,
        text :  "tonight we're going to go around the bars and if William is too drunk we will tattoo his face" ,
        affAnswer :  "i won't miss it" ,
        negAnswer : "but we went out last night already"  ,
        affPoints :  [9,-13,-6,-15] ,
        negPoints :  [-12,0,0,0] 
    },

    {
        sender : "from:  MyLove" ,
        text :  "enought playin every days. now you choose: video games or me" ,
        affAnswer :  "why you do that to me" ,
        negAnswer : "i don't know what to chose"  ,
        affPoints :  [9,-25,0,0] ,
        negPoints :  [4,-25,0,0] 
    },

    {
        sender : "from:  MyLove" ,
        text :  "I'm tired of pushing your car every morning to make it starts, wouldn't you buy a new one?" ,
        affAnswer :  "yeah and why not a convertible" ,
        negAnswer : "don't give up, it's better than the gym club and it's free"  ,
        affPoints :  [0,8,0,-18] ,
        negPoints :  [0,-13,0,0] 
    },

    {
        sender : "from:  job" ,
        text :  "pharmaceutical laboratory looking for voluntary. very well paid, almost zero risk" ,
        affAnswer :  "new pills !!!" ,
        negAnswer : "'delete'"  ,
        affPoints :  [0,8,0,18] ,
        negPoints :  [0,0,0,0] 
    },

    {
        sender : "from:  MyLove" ,
        text :  "howlong do you think you live with your mother?" ,
        affAnswer :  "she sings lullabies so that I do sweet dreams" ,
        negAnswer : "soon because I'm sick of scrubing her foot"  ,
        affPoints :  [0,-8,0,0] ,
        negPoints :  [0,10,0,0] 
    },

    {
        sender : "from:  Kevin" ,
        text :  "I have a great tip for the next race I just need you to lend me 500 dollars" ,
        affAnswer :  "we will get rich" ,
        negAnswer : "my credit card is capped"  ,
        affPoints :  [17,-8,0,-10] ,
        negPoints :  [-9,10,0,0] 
    },

    {
        sender : "from:  Kevin" ,
        text :  "I have a great tip for the next race I just need you to lend me 500 dollars" ,
        affAnswer :  "we will get rich" ,
        negAnswer : "my credit card is capped"  ,
        affPoints :  [17,-8,0,-10] ,
        negPoints :  [-9,10,0,0] 
    },

    {
        sender : "from:  Will" ,
        text :  "i know you told me to be very careful with your cat while you were in vacation, but i can't find it anymore" ,
        affAnswer :  "oh no Grumpyyyyyyy!" ,
        negAnswer : "never mind, it was my girlfriend's cat.."  ,
        affPoints :  [-7,-8,0,-10] ,
        negPoints :  [8,-25,0,0] 
    },

    {
        sender : "from:  Coworker" ,
        text :  "we make a pot for Brenda's birthday, want to give something?" ,
        affAnswer :  "is 5 $ is enough?" ,
        negAnswer : "who is Brenda?"  ,
        affPoints :  [0,0,-2,-2] ,
        negPoints :  [0,0,-9,0] 
    },

    {
        sender : "from:  Job" ,
        text :  "actor search for laxative product advertising" ,
        affAnswer :  "I hope it does not appear on TV" ,
        negAnswer : "'delete'"  ,
        affPoints :  [0,-11,0,13] ,
        negPoints :  [0,0,0,-2] 
    },

    {
        sender : "from:  Job" ,
        text :  "if you want the position of manger it's yours" ,
        affAnswer :  "can i fire Brenda?" ,
        negAnswer : "i prefer to take it easy"  ,
        affPoints :  [0,9,16,23] ,
        negPoints :  [4,-3,-5,-2] 
    },
];

// --- start of game messages ---

const startMsg = [
    "Okay Bobby (that is your name, remember?), let's try to not act like a fool today. Let's roll!",

    "Be a good felow and a nice lover and everything will go just fine. Oh and don't quit your job Bobby... (yes, that's your name, stay focus man!)",

    "Let's try to pass the day with no drama this time...",

    "Are you sure you want to turn that phone on?",

    "I'm telling you; things will go wrong no matter what you do",

    "Take the red pill, or, take the red pill.. wait, what?",

    "Don't press the button.. Don't press the button.. Don't press the button.. Don't press the button.. Don't press the button.. Don't press the button.. Don't press the button.. Don't press the button....... "
];


// --- end of game messages ---


const youWin = {

        hgbm : [ // if all at max
            "Wow man, it's a perfect. Amazing!",

            "Incredible. You are not that lazy after all! Genius"
        ],

        hgm : [ // if homieStat && girlStat && moolahStat are at max
            "You got so much money that you own the company. You, your buddies, and your girl now enjoy the fast life! Amazing !",

            "Your friends and girlfriend are absolutly fan of you, even your boss want to marry you (which is a gorgeous mature women by the way..). Not bad!",

            "The world is yours.. In fact only the house is yours, but your fiends and girlfriend love your rooftop pool so... Good for you! ",

            "your buddy and your girlfriend quarrel over which of the two will drive your new hypersport car first. More money more problems"
        ],

        hg : [ // if homieStat && girlStat are at max
            "Wow, how did you get your best buddy and your girlfriend to share the same house Genius!",

            "Lucky you are. that happens only in sitcoms. *applause*",

            "your homie and your girlfriend quarrel over which of the two is your favorite"
        ],

        gm : [ // if girlStat && moolahStat are max
            "Aaaaaaaw, what a perfect couple. Lovy-dovy",

            "Your are the perfect son-in-law! (Run, you fool!)"
        ],    

        else : [
            "Congrats. there is at least one thing you are good at",

            "yeah! Did you make it all by your self?",

            "We all thought that you coudn't make it, Nice.",

            "Nice, you're not that dumb afterall"
        ]
    };

const youLose = {

        hgbm : [ // if all at 0
            "oh nooooooo dude!",

            "common man..."
        ],
        
        hgm : [ // if homieStat && girlStat && moolahStat are at 0
            "No more buddies or girlfrierndf, and no more money. Nice job loser *applause* ",

            "Your friends and girlfriend are absolutly hate you, and now you sleep in your car. Not bad!",

            "all alone and homeless, was that part of your plan?"
        ],

        hg : [ // if homieStat && girlStat are 0
            "Wow, how did you get your best buddy and your girlfriend to be in love and leave you? Genius!",

            "Lucky you are. welcome in the losers team. *applause*",

            "Your boyfriend and your girlfriend have suddenly faded away, or.. was it all a dream?"
        ],

        gm : [ // if girlStat && moolahStat is 0
            "You now live with your buddy eating pizzas all days. Good life plan!",

            "Your girlfriend left you, was it because of the money? Naaaaaah..."
        ],    

        else : [
            "Is that all you got...",

            "Common, was that so hard?",

            "Is there something you good at loser?",

            "i told you not to pick that phone!",

            "oh yeah, nice choice, loser...",

            "...no comment",

            "...looooooseeeeer"
        ]
        
    };

// *** end of database ***

export {  messages, youLose, youWin, startMsg }