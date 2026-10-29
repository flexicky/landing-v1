<template>
  <AuthForm mode="login" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

useHead({ title: 'Вход — Точка' })
</script>
