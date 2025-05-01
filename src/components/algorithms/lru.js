export default function lruAlgorithm(pages, frameCount) {
    const frame = []
    const recent = new Map()
    const steps = []
    let faults = 0
  
    pages.forEach((page, i) => {
      if (!frame.includes(page)) {
        if (frame.length < frameCount) {
          frame.push(page)
        } else {
          let lruIndex = frame.reduce((oldestIdx, pg, idx) => {
            return recent.get(pg) < recent.get(frame[oldestIdx]) ? idx : oldestIdx
          }, 0)
          frame[lruIndex] = page
        }
        faults++
        steps.push({ page, frame: [...frame], fault: true })
      } else {
        steps.push({ page, frame: [...frame], fault: false })
      }
      recent.set(page, i)
    })
  
    return { steps, pageFault: faults }
  }
  