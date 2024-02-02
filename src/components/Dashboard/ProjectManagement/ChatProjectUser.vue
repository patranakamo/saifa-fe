<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Chat Project User</h3>

        <div class="dropdown action-opt">
          <button
            class="btn bg-transparent p-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="ri-more-fill text-body"></i>
          </button>

          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <a class="dropdown-item" href="javascript:;">
                <vue-feather type="eye"></vue-feather>
                View Profile
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <vue-feather type="trash"></vue-feather>
                Delete
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <vue-feather type="settings"></vue-feather>
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>

      <ul
        class="chat-list ps-0 mb-0 list-unstyled chat-list-wrap scroll-bar h-276"
      >
        <li>
          <span class="text-dark mb-2 d-block">25 Feb at 3:30 PM</span>
        </li>
        <li class="chat">
          <div class="d-flex">
            <div class="flex-shrink-0">
              <img
                class="wh-30 rounded-circle"
                src="../../../assets/images/user/user-12.jpg"
                alt="user-12"
              />
            </div>
            <div class="flex-grow-1 ms-2 d-inline-block">
              <p class="text-body fs-14">Hello</p>
              <div>
                <p class="text-body fs-14">Good evening, how are you</p>
              </div>
            </div>
          </div>
        </li>
        <li class="chat me">
          <div class="d-flex">
            <div class="flex-grow-1 ms-2">
              <p class="bg-primary text-white fs-14">
                Fine! How can I help you today?
              </p>
            </div>
          </div>
        </li>
        <li class="chat">
          <div class="d-flex">
            <div class="flex-shrink-0">
              <img
                class="wh-30 rounded-circle"
                src="../../../assets/images/user/user-12.jpg"
                alt="user-12"
              />
            </div>
            <div class="flex-grow-1 ms-2 d-inline-block">
              <p class="text-body fs-14">
                I want to discuss our new project hotel management system
              </p>
            </div>
          </div>
        </li>
        <li class="chat me">
          <div class="d-flex">
            <div class="flex-grow-1 ms-2">
              <p class="fs-14 bg-primary text-white">
                Well, how can I help you?
              </p>
            </div>
          </div>
        </li>

        <li>
          <span class="text-dark mb-2 d-block">27 Feb at 4:35 PM</span>
        </li>
        <li class="chat">
          <div class="d-flex">
            <div class="flex-shrink-0">
              <img
                class="wh-30 rounded-circle"
                src="../../../assets/images/user/user-12.jpg"
                alt="user-12"
              />
            </div>
            <div class="flex-grow-1 ms-2 d-inline-block">
              <p class="text-body fs-14">Hello</p>
              <div>
                <p class="text-body fs-14">Good evening, how are you</p>
              </div>
            </div>
          </div>
        </li>
        <li class="chat me">
          <div class="d-flex">
            <div class="flex-grow-1 ms-2">
              <p class="bg-primary text-white fs-14">
                Fine! How can I help you today?
              </p>
            </div>
          </div>
        </li>
        <li class="chat">
          <div class="d-flex">
            <div class="flex-shrink-0">
              <img
                class="wh-30 rounded-circle"
                src="../../../assets/images/user/user-12.jpg"
                alt="user-12"
              />
            </div>
            <div class="flex-grow-1 ms-2 d-inline-block">
              <p class="text-body fs-14">
                I want to discuss our new project hotel management system
              </p>
            </div>
          </div>
        </li>
        <li class="chat me">
          <div class="d-flex">
            <div class="flex-grow-1 ms-2">
              <p class="fs-14 bg-primary text-white">
                Well, how can I help you?
              </p>
            </div>
          </div>
        </li>
      </ul>

      <form class="user-chat-form position-relative">
        <input
          type="text"
          class="form-control"
          placeholder="Type your message..."
        />
        <button
          class="position-absolute top-50 end-0 translate-middle-y bg-transparent border-0 p-0"
        >
          <img src="../../../assets/images/send.png" alt="send" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatProjectUser",
};
</script>