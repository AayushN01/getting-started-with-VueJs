<template>
    <div class="form">
        <h1>Form Component</h1>
        <input type="text" placeholder="Enter name" v-model="userForm.name"><br><br> 
        <input type="email" placeholder="Enter email" v-model="userForm.email"><br><br>
        <input type="password" placeholder="Enter password" v-model="userForm.password"><br><br>
        <p><b>Choose your favourite sports</b></p>
        <label for="football">Football
            <input type="checkbox" id="football" value="football" v-model="userForm.sports">
        </label>
        <label for="basketball">Basketball
            <input type="checkbox" id="basketball" value="basketball" v-model="userForm.sports">
        </label>
        <label for="cricket">Cricket
            <input type="checkbox" id="cricket" value="cricket" v-model="userForm.sports">
        </label>
        <p><b>Select your gender</b></p>
            <label for="male">Male
            <input type="radio" id="male" value="male" v-model="userForm.gender">
        </label>
        <label for="female">Female
            <input type="radio" id="female" value="female" v-model="userForm.gender">
        </label>
        <label for="other">Other
            <input type="radio" id="other" value="other" v-model="userForm.gender">
        </label>
        <p>Select your country</p>
        <select name="" id="country" v-model="userForm.country">
            <option value="" selected disabled>Select your Country</option>
            <option value="Nepal">Nepal</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bangladesh">Bangladesh</option>
        </select>
        <br><br>
        <button v-on:click="submitForm">Submit</button>
    </div>
</template>

<script>
export default {
    name:'FormComponent',
    data(){
        return{
            userForm:{
                name:null,
                email:null,
                password:null,
                sports:[],
                gender:null,
                country:null,
            }
        }
    },methods:{
        submitForm(){
            console.log(this.userForm);
        }
    }
}
</script>

<style>
    .form{
        background-color: #fff;
        margin-top: 25px;
    }
</style>