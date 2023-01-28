<template>
    <navBar />
    <div class="addEmployees">
        <div class="name">
            <label for="name">Enter your name :</label>
            <input type="text" name="name" id="name" required v-model="name">
        </div>
        <div class="surname">
            <label for="surname">Enter your surname :</label>
            <input type="text" name="surname" id="surname" required v-model="surname">
        </div>
        <div class="gender">
            <label for="gender">Enter your gender :</label>
            <input type="text" name="gender" id="gender" required v-model="gender">
        </div>
        <div class="age">
            <label for="age">Enter your age :</label>
            <input type="text" name="age" id="age" required v-model="age">
        </div>
        <div class="address">
            <label for="address">Enter your address :</label>
            <input type="text" name="address" id="address" required v-model="address">
        </div>
        <div class="phoneNumber">
            <label for="phone">Enter your phone number :</label>
            <input type="text" name="phone" id="phone" required v-model="phoneNumber">
        </div>
        <div class="email">
            <label for="email">Enter your email :</label>
            <input type="email" name="email" id="email" required v-model="email">
        </div>
        {{ email }}
        <div class="birthDate">
            <label for="birthDate">Enter your birth date :</label>
            <input type="date" name="birthDate" id="birthDate" required v-model="birthDate">
            {{ birthDate }}
        </div>
        <div class="birthPlace">
            <label for="birthPlace">Enter your birth place :</label>
            <input type="text" name="birthPlace" id="birthPlace" required v-model="birthPlace">
        </div>

        <div class="department">
            <p>Select Your departement</p>
            <select name="departement" v-model="department" v-on:input="getDepartementPostes()">
                <option v-for="item,id in allDepartements" >
                    {{ item.id }} {{ item.name }}
                </option>
            </select>
        </div>
        <div class="post">
            <p>Select Your Jobs ( select departement first )</p>
            <select name="postes" v-model="poste">
                <option v-for="post in associatedDepartementPostes">
                    {{ post.id }} {{ post.name }}
                </option>
            </select>
        </div>
        <div class="firstDay">
            <label for="firstDay">Enter your first day of work in this company :</label>
            <input type="date" name="firstDay" id="firstDay" required v-model="firstDay">
        </div>
        <div class="seniority">
            <label for="seniority">Enter your seniority in this company :</label>
            <input type="text" name="seniority" id="seniority" required v-model="seniority">
        </div>
        <div class="insurance">
            <label for="insurance">Do you benefit of the the company insurance ?</label>
            <p><input type="radio" v-model="insurance" v-bind:value="true">Yes</p>
            <p><input type="radio" v-model="insurance" v-bind:value="false">No</p>
        </div>
        <div class="socialSecurity">
            <label for="socialSecurity">Fill in your social security number :</label>
            <input type="text" name="socialSecurity" id="socialSecurity" required v-model="socialSecurity">
            {{ socialSecurity }}
        </div>

        <div class="addEmployee">
            <button id="btnSubmit" class="btn btn-primary" style="align:center" v-on:click="addEmployee()">Add Employee</button>
        </div>
        {{ alertMessage }}
    </div>  

</template>

<script>
import navBar from '@/components/navBar.vue'
import axios from 'axios'
export default{
    data(){
        return {
            name:"",
            surname:"",
            gender:"",
            age:"",
            email:"",
            address:"",
            phoneNumber:"",
            birthDate:"",
            birthPlace:"",
            department:"",
            poste:"",
            firstDay:"",
            seniority:"",
            insurance:true,
            socialSecurity:"",
            allDepartements: [],
            associatedDepartementPostes: [],
            alertMessage: "",
        }
    },
    components:{
        navBar,
    },
    methods: {
        async addEmployee(){
            if(!this.name ||!this.surname || !this.gender || !this.age || !this.address || !this.phoneNumber || !this.birthDate || !this.birthPlace || !this.department || !this.position || !this.firstDay || !this.seniority || !this.insurance || !this.socialSecurity){
            this.alertMessage = "Please enter informations into all texts fields"
            } else {
            this.alertMessage = ""
            const post = await axios.post("http://localhost/SQL_FINAL_BACK/addEmployee.php",
                JSON.stringify({
                    "name": this.name,
                    "surname": this.surname,
                    "gender": this.gender,
                    "email": this.email,
                    "age": this.age,
                    "address": this.address,
                    "phoneNumber": this.phoneNumber,
                    "birthDate": this.birthDate,
                    "birthPlace": this.birthPlace,
                    "department": this.department[0],
                    "position": this.position,
                    "firstDay": this.firstDay,
                    "seniority": this.seniority,
                    "insurance": this.insurance,
                    "socialSecurity": this.socialSecurity
                }))
            }
        },
        async getAllDepartement(){
            const res = await axios.get("http://localhost/SQL_FINAL_BACK/getAllDepartement.php")
            this.allDepartements = await res.data
        },
        // find a way to wait the data change 
        async getDepartementPostes(){
            console.log(this.department[0])
            const res = await axios.post("http://localhost/SQL_FINAL_BACK/getAllPosts.php",JSON.stringify({
                "postID": this.department[0],
            }))
            this.associatedDepartementPostes = await res.data
        }
        },
        async mounted(){
            await this.getAllDepartement()
        }
    }
</script>

<style>
</style>