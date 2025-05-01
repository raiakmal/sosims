export default function optAlgorithm(pages, frameCount) {
    const frame = []
    const steps = []
    let faults = 0
  
    pages.forEach((page, idx) => {
      if (!frame.includes(page)) {
        if (frame.length < frameCount) {
          frame.push(page)
        } else {
          const future = frame.map(f => {
            const nextUse = pages.slice(idx + 1).indexOf(f)
            return nextUse === -1 ? Infinity : nextUse
          })
          const replaceIdx = future.indexOf(Math.max(...future))
          frame[replaceIdx] = page
        }
        faults++
        steps.push({ page, frame: [...frame], fault: true })
      } else {
        steps.push({ page, frame: [...frame], fault: false })
      }
    })
  
    return { steps, pageFault: faults }
  }
