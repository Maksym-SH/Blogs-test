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
      <div class="blogs">
        <div
          v-for="blog in filteredBlogs"
          :key="blog.id"
          class="blogs__item"
          :data-preview="blog.preview"
          title="Перейти к подробностям"
          @click="goToBlog(blog.id)"
        >
          <img
            v-show="blog.imageLoaded"
            @load="blog.imageLoaded = true"
            :src="blog.image"
            :alt="blog.title"
          />
          <h3 class="blogs__item-title">{{ blog.title }}</h3>
          <p>{{ blog.description }}</p>
        </div>
      </div>
    </div>
    <Paginate
      v-if="blogs"
      v-model="currentPage"
      :page-range="3"
      page-class="page-active"
      :page-count="pageCount"
      :click-handler="changePage"
    />
    <!-- .container -->
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
    <NuxtLink to="#top" class="smoothup" title="Back to top"
      ><span class="genericon genericon-collapse"></span
    ></NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import Paginate from "vuejs-paginate-next";
import { IBlogItem, Lenght } from "~/types";

useHead({
  bodyAttrs: {
    class: "blog",
  },
  title: "Moschino | Minimalist Free HTML Portfolio by WowThemes.net",
});

const url = useRuntimeConfig().public.baseUrl;

const { data: blogs } = await useLazyFetch<IBlogItem[]>(url + "/posts/", {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});
// Set images status.
blogs.value?.forEach((item) => (item.imageLoaded = false));

const goToBlog = (id: string) => {
  useRouter().push(`/blog/${id}`);
};

const currentPage = ref(1);

const sliceRange = ref([0, Lenght.BLOGS_IN_PAGE]);
const filteredBlogs = computed(() => {
  if (blogs.value) {
    return blogs.value.slice(...sliceRange.value);
  }

  return [];
});

const pageCount = computed(() => {
  if (blogs.value?.length) {
    return Math.ceil(blogs.value.length / Lenght.BLOGS_IN_PAGE);
  }

  return 1;
});

const changePage = (page: number): void => {
  const firstRange = page * Lenght.BLOGS_IN_PAGE - Lenght.BLOGS_IN_PAGE;
  const secondRange = firstRange + Lenght.BLOGS_IN_PAGE;

  sliceRange.value = [firstRange, secondRange];
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Oswald:400,500,700%7CRoboto:400,500,700%7CHerr+Von+Muellerhoff:400,500,700%7CQuattrocento+Sans:400,500,700";
@import "~/assets/css/woocommerce-layout.css";
@import "~/assets/css/woocommerce-smallscreen.css";
@import "~/assets/css/woocommerce.css";
@import "~/assets/css/font-awesome.min.css";
@import "~/assets/css/style.css";
@import "~/assets/css/easy-responsive-shortcodes.css";

#page {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.blogs {
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 10px;
  margin-bottom: 20px;
  align-items: stretch;
}
.blogs .blogs__item {
  border-radius: 10px;
  transition: all 0.1s ease-in-out;
  padding: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  background-color: bisque;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.blogs .blogs__item:hover {
  transform: scale(1.02);
  transition: all 0.1s;
  z-index: 2;
}
.blogs .blogs__item:hover::before {
  position: absolute;
  top: 0;
  content: attr(data-preview);
  left: 0;
  color: rgb(68, 68, 68);
  font-size: 2rem;
  text-align: center;
  display: flex;
  padding: 10px;
  align-items: center;
  width: 100%;
  height: 100%;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: inherit;
  backdrop-filter: blur(7px);
}

.blogs .blogs__item .blogs__item-title {
  text-align: center;
  font-size: 20px;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.blogs .blogs__item img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
}

@media only screen and (max-width: 1024px) {
  .blogs {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 768px) {
  .blogs {
    grid-template-columns: 1fr;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  cursor: pointer;
}

.pagination :deep(.page-active.active) {
  transform: scale(1.2);
}
.pagination :deep(.page-active.active) .page-link {
  background-color: green;
  color: #fff;
  border-radius: 4px;
}
</style>
