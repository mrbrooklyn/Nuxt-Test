<template>
    <div class=" flex min-h-screen items-center justify-center">
      <div class="panel w-[400px] rounded-lg bg-white p-6 text-center">
      <!-- <div class="panel w-[400px] rounded-lg border border-[#ebedf2] bg-white p-6 text-center"> -->
        <h1 class="text-4xl text-primary dark:text-white-light">HENGPAY</h1>
        <h3 class="py-4 text-lg text-gray-500 dark:text-white-light">Please sign up your account</h3>
        <form class="space-y-5 dark:text-white" @submit.prevent>
            <input type="text" placeholder="Username" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
            <input type="password" placeholder="Password" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
            <input type="password" placeholder="Confirm Password *" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
            <input type="text" placeholder="Company Name" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />

            
          <!-- <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input type="checkbox" class="mr-2" />
              <span>Active</span>
            </div>
            <div>
              <NuxtLink class="text-gray-400">Forgot Password?</NuxtLink>
            </div>
          </div> -->
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