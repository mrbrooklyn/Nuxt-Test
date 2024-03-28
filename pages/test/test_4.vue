<template>
    <div>
      <div class="flex flex-col gap-5 md:flex-row md:items-center">
        <div class="mb-5 flex items-center">
          <Icon name="ooui:user-avatar" class="mr-4 h-[30px] w-[30px] text-blue-light" />
          <span class="text-3xl mt-5 font-semibold text-primary dark:text-white-light">Sign-up new user</span>
        </div>
      </div>
  
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div class="panel rounded-lg bg-white md:col-span-2">
        <!-- <div class="rounded-lg border border-[#ebedf2] bg-white md:col-span-2"> -->
          <h2 class="m-6 text-base font-medium dark:text-white-light">User Detail</h2>
          <div class="w-full border border-t-[1px] white:border-gray-100 dark:border-gray-700"></div>
          <div class="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
            <div>
              <label class="font-medium dark:text-white-light">First Name
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
            </div>
            <div>
              <label class="font-medium dark:text-white-light">Last Name
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
            </div>
            <div>
                <label class="font-medium dark:text-white-light">Password
                  <span class="text-danger">*</span>
                </label>
                <input type="password" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
            </div>
            <div>
                <label class="font-medium dark:text-white-light">Confirm Password 
                  <span class="text-danger">*</span>
                </label>
                <input type="password" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
            </div>
            <div>
              <label class="font-medium dark:text-white-light">Email
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
            </div>
            <div>
              <label class="font-medium dark:text-white-light">Telephone</label>
              <input type="text" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
            </div>
            <div>
              <label class="font-medium dark:text-white-light">Bank Name
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
            </div>
            <div>
              <label class="font-medium dark:text-white-light">Bank No.
                <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
            </div>
          </div>
        </div>
  
        <div class="grid grid-cols-1 gap-4">
            <div class="panel rounded-lg bg-white">
            <!-- <div class="rounded-lg border border-[#ebedf2] bg-white"> -->
            <h2 class="m-6 text-base font-medium dark:text-white-light">Merchant Detail</h2>
            <div class="w-full border border-t-[1px] white:border-gray-100 dark:border-gray-700"></div>
            <div class="grid grid-cols-1 gap-4 p-6">
                <div>
                  <label class="font-medium dark:text-white-light">Merchant Name
                    <span class="text-danger">*</span>
                  </label>
                  <input type="text" placeholder="HENG ONLINE888" class="form-input bg-gray-200 py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" disabled />
                </div>
                <div>
                    <label class="font-medium dark:text-white-light">User Role
                      <span class="text-danger">*</span>
                    </label>
                    <select id="gridState" class="form-select text-white-dark py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none">
                        <option>Choose...</option>
                        <option>SUPER ADMIN</option>
                        <option>ADMIN</option>
                        <option>USER</option>
                    </select>
                </div>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label class="font-medium dark:text-white-light">Deposit MDR Rate (%)
                          <span class="text-danger">*</span>
                        </label>
                        <input type="number" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
                    </div>
                    <div>
                        <label class="font-medium dark:text-white-light">Withdraw MDR Rate (%)
                          <span class="text-danger">*</span>
                        </label>
                        <input type="number" class="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
                    </div>
                  </div>
                  <div class="grid grid-cols-1 gap-4">
                    <div>
                        <input type="checkbox" class="form-checkbox" v-model="userStatus"/>
                        <span class="text-white-dark">Status : 
                            <span :class="userStatus ? 'text-success' : 'text-danger'">{{ userStatus ? 'Active' : 'Inactive' }}</span>
                        </span>
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <!-- <button class="h-[40px] w-[160px] rounded-lg bg-primary p-2 text-white">
                        <Icon name="mingcute:user-setting-line" class="mr-2 h-4 w-4" />
                        <span>sign up</span>
                    </button> -->
                    <button type="submit" class="btn btn-gradient !mt-6 w-full border-0 bg-blue uppercase text-white shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
                        <Icon name="mingcute:user-setting-line" class="mr-2 h-4 w-4" />
                        <span>sign up</span>
                    </button>
                </div>
              <!-- <div class="flex items-center justify-center">
                <button class="h-[40px] w-[160px] rounded-lg bg-danger bg-opacity-50 p-2 text-white">
                  <Icon name="mingcute:user-setting-line" class="mr-2 h-4 w-4" />
                  <span>Check</span>
                </button>
              </div> -->
            </div>
          </div>
          <!-- <div class="rounded-lg border border-[#ebedf2] bg-white">
            <h2 class="m-6 text-base font-medium">Default Callback URL</h2>
            <div class="w-full border border-t-[1px] border-gray-100"></div>
            <div class="grid grid-cols-1 gap-4 p-6">
              <div>
                <label class="font-medium">Callback URL</label>
                <input type="text" class="form-input" />
              </div>
              <div class="flex items-center justify-center">
                <button class="h-[40px] w-[160px] rounded-lg bg-danger bg-opacity-50 p-2 text-white">
                  <Icon name="mingcute:user-setting-line" class="mr-2 h-4 w-4" />
                  <span>Change</span>
                </button>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
    const userStatus = ref('');
  </script>
  