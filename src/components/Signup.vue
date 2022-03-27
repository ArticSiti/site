<template>
  <div class="contain">
    <form class="sgn-up">
      <div class="form-group-left">
        <div class="form-group">
          <label for="name">Введите ваше имя: </label>
          <input
            id="name"
            class="form-control"
            :class="{
              'form-control-error': v$.form.name.$error,
            }"
            v-model="form.name"
          />
          <p v-if="v$.form.name.$error">Заполните пожалуйста поле</p>
        </div>

        <div class="form-group">
          <label for="name">Введите вашу фамилию: </label>
          <input
            id="surname"
            class="form-control"
            :class="{
              'form-control-error': v$.form.surname.$error,
            }"
            v-model="form.surname"
          />
          <p v-if="v$.form.surname.$error">Заполните пожалуйста поле</p>
        </div>

        <div class="form-group">
          <label for="name">Введите ваше отчество: </label>
          <input
            id="patronymic"
            class="form-control"
            v-model="form.patronymic"
          />
        </div>

        <div class="form-group">
          <label for="name">Дата рождения: </label>
          <input
            type="date"
            id="date"
            class="form-control"
            :class="{
              'form-control-error': v$.form.dateChil.$error,
            }"
            v-model="form.dateChil"
          />
          <p v-if="v$.form.dateChil.$error">Заполните пожалуйста поле</p>
        </div>

        <div class="form-group">
          <label for="name">Номер телефона: </label>
          <input
            type="tel"
            id="tel"
            class="form-control"
            :class="{
              'form-control-error': v$.form.tel.$error,
            }"
            v-model="form.tel"
          />
          <p v-if="v$.form.tel.$error">Заполните пожалуйста поле</p>
        </div>

        <div class="flex">
          <div class="form-check">
            <label class="form-check-input" for="male">Муж</label>
            <input
              class="form-check-input"
              type="radio"
              value="male"
              name="exampleRadios"
              id="male"
              v-model="form.gendere"
            />
          </div>
          <div class="form-check">
            <label class="form-check-input" for="female">Жен</label>
            <input
              class="form-check-input"
              type="radio"
              value="female"
              name="exampleRadios"
              id="female"
              v-model="form.gendere"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="country">Группа клиентов: </label>
          <select
            id="country"
            class="country-group"
            :class="{ 'form-control-error': v$.form.info.$error }"
            v-model="form.info"
          >
            <option
              v-for="(country, index) in info"
              :value="country.value"
              :key="index"
            >
              {{ country.label }}
            </option>
          </select>
          <p v-if="v$.form.info.$error">Заполните пожалуйста поле</p>
        </div>

        <div class="form-group">
          <label for="doctors">Лечащий врач: </label>
          <select id="doctors" v-model="form.doctorNumber" multiple>
            <option
              v-for="(doctor, index) in form.doctors"
              :value="doctor.value"
              :key="index"
              class="type-option"
            >
              {{ doctor.label }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <div class="form-message">
            <label for="notication" class="form-check-label"
              >Не отправлять смс:
            </label>
            <input
              type="checkbox"
              id="notification"
              class="form-check-input"
              v-model="form.checkBox"
            />
          </div>
        </div>
      </div>
      <!-- form-group-left -->
      <div class="form-group-center">
        <div class="form-group">
          <label for="index">Индекс: </label>
          <input
            type="number"
            id="code"
            class="form-control"
            v-model="form.codeG"
          />
        </div>

        <div class="form-group">
          <label for="country">Страна: </label>
          <input
            type="text"
            id="country"
            class="form-control"
            v-model="form.countryName"
          />
        </div>
        <div class="form-group">
          <label for="region">Область: </label>
          <input
            type="text"
            id="region"
            class="form-control"
            v-model="form.regionName"
          />
        </div>

        <div class="form-group">
          <label for="city">Город: </label>
          <input
            type="text"
            id="city"
            class="form-control"
            v-model="form.cityTitle"
          />
        </div>

        <div class="form-group">
          <label for="outside">Улица: </label>
          <input
            type="outside"
            id="outside"
            class="form-control"
            v-model="form.outsideName"
          />
        </div>

        <div class="form-group">
          <label for="home">Дом: </label>
          <input
            type="number"
            id="home"
            class="form-control"
            v-model="form.homeNumber"
          />
        </div>
      </div>
      <!-- form-group-center -->
      <div class="form-group-right">
        <div class="form-group">
          <label for="typeDoc">Тип документа: </label>
          <select
            id="typeDoc"
            :class="{ 'form-control-error': v$.form.docsType.$error }"
            v-model="form.docsType"
          >
            <option
              v-for="(typeDoc, index) in docsType"
              :value="typeDoc.value"
              :key="index"
              class="type-option"
            >
              {{ typeDoc.label }}
            </option>
          </select>
          <p v-if="v$.form.info.$error">Заполните пожалуйста поле</p>
        </div>

        <div class="form-group">
          <label for="series">Серия: </label>
          <input
            type="number"
            id="series"
            class="form-control"
            v-model="form.seriesName"
          />
        </div>

        <div class="form-group">
          <label for="numberT">Номер: </label>
          <input
            type="number"
            id="numberT"
            class="form-control"
            v-model="form.numberName"
          />
        </div>

        <div class="form-group">
          <label for="exit">Кем выдан: </label>
          <input
            type="text"
            id="exit"
            class="form-control"
            v-model="form.exitEntity"
          />
        </div>

        <div class="form-group">
          <label for="dateExit">Дата выдачи: </label>
          <input
            type="date"
            id="dateExit"
            class="form-control"
            :class="{
              'form-control-error': v$.form.dateExitEntity.$error,
            }"
            v-model="form.dateExitEntity"
          />
          <p v-if="v$.form.dateExitEntity.$error">Заполните пожалуйста поле</p>
        </div>
      </div>
      <!-- form-group-right -->
    </form>
  </div>
  <div class="btn-contain">
    <button type="submit" class="btn btn-primary" @click="save">
      Сохранить
    </button>
  </div>
  <div class="success">
      <p>Форма успешно заполнена</p>
  </div>
</template>

<script>
// import signUp from 'node_modules'
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      info: [
        {
          label: "VIP",
          value: "VIP",
        },
        {
          label: "Проблемные",
          value: "Problem",
        },
        {
          label: "ОМС",
          value: "OMS",
        },
      ],
      docsType: [
        {
          label: "Паспорт",
          value: "Pasport",
        },
        {
          label: "Свидетельство о рождении",
          value: "Certificate",
        },
        {
          label: "Вод.удостоверение",
          value: "driver",
        },
      ],
      form: {
        name: "",
        surname: "",
        patronymic: "",
        dateChil: "",
        checkBox: "false",
        tel: "+7",
        gendere: "male",
        doctorNumber: "Ivan",
        infoBtn: "VIP",
        info: "",
        doctors: [
          {
            label: "Иванов",
            value: "Ivan",
          },

          {
            label: "Захаров",
            value: "Zaxar",
          },
          {
            label: "Чернышева",
            value: "Cher",
          },
        ],
        codeG: "",
        cityTitle: "",
        countyName: "",
        regionName: "",
        outsideName: "",
        homeNumber: "",
        docsType: "",
        docsButton: "Pasport",
        seriesName: "",
        numberName: "",
        exitEntity: "",
        dateExitEntity: "",
      },
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        surname: { required },
        dateChil: { required },
        tel: {
          required,
          phone: (value) => value.length >= 12,
        },
        info: { required },
        docsType: { required },
        dateExitEntity: { required },
      },
    };
  },
  methods: {
    async save() {
      const isFormCorrect = await this.v$.$validate();

      if (!isFormCorrect) return;
      document.querySelector('.success').classList.toggle('success-open')
    },
  },
};
</script>

<style>
.contain {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 40px 40px 40px;
}
.sgn-up {
  display: flex;
  justify-content: space-between;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group-center {
  margin: 0px 100px 0px 100px;
}
.form-group label {
  margin-top: 20px;
  font-size: 18px;
}
.form-group input {
  width: 300px;
  margin-top: 10px;
  height: 40px;
  border: 1px solid #53FF4D;
  border-radius: 5px;
  outline: none;
  transition: 0.3s;
  font-size: 16px;
}
.form-group p {
  color: red;
}
.form-group .form-control-error {
  border-color: red !important;
}

.form-group input:hover {
  transform: perspective(400px) 
  translateZ(10px);
}
.form-message input {
  width: 20px;
  margin-top: 5px;
  height: 20px;
}
.form-group .country-group {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #53FF4D;
  border-radius: 5px;
}
.form-group .country-group:focus {
  outline: #53FF4D;
}
.form-group #doctors {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #53FF4D;
  border-radius: 5px;
}
.form-group #doctors:focus {
  outline: #53FF4D;
}
.form-group #doctors option {
  margin: 5px;
}
.form-group #typeDoc {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #53FF4D;
  border-radius: 5px;
}
.btn-contain {
  display: flex;
  justify-content: center;
}
.btn-contain button {
  position: relative;
  background: none;
  padding: 10px 30px 10px 30px;
  border: 1px solid #53FF4D;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
}
.btn-contain button:hover {
  background: #53FF4D;
  color: #fff;
}
.success{
display: none;
position: fixed;
top: 20px;
left: 40%;
padding: 20px 60px 20px 60px;
background: #53FF4D;
color: #fff;
font-size: 18px;
border-radius: 5px;
}
.success-open{
display: block;
}
</style>
