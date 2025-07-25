import { useEffect } from 'react'

export default function Mail() {
  useEffect(() => {
    window.location.href = "https://mail.astra-dao.org"
  }, [])
  return <p className="text-white p-4">Redirecting to ASTRA Mail...</p>
}
