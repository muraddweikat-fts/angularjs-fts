function AboutController($scope) {
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
      sref: 'home',
    },
    {
      title: 'About',
      sref: 'about',
    },
  ];

  function onSaveClick() {
    alert('onSaveClick');
  }
}

export default AboutController;
