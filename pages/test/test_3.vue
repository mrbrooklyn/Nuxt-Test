<template>
    <div class=" flex min-h-screen items-center justify-center">
      <div class="panel w-[400px] rounded-lg bg-white p-6 text-center">
      <!-- <div class="panel w-[400px] rounded-lg border border-[#ebedf2] bg-white p-6 text-center"> -->
        <h1 class="text-4xl text-primary dark:text-white-light">HENGPAY</h1>
        <h3 class="py-4 text-lg text-gray-500 dark:text-white-light">Please sign up your sub-merchant</h3>
        <form class="space-y-5 dark:text-white" @submit.prevent>
            <input type="text" placeholder="Username" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
            <input type="password" placeholder="Password" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
            <input type="password" placeholder="Confirm Password *" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />

            <div class="flex items-center justify-between grid grid-cols-3 gap-4">
                <div class="flex">
                  <input type="number" placeholder="MDR" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
                </div>
                <div class="col-span-2 flex items-center justify-center">
                  <input type="checkbox" class="form-checkbox" v-model="userStatus"/>
                  <span class="text-white-dark">Status : {{ userStatus ? 'Active' : 'Inactive' }}</span>
                </div>
            </div>

            <div
                class="flex items-center justify-center border border-[#e0e6ed] bg-[#eee] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]"
            >
                User Role
            </div>
            <select id="gridState" class="form-select text-white-dark py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none">
                <option>Choose...</option>
                <option>SUPER ADMIN</option>
                <option>ADMIN</option>
                <option>USER</option>
            </select>
            <input type="text" placeholder="HENG ONLINE888" class="form-input bg-gray-200" disabled/>
          <button
            type="submit"
            class="btn btn-gradient !mt-6 w-full border-0 bg-blue uppercase text-white shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>

  const userStatus = ref('');

  const usernameProps = {
    id: 'username',
    type: 'text',
    label: '',
    placeholder: 'Username',
    validate: '',
    key: 'identifier',
  };

  const passwordProps = {
    id: 'password',
    label: '',
    placeholder: 'Password',
    validate: '',
    key: 'password',
  };

  

</script>