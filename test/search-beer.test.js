'use strict';

const {
  suite,
  test
} = require('mocha');
const request = require('supertest');
const server = require('../app');


suite('Connection with Brewerydb test', () => {

  test('Searches Brewerydb for a beer by name and returns a JSON', (done) => {

    request(server)
      .get('/ipa-api/search?name=Stone_IPA')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, [{
          id: 'PAM6wX',
          name: 'Stone IPA',
          abv: '6.9',
          ibu: '77',
          label_url: 'https://s3.amazonaws.com/brewerydbapi/beer/PAM6wX/upload_dl9pJu-medium.png',
          description: 'An "India Pale Ale" by definition is highly hopped and high in alcohol - you\'ll find our Stone India Pale Ale to be true to style with a huge hop aroma, flavor and bitterness throughout. If you\'re a hop-head like us, then you\'ll love our Stone India Pale Ale! Medium malt character with a heavy dose of over the top hops! Generous "dry hopping" gives this beer its abundant hop aroma and crisp hop flavor.',
          type_name: 'American IPA'
        },
        {
          id: 'EEd0cs',
          name: 'Standing Stone India Pale Ale',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          description: 'This unfiltered ale retains a medium maltiness and body and features a flowery hop perfume and pleasant bitterness.',
          type_name: 'American IPA'
        },
        {
          id: 'IW4Do7',
          name: 'Stone XS IPA',
          abv: '8.9',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          description: 'Aged in Rye Whiskey Barrels and Gin infused Bourbon Barrels',
          type_name: 'Imperial IPA'
        },
        {
          id: 'pNlHhJ',
          name: 'Nitro Stone IPA',
          abv: '6.9',
          ibu: '77',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          type_name: 'American IPA'
        },
        {
          id: 'FCj67Q',
          name: 'Stone 16th Anniversary IPA',
          abv: '10',
          ibu: '85',
          label_url: 'https://s3.amazonaws.com/brewerydbapi/beer/FCj67Q/upload_XURtt8-medium.png',
          description: 'We\'ve been loving creating Collaboration beers with great creative brewers from all over the world these last several years-unique beers that would never have existed without the free-flowing imagination and idea generation of the collaborative process. However, when it comes to the Stone Anniversary Ales, it\'s all us. Yet, it is indeed still a collaboration with great creative brewers (if we do say so ourselves). We\'re talking about our own brewing team, of course. And while some of our beers, anniversary and otherwise, have been designed by a single person, the Stone 16th Anniversary IPA was definitely a team effort.\r\n\r\nThis year our brewing team was inspired by some exotic-ish additions of the lemony persuasion. Yes, it\'s a Double IPA (can you really say you\'re surprised?), but as we strive to do with all our Stone Anniversary Ales of the let\'s-take-this-IPA-in-a-new-direction variety, we\'ve brewed up a Stone-worthy divergence from tradition. The amount of rye malt we used isn\'t quite enough to warrant the appellation "Rye IPA," but it still adds hints of spiciness that contrast deliciously with the tropical fruit flavors and aromas of the Amarillo and Calypso hops. Add a few European specialty malts, some lemon verbena, and three more hop varieties to the mix, and you have a highly complex brew melding both bitter and fruity hop notes with rich toasted malt character punctuated by nuances of spicy rye and subtle lemon.',
          type_name: 'American IPA'
        },
        {
          id: 'BEnYdl',
          name: 'Stone 10th Anniversary IPA',
          abv: '10',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          description: 'Stone 10th Anniversary IPA harkens back to our earlier Anniversary Ales, with abundant hopping at many stages of the brewing process. Appropriately, the aroma is over-the-top, with pronounced piney and resiny hop flavors combined with tropical fruit esters and more subtle notes of toasted malts and alcohol. Our Stone 10th Anniversary Ale weighs in at 10% alcohol by volume (perfect for a 10th anniversary beer), and has a little more color and malt character than our other IPAs. In addition to using the new Summit hop variety in the brewhouse to provide the powerful bitterness, we went back through our records and found some of our favorite hops over the years, and used them to flavor this brew, including Chinook, Crystal, and large doses of Simcoe in the dry-hop to provide a huge, complex, piney, fruity and floral hop character. This is a colossal beer, big in every sense: hoppy, malty, rich, and strong! Right up our alley.',
          type_name: 'Imperial IPA'
        },
        {
          id: 'gt2ecJ',
          name: 'Old Stone House IPA',
          abv: '7.8',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          description: 'Blending seven different hops, this dry hopped IPA will blow your mind with a citrusy flavor & bittering back end. The notion of this beer was to create a simple grain blend to give the hops a stage on which to become the stars.',
          type_name: 'American IPA'
        },
        {
          id: 'TpQ6lJ',
          name: 'Stone Ruination Double IPA 2.0',
          abv: '8.5',
          ibu: '100',
          label_url: 'https://s3.amazonaws.com/brewerydbapi/beer/TpQ6lJ/upload_dqGwma-medium.png',
          description: 'Stone Ruination IPA was the first full-time brewed and bottled West Coast double IPA on the planet. As craft beer has evolved over the years, so too have techniques for maximizing hop flavors and aromas. For the second incarnation of our groundbreaking India pale ale, we employed dry hopping and hop bursting to squeeze every last drop of piney, citrusy, tropical essence from the hops that give this beer its incredible character. We’ve also updated the name to reflect the imperial-level intensity that’s evident in every sip. Join us in cheering this, the second stanza in our “Liquid Poem to the Glory of the Hop.”',
          type_name: 'Imperial IPA'
        },
        {
          id: 'gCLPeg',
          name: 'Stone IPA w/ Blonde Roast Coffee',
          abv: '6.9',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          description: 'Stone IPA brewed with fresh Blonde Roast Coffee',
          type_name: 'American IPA'
        },
        {
          id: 'FLGpF8',
          name: 'Temple of Stone IPA',
          abv: '7.7',
          ibu: '77',
          label_url: 'https://s3.amazonaws.com/brewerydbapi/beer/FLGpF8/upload_TTx65i-medium.png',
          description: 'A collaboration by BJ\'s Brewhouse and Stone Brewing Co.\r\n\r\nTemple of Stone IPA is BJ\'s first collaboration with Stone Brewing Co., one of the most successful craft brewers in America. It\'s a truly unique and distinctive IPA that is brewed with malted wheat, experimental hops and elderflower. The use of wheat enhances the complex hop profile. Two experimental hop varieties - Jarrylo and Belma - contribute fruity hop flavors that resemble blackberry and strawberry, while mellow floral notes of elderflower cover the palate. The finish is hop bitter as you would expect from an IPA.\r\n\r\nFor our annual collaboration beer, we teamed up with our longtime friends at Stone Brewing Co. - craft brewing pioneers known for their love of hops who, like BJ\'s, got their start brewing beer in Southern California in 1996. Together we decided to brew a wheat IPA with a unique hop profile.',
          type_name: 'American IPA'
        },
        {
          id: '2stTak',
          name: 'I.P.A.',
          abv: '6.8',
          label_url: 'https://s3.amazonaws.com/brewerydbapi/beer/2stTak/upload_ji0DOT-medium.png',
          description: 'Citrus, floral, pine, enough malt to balance',
          type_name: 'American IPA'
        },
        {
          id: 'qKEKlu',
          name: 'I.P.A.',
          abv: '5',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          description: 'Our India Pale Ale (I.P.A.) is a delicious take on an English classic. Brewed using an English hop variety called Fuggles, which produces a pleasant soft woody, earthy and floral aroma in the beer.  The beer is balanced with a medium hop bitterness that compliments the medium depth of the malt base.',
          type_name: 'English IPA'
        },
        {
          id: '5g5NCo',
          name: 'I.P.A',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          type_name: 'American IPA'
        },
        {
          id: 'XOMe5l',
          name: 'I.P.A.',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          description: 'This full bodied, dark golden ale is brewed with a larger proportion of hops and malt to give it a rich, malty taste and clean, bitter finish.  Traditionally brewed to handle the long trip from England to India by sail and then steam, this beer is certain to please those looking for something a bit “bigger.”',
          type_name: 'American IPA'
        },
        {
          id: 'Vcp1P2',
          name: 'I.P.A.',
          abv: '7',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          description: 'Our I.P.A. is a dark-blonde beer with an emphatic, hoppy flavour. I.P.A. stands for India Pale Ale, a British type of brew in which the alcohol percentage and hop recipe were boosted so that the beer would survive the long sea voyage to the colonies. This recipe turned out to be a real winner and quickly became popular. In our I.P.A., we add hops to the beer during the maturing process as well as the brewing to produce delicious aromas of grapefruit and flowers. A beer with a fruity, bitter aftertaste that lingers for a long time.',
          type_name: 'English IPA'
        },
        {
          id: 'e7LyKD',
          name: 'I.P.A',
          abv: '6',
          ibu: '65',
          label_url: 'https://s3.amazonaws.com/brewerydbapi/beer/e7LyKD/upload_Z16nT5-medium.png',
          description: 'For those hop lovers out there, this is the beer for you. It is a traditional American Style I.P.A. featuring a significant amount of Northwest hops balanced with a hefty grain bill.  If this beer doesn’t make your taste buds scream hops then we don’t know what will.',
          type_name: 'American IPA'
        },
        {
          id: 'PhEezX',
          name: 'IPA #11',
          abv: '5.7',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          type_name: 'American IPA'
        },
        {
          id: 'sulOKJ',
          name: 'IPA #12',
          abv: '7.5',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          type_name: 'American IPA'
        },
        {
          id: 'PaWw8D',
          name: 'IPA #11',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          type_name: 'American IPA'
        },
        {
          id: 'sRdzYX',
          name: 'IPA #2',
          abv: '5.5',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          description: 'The 2nd IPA release of this series is a refreshing and light bodied IPA that contains 30% wheat and uses large amounts of Simcoe and Denali hops as late additions. This 5.5% ABV IPA has citrus and tropical notes in the aroma. Tropical and pineapple flavors prevail with a mild piney finish.',
          type_name: 'American IPA'
        },
        {
          id: 'qTVNrz',
          name: 'IPA #6',
          abv: '7',
          ibu: '78',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          description: 'Medium bodied IPA kettle/dry hopped with Falconer’s Flight 7C’s.  Strong citrus and pine hop character that finishes crisp and bitter.',
          type_name: 'American IPA'
        },
        {
          id: 'T7GDqw',
          name: 'IPA #1',
          abv: '6.5',
          ibu: '70',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          description: 'Our inaugural IPA was brewed with the hop varietals we had on hand before this year’s crop became available. We balanced the massive late hop with just enough bitterness to back it up.',
          type_name: 'American IPA'
        },
        {
          id: 'A41LOw',
          name: 'Aloha I.P.A.',
          abv: '6.2',
          ibu: '50',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          description: 'Brewed within the parameters of a classic India Pale Ale or I.P.A., our version boasts a burst of hops from start to finish, and is balanced with a sweet maltiness.',
          type_name: 'American IPA'
        },
        {
          id: '8SJhJS',
          name: 'Echolocation I.P.A.',
          abv: '5',
          label_url: 'https://s3.amazonaws.com/brewerydbapi/beer/8SJhJS/upload_8fpcTL-medium.png',
          type_name: 'American IPA'
        },
        {
          id: '9yITje',
          name: '1890 I.P.A.',
          abv: '6.7',
          label_url: 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png',
          description: 'Our 1890 I.P.A. starts with a clear, golden amber color.  The medium bodied ale gives huge floral and grapefruit aromas.  The 1890 I.P.A. is well hopped with carefully selected varieties giving it big citrus-hop character without being crushingly bitter. \r\n\r\n56 IBU / 6.7% ABV',
          type_name: 'American Pale'
        }
      ], done);
  });

  // test('Returns 400 and "Beer not Found" if the beer doesn\'t exist in BreweryDB', (done) => {
  //   request(server)
  //     .get('/search?q=Stone_IPA')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /plain/)
  //     .expect(400, 'Beer not found', done);
  // });

});
