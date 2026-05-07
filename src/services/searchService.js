const data = [
  {
    id: 1,
    title: 'Revenue Report Q3',
    snippet: 'Expected revenue growth for Q3.',
    description: 'Numbers pulled from dashboard export  forecast only, not audited.',
    source: 'Finance Dashboard',
    updatedAt: '2026-04-22',
    category: 'Forecast',
  },
  {
    id: 2,
    title: 'Risk Summary',
    snippet: 'Risk levels for customer groups.',
    description: 'High / medium / low buckets; risk team reviews weekly.',
    source: 'Risk Service',
    updatedAt: '2026-05-01',
    category: 'Risk',
  },
  {
    id: 3,
    title: 'Invoice Finance Update',
    snippet: 'Weekly approval and payout updates.',
    description: 'Approval queue moving ok. payouts bit higher vs last week.',
    source: 'Operations Team',
    updatedAt: '2026-04-29',
    category: 'Operations',
  },
  {
    id: 4,
    title: 'Portfolio Health',
    snippet: 'Repayment and portfolio performance.',
    description: 'Repayment quality + active portfolio mix.',
    source: 'Portfolio System',
    updatedAt: '2026-05-03',
    category: 'Portfolio',
  },
  {
    id: 5,
    title: 'Customer Growth',
    snippet: 'Growth by location and product.',
    description: 'Where signups came from and which sku sold more (wip)',
    source: 'Growth Team',
    updatedAt: '2026-05-05',
    category: 'Growth',
  },
]

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export async function doSearch(text) {
  const q = text.trim().toLowerCase()
  if (!q) {
    return []
  }

  const url = `https://postman-echo.com/get?search=${encodeURIComponent(text)}`
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('bad response')
    }
  } catch {
  }

  await delay(500)

  return data.filter((item) => {
    return (
      item.title.toLowerCase().includes(q) ||
      item.snippet.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    )
  })
}
