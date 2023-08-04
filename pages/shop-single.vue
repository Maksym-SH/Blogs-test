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
                  <li><NuxtLink to="/portfolio-category">Portfolio Category</NuxtLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <!-- #masthead -->
      <div id="content" class="site-content">
        <div id="primary" class="content-area column full">
          <main id="main" class="site-main" role="main">
            <div id="container">
              <div id="content" role="main">
                <nav class="woocommerce-breadcrumb" itemprop="breadcrumb">
                  <NuxtLink to="#">Home</NuxtLink> / <NuxtLink to="#">Clothing</NuxtLink> /
                  Beige Jacket
                </nav>
                <div itemscope itemtype="http://schema.org/Product" class="product">
                  <div class="summary entry-summary">
                    <h1 itemprop="name" class="product_title entry-title">Beige Jacket</h1>
                    <div
                      class="woocommerce-product-rating"
                      itemprop="aggregateRating"
                      itemscope
                      itemtype="http://schema.org/AggregateRating"
                    >
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <NuxtLink to="#reviews" class="woocommerce-review-link" rel="nofollow"
                        >(<span itemprop="reviewCount" class="count">2</span> customer
                        reviews)</NuxtLink
                      >
                    </div>
                    <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                      <p class="price">
                        <span class="amount">$35.00</span>
                      </p>
                      <meta itemprop="price" content="35" />
                      <meta itemprop="priceCurrency" content="USD" />
                      <link itemprop="availability" to="http://schema.org/InStock" />
                    </div>
                    <div itemprop="description">
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
                        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
                        egestas semper. Aenean ultricies mi vitae est. Mauris placerat
                        eleifend leo.
                      </p>
                    </div>
                    <form class="cart" method="post" enctype="multipart/form-data">
                      <div class="quantity">
                        <input
                          type="number"
                          step="1"
                          min="1"
                          max=""
                          name="quantity"
                          value="1"
                          title="Qty"
                          class="input-text qty text"
                          size="4"
                        />
                      </div>
                      <button type="submit" class="single_add_to_cart_button button alt">
                        Add to cart
                      </button>
                    </form>
                    <div class="product_meta">
                      <span class="posted_in"
                        >Categories: <NuxtLink to="#" rel="tag">Clothing</NuxtLink>,
                        <NuxtLink to="#" rel="tag">Hoodies</NuxtLink>
                      </span>
                    </div>
                  </div>
                  <!-- .summary -->
                  <div class="woocommerce-tabs wc-tabs-wrapper">
                    <div class="panel entry-content wc-tab" id="tab-description">
                      <h2>Product Description</h2>
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
                        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
                        egestas semper. Aenean ultricies mi vitae est. Mauris placerat
                        eleifend leo.
                      </p>
                    </div>
                    <div class="panel entry-content wc-tab" id="tab-reviews">
                      <div id="reviews">
                        <div id="comments">
                          <h2>2 Reviews for Beige Jacket</h2>
                          <ol class="commentlist">
                            <li
                              itemprop="review"
                              itemscope
                              itemtype="http://schema.org/Review"
                              class="comment"
                            >
                              <div id="comment-3" class="comment_container">
                                <div class="comment-text">
                                  <p class="meta">
                                    <strong itemprop="author">Steve</strong> &ndash;
                                    <time
                                      itemprop="datePublished"
                                      datetime="2013-06-07T15:54:25+00:00"
                                      >June 7, 2013</time
                                    >:
                                  </p>
                                  <div itemprop="description" class="description">
                                    <p>I like the logo but not the color.</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <!-- #comment-## -->
                            <li
                              itemprop="review"
                              itemscope
                              itemtype="http://schema.org/Review"
                              class="comment"
                            >
                              <div id="comment-4" class="comment_container">
                                <div class="comment-text">
                                  <p class="meta">
                                    <strong itemprop="author">Maria</strong> &ndash;
                                    <time
                                      itemprop="datePublished"
                                      datetime="2013-06-07T15:54:25+00:00"
                                      >June 7, 2013</time
                                    >:
                                  </p>
                                  <div itemprop="description" class="description">
                                    <p>Three letters, one word: WOO!</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <!-- #comment-## -->
                          </ol>
                        </div>
                        <div id="review_form_wrapper">
                          <div id="review_form">
                            <div id="respond" class="comment-respond">
                              <h3
                                style="margin-bottom: 10px"
                                id="reply-title"
                                class="comment-reply-title"
                              >
                                Add a review
                                <small
                                  ><NuxtLink
                                    rel="nofollow"
                                    id="cancel-comment-reply-link"
                                    to="/demo-moschino/product/woo-logo-2/#respond"
                                    style="display: none"
                                    >Cancel reply</NuxtLink
                                  ></small
                                >
                              </h3>
                              <form
                                action="#"
                                method="post"
                                id="commentform"
                                class="comment-form"
                                novalidate
                              >
                                <p class="comment-form-rating">
                                  <label for="rating">Your Rating</label>
                                  <select name="rating" id="rating">
                                    <option value="">Rate&hellip;</option>
                                    <option value="5">Perfect</option>
                                    <option value="4">Good</option>
                                    <option value="3">Average</option>
                                    <option value="2">Not that bad</option>
                                    <option value="1">Very Poor</option>
                                  </select>
                                </p>
                                <p class="comment-form-comment">
                                  <label for="comment">Your Review</label
                                  ><textarea
                                    id="comment"
                                    name="comment"
                                    cols="45"
                                    rows="8"
                                    aria-required="true"
                                  ></textarea>
                                </p>
                                <p class="comment-form-author">
                                  <label for="author"
                                    >Name <span class="required">*</span></label
                                  ><input
                                    id="author"
                                    name="author"
                                    type="text"
                                    value=""
                                    size="30"
                                    aria-required="true"
                                  />
                                </p>
                                <p class="comment-form-email">
                                  <label for="email"
                                    >Email <span class="required">*</span></label
                                  ><input
                                    id="email"
                                    name="email"
                                    type="text"
                                    value=""
                                    size="30"
                                    aria-required="true"
                                  />
                                </p>
                                <p class="form-submit">
                                  <input
                                    name="submit"
                                    type="submit"
                                    id="submit"
                                    class="submit"
                                    value="Submit"
                                  /><input
                                    type="hidden"
                                    name="comment_post_ID"
                                    value="60"
                                    id="comment_post_ID"
                                  />
                                </p>
                              </form>
                            </div>
                            <!-- #respond -->
                          </div>
                        </div>
                        <div class="clear"></div>
                      </div>
                    </div>
                  </div>
                  <div class="related products">
                    <h2>Related Products</h2>
                    <ul class="products">
                      <li class="first product">
                        <NuxtLink to="/shop-single">
                          <span class="onsale">Sale!</span>
                          <h3>Beige Fedora</h3>
                          <span class="price"
                            ><del><span class="amount">$35.00</span></del
                            ><ins><span class="amount">&#36;14.00</span></ins></span
                          >
                        </NuxtLink>
                        <NuxtLink to="#" class="button">Add to cart</NuxtLink>
                      </li>

                      <li class="product">
                        <NuxtLink to="/shop-single">
                          <h3>Male Jeans</h3>
                          <span class="price"><span class="amount">$35.00</span></span>
                        </NuxtLink>
                        <NuxtLink to="#" class="button">Add to cart</NuxtLink>
                      </li>

                      <li class="product">
                        <NuxtLink to="/shop-single">
                          <h3>Slim Jeans</h3>
                          <span class="price"><span class="amount">$20.00</span></span>
                        </NuxtLink>
                        <NuxtLink to="#" class="button">Add to cart</NuxtLink>
                      </li>

                      <li class="product last">
                        <NuxtLink to="/shop-single">
                          <h3>Summer Blouse</h3>
                          <span class="price"><span class="amount">$35.00</span></span>
                        </NuxtLink>
                        <NuxtLink to="#" class="button">Add to cart</NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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

<script lang="ts" setup>
useHead({
  title: "Moschino | Minimalist Free HTML Portfolio by WowThemes.net",
  bodyAttrs: {
    class: "single single-product woocommerce woocommerce-page",
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
