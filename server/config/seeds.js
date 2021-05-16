const db = require('./connection');
const { User, Book} = require('../models');

db.once('open', async () => {
  await Book.deleteMany();

  const books = await Book.insertMany([
    { title: 'good stuff', 
      link:"https://play.google.com/store/books/details?id=I3cTTtT0bqIC&source=gbs_api", 
      image:"http://books.google.com/books/content?id=I3cTTtT0bqIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", 
      bookId:"I3cTTtT0bqIC",
      description:`Jennifer Grant is the only child of Cary Grant, who was, and continues to be, the epitome of all that is elegant, sophisticated, and deft. Almost half a century after Cary Grant’s retirement from the screen, he remains the quintessential romantic comic movie star. He stopped making movies when his daughter was born so that he could be with her and raise her, which is just what he did. Good Stuff is an enchanting portrait of the profound and loving relationship between a daughter and her father, who just happens to be one of America’s most iconic male movie stars. Cary Grant’s own personal childhood archives were burned in World War I, and he took painstaking care to ensure that his daughter would have an accurate record of her early life. In Good Stuff, Jennifer Grant writes of their life together through her high school and college years until Grant’s death at the age of eighty-two. Cary Grant had a happy way of living, and he gave that to his daughter. He invented the phrase “good stuff” to mean happiness. For the last twenty years of his life, his daughter experienced the full vital passion of her father’s heart, and she now—delightfully—gives us a taste of it. She writes of the lessons he taught her; of the love he showed her; of his childhood as well as her own . . . Here are letters, notes, and funny cards written from father to daughter and those written from her to him . . . as well as bits of conversation between them (Cary Grant kept a tape recorder going for most of their time together). She writes of their life at 9966 Beverly Grove Drive, living in a farmhouse in the midst of Beverly Hills, playing, laughing, dining, and dancing through the thick and thin of Jennifer's growing up; the years of his work, his travels, his friendships with “old Hollywood royalty” (the Sinatras, the Pecks, the Poitiers, et al.) and with just plain-old royalty (the Rainiers) . . . We see Grant the playful dad; Grant the clown, sharing his gifts of laughter through his warm spirit; Grant teaching his daughter about life, about love, about boys, about manners and money, about acting and living. Cary Grant was given the indefinable incandescence of charm. He was a pip . . . Good Stuff captures his special quality. It gives us the magic of a father’s devotion (and goofball-ness) as it reveals a daughter’s special odyssey and education of loving, and being loved, by a dad who was Cary Grant`,
      authors:["Jennifer Gran"]
    },
    {
      title: "The Stand",
      link: "https://play.google.com/store/books/details?id=UbfnTcmkaKkC" ,
      bookId: "UbfnTcmkaKkC",
      image: "http://books.google.com/books/content?id=UbfnTcmkaKkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      description: "Stephen King's apocalyptic vision of a world blasted by virus and tangled in an elemental struggle between good and evil remains as riveting and eerily plausible as when it was first published. Soon to be a television series. 'THE STAND is a masterpiece' (Guardian). Set in a virus-decimated US, King's thrilling American fantasy epic, is a Classic. First come the days of the virus. Then come the dreams. Dark dreams that warn of the coming of the dark man. The apostate of death, his worn-down boot heels tramping the night roads. The warlord of the charnel house and Prince of Evil. His time is at hand. His empire grows in the west and the Apocalypse looms. When a man crashes his car into a petrol station, he brings with him the foul corpses of his wife and daughter. He dies and it doesn't take long for the virus which killed him to spread across America and the world.",
      authors: ["Stephen King"]
    },
    {
      title: "The Hobbit, Or There and Back Again",
      link: "https://books.google.com/books/about/The_Hobbit_Or_There_and_Back_Again.html?hl=&id=hFfhrCWiLSMC",
      bookId: "hFfhrCWiLSMC",
      image: "http://books.google.com/books/content?id=hFfhrCWiLSMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      description: "A great modern classic and the prelude to The Lord of the Rings. Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum. “A glorious account of a magnificent adventure, filled with suspense and seasoned with a quiet humor that is irresistible . . . All those, young or old, who love a fine adventurous tale, beautifully told, will take The Hobbit to their hearts.” – New York Times Book Review",
    },
    {
      title: "The Ocean at the End of the Lane",
      link: "https://books.google.com/books/about/The_Ocean_at_the_End_of_the_Lane.html?hl=&id=G577zQEACAAJ",
      bookId: "G577zQEACAAJ",
      image: "http://books.google.com/books/content?id=G577zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      description: "Pulitzer Prize–winning author Anne Tyler gives us a wise, haunting, and deeply moving new novel about loss and recovery, pierced throughout with her humor, wisdom, and always penetrating look at human foibles. Crippled in his right arm and leg, Aaron grew up fending off a sister who constantly wanted to manage him. So when he meets Dorothy, an outspoken, independent young woman, she’s like a breath of fresh air. He marries her without hesitation, and they have a relatively happy, unremarkable marriage. Aaron works at his family’s vanity-publishing business, turning out titles that presume to guide beginners through the trials of life. But when a tree crashes into their house and Dorothy is killed, Aaron feels as though he has been erased forever. Only Dorothy’s unexpected appearances from the dead—in their house, on the roadway, in the market—help him to live in the moment and to find some peace. Gradually, Aaron discovers that maybe for this beginner there is indeed a way to say goodbye. “Like a modern Jane Austen, Tyler creates small worlds [depicting] the intimate bonds of friendship and family.”—USA Today “An absolute charmer of a novel . . . With sparkling prose . . . [Anne] Tyler gets at the beating heart of what it means to lose someone, to say goodbye.”—The Boston Globe “Classic Tyler . . . The wonder of Anne Tyler is how consistently clear-eyed and truthful she remains about the nature of families and especially marriage.”—Los Angeles Times “Beautifully intricate . . . By the exquisitely romantic emotional climax [an] ordinary life has bloomed into an opera.”—Entertainment Weekly",
    },
    {
      title: "Heart of Darkness",
      link: "https://play.google.com/store/books/details?id=HlVoAwAAQBAJ",
      bookId: "HlVoAwAAQBAJ",
      image: "http://books.google.com/books/content?id=HlVoAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      description: "Heart of Darkness is a short novel by Polish novelist Joseph Conrad, written as a frame narrative, about Charles Marlow's life as an ivory transporter down the Congo River in Central Africa. The river is \"a mighty big river, that you could see on the map, resembling an immense snake uncoiled, with its head in the sea, its body at rest curving afar over a vast country, and its tail lost in the depths of the land.\" In the course of his travel in central Africa, Marlow becomes obsessed with Mr. Kurtz. The story is a complex exploration of the attitudes people hold on what constitutes a barbarian versus a civilized society and the attitudes on colonialism and racism that were part and parcel of European imperialism. Originally published as a three-part serial story, in Blackwood's Magazine, the novella Heart of Darkness has been variously published and translated into many languages. In 1998, the Modern Library ranked Heart of Darkness one of the hundred best novels in English of the twentieth century",
    },
    {
      title: "The Serpent and the Rainbow",
      link: "https://play.google.com/store/books/details?id=NAs-JZ1MhoMC",
      bookId: "JZ1MhoMC",
      image: "http://books.google.com/books/content?id=NAs-JZ1MhoMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      description: "A scientific investigation and personal adventure story about zombis and the voudoun culture of Haiti by a Harvard scientist. In April 1982, ethnobotanist Wade Davis arrived in Haiti to investigate two documented cases of zombis—people who had reappeared in Haitian society years after they had been officially declared dead and had been buried. Drawn into a netherworld of rituals and celebrations, Davis penetrated the vodoun mystique deeply enough to place zombification in its proper context within vodoun culture. In the course of his investigation, Davis came to realize that the story of vodoun is the history of Haiti—from the African origins of its people to the successful Haitian independence movement, down to the present day, where vodoun culture is, in effect, the government of Haiti’s countryside. The Serpent and the Rainbow combines anthropological investigation with a remarkable personal adventure to illuminate and finally explain a phenomenon that has long fascinated Americans.",
    },
  ]);

  console.log("book seeded");

   
  

  process.exit();
});
