
angular.module('myApp', [])

    .controller('View1Ctrl', function ($scope, $http) {
        $scope.venueList = new Array();
        $scope.mostRecentReview;
        $scope.getVenues = function () {
            var placeEntered = document.getElementById("txt_placeName").value;
            var searchQuery = document.getElementById("txt_searchFilter").value;
            if (placeEntered != null && placeEntered != "" && searchQuery != null && searchQuery != "") {

                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://api.foursquare.com/v2/venues/search" +
                    "?client_id=KIICFYB2OUIXQRRZTH4PCSD43TJ4D4XEJ0CV2FB5P12N3LZF" +
                    "&client_secret=VNTTCIQBTYDHN155TJLNYWI5YGH2SOOBT0OY0KM0BLOPAZPA" +
                    "&v=20160215&limit=8" +
                    "&near=" + placeEntered +
                    "&query=" + searchQuery);

                handler.success(function (data) {
                    if (data != null && data.response != null && data.response.venues != undefined && data.response.venues != null) {

                        for (var i = 0; i < data.response.venues.length; i++) {

                            $scope.venueList[i] = {
                                "name": data.response.venues[i].name,
                                "id": data.response.venues[i].id,
                                "location": data.response.venues[i].location,
                                "tips":data.response.venues[i].tips
                            };
                        }
                    }


                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });

            }
        }
    });
