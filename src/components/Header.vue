<template>
<div class="flex">
<Menu as="div" class="relative inline-block text-left ml-auto">
      <div>
        <MenuButton class="pr-6 pt-6">
            <img src="../assets/imgs/menu-icon.svg" class="cursor-pointer my-auto h-[30px]" style="filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(95deg) brightness(104%) contrast(101%);">
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-1 w-24 mt-1 origin-top bg-white divide-y divide-gray-100 rounded-md ring-1 ring-black"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <router-link to="/"><button
                :class="[
                  active ? 'font-medium bg-pink-400 text-white' : 'text-gray-900',
                  'group flex font-medium rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                Home
              </button></router-link>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <router-link to="/about"><button
                :class="[
                  active ? 'bg-green-400 font-medium text-white' : 'text-gray-900',
                  'group flex rounded-md font-medium items-center w-full px-2 py-2 text-sm',
                ]"
              >
                About
              </button></router-link>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              	<router-link to="/projects">
					<button :class="[
						active ? 'bg-sky-400 font-medium' : 'text-gray-900', 
						'group flex rounded-md font-medium items-center w-full px-2 py-2 text-sm']">
						Projects
					</button>
              	</router-link>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
</div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

export default {
    name: "Header",
    components: {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
    }
}
</script>