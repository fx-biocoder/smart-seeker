<template>
    <div class="footer">
        <div class="nav2">
            <ul>
                <li><a href="#homepage">HOME</a></li>
                <li><a href="#section-1">LOAD FILES</a></li>
                <li><a href="#section-2">ABOUT THE APP</a></li>
                <li><a href="#section-3">THE TEAM</a></li>
                <li><a href="#section-4">CONTACT</a></li>
            </ul>
        </div>

        
        

        <div class="container">
            <div class="root">
                <h2>Contact Us</h2> <br>
                <p>
                    <input type="text" placeholder="Your Name" v-model="state.password.password" />
                    <span v-if="v$.password.password.$error"> {{ v$.password.password.$errors[0].$message }} </span>
                </p>
                <p>
                    <input type="text" placeholder="Last Name" v-model="state.password.confirm" />
                    <span v-if="v$.password.password.$error"> {{ v$.password.password.$errors[0].$message }} </span>
                </p>

                <p>
                    <input type="text" placeholder="Email" v-model="state.email" />
                    <span v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }} </span>
                </p>               
               
                <p>
                    <textarea name="mensaje" id="mensaje" rows="6" placeholder="Your message..."></textarea>
                </p>
                <button @click="submitForm">Submit</button>
            </div>

            <div class="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.0513020869403!2d55.46609209745649!3d-4.635146269566025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x22e029b96bf08b7d%3A0x467b15d393ad87c4!2sISPC%20Seychelles!5e0!3m2!1ses-419!2sar!4v1667010430763!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>

</template>

<script>
import useValidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { reactive, computed } from 'vue'
export default {
    setup() {
        const state = reactive({
            email: '',
            password: {
                password: '',
                confirm: '',
            },
        })
        const rules = computed(() => {
            return {
                email: { required, email },
                password: {
                    password: { required, minLength: minLength(3) },
                    confirm: { required, minLength: minLength(3) },
                },
            }
        })
        const v$ = useValidate(rules, state)
        return {
            state,
            v$
        }
    },
    methods: {
        submitForm() {
            this.v$.$validate() // checks all inputs
            if (!this.v$.$error) {
                // if ANY fail validation
                alert('Thank you! We will contact you soon.')
            } else {
                alert('Form failed validation')
            }
        },
    },
}
</script>

<style>
.footer {
    background-color: #1C658C;
    margin: 2%;
    padding: 5%;
    display: flex;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgb(201, 200, 200);
    justify-content: space-around;
}

.footer .mapa {
    display: flex;
    justify-content: center;
}
.nav2 {
    display: flex;
    justify-content: space-around;
    width: 50%;
    align-items: center;
}
ul {
    list-style: none;
}
a {
    font-size: 0.8rem;
    line-height: 2;
    color: white;
    text-decoration: none;
}
input {
    border: none;
    border-radius: 5px;
    outline: none;
    border-bottom: 1px solid #ddd;
    font-size: 1em;
    padding: 5px 0;
    margin: 10px 0 5px 0;
    width: 100%;
    padding: 12px;
}
/* Botón de Send*/
button {
    background-color: white;
    padding: 10px 25px;
    margin-top: 10px;
    font-weight: 600;
    color: #1C658C;
    border-radius: 100px;
    border: 0;
    cursor: pointer;
    outline: none;
}
/* Cuando el mouse pasa sobre el botón Send */
button:hover {
    background-color: #D8D2CB;
    color: #1C658C;
}
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 6px;
    margin-bottom: 16px;
    font-size: 1em;
} 
/* Padding y color detrás de esta sección (footer) */
.container {
    border-radius: 5px;
    background-color: #1C658C;
    padding: 10%;
    width: 100%;
    color: rgb(255, 255, 255);
}


@media all and (max-width: 950px) {
    .footer .nav2 {
        display: none;
    }
}


</style>

