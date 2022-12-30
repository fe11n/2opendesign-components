import { DirectiveBinding, ObjectDirective } from 'vue';
import { useResizeObserver, ResizeListenerT } from '../hooks';
import { isFunction } from '../_shared/utils';

const ob = useResizeObserver();
let listener: ResizeListenerT = () => null;

const vOnResize: ObjectDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (isFunction(binding.value)) {
      listener = binding.value;
      ob.addListener(el, listener);
    }
  },
  unmounted(el: HTMLElement) {
    if (listener) {
      ob.removeListener(el, listener);
    }
  },
};

export {
  vOnResize
};