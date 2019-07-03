$(document).ready(function(){
    console.log("Hello world!");

    var queryTerm = "";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ipyqK3nzYWAc7566wqu6c2WnyYwweyIv&q=Richard%20Nixon";

    $(document).on("click", "#submitButton", function(event) {
        event.preventDefault();
        alert("You clicked my submit button!");
        // console.log($("#searchTerm").val());
        var searchTerm = $("#searchTerm").val();
        var numberOfRecords = $("#numberOfRecords").val();
        var startYear = $("#startYear").val();
        var endYear = $("#endYear").val();
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ipyqK3nzYWAc7566wqu6c2WnyYwweyIv";
        if(searchTerm !== ""){
            queryURL+= "&q=" + searchTerm;
        }
        if(startYear !== ""){
            queryURL+= "&begin_date=" + startYear + "0101";
        }
        if(endYear !== ""){
            queryURL+= "&end_date=" + endYear + "1231";  
        }
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
              console.log(response.response.docs);  //Returns an array of articles.  
          })
    })
})