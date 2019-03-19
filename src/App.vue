<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style>
/*公共样式--开始*/
html,
body,
div,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p,
dl,
dt,
dd,
ol,
form,
input,
textarea,
th,
td,
select {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
}
body {
  font-family: "Microsoft YaHei";
  font-size: 14px;
  color: #333;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
ul,
ol {
  list-style: none;
}
img {
  border: none;
  vertical-align: middle;
}
a {
  text-decoration: none;
  color: #232323;
}
table {
  border-collapse: collapse;
  table-layout: fixed;
}
input,
textarea {
  outline: none;
  border: none;
}
textarea {
  resize: none;
  overflow: auto;
}
.clearfix:after {
  content: "";
  height: 0;
  visibility: hidden;
  display: block;
  clear: both;
}
.clearfix {
  zoom: 1;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.tl {
  text-align: left;
}
.tc {
  text-align: center;
}
.tr {
  text-align: right;
}
.ellipse {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.inline {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}

#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
