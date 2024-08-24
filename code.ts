figma.showUI(__html__,{width: 350, height: 475})

figma.ui.onmessage = msg => {
  if (msg.type === 'finish') {
    figma.closePlugin()
  }
}