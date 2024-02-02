<template>
  <div class="card border-0 bg-d6d7fc border-radius-10 mb-4">
    <div class="card-body p-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h3 class="fs-18 fw-medium text-dark mb-0">Call Status Details</h3>
<!--        <span>Tracking ID:000147852365</span>-->
      </div>

      <div class="position-relative m-4">
        <div
          class="progress"
          role="progressbar"
          aria-label="Progress"
          aria-valuenow="66"
          aria-valuemin="0"
          aria-valuemax="100"
          style="height: 1px"
        >
          <div
            class="progress-bar"
            :style="{
              width: progressPercentage+'%',
              backgroundColor: '#5c61f2'
            }"
          ></div>
        </div>
        <button
          type="button"
          class="position-absolute top-0 c-start-0 translate-middle btn btn-sm btn-primary rounded-pill border-0 p-0"
          :style="{
              width: '10px',
              height: '10px',
              backgroundColor: callStatus === 'initialize' ? '#2ed47e' : '#5c61f2'
            }"
        ></button>
        <button
          type="button"
          class="position-absolute top-0 c-start-33 translate-middle btn btn-sm btn-primary rounded-pill border-0 p-0"
          :style="{
              width: '10px',
              height: '10px',
              backgroundColor: callStatus === 'Connected' ? '#2ed47e' : '#5c61f2'
            }"
        ></button>
        <button
          type="button"
          class="position-absolute top-0 c-start-66 translate-middle btn btn-sm btn-success rounded-pill border-0 p-0"
          :style="{
              width: '10px',
              height: '10px',
              backgroundColor: callStatus === 'Up' ? '#2ed47e' : '#5c61f2'
            }"
        ></button>
        <button
          type="button"
          class="position-absolute top-0 c-start-100 translate-middle btn btn-sm btn-primary rounded-pill border-0 p-0"
          :style="{
              width: '10px',
              height: '10px',
              backgroundColor: callStatus === 'RecordReady' ? '#2ed47e' : '#5c61f2'
            }"
        ></button>
      </div>

      <ul
        class="d-flex justify-content-between align-items-center ps-0 mb-0 list-unstyled order-status"
      >
        <li>{{callStatus}}user click call</li>
        <li>customer pickup</li>
        <li>end call</li>
        <li>voice record ready</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    callStatus: {
      type: String,
      required: true
    }
  },
  computed: {
    progressPercentage() {
      switch (this.callStatus) {
        case 'initialize':
          return 0;
        case 'Connected':
          return (100 / 3) * 1;
        case 'Up':
          return (100 / 3) * 2;
        case 'RecordReady':
          return 100;
        default:
          return 0;
      }
    }
  }
}
</script>