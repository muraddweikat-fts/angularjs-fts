HomeController.$inject = ['$scope', 'ToastrService'];
function HomeController($scope, ToastrService) {
  $scope.isLoading = false;
  $scope.isFetched = false;
  $scope.callGetDummyUsers = function () {
    $scope.isLoading = true;
    setTimeout(() => {
      // TODO: call Service API
      fetch('https://reqres.in/api/users?page=1')
        .then((response) => response.json())
        .then((data) => {
          $scope.users = data.data;
        })
        .then(() => {
          showToastr({
            type: 'success',
            message: 'The users fetched successfully.',
          });
          $scope.$applyAsync();
        })
        .catch((err) => {
          console.log(err);
          showToastr({
            type: 'error',
            message: err.messagw,
          });
        })
        .finally(() => {
          $scope.isLoading = false;
          $scope.isFetched = true;
        });
    }, 1000);
  };

  $scope.users = [];
  $scope.title = 'Home';
  $scope.leftMenu = [
    {
      title: 'Actions',
      children: [
        {
          title: 'Save',
        },
        {
          title: 'Save and new',
        },
      ],
    },
    {
      title: 'Languages',
      children: [
        { title: 'PHP' },
        { title: 'Python' },
        {
          title: 'Javascript',
          children: [
            { title: 'ReactJs' },
            { title: 'AngularJs' },
            { title: 'Hidden', isHidden: () => false },
            { title: 'NodeJs' },
          ],
        },
        { title: 'Hidden Menu', isHidden: true },
        { title: 'Java' },
      ],
    },
  ];
  $scope.rightMenu = [
    {
      title: 'Home',
      sref: 'home',
    },
    {
      title: 'About',
      sref: 'about',
    },
  ];

  function showToastr({ type, message }) {
    ToastrService.open({
      templateUrl: '../../services/toastr/default.template.html',
      locals: {
        toastr: {
          type,
          message,
        },
      },
    });
  }
}
export default HomeController;
