import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'fixturesPage',
  title: 'Page: Results & Fixtures',
  type: 'document',
  fields: [
    defineField({
      name: 'flyer',
      title: 'Top Flyer / Image',
      type: 'image'
    }),
    defineField({
      name: 'seasonTitle',
      title: 'Season Title',
      type: 'string',
      initialValue: '2025 Championship'
    }),
    defineField({
      name: 'matches',
      title: 'Match List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'date', type: 'string', title: 'Date', placeholder: 'e.g. 24.5' }),
            defineField({ name: 'time', type: 'string', title: 'Time', placeholder: 'e.g. klo 13:00' }),
            defineField({ name: 'homeTeam', type: 'string', title: 'Home Team', initialValue: 'SHAMROCKS' }),
            defineField({ name: 'awayTeam', type: 'string', title: 'Away Team' }),
            defineField({ name: 'score', type: 'string', title: 'Score', placeholder: 'e.g. 43 - 0' }),
            defineField({ name: 'note', type: 'string', title: 'Note', placeholder: 'e.g. (F)', description: 'For forfeits or extra info' }),
          ],
          preview: {
            select: {
              date: 'date',
              home: 'homeTeam',
              away: 'awayTeam',
              score: 'score'
            },
            prepare(selection) {
              const { date, home, away, score } = selection;
              return {
                title: `${home} vs ${away}`,
                subtitle: `${date} | ${score || 'Upcoming'}`
              }
            }
          }
        }
      ]
    })
  ],
  preview: {
    prepare() {
      return { title: 'Fixtures & Results Content' }
    }
  }
})