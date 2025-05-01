export default function fifoAlgorithm(pages, frameCount) {
    const frame = []
    const steps = []
    let faults = 0
    let pointer = 0
  
    pages.forEach((page) => {
      if (!frame.includes(page)) {
        if (frame.length < frameCount) {
          frame.push(page)
        } else {
          frame[pointer] = page
          pointer = (pointer + 1) % frameCount
        }
        faults++
        steps.push({ page, frame: [...frame], fault: true })
      } else {
        steps.push({ page, frame: [...frame], fault: false })
      }
    })
  
    return { steps, pageFault: faults }
  }  