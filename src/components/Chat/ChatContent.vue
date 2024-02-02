<template>
  <div class="row">
    <div class="col-lg-5 col-xxl-3 col-md-6">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Teresa Gilliam</h4>
          <form class="src-form position-relative mb-3">
            <input
              type="text"
              class="form-control h-40 text-dark"
              placeholder="Search here..."
              style="padding-left: 35px !important"
            />
            <vue-feather
              type="search"
              class="position-absolute top-50 start-0 translate-middle-y"
              style="width: 18px; left: 15px !important; stroke: #919aa3"
            ></vue-feather>
          </form>

          <ul
            class="nav nav-tabs chat-tabs text-start border-0 mb-3"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link px-0 border-0 fs-14 fw-medium py-0 text-body active"
                id="all-message-tab"
                data-bs-toggle="tab"
                data-bs-target="#all-message-tab-pane"
                type="button"
                role="tab"
                aria-controls="all-message-tab-pane"
                aria-selected="true"
              >
                All Message
              </button>
            </li>
            <li class="nav-item ps-4" role="presentation">
              <button
                class="nav-link px-0 border-0 fs-14 fw-medium py-0 text-body"
                id="group-chat-tab"
                data-bs-toggle="tab"
                data-bs-target="#group-chat-tab-pane"
                type="button"
                role="tab"
                aria-controls="group-chat-tab-pane"
                aria-selected="false"
              >
                Group Chat
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="all-message-tab-pane"
              role="tabpanel"
              aria-labelledby="all-message-tab"
              tabindex="0"
            >
              <ul class="ps-0 mb-0 list-unstyled scroll-bar h-618">
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-1.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-1"
                      />
                      <span
                        class="status online position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">
                        Patrick Griffith
                      </h4>
                      <span class="text-body">Hello every one...</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Just Now</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-2.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-2"
                      />
                      <span
                        class="status online position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">David Martinez</h4>
                      <span class="text-body">How are you...</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Wed 8:51 PM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-3.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-3"
                      />
                      <span
                        class="status online position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">Sutherland Lee</h4>
                      <span class="text-body">How can I help you...</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 3, 8:49 AM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-4.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-4"
                      />
                      <span
                        class="status offline position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">Tony Wright</h4>
                      <span class="text-body">Tony sent a photo...</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 7, 5:29 AM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-5.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-5"
                      />
                      <span
                        class="status online position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">William Frost</h4>
                      <span class="text-body">What are you doing...</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 9, 9:12AM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-6.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-6"
                      />
                      <span
                        class="status offline position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">Paul Cupp</h4>
                      <span class="text-body">Voice message</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 9, 3:49 PM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-7.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-7"
                      />
                      <span
                        class="status online position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">Edward Cuellar</h4>
                      <span class="text-body">Edward attachment...</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 10, 8:49 PM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-8.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-8"
                      />
                      <span
                        class="status offline position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">Janice Brown</h4>
                      <span class="text-body">Hello!</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 12, 5:29 AM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-9.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-9"
                      />
                      <span
                        class="status offline position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">Carole Mathis</h4>
                      <span class="text-body">Carole sent a group</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 15, 2:59 PM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-10.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-10"
                      />
                      <span
                        class="status offline position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">Robert Higgins</h4>
                      <span class="text-body">Voice message</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 16, 6:35 PM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-0">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-11.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-11"
                      />
                      <span
                        class="status online position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">Lani Brown</h4>
                      <span class="text-body">Hello!</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 20, 8:20 AM</span
                  >
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade"
              id="group-chat-tab-pane"
              role="tabpanel"
              aria-labelledby="group-chat-tab"
              tabindex="0"
            >
              <ul class="ps-0 mb-0 list-unstyled scroll-bar h-618">
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/wordpress.png"
                        class="wh-50 rounded-circle"
                        alt="wordpress"
                      />
                      <span
                        class="status online position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">Wordpress</h4>
                      <span class="text-body">Hello every one...</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Just Now</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/html.png"
                        class="wh-50 rounded-circle"
                        alt="html"
                      />
                      <span
                        class="status online position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">HTML</h4>
                      <span class="text-body">How are you...</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Wed 8:51 PM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/question-and-answer.png"
                        class="wh-50 rounded-circle"
                        alt="question-and-answer"
                      />
                      <span
                        class="status online position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">QA</h4>
                      <span class="text-body">How can I help you...</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 3, 8:49 AM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/social-media.png"
                        class="wh-50 rounded-circle"
                        alt="social-media"
                      />
                      <span
                        class="status offline position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">
                        Digital Marketing
                      </h4>
                      <span class="text-body">Tony sent a photo...</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 7, 5:29 AM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-5.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-5"
                      />
                      <span
                        class="status online position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">William Frost</h4>
                      <span class="text-body">What are you doing...</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 9, 9:12AM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-6.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-6"
                      />
                      <span
                        class="status offline position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">Paul Cupp</h4>
                      <span class="text-body">Voice message</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 9, 3:49 PM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-7.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-7"
                      />
                      <span
                        class="status online position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">Edward Cuellar</h4>
                      <span class="text-body">Edward attachment...</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 10, 8:49 PM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-8.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-8"
                      />
                      <span
                        class="status offline position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">Janice Brown</h4>
                      <span class="text-body">Hello!</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 12, 5:29 AM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-9.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-9"
                      />
                      <span
                        class="status offline position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">Carole Mathis</h4>
                      <span class="text-body">Carole sent a group</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 15, 2:59 PM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-10.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-10"
                      />
                      <span
                        class="status offline position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">Robert Higgins</h4>
                      <span class="text-body">Voice message</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 16, 6:35 PM</span
                  >
                </li>
                <li class="d-flex justify-content-between mb-0">
                  <div class="d-flex align-items-center">
                    <div class="position-relative flex-shrink-0">
                      <img
                        src="../../assets/images/chat/chat-11.jpg"
                        class="wh-50 rounded-circle"
                        alt="chat-11"
                      />
                      <span
                        class="status online position-absolute bottom-0 end-0 rounded-circle"
                      ></span>
                    </div>
                    <div class="ms-3 flex-grow-1">
                      <h4 class="text-dark fs-14 fw-medium">Lani Brown</h4>
                      <span class="text-body">Hello!</span>
                    </div>
                  </div>
                  <span class="text-body" style="font-size: 10px"
                    >Feb 20, 8:20 AM</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-7 col-xxl-9 col-md-6">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div
            class="d-flex justify-content-between align-items-center border-bottom border-color pb-4 mb-4"
          >
            <div class="d-flex align-items-center">
              <div class="position-relative">
                <img
                  src="../../assets/images/chat/chat-12.jpg"
                  class="wh-50 rounded-circle"
                  alt="chat-12"
                />
                <span
                  class="status online position-absolute bottom-0 end-0 rounded-circle"
                ></span>
              </div>
              <div class="ms-3">
                <h4 class="text-dark fs-14 fw-medium">Teresa Gilliam</h4>
                <span class="text-dark">Active Now</span>
              </div>
            </div>

            <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
              <li>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Audio Call"
                >
                  <vue-feather
                    type="phone"
                    style="width: 20px; stroke: #919aa3"
                  ></vue-feather>
                </a>
              </li>
              <li class="ms-3">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Video Call"
                >
                  <vue-feather
                    type="video"
                    style="width: 20px; stroke: #919aa3"
                  ></vue-feather>
                </a>
              </li>
              <li class="ms-3">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather
                      type="more-vertical"
                      style="width: 20px; stroke: #919aa3"
                    ></vue-feather>
                  </button>

                  <ul class="dropdown-menu">
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
              </li>
            </ul>
          </div>

          <ul
            class="chat-list ps-0 mb-0 list-unstyled chat-list-wrap scroll-bar h-560"
          >
            <li>
              <span class="text-dark mb-2 d-block">25 Feb at 3:30 PM</span>
            </li>
            <li class="chat">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img
                    class="wh-30 rounded-circle"
                    src="../../assets/images/user/user-12.jpg"
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
                    src="../../assets/images/user/user-12.jpg"
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
                    src="../../assets/images/user/user-12.jpg"
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
                  <p class="bg-primary text-white fs-14">Hi, what happened</p>
                </div>
              </div>
            </li>
            <li class="chat">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img
                    class="wh-30 rounded-circle"
                    src="../../assets/images/user/user-12.jpg"
                    alt="user-12"
                  />
                </div>
                <div class="flex-grow-1 ms-2 d-inline-block">
                  <p class="text-body fs-14">
                    I want to discuss with you about my new project
                  </p>
                </div>
              </div>
            </li>
            <li class="chat me">
              <div class="d-flex">
                <div class="flex-grow-1 ms-2">
                  <p class="fs-14 bg-primary text-white">
                    Let me know what you need, I will help you with all kinds of
                    information, thanks
                  </p>
                </div>
              </div>
            </li>
            <li>
              <span class="text-dark mb-2 d-block">25 Feb at 3:30 PM</span>
            </li>
            <li class="chat">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img
                    class="wh-30 rounded-circle"
                    src="../../assets/images/user/user-12.jpg"
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
                    src="../../assets/images/user/user-12.jpg"
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
                    src="../../assets/images/user/user-12.jpg"
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
                  <p class="bg-primary text-white fs-14">Hi, what happened</p>
                </div>
              </div>
            </li>
            <li class="chat">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img
                    class="wh-30 rounded-circle"
                    src="../../assets/images/user/user-12.jpg"
                    alt="user-12"
                  />
                </div>
                <div class="flex-grow-1 ms-2 d-inline-block">
                  <p class="text-body fs-14">
                    I want to discuss with you about my new project
                  </p>
                </div>
              </div>
            </li>
            <li class="chat me">
              <div class="d-flex">
                <div class="flex-grow-1 ms-2">
                  <p class="fs-14 bg-primary text-white">
                    Let me know what you need, I will help you with all kinds of
                    information, thanks
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <form class="border-top border-color pt-4 mt-4">
            <div class="d-flex align-items-center justify-content-between">
              <ul class="ps-0 mb-0 list-unstyled d-flex">
                <li>
                  <button class="bg-transparent p-0 border-0">
                    <vue-feather
                      type="frown"
                      style="width: 20px; stroke: #919aa3"
                    ></vue-feather>
                  </button>
                </li>
                <li class="ms-3">
                  <button class="bg-transparent p-0 border-0">
                    <vue-feather
                      type="paperclip"
                      style="width: 20px; stroke: #919aa3"
                    ></vue-feather>
                  </button>
                </li>
                <li class="ms-3">
                  <button class="bg-transparent p-0 border-0">
                    <vue-feather
                      type="mic"
                      style="width: 20px; stroke: #919aa3"
                    ></vue-feather>
                  </button>
                </li>
                <li class="ms-3">
                  <button class="bg-transparent p-0 border-0">
                    <vue-feather
                      type="image"
                      style="width: 20px; stroke: #919aa3"
                    ></vue-feather>
                  </button>
                </li>
              </ul>

              <div class="position-relative w-100 ms-3">
                <input
                  type="text"
                  class="form-control h-40 text-dark"
                  placeholder="Type your message..."
                  style="border-radius: 10px 50px 50px 10px"
                />
                <button
                  type="submit"
                  class="btn-outline-primary bg border-0 rounded-circle position-absolute top-50 end-0 translate-middle-y"
                  style="width: 40px; height: 40px"
                >
                  <vue-feather type="send" style="width: 20px"></vue-feather>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatContent",
};
</script>