<script setup>
import { reactive, ref } from "#imports";

const name = ref("John .W. Wambugu");

const profilePicUrl = ref("/waw3ru.jpg");

const sidebarItems = reactive([
  {
    id: "home",
    name: "HOME",
    url: "/",
  },
  {
    id: "resume",
    name: "MY RESUME",
    url: "/resume",
  },
  {
    id: "services",
    name: "MY SERVICES",
    url: "/services",
  },
  {
    id: "blog",
    name: "BLOGGING",
    url: "/blog",
  },
  {
    id: "contact",
    name: "CONTACT ME",
    url: "/concact-me",
  },
]);

const socialLink = reactive([
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/waw3ru/",
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: "twitter",
    url: "https://twitter.com/waw3ru",
  },
  {
    id: "github",
    name: "Github",
    icon: "github",
    url: "https://github.com/waw3ru",
  },
  {
    id: "gitlab",
    name: "Gitlab",
    icon: "gitlab",
    url: "https://gitlab.com/waw3ru",
  },
  {
    id: "wakatime",
    name: "Wakatime",
    icon: "fa fa-superpowers",
    url: "https://wakatime.com/@waw3ru",
  },
]);
</script>

<template>
  <div id="sidebar__container">
    <div class="sidebar__bg">
      <div div class="sidebar__partial">
        <span class="sidebar__partial-border-line"></span>
        <span class="sidebar__partial-border-line"></span>
        <span class="sidebar__partial-border-line"></span>
        <span class="sidebar__partial-border-line"></span>
      </div>
      <div class="sidebar__lines">
        <span class="sidebar__line"></span>
        <span class="sidebar__line"></span>
        <span class="sidebar__line"></span>
        <span class="sidebar__line-dot"></span>
        <span class="sidebar__line-dot"></span>
        <span class="sidebar__line-dot"></span>
      </div>
    </div>
    <div class="sidebar__content">
      <div class="sidebar__content-profile">
        <div class="sidebar__content-profile-pic">
          <img :src="profilePicUrl" :alt="name" />
        </div>
        <div class="sidebar__content-profile-name">
          <h2>{{ name }}</h2>
        </div>
        <div class="sidebar__content-profile-social">
          <a
            v-for="social in socialLink"
            :key="social?.id"
            :href="social?.url"
            :title="social?.name"
            target="__blank"
          >
            <i :class="`fa fa-${social?.icon}`"></i>
          </a>
        </div>
      </div>
      <div class="sidebar__content-menu">
        <ul class="menu">
          <li class="menu-item" v-for="item in sidebarItems" :key="item?.id">
            <NuxtLink :to="item?.url" :active-class="'active'">
              {{ item?.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/scss/sidebar";
</style>
