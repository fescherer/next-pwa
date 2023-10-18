import Image from 'next/image'

async function getData() {
  const res = await fetch("https://api.sportsanalytics.com.br/api/v2/fixtures-svc/fixtures/date/2023-10-18?includes=weatherReport,additionalInfo,league,stats,pressureStats,probabilities&take=3000&api_key=6OpNBYBVdbcFlWYx28qhslMZ7KglyxmU")
  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (  
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {
          data.data.map((fixture: any) => <div key={fixture.fixtureId}>{fixture.fixtureId}</div>)
        }
      </div>
    </main>
  )
}
