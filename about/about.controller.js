class AboutController {
  constructor($scope) {
    'ngInject';
    $scope.title = 'About';
    $scope.menu = [
      {
        title: 'Test Actions',
        children: [
          {
            title: 'Test Save',
          },
          {
            title: 'Test Save and new',
            children: [
              { title: 'Sub Menu 1' },
              { title: 'Sub Menu 2' },
              { title: 'Sub Menu 3' },
            ],
          },
        ],
      },
      {
        title: 'Languages',
        children: [
          { title: 'PHP' },
          { title: 'Python' },
          { title: 'Javascript' },
        ],
      },
    ];
  }
}

export default AboutController;
