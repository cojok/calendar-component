import moment from 'moment'

export default {
  name: 'Day',
  data () {
    return {
      day: {
        type: Object
      }
    }
  },
  methods: {
    buildCalendar () {
      const today = moment()
      const timesToday = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      this.day = {
        date: today.format('DD.MM.YYYY'),
        time: timesToday
      }
    }
  },
  mounted () {
    this.buildCalendar()
  }
}
