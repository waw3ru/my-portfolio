<template>
  <div id="sidebar__container">
    <div class="sidebar__bg">
      <div div class="sidebar__partial-borders">
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
          <img src="/waw3ru.jpg" alt="John Waweru profile picture" />
        </div>
        <div class="sidebar__content-profile-name">
          <h2>John .W. Wambugu</h2>
        </div>
        <div class="sidebar__content-profile-social">
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-github"></i></a>
          <a href="#"><i class="fa fa-gitlab"></i></a>
          <a href="#"><i class="fa fa-google"></i></a>
          <a href="#"><i class="fa fa-outlook"></i></a>
        </div>
      </div>
      <div class="sidebar__content-menu">
        <ul class="menu">
          <li class="menu-item"><a href="#">HOME</a></li>
          <li class="menu-item"><a href="#">MY RESUME</a></li>
          <li class="menu-item"><a href="#">MY SERVICES</a></li>
          <li class="menu-item"><a href="#">MY BLOG</a></li>
          <li class="menu-item"><a href="#">CONTACT ME</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#sidebar__container {
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 600ms;
  background-color: #fff;

  &::after {
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0.8;
    position: absolute;
    background-size: 11px;
    background-repeat: repeat;
    background-position-x: center;
    background-position-y: center;
    background-image: url("/dot.png");
  }
}
</style>
