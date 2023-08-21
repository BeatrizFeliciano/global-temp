import {default as defaultTooltip} from './Tooltip.svelte';

export function tooltip(anchorNode, props = {}) {
    console.log(anchorNode)
  let title, Tooltip = defaultTooltip;
  if (typeof props === 'string') title = props;
  else ({title, Component: Tooltip} = props);

  const tooltipComponent = new Tooltip({
    target: document.body,
    props: {
      title,
      anchorNode,
    },
  });

  const show = () => tooltipComponent.show = true;
  const hide = () => tooltipComponent.show = false;
  const showEvents = ['mouseenter', 'focus'];
  const hideEvents = ['mouseleave', 'blur'];

  showEvents.forEach(event => anchorNode.addEventListener(event, show));
  hideEvents.forEach(event => anchorNode.addEventListener(event, hide));

  return {
    destroy() {
      showEvents.forEach(event => anchorNode.removeEventListener(event, show));
      hideEvents.forEach(event => anchorNode.removeEventListener(event, hide));
    }
  };
}