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
    } 
  ]);

  console.log("book seeded");

   
  

  process.exit();
});
