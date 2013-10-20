
function ProfileListCtrl($scope) {
    $scope.profilelist = [
         new Profile(1, "Mark", "Brunner", "Mark.Brunner@testemail.com", "0999999999"),
         new Profile(2, "Barry", "Glen", "Barry.Glen@testemail.com", "0999964564"),
         new Profile(3, "Amro", "Kho", "Amro.Kho@testemail.com", "0999999999"),
         new Profile(4, "Bing", "Lee", "Bing.Lee@testemail.com", "099089080808"),
         new Profile(5, "Sana", "Ken", "sana.ken@testemail.com", "0999999999"),
         new Profile(6, "Amit", "kanth", "Amit.kanth@testemail.com", "0999777777"),
         new Profile(7, "Brett", "Lee", "brett.lee@testemail.com", "0999999998"),
         new Profile(8, "Anand", "Sharma", "anand.sharma@testemail.com", "0999999957"),
         new Profile(9, "klen", "mac", "klen.mac@testemail.com", "0999999996"),
         new Profile(10, "Martin", "Ken", "martin.ken@testemail.com", "0999999995"),
         new Profile(11, "Vinoth", "But", "vinoth.but@testemail.com", "0999999993"),
         new Profile(12, "Krishnan", "Nadar", "krishnan.nadar@testemail.com", "0999999992"),
         new Profile(13, "Ragav", "Reddy", "ragav.reddy@testemail.com", "0999999991"),
         new Profile(14, "ajith", "kumar", "ajith.kumar@testemail.com", "0999999969"),
         new Profile(15, "kamran", "akmal", "kamran.akmal@testemail.com", "0999997999"),
         new Profile(16, "Neil", "Jhonson", "neil.jhonson@testemail.com", "0999998999"),
         new Profile(17, "vinay", "kumar", "vinay.kumar@testemail.com", "0999994999"),
         new Profile(18, "yunus", "khan", "yunus.khan@testemail.com", "0999939999"),
         new Profile(19, "ram", "patel", "ram.patel@testemail.com", "0999989999"),
         new Profile(20, "kannan", "pillai", "kannan.pillai@testemail.com", "0999997999"),
         new Profile(21, "karthik", "iyer", "karthik.iyer@testemail.com", "0999991999"),
    ];



    $scope.addToList = function () {
        var id = $scope.profilelist.length + 1;
        $scope.profilelist.push(new Profile(id, $scope.profileFirstName, $scope.profileLastName, $scope.profileEmail, $scope.profileMobile));
        $scope.profileFirstName = '';
        $scope.profileLastName = '';
        $scope.profileEmail = '';
        $scope.profileMobile = '';
       
    };
}