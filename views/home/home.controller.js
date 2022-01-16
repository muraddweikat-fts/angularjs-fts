HomeController.$inject = ['$scope', 'ToastrService'];
function HomeController($scope, ToastrService) {
  $scope.isLoading = false;
  $scope.isFetched = false;
  $scope.callGetDummyUsers = function () {
    $scope.isLoading = true;

    fetch('https://reqres.in/api/users?page=1')
      .then(delay(1000)) // Add some delay for increase loading time :p ( no need in real app)
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
      locals: {
        type,
        message,
      },
    });
  }

  function delay(ms) {
    return function (x) {
      return new Promise((resolve) => setTimeout(() => resolve(x), ms));
    };
  }
}
export default HomeController;
