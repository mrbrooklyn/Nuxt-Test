<script setup>
const route = useRoute()
const testId = route.params.id

const BASE_URL = 'https://65fc30a114650eb2100bc24d.mockapi.io/TestNuxt'

const { data: testList } = await useFetch(`${BASE_URL}/user/${testId}`)

</script>

<template>
    <div>
        {{ testId }}
        {{ testList.name }}
    </div>
</template>