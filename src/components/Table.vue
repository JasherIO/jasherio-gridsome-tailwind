// https://tailwindcomponents.com/component/table

<template>
  <table class="table font-body text-sm text-black text-left w-full border-collapse">
    <tr class="table-row">
      <th
        class="table-cell py-2 px-3 md:py-4 md:px-6 font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
      >Event</th>
      <th
        class="table-cell py-2 px-3 md:py-4 md:px-6 font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
      >Role</th>
      <th
        class="table-cell py-2 px-3 md:py-4 md:px-6 font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
      >Type</th>
      <th
        class="table-cell py-2 px-3 md:py-4 md:px-6 font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
      >Start</th>
      <th
        class="table-cell py-2 px-3 md:py-4 md:px-6 font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
      >End</th>
    </tr>
    <tr
      v-for="(event, index) in events"
      :key="index + '-' + event.name"
      class="table-row hover:bg-grey-lighter"
    >
      <td class="table-cell py-2 px-3 md:py-4 md:px-6 border-b border-grey-light">
        <a
          class="text-grey-darkest hover:text-green transition-color no-underline border-b border-transparent hover:border-green transition-border-color"
          :href="event.link"
        >{{event.name}}</a>
      </td>
      <td
        class="table-cell py-2 px-3 md:py-4 md:px-6 border-b border-grey-light"
      >{{event.roles.join(', ')}}</td>
      <td class="table-cell py-2 px-3 md:py-4 md:px-6 border-b border-grey-light">{{event.type}}</td>
      <td
        class="table-cell py-2 px-3 md:py-4 md:px-6 border-b border-grey-light"
      >{{formatDate(event.startDate)}}</td>
      <td
        class="table-cell py-2 px-3 md:py-4 md:px-6 border-b border-grey-light"
      >{{formatDate(event.endDate)}}</td>
    </tr>
  </table>
</template>

<script>
import Events from "@/data/events.json";
import moment from "moment";

export default {
  name: "Table",
  data() {
    return {
      events: Events
    };
  },
  methods: {
    formatDate(date) {
      const m = moment(date, "MMMM D, YYYY");
      return m.isValid() ? m.format("ll") : date;
    }
  }
};
</script>
