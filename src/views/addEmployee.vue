<template>
    <form action="" method="get" class="formAddEmployees">
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
            <div class="birthDate">
                <label for="birthDate">Enter your birth date :</label>
                <input type="date" name="birthDate" id="birthDate" required v-model="birthDate">
            </div>
            <div class="birthPlace">
                <label for="birthPlace">Enter your birth place :</label>
                <input type="text" name="birthPlace" id="birthPlace" required v-model="birthPlace">
            </div>

            <div class="department">
                <select name="departement" v-model="department">
                    <option v-for="item,id in allDepartements" >
                        {{ item.id }} {{ item.name }}
                    </option>
                </select>
                {{ department[0] }}
            </div>
            <div class="position">
                <label for="position">Enter your working position :</label>
                <input type="text" name="name" id="name" required v-model="position">
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
                <input type="bool" name="insurance" id="insurance" required v-model="insurance">
            </div>
            <div class="socialSecurity">
                <label for="socialSecurity">Fill in your social security number :</label>
                <input type="text" name="socialSecurity" id="socialSecurity" required v-model="socialSecurity">
            </div>

            <div class="addEmployee">
                <input type="submit" value="Add Employee">
            </div>
        </div>  
    </form>
</template>

<script>
export default{
    data(){
        return {
            name:"",
            surname:"",
            gender:"",
            age:"",
            address:"",
            phoneNumber:"",
            birthDate:"",
            birthPlace:"",
            department:"",
            position:"",
            firstDay:"",
            seniority:"",
            insurance:"",
            socialSecurity:"",
            allDepartements: [],
        }
    },
    methods: {
        async addEmployee(){
            if(!this.name ||!this.surname || !this.gender || !this.age || !this.address || !this.phoneNumber || !this.birthDate || !this.birthPlace || !this.department || !this.position || !this.firstDay || !this.seniority || !this.insurance || !this.socialSecurity){
            this.alertMessage = "Please enter informations into all texts fields"
            }else{
            this.alertMessage = ""
            const post = await fetch("http://localhost/SQL_FINAL_BACK/addDepartement.php",{
                method:"POST",
                headers:{
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": this.name,
                    "surname": this.surname,
                    "gender": this.gender,
                    "age": this.age,
                    "address": this.address,
                    "phoneNumber": this.phoneNumber,
                    "birthDate": this.birthDate,
                    "birthPlace": this.birthPlace,
                    "department": this.department,
                    "position": this.position,
                    "firstDay": this.firstDay,
                    "seniority": this.seniority,
                    "insurance": this.insurance,
                    "socialSecurity": this.socialSecurity
                })
            })
            }
            },
            async getAllDepartement(){
            const res = await fetch("http://localhost/SQL_FINAL_BACK/getAllDepartement.php")
            console.log("hi")
            this.allDepartements = await res.json()
            },

        },
        async mounted(){
            await this.getAllDepartement()
        }
        
    }
</script>

<style>
</style>