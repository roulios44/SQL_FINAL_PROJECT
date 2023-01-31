<template>
    <navBar />
    <h1>Create a new employee</h1>

    <label for="name">Enter your name : </label>
    <input type="text" name="name" id="name" required v-model="name">    

    <label for="surname">Enter your surname : </label>
    <input type="text" name="surname" id="surname" required v-model="surname">  

    <label for="gender">Enter your gender : </label>
    <input type="text" name="gender" id="gender" required v-model="gender">   

    <label for="age">Enter your age : </label>
    <input type="text" name="age" id="age" required v-model="age">    

    <label for="address">Enter your address : </label>
    <input type="text" name="address" id="address" required v-model="address">    

    <label for="phone">Enter your phone number : </label>
    <input type="text" name="phone" id="phone" required v-model="phoneNumber">    

    <label for="email">Enter your email : </label>
    <input type="email" name="email" id="email" required v-model="email">   

    <label for="birthDate">Enter your birth date : </label>
    <input type="date" name="birthDate" id="birthDate" required v-model="birthDate">  

    <label for="birthPlace">Enter your birth place : </label>
    <input type="text" name="birthPlace" id="birthPlace" required v-model="birthPlace">

    <label for="departement">Select Your departement</label>
    <select name="departement" v-model="department">
        <option v-for="item,id in allDepartements">
            {{ item.id }} {{ item.name }}
        </option>
    </select>

    <div v-if="associatedDepartementPostes.length>0">
        <label for="postes">Select Your Jobs ( select departement first )</label>
        <select name="postes" v-model="poste">
            <option v-for="post in associatedDepartementPostes">
                {{ post.id }} {{ post.name }}
            </option>
        </select>
    </div>
    <p v-else>There is no working position added to the database, please create one for this department.</p>
    
    <label for="firstDay">Enter your first day of work in this company : </label>
    <input type="date" name="firstDay" id="firstDay" required v-model="firstDay">

    <label for="seniority">Enter your seniority in this company : </label>
    <input type="text" name="seniority" id="seniority" required v-model="seniority">

    <fieldset>
        <legend for="insurance">Do you benefit of the the company insurance ?</legend>
        <label for="yes">
            <input type="radio" v-model="insurance" v-bind:value="true">Yes
        </label>
        <label for="no">
            <input type="radio" v-model="insurance" v-bind:value="false">No
        </label>
    </fieldset>

    <div class="socialSecurity">
        <label for="socialSecurity">Fill in your social security number : </label>
        <input type="text" name="socialSecurity" id="socialSecurity" required v-model="socialSecurity">
    </div>

    <button id="btnSubmit" v-on:click="addEmployee()">Add Employee</button>
    {{ alertMessage }}
</template>

<script type="text/javascript">
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
        navBar
    },
    methods: {
        async addEmployee(){
            if(!this.name || !this.email ||!this.surname || !this.gender || !this.age || !this.address || !this.phoneNumber || !this.birthDate || !this.birthPlace || !this.department || !this.poste || !this.firstDay || !this.seniority || !this.insurance || !this.socialSecurity){
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
                    "position": this.poste,
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
        async getDepartementPostes(departementID){
            const res = await axios.post("http://localhost/SQL_FINAL_BACK/getAllPosts.php",JSON.stringify({
                "postID": departementID,
            }))
            this.associatedDepartementPostes = await res.data
        },
    },
    watch:{
        department : function(val){
            this.getDepartementPostes(val[0])
        }
    },
    async mounted(){
        await this.getAllDepartement()
    }
    }
</script>
<style>
</style>