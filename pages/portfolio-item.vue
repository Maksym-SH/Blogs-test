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
        <div id="primary" class="content-area column two-thirds single-portfolio">
          <main id="main" class="site-main">
            <article class="portfolio hentry">
              <header class="entry-header">
                <div class="entry-thumbnail"></div>
                <h1 class="entry-title">Sunset Beach</h1>
                <NuxtLink class="portfoliotype" to="/portfolio-category">summer</NuxtLink>
                <NuxtLink class="portfoliotype" to="/portfolio-category">woman</NuxtLink>
                <NuxtLink class="portfoliotype" to="/portfolio-category">yellow</NuxtLink>
              </header>
              <div class="entry-content">
                <p>Beautiful young woman in a green dress with curly long hair.</p>
                <p>
                  There was no possibility of taking a walk that day. We had been wandering,
                  indeed, in the leafless shrubbery an hour in the morning.
                </p>
                <blockquote>
                  <p>
                    I was glad of it: I never liked long walks, especially on chilly
                    afternoons: dreadful to me was the coming home in the raw twilight, with
                    nipped fingers and toes, and a heart saddened by the chidings of Bessie,
                    the nurse, and humbled by the consciousness of my physical inferiority
                    to Eliza, John, and Georgiana Reed.
                  </p>
                </blockquote>
                <p>
                  The said Eliza, John, and Georgiana were now clustered round their mama in
                  the drawing-room: she lay reclined on a sofa by the fireside, and with her
                  darlings about her (for the time neither quarrelling nor crying) looked
                  perfectly happy.
                </p>
              </div>
            </article>

            <nav class="navigation post-navigation" role="navigation">
              <h1 class="screen-reader-text">Post navigation</h1>
              <div class="nav-links">
                <div class="nav-previous">
                  <NuxtLink to="#" rel="prev">
                    <span class="meta-nav">←</span> Eliza and John</NuxtLink
                  >
                </div>
                <div class="nav-next">
                  <NuxtLink to="#" rel="next"
                    >Sunset Beach <span class="meta-nav">→</span></NuxtLink
                  >
                </div>
              </div>
            </nav>
            <!-- .navigation -->
          </main>
          <!-- #main -->
        </div>
        <!-- #primary -->

        <div id="secondary" class="column third">
          <div class="widget-area">
            <aside class="widget">
              <h4 class="widget-title">Request similar project</h4>
              <form class="wpcf7" method="post" action="contact.php" id="contactform">
                <div class="form">
                  <p><input type="text" name="name" placeholder="Name *" /></p>
                  <p><input type="text" name="email" placeholder="E-mail Address *" /></p>
                  <p>
                    <textarea name="comment" rows="3" placeholder="Message *"></textarea>
                  </p>
                  <input type="submit" id="submit" class="clearfix btn" value="Send" />
                </div>
              </form>
              <div class="done">Your message has been sent. Thank you!</div>
            </aside>
          </div>
        </div>
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

<script lang="ts" setup>
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
