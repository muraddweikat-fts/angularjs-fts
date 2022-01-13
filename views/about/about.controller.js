AboutController.$inject = ['$scope', '$state'];

function AboutController($scope, $state) {
  'ngInject';

  $scope.title = 'About';
  $scope.leftMenu = [
    {
      title: 'Actions',
      children: [
        {
          title: 'Save',
          onClick: onSaveClick,
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
            { title: 'AngularJs', isHidden: false },
            { title: 'Hidden', isHidden: () => true },
            { title: 'Hidden 2', isHidden: true },
            { title: 'NodeJs' },
            {
              title: 'Action',
              onClick: function () {
                alert('Action Clicked');
              },
            },
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
      onClick: goTo.bind(this, 'home'), // You can use $state to navigate to a route.
    },
    {
      title: 'About',
      sref: 'about', // Or you can use 'sref' to navigate to a route.
    },
  ];

  function onSaveClick() {
    alert('onSaveClick');
  }

  function goTo(path) {
    return $state.go(path, {}, { location: 'replace' });
  }
}

export default AboutController;
