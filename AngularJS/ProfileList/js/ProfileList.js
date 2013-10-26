
function ProfileListCtrl($scope) {
    $scope.profilelist = [];
   
            $.ajax({
                url: 'http://localhost:50771/api/Profile',
                type: "GET",
                dataType: 'json',
                success: function (data) {
                    $scope.$apply(function () {
                        $.each(data, function (i, item) {
                            $scope.profilelist.push(new Profile(item.ProfileID, item.FirstName, item.LastName, item.Email, item.Mobile));
                        });
                    });
          
                },
                error: function (e) {
                    alert("error");
                }
            });
        
  
  

    $scope.addToList = function () {
    
        var profile = { "ProfileID": 0, "FirstName": $scope.profileFirstName, "LastName": $scope.profileLastName, "Email": $scope.profileEmail, "Mobile": $scope.profileMobile };
        $.ajax({
            url: 'http://localhost:50771/api/Profile',
            type: "POST",
            dataType: 'json',
            data: profile,
            success: function (data) {
                $scope.$apply(function () {
                    $scope.profilelist.push(new Profile(data.ProfileID, data.FirstName, data.LastName, data.Email, data.Mobile));
                });               

            },
            error: function (e) {
                alert("error");
            }
        });
        $scope.profileFirstName = '';
        $scope.profileLastName = '';
        $scope.profileEmail = '';
        $scope.profileMobile = '';
       
    };
}

