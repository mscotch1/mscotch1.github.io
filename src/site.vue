<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-primary"
      style="position: sticky; top: 0; z-index: 999">
      <a class="navbar-brand" href="#"><img src="assets/hedgehog.svg"></a>
      <button class="navbar-toggler float-right" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tooltip" data-title="Currently under construction">Resume</a>
          </li>
          <li class="nav-item" data-toggle="tooltip" data-title="Currently under construction">
            <a class="nav-link">Blog</a>
          </li>
          <!--<li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Projects
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Fractal Viewer</a>
              <a class="dropdown-item" href="#">Reversi AI</a>
            </div>
          </li>-->
        </ul>
      </div>
    </nav>

    <div id="page-content" class="d-flex flex-column">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Michael Scott</h1>
          <p class="lead">
            I am a software developer at <a target="_blank" href="https://smartuq.com/">SmartUQ</a>, an analytics software
            company based in Madison, Wisconsin.
            For fun, I enjoy stand-up paddleboarding. And making this website, I suppose.
          </p>
          <button class="btn btn-lg btn-primary" data-toggle="tooltip" data-title="Currently under construction">Full bio</button>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <h2>Goals</h2>
            <p>Personal website "mission statements" often get bogged down by lofty, aspirational proclamations.
               I try to be as authentic as I can. I'm just a normal person having fun with some hobby projects.
            </p>
          </div>
        </div>
        <h2>Skills</h2>
        <ul class="list-unstyled d-flex w-100">
          <img src="assets/cpp_logo.svg" class="mr-3 flex-grow-1 flex-shrink-1" alt="C++ Logo" style="min-width: 50px; width: 1px; max-height: 20vh"></img>
          <img src="assets/HTML5_Logo.svg" class="flex-grow-1 flex-shrink-1"
            style="min-width: 50px; width: 1px; max-height: 20vh" alt="HTML5 Logo"></img>
          <img src="assets/CSS3_logo_and_wordmark.svg" class="flex-grow-1 flex-shrink-1"
            style="min-width: 50px; width: 1px; max-height: 20vh" alt="HTML5 Logo"></img>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  // build main Vue component
  export default {
    data() {
      return {
      };
    }
  };

</script>

