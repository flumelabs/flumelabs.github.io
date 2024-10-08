<template>
  <header class="flex items-center justify-between w-full">
    <NuxtLink to="/"
      ><h3 class="text-2xl font-bold">Flume Labs.</h3>
      <p class="text-sm text-muted-foreground font-medium">/fluːm læbz/</p></NuxtLink
    >
    <NavigationMenu class="text-background bg-foreground rounded-md p-2">
      <NavigationMenuList>
        <NavigationMenuItem v-for="link in links" :key="link.name">
          <NuxtLink :to="link.href" :class="navigationStyle(link.href)">
            <span class="relative inline-block link-text">{{ link.name }}</span>
          </NuxtLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const navigationStyle = (href: string) => {
  const baseStyle =
    "h-12 px-6 py-2 group inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-stone-800 focus:bg-stone-800 focus:outline-none";
  const activeStyle = "active-link";
  return `${baseStyle} ${route.path === href ? activeStyle : ""}`;
};

const links = [
  { name: "HOME", href: "/" },
  // { name: "ABOUT", href: "/about" },
  // { name: "BLOG", href: "/blog" },
];
</script>

<style scoped>
.link-text::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background-color: #fa8072;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-out;
}

.active-link .link-text::after {
  transform: scaleX(1);
}
</style>
