<template>
  <a-layout>
    <the-header />
    <main
      mx-12 my-8 rounded px-24 py-4
    >
      <!-- TODO: breadcrumb -->
      <!-- <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb> -->
      <RouterView />
    </main>
    <the-footer />
  </a-layout>
</template>
