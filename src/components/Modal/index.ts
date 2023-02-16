import { createVNode, render, h } from 'vue'
import ConfirmModal from './ConfirmModal.vue'
import { ConfirmModalOptions, Modal } from './type'

/**
 * 确认框
 */
function confirm(options: ConfirmModalOptions) {
  const vnode = createVNode(ConfirmModal, {
    ...options,
    visible: true
  })

  const wrapper = document.createElement('div')

  render(vnode, wrapper)

  document.body.appendChild(wrapper)
}

export default { confirm } as Modal
