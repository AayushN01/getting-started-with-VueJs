<template>
    <div class="form-valid">
        <h1>Form Validation in Vue JS</h1>
        <div class="error" v-if="error.length">
            <ul>
                <li v-for="e in error" v-bind:key="e.id">
                    {{e}}
                </li>
            </ul>
        </div>
        <form @submit="signUp">
            <input type="text" name="name" placeholder="Enter Name" v-model="name"> <br>
            <input type="email" name="email" placeholder="Enter Email" v-model="email"><br>
            <input type="password" name="password" placeholder="Enter Password" v-model="password"><br>
            <p>Select gender</p>
            <label for="male">Male
                <input type="radio" id="male" value="male" name="gender" v-model="gender">
            </label>
            <label for="female">Female
                <input type="radio" id="female" value="female" name="gender" v-model="gender">
            </label>
            <label for="other">Other
                <input type="radio" id="other" value="other" name="gender" v-model="gender">
            </label>
            <br><br>
            <select name="country" id="country" v-model="country">
                <option value="" selected disabled>Select your Country</option>
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
                <option value="China">China</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bangladesh">Bangladesh</option>
            </select>
            <br><br>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>

export default {
    name:'FormValidationComponent',
    data(){
        return{
            error:[],
            name:null,
            email:null,
            password:null,
            gender:null,
            country:null,
        }
    },methods:{
        signUp(e){
            e.preventDefault();
            this.error=[];
            if(this.name && this.email && this.password && this.country){
                console.log(this.name,this.email,this.password,this.gender,this.country);
            }
            if(!this.name){
                console.log('name required');
                this.error.push('Enter your name');
            }
            if(!this.email){
                console.log('email required');
                this.error.push('Enter your email');
            }
            if(!this.password){
                console.log('password required');
                this.error.push('Enter your password');
            }
            if(!this.gender){
                console.log('gender required');
                this.error.push('Select your gender');
            }
            if(!this.country){
                console.log('country required');
                this.error.push('Select your country');
            }
        }
    }
}
</script>

<style>
    .form-valid{
        background-color: darkkhaki;
    }
    .error ul li{
        color: red;
    }
</style>