<template>
  <section class="bg-gradient-to-b from-gray-900 from-0% to-[#1F293E] to-100%">
    <div class="container box-border mx-auto max-w-[1480px] md:py-[80px] py-[20px] md:px-[60px] px-[16px]">
      <div class="mb-[25px]">
        <h3 class="mb-[5px] text-[35px]">Форма обратной связи</h3>
        <p class="md:text-[20px] text-[18px] font-['Arboria-Book']">Если у вас есть предложения или остались вопросы напишите нам заполнив форму обратной связи.</p>
      </div>
      <form v-on:submit.prevent="submit">
        <div class="flex flex-col text-gray-900 text-[20px] [&>*:not(:last-child)]:mb-[20px] lg:[&>input]:w-1/2 [&>input]:h-[40px] [&>*]:p-[10px] [&>*]:rounded-md [&>*]:bg-slate-300 [&>*]:placeholder:text-gray-600">
          <input type="text" name="username" placeholder="ФИО" required v-model.trim="form.username">
          <input type="number" name="phone" placeholder="Телефон" required v-model.trim="form.phone">
          <input type="email" name="email" placeholder="Почта" required v-model.trim="form.email">
          <textarea name="description" id="" cols="30" rows="6" v-model.trim="form.description" placeholder="Опишите Ваш вопрос или предложение" required class="block w-full sm:leading-6"></textarea>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="submit" class="rounded-md bg-gradient-to-r from-[#6366F1] to-[#AC54F1] px-5 py-3 font-semibold shadow-sm hover:from-[#d44208] hover:to-[#d4b208] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Отправить
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'sendFeedback',
  data() {
    return {
      form: {
        username: '',
        phone: '',
        email: '',
        description: '',
      },
    }
  },
  methods: {
    submit() {
      axios.post('https://example.com/feedback', this.form)
      .then(({data}) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },
}
</script>
