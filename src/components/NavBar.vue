<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <router-link class="nav-link" @click.native="$router.go()" to="/"
      >Home</router-link
    >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- Needed to add a @click.native="$router.go()" so the reveal.js page loads. Otherwise it stays blank. -->
        <!-- <router-link class="nav-link" @click.native="$router.go()" to="/gallery"
          >Gallery</router-link
        > -->
        <router-link class="nav-link" to="/?print-pdf" target="_blank"
          >Export
          <b-icon-arrow-up-right></b-icon-arrow-up-right>
        </router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Search</b-button
          >
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: "NavBar"
};
</script>
