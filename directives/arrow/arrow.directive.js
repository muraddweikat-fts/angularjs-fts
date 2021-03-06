angular.module('directives').directive('r365Arrow', ArrowDirective);

function ArrowDirective() {
  return {
    restrict: 'E',
    template: `
    <span>
    <svg
    class="
      fill-current
      h-4
      w-4
      transform
      menu-item-hover:-rotate-180
      transition
      duration-150
      ease-in-out
    "
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
  >
    <path
      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
    />
  </svg></span>`,
  };
}

export default ArrowDirective;
