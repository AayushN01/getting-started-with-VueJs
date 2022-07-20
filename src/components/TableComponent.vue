<template>
    <div class="table">
        <h1>{{msg}}</h1>
        <table>
            <tr>
                <th>SNo.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact No</th>
                <th>Addres</th>
            </tr>
            <tr v-for="heist in heisters" :key="heist.id">
                <td>{{heist.id}}</td>
                <td>{{heist.name}}</td>
                <td>{{heist.email}}</td>
                <td>{{heist.contact}}</td>
                <td>{{heist.address}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name:'TableComponent',
    props:{
        msg: String,
    },data(){
        return{
            heisters:[
                {id: 1, name:'Professor', email:'professor.heist@email.com',contact: 9876543210, address:'Spain'},
                {id: 2, name:'Berlin', email:'berlin.heist@email.com',contact: 9876543211, address:'Germany'},
                {id: 3, name:'Tokyo', email:'tokyo.heist@email.com',contact: 9876543212, address:'Japan'},
                {id: 4, name:'Denver', email:'denver.heist@email.com',contact: 9876543213, address:'USA'},
                {id: 5, name:'Lisbon', email:'libon.heist@email.com',contact: 9876543214, address:'Portugal'},
                {id: 6, name:'Rio', email:'rio.heist@email.com',contact: 9876543215, address:'Brazil'},
                {id: 7, name:'Helsinki', email:'helsinki.heist@email.com',contact: 9876543216, address:'Finland'},
                {id: 8, name:'Nairobi', email:'nairobi.heist@email.com',contact: 9876543217, address:'Kenya'},
            ]
        }
    }
}
</script>
<style>
.table{
    margin-top: 25px;
    background-color: beige;
    height: 500px;
    padding: 10px;
}
table{
    margin: 0px 350px;
}
table th, table td {
  border: 1px solid;
  padding: 10px;
}
</style>