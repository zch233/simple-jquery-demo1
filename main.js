window.jQuery = function (nodeOrSelector) {
  let node = {}
  if (typeof nodeOrSelector === 'string') {
    const list = document.querySelectorAll(nodeOrSelector)
    list.forEach((item, index) => {
      node[index] = item
    })
    node.length = list.length
  } else {
    node[0] = nodeOrSelector
    node.length = 1
  }
  return {
    node,
    addClass (className) {
      for (let i=0;i<node.length;i++) {
        node[i].classList.add(className)
      }
      return this
    },
    text (text) {
      if (text === undefined) {
        let texts = []
        for (let i=0;i<node.length;i++) {
          texts.push(node[i].textContent)
        }
        return texts
      } else {
        for (let i=0;i<node.length;i++) {
          node[i].textContent = text
        }
      }
    }
  }
}
window.$ = window.jQuery
console.log($('.div'))
$('.div').addClass('sss').addClass('ssss')
console.log($('.div').text())
