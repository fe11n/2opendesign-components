import { PopupPositionT, PopupTriggerT } from '../popup';
import { ExtractPropTypes, PropType } from 'vue';
import type { SizeT, RoundT, VariantT } from '../_shared/global';

export const selectProps = {
  /**
   * 下拉框的值
   * v-model
   */
  modelValue: {
    type: [String, Number] as PropType<string | number>,
  },
  /**
   * 下拉框的默认值
   * 非受控
   */
  defaultValue: {
    type: [String, Number],
  },
  /**
   * 大小
   */
  size: {
    type: String as PropType<SizeT>,
  },
  /**
   * 圆角值
   */
  round: {
    type: String as PropType<RoundT>
  },
  /**
   * 颜色类型
   */
  color: {
    type: String as PropType<'normal' | 'success' | 'warning' | 'danger'>,
    default: 'normal'
  },
  /**
   * 按钮类型：ColorT
   */
  variant: {
    type: String as PropType<VariantT>,
    default: 'outline'
  },
  /**
   * 提示文本
   */
  placeholder: {
    type: String,
    default: 'please select...'
  },
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
  },
  /**
   * 下拉选项触发方式
   */
  trigger: {
    type: String as PropType<PopupTriggerT>,
    default: 'click'
  },
  /**
   * 下拉选项位置
   */
  optionPosition: {
    type: String as PropType<PopupPositionT>,
    default: 'bl'
  },
  /**
   * 下拉选项宽度自适应规则
   * 'auto':自动 | 'min-width':最小宽度与选择框一致 | 'width': 宽度与选择框一致
   */
  optionWidthMode: {
    type: String as PropType<'auto' | 'min-width' | 'width'>,
    default: 'min-width'
  },
  /**
   * 下拉容器自定义类
   */
  optionWrapClass: {
    type: String,
  },
  /**
   * 是否在结束选择时，卸载下拉选项
   * v-model
   */
  unmountOnHide: {
    type: Boolean,
    default: true
  },
  /**
   * 默认初始值对应的label显示，不传则使用modelValue
   * 当unmountOnClose为true时，存在初始值对应label无法获取问题，可使用该属性指定初始值
   */
  defaultLabel: {
    type: String,
  },
  /**
   * 过渡名称
   */
  transition: {
    type: String,
  },
};

export type SelectPropsT = ExtractPropTypes<typeof selectProps>;

export interface SelectOptionT {
  label: string;
  value: string | number;
}