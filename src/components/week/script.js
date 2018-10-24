import moment from 'moment'

export default {
  name: 'Week',
  data () {
    return {
      week: {
        type: Object
      }
    }
  },
  methods: {
    buildCalendar () {
      const now = moment()
      let tmp = moment(now).day(moment.localeData('de').firstDayOfWeek())
      const w = tmp.week()
      let days = []
      do {
        const day = moment(tmp)
        let newDay = {
          d: day,
          isPast: tmp.isBefore(now, 'day'),
          isToday: tmp.isSame(now, 'day')
        }
        days.push(newDay)

        tmp.add(1, 'day')
      } while (tmp.isoWeek() === w)

      this.week = {
        days: days,
        w: w
      }
    }
  },
  mounted () {
    this.buildCalendar()
  }
}
