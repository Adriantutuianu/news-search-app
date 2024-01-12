const apiKey = "r2SF2QFLquUqK1qWX8i5yltINprQLwCP ";
const beginDate = "";
const endDate = "";
const queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&begin_date=20120101&end_date=20120101&api-key=${apiKey}`;

fetch(queryUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // YOUR CODE GOES HERE
    console.log(data);

    const docsArray = data.response.docs;
    console.log("Docs array", docsArray);

    const firstItem = docsArray[0];
    const keywordsArray = firstItem?.keywords; //accessing keywords array

    keywordsArray.forEach((keyword) => {
      console.log("Keyword Value: " + keyword.value); // console the keyword value - search term
    });

    // Getting the number of records to retrieve (length of the "keywords" array)
    const numberOfRecords = keywordsArray.length;

    console.log("Number of Records to Retrieve:", numberOfRecords);
  });
