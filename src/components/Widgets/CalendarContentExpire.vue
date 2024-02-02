<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 calendar">
    <div class="card-body p-4">
      <div
          class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Calendar</h3>
      </div>

      <div class="calendar-area">
        <div class="calendar-wrapper">
          <header>
            <div class="icons">
              <span id="prev" @click="changeMonth(-1)">
                <i class="ri-arrow-left-s-line"></i>
              </span>
              <p class="current-date">{{ currentDate }}</p>
              <span id="next" @click="changeMonth(1)">
                <i class="ri-arrow-right-s-line"></i>
              </span>
            </div>
          </header>
          <div class="calendar">
            <ul class="weeks">
              <li>Sun</li>
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thu</li>
              <li>Fri</li>
              <li>Sat</li>
            </ul>
            <ul class="days">
              <li
                  v-for="(day, index) in calendarDays"
                  :key="index"
                  :class="[day.class]"
                  @click="changeSelectDate(day.date,day.class)"
              >
                {{ day.date }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <div
            class="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel2"
            aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-18" id="exampleModalLabel2">
                  Add New Event
                </h1>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group mb-3">
                    <label class="label">Event Name</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Project Name"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label">Event Member</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Event Member"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label">Event Time</label>
                    <input type="time" class="form-control"/>
                  </div>
                  <div class="form-group mb-3">
                    <label class="label">Event Date</label>
                    <input type="date" class="form-control"/>
                  </div>

                  <div class="text-end">
                    <button type="submit" class="default-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {usedTokenStore} from '@/stores/token'

export default defineComponent({
  name: "CalendarContent",
  data() {
    const date = new Date();
    const currYear = date.getFullYear();
    const currMonth = date.getMonth();
    return {
      tokenStore: usedTokenStore(),
      selectedDate: "",
      currentDate: "",
      currYear,
      currMonth,
      calendarDays: {},
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  computed: {
    // this.currentDate = `${this.months[this.currMonth]} ${this.currYear}`;
  },
  mounted() {
    let date = new Date();
    if (this.tokenStore.tokenSelect.expire > 1) {
      date = new Date(this.tokenStore.tokenSelect.expire * 1000);
      this.currMonth = date.getMonth();
      this.currYear = date.getFullYear();
    }
    this.calendarDays = this.generateCalendarDays();
    this.currentDate = `${this.months[this.currMonth]} ${this.currYear}`;

    const formattedDate = date.toISOString().split('T')[0];
    this.tokenStore.tokenSelect.expire = formattedDate
  },
  methods: {
    generateCalendarDays() {
      let date = new Date();
      if (this.tokenStore.tokenSelect.expire > 1) {
        date = new Date(this.tokenStore.tokenSelect.expire * 1000);
      }
      const currDate = date.getDate();
      const currMonth = date.getMonth();
      const currYear = date.getFullYear();
      const firstDayOfMonth = new Date(
          this.currYear,
          this.currMonth,
          1
      ).getDay();
      const lastDateOfMonth = new Date(
          this.currYear,
          this.currMonth + 1,
          0
      ).getDate();
      const lastDayOfMonth = new Date(
          this.currYear,
          this.currMonth,
          lastDateOfMonth
      ).getDay();
      const lastDateOfLastMonth = new Date(
          this.currYear,
          this.currMonth,
          0
      ).getDate();
      // const days: { date: number; class: string }[] = [];
      const days = [];
      for (let i = firstDayOfMonth; i > 0; i--) {
        const date = lastDateOfLastMonth - i + 1;
        days.push({date, class: "inactive"});
      }
      for (let i = 1; i <= lastDateOfMonth; i++) {
        const isToday =
            i === currDate &&
            this.currMonth === currMonth &&
            this.currYear === currYear;
        days.push({date: i, class: isToday ? "active" : ""});
      }
      for (let i = lastDayOfMonth; i < 6; i++) {
        const date = i - lastDayOfMonth + 1;
        days.push({date, class: "inactive"});
      }
      return days;
    },
    changeMonth(direction) {
      this.currMonth += direction;
      if (this.currMonth < 0 || this.currMonth > 11) {
        const date = new Date(
            this.currYear,
            this.currMonth,
            new Date().getDate()
        );
        this.currYear = date.getFullYear();
        this.currMonth = date.getMonth();
      }
      this.currentDate = `${this.months[this.currMonth]} ${this.currYear}`;
      this.calendarDays = this.generateCalendarDays();
    },
    changeSelectDate(day, className) {
      day++;
      let year = this.currYear;
      let month = this.currMonth;

      // Check if the day is from the previous month
      if (className === 'inactive' && day > 15) {
        month--;
        if (month < 0) {
          month = 11;
          year--;
        }
      }
      // Check if the day is from the next month
      else if (className === 'inactive' && day <= 15) {
        month++;
        if (month > 11) {
          month = 0;
          year++;
        }
      }

      console.log(className)
      const selectedDate = new Date(year, month, day);
      const formattedDate = selectedDate.toISOString().split('T')[0];
      console.log('Selected Date:', formattedDate);

      const selectedFullDate = new Date(year, month, day - 1).toISOString().split('T')[0];
      this.selectedDate = selectedFullDate;

      this.calendarDays = this.generateCalendarDays();

      // // Update the class for each day
      // this.calendarDays = this.calendarDays.map(d => {
      //   const fullDate = new Date(year,month, d.date).toISOString().split('T')[0];
      //   return {
      //     ...d,
      //     class: fullDate === selectedFullDate ? 'active' : (d.class === 'inactive' ? 'inactive' : '')
      //   };
      // });

      // Update currMonth and currYear if necessary
      if (this.currMonth !== month || this.currYear !== year) {
        this.currMonth = month;
        this.currYear = year;
        this.currentDate = `${this.months[this.currMonth]} ${this.currYear}`;
        this.calendarDays = this.generateCalendarDays(); // Regenerate the calendar for the new month/year
      } else {
        // Update the class for each day
        this.calendarDays = this.calendarDays.map(d => {
          const fullDate = new Date(this.currYear, this.currMonth, d.date).toISOString().split('T')[0];
          return {
            ...d,
            class: fullDate === selectedFullDate ? 'active' : (d.class === 'inactive' ? 'inactive' : '')
          };
        });
      }

      this.tokenStore.tokenSelect.expire = formattedDate
    },
  },
});
</script>

<style lang="scss" scoped>
.calendar-wrapper {
  header {
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;

    h3 {
      margin-bottom: 0;
      font-size: 20px;
      font-weight: bold;
    }

    .icons {
      display: contents;

      span {
        height: 30px;
        width: 30px;
        line-height: 30px;
        margin: 0 2px;
        cursor: pointer;
        background-color: #f3f3f3;
        color: var(--blackColor);
        text-align: center;
        font-size: 22px;
        border-radius: 50%;
        transition: var(--transition);

        &:hover {
          background: var(--secondaryColor);
          color: var(--whiteColor);
        }
      }
    }

    .current-date {
      font-size: 18px;
      font-weight: 500;
      margin: {
        bottom: 0;
      }
    }
  }

  .calendar {
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      text-align: center;

      li {
        color: var(--paragraphColor);
        width: calc(100% / 7);
        font-size: 1.07rem;
      }
    }

    .weeks {
      padding-left: 0;
      margin-bottom: 0;

      li {
        font-weight: 500;
        cursor: default;
        padding: 5px;
        color: var(--headingColor);
        font-weight: 500;
        font-size: 18px;
      }
    }

    .days {
      padding: 0;
      margin-bottom: 10px;

      li {
        font-family: var(--heading-fontFamily);
        color: var(--paragraphColor);
        font-weight: 400;
        z-index: 1;
        cursor: pointer;
        position: relative;
        padding: 10px;
        transition: var(--transition);

        &.inactive {
          color: #8896a4;
        }

        &:nth-child(6) {
          color: var(--dangerColor);
        }

        &:nth-child(7) {
          color: var(--dangerColor);
        }

        &:nth-child(13) {
          color: var(--dangerColor);
        }

        &:nth-child(14) {
          color: var(--dangerColor);
        }

        &:nth-child(20) {
          color: var(--dangerColor);
        }

        &:nth-child(21) {
          color: var(--dangerColor);
        }

        &:nth-child(27) {
          color: var(--dangerColor);
        }

        &:nth-child(28) {
          color: var(--dangerColor);
        }

        &:nth-child(34) {
          color: var(--dangerColor);
        }

        &:nth-child(35) {
          color: var(--dangerColor);
        }

        &.active {
          color: var(--whiteColor);

          &::before {
            background: #2ed47e;
            border-radius: 50px;
          }
        }

        &::before {
          position: absolute;
          content: "";
          left: 50%;
          top: 50%;
          height: 43px;
          width: 43px;
          z-index: -1;
          border-radius: 2px;
          transform: translate(-50%, -50%);
        }

        &:not(.active):hover::before {
          background: #62cd96;
          border-radius: 50px;
        }

        &:hover {
          color: var(--whiteColor);
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .calendar-wrapper {
    margin-left: 0;

    header {
      padding: 5px;

      .current-date {
        margin: {
          top: 10px;
          bottom: 10px;
          left: 0;
        }
      }
    }

    .calendar {
      padding: 0;

      .weeks {
        padding: 0;

        li {
          padding: 3px;
          font-size: 13px;
        }
      }

      .days {
        li {
          padding: 5px;
          font-size: 15px;

          &::before {
            height: 30px;
            width: 30px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .calendar-wrapper {
    header {
      display: flex !important;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .calendar-wrapper {
    margin-left: 0;
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .calendar-wrapper {
    margin-left: 0;
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .calendar-wrapper {
    header {
      h3 {
        font-size: 15px;
      }

      .current-date {
        font-size: 14px;
        margin-left: 20px;
      }
    }
  }
}
</style>