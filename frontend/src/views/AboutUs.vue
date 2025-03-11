<template>
  <div class="about-container">
    <div class="about-section">
      <h1 class="section-title">О нашей ветеринарной клинике</h1>
      <div class="content-wrapper">
        <div class="decorative-line"></div>
        <p class="section-content">
          В клинике "ZooCure" мы верим, что каждое животное заслуживает высококачественной
          медицинской помощи и заботливого отношения. Основанная в 2015 году группой
          ветеринаров-энтузиастов, наша клиника стала надежным партнером для тысяч владельцев
          домашних животных.
        </p>
      </div>
    </div>

    <div class="about-section">
      <h1 class="section-title">Наша миссия</h1>
      <div class="content-wrapper">
        <div class="decorative-line"></div>
        <p class="section-content">
          Обеспечивать исключительный уровень ветеринарной помощи, сочетая профессионализм,
          современные технологии и искреннюю любовь к животным. Мы стремимся не только лечить, но и
          предотвращать заболевания, помогая вашим питомцам жить долгой и счастливой жизнью.
        </p>
      </div>
    </div>

    <div class="about-section">
      <h1 class="section-title">Наша команда</h1>
      <div class="content-wrapper">
        <div class="decorative-line"></div>
        <p class="section-content">
          В "ZooCure" работают дипломированные ветеринарные врачи с многолетним опытом работы. Наши
          специалисты регулярно проходят дополнительное обучение и повышают квалификацию, чтобы
          применять самые современные методы диагностики и лечения.
        </p>
      </div>
    </div>

    <div class="about-section">
      <h1 class="section-title">Наш подход</h1>
      <div class="content-wrapper">
        <div class="decorative-line"></div>
        <p class="section-content">
          Мы знаем, что каждое животное уникально, поэтому разрабатываем индивидуальный подход к
          каждому пациенту. В "ZooCure" мы относимся к вашим питомцам как к членам нашей собственной
          семьи, обеспечивая им максимальный комфорт и минимизируя стресс во время визита.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.about-section {
  margin-bottom: 3.5rem;
  background-color: var(--color-background-mute);
  position: relative;
  padding: 1rem;
  border-radius: 12px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.about-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 2rem;
  color: var(--color-heading);
  margin-bottom: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--color-background-soft);
}

.content-wrapper {
  display: flex;
  align-items: flex-start;
}

.decorative-line {
  flex-shrink: 0;
  width: 4px;
  height: 100%;
  min-height: 80px;
  margin-right: 1.5rem;
  background-color: var(--color-background-soft);
  border-radius: 4px;
}

.section-content {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text);
  text-align: justify;
  padding-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .about-section {
    margin-bottom: 2.5rem;
  }

  .section-title {
    font-size: 1.7rem;
  }

  .decorative-line {
    margin-right: 1rem;
  }

  .section-content {
    font-size: 1rem;
    line-height: 1.7;
  }
}
</style>
