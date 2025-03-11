<template>
  <div>
    <table class="contacts-table">
      <thead>
        <tr>
          <th colspan="2">Ветеринарная клиника "ZooCure"</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Адрес:</td>
          <td>ул. Лесная, 23, г. Москва, 127018</td>
        </tr>
        <tr>
          <td rowspan="3">Телефоны:</td>
          <td>Регистратура: +7 (495) 123-45-67</td>
        </tr>
        <tr>
          <td>Экстренная помощь: +7 (495) 123-45-68</td>
        </tr>
        <tr>
          <td>WhatsApp: +7 (916) 987-65-43</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>info@zoocure.ru</td>
        </tr>
        <tr>
          <td rowspan="2">Режим работы:</td>
          <td>Пн-Пт: 9:00 - 21:00</td>
        </tr>
        <tr>
          <td>Сб-Вс: 10:00 - 18:00</td>
        </tr>
        <tr>
          <td>Круглосуточный стационар:</td>
          <td>+7 (495) 123-45-69</td>
        </tr>
        <tr>
          <td rowspan="2">Социальные сети:</td>
          <td>VK: vk.com/zoocure</td>
        </tr>
        <tr>
          <td>Telegram: t.me/zoocure</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.contacts-table {
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.contacts-table thead {
  background-color: var(--color-background-soft);
  color: var(--color-text-white);
}

.contacts-table th {
  padding: 1.2rem;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.5px;
}

.contacts-table td {
  padding: 0.8rem 1.2rem;
  border-bottom: 1px solid var(--color-border);
}

.contacts-table tbody tr:last-child td {
  border-bottom: none;
}

.contacts-table td:first-child {
  width: 35%;
  background-color: var(--color-background-mute);
  font-weight: 500;
  color: var(--color-heading);
}

.contacts-table tbody tr:hover {
  background-color: var(--vt-c-white-soft);
}

@media (max-width: 768px) {
  .contacts-table {
    font-size: 14px;
  }

  .contacts-table th {
    font-size: 1.2rem;
    padding: 1rem;
  }

  .contacts-table td {
    padding: 0.6rem 0.8rem;
  }

  .contacts-table td:first-child {
    width: 40%;
  }
}
</style>
