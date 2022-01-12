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
            { title: 'Hidden', isVisible: false },
            { title: 'NodeJs' },
          ],
        },
        { title: 'Hidden Menu', isVisible: false },
        { title: 'Java' },
      ],
    },
  ];
  $scope.rightMenu = [
    {
      title: 'Home',
      isVisible: true,
      sref: 'home',
    },
    {
      title: 'About',
      isVisible: true,
      sref: 'about',
    },
    {
      title: 'Hidden',
      isVisible: false,
    },
    { title: 'Not Link' },
  ];
}
export default HomeController;
