import {defineStore} from 'pinia'
import axios from 'axios'

const BEST_URL = 'https://6567f7e39927836bd973f4a7.mockapi.io'

export const useTodoStore = defineStore('todo',
    {
        state: () => ({
            list: [],
            statuses: ['Pending', 'Doing', 'Done'],
            editTodo: {}
        }),
        actions: {
            async loadTodos() {
                const returnData = await axios.get(`${BEST_URL}/todos`)
                this.list = returnData.data
            },
            async loadTodo(id) {
                const returnData = await axios.get(`${BEST_URL}/todos/${id}`)
                this.editTodo = returnData.data
            },
            async addNewToDo(todoName) {
                const newTodo = {
                    name: todoName,
                    status: 'Pending'
                }
                const returnData = await axios.post(`${BEST_URL}/todos`, newTodo)
                console.log(returnData.data)
            },
            async updateTodo(id, todoUpdate) {
                console.log(id)
                const updateData = {
                    name: todoUpdate.name,
                    status: todoUpdate.status
                }
                const returnData = await axios.put(`${BEST_URL}/todos/${id}`, updateData)
                console.log(returnData.data)
            },
            async removeTodo(id) {
                const returnData = await axios.delete(`${BEST_URL}/todos/${id}`)
                console.log(returnData.data)
            }
        }
    }
)
