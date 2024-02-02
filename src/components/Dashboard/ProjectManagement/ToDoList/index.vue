<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <div class="">
          <h3 class="fw-medium fs-18 mb-0">To do List</h3>
          <p class="fs-14 text-body">Task assigned to me 600</p>
        </div>

        <form class="src-form position-relative">
          <input
            type="text"
            class="form-control h-40"
            placeholder="Search task here..."
          />
          <vue-feather
            type="search"
            class="position-absolute top-50 start-0 translate-middle-y"
          ></vue-feather>
        </form>
      </div>

      <div class="all-table scroll-bar h-325">
        <table class="table align-middle mb-0 to-do-table">
          <tbody>
            <tr v-for="list in lists" :key="list.id">
              <td class="ps-0">
                <div class="form-check d-flex align-items-center mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    :id="'flexCheckDefault' + list.id"
                  />
                  <label
                    class="form-check-label fs-14 text-dark"
                    :for="'flexCheckDefault' + list.id"
                  >
                    {{ list.title }}
                  </label>
                </div>
              </td>
              <td>
                <span class="text-body d-block mb-1">Assigned To</span>
                <span class="text-dark d-block">{{ list.assignedTo }}</span>
              </td>
              <td>
                <span class="text-body d-block mb-1">Status</span>
                <span class="rounded-0 d-block"> {{ list.status }}</span>
              </td>
              <td>
                <span class="d-block text-body mb-1">Deadline</span>
                <span class="d-block text-dark"> {{ list.deadline }}</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="eye"></vue-feather>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn bg-transparent p-0 text-primary add-task mt-3 float-end"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        + Add new task
      </button>

      <!-- To Do Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-18" id="exampleModalLabel">
                Add New To Do List
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
                  <label class="label">Project Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Project Name"
                  />
                </div>
                <div class="form-group mb-3">
                  <label class="label">Assigned To</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Assigned To"
                  />
                </div>
                <div class="form-group mb-3">
                  <label class="label">Status</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Status"
                  />
                </div>
                <div class="form-group mb-3">
                  <label class="label">Deadline</label>
                  <input type="date" class="form-control" />
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import toDoList from "./toDoList.json";

export default defineComponent({
  name: "ToDoList",
  data() {
    return {
      lists: toDoList,
    };
  },
});
</script>