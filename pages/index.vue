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
                <NuxtLink to="#">Pages</NuxtLink>
                <ul class="sub-menu">
                  <li><NuxtLink to="/portfolio-item">Portfolio Item</NuxtLink></li>
                  <li><NuxtLink to="/shop-single">Shop Item</NuxtLink></li>
                  <li>
                    <NuxtLink to="/portfolio-category">Portfolio Category</NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <!-- #masthead -->
      <div id="content" class="site-content">
        <div id="primary" class="content-area column full">
          <main id="main" class="site-main">
            <div class="grid portfoliogrid">
              <article class="hentry">
                <header class="entry-header">
                  <div class="entry-thumbnail"></div>
                  <h2 class="entry-title">
                    <NuxtLink to="/portfolio-item" rel="bookmark">Sunset Beach</NuxtLink>
                  </h2>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">summer</NuxtLink>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">woman</NuxtLink>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">yellow</NuxtLink>
                </header>
              </article>

              <article class="hentry">
                <header class="entry-header">
                  <div class="entry-thumbnail"></div>
                  <h2 class="entry-title">
                    <NuxtLink to="/portfolio-item" rel="bookmark"
                      >Earl of Moreland</NuxtLink
                    >
                  </h2>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">hat</NuxtLink>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">woman</NuxtLink>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">yellow</NuxtLink>
                </header>
              </article>

              <article class="hentry">
                <header class="entry-header">
                  <div class="entry-thumbnail"></div>
                  <h2 class="entry-title">
                    <NuxtLink to="/portfolio-item" rel="bookmark">Eliza and John</NuxtLink>
                  </h2>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">summer</NuxtLink>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">woman</NuxtLink>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">yellow</NuxtLink>
                </header>
              </article>

              <article class="hentry">
                <header class="entry-header">
                  <div class="entry-thumbnail"></div>
                  <h2 class="entry-title">
                    <NuxtLink to="/portfolio-item" rel="bookmark">Hot Afternoon</NuxtLink>
                  </h2>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">pink</NuxtLink>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">woman</NuxtLink>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">yellow</NuxtLink>
                </header>
              </article>

              <article class="hentry">
                <header class="entry-header">
                  <div class="entry-thumbnail"></div>
                  <h2 class="entry-title">
                    <NuxtLink to="/portfolio-item" rel="bookmark">Long Walks</NuxtLink>
                  </h2>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">hat</NuxtLink>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">summer</NuxtLink>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">yellow</NuxtLink>
                </header>
              </article>

              <article class="hentry">
                <header class="entry-header">
                  <div class="entry-thumbnail"></div>
                  <h2 class="entry-title">
                    <NuxtLink to="/portfolio-item" rel="bookmark">Twilight</NuxtLink>
                  </h2>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">hat</NuxtLink>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">woman</NuxtLink>
                  <NuxtLink class="portfoliotype" to="/portfolio-category">summer</NuxtLink>
                </header>
              </article>
            </div>
            <!-- .grid -->
            <br />
          </main>
          <!-- #main -->
        </div>
        <!-- #primary -->
      </div>
      <!-- #content -->
    </div>
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

<script setup lang="ts">
useHead({
  title: "Moschino | Minimalist Free HTML Portfolio by WowThemes.net",
  bodyAttrs: {
    class:
      "home page page-template page-template-template-portfolio page-template-template-portfolio-php",
  },
});
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Oswald:400,500,700%7CRoboto:400,500,700%7CHerr+Von+Muellerhoff:400,500,700%7CQuattrocento+Sans:400,500,700";
@import "~/assets/css/woocommerce-layout.css";
@import "~/assets/css/woocommerce-smallscreen.css";
@import "~/assets/css/woocommerce.css";
@import "~/assets/css/font-awesome.min.css";
@import "~/assets/css/style.css";
@import "~/assets/css/easy-responsive-shortcodes.css";
</style>
