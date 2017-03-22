exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('beers').del()
    .then(() => {
      return knex('beers').insert([{
          bdb_id: "PAM6wX",
          name: "Stone IPA",
          abv: 6.9,
          ibu: 77,
          label_url: "https://s3.amazonaws.com/brewerydbapi/beer/PAM6wX/upload_dl9pJu-medium.png",
          description: "An \"India Pale Ale\" by definition is highly hopped and high in  alcohol - you'll find our Stone India Pale Ale to be true to style with a huge hop  aroma, flavor and bitterness throughout. If you're a hop-head like us, then you'll  love our Stone India Pale Ale! Medium malt character with a heavy dose of over the  top hops! Generous \"dry hopping\" gives this beer its abundant hop aroma and crisp  hop flavor",
          type_name: "American IPA"
        },
        {
          bdb_id: "infeFI",
          name: "Total Domination",
          abv: 6.7,
          ibu: 65,
          label_url: "https://s3.amazonaws.com/brewerydbapi/beer/infeFI/upload_taTKTO-medium.png",
          description: "Multiple hops collide in balanced perfection, dominating the senses, achieving total satisfaction. From the Pacific Northwest, birthplace of the modern IPA, comes a beer whose name says it all.\r\n\r\nTotal Domination has a citrusy, floral hop aroma, and big hop flavor balanced with a richness imparted by Carahell and Munich malts. This beer is a big flavorful Northwest IPA that maintains its drinkability, and as such has garnered great admiration from the novice craft drinker and the seasoned hop head alike.",
          type_name: "American IPA"
        },
        {
          bdb_id: "zLPaD2",
          name: "Dawn of The Red",
          abv: 7.0,
          ibu: 65,
          label_url: "https://s3.amazonaws.com/brewerydbapi/beer/zLPaD2/upload_YQ5tCR-medium.png",
          description: "Imperial Red Ales are deep amber to dark copper/reddish brown. A small amount of chill haze is allowable at cold temperatures. Fruity-ester aroma is medium. Hop aroma is intense, arising from any variety of hops. Medium to high caramel malt character is present. Hop flavor is intense, and balanced with other beer characters. They may use any variety of hops. Hop bitterness is intense. Alcohol content is very high and of notable character. Complex alcohol flavors may be evident. Fruity-ester flavors are medium. Diacetyl should not be perceived. Body is full.",
          type_name: "Imperial Red"
        },
        {
          bdb_id: "JRcGkW",
          name: "Mirror Pond Pale Ale",
          abv: 5,
          ibu: 40,
          label_url: "https://s3.amazonaws.com/brewerydbapi/beer/zLPaD2/upload_YQ5tCR-medium.png",
          description: "Deschutes Brewery’s most popular beer, Mirror Pond Pale Ale is a quintessential American pale ale with a definitive hop aroma and hop forward flavor. \r\n\r\nMirror Pond Pale Ale has four different hop additions along with the all-important dry hopping. What separates this pale ale, though, is balance. Most folks just heap on the hops and call it a day. Deschutes, on the other hand, uses a deft touch of Crystal malts to offset the definitive Cascade hop profile resulting in a delicate malty sweetness.\r\n\r\nThe proliferation of pale ales only proves how rare a truly great one is.",
          type_name: "American Pale"
        },
        {
          bdb_id: "o1OELJ",
          name: "Racer 5 IPA",
          abv: 7.5,
          ibu: 75,
          label_url: "https://s3.amazonaws.com/brewerydbapi/beer/o1OELJ/upload_G4iiCw-medium.png",
          description: "This hoppy IPA is a full bodied beer brewed with malted barley, wheat, and crystal malts. The malt base is designed to highlight the unique floral qualities of the Columbus and Cascade hops from the Pacific Northwest. Racer 5 is one of America’s most medal winning IPAs. There’s a trophy in every glass.",
          type_name: "American IPA"
        },
      ]);
    });
};
