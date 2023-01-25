<template>

    <form action="" method="get" class="formAddEmployees">
        <div class="addEmployees">
            <div class="name">
                <label for="name">Enter your name: </label>
                <input type="text" name="name" id="name" required v-model="name">
            </div>
            <div class="surname">
                <label for="surname">Enter your name: </label>
                <input type="text" name="name" id="name" required>
            </div>
            <div class="gender">
                <label for="gender">Enter your name: </label>
                <input type="text" name="gender" id="gender" required>
            </div>
            <div class="age">
                <label for="age">Enter your age : </label>
                <input type="text" name="age" id="age" required>
            </div>
            <div class="address">
                <label for="address">Enter your name: </label>
                <input type="text" name="address" id="address" required>
            </div>
            <div class="phoneNumber">
                <label for="phone">Enter your name: </label>
                <input type="text" name="phone" id="phone" required>
            </div>
            <div class="birthDate">
                <label for="birthDate">Enter your name: </label>
                <input type="date" name="birthDate" id="birthDate" required>
            </div>
            <div class="birthPlace">
                <label for="birthPlace">Enter your name: </label>
                <input type="text" name="birthPlace" id="birthPlace" required>
            </div>

            <div class="department">
                <label for="department">Enter your department : </label>
                <input type="text" name="name" id="name" required>
            </div>
            <div class="position">
                <label for="position">Enter your position: </label>
                <input type="text" name="name" id="name" required>
            </div>
            <div class="firstDay">
                <label for="firstDay">Enter your name: </label>
                <input type="date" name="firstDay" id="firstDay" required>
            </div>
            <div class="seniority">
                <label for="seniority">Enter your position: </label>
                <input type="text" name="seniority" id="seniority" required>
            </div>
            <div class="insurance">
                <label for="insurance">Enter your name: </label>
                <input type="bool" name="insurance" id="insurance" required>
            </div>
            <div class="socialSecurity">
                <label for="socialSecurity">Enter your name: </label>
                <input type="bool" name="socialSecurity" id="socialSecurity" required>
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

        }
    },
    methods: {

    }
}
</script>

<style>
</style>