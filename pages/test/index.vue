<template>
    <section class="grid place-items-center p-16 min-h-screen">
        <div class="flex gap-4">
            <input v-model="userName" class="h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600" type="text" placeholder="type here..." />
            <button @click="addUser()" class="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600">
                Add
            </button>
        </div>
        <ul>
            <li v-for="users in user" :key="users.id">
                {{ users.id }}
                {{ users.name }}
                <select
                    class="outline-none focus:outline-none p-2 bg-white rounded-3xl border 10px solid"
                    v-model="users.status"
                >
                    <option>Draft</option>
                    <option>Waiting</option>
                    <option>Complete</option>
                </select>
                <button @click="editUser(users.id, users.status)" class="rounded-lg border-2 border-blue-600 bg-blue-500 text-blue-50 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-600">
                    Save
                </button>
                <NuxtLink :to="`/test/${users.id}`">Edit</NuxtLink>
            </li>
        </ul>
    </section>
</template>

<script setup>
    const BASE_URL = 'https://65fc30a114650eb2100bc24d.mockapi.io/TestNuxt'
    const user = ref([])
    const userName = ref('')

    const getUser = async () => { 
        try {
            const { data } = await useFetch(`${BASE_URL}/user`)
            user.value = data.value
        } 
        catch (error) {
            console.log('error: ', error)
        }
    }

    const editUser = async (userId, userStatus) => { 
        try {
            await useFetch(`${BASE_URL}/user/${userId}`,{
                method: 'put',
                body: {
                    status: userStatus
                }
            })
            await getUser()
        } 
        catch (error) {
            console.log('error: ', error)
        }
    }

    const addUser = async () => {
        try {
            await useFetch(`${BASE_URL}/user`, {
                    method: 'post',
                    body: {
                        name: userName.value,
                        status: 'Draft'
                    }
                }
            )
            await getUser()
        } 
        catch (error) {
            console.log('error: ', error)
        }
    }

    getUser()
</script>