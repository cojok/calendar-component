import moment from 'moment'

export default {
  name: 'Week',
  data () {
    return {
      month: {
        type: Object
      },
      weeks: ['Montag', 'Dienstag', 'Mitwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sontag']
    }
  },
  methods: {
    buildCalendar () {
      const now = moment()
      let tmp = moment(now).date(1)
      const monthFirstDay = moment(tmp)
      const m = tmp.month()
      let days = []
      do {
        const day = moment(tmp)
        let newDay = {
          date: day,
          isPast: tmp.isBefore(now, 'day'),
          isToday: tmp.isSame(now, 'day')
        }
        days.push(newDay)

        tmp.add(1, 'day')
      } while (tmp.month() === m)

      let weeks = []

      let paddingOffset = 1

      for (let p = 1; p < moment(now).isoWeekday(); p++) {
        weeks.unshift({
          date: moment(monthFirstDay).subtract(paddingOffset, 'day'),
          isPast: true,
          isToday: false,
          isDifferentMonth: true
        })

        paddingOffset++
      }

      weeks.push.apply(weeks, days)

      if (weeks.length % 7) {
        for (let p = (7 - (weeks.length % 7)); p > 0; p--) {
          weeks.push({
            date: moment(tmp),
            isPast: true,
            isToday: false,
            isDifferentMonth: true
          })
          tmp.add(1, 'day')
        }
      }

      this.month = weeks.map(function (e, i) {
        return i % 7 === 0 ? weeks.slice(i, i + 7) : null
      }).filter(function (e) { return e })
    }
  },
  mounted () {
    this.buildCalendar()
  }
}
