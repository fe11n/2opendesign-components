import { ObjectDirective, DirectiveBinding, createVNode, render } from 'vue';
import OLoading from './OLoading.vue';

const vLoading: ObjectDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const vnode = createVNode(OLoading, { show: binding.value });
    render(vnode, el);
    const vm = vnode.component;
    (el as any).__loading_data = {
      instance: vm,
    };
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    const data = (el as any).__loading_data;
    if (data) {
      data.instance.exposed.toggle(binding.value);
    }
  },
};

export { vLoading };
