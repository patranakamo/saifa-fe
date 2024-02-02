<template>
  <div class="card rounded-3 border-0 mb-4">
    <div class="card-body p-4">
      <div class="calendar-wrap">
        <div id="calendar"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

onMounted(() => {
  const calendarEl = document.getElementById("calendar");
  if (calendarEl) {
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin],
      headerToolbar: {
        left: "today",
        center: "title",
        right: "prev,next",
      },
      initialDate: "2023-10-12",
      navLinks: true,
      editable: true,
      dayMaxEvents: true,
      events: [
        {
          title: "All Day Event",
          start: "2023-10-27",
        },
        {
          title: "Project Deadline",
          start: "2023-10-02",
          end: "2023-10-03",
        },
        {
          title: "Repeating Event",
          start: "2023-10-16T16:00:00",
        },
        {
          title: "Conference",
          start: "2023-10-11",
          end: "2023-10-13",
        },
        {
          title: "Meeting",
          start: "2023-10-11T10:30:00",
          end: "2023-10-11T12:30:00",
        },
        {
          title: "Lunch",
          start: "2023-10-11T12:00:00",
        },
        {
          title: "Meeting",
          start: "2023-10-11T14:30:00",
        },
        {
          title: "Happy Hour",
          start: "2023-10-10T17:30:00",
        },
        {
          title: "Dinner",
          start: "2023-10-11T20:00:00",
        },
        {
          title: "Long Event",
          start: "2023-10-30",
          end: "2023-11-01",
        },
      ],
    });
    calendar.render();
  }
});
</script>