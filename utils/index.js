// Barcha bo'sh joylarni olib tashlash
export const clearSpaces = (text) => {
  return text.replaceAll(' ', '')
}

// Telefon raqamini formatlash
export function formatPhoneNumber(phoneNumber) {
  if (!phoneNumber) return phoneNumber

  const cleanedNumber = phoneNumber.replace(/\D/g, '')

  if (cleanedNumber.length !== 12) return phoneNumber

  return cleanedNumber.replace(
    /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
    '+$1 ($2) $3 $4 $5', // Formatlash
  )
}

// Pulni formatlash
export function formatMoneyDecimal(number, fix = 0) {
  const options = { maximumFractionDigits: fix, minimumFractionDigits: fix }
  return number ? new Intl.NumberFormat('ru-RU', options).format(number) : '0'
}

// Sanani formatlash
export function formatDate(date) {
  const $date = new Date(date)
  const day = String($date.getDate()).padStart(2, '0') // Kun
  const month = String($date.getMonth() + 1).padStart(2, '0') // Oy
  const year = $date.getFullYear() // Yil

  return `${day}.${month}.${year}` // Formati: DD.MM.YYYY
}

// Tunlarni hisoblash
export function calculateNights(fromDate, toDate) {
  const fromDateObj = new Date(fromDate)
  const toDateObj = new Date(toDate)
  const daysDifference = Math.round((toDateObj - fromDateObj) / (1000 * 3600 * 24)) // Tunlarni hisoblash
  return daysDifference // Tunlar soni
}

// Youtube videoni embed qilish
export function toEmbed(url) {
  const regExp = /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[1].length === 11 ? `https://www.youtube.com/embed/${match[1]}` : 'error' // Embed linki yoki xato
}

// Ijtimoiy tarmoqlarda ulashish
export const share = (network, title) => {
  if (process.client) {
    const url = encodeURIComponent(window.location.href) // URL kodlash
    const encodedTitle = encodeURIComponent(title) // Sarlavhani kodlash
    const networks = {
      telegram: `https://t.me/share/url?url=${url}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${encodedTitle}&summary=&source=${document.domain}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?t=${encodedTitle}&u=${url}`,
    }
    window.open(networks[network], '_blank') // Tanlangan tarmoqda yangi oynada ochish
  }
}

export const selectData = [
  { id: 1, title: 'Salomatlik' },
  { id: 2, title: 'IT va tegishli texnologiyalar' },
  { id: 3, title: 'Transport' },
  { id: 4, title: 'Ekologik barqarorlik' },
  { id: 5, title: 'Menejment va xizmatlar' },
  { id: 6, title: 'Xavfsizlik, xavfsizlik va xavf' },
  { id: 7, title: 'Energiya' },
  { id: 8, title: "Oziq-ovqat va qishloq xo'jaligi" },
  { id: 9, title: 'Qurilish' },
  { id: 10, title: 'Muhandislik' },
  { id: 11, title: 'Materiallar' },
  { id: 12, title: 'Xilma-xillik va inklyuziya' },
  { id: 13, title: 'Hukumat' },
]
