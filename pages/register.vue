<template>
  <AuthForm mode="register" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

useHead({ title: 'Регистрация — Monst Smm' })
</script>
