<template>
  <div id="page">
    <div class="container">
      <header id="masthead" class="site-header">
        <div class="site-branding">
          <h1 class="site-title"><NuxtLink to="/" rel="home">Moschino</NuxtLink></h1>
          <h2 class="site-description">Minimalist Portfolio HTML Template</h2>
        </div>
        <nav id="site-navigation" class="main-navigation">
          <button class="menu-toggle">Menu</button>
          <NuxtLink class="skip-link screen-reader-text" to="#content"
            >Skip to content</NuxtLink
          >
          <div class="menu-menu-1-container">
            <ul id="menu-menu-1" class="menu">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/shop">Shop</NuxtLink></li>
              <li><NuxtLink to="/blog">Blog</NuxtLink></li>
              <li><NuxtLink to="/elements">Elements</NuxtLink></li>
              <li>
                <span>Pages</span>
                <ul class="sub-menu">
                  <li><NuxtLink to="/portfolio-item">Portfolio Item</NuxtLink></li>
                  <li><NuxtLink to="/shop-single">Shop Item</NuxtLink></li>
                  <li><NuxtLink to="/portfolio-category">Portfolio Category</NuxtLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
    <div class="blog-item" v-if="currentBlog">
      <img
        v-show="currentBlog.imageLoaded"
        @load="currentBlog.imageLoaded = true"
        :src="currentBlog.image"
        :alt="currentBlog.title"
      />
      <div class="blog-item__info">
        <h1>{{ currentBlog.title }}</h1>
        <p>{{ currentBlog.description }}</p>
        <time v-if="dateOfCreate">Дата публикации: {{ dateOfCreate }}</time>
      </div>
    </div>
    <NuxtLink class="go-back" to="/blog">Вернуться назад</NuxtLink>
    <footer id="colophon" class="site-footer">
      <div class="container">
        <div class="site-info">
          <h1
            style="
              font-family: 'Herr Von Muellerhoff';
              color: #ccc;
              font-weight: 300;
              text-align: center;
              margin-bottom: 0;
              margin-top: 0;
              line-height: 1.4;
              font-size: 46px;
            "
          >
            Moschino
          </h1>
          <NuxtLink target="blank" to="https://www.wowthemes.net/"
            >&copy; Moschino - Free HTML Template by WowThemes.net</NuxtLink
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { IBlogItem } from "types";
definePageMeta({
  validate({ params }) {
    const id = params.id as string;

    return /^\d+$/.test(id);
  },
});

const url = useRuntimeConfig().public.baseUrl;

const id = ref(useRoute().params.id);

const { data: currentBlog } = await useFetch<IBlogItem>(url + `/posts/${unref(id)}`, {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  watch: [id],
});

if (currentBlog.value) {
  currentBlog.value.imageLoaded = false;
}

const dateOfCreate = computed(() => {
  if (currentBlog.value?.createdAt) {
    return new Date(currentBlog.value.createdAt).toLocaleDateString();
  }

  return null;
});
</script>

<style scoped>
#page {
  background-color: #ffe4c4;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.blog-item {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.blog-item img {
  width: calc(50% - 20px);
  display: block;
  object-fit: cover;
}
.blog-item__info {
  width: 50%;
  margin: 0;
}
h1,
p {
  margin: 0;
}
.go-back {
  background-color: aquamarine;
  color: black;
  display: inline-block;
  width: fit-content;
  margin: 30px auto;
  font-size: 1.5rem;
  padding: 20px;
  border-radius: 10px;
}
</style>
