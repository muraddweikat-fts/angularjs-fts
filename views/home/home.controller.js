HomeController.$inject = ['$scope'];
function HomeController($scope) {
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
}
export default HomeController;
