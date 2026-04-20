import { useState, useEffect } from 'react'

export default function useTypewriter(words, typingSpeed = 90, deletingSpeed = 50, pauseMs = 2000) {
  const [text,    setText]    = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIdx((i) => (i + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIdx, words, typingSpeed, deletingSpeed, pauseMs])

  return text
}
